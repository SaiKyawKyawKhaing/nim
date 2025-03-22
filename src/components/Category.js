import { useEffect, useState } from "react";
import Banner from '@/components/layouts/Banner';
import products from '../../public/DB/products.json';
import categories from '../../public/DB/categories.json';

/**
 * A page that displays a category and its products.
 *
 * The category is determined by the route parameter `id`.
 *
 * The page displays the category and its products in a list.
 *
 * The page also displays a heading with the category name.
 *
 * @param {Object} props The component props.
 * @param {string} props.id The category id.
 *
 * @returns {JSX.Element} The page element.
 */
export default function Category({ id }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [catId, setCatId] = useState('');

    useEffect(() => {
        if (id) {
            const categoryIdNumber = parseInt(id, 10);
            setFilteredProducts(products.products.filter(product => product.categoryId === categoryIdNumber));
            const category = categories.find(category => category.id === categoryIdNumber);
            if (category) {
                setCategoryName(category.name);
                setCatId(category.id);
            }
        }
    }, [id]);

    return (
        <>
            <Banner
                title={categoryName}
                description="Esse dolorum voluptatum ullam est sint nemo et est ipsa."
                breadcrumbs={[
                    { href: '/', text: 'Home' },
                    { href: '/products', text: 'Products' },
                    { href: `/products/categories/${catId}`, text: `${categoryName}`, current: true },
                ]}
            />
            <section id="hotels" className="hotels section">
                <div className="container">
                    <div className="row gy-4">
                        {filteredProducts.map(({ image, name, description }) => (
                            <div key={name} className="col-lg-4 col-md-6">
                                <div className="card h-100">
                                    <div className="card-img">
                                        <img src={`../../assets/img/products/${image}`} alt="" className="img-fluid" />
                                    </div>
                                    <h3><a href="#" className="stretched-link">{name}</a></h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
