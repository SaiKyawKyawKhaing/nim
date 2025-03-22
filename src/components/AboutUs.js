import React from "react";
import { useRouter } from "next/router";

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
    <div className="row gy-4 justify-content-center">
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
                        <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
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
</div>

            </div>
        </section>
    );
}
