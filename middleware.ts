import { createI18nMiddleware } from 'next-international/middleware'

import type { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
})

export async function middleware(req: NextRequest) {
  return I18nMiddleware(req)
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
