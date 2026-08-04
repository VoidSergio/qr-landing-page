import { useLanguage } from '../i18n/languageContext'

function LanguageToggle({ className = '' }) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      className={`inline-flex flex-shrink-0 border border-bordo ${className}`}
      role="group"
      aria-label={t('switchLanguageLabel')}
    >
      <button
        type="button"
        onClick={() => setLanguage('it')}
        aria-pressed={language === 'it'}
        className={`px-3 py-2 text-etichetta uppercase tracking-[0.28em] transition-colors ${
          language === 'it' ? 'bg-scuro text-crema' : 'text-scuro/40'
        }`}
      >
        IT
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`border-l border-bordo px-3 py-2 text-etichetta uppercase tracking-[0.28em] transition-colors ${
          language === 'en' ? 'bg-scuro text-crema' : 'text-scuro/40'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageToggle
