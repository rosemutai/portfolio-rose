import './index.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

function App() {

  return (
    <div className="App w-full creen bg-[#E5E5E5]/30 m-0">
      <NavBar />
      <Header />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}

export default App
