import React from "react";
import Frontend from "./WebMobile";
import Backend from "./Design";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skill section" id="skills">
      <h2 className="section__title">Keterampilan</h2>
      <span className="section__subtitle">Tingkat Keterampilan Saya</span>

      <div className="skills__container container grid">
        <Frontend />

        <Backend />
      </div>
    </section>
  );
};

export default Skills;
