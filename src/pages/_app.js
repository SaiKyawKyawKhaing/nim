// _app.js
import "@/styles/globals.css";
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';
import { i18n } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config.js';

if (!i18n?.isInitialized) {
  i18n?.init(nextI18NextConfig);
}

function App({ Component, pageProps }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? "https://digitechvault.com" : '';
  return (
    <>
      <Component {...pageProps} />
      <Script src={`${baseUrl}/assets/vendor/bootstrap/js/bootstrap.bundle.min.js`} />
      <Script src={`${baseUrl}/assets/vendor/php-email-form/validate.js`} />
      <Script src={`${baseUrl}/assets/vendor/aos/aos.js`} />
      <Script src={`${baseUrl}/assets/vendor/glightbox/js/glightbox.min.js`} />
      <Script src={`${baseUrl}/assets/vendor/swiper/swiper-bundle.min.js`} />
      <Script src={`${baseUrl}/assets/js/main.js`} />
    </>
  );
}

export default appWithTranslation(App);
