import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { QueryClient,QueryClientProvider } from 'react-query'
import { Toaster } from "@/components/ui/toaster"

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <App />
    </QueryClientProvider>
      <Toaster />
    
  </StrictMode>,
)
