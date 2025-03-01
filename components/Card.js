// import React from 'react';
// import styled from 'styled-components';

// const Card = () => {
//   return (
//     <StyledWrapper>
//       <div className="card">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
//         </svg>
//         <div className="card__content">
//           <p className="card__title">Card Title</p>
//           <p className="card__description">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//             veniam, quis nostrud exercitation ullamco.
//           </p>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .card {
//     position: relative;
//     width: 300px;
//     height: 200px;
//     background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
//     border-radius: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     overflow: hidden;
//     transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .card svg {
//     width: 48px;
//     fill: #333;
//     transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .card:hover {
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//   }

//   .card__content {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%) rotate(-45deg);
//     width: 100%;
//     height: 100%;
//     padding: 20px;
//     box-sizing: border-box;
//     background-color: #fff;
//     opacity: 0;
//     transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .card:hover .card__content {
//     transform: translate(-50%, -50%) rotate(0deg);
//     opacity: 1;
//   }

//   .card__title {
//     margin: 0;
//     font-size: 24px;
//     color: #333;
//     font-weight: 700;
//   }

//   .card__description {
//     margin: 10px 0 0;
//     font-size: 14px;
//     color: #777;
//     line-height: 1.4;
//   }

//   .card:hover svg {
//     scale: 0;
//     transform: rotate(-45deg);
//   }`;

// export default Card;


// import React from 'react';
// import styled from 'styled-components';

// const Card = () => {
//   return (
//     <StyledWrapper>
//       <div className="card">
//         <svg xmlns="/images/ibm-logo.png" viewBox="0 0 24 24">
//           <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
//         </svg>
//         <div className="card__content">
//           <p className="card__title">Card Title</p>
//           <p className="card__description">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//             veniam, quis nostrud exercitation ullamco.
//           </p>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .card {
//     position: relative;
//     width: 300px;
//     height: 200px;
//     background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
//     border-radius: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     overflow: hidden;
//     transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

//     &:hover { /* Use & for hover state */
//       box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//     }

//     svg { /* Target svg within .card */
//       width: 48px;
//       fill: #333;
//       transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
//     }

//     &:hover svg { /* Use & for hover state */
//       scale: 0;
//       transform: rotate(-45deg);
//     }
//   }

//   .card__content {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%) rotate(-45deg);
//     width: 100%;
//     height: 100%;
//     padding: 20px;
//     box-sizing: border-box;
//     background-color: #fff;
//     opacity: 0;
//     transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

//     .card:hover & { /* Use & to target the hover state of the parent .card */
//       transform: translate(-50%, -50%) rotate(0deg);
//       opacity: 1;
//     }
//   }

//   .card__title {
//     margin: 0;
//     font-size: 24px;
//     color: #333;
//     font-weight: 700;
//   }

//   .card__description {
//     margin: 10px 0 0;
//     font-size: 14px;
//     color: #777;
//     line-height: 1.4;
//   }
// `;

// export default Card;

// import React from 'react';

// const Card = () => {
//   return (
//     <div className="relative w-[300px] h-[200px] bg-gradient-to-r from-[#f89b29] to-[#ff0f7b] rounded-lg overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-lg">
//       <svg xmlns="/images/logo-b2b.png" viewBox="0 0 24 24" className="w-12 fill-[#333] transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-0 hover:-rotate-45">
//         <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
//       </svg>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-white opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
//         <p className="m-0 text-2xl text-[#333] font-bold">Card Title</p>
//         <p className="m-2 text-sm text-[#777] leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//           veniam, quis nostrud exercitation ullamco.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from 'react';

const Card = () => {
  return (
    <div className="relative w-[300px] h-[200px] bg-gradient-to-r from-[#f89b29] to-[#ff0f7b] rounded-lg overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-lg">
      <img 
        src="/images/ibm-logo.png" 
        alt="Logo" 
        className="absolute inset-0 w-full h-full object-cover transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-0 hover:-rotate-45" 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-white opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100 ">
        <p className="m-0 text-2xl text-[#333] font-bold">Card Title</p>
        <p className="m-2 text-sm text-[#777] leading-relaxed">
          Lorem ipsum dolor sit amet...
        </p>
      </div>
    </div>
  );
};

export default Card;