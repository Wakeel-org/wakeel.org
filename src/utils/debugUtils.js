/**
 * Debug Utility
 * 
 * A centralized debugging utility that provides:
 * - Console logging with levels (debug, info, warn, error)
 * - Performance measurement
 * - Feature flags for toggling debug features
 * - Browser persistence for debug settings
 */

// Log levels in order of verbosity
const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  NONE: 4
};

class Debug {
  static _instance = null;
  
  // Debug state
  _enabled = false;
  _logLevel = LOG_LEVELS.DEBUG;
  
  // Feature flags
  FEATURES = {
    CONSOLE_CAPTURE: true,
    NETWORK_MONITORING: true,
    PERFORMANCE_TRACKING: true,
    ERROR_TRACKING: true,
    FIREBASE_DEBUGGING: true
  };
  
  // Performance metrics
  _metrics = {
    // Category -> { operation -> [timings] }
    performance: {},
    // Recent errors
    errors: []
  };
  
  constructor() {
    // Load debug settings from localStorage
    this._loadSettings();
    
    // Set up global error handler
    if (typeof window !== 'undefined') {
      window.addEventListener('error', this._handleGlobalError.bind(this));
      window.addEventListener('unhandledrejection', this._handlePromiseRejection.bind(this));
    }
  }
  
  /**
   * Get the singleton instance
   */
  static getInstance() {
    if (!Debug._instance) {
      Debug._instance = new Debug();
    }
    return Debug._instance;
  }
  
  /**
   * Check if debugging is enabled
   */
  static isEnabled() {
    return Debug.getInstance()._enabled;
  }
  
  /**
   * Enable or disable debugging
   */
  static toggleDebugging(enable = true) {
    const instance = Debug.getInstance();
    instance._enabled = enable;
    instance._saveSettings();
    
    // Log the change
    if (enable) {
      instance._rawLog('DEBUG', 'Debugging enabled');
    } else {
      instance._rawLog('DEBUG', 'Debugging disabled');
    }
    
    return enable;
  }
  
  /**
   * Set the minimum log level
   */
  static setLogLevel(level) {
    if (!LOG_LEVELS.hasOwnProperty(level)) {
      throw new Error(`Invalid log level: ${level}`);
    }
    
    const instance = Debug.getInstance();
    instance._logLevel = LOG_LEVELS[level];
    instance._saveSettings();
    
    instance._rawLog('DEBUG', `Log level set to ${level}`);
    
    return level;
  }
  
  /**
   * Reset all debug settings to defaults
   */
  static resetDebugSettings() {
    const instance = Debug.getInstance();
    
    instance._enabled = false;
    instance._logLevel = LOG_LEVELS.DEBUG;
    
    instance.FEATURES = {
      CONSOLE_CAPTURE: true,
      NETWORK_MONITORING: true,
      PERFORMANCE_TRACKING: true,
      ERROR_TRACKING: true,
      FIREBASE_DEBUGGING: true
    };
    
    instance._saveSettings();
    instance._rawLog('DEBUG', 'Debug settings reset to defaults');
  }
  
  /**
   * Debug level log
   */
  static debug(module, message, ...args) {
    Debug._log('DEBUG', module, message, ...args);
  }
  
  /**
   * Info level log
   */
  static info(module, message, ...args) {
    Debug._log('INFO', module, message, ...args);
  }
  
  /**
   * Warning level log
   */
  static warn(module, message, ...args) {
    Debug._log('WARN', module, message, ...args);
  }
  
  /**
   * Error level log
   */
  static error(module, message, ...args) {
    Debug._log('ERROR', module, message, ...args);
  }
  
  /**
   * Log with level
   */
  static _log(level, module, message, ...args) {
    const instance = Debug.getInstance();
    
    // Check if we should log at this level
    if (!instance._enabled || LOG_LEVELS[level] < instance._logLevel) {
      return;
    }
    
    // Format the log message
    const formattedMessage = `[${module}] ${message}`;
    
    // Log to console with the appropriate method
    instance._rawLog(level, formattedMessage, ...args);
  }
  
  /**
   * Raw log to console
   */
  _rawLog(level, message, ...args) {
    switch (level) {
      case 'DEBUG':
        console.debug(message, ...args);
        break;
      case 'INFO':
        console.info(message, ...args);
        break;
      case 'WARN':
        console.warn(message, ...args);
        break;
      case 'ERROR':
        console.error(message, ...args);
        break;
      default:
        console.log(message, ...args);
    }
  }
  
