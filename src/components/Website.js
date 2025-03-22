import React from "react";
import { useRouter } from "next/router";


export default function Website() {
    const {basePath} = useRouter()
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
          Website တစ်ခုဖန်တီးခြင်း 
          </h1>
          <h6 style={{ fontWeight: 800, color: "white", padding: "25px 0" }}>Website တစ်ခုကို ဘယ်လိုတည်ဆောက်ကြသလဲဆိုတာ သိချင်ပါသလား?</h6>
          <ul className="p-box">
  <li>
    <strong>1. Initial Consultation:</strong> 
    <p>Understanding your idea and discussing the type of website you need.</p>
  </li>
</ul>

<ul className="p-box">
  <li>
    <strong>2. Content Gathering:</strong> 
    <p>Collecting photos, text, and logos to ensure everything is in place.</p>
  </li>
</ul>

<ul className="p-box">
  <li>
    <strong>3. Design & Development:</strong> 
    <p>Transforming your idea into a modern, functional website.</p>
  </li>
</ul>

<ul className="p-box">
  <li>
    <strong>4. Revisions & Feedback:</strong> 
    <p>Refining the design based on your input and finalizing the details.</p>
  </li>
</ul>

<ul className="p-box">
  <li>
    <strong>5. Final Launch:</strong> 
    <p>Deploying your website and celebrating its successful launch.</p>
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
