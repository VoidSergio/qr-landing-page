import { useLanguage } from '../i18n/languageContext'

function ViewToggle({ view, onChange }) {
  const { t } = useLanguage()

  return (
    <div className="inline-flex border border-bordo">
      <button
        type="button"
        onClick={() => onChange('griglia')}
        aria-pressed={view === 'griglia'}
        className={`px-4 py-2 text-etichetta uppercase tracking-[0.28em] transition-colors ${
          view === 'griglia' ? 'bg-scuro text-crema' : 'text-scuro/40'
        }`}
      >
        {t('viewGrid')}
      </button>
      <button
        type="button"
        onClick={() => onChange('lista')}
        aria-pressed={view === 'lista'}
        className={`border-l border-bordo px-4 py-2 text-etichetta uppercase tracking-[0.28em] transition-colors ${
          view === 'lista' ? 'bg-scuro text-crema' : 'text-scuro/40'
        }`}
      >
        {t('viewList')}
      </button>
    </div>
  )
}

export default ViewToggle
