import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './pages/Home'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/:path' Component={Home} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
