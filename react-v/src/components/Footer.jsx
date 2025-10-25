import { Github, GithubIcon, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col bg-blue-100 items-center justify-around w-full py-16 text-sm text-gray-800/70">
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Home
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            About
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Services
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Contact
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Help
          </a>
        </div>
        <div className="flex items-center gap-4 mt-8 text-blue-900">
          <a
            href="#"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <Twitter
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </a>
          <a
            href="#"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <Instagram
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </a>
          <a
            href="#"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <Linkedin
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </a>
          <a
            href="#"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <Github
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </a>
        </div>
        <p className="mt-8 text-center">
          Copyright © 2025 <a href="https://prebuiltui.com">Lani</a>. All rights
          reservered.
        </p>
      </footer>
    </>
  );
}
