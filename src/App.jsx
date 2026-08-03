import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prodotto/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
