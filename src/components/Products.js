import { useState } from "react";
import products from '../../public/DB/products.json';
import categories from "../../public/DB/categories.json";

/**
 * Renders a page with a tabbed interface for browsing products by category.
 * Products are loaded from the products.json file in the public/DB directory.
 * Categories are loaded from the categories.json file in the public/DB directory.
 * @returns {JSX.Element} The rendered page.
 */
export default function ContactForm() {
    const [filteredProducts, setFilteredProducts] = useState(products.products);
    const handleFilter = (id) => setFilteredProducts(id === 'all' ? products.products : products.products.filter(p => p.categoryId === id));
    
    return (
        <section id="schedule" className="schedule section">
            <div className="container section-title">
                <h2>{products.heading}<br /></h2>
            </div>
            <div className="container">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item pointer" id="all">
                        <a onClick={() => handleFilter('all')} className="nav-link pointer active" role="tab" data-bs-toggle="tab">All Products</a>
                    </li>
                    {categories.map(({ id, name }) => (
                        <li key={id} className="nav-item pointer" id={id}>
                            <a onClick={() => handleFilter(id)} className="nav-link pointer" role="tab" data-bs-toggle="tab">{name}</a>
                        </li>
                    ))}
                </ul>
                <div className="tab-content row justify-content-center">
                    <h3 className="sub-heading">{products.subheading}</h3>
                    <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="all">
                        <section id="hotels" className="hotels section">
                            <div className="container">
                                <div className="row gy-4">
                                    {filteredProducts.map(({ id ,image, name, description }) => (
                                        <div key={id} className="col-lg-4 col-md-6">
                                            <div className="card h-100">
                                                <div className="card-img">
                                                    <img src={`./assets/img/products/${image}`} alt="" className="img-fluid" />
                                                </div>
                                                <h3><a href="#" className="stretched-link">{name}</a></h3>
                                                <p>{description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}
