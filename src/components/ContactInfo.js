import React from "react";

const ContactInfo = () => {
  return (
    <div className="container md:mx-auto w-full mx-auto md:w-11/12 px-4 mb-12">
      <div className="backdrop-blur-md bg-white/50 p-6 rounded-md shadow-md flex flex-row justify-between">
        <div className="">
          <h2 className="text-xl text-gray-700 font-semibold mb-4">
            Points of contact
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">
              Windmill Hypnotherapy
            </h3>
            <p className="text-gray-600">The Hub</p>
            <p className="text-gray-600">41 Church Rd</p>
            <p className="text-gray-600">Lytham, FY8 5LN</p>
          </div>
          <div className="mb-6">
            <h3 className="text-gray-700 text-lg font-semibold">
              Service Inquiries
            </h3>
            <a
              href="mailto:windmillhypnotherapy@gmail.com"
              className="text-indigo-600"
            >
              windmillhypnotherapy@gmail.com
            </a>
            <h1 className="text-indigo-600">
              <a href="tel:+447825674771">Tel 07825674771</a>
            </h1>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Support</h3>
            <a
              href="mailto:windmillhypnotherapy@gmail.com"
              className="text-indigo-600"
            >
              windmillhypnotherapy@gmail.com
            </a>
          </div>
        </div>
        <img
          src="/logo.png"
          className="hidden md:flex md:w-1/4 mask mask-squircle"
        ></img>
      </div>
    </div>
  );
};

export default ContactInfo;
