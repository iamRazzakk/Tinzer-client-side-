import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import myCreateRouter from './Components/Router/Router'
import './index.css'
import AuthProvider from './Components/Shared/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-Poppins'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={myCreateRouter}>
          </RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode >
)
