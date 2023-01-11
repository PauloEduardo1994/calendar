import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from '@siakit/core'
import { DialogProvider } from '@siakit/dialog'
import { LoadingProvider } from '@siakit/loading'
import { ToastProvider } from '@siakit/toast'

import { App } from './App'
// import ContextWrapper from './context/ContextWrapper.js'
// import reportWebVitals from './reportWebVitals'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider>
    <ToastProvider>
      <DialogProvider>
        <LoadingProvider>
          {/* <ContextWrapper> */}
          <App />
          {/* </ContextWrapper> */}
        </LoadingProvider>
      </DialogProvider>
    </ToastProvider>
  </Provider>,
)

// reportWebVitals()
