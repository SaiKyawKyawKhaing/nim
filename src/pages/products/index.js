import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import Banner from '@/components/layouts/Banner.js';
import Products from '@/components/Products';

/**
 * The Products page.
 *
 * The page also displays the products in a list.
 *
 * @returns {JSX.Element} The page element.
 */
export default function Product() {
    return (
        <>
            <div className="index-page">
                <Header />
                <Banner
                    title="Products"
                    description="Esse dolorum voluptatum ullam est sint nemo et est ipsa."
                    breadcrumbs={[
                        { href: '/', text: 'Home' },
                        { href: '/products', text: 'Products', current: true },
                    ]}
                />
                <Products />
            </div>
            <Footer />
        </>
    );
}
