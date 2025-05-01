// components/Footer.tsx
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text mb-2">
              Yieldra
            </div>
            <p className="text-gray-400">
              A hackathon project demonstrating yield generation on stablecoins
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="h-6 w-6" />
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-white transition">
              <Discord className="h-6 w-6" />
            </a> */}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Yieldra Hackathon Project. All rights
            reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy
            </a>
            <a href="https://github.com/Yieldra" target="_blank" className="text-gray-500 hover:text-gray-300 text-sm">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
