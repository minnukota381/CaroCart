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
