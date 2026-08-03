import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductGallery from './ProductGallery'

// Segnaposto: da sostituire con il numero WhatsApp dell'operatore locale.
const WHATSAPP_NUMBER = '390000000000'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.62 15.04L2 22l5.11-1.34A10 10 0 1 0 12 2Zm0 18.18a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.03.8.81-2.95-.2-.3A8.18 8.18 0 1 1 12 20.18Zm4.48-6.13c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

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

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Ciao, vorrei informazioni su "${name}".`,
  )}`

  return (
    <div className="bg-crema">
      <main className="flex h-dvh flex-col overflow-hidden">
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

          <a
            href="#acquisto"
            className="mt-1 inline-flex w-fit border border-bordo px-4 py-2 text-etichetta uppercase tracking-[0.28em] text-scuro transition-colors duration-500 hover:border-oro hover:bg-oro"
          >
            Informazioni sull'acquisto
          </a>

          <Link
            to="/"
            className="mt-1 text-etichetta uppercase tracking-[0.28em] text-scuro/40 transition-colors hover:text-oro"
          >
            Tutti i prodotti rilevati
          </Link>
        </div>
      </main>

      <section id="acquisto" className="scroll-mt-8 border-t border-bordo px-gutter py-blocco">
        <div className="mx-auto flex w-full max-w-xl flex-col items-start gap-elemento text-left">
          <div className="flex flex-col gap-2">
            <span className="text-etichetta uppercase tracking-[0.28em] text-oro">
              Informazioni sull'acquisto
            </span>
            <h2 className="font-display text-sottotitolo text-scuro">
              Interessato a questo pezzo?
            </h2>
            <p className="text-corpo text-scuro/70">
              Il nostro operatore in loco conosce ogni dettaglio di questo
              prodotto — materiali, disponibilità, tempi e modalità
              d'acquisto. Scrivici su WhatsApp: ti rispondiamo il prima
              possibile.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-scuro px-6 py-3 text-etichetta uppercase tracking-[0.28em] text-scuro transition-colors duration-500 hover:border-oro hover:bg-oro"
          >
            <WhatsAppIcon />
            Scrivici su WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
