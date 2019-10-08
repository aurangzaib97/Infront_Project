import React from "react";
const Center = () => {
  return (
    <React.Fragment>
      <div className="left-side center">
        <h5 className="center-heading text-light font-italic font-weight-bold">
          Have Questions or Need Help?
        </h5>
        <div className="contact-numbers">
          <p className="contact-number text-light">
            SALES:
            <span className="font-weight-bold gold-hover">(719) 577-4404</span>
          </p>
          <p className="contact-number text-light">
            SUPPORT:
            <span className="font-weight-bold gold-hover">(719) 359-5540</span>
          </p>
          <p className="contact-number text-light">
            BILLING:
            <span className="font-weight-bold gold-hover">(719) 577-4404</span>
          </p>
          <p className="contact-number text-light">
            FAX: <span>(719) 630-7073</span>
          </p>
        </div>
        <div className="links text-light font-italic font-weight-bold">
          <h6 className="link gold-hover">Open a Support Ticket</h6>
          <h6 className="link gold-hover">Job Openings</h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Center;
