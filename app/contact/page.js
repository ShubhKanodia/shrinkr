import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black py-8 px-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-10 w-full max-w-xl flex flex-col items-center border border-gray-200/30">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-100 mb-4 font-sans text-center">Contact Us</h1>
        <p className="text-gray-300 mb-6 text-center font-sans text-lg max-w-lg">
          Have questions or feedback? We'd love to hear from you! Fill out the form below and our team will get back to you soon.
        </p>
        <form className="w-full flex flex-col gap-4 items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-400/30 bg-black/40 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none font-sans text-lg transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-400/30 bg-black/40 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none font-sans text-lg transition-all"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-400/30 bg-black/40 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none font-sans text-lg transition-all"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 font-sans text-lg mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
} 