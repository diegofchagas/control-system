import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { DataContextProvider } from './context/DataContext.tsx'
import { GlobalStyle } from './globalStyle.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataContextProvider>
    <App />
    <GlobalStyle/>
    </DataContextProvider>
  </React.StrictMode>,
)
