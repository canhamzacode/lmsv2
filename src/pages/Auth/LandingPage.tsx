import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto  bg-opacity-80 p-4 rounded-lg text-center grid gap-[15px]">
      <h1 className="text-2xl text-[#374957]">VIRTUOUS SPROUT ACADEMY</h1>
      <p className="text-[#712126]">
        An haven where you can get your child a solid/sound western and islamic
        education. We offer western education, Tahfeedhul Qur’an, virtue and
        Etiquettes, Extra-Curriculum activities, I.T and Computer Training.
      </p>
      <p>Result Portal</p>
      <Link to="/login">
        <button className="bg-[#A77B37] p-[15px] text-[#fff] w-full max-w-[400px] mx-auto rounded ">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
