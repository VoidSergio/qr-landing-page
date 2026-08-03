import ProductCard from './ProductCard'

function ProductList({ products }) {
  return (
    <div className="grid grid-cols gap-elemento sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
