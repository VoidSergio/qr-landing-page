import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import { products } from './data/products'

function Home() {
  return (
    <main className="min-h-screen bg-crema px-gutter py-sezione">
      <header className="mb-blocco">
        <span translate="no" className="text-etichetta uppercase tracking-[0.28em] text-oro">
          Rilievo Contract
        </span>
        <h1 className="mt-2 font-display text-titolo-medio text-scuro">
          Prodotti rilevati
        </h1>
      </header>

      <ProductList products={products} />
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prodotto/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
