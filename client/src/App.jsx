import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
