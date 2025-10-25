import Features from "../components/Features";
import Hero from "../components/Hero";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-linear-to-b from-blue-100 to-white pt-6  overflow-hidden">
      {/* Decorative Circles */}
      {/* <div className="absolute top-10 left-10 w-24 h-24 bg-blue-300 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-300 rounded-full opacity-30 blur-2xl"></div> */}
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* Wavy Footer SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-40 text-blue-200"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,80C672,75,768,117,864,154.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96V320H0Z"
          ></path>
        </svg>
      </div>{" "}
      {/* Footer */}
      <footer className="text-center py-6 bg-blue-100 w-full">
        <p className="text-sm text-gray-600">
          © 2025 TicketFlow. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
