import './App.css'
import {  QueryClient,
   QueryClientProvider,
 } from 'react-query'

 const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <main>
      React ⚛️ + Vite ⚡🌀
    </main>
    </QueryClientProvider>
  )
}
