import {BrowserRouter as Router, Routes, Route} from 'react-router'

import Home from './pages/Home'
import Card from './pages/Card'
import Calculadora from './pages/Calculadora'
import Todolist from './pages/Todolist'
import Estudiantes from './pages/Estudiantes'
import Nav from './components/Nav'

function App() {

  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/calculadora" element={<Calculadora/>}/>
        <Route path="/todolist" element={<Todolist/>}/>
        <Route path="/estudiantes" element={<Estudiantes/>}/>
      </Routes>
    </Router>

      
    </>
  )
}

export default App
