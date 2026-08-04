export function formatPrice(price, language) {
  return price.toLocaleString(language === 'en' ? 'en-IE' : 'it-IT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  })
}
