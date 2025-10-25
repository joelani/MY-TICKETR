import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" flex flex-col justify-center items-center text-center mt-24 px-6 ">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">My TicketR</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        Streamline your workflow and manage tickets effortlessly with our
        all-in-one management system.
      </p>

      <div className="flex gap-4">
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
