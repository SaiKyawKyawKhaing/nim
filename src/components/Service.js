import React from "react";
import { useRouter } from "next/router";


export default function Service() {
    const plans = [
        { price: "$15/month", name: "Daily Drip Plan" },
        { price: "$40/month", name: "Home Barista Plan" },
        { price: "$70/month", name: "Ultimate Coffee Plan" },
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
                    <h1 className="fw-bold text-white py-4">Package</h1>
                    <p className="text-white">
                        မြန်မာပြည်အတွက် စိတ်အချရဆုံး၊ အမြန်ဆုံး၊ ဈေးအသက်သာဆုံး Hosting package များ
                    </p>

                    <div className="container my-5">
                        <div className="row">
                            {plans.map((plan, index) => (
                                <div key={index} className="col-md-4">
                                    <div className="plan-card">
                                        <div className="plan-price text-left price font-weight-bolder">
                                            {plan.price}
                                        </div>
                                        <div className="plan-header text-left">{plan.name}</div>
                                        <ul className="list-group list-group-flush">
                                            {[
                                                "5-10 Pages",
                                                "12 WebMail Accounts",
                                                "Security Support",
                                                "4 time Update per month",
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
                                        <div className="plan-footer d-flex justify-content-center pt-4 pb-2">
                                        <button class="button mr-3">
                                            Get Quotation
                                            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>





    )
}

