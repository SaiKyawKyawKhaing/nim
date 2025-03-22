import React from "react";
import { useRouter } from "next/router";

export default function Choose() {
    const { basePath } = useRouter()
    return (
        <section
            id="why-choose-us"
            className="why-choose-section"
            style={{
                backgroundImage: `url(${basePath}/assets/img/choose.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "75vh",
                width: "100vw",
            }}
        >
            <div
                className="overlay d-flex align-items-center justify-content-center text-center"
                style={{ backgroundColor: "#0c0c23d6", minHeight: "75vh", width: "100vw" }}
            >

                <div className="container">
                    <div className="row gy-4 align-items-center">

                        {/* Right Side - Image */}
                        <div className="col-lg-6 text-center">
                            <img
                                src={`${basePath}/assets/img/b2748dea12956.png`}
                                alt="Digitechvault AI Innovation"
                                className="img-fluid"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-delay="500"
                                style={{ width:"470px",maxWidth: "100%", height: "auto", borderRadius:"30px"  }}
                            />
                        </div>
                        {/* Left Side - Text Content */}
                        <div className="col-lg-6">
                            <h1 style={{ fontWeight: 800, color: "white", padding: "10px 0", lineHeight:2 }}>
                            NIM ကိုရွေးချယ်ရသည့် အကြောင်းရင်း
                            </h1>
                            <h6 style={{ fontWeight: 800, color: "white", padding: "25px 0",lineHeight:2 }}>NIM (Next IT Myanmar) တွင် မြန်မာနှင့် နိုင်ငံတကာရှိ လုပ်ငန်းများ၏ လိုအပ်ချက်များကို ဖြည့်ဆည်းပေးသည့် ဆန်းသစ်သော IT အရင်းအမြစ်များကို ပေးစွမ်းပါသည်။</h6>
                            <ul className="p-box">
                                <li>
                                    <strong>Local Expertise</strong>
                                    <p>We understand the unique challenges of the Myanmar market.</p>
                                </li>
                            </ul>

                            <ul className="p-box">
                                <li>
                                    <strong>Comprehensive Services</strong>
                                    <p>From website and app development to IT consultancy, we offer end-to-end solutions.</p>
                                </li>
                            </ul>

                            <ul className="p-box">
                                <li>
                                    <strong>Cutting-Edge Technology</strong>
                                    <p>We specialize in AI integration, custom software, and cloud-based platforms.</p>
                                </li>
                            </ul>

                            <ul className="p-box">
                                <li>
                                    <strong>Tailored Solutions</strong>
                                    <p>Our services are designed to meet your specific business needs.</p>
                                </li>
                            </ul>

                            <ul className="p-box">
                                <li>
                                    <strong>Ongoing Support</strong>
                                    <p>We provide continuous support to help your technology grow with your business.</p>
                                </li>
                            </ul>


                        </div>


                    </div>
                </div>


            </div>
        </section>
    )
}
