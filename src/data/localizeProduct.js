export function localizeProduct(product, language) {
  if (language === 'en' && product.en) {
    return { ...product, ...product.en }
  }
  return product
}
