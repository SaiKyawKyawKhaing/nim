import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import Banner from '@/components/layouts/Banner.js';

/**
 * Service page component
 *
 * This component renders the Service page. It consists of a Banner component
 * with a title, description and breadcrumbs. The breadcrumbs contain two items,
 * one for the home page and one for the current Service page.
 *
 * @return {JSX.Element} The Service page component.
 */

export default function Service() {
  return (
    <>
      <div className="index-page">
      <Header />
      <Banner
        title="Service"
        description="porro placeat quibusdam quia assumenda numquam molestias."
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
