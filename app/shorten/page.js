"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("")

  const generateShortUrl = async () => {
    //directly copy from postman in the right sidbar having the url and shorturl
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    const raw = JSON.stringify({
      "url": url,
      "shorturl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          alert(result.error);
        } else {
          alert("Short URL generated successfully");
          setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
          setUrl("");
          setShortUrl("");
        }  
      })
      .catch((error) => console.error(error));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    generateShortUrl();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black py-8 px-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-10 w-full max-w-xl flex flex-col items-center border border-gray-200/30">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-100 mb-2 font-sans text-center">Generate your shortened URLs</h1>
        <p className="text-gray-300 mb-6 text-center font-sans">Paste your long link below and get a short, shareable URL instantly.</p>
        <form className="w-full flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            value={url}
            placeholder="Enter your URL"
            className="w-full p-3 rounded-lg border border-gray-400/30 bg-black/40 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none font-sans text-lg transition-all"
            onChange={e => setUrl(e.target.value)}
          />
          <input
            type="text"
            value={shortUrl}
            placeholder="Enter your custom short URL"
            className="w-full p-3 rounded-lg border border-gray-400/30 bg-black/40 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none font-sans text-lg transition-all"
            onChange={e => setShortUrl(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 font-sans text-lg mt-2"
          >
            Shorten
          </button>
        {generated && <p>Short URL: <Link href={generated} target="_blank" className="text-blue-500 hover:text-blue-600">{generated}</Link></p>} 
        </form>
      </div>
    </div>
  )
}

export default Shorten