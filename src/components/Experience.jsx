import { motion } from 'framer-motion';
import { EXPERIENCES } from "../constants";
import { HiOutlineBriefcase } from 'react-icons/hi';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2 
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Work</span>
        <span className="text-neutral-500"> Experience</span>
      </motion.h2>

      <div className="relative mx-auto max-w-6xl">
        {/* Timeline line */}
        <motion.div 
          className="absolute left-8 top-0 h-full w-0.5 bg-neutral-800 md:left-1/2"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative mb-12 md:mb-16"
          >
            {/* Timeline dot */}
            <motion.div 
              className="absolute left-8 top-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-500 bg-neutral-950 md:left-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="absolute inset-0 -z-10 rounded-full bg-cyan-500/20"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
              <motion.div
                className="group relative rounded-2xl"
                whileHover={{ translateY: -5 }}
              >
                <motion.div
                  className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 blur"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="relative rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-full bg-cyan-500/10 p-2"
                    >
                      <HiOutlineBriefcase className="text-xl text-cyan-500" />
                    </motion.div>
                    <motion.span 
                      className="text-sm text-neutral-400"
                      whileHover={{ color: '#22d3ee' }}
                    >
                      {experience.year}
                    </motion.span>
                  </div>

                  <motion.h6 
                    className="mb-2 text-xl font-semibold text-neutral-200"
                    whileHover={{ x: 5 }}
                  >
                    {experience.role}{" "}
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                      @ {experience.company}
                    </span>
                  </motion.h6>

                  <motion.p 
                    className="mb-4 text-neutral-400"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {experience.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-cyan-400"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;