// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  /**
   * This function renders the HTML document.
   * It includes the Google Fonts stylesheets for Roboto and Raleway fonts,
   * Bootstrap CSS, Bootstrap Icons CSS, AOS CSS, Glightbox CSS, and Swiper CSS.
   * It also links to the main CSS file.
   * @returns {JSX.Element} The rendered HTML document.
   */
  render() {
    const basePath = process.env.NODE_ENV === 'production' ? "https://digitechvault.com" : '';
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href={`${basePath}/assets/vendor/bootstrap/css/bootstrap.min.css`}
            rel="stylesheet"
          />
          <link
            href={`${basePath}/assets/vendor/bootstrap-icons/bootstrap-icons.css`}
            rel="stylesheet"
          />
          <link
            href={`${basePath}/assets/vendor/aos/aos.css`}
            rel="stylesheet"
          />
          <link
            href={`${basePath}/assets/vendor/glightbox/css/glightbox.min.css`}
            rel="stylesheet"
          />
          <link
            href={`${basePath}/assets/vendor/swiper/swiper-bundle.min.css`}
            rel="stylesheet"
          />
          <link
            href={`${basePath}/assets/css/main.css`}
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

