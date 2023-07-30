import './App.css'
import Footer from './components/Footer'
// import Nav from './components/Nav';
import WorldAnimation from './components/WorldAnimation'
import Home from './pages/Home'

function App () {
  return (
    <div className='App'>
      {/*      <Nav/>       */}
      <WorldAnimation />
      <Home />
      <Footer />
    </div>
  )
}

export default App
