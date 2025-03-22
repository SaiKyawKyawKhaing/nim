import { useRouter } from 'next/router';
import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import Category from '@/components/Category';

/**
 * A page that displays a category and its products.
 *
 * The category is determined by the route parameter `category`.
 *
 * The page displays the category and its products in a list.
 *
 * The page also displays a heading with the category ID.
 *
 * @returns {JSX.Element} The page element.
 */
export default function CategorieDetail() {

  const router = useRouter();
  const { category } = router.query;

  return ( <>
    <div className="index-page">
        <Header />
        <Category id={category} />
    </div>
    <Footer />
</>);
}
