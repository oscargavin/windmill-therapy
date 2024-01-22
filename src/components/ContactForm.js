import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    topic: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here, such as sending data to an API
    console.log(formData);
  };

  return (
    <div className="md:px-32">
      <h1 className="drop-shadow-md rounded-md text-gray-700 mx-auto justify-center items-center flex mt-16 font-bold text-2xl">
        Contact Us
      </h1>
      <div className="mx-auto md:pr-2 w-full grid grid-cols-1 md:grid-cols-6 my-12 bg-gray-50 bg-opacity-15 rounded-lg drop-shadow-lg">
        <img
          src="/discussion.png"
          className="md:col-start-1 md:col-span-3 md:rounded-l-md"
        ></img>
        <div className="md:col-start-4 md:col-span-3 flex flex-col items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 flex flex-col mx-auto w-full"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your email address (So we can reply to you)
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="py-1 px-2 mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="john@appleseed.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-gray-700"
              >
                Topic
              </label>
              <select
                name="topic"
                id="topic"
                className="py-1 px-2 mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                value={formData.topic}
                onChange={handleChange}
                required
              >
                <option value="">Select a topic</option>
                <option value="general">General enquiry</option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="py-1 px-2 mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Let us know how we can help you"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="py-1 px-2 bg-white mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Leave a comment..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="py-2 px-4 bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500 focus:ring-offset-cyan-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
