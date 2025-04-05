import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import Banner from '@/components/layouts/Banner.js';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/**
 * Service page component
 *
 * This component renders the Service page. It consists of a Banner component
 * with a title, description and breadcrumbs. The breadcrumbs contain two items,
 * one for the home page and one for the current Service page.
 *
 * @return {JSX.Element} The Service page component.
 */

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default function Service() {
  const { t } = useTranslation('common');
  return (
    <>
      <div className="index-page">
      <Header />
      <Banner
        title={t('services.title')}
        description={t('services.description')}
        breadcrumbs={[
          { href: '/', text: 'Home' },
          { href: '/service', text: 'Service', current: true },
        ]}
      />
 
      </div>
        <Footer/>
    </>
  );
}
