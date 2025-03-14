import React, { Component } from 'react';
import Debug from '../../utils/debugUtils';

/**
 * Error Boundary Component
 * 
 * This component catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the whole app.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to the debug utility
    Debug.trackError('REACT', error, { 
      componentStack: errorInfo.componentStack,
      component: this.props.componentName || 'Unknown'
    });
    
    this.setState({
      errorInfo: errorInfo
    });
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { fallback, children } = this.props;
    
    if (hasError) {
      // You can render any custom fallback UI
      if (fallback) {
        return typeof fallback === 'function' 
          ? fallback(error, errorInfo, this.resetError)
          : fallback;
      }
      
      // Default error UI
      return (
        <div className="p-4 border border-red-300 rounded-md bg-red-50 dark:bg-red-900/20 dark:border-red-800">
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-2">
            Something went wrong
          </h2>
          <details className="whitespace-pre-wrap text-sm">
            <summary className="text-red-600 dark:text-red-300 cursor-pointer mb-2">
              Show error details
            </summary>
            <pre className="mt-2 p-2 bg-red-100 dark:bg-red-900/30 rounded overflow-auto text-xs text-red-700 dark:text-red-300">
              {error && error.toString()}
              {errorInfo && `\n\nComponent Stack:\n${errorInfo.componentStack}`}
            </pre>
          </details>
          <button
            onClick={this.resetError}
            className="mt-3 px-3 py-1.5 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors"
          >
            Try again
          </button>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary; 