import { Earth, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white pt-12 pb-6">
      <div className="max-w-7xl  mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo and Short Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Vision AI</h2>
          <p className="text-sm text-gray-400 mt-2">
            Your personal AI assistant for career growth. Get AI-driven
            insights, mock interviews, and resume-building tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Copyright */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400">Follow Us</h3>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white hover:-translate-y-2 transition-transform duration-300 hover:scale-110">
              <Github />
            </a>
            <a href="#" className="text-gray-400 hover:text-white hover:-translate-y-2 transition-transform duration-300 hover:scale-110">
              <Earth />
            </a>
            <a href="#" className="text-gray-400 hover:text-white hover:-translate-y-2 transition-transform duration-300 hover:scale-110">
              <Linkedin />
            </a>
          </div>
        </div>

      </div>
      <p className="text-gray-400 text-center text-sm mt-8">&copy; {new Date().getFullYear()} Vision AI. All rights reserved.</p>
    </footer>
  );
}
