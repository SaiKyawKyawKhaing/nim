import {React,useEffect} from "react";
import { useRouter } from "next/router";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  const { basePath } = useRouter();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // allow re-animation
    });
  }, []);

  return (
    <section
      id="home"
      className="about-section"
      style={{
        backgroundImage: `url(${basePath}/assets/img/vision-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="overlay d-flex align-items-center"
        style={{ backgroundColor: "#00000040", minHeight: "100vh", width: "100vw" }}
      >
        <div className="container">
          <div className="row gy-4 align-items-center">
            
            {/* Left Side - Image (Stacks on top in mobile) */}
            <div className="col-lg-6 col-12 text-center">
              <img
                src={`${basePath}/assets/img/9400869ab95f2b.png`}
                alt="Digitechvault AI Innovation"
                className="aboutImg img-fluid"
                // style={{ width: '350px', height: '350px', borderRadius: '50%' }}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="500"
              />
            </div>

            {/* Right Side - Content & Contact Info */}
            <div className="col-lg-6 col-12 text-center text-lg-start px-4">
              <h1 className="fw-bold text-white pt-3 mb-5">Next IT Myanmar</h1>
              <h5 className="fw-normal text-white pb-3 mb-5" style={{ lineHeight: '2' }}>
              NIM က စီးပွါးရေးလုပ်ငန်းများအတွက် အိုင်တီဆန်းသစ်မှုတွေ ယူလာပေးဖို့ အသင့်ရှိနေပြီ။ ဘာတွေများ စောင့်နေသေးလဲ။ ကဲ၊အတူတူ အံ့ဖွယ်တစ်ခုကို တည်ဆောက်ကြရအောင်!
              </h5>

              <div>
                    <div className="d-flex align-items-center pt-2 pb-5">
                      <a 
                          href="https://nextitmyanmar.com/billing/index.php" 
                          className="button mr-3"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                            Explore Our Services
                            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                <path
                                    clipRule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                    fillRule="evenodd"
                                ></path>
                            </svg>
                      </a>
                      <a 
                          href="https://nextitmyanmar.com/billing/submitticket.php?step=2&deptid=2" 
                          className="button mr-3"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                            Contact Us Today
                            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                <path
                                    clipRule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                    fillRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
