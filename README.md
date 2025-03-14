This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Debugging Utilities

This project includes a comprehensive debugging system that helps developers during development:

### Debug Panel (`src/components/debug/DebugPanel.js`)

The Debug Panel provides a visual interface for monitoring and debugging the application:

- **Console Logging**: Captures and displays console logs for easy monitoring
- **Network Monitoring**: Tracks fetch/XHR requests and shows status and duration
- **Firestore Stats**: Displays collection statistics for Firebase data
- **Performance Metrics**: Shows page load time and memory usage
- **Debug Settings**: Customize log levels and toggle debug features

To access the Debug Panel, run in development mode - it's automatically enabled in the Dashboard component.

### Error Boundary (`src/components/debug/ErrorBoundary.js`)

The Error Boundary catches React errors to prevent the entire app from crashing:

- **Graceful Error Handling**: Shows a fallback UI when errors occur
- **Error Logging**: Logs errors to the debug utility
- **Recovery Options**: Provides a "Try again" button to reset the error state

Usage:
```jsx
<ErrorBoundary fallback={<CustomErrorComponent />}>
  <YourComponent />
</ErrorBoundary>
```

### Debug Utility (`src/utils/debugUtils.js`)

The Debug utility class provides centralized logging and debugging functionality:

```javascript
// Enable debugging (development only)
Debug.toggleDebugging(true);

// Log with different levels
Debug.debug('MODULE_NAME', 'Debug message', optionalData);
Debug.info('MODULE_NAME', 'Info message', optionalData);
Debug.warn('MODULE_NAME', 'Warning message', optionalData);
Debug.error('MODULE_NAME', 'Error message', optionalData);

// Measure performance
const result = await Debug.measurePerformance(
  'CATEGORY', 
  'operationName', 
  async () => {
    // Your code to measure
    return data;
  }
);

// Track errors
Debug.trackError('CATEGORY', error, contextData);
```

### Firestore Debug Tools (`src/services/debugFirestore.js`)

Utilities for testing and debugging Firestore:

- **Collection Statistics**: Check document counts across collections
- **Sample Data Generation**: Populate collections with test data
- **Data Clearing**: Remove test data when no longer needed

These tools are accessible through the Debug Panel or can be called programmatically.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 404 Page

The 404 page is located in the `pages/404.js` file.

# Theme Context

The theme context is located in the `src/context/ThemeContext.js` file.

# Layout

The layout is located in the `src/components/Layout.js` file.

# Global Styles

The global styles are located in the `styles/globals.css` file.

# Required Indexes

The following composite indexes are needed for your application:

firebase firestore:indexes:create --collection searchHistory --fields "userId:ascending,timestamp:descending"
firebase firestore:indexes:create --collection notes --fields "userId:ascending,createdAt:descending"
firebase firestore:indexes:create --collection chatSessions --fields "userId:ascending,updatedAt:descending"
firebase firestore:indexes:create --collection chatMessages --fields "sessionId:ascending,timestamp:ascending"

searchHistory collection:
- userId (Ascending)
- timestamp (Descending)

notes collection:
- userId (Ascending)
- createdAt (Descending)

chatSessions collection:
- userId (Ascending)
- updatedAt (Descending)

chatMessages collection:
- sessionId (Ascending)
- timestamp (Ascending)

