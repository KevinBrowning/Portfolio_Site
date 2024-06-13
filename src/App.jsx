import HomePage from "./components/HomePage"
import { Routes, Route } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'
import NavBar from './components/NavBar'
import "/src/App.css"

function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </>
  )
}

export default App
