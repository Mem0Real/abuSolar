import React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row md:flex-row md:gap-x-12 sm:gap-y-6 justify-center items-center">
        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3300436899854!2d38.746425373763365!3d9.033627165652588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f84aa3c3c1%3A0x893dcbf82049b25e!2zS2VsaWZhIEJ1c2luZXNzIENlbnRlciB8IFBpYXp6YSB8IOGKqOGIiuGNiyDhi6jhjIjhiaDhi6sg4Yib4YuV4Yqo4YiNIHwg4Y2S4Yur4Yiz!5e0!3m2!1sen!2set!4v1671671735433!5m2!1sen!2set"
          width="600"
          height="450"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl mt-24"
        ></iframe>
        {/* Info */}
        <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg text-black h-96 lg:w-1/3 w-full rounded-3xl lg:ml-5 lg:mt-24 mt-6">
          <h2 className="underline text-3xl text-center lg:mt-12">
            Contact Info
          </h2>
          <div className="pl-10 pt-5">
            <p className="bold italic">Address</p>
            <p className="pl-5">
              Kelifa Business Center 4th Floor <br /> Room number 122
            </p>
            <br />
            <p className="bold italic">Phone Number</p>
            <ul className="pl-5">
              <li>+251940572005</li>
              <li>+251966778899</li>
            </ul>
            <br />
            <p className="bold italic">Email Address</p>
            <p className="pl-5">abuSolarTech@gmail.com</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
