import React from "react";
import { useRouter } from "next/router";

export default function Contact() {
  const { basePath } = useRouter();

  return (
    <section
      id="contact"
      className="about-section"
      style={{
        backgroundImage: `url(${basePath}/assets/img/contact-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="overlay d-flex align-items-center"
        style={{ backgroundColor: "#110123d1", minHeight: "100vh", width: "100vw" }}
      >
        <div className="container">
          <div className="row gy-4 align-items-center">
            
            {/* Left Side - Image (Stacks on top in mobile) */}
            <div className="col-lg-6 col-12 text-center">
              <img
                src={`${basePath}/assets/img/6737248.png`}
                alt="Digitechvault AI Innovation"
                className="aboutImg img-fluid"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="500"
              />
            </div>

            {/* Right Side - Content & Contact Info */}
            <div className="col-lg-6 col-12 text-center text-lg-start px-4">
              <h1 className="fw-bold text-white pt-3">Get in Touch</h1>
              <h5 className="fw-normal text-white pb-3">
                Ready to transform your business with AI? Let’s talk!
              </h5>

              {/* Contact Form */}
              <div className="p-box-contact">
                <form action="forms/contact.php" method="post" className="php-email-form">
                  <div className="row gy-3">
                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                    </div>
                    <div className="col-12">
                    <button class="button mr-3">
                            Submit
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
                </form>
              </div>

              {/* Contact Details */}
              <div className="contact-info mt-4">
                <h3 className="text-white">Contact Details</h3>
                <ul className="list-unstyled mt-3">
                  <li className="text-white">
                    <strong>Email:</strong> <a href="mailto:info@digitechvault.com" className="text-white">info@digitechvault.com</a>
                  </li>
                  <li className="text-white">
                    <strong>Phone:</strong> (+60) 14-757 9853
                  </li>
                  <li className="text-white">
                    <strong>Address:</strong> Serving in Myanmar, Thailand, and Malaysia.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
