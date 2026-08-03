function ProductCard({ product }) {
  const { name, description, price, image } = product

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex aspect-square items-center justify-center bg-gray-100">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm text-gray-400">Immagine non disponibile</span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="flex-1 text-sm text-gray-500">{description}</p>
        <p className="mt-2 font-semibold text-gray-900">
          {price.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
