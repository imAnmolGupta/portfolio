import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2 
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
          Projects
        </span>
        <span className="text-neutral-500"> & Work</span>
      </motion.h2>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative mb-16 rounded-2xl"
          >
            <motion.div
              className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 blur"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.2 }}
            />
            <div className="relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 lg:flex-row">
              <motion.div 
                className="relative w-full lg:w-2/5"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover lg:h-full"
                />
              </motion.div>

              <div className="w-full p-8 lg:w-3/5">
                <motion.h3 
                  className="mb-4 text-2xl font-semibold text-neutral-200"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="mb-6 text-neutral-400"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
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

                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-400 hover:text-cyan-400"
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiGithub className="text-xl" />
                      <span>Source Code</span>
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-400 hover:text-purple-400"
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiExternalLink className="text-xl" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;