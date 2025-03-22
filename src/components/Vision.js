import React from "react";
import { useRouter } from "next/router";


export default function Vision() {
    const { basePath } = useRouter()
    return (
        <section
            id="vision"
            className="about-section"
            style={{
                backgroundImage: `url(${basePath}/assets/img/programming-background-collage.jpg)`,
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
                style={{ backgroundColor: "#110123", width: "100%", minHeight: "100vh" }}
            >
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        {/* Left Side - Text Content */}
                        <div className="col-lg-6">
                            <h1 style={{ fontWeight: 800, color: "white", padding: "10px 0" }}>
                                Vision & Mission
                            </h1>
                            <h6 style={{ fontWeight: 800, color: "white", padding: "25px 0" }}>Website တစ်ခုကို ဘယ်လိုတည်ဆောက်ကြသလဲဆိုတာ သိချင်ပါသလား?</h6>
                            <ul className="p-box">
                                <li>
                                    <strong>Vision</strong>
                                    <p>To be the leading IT solutions provider in Myanmar, driving digital transformation and innovation through cutting-edge technology and tailored business solutions.</p>
                                </li>
                            </ul>

                            <ul className="p-box">
                                <li>
                                    <strong>Mission</strong>
                                    <p>Empowering businesses with scalable IT solutions, leveraging AI and cloud technology, delivering high-quality services, and ensuring long-term support.</p>
                                </li>
                            </ul>


                        </div>

                        {/* Right Side - Image */}
                        <div className="col-lg-6 text-center">
                            <img
                                src={`${basePath}/assets/img/5351323.png`}
                                alt="Digitechvault AI Innovation"
                                className="img-fluid"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-delay="500"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
