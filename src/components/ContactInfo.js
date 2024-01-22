import React from "react";

const ContactInfo = () => {
  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="bg-gray-50 bg-opacity-75 p-6 rounded-md shadow-md flex flex-row justify-between">
        <div className="">
          <h2 className="text-xl text-gray-700 font-semibold mb-4">
            Points of contact
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">
              Windmill Hypnotherapy
            </h3>
            <p className="text-gray-600">41 Church Rd</p>
            <p className="text-gray-600">Lytham, Lytham Saint Annes FY8 5LN</p>
          </div>
          <div className="mb-6">
            <h3 className="text-gray-700 text-lg font-semibold">
              Service Inquiries
            </h3>
            <a
              href="mailto:enquiries@windmillhypnotherapy.com"
              className="text-indigo-600"
            >
              enquiries@windmillhypnotherapy.com
            </a>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Support</h3>
            <a href="mailto:support@flowbite.com" className="text-indigo-600">
              support@windmillhypnotherapy.com
            </a>
          </div>
        </div>
        <img src="/logo.png" className="w-1/4 mask mask-squircle"></img>
      </div>
    </div>
  );
};

export default ContactInfo;
