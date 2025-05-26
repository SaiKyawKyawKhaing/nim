import React, {useState} from "react";
import { useRouter } from "next/router";


export default function Service() {
    const [isMonthlyStandard, setIsMonthlyStandard] = useState(true);
    const [isMonthlyPremium, setIsMonthlyPremium] = useState(true);
    const [animateStandard, setAnimateStandard] = useState(false);
    const [animatePremium, setAnimatePremium] = useState(false);
    const [ribbonAnimate, setRibbonAnimate] = useState(true);
    const { basePath } = useRouter()
    // const togglePlan = () => {
    //     setIsMonthly(!isMonthly);
    // };

    // Update the price display functions
    const getStanPriceDisplay = (price, isMonthlyStandard) => {
        const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
        if (isMonthlyStandard) {
            return (
                <div>
                    {numericPrice.toLocaleString()} MMK
                </div>
            );
        } else {
            const annualPrice = numericPrice * 12;
            console.log("Annual Price",annualPrice);
            const discountedPrice = numericPrice * 10; // 16% discount
            return (
                <div>
                    <div className="text-secondary text-decoration-line-through fs-5 d-block">
                        {annualPrice.toLocaleString()} MMK
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <span>{discountedPrice.toLocaleString()} MMK</span>
                        <span className="text-muted small ms-2">/year</span>
                    </div>
                </div>
            );
        }
    };
    
    const getPrePriceDisplay = (price, isMonthlyPremium) => {
        // Same changes as getStanPriceDisplay
        const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
        if (isMonthlyPremium) {
            return (
                <div>
                    {numericPrice.toLocaleString()} MMK
                </div>
            );
        } else {
            const annualPrice = numericPrice * 12;
            const discountedPrice = numericPrice * 10;
            return (
                <div>
                    <div className="text-muted text-decoration-line-through fs-5 d-block">
                        {annualPrice.toLocaleString()} MMK
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <span>{discountedPrice.toLocaleString()} MMK</span>
                        <span className="text-muted small ms-2">/year</span>
                    </div>
                </div>
            );
        }
    };

    const standardPlans = [
        {
            name: "SR Basic",
            price: "6000 MMK",
            description: "All the basics for starting a new business",
            features: [
                "Monthly Bandwidth Limit 5 GB",
                "Disk Space 500 MB",
                "One Email Account",
                "CPanel Account",
            ],
            link: "https://nextitmyanmar.com/billing/cart.php?a=add&pid=7&carttpl=coowhm-cart"
        },
        {
            name: "SR Pro",
            price: "20000 MMK",
            description: "All the basics for starting a new business",
            features: [
                "Monthly Bandwidth Limit 50 GB",
                "Disk Space 5 GB",
                "10 Email Account",
                "CPanel Account",
            ],
            isRecommended: true,
        },
        {
            name: "SR Business",
            price: "58000 MMK",
            description: "All the basics for starting a new business",
            features: [
                "Monthly Bandwidth Limit 250 GB",
                "Disk Space 20 GB",
                "Unlimited Email Account",
                "CPanel Account",
            ]
        },
    ];

    const premiumPlans = [
        {
            name: "Pro",
            price: "20000 MMK",
            description: "All the basics for starting a new business",
            features: [
                "Monthly Bandwidth Limit 50 GB",
                "Disk Space 5 GB",
                "10 Email Account",
                "CPanel Account",
            ]
        },
        {
            name: "Advanced",
            price: "32000 MMK",
            description: "All the basics for starting a new business",
            features: [
                "Monthly Bandwidth Limit 100 GB",
                "Disk Space 10 GB",
                "20 Email Account",
                "CPanel Account",
            ]
        },
        {
            name: "Business",
            price: "58000 MMK",
            description: "All the basics for starting a new business",
            features: [
                "Monthly Bandwidth Limit 250 GB",
                "Disk Space 20 GB",
                "Unlimited Email Account",
                "CPanel Account",
            ]
        }, 
    ];

    const vpsPlans = [
        {
            storage: "20 GB",
            ram: "2 GB RAM",
            bandwidth: "2 TB",
            price: "46000 MMK/month",
            link: "#"
        },
        {
            storage: "40 GB",
            ram: "4 GB RAM",
            bandwidth: "4 TB",
            price: "59000 MMK/month",
            link: "#"
        },
        {
            storage: "200 GB",
            ram: "8 GB RAM",
            bandwidth: "1000 Mbit",
            price: "95000 MMK/month",
            link: "#"
        },
        {
            storage: "500 GB",
            ram: "16 GB RAM",
            bandwidth: "1000 Mbit",
            price: "145000 MMK/month",
            link: "#"
        }
    ];

    // Modify the toggle handlers
    const handleStandardToggle = (value) => {
        setAnimateStandard(true);
        setIsMonthlyStandard(value);
        if (!value) {
            setRibbonAnimate(true);
            setTimeout(() => setRibbonAnimate(false), 100);
        }
        setTimeout(() => setAnimateStandard(false), 500);
    };

    const handlePremiumToggle = (value) => {
        setAnimatePremium(true);
        setIsMonthlyPremium(value);
        if (!value) {
            setRibbonAnimate(true);
            setTimeout(() => setRibbonAnimate(false), 100);
        }
        setTimeout(() => setAnimatePremium(false), 500);
    };
    return (
        <div>
            <section
                id="services"
                className="services-section"
                style={{
                    backgroundImage: `url(${basePath}/assets/img/service-bg.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100vw",
                    minHeight: "100vh",
                }}
            >
                <div
                    className="overlay d-flex align-items-center"
                    style={{
                        backgroundColor: "#08091de3",
                        minHeight: "100vh",
                        width: "100%",
                        padding: "70px 0"
                    }}
                >
                    <div className="container text-center">
                        <h1 className="fw-bold text-white py-4">Share Hosting Packages</h1>
                        <p className="text-white">
                            မြန်မာပြည်အတွက် စိတ်အချရဆုံး၊ အမြန်ဆုံး၊ ဈေးအသက်သာဆုံး Hosting package များ
                        </p>

                        {/* Add Toggle Button */}
                        <div className="d-flex justify-content-center align-items-center mt-5 mb-4">
                            <div className="bg-white rounded-pill p-1 d-inline-flex">
                                <button 
                                    className={`btn rounded-pill px-4 ${isMonthlyStandard ? 'btn-primary' : 'btn-white text-muted'}`}
                                    onClick={() => handleStandardToggle(true)}
                                >
                                    Monthly
                                </button>
                                <button 
                                    className={`btn rounded-pill px-4 ${!isMonthlyStandard ? 'btn-primary' : 'btn-white text-muted'}`}
                                    onClick={() => handleStandardToggle(false)}
                                >
                                    Annual
                                </button>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <div className="row">
                                {standardPlans.map((plan, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                                        <div className={`card h-100 p-5 ${animateStandard ? 'card-animate' : ''}
                                            ${plan.isRecommended ? 'recommended-plan' : ''}`} style={{ marginTop: '20px' }}>
                                            {!isMonthlyStandard && <div className="card-ribbon">Save 16%</div>}
                                            {plan.isRecommended && <div className="recommended-badge">Recommended</div>}
                                            <div className="card-body p-0">
                                                <h4 className="mb-3">{plan.name}</h4>
                                                <h2 className="mb-4">{getStanPriceDisplay(plan.price, isMonthlyStandard)}<span className="text-muted small">{isMonthlyStandard ? 'per month' : ''}</span></h2>
                                                
                                                <a 
                                                    href={plan.link || "#"}
                                                    className="btn package-btn w-100 mb-4"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Buy {plan.name}
                                                </a>
                                                <p className="text-muted small">{plan.description}</p>

                                                <div className="mt-4">
                                                    {/* <h6 className="text-uppercase mb-3">WHAT'S INCLUDED</h6> */}
                                                    <ul className="list-unstyled">
                                                        {plan.features.map((feature, idx) => (
                                                            <li key={idx} className="mb-3 text-muted d-flex align-items-center">
                                                            <svg 
                                                                width="16" 
                                                                height="16" 
                                                                viewBox="0 0 16 16" 
                                                                fill="none" 
                                                                className="me-2"
                                                            >
                                                                <path 
                                                                    d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" 
                                                                    fill="#ffd500"
                                                                />
                                                            </svg>
                                                            {feature}
                                                        </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="services-section"
                style={{
                    backgroundImage: `url(${basePath}/assets/img/premium_package.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
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
                        padding: "70px 0"
                    }}
                >
                    <div className="container text-center">
                        <h2 className="text-white mb-4">Best and Cheap VPS Hosting Provider</h2>
                        <div className="vps-pricing-grid mt-5">
                            <div className="vps-pricing-header">
                                <div>Storage</div>
                                <div>RAM+</div>
                                <div>Bandwidth</div>
                                <div>Price</div>
                                <div></div>
                            </div>

                            {vpsPlans.map((plan, index) => (
                                <div key={index} className="vps-pricing-row">
                                    <div>{plan.storage}</div>
                                    <div>{plan.ram}</div>
                                    <div>{plan.bandwidth}</div>
                                    <div>{plan.price}</div>
                                    <div>
                                        <a 
                                            href={plan.link} 
                                            className="btn vps-package-btn"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            BUY NOW
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>





    )
}

