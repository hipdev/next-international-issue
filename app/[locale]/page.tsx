import LangSwitcher from 'components/lang-switcher'
import { getI18n } from 'locales/server'

export default async function Page() {
  const t = await getI18n()
  return (
    <section className='min-h-screen flex items-start justify-center flex-col'>
      <div className='w-80 md:mx-auto mx-5  bg-black mt-5 py-5 px-4 rounded-md shadow-sm text-white'>
        <h1 className='font-semibold text-2xl'>{t('language')}</h1>
        <LangSwitcher />
      </div>
    </section>
  )
}
