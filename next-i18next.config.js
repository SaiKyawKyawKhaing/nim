module.exports = {
  i18n: {
    defaultLocale: 'my',
    locales: ['my', 'en'],
    localeDetection: false,
  },
  localePath: './public/locales',
  debug: process.env.NODE_ENV === 'development',
  ns: ['common'],
  defaultNS: 'common',
  fallbackLng: 'my'
}