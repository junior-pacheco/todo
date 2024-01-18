import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import TodoProvider from './todo/context/TodoProvider.jsx'
        

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <BrowserRouter>
        <App d/>
      </BrowserRouter>
    </TodoProvider>
  </React.StrictMode>,
)
