import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";


export default function Website() {
    const {basePath} = useRouter();
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
    style={{ backgroundColor: "#07091df7", width: "100%", minHeight: "100vh" }}
  >
    <div className="container">
      <div className="row gy-4 align-items-center">
        {/* Left Side - Text Content */}
        <div className="col-lg-6">
          <h1 style={{ fontWeight: 800, color: "white", padding: "10px 0" }}>
            {t('website.title')}
          </h1>
          <h6 style={{ fontWeight: 800, color: "white", padding: "25px 0" }}>{t('website.subtitle')}</h6>
          <ul className="p-box">
  <li>
    <strong>{t('website.steps.consultation.title')}</strong> 
    <p>{t('website.steps.consultation.description')}</p>
  </li>
</ul>

<ul className="p-box">
  <li>
    <strong>{t('website.steps.content.title')}</strong> 
    <p>{t('website.steps.content.description')}</p>
  </li>
</ul>

<ul className="p-box">
  <li>
    <strong>{t('website.steps.design.title')}</strong> 
    <p>{t('website.steps.design.description')}</p>
  </li>
</ul>

<ul className="p-box">
  <li>
    <strong>{t('website.steps.revisions.title')}</strong> 
    <p>{t('website.steps.revisions.description')}</p>
  </li>
</ul>

<ul className="p-box">
  <li>
    <strong>{t('website.steps.launch.title')}</strong> 
    <p>{t('website.steps.launch.description')}</p>
  </li>
</ul>

        </div>

        {/* Right Side - Image */}
        <div className="col-lg-6 text-center">
          <img
            src={`${basePath}/assets/img/4884157.png`}
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
