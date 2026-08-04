import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodotto/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
