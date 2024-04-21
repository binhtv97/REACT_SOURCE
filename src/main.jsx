import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

import { AppProvider } from './context/AppContext.jsx';

import { ErrorBoundaries } from './components/ErrorBoundaries.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <ErrorBoundaries>
        <App />
      </ErrorBoundaries>
    </AppProvider>
  </BrowserRouter>
)
