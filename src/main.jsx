import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import myCreateRouter from './Components/Router/Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRouter}>
      <div className='font-Poppins'>
      </div>
    </RouterProvider>
  </React.StrictMode >
)
