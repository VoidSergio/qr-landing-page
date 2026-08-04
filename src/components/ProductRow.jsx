import { Link } from 'react-router-dom'

function ProductRow({ product }) {
  const { id, category, name, price, images } = product
  const image = images?.[0]

  return (
    <Link
      to={`/prodotto/${id}`}
      className="flex items-center gap-elemento border-b border-bordo py-3 transition-colors hover:border-oro"
    >
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden bg-attesa p-1.5">
        {image && <img src={image} alt={name} className="h-full w-full object-contain" />}
      </div>

      <div className="min-w-0 flex-1">
        {category && (
          <span className="block text-etichetta uppercase tracking-[0.28em] text-scuro/40">
            {category}
          </span>
        )}
        <h3 className="truncate font-display text-voce text-scuro">{name}</h3>
      </div>

      <p className="flex-shrink-0 font-display text-voce text-oro">
        {price.toLocaleString('it-IT', {
          style: 'currency',
          currency: 'EUR',
          maximumFractionDigits: 0,
        })}
      </p>
    </Link>
  )
}

export default ProductRow
