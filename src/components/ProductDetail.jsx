import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductGallery from './ProductGallery'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find((item) => String(item.id) === id)

  if (!product) {
    return (
      <main className="flex h-dvh flex-col items-center justify-center gap-elemento bg-crema px-gutter text-center">
        <p className="font-display text-titolo-medio text-scuro">
          Prodotto non trovato
        </p>
        <Link
          to="/"
          className="text-etichetta uppercase tracking-[0.28em] text-oro"
        >
          Torna all'elenco
        </Link>
      </main>
    )
  }

  const { category, name, description, price, images } = product

  return (
    <main className="flex h-dvh flex-col overflow-hidden bg-crema">
      <div className="min-h-0 flex-1 overflow-hidden bg-attesa">
        <ProductGallery images={images ?? []} name={name} />
      </div>

      <div className="mx-auto flex w-full max-w-xl flex-shrink-0 flex-col gap-2 px-gutter py-elemento">
        {category && (
          <span className="text-etichetta uppercase tracking-[0.28em] text-scuro/40">
            {category}
          </span>
        )}

        <h1 className="font-display text-titolo-medio text-scuro">{name}</h1>

        <p className="line-clamp-3 text-corpo text-scuro/70">{description}</p>

        <p className="font-display text-cifra text-oro">
          {price.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
        </p>

        <Link
          to="/"
          className="text-etichetta uppercase tracking-[0.28em] text-scuro/40 transition-colors hover:text-oro"
        >
          Tutti i prodotti rilevati
        </Link>
      </div>
    </main>
  )
}

export default ProductDetail
