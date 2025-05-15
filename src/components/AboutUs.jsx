import React from "react";

const AboutUs = ({ fullPage = false }) => {
  return (
    <div className={`py-5 bg-light ${fullPage ? "mt-5 pt-5" : ""}`}>
      <div className="container">
        <h2 className="text-center text-dark mb-5 fw-bold fs-2">About Us</h2>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div
              className="rounded-circle overflow-hidden mx-auto"
              style={{
                width: "180px",
                height: "180px",
                backgroundColor: "#d4edda",
              }}
            >
              <img
                src="/api/placeholder/240/240"
                alt="Founder Portrait"
                className="img-fluid rounded-circle w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-md-8">
            <p className="text-muted fs-5 text-center text-md-start">
              We started CaroCart to serve army families in Vizag with reliable
              and prompt delivery services. Thank you for trusting us!
            </p>

            {fullPage && (
              <div className="mt-4">
                <h4 className="text-success fw-semibold mb-2">Our Mission</h4>
                <p className="text-muted">
                  To provide military families in Vizagapatam with convenient,
                  reliable, and prompt delivery services, ensuring they have
                  easy access to essentials without having to leave the comfort
                  of their homes.
                </p>

                <h4 className="text-success fw-semibold mt-4 mb-2">Our Team</h4>
                <p className="text-muted">
                  Our team consists of dedicated professionals who understand
                  the unique needs of military families. Many of our staff come
                  from military backgrounds themselves, giving us insight into
                  how best to serve our community.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
