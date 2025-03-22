import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import TestPage from './pages/TestPage/TestPage'
const theme = 'light-theme'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init({
      duration: 600
  })
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/test-page' element={<TestPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
