import { Facebook, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Manjay. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Facebook size={24} className="text-black" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Twitter size={24} className="text-black" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Github size={24} className="text-black" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
