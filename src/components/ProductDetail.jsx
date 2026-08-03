import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find((item) => String(item.id) === id)

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-elemento bg-crema px-gutter text-center">
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

  const { category, name, description, price, image } = product

  return (
    <main className="min-h-screen bg-crema pb-sezione">
      <div className="flex aspect-square items-center justify-center overflow-hidden bg-attesa">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-etichetta uppercase tracking-[0.28em] text-scuro/40">
            In arrivo
          </span>
        )}
      </div>

      <div className="flex flex-col gap-elemento px-gutter pt-blocco">
        {category && (
          <span className="text-etichetta uppercase tracking-[0.28em] text-scuro/40">
            {category}
          </span>
        )}

        <h1 className="font-display text-titolo-medio text-scuro">{name}</h1>

        <p className="text-corpo text-scuro/70">{description}</p>

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
