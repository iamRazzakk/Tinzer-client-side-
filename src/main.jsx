import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import myCreateRouter from './Components/Router/Router'
import './index.css'
import AuthProvider from './Components/Shared/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-Poppins'>
      <AuthProvider>
        <RouterProvider router={myCreateRouter}>
        </RouterProvider>
      </AuthProvider>
    </div>
  </React.StrictMode >
)
