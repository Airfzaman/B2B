"use client"; // Necessary for Next.js App Router

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/image1.jpg", alt: "First Slide", title: "First Slide Label", description: "Some representative placeholder content for the first slide." },
  { src: "/rj.jpg", alt: "Second Slide", title: "Second Slide Label", description: "Some representative placeholder content for the second slide." },
  { src: "/image2.jpg", alt: "Third Slide", title: "Third Slide Label", description: "Some representative placeholder content for the third slide." }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    // <div className="relative w-full overflow-hidden h-64 rounded-lg shadow-lg h-[600px]">
    //   {/* Slides */}
    //   <div className="flex transition-transform duration-500 ease-in-out transform " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
    //     {images.map((img, index) => (
    //       <div key={index} className="min-w-full relative">
    //         <Image src={img.src} alt={img.alt} width={800} height={800} className="w-full h-64 object-cover" />
    //         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
    //           <h5 className="text-lg font-semibold">{img.title}</h5>
    //           <p className="text-sm">{img.description}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Navigation Buttons */}
    //   <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700">
    //     ❮
    //   </button>
    //   <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700">
    //     ❯
    //   </button>

    //   {/* Indicators */}
    //   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    //     {images.map((_, index) => (
    //       <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"}`} />
    //     ))}
    //   </div>
    // </div>
    <div className="relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg h-[500px]">
  {/* Slides */}
  <div
    className="flex transition-transform duration-500 ease-in-out transform h-full"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((img, index) => (
      <div key={index} className="min-w-full relative h-full">
        <Image
          src={img.src}
          alt={img.alt}
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
          <h5 className="text-lg font-semibold">{img.title}</h5>
          <p className="text-sm">{img.description}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Navigation Buttons */}
  <button
    onClick={prevSlide}
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
  >
    ❮
  </button>
  <button
    onClick={nextSlide}
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
  >
    ❯
  </button>

  {/* Indicators */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-3 h-3 rounded-full ${
          currentIndex === index ? "bg-white" : ""
        }`}
      />
    ))}
  </div>
</div>



  );
}
