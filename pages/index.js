import Head from 'next/head'; // 
// Import Head from Next.js
import Carousel from "/components/Carousel";
import Header from '../components/Header'; // Ensure this is a valid React component
import Footer from '../components/Footer'; // Ensure this is a valid React component
// import { useEffect } from 'react';
import Partners from '/Components/Partners';
import { useState, useEffect } from 'react';
import Image from "next/image";
import DarkModeToggle from '../components/DarkModeToggle';
import Link from 'next/link'; // Import Link from Next.js

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Welcome to the B2B systems and solution';

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting) {
        // Typing effect
        setDisplayedText(fullText.substring(0, index + 1));
        index++;

        // If full text is displayed, wait for a while then start deleting
        if (index > fullText.length) {
          isDeleting = true;
          setTimeout(() => {}, 1000); // Pause before deleting
        }
      } else {
        // Deleting effect
        setDisplayedText(fullText.substring(0, index - 1));
        index--;

        // If completely deleted, restart typing
        if (index === 0) {
          isDeleting = false;
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* Page Metadata */}
      <Head>
        <title>B2B</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>

      {/* dark:bg-gray-900 */}
      {/* Main Content */}
      {/* <main className="lg:pt-4  dark:bg-gray-900 bg-gray-100 min-h-screen  items-center justify-center px-4 lg:px-12"> */}
      <main className="flex-grow bg-gray-100 sm:p-8 mt-8 overflow-auto">
        <div className="flex justify-end flex-wrap">
          <div className="flex items-center justify-center sm:justify-start">
            <img
              src="/images/msme-logo.png"
              alt="MSME Logo"
              className="h-16 sm:h-24 w-auto mr-4 mb-2 sm:mb-0"
            />
            <img
              src="/images/gem-logo.png"
              alt="GEM Logo"
              className="h-16 sm:h-24 w-auto mb-2 sm:mb-0"
            />
          </div>
        </div>
        {/* <h1 className="text-center md:text-5 text-3xl  font-bold mb-6 text-sky-600">
          {displayedText}
        </h1> */}
        <Carousel />
        <section className="py-14">
          <div className="max-w-screen-xl mx-auto md:px-8">
              <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                  <div className="flex-1 sm:hidden lg:block">
                      <img 
                          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                          className="md:max-w-lg sm:rounded-lg" 
                          alt="Image related to ICT solutions (replace with a more descriptive alt text)" 
                      />
                  </div>
                  <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                      <h3 className="text-indigo-600 font-semibold">
                          Professional services
                      </h3>
                      <p className="text-gray-800 text-3xl font-semibold sm:text-4xl text-justify">
                      &ldquo; Leading ICT Infrastructure Solutions Provider in North Eastern India &#8221;
                      </p>
                      <p className="mt-3 text-gray-600 text-justify">
                          We are a leading solution provider of ICT infrastructure in the field of Hardware Specifications, Networking, Video Conferencing, EPABX, Electrification etc. in North Eastern India. Our inception has been based on constant innovation through leadership, to ensure that our customers are always able to better manage their operational costs, productivity and time management, and keep-up with today's fast paced business environment.
                      </p>
                      <p className="mt-3 text-gray-600 text-justify">
                          As an independent business partner of HP India Pvt. Ltd., B2B Systems and Solutions is able to provide customers with state-of-the-art technology from a globally recognised and trusted source. HP, a USA company, is considered the global leader in ICT products & solutions and B2B Systems and Solutions is able to draw on its extensive sales and support networks in order to offer its customers the very best in ICT product and solutions. We differentiate ourselves by moving away from being a purveyor of box-dropping, to a company that incorporates each element of the IT solutions process. We strive to achieve a dominant position through offering our clients a comprehensive and customised end-to-end solution, regardless of the industry they operate in.
                      </p>


                      <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">   
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
        </section>
        <div className="align-center justify-center mt-4">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Our <span className='text-sky-400'>Partners</span></h1>
          </div>
            <Partners />
          <div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
}

// import Head from 'next/head';
// import { useState, useEffect } from 'react';
// import Carousel from "/components/Carousel";
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Partners from '/Components/Partners';
// import Image from "next/image";

// export default function Home() {
//   const [displayedText, setDisplayedText] = useState('');
//   const fullText = 'Welcome to the B2B system and solution';
  
//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < fullText.length) {
//         setDisplayedText(fullText.substring(0, index + 1));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Page Metadata */}
//       <Head>
//         <title>B2B</title>
//         <meta name="description" content="Frontend Developer Portfolio" />
//         <link rel="icon" href="/logo.png" />
//       </Head>

//       {/* Fixed Header */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50 h-16 flex items-center">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-8 pt-20 overflow-auto">
//         {/* Logos */}
//         <div className="flex justify-end flex-wrap shadow-md p-4">
//           <div className="flex items-center">
//             <img src="/images/msme-logo.png" alt="MSME Logo" className="h-16 sm:h-24 w-auto mr-4" />
//             <img src="/images/gem-logo.png" alt="GEM Logo" className="h-16 sm:h-24 w-auto" />
//           </div>
//         </div>

//         {/* Animated Title */}
//         <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
//           {displayedText}
//         </h1>

//         {/* Carousel & Partners */}
//         <Carousel />
//         <div className="flex justify-center mt-4">
//           <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//             Our <span className="text-blue-600">Partners</span>
//           </h1>
//         </div>
//         <Partners />
//       </main>

//       {/* Footer */}
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// }
