import { CONTACT } from "../constants";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,FaLinkedin ,FaGithub} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl font-bold text-white">Contact
      <span className="text-neutral-500"> Me!</span>
      </h2>

      <div className="text-center space-y-6 tracking-tighter text-neutral-300">
        <div className="flex items-center justify-center gap-4">
          <FaMapMarkerAlt className="text-xl  text-red-400" />
          <p>{CONTACT.address}</p>
        </div>

        {/* <div className="flex items-center justify-center gap-4">
          <FaPhoneAlt className="text-xl  text-purple-400" />
          <a href={`tel:${CONTACT.phoneNo}`} className="hover:text-cyan-300">
            {CONTACT.phoneNo}
          </a>

        </div> */}

        <div className="flex items-center justify-center gap-4">
          <FaEnvelope className="text-xl  text-cyan-500" />
          <a href={`mailto:${CONTACT.email}`} className="hover:text-cyan-300 border-b border-transparent hover:border-cyan-300">
            {CONTACT.email}
          </a>
        </div>
        <div className="flex items-center justify-center gap-4">
          <FaLinkedin className="text-xl text-blue-600" />
            <a 
              href={CONTACT.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-300 border-b border-transparent hover:border-cyan-300"
            >
              LinkedIn
            </a>
          </div>

        <div className="flex items-center justify-center gap-4">
          <FaGithub className="text-xl text-gray-400" />
            <a 
              href={CONTACT.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-300 border-b border-transparent hover:border-cyan-300"
            >
              GitHub
            </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
