import React, { useState } from 'react';
import { useRouter } from "next/router";

const WebsitePrice = () => {
    const { basePath } = useRouter();
    const [activeFeature, setActiveFeature] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        businessName: '',
        message: ''
    });
    const pricingData = [
        {
            type: 'Landing',
            pages: '1 page',
            email: '1 account',
            cms: false,
            training: false,
            optimization: false,
            security: 'Basic',
            contactForm: 'Basic',
            updates: '1 times'
        },
        {
            type: 'Basic',
            pages: '10 pages',
            email: '4 accounts',
            cms: false,
            training: false,
            optimization: false,
            security: 'Basic',
            contactForm: 'Basic',
            updates: '4 times'
        },
        {
            type: 'Standard',
            pages: '30 pages',
            email: '8 accounts',
            cms: true,
            training: true,
            optimization: false,
            security: 'Advance',
            contactForm: 'Standard',
            updates: '8 times'
        },
        {
            type: 'Superb',
            pages: 'Unlimited',
            email: '12 accounts',
            cms: true,
            training: true,
            optimization: true,
            security: 'Advance',
            contactForm: 'Advanced',
            updates: '12 times'
        },
        {
            type: 'Earning',
            pages: 'Unlimited',
            email: '12 accounts',
            cms: true,
            training: true,
            optimization: true,
            security: 'Advance',
            contactForm: 'Advanced',
            updates: '12 times'
        }
    ];

    const features = [
        { label: 'No. of Pages', key: 'pages' },
        { label: 'Webmail/Business Email', key: 'email' },
        { label: 'Content Management System', key: 'cms' },
        { label: 'Website Training', key: 'training' },
        { label: 'Speed Optimization', key: 'optimization' },
        { label: 'Website Security Addons', key: 'security' },
        { label: 'Enquiry or Contact Form', key: 'contactForm' },
        { label: 'Free Data Update / Year', key: 'updates' },
        { label: 'Annual Fee', key: 'fee' }
    ];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send-quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you for your inquiry. We will contact you soon!'
                });
                setTimeout(() => {
                    handleCloseModal();
                    setSubmitStatus({ type: '', message: '' });
                }, 3000);
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: 'Failed to send message. Please try again.'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again.'
            });
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({
            name: '',
            phone: '',
            email: '',
            businessName: '',
            message: ''
        });
    };

    return (
        <div>
            <section
                id="website"
                className="about-us-section"
                style={{
                    backgroundImage: `url(${basePath}/assets/img/price_bg.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div
                    className="overlay d-flex align-items-center"
                    style={{
                        backgroundColor: "rgb(7, 9, 28, 0.85)",
                        width: "100%",
                        minHeight: "100vh",
                    }}
                >
                    <div className="pricing-container">
                        <div className="text-center mb-5">
                            <h2 className="pricing-title text-white">Website Development Packages</h2>
                            <p className="pricing-subtitle text-white">Comprehensive solutions tailored to your business needs</p>
                        </div>
                        <div className="pricing-grid">
                            {/* Header Row */}
                            <div className="pricing-header">
                                <div className="feature-cell"></div>
                                {pricingData.map((plan, index) => (
                                    <div key={index} className="plan-header">
                                        <h3>{plan.type}</h3>
                                    </div>
                                ))}
                            </div>

                            {/* Feature Rows */}
                            {features.slice(0, -2).map((feature, idx) => (
                                <div
                                    key={idx}
                                    className={`pricing-row ${activeFeature === idx ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveFeature(idx)}
                                    onMouseLeave={() => setActiveFeature(null)}
                                >
                                    <div className="feature-cell">
                                        {feature.label}
                                    </div>
                                    {pricingData.map((plan, index) => (
                                        <div key={index} className="plan-cell">
                                            {typeof plan[feature.key] === 'boolean' ? (
                                                <span className={plan[feature.key] ? 'check' : 'cross'}>
                                                    {plan[feature.key] ? '✓' : '✕'}
                                                </span>
                                            ) : (
                                                plan[feature.key]
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}

                            {/* Price Rows */}
                            <div className="pricing-row">
                                <div className="feature-cell">
                                    <div>Price (for first year)</div>
                                    <div>Annual Fee</div>
                                </div>
                                <div className="plan-cell price-action" colSpan="5">
                                    <button className="request-btn" onClick={() => setShowModal(true)}>
                                        Request Quotation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                style={{
                    backgroundImage: `url(${basePath}/assets/img/price_bg01.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // minHeight: "100vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div
                    className="overlay d-flex align-items-center"
                    style={{
                        backgroundColor: "rgb(7, 9, 28, 0.85)",
                        width: "100%",
                        // minHeight: "100vh",
                    }}
                >
                    <div className="container my-5">
                        <h2 className="text-white mb-4">Website Development Price</h2>
                        <ul className="text-white fs-5 price-list">
                            <li>The prices vary depending on the size and complexity of the website.</li>
                            <li>A simply designed single-page website can cost anywhere from 350,000 to 875,000 MMK (around 100 to 250 USD),didn't include domain and web hosting.</li>
                            <li>Complex websites with e-commerce capabilities and advanced features such as a content management system can cost anywhere from 1,750,000 to 8,750,000 MMK, which is just around 500 to 2,500 USD at the moment.</li>
                            <li>More detail on pricing of our website service in Myanmar can be request via email or phone. Please click "Get Quotation" to send an email to us. We will reach back to you within few hours on weekdays.</li>
                        </ul>
                        <div className="d-flex justify-content-center mt-5">
                            <button className="quote-btn" onClick={() => setShowModal(true)}>
                                Get a Quote
                                <i className="fas fa-arrow-right ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Quote Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Get a quote</h3>
                            <button className="close-btn" onClick={handleCloseModal}>
                                <svg width="24" height= "24" viewBox="0 0 24 24">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="modal-subtitle">Fill in your details and submit them. We will then contact you for more discussion.</p>
                        <form onSubmit={handleSubmit}>
                            {submitStatus.message && (
                                <div 
                                    className={`status-message ${submitStatus.type}`}
                                    style={{
                                        padding: '10px',
                                        marginBottom: '15px',
                                        borderRadius: '4px',
                                        textAlign: 'center',
                                        backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                                        color: submitStatus.type === 'success' ? '#155724' : '#721c24'
                                       }}
                                >
                                    {submitStatus.message}
                                </div>
                            )}
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="businessName"
                                    placeholder="Your business name"
                                    value={formData.businessName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="4"
                                    className="form-input"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '4px',
                                        border: '1px solid #ddd',
                                        resize: 'vertical',
                                        minHeight: '120px',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>
                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>

    );
};

export default WebsitePrice;