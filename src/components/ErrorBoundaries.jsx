import React from 'react';
import { ErrorBoundary } from "react-error-boundary";

export function ErrorBoundaries({ children }) {
  const [boundaryKey, setBoundaryKey] = React.useState(0);
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  const syncLog = (message, componentStack) => {
    const datetime = new Date().toUTCString();
    const params = {
      level: 'ERROR',
      datetime,
      os: window.navigator.userAgentData.platform,
      user: {
        name: 'tony',
        email: 'tony@gmail.com'
      },
      error: JSON.stringify(message),
      componentStack: JSON.stringify(componentStack),
      location: window.location.href
    }

    if(!window.navigator.onLine) {
      const errorLocalstore = JSON.parse(window.localStorage.getItem('error_log')) || {}
      window.localStorage.setItem('error_log', JSON.stringify({
        ...errorLocalstore,
        [datetime]: params
      }))
    }
  }

  React.useEffect(() => {
    window.onerror = (event, _, __, ___, error) => {
      syncLog(event, error?.stack)
    }
  }, [])

  function fallBackUI() {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
      </div>
    )
  }

  return (
    <ErrorBoundary
      resetKeys={[boundaryKey]}
      FallbackComponent={fallBackUI}
      onReset={() => setBoundaryKey(prevState => prevState + 1)}
    >
      {children}
    </ErrorBoundary>
  );
}
