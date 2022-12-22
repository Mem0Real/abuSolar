import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      {/* <video autoPlay loop muted className="w-screen h-screen inline-block absolute z-0">
        <source src="/vids/about.mp4" />
      </video> */}
      <div className="container bg-aboutBg bg-cover bg-center bg-no-repeat">
        <div className="box-content flex flex-col items-center justify-center h-3/4 pt-48 w-3/4 mx-auto">
          <h3 className="text-2xl">Mission</h3>
          <br />
          <h2 className="text-xl text-center">
            To provide highest quality solar products across Ethiopia. <br />
            To Ensure every house has a renewable electric source to be used in
            all areas of life. <br />
            To brighten and propel our country to the future.
          </h2>
        </div>
        <div className="box-content flex flex-col items-center justify-center h-3/4 my-24 w-3/4 mx-auto">
          <h3 className="text-2xl">Vision</h3>
          <br />
          <h2 className="text-xl text-center">
            To give power across all of Ethiopia and enable our country-men and
            women electricity within the next 10 years.
          </h2>
        </div>
        <div className="box-content flex flex-col items-center justify-center h-3/4 mt-24 pb-24 w-3/4 mx-auto">
          <h3 className="text-2xl">About us</h3>
          <br />
          <h2 className="text-xl text-center">
            As a solar power system technology specialist, MUST has been
            developing and distributing high-quality PV solar panels, solar
            water pump, inverters and innovative technology for Ethiopians
            energy management for over 10 years
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export default About;
