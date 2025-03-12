import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'


const queryClient = new QueryClient();
import Router from './routers/Router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}> 
          <RouterProvider router={Router}/> 
    </QueryClientProvider>
  </StrictMode>,
)
