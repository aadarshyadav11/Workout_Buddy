import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'


// pages and components imports
import Navbar from './components/Navbar'
import Home from './pages/Home'



function App() {

  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
