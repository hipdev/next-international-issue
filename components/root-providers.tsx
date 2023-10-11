'use client'

import { I18nProviderClient } from 'locales/client'
import { ReactNode } from 'react'

const RootProviders = ({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: string }
}) => {
  return (
    <I18nProviderClient
      locale={params.locale}
      fallback={<span className='text-white'>Switching...</span>}
    >
      {children}
    </I18nProviderClient>
  )
}

export default RootProviders
