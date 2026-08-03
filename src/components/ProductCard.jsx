import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const { id, category, name, description, price, images } = product
  const image = images?.[0]

  return (
    <Link
      to={`/prodotto/${id}`}
      className="group flex flex-col border border-bordo bg-crema transition-colors hover:border-oro"
    >
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-attesa">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-etichetta uppercase tracking-[0.28em] text-scuro/40">
            In arrivo
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-elemento">
        {category && (
          <span className="text-etichetta uppercase tracking-[0.28em] text-scuro/40">
            {category}
          </span>
        )}
        <h3 className="font-display text-voce text-scuro">{name}</h3>
        <p className="flex-1 text-corpo-minore text-scuro/70">{description}</p>
        <p className="font-display text-voce text-oro">
          {price.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard
