import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black py-8 px-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-10 w-full max-w-xl flex flex-col items-center border border-gray-200/30">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-100 mb-4 font-sans text-center">About Shrinkr</h1>
        <p className="text-gray-300 mb-6 text-center font-sans text-lg max-w-lg">
          Shrinkr is a modern, privacy-focused URL shortener designed for simplicity and speed. We believe in hassle-free, secure, and beautiful link sharing for everyone.
        </p>
        <div className="w-full flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold text-gray-200 mb-2 font-sans">Our Mission</h2>
          <p className="text-gray-400 text-center font-sans max-w-md">
            To empower users with seamless, reliable, and elegant link management—no logins, no clutter, just pure utility.
          </p>
        </div>
      </div>
    </div>
  );
} 