import ProductCard from './ProductCard'
import ProductRow from './ProductRow'

function ProductList({ products, view = 'griglia' }) {
  if (view === 'lista') {
    return (
      <div className="flex flex-col">
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-elemento sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
