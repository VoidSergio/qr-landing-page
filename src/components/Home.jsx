import { useState } from 'react'
import ProductList from './ProductList'
import ViewToggle from './ViewToggle'
import { products } from '../data/products'

function Home() {
  const [view, setView] = useState('griglia')

  return (
    <main className="min-h-screen bg-crema px-gutter pb-12 pt-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-blocco">
          <span translate="no" className="text-etichetta uppercase tracking-[0.28em] text-oro">
            Rilievo Contract
          </span>
          <h1 className="mt-6 font-display text-titolo-medio text-scuro">
            Prodotti rilevati
          </h1>

          <div className="mt-elemento">
            <ViewToggle view={view} onChange={setView} />
          </div>
        </header>

        <ProductList products={products} view={view} />
      </div>
    </main>
  )
}

export default Home
