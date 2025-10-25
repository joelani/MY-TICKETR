// import React from "react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className=" flex flex-col justify-center items-center text-center mt-24 px-6 ">
//       <h1 className="text-6xl font-bold text-gray-800 mb-4">My TicketR</h1>
//       <p className="text-lg text-gray-600 mb-8 max-w-xl">
//         Streamline your workflow and manage tickets effortlessly with our
//         all-in-one management system.
//       </p>

//       <div className="flex gap-4">
//         <Link
//           to="/login"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition"
//         >
//           Login
//         </Link>
//         <Link
//           to="/signup"
//           className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg shadow transition"
//         >
//           Get Started
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center mt-24 px-6">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 right-0 z-0"></div>

      {/* Circles */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-40">
        <div className="w-48 h-48 bg-blue-300 rounded-full absolute animate-pulse"></div>
      </div>
      <div className="absolute top-2/3 right-1/4 transform translate-x-1/2 translate-y-1/2 z-10 opacity-40">
        <div className="w-40 h-40 bg-yellow-200 rounded-full absolute animate-pulse"></div>
      </div>

      <h1 className="text-6xl font-bold text-gray-800 mb-4 z-10">My TicketR</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl z-10">
        Streamline your workflow and manage tickets effortlessly with our
        all-in-one management system.
      </p>

      <div className="flex gap-4 z-10">
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg shadow transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
