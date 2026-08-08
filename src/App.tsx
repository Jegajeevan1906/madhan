import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Layout } from "./components/Layout"
import ScrollToTop from "./components/ScrollToTop"
import { ThemeProvider } from "./components/ThemeProvider"
import { Lightbox } from "./components/Lightbox"

const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })))
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })))
const Services = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })))
const Projects = lazy(() => import("./pages/Projects").then(m => ({ default: m.Projects })))
const Blog = lazy(() => import("./pages/Blog").then(m => ({ default: m.Blog })))
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })))

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-gold"></div></div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="projects" element={<Projects />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
      <Lightbox />
    </ThemeProvider>
  )
}

export default App
