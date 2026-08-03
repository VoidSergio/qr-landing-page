import { useState } from 'react'
import ProductList from './ProductList'
import ViewToggle from './ViewToggle'
import { products } from '../data/products'

const SCOPRI_RILIEVO_URL = 'https://rilievocontract.it'

function Home() {
  const [view, setView] = useState('griglia')

  return (
    <main className="min-h-screen bg-crema px-gutter pb-12 pt-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-blocco">
          <div className="flex items-start justify-between gap-elemento">
            <img src="/rilievo-gold.png" alt="Rilievo Contract" className="h-12 w-auto" />

            <a
              href={SCOPRI_RILIEVO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 border border-bordo px-4 py-2 text-etichetta uppercase tracking-[0.28em] text-scuro transition-colors duration-500 hover:border-oro hover:bg-oro"
            >
              Scopri Rilievo
            </a>
          </div>

          <p className="mt-blocco max-w-prose font-display text-dichiarazione text-scuro">
            Questi sono i prodotti di questo spazio.
          </p>
          <p className="mt-4 max-w-prose text-corpo text-scuro/70">
            Il tavolo, la sedia su cui sei seduto, ogni pezzo
            rilevato qui ha la sua scheda: materiali, misure, finiture.
          </p>

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
