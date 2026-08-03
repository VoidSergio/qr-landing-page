import ProductList from './components/ProductList'
import { products } from './data/products'

function App() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6">
      <header className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Prodotti scansionati</h1>
      </header>

      <ProductList products={products} />
    </main>
  )
}

export default App
