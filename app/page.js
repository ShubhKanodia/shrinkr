import Image from "next/image";

export default function Home() {
  return (
    <main>
     <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] items-center bg-gray-50/80 py-8 px-4 md:px-16">
      <div className="flex flex-col gap-6 items-start justify-center text-left md:pr-10">
        <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900 leading-tight">Shrinkr: Effortless URL Shortening</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl">Hassle-free URL shortening in seconds. No login, no clutter—just clean, simple links.</p>
        <div className="flex items-center gap-4 pl-60">
        <a href="/shorten" className="mt-6 inline-block bg-black text-white text-lg font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-800 transition-colors duration-200 font-sans">Try Now</a>
        </div>
      </div>
      <div className="flex items-center justify-center w-full pl-100">
        <Image src="/vector.png" alt="Vector" width={600} height={600} className="drop-shadow-xl rounded-xl" />
      </div>
     </section>
    </main>
  );
}
