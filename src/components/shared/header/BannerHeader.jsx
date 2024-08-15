import React from "react";
import "./BannerHeader.css";

const BannerHeader = () => {
  return (
    <>
      <div className="header">
        <div className="header-container banner">
          <h1 className="header-title">
            مخفیگاه شهری خارق العاده{" "}
            <span className="cssanimation ">رستوران هتل آریا</span>
          </h1>
          <h2 className="header-disc">
            و گنجینه ای در دل شهر خاطراتی فراموش نشدنی به ارزش آرامش و لذّت از
            اقامت
          </h2>
          <h3 className="header-h3">
            و یک طعم به یاد ماندنی جایی که هر روزش یک روز خاص هست
          </h3>
          <button className="header-btn">ثبت نام / ورود</button>
          <div className="headerSearch" dir="ltr"></div>
        </div>
      </div>
    </>
  );
};

export default BannerHeader;
