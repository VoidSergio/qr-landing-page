import { useState } from 'react'
import ProductList from './ProductList'
import ViewToggle from './ViewToggle'
import LanguageToggle from './LanguageToggle'
import { products } from '../data/products'
import { useLanguage } from '../i18n/languageContext'

const SCOPRI_RILIEVO_URL = 'https://rilievocontract.it'

function Home() {
  const [view, setView] = useState('griglia')
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-crema px-gutter pb-12 pt-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-blocco">
          <div className="flex items-start justify-between gap-elemento">
            <img src="/rilievo-gold.png" alt="Rilievo Contract" className="h-12 w-auto" />

            <div className="flex flex-shrink-0 items-start gap-3">
              <LanguageToggle />
              <a
                href={SCOPRI_RILIEVO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 border border-bordo px-4 py-2 text-etichetta uppercase tracking-[0.28em] text-scuro transition-colors duration-500 hover:border-oro hover:bg-oro"
              >
                {t('discoverRilievo')}
              </a>
            </div>
          </div>

          <p className="mt-blocco max-w-prose font-display text-dichiarazione text-scuro">
            {t('heroTitle')}
          </p>
          <p className="mt-4 max-w-prose text-corpo text-scuro/70">{t('heroSubtitle')}</p>

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
