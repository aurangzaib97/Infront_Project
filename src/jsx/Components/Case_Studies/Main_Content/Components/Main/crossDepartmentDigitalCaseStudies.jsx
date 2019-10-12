import React from "react";
const SitefinitySites = () => {
  return (
    <React.Fragment>
      <p className="main2SiteHeading">
        CROSS DEPARTMENTAL DIGITAL CASE STUDIES
      </p>
      <div className="sites">
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/blog/empire_roofing_case_study.jpg?sfvrsn=1373a4da_3"
              alt=""
              className="siteImg"
              height="100%"
              width="100%"
            />
            <div className="sitePicHover d-flex flex-column align-items-center justify-content-center">
              <p className="hoverText1 text-center text-light m-0">
                EMPIRE ROOFING AND RESTORATION
              </p>
              <p className="hoverText2">find out more</p>
            </div>
          </div>
        </div>
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/blog/delimmune_case_study.jpg?sfvrsn=db6d5288_3"
              alt=""
              height="100%"
              width="100%"
            />
            <div className="sitePicHover d-flex flex-column align-items-center justify-content-center">
              <p className="hoverText1 text-center text-light m-0">
                DEL IMMUNE V
              </p>
              <p className="hoverText2">find out more</p>
            </div>
          </div>
        </div>
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/blog/st-patricks-day-parade-case-study.jpg?sfvrsn=1b30efe1_3"
              alt=""
              height="100%"
              width="100%"
            />
            <div className="sitePicHover d-flex flex-column align-items-center justify-content-center">
              <p className="hoverText1 text-center text-light m-0">
                DENVER ST. PATRICK'S DAY PARADE
              </p>
              <p className="hoverText2">find out more</p>
            </div>
          </div>
        </div>
      </div>
      {/* next */}
      <div className="sites">
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/blog/ge_johnson_case_study.jpg?sfvrsn=38f28604_3"
              alt=""
              height="100%"
              width="100%"
            />
            <div className="sitePicHover d-flex flex-column align-items-center justify-content-center">
              <p className="hoverText1 text-center text-light m-0">
                GE JOHNSON CONSTRUCTION COMPANY
              </p>
              <p className="hoverText2">find out more</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SitefinitySites;
