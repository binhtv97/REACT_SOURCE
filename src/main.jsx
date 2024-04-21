import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { AppProvider } from './context/AppContext.jsx';

import { ErrorBoundaries } from './components/ErrorBoundaries.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <ErrorBoundaries>
      <App />
    </ErrorBoundaries>
  </AppProvider>
)
