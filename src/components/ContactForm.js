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
    console.log(formData);
  };

  return (
    <div className="md:mx-auto mx-auto w-11/12 md:px-32">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="drop-shadow-md rounded-md mb-6 text-gray-700 mx-auto justify-center items-center flex mt-16 font-bold text-4xl underline">
          Contact
        </h1>
        <div className="flex flex-row space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-phone-filled"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
          <h1 className="text-2xl">
            <a href="tel:+447825674771">Tel 07825674771</a>
          </h1>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mail-filled"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
              stroke-width="0"
              fill="currentColor"
            />
            <path
              d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
          <h1 className="text-2xl">
            <a href="mailto:enquiries@windmilltherapy.com">
              enquiries@windmilltherapy.com
            </a>
          </h1>
        </div>
      </div>
      <div className="mx-auto md:pr-2 w-full grid grid-cols-1 md:grid-cols-6 my-12 bg-gray-50 bg-opacity-15 rounded-lg drop-shadow-lg">
        <img
          src="/discussion.png"
          className="md:col-start-1 md:col-span-3 rounded-t-lg"
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
                placeholder="email@server.com"
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
