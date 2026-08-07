import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'
import HomePage from './components/HomePage/HomePage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import AboutPage from './components/AboutPage/AboutPage'
import PhotobookPage from './components/PhotobookPage/PhotobookPage'
import CVPage from './components/CVPage/CVPage'
import ProjectDetailPage from './components/ProjectDetailPage/ProjectDetailPage'
import ArticlePage from './components/ArticlePage/ArticlePage'
import { ARTICLES } from './data/articles'

const gigEconomyArticle = ARTICLES.find((item) => item.id === 'gig-economy-immigrants')
const faithFloodingArticle = ARTICLES.find((item) => item.id === 'faith-leaders-flooding')
const pipelineDiversityArticle = ARTICLES.find((item) => item.id === 'tech-pipeline-diversity')
const ruralAmericaArticle = ARTICLES.find((item) => item.id === 'rural-america-smart-technology')
const nameMeaningArticle = ARTICLES.find((item) => item.id === 'my-name-is-not-an-inconvenience')

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
          <Route path="/work/gig-economy-immigrants" element={<ArticlePage article={gigEconomyArticle} />} />
          <Route path="/work/faith-leaders-flooding" element={<ArticlePage article={faithFloodingArticle} />} />
          <Route path="/work/tech-pipeline-diversity" element={<ArticlePage article={pipelineDiversityArticle} />} />
          <Route path="/work/rural-america-smart-technology" element={<ArticlePage article={ruralAmericaArticle} />} />
          <Route path="/work/my-name-is-not-an-inconvenience" element={<ArticlePage article={nameMeaningArticle} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/photobook" element={<PhotobookPage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
