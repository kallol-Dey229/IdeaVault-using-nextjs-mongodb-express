import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-white mt-10">
      <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-5xl font-bold text-cyan-300 mb-4">
            IDEAVAULT
          </h2>

          <p className="text-gray-300 leading-7">
            Discover, share and explore innovative ideas with the community.
            Turn creativity into inspiration.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-5">
            Platform
          </h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/ideas">Ideas</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/addIdeas">Add Ideas</Link>
            <Link href="/myIdeas">My Ideas</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-gray-300">

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              info@ideavault.com
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-cyan-400" />
              +880 1908064940
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" />
              Dhaka, Bangladesh
            </div>

            
            <div className="flex gap-4 pt-4">

              <a
                href="#"
                className="bg-cyan-800 p-3 rounded-full hover:bg-cyan-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-cyan-800 p-3 rounded-full hover:bg-cyan-600 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="bg-cyan-800 p-3 rounded-full hover:bg-cyan-600 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>
        </div>

      </div>

      
      <div className="border-t border-cyan-800 py-5 text-center text-gray-400">
        © 2026 IDEAVAULT. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;