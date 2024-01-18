import { Navigate, Route, Routes } from 'react-router-dom'
import CreateTodo from './todo/page/CreateTodo'
import ListTodo from './todo/page/ListTodo'
import Navbar from './ui/components/Navbar'

function App() {

  return (
    <div className="bg-slate-900 text-white h-screen w-screen">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ListTodo/>} />
        <Route path='create' element={<CreateTodo/>} />
        <Route path='/*' element={<Navigate to={'/'}/>} />
      </Routes>
    </div>
  )
}

export default App
