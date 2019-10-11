import React from "react";
const SmallBussinessSites = () => {
  return (
    <React.Fragment>
      <p className="main2SiteHeading">SMALL BUSINESS SITES</p>
      <div className="sites">
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/web-design/portfolio-images/responsive-design-mo.jpg?sfvrsn=b5be7813_2"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            MIKE ODIN'S ALASKA ADVENTURES
          </p>
        </div>
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/web-design/portfolio-images/responsive-design-enclave.jpg?sfvrsn=ec4152de_2"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            ENCLAVE ON RIVIERA
          </p>
        </div>
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/web-design/portfolio-images/responsive-design-mm.jpg?sfvrsn=1be5f46_2"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            MICHAEL MCKEE GALLERY
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SmallBussinessSites;
