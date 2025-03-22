import React from "react";
import { useRouter } from 'next/router';

export default function MainBanner() {
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
        <main className="main">
            <section id="hero" className="hero section dark-background">
                <img src={`${basePath}/assets/img/hero-bg.jpg`} alt="" className="" />   
                <div className="container d-flex flex-row align-items-center text-center rm-mt-auto mt-auto">
                    <h2 className="">Empowering<br /><span>Southeast Asia </span>with AI-Driven Solutions</h2>
                    <div>
                    <p className="d-sm-none d-md-block d-none">NIM က စီးပွါးရေးလုပ်ငန်းများအတွက် အိုင်တီဆန်းသစ်မှုတွေ ယူလာပေးဖို့ အသင့်ရှိနေပြီ။ ဘာတွေများ စောင့်နေသေးလဲ။ ကဲ၊အတူတူ အံ့ဖွယ်တစ်ခုကို တည်ဆောက်ကြရအောင်!</p>
                    <div className="d-flex justify-content-center align-items-center pt-5 pb-5">
                        <button className="button mr-3" onClick={() => scrollToSection('services')}>
                            Explore Our Services
                            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                <path
                                    clip-rule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <button className="button mr-3" onClick={() => scrollToSection('contact')}>
                            Contact Us Today
                            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                <path
                                    clip-rule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    </div>
                   
            
                </div>
                
                
                <div className="about-info mt-auto position-relative d-sm-none d-md-block d-none">
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>About Digitechvault</h2>
                                <p>
                                    <b>At Digitechvault</b> we’re pioneering the future of AI in Southeast Asia. As one of the region’s first AI consulting firms, we bridge the gap between cutting-edge technology and real-world business solutions. While our roots are in tech innovation, our focus is on empowering organizations to harness AI’s transformative power—whether through tailored education or strategic implementation.
                                </p>
                            </div>
                            <div className="col-lg-3">
                                <h3>Where</h3>
                                <p> We are serving in Myanmar, Thailand and Malaysia</p>
                            </div>
                            <div className="col-lg-3">
                                <h3>When</h3>
                                <p>Monday to Friday<br />9:00 AM-5:00 PM </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </main>
    );
}