  /**
   * Measure performance of a function
   * @param {string} category - Category of the operation (e.g., 'FIREBASE', 'UI')
   * @param {string} operation - Name of the operation being measured
   * @param {Function} fn - The function to measure
   * @returns {any} - The result of the function
   */
  static async measurePerformance(category, operation, fn) {
    const instance = Debug.getInstance();
    
    if (!instance._enabled || !instance.FEATURES.PERFORMANCE_TRACKING) {
      return await fn();
    }
    
    const start = performance.now();
    let result;
    let error = null;
    
    try {
      result = await fn();
    } catch (e) {
      error = e;
      throw e;
    } finally {
      const end = performance.now();
      const duration = end - start;
      
      // Record the timing
      if (!instance._metrics.performance[category]) {
        instance._metrics.performance[category] = {};
      }
      
      if (!instance._metrics.performance[category][operation]) {
        instance._metrics.performance[category][operation] = [];
      }
      
      // Keep only the last 20 measurements
      const measurements = instance._metrics.performance[category][operation];
      if (measurements.length >= 20) {
        measurements.shift();
      }
      
      measurements.push({
        timestamp: new Date().toISOString(),
        duration,
        error: error ? error.message : null
      });
      
      // Log the performance
      if (error) {
        instance._rawLog('WARN', 
          `[PERF] ${category}:${operation} - ${duration.toFixed(2)}ms - Failed: ${error.message}`
        );
      } else {
        instance._rawLog('DEBUG', 
          `[PERF] ${category}:${operation} - ${duration.toFixed(2)}ms`
        );
      }
    }
    
    return result;
  }
  
  /**
   * Synchronous version of measurePerformance
   */
  static measurePerformanceSync(category, operation, fn) {
    const instance = Debug.getInstance();
    
    if (!instance._enabled || !instance.FEATURES.PERFORMANCE_TRACKING) {
      return fn();
    }
    
    const start = performance.now();
    let result;
    let error = null;
    
    try {
      result = fn();
    } catch (e) {
      error = e;
      throw e;
    } finally {
      const end = performance.now();
      const duration = end - start;
      
      // Record the timing
      if (!instance._metrics.performance[category]) {
        instance._metrics.performance[category] = {};
      }
      
      if (!instance._metrics.performance[category][operation]) {
        instance._metrics.performance[category][operation] = [];
      }
      
      // Keep only the last 20 measurements
      const measurements = instance._metrics.performance[category][operation];
      if (measurements.length >= 20) {
        measurements.shift();
      }
      
      measurements.push({
        timestamp: new Date().toISOString(),
        duration,
        error: error ? error.message : null
      });
      
      // Log the performance
      if (error) {
        instance._rawLog('WARN', 
          `[PERF] ${category}:${operation} - ${duration.toFixed(2)}ms - Failed: ${error.message}`
        );
      } else {
        instance._rawLog('DEBUG', 
          `[PERF] ${category}:${operation} - ${duration.toFixed(2)}ms`
        );
      }
    }
    
    return result;
  }
  
  /**
   * Get performance metrics
   */
  static getPerformanceMetrics() {
    return Debug.getInstance()._metrics.performance;
  }
  
  /**
   * Get recent errors
   */
  static getRecentErrors() {
    return Debug.getInstance()._metrics.errors;
  }
  
  /**
   * Clear all performance metrics
   */
  static clearPerformanceMetrics() {
    Debug.getInstance()._metrics.performance = {};
  }
  
  /**
   * Track a custom error
   */
  static trackError(category, error, context = {}) {
    const instance = Debug.getInstance();
    
    if (!instance._enabled || !instance.FEATURES.ERROR_TRACKING) {
      return;
    }
    
    // Create error object
    const errorObj = {
      timestamp: new Date().toISOString(),
      category,
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : null,
      context
    };
    
    // Add to errors list (max 50)
    const errors = instance._metrics.errors;
    if (errors.length >= 50) {
      errors.shift();
    }
    errors.push(errorObj);
    
    // Log the error
    instance._rawLog('ERROR', `[${category}] Error: ${errorObj.message}`, errorObj);
    
    return errorObj;
  }
  
  /**
   * Handle global window errors
   */
  _handleGlobalError(event) {
    if (!this._enabled || !this.FEATURES.ERROR_TRACKING) {
      return;
    }
    
    const { message, filename, lineno, colno, error } = event;
    
    Debug.trackError('GLOBAL', error || message, {
      type: 'window.onerror',
      location: `${filename}:${lineno}:${colno}`
    });
  }
  
  /**
   * Handle unhandled promise rejections
   */
  _handlePromiseRejection(event) {
    if (!this._enabled || !this.FEATURES.ERROR_TRACKING) {
      return;
    }
    
    Debug.trackError('PROMISE', event.reason, {
      type: 'unhandledrejection'
    });
  }
  
  /**
   * Save debug settings to localStorage
   */
  _saveSettings() {
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }
    
    try {
      const settings = {
        enabled: this._enabled,
        logLevel: this._logLevel,
        features: this.FEATURES
      };
      
      localStorage.setItem('debug_settings', JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save debug settings', e);
    }
  }
  
  /**
   * Load debug settings from localStorage
   */
  _loadSettings() {
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }
    
    try {
      const settingsJson = localStorage.getItem('debug_settings');
      if (settingsJson) {
        const settings = JSON.parse(settingsJson);
        
        this._enabled = settings.enabled;
        this._logLevel = settings.logLevel;
        
        // Merge features (to handle added/removed features)
        if (settings.features) {
          this.FEATURES = {
            ...this.FEATURES,
            ...settings.features
          };
        }
      }
    } catch (e) {
      console.error('Failed to load debug settings', e);
    }
  }
}

// Initialize the instance
Debug.getInstance();

export default Debug; 