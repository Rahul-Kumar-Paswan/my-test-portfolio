import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-darkbg text-gray-400 text-sm w-full">
      <div className="border-t border-gray-600 py-6 text-center">
        <p>© 2025 Rahul Paswan. All rights reserved.</p>
        <div className="flex justify-center gap-5 mt-3 text-white text-lg">
          <a
            href="https://github.com/rahulpaswan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="cursor-pointer hover:text-accent transition-colors duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/rahulpaswan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="cursor-pointer hover:text-accent transition-colors duration-300" />
          </a>
          <a href="mailto:rahul@example.com">
            <FaEnvelope className="cursor-pointer hover:text-accent transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
