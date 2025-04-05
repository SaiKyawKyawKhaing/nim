import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Choose() {
    const { basePath } = useRouter();
    const { t } = useTranslation();
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
                                {t('choose.title')}
                            </h1>
                            <h6 style={{ fontWeight: 800, color: "white", padding: "25px 0",lineHeight:2 }}>{t('choose.description')}</h6>
                            <ul className="p-box">
                                <li>
                                    <strong>{t('choose.localExpertise.title')}</strong>
                                    <p>{t('choose.localExpertise.description')}</p>
                                </li>
                            </ul>

                            <ul className="p-box">
                                <li>
                                    <strong>{t('choose.comprehensiveServices.title')}</strong>
                                    <p>{t('choose.comprehensiveServices.description')}</p>
                                </li>
                            </ul>

                            <ul className="p-box">
                                <li>
                                    <strong>{t('choose.cuttingEdge.title')}</strong>
                                    <p>{t('choose.cuttingEdge.description')}</p>
                                </li>
                            </ul>

                            <ul className="p-box">
                                <li>
                                    <strong>{t('choose.tailoredSolutions.title')}</strong>
                                    <p>{t('choose.tailoredSolutions.description')}</p>
                                </li>
                            </ul>

                            <ul className="p-box">
                                <li>
                                    <strong>{t('choose.ongoingSupport.title')}</strong>
                                    <p>{t('choose.ongoingSupport.description')}</p>
                                </li>
                            </ul>


                        </div>


                    </div>
                </div>


            </div>
        </section>
    )
}
