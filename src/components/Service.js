import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";


export default function Service() {
    const { t } = useTranslation();
    const plans = [
        { price: t('services.plans.basic.price'), name: t('services.plans.basic.name'),description:t('services.plans.basic.description'),type:t('services.plans.basic.type')},
        { price: t('services.plans.standard.price'), name: t('services.plans.standard.name'),description:t('services.plans.standard.description'),type:t('services.plans.standard.type') },
        { price: t('services.plans.premium.price'), name: t('services.plans.premium.name'),description:t('services.plans.premium.description'),type:t('services.plans.premium.type') },
    ];
    const { basePath } = useRouter()
    return (
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
                    <h1 className="fw-bold text-white py-4">{t('services.title')}</h1>
                    <p className="text-white">{t('services.description')}</p>

                    <div className="container my-5">
                        <div className="row">
                            {plans.map((plan, index) => (
                                <div key={index} className="col-md-4">
                                    <div className="plan-card">
                                    <div className="plan-header text-left">{plan.name}</div>
                                        <div className="plan-price text-left font-weight-bolder">
                                            {plan.description}
                                        </div>
                                        <div className="plan-price text-left price font-weight-bolder py-3">
                                            {plan.price}<span className="px-1 plan-type">{plan.type}</span>
                                        </div>
                                        <div className="plan-footer d-flex justify-content-center pt-4 pb-2">
                                        <button className="button full-btn mr-3">
                                            {t('mainBanner.contactUs')}
                                            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                                                <path
                                                    clip-rule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                                    fill-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                        </div>
                                        <div className="plan-include text-left pt-3">WHAT'S INCLUDED</div>
                                        <ul className="list-group list-group-flush">
                                            {[
                                                t('services.benefits.pages'),
                                                t('services.benefits.webmail'),
                                                t('services.benefits.security'),
                                                t('services.benefits.updates'),
                                            ].map((benefit, idx) => (
                                                <li
                                                    key={idx}
                                                    className="list-group-item text-left d-flex align-items-center"
                                                >
                                                    <img
                                                        src={`${basePath}/assets/img/checked.png`}
                                                        alt="Digitechvault AI Innovation"
                                                        className="img-fluid"
                                                        data-aos="fade-left"
                                                        data-aos-duration="1000"
                                                        data-aos-delay="500"
                                                        style={{ width: "20px", height: "20px" }}
                                                    />
                                                    <p className="mb-0 px-3">{benefit}</p>
                                                </li>
                                            ))}
                                        </ul>
                            
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>





    )
}

