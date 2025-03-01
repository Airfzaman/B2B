// import { FaHandshake, FaEye, FaUsers, FaClipboardCheck, FaShieldAlt, FaLightbulb, FaHeadset, FaChartLine, FaCogs, FaTools } from "react-icons/fa";
// import Head from 'next/head'; // 
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// const objectivesData = [
//   { title: "Values & Quality Policy", description: "We commit to strive for values to guide our decisions and business policies.", icon: <FaHandshake className="text-blue-600 text-4xl" /> },
//   { title: "Vision", description: "To maintain an image that portrays reliability and professionalism, exceeding customer expectations.", icon: <FaEye className="text-green-600 text-4xl" /> },
//   { title: "Teamwork", description: "We promote a diverse yet unified team, ensuring respect for all stakeholders and the environment.", icon: <FaUsers className="text-purple-600 text-4xl" /> },
//   { title: "Accountability", description: "We accept individual and team responsibilities, taking ownership of our commitments.", icon: <FaClipboardCheck className="text-red-600 text-4xl" /> },
//   { title: "Integrity", description: "We uphold the highest ethical standards with honesty and fairness in every action.", icon: <FaShieldAlt className="text-orange-600 text-4xl" /> },
//   { title: "Innovation", description: "We anticipate change and creatively deliver value to customers and stakeholders.", icon: <FaLightbulb className="text-yellow-500 text-4xl" /> },
//   { title: "Services & Support", description: "Our experienced technical support staff is dedicated to resolving issues promptly.", icon: <FaHeadset className="text-indigo-600 text-4xl" /> },
//   { title: "Consultancy", description: "We assist businesses in planning, implementation, and maintenance of technology solutions.", icon: <FaChartLine className="text-teal-600 text-4xl" /> },
//   { title: "Warranty", description: "Our warranty services are executed locally through our trusted partners.", icon: <FaCogs className="text-gray-600 text-4xl" /> },
//   { title: "Maintenance", description: "Our maintenance contracts ensure uninterrupted service for customer equipment.", icon: <FaTools className="text-blue-800 text-4xl" /> },
// ];

// const Objectives = () => {
//   return (
//     <div>
//       <Head>
//         <title>Objectives</title>
//         <meta name="description" content="Frontend Developer Portfolio" />
//         <link rel="icon" href="/logo.png" />
//       </Head>
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//               <Header />
//             </header>
//       <div className="bg-gray-100 p-8">
//       <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Objectives</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {objectivesData.map((objective, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
//             {objective.icon}
//             <h3 className="text-xl font-semibold text-gray-800 mt-4">{objective.title}</h3>
//             <p className="text-gray-600 mt-2">{objective.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     <footer className="bg-white shadow">
//             <Footer />
//           </footer>
//     </div>

//   );
// };

// export default Objectives;


import { FaHandshake, FaEye, FaUsers, FaClipboardCheck, FaShieldAlt, FaLightbulb, FaHeadset, FaChartLine, FaCogs, FaTools } from "react-icons/fa";
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const objectivesData = [
  { title: "Values & Quality Policy", description: "We commit to strive for values to guide our decisions and business policies.", icon: <FaHandshake className="text-blue-600 text-4xl" /> },
  { title: "Vision", description: "To maintain an image that portrays reliability and professionalism, exceeding customer expectations.", icon: <FaEye className="text-green-600 text-4xl" /> },
  { title: "Teamwork", description: "We promote a diverse yet unified team, ensuring respect for all stakeholders and the environment.", icon: <FaUsers className="text-purple-600 text-4xl" /> },
  { title: "Accountability", description: "We accept individual and team responsibilities, taking ownership of our commitments.", icon: <FaClipboardCheck className="text-red-600 text-4xl" /> },
  { title: "Integrity", description: "We uphold the highest ethical standards with honesty and fairness in every action.", icon: <FaShieldAlt className="text-orange-600 text-4xl" /> },
  { title: "Innovation", description: "We anticipate change and creatively deliver value to customers and stakeholders.", icon: <FaLightbulb className="text-yellow-500 text-4xl" /> },
  { title: "Services & Support", description: "Our experienced technical support staff is dedicated to resolving issues promptly.", icon: <FaHeadset className="text-indigo-600 text-4xl" /> },
  { title: "Consultancy", description: "We assist businesses in planning, implementation, and maintenance of technology solutions.", icon: <FaChartLine className="text-teal-600 text-4xl" /> },
  { title: "Warranty", description: "Our warranty services are executed locally through our trusted partners.", icon: <FaCogs className="text-gray-600 text-4xl" /> },
  { title: "Maintenance", description: "Our maintenance contracts ensure uninterrupted service for customer equipment.", icon: <FaTools className="text-blue-800 text-4xl" /> },
];

const Objectives = () => {
  return (
    <div>
      <Head>
        <title>Objectives</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
              <Header />
            </header>
      {/* Main Content (Ensure padding-top to avoid overlap) */}
      <main className="flex-grow bg-gray-100 p-8 mt-16 overflow-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectivesData.map((objective, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              {objective.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{objective.title}</h3>
              <p className="text-gray-600 mt-2">{objective.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
      {/* <footer className="w-full bg-white shadow h-16 flex items-center">
        <Footer />
      </footer> */}
    </div>
  );
};

export default Objectives;
