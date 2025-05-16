import React from "react";
import "./AboutUs.css";

const AboutUs = ({ fullPage = false }) => {
  return (
    <section className={`about-section ${fullPage ? "full-page" : ""}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Us</h2>
          <div className="divider"></div>
        </div>

        <div className="about-content">
          <div className="founder-image-container">
            <div className="founder-image-wrapper">
              <img
                src="/api/placeholder/240/240"
                alt="Founder Portrait"
                className="founder-image"
              />
            </div>
          </div>

          <div className="about-text">
            <p className="lead-text">
              We started CaroCart to serve army families in Vizag with reliable
              and prompt delivery services. Thank you for trusting us!
            </p>

            {fullPage && (
              <div className="additional-info">
                <div className="info-block">
                  <h3 className="info-title">
                    Why CaroCart for Army Families?
                  </h3>
                  <p className="info-text">
                    Serving those who serve: CaroCart for Army families. At
                    CaroCart, we deeply respect the courage, discipline, and
                    dedication of our Indian Army personnel. We understand that
                    army families lead unique lives, often away from home and
                    under tight schedules.
                    <br />
                    <br />
                    That’s why we created CaroCart – a quick delivery service
                    specially designed for army families. Whether it's a grocery
                    refill, urgent medicine, fresh food, emergency services or
                    important documents, our trained and verified delivery staff
                    are ready to serve, so you can focus on what matters most.
                  </p>
                </div>

                <div className="info-block">
                  <h3 className="info-title">What Makes CaroCart Different?</h3>
                  <ul className="info-text">
                    <li>
                      <strong>Military Precision:</strong> Timely, reliable, and
                      respectful delivery.
                    </li>
                    <li>
                      <strong>Trusted Team:</strong> Locally verified delivery
                      partners.
                    </li>
                    <li>
                      <strong>Essentials Delivered Fast:</strong> Groceries,
                      food, medicines & more at your doorstep.
                    </li>
                    <li>
                      <strong>Community Commitment:</strong> Proudly supporting
                      the needs of our heroes and their families.
                    </li>
                  </ul>
                  <p className="info-text mt-3">
                    We salute your service. Let us serve you in return.
                    <br />
                    <strong>Jai Hind 🇮🇳</strong>
                  </p>
                </div>

                <div className="info-block">
                  <h3 className="info-title">Our Mission</h3>
                  <p className="info-text">
                    To provide military families in Vizagapatam with convenient,
                    reliable, and prompt delivery services, ensuring they have
                    easy access to essentials without having to leave the
                    comfort of their homes.
                  </p>
                </div>

                <div className="info-block">
                  <h3 className="info-title">Our Team</h3>
                  <p className="info-text">
                    Our team consists of dedicated professionals who understand
                    the unique needs of military families. Many of our staff
                    come from military backgrounds themselves, giving us insight
                    into how best to serve our community.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
