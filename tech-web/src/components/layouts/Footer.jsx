import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  // faLetterboxd,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocation,
  faPhone,
  faLocationDot,
  // faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-8 mt-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <figure className="mb-4 w-24">
                <img
                  src="/assets/footerLogo.png"
                  alt="logo"
                  className="w-3/4"
                />
              </figure>
              <p className="text-md w-3/5">
                Building the Future, Powered by Technology.
              </p>
              <div className="flex justify-between w-36 text-4xl my-8">
                <a href="linkedin.com" className="hover:text-blue-500">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="google.com" className="hover:text-pink-500">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="linkedin.com" className="hover:text-blue-500">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 mt-14 text-blue-500">
                Quick Links
              </h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 mt-14 text-blue-500">
                Services
              </h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Website Development
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    App Development
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    AI Development
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Chatbot Development
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 mt-14 text-blue-500">
                Contact
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="tel:+918318999388"
                    className="hover:underline"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="mr-2 text-green-500"
                    />
                    +91-8318999388
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="mailto:techecho.kanpur@gmail.com"
                    className="hover:underline"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    techecho.kanpur@gmail.com
                  </a>
                </li>
                <li className="mb-2">
                  <p>
                    <span className="text-xl">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-red-500"
                      />
                    </span>{" "}
                    : Phase 3rd, Lig 41, Tatya Tope Nagar, Kanpur, Uttar Pradesh
                    208022
                  </p>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/7hJe2Sb87jv7MgtP9"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      icon={faLocation}
                      className="mr-2 text-red-400"
                    />
                    View on map
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p>
              &copy; {new Date().getFullYear()} TechEcho All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
