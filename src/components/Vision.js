import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";


export default function Vision() {
    const { basePath } = useRouter()
    const { t } = useTranslation('common');
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
                            {t('vision.title')}
                            </h1>
                            <h6 style={{ fontWeight: 800, color: "white", padding: "25px 0" }}>{t('vision.description')}</h6>
                            <ul className="p-box">
                                <li>
                                    <strong>{t('vision.visionTitle')}</strong>
                                    <p>{t('vision.visionDesc')}</p>
                                </li>
                            </ul>

                            <ul className="p-box">
                                <li>
                                    <strong>{t('vision.missionTitle')}</strong>
                                    <p>{t('vision.missionDesc')}</p>
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
