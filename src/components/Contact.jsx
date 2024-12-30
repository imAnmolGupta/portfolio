import { motion } from 'framer-motion';
import { CONTACT } from "../constants";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    text: CONTACT.address,
    color: "text-red-400",
    link: `https://www.google.com/maps/place/${encodeURIComponent(CONTACT.address)}`
  },
  {
    icon: FaEnvelope,
    text: CONTACT.email,
    color: "text-cyan-500",
    link: `mailto:${CONTACT.email}`
  },
  {
    icon: FaLinkedin,
    text: "LinkedIn",
    color: "text-blue-600",
    link: CONTACT.linkedin
  },
  {
    icon: FaGithub,
    text: "GitHub",
    color: "text-gray-400",
    link: CONTACT.github
  }
];

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2 
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Contact</span>
        <span className="text-neutral-500"> Me!</span>
      </motion.h2>

      <div className="mx-auto max-w-3xl">
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={item.text}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 blur"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="relative flex items-center gap-4 rounded-lg border border-neutral-800 bg-neutral-950 p-6"
                whileHover={{ translateY: -5 }}
              >
                <motion.div
                  className={`rounded-full bg-neutral-900 p-3 ${item.color}`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="text-xl" />
                </motion.div>
                <div className="flex flex-col">
                  <motion.span
                    className="text-lg font-medium text-neutral-200"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.text}
                  </motion.span>
                  <span className="text-sm text-neutral-400">Click to open</span>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-purple-500"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-400">
            Feel free to reach out! I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
