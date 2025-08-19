import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { App } from './App'


//Инициализация клиента QueryClient
//свежие данные в 5 минут
//удаление устаревших данных через 30 минут
//повторы запросов 1 раз
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, 
      gcTime: 1000 * 60 * 30,
      retry: 1
    }
  }
})

//проверка на наличие элемента #root
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Не найден элемент #root для монтирования приложения')
}

// В данном случае ничего страшного, что обернул в provider здесь, 
// но лучше создать отделю папку providers, в которой будет корневой файл Provider.tsx, 
// в котором и будут содержатсться все провайдеры приложения
createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)
