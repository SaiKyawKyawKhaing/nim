// _app.js
import "@/styles/globals.css";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
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
