import React from "react";
import { useRouter } from "next/router";
import { FaGlobe } from "react-icons/fa";

export default function AboutUs() {
    const { basePath } = useRouter();

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    return (
        <section
            id="about"
            className="about-us-section"
            style={{
                backgroundImage: `url(${basePath}/assets/img/programm-bg.jpg)`,
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
                    backgroundColor: "#07091cf2",
                    width: "100%",
                    minHeight: "100vh",
                }}
            >
            <div className="container">
                <div className="row align-items-center py-4 mb-5">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <h3 className="text-white">Search new domain</h3>
                    </div>
                    
                    <div className="col-lg-9 col-md-12">
                        <div className="search-box position-relative">
                            <input 
                                type="text" 
                                className="form-control rounded-pill py-3" 
                                placeholder="Search for a domain"
                                style={{ 
                                    backgroundColor: "white",
                                    paddingLeft: "50px",
                                    paddingRight: "50px"
                                }}
                            />
                            <span className="position-absolute top-50 translate-middle-y mx-3 start-0">
                                <FaGlobe size={24} color="#CBD5E0" />
                            </span>
                            <button 
                                className="btn position-absolute end-0 top-50 translate-middle-y me-2" 
                                style={{ 
                                    backgroundColor: "#8B5CF6", 
                                    color: "white", 
                                    borderRadius: "50%",
                                    width: "40px",
                                    height: "40px",
                                    padding: "8px"
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* <div className="domain-prices d-flex justify-content-center gap-4 mt-4">
                            <span className="text-white">.com $15.99</span>
                            <span className="text-white">.net $15.99</span>
                            <span className="text-white">.org $15.99</span>
                            <span className="text-white">.me $10.99</span>
                        </div> */}
                    </div>
                </div>
                <div className="row gy-4 justify-content-center mb">
                    {/* Left Side - Title and Content */}
                    <div className="col-lg-5 d-flex justify-content-center">
                        <div>
                            <h1 style={{ fontWeight: 800, color: "white" }}>Next IT Myanmar</h1>
                            <p style={{ color: "white" }}>
                                Next IT Myanmar is a leading provider of web development, digital transformation, and digital marketing solutions. 
                                We empower businesses with cutting-edge technology, scalable web applications, and AI-driven strategies. 
                                From crafting custom websites to optimizing digital marketing campaigns, we help companies thrive in the digital age.
                            </p>
                            <button className="button mr-3" onClick={() => scrollToSection('contact')}>
                                Contact Us
                                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Services */}
                    <div className="col-lg-7 d-flex justify-content-center">
                        <div className="row" style={{ display: "flex", alignItems: "center" }}>
                            {/* Web Development */}
                            <div className="col-12 col-md-6 mb-4">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={`${basePath}/assets/img/about/world-wide-web.png`} alt="Web Development" style={{ width: "70px", marginRight: "15px" }} />
                                    <div>
                                        <h5 style={{ fontWeight: 700, color: "white" }}>Web Development</h5>
                                        <p style={{ color: "white" }}>Custom websites and web applications tailored to your business needs.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Digital Transformation */}
                            <div className="col-12 col-md-6 mb-4">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={`${basePath}/assets/img/about/digital-transformation.png`} alt="Digital Transformation" style={{ width: "70px", marginRight: "15px" }} />
                                    <div>
                                        <h5 style={{ fontWeight: 700, color: "white" }}>Digital Transformation</h5>
                                        <p style={{ color: "white" }}>AI-powered solutions to optimize and automate business processes.</p>
                                    </div>
                                </div>
                            </div>

                            {/* E-commerce Solutions */}
                            <div className="col-12 col-md-6 mb-4">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={`${basePath}/assets/img/about/ecommerce.png`} alt="E-commerce Solutions" style={{ width: "70px", marginRight: "15px" }} />
                                    <div>
                                        <h5 style={{ fontWeight: 700, color: "white" }}>E-commerce Solutions</h5>
                                        <p style={{ color: "white" }}>Scalable online store development with seamless user experience.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Digital Marketing */}
                            <div className="col-12 col-md-6 mb-4">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={`${basePath}/assets/img/about/content-strategy.png`} alt="Digital Marketing" style={{ width: "70px", marginRight: "15px" }} />
                                    <div>
                                        <h5 style={{ fontWeight: 700, color: "white" }}>Digital Marketing</h5>
                                        <p style={{ color: "white" }}>SEO, social media, and online advertising to grow your brand.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="partner-logos mt-5" style={{ overflow: "hidden" }}>
                        <div className="logo-slider d-flex align-items-center justify-content-around" 
                            style={{ 
                                animation: "fadeSlide 20s linear infinite",
                                whiteSpace: "nowrap",
                                padding: "0 50px"
                            }}>
                            <img src={`${basePath}/assets/img/company1.png`} alt="Partner 1" className="partner-logo" />
                            <img src={`${basePath}/assets/img/company2.png`} alt="Partner 2" className="partner-logo" />
                            <img src={`${basePath}/assets/img/company3.png`} alt="Partner 3" className="partner-logo" />
                            <img src={`${basePath}/assets/img/company4.png`} alt="Partner 4" className="partner-logo" />
                            <img src={`${basePath}/assets/img/company5.png`} alt="Partner 5" className="partner-logo" />
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </section>
    );
}
