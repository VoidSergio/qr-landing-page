import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './languageContext'
import { translations } from './translations'

const STORAGE_KEY = 'rilievo-lang'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'it'
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'it'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => {
    const dict = translations[language]
    return {
      language,
      setLanguage,
      t: (key, ...args) => {
        const entry = dict[key] ?? translations.it[key] ?? key
        return typeof entry === 'function' ? entry(...args) : entry
      },
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
