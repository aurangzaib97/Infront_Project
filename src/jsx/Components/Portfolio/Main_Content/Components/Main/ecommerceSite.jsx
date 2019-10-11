import React from "react";
const Ecommerce = () => {
  return (
    <React.Fragment>
      <p className="main2SiteHeading">ECOMMERCE SITES</p>
      <div className="sites">
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/web-design/portfolio-images/responsive-design-cs.jpg?sfvrsn=57f23a9a_2"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            COLORADO STANDBY
          </p>
        </div>
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/web-design/portfolio-images/responsive-design-wolfe.jpg?sfvrsn=b6fbf36a_2"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            WOLFE OUTDOOR SPORTS
          </p>
        </div>
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/web-design/portfolio-images/responsive-design-delimmune.jpg?sfvrsn=2a1ac007_2"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            DELIMMUNE V
          </p>
        </div>
      </div>
      {/* next */}
      <div className="sites">
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/blog/alpine-mech-responsive-design255463360cc4497eb210d8aec834cfd4.jpg?sfvrsn=b019d331_0&MaxWidth=387&MaxHeight=247&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments&Signature=71BC7D58C51E1B1B5304047B563DA4AD7F76A483"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            ALPINE MECHANISMS
          </p>
        </div>
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/blog/veteransreferringveteransresponsiveness3da6130739c642cfbb50847601627fe6.jpg?sfvrsn=5a476cd7_0&MaxWidth=387&MaxHeight=247&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments&Signature=4AAEF1C37EB644748C90AA8C54F8F0829B1AA9E7"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            VETERANS REFERRING VETERANS
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ecommerce;
