import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

import { store } from './store';

import { AppProvider } from './context/AppContext.jsx';

import { ErrorBoundaries } from './components/ErrorBoundaries.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppProvider>
        <ErrorBoundaries>
          <App />
        </ErrorBoundaries>
      </AppProvider>
    </BrowserRouter>
  </Provider>
)
