/**
 * Detects the user's platform and returns appropriate app store link
 * @returns {Object} Platform info and app store URL
 */
export const detectPlatform = () => {
  if (typeof window === 'undefined') {
    return {
      platform: 'android',
      url: 'https://play.google.com/store/apps/details?id=pk.digit.aiwakeel'
    };
  }

  const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return {
      platform: 'ios',
      url: 'https://testflight.apple.com/join/ZVgHgqF7'
    };
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return {
      platform: 'android',
      url: 'https://play.google.com/store/apps/details?id=pk.digit.aiwakeel'
    };
  }

  // Web app temporarily disabled — default to Android
  // return { platform: 'web', url: 'https://app.wakeel.org' };
  return {
    platform: 'android',
    url: 'https://play.google.com/store/apps/details?id=pk.digit.aiwakeel'
  };
};

/**
 * Opens the appropriate app store based on user's platform
 */
export const openPlatformAppStore = () => {
  const { url } = detectPlatform();
  window.open(url, '_blank');
};

// Export store URLs as constants
export const APP_STORE_LINKS = {
  ios: 'https://testflight.apple.com/join/ZVgHgqF7',
  android: 'https://play.google.com/store/apps/details?id=pk.digit.aiwakeel',
  // web: 'https://app.wakeel.org' // temporarily disabled
};
