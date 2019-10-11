import React from "react";
const BigCommerceSites = () => {
  return (
    <React.Fragment>
      <p className="main2SiteHeading">BIGCOMMERCE SITES</p>
      <div className="sites">
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/blog/awesome-event-mobile-tablet-responsive.jpg?sfvrsn=a093228b_0&MaxWidth=387&MaxHeight=247&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments&Signature=D2F46487FB69125444DAB1B245DB2AADB37A482B"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            AWESOME EVENT
          </p>
        </div>
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/blog/rockymountainstove_responsiveness4396e21253ab47a2b6ba86e5366e6172.jpg?sfvrsn=7fb3ee15_0&MaxWidth=387&MaxHeight=247&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments&Signature=A41CB43A92456E1AEB7773483848691EB995A51D"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            ROCKY MOUNTAIN STOVE AND FIREPLACE
          </p>
        </div>
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/blog/rocky-mountain-diagnostic-responsive.jpg?sfvrsn=3bb4c434_0&MaxWidth=387&MaxHeight=247&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments&Signature=158E318F9FBFC9D088C04D5B2D6EBEDAFE790275"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            ROCKY MOUNTAIN DIAGNOSTICS
          </p>
        </div>
      </div>
      {/* next*/}
      <div className="sites">
        <div className="siteDiv">
          <div className="sitePic">
            <img
              src="https://www.infront.com/images/default-source/blog/avalon-clothing-company.jpg?sfvrsn=54c19db3_0&MaxWidth=387&MaxHeight=247&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments&Signature=F1A40D7E4B219B6C839C805462B3AA290D4AD433"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <p className="sitePicHeading font-weight-bold text-center">
            AVALON CLOTHING COMPANY
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BigCommerceSites;
