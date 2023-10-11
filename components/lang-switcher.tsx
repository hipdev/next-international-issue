'use client'

import { useChangeLocale, useI18n } from 'locales/client'
import { ChangeEvent } from 'react'

const LangSwitcher = () => {
  const changeLocale = useChangeLocale()
  const t = useI18n()
  const handleSwitch = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'en') {
      changeLocale('en')
    } else {
      changeLocale('es')
    }
  }

  return (
    <select onChange={handleSwitch}>
      <option value='en'>{t('english')}</option>
      <option value='es'>{t('spanish')}</option>
    </select>
  )
}

export default LangSwitcher
