import React from "react";

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Pengalaman</h3>
        <span className="about__subtitle">&#60; 1 Tahun</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Terselesaikan</h3>
        <span className="about__subtitle">&#60; 5 Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Pelayanan</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default info;
