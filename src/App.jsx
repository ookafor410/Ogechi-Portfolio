import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'
import HomePage from './components/HomePage/HomePage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import AboutPage from './components/AboutPage/AboutPage'
import PhotobookPage from './components/PhotobookPage/PhotobookPage'
import ProjectDetailPage from './components/ProjectDetailPage/ProjectDetailPage'

function App() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<ProjectsPage />} />
          <Route path="/work/:projectId" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/photobook" element={<PhotobookPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
