import ProductCard from './ProductCard'

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 gap-elemento sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
