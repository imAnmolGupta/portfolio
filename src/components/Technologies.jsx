import { motion } from 'framer-motion';
import {RiReactjsLine} from "react-icons/ri";
import {FaNodeJs} from "react-icons/fa";
import {SiJavascript, SiMongodb, SiTailwindcss, SiDocker, SiGit, SiTypescript} from "react-icons/si";

const technologies = [
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400", level: 90 },
  { icon: RiReactjsLine, name: "React.js", color: "text-cyan-400", level: 85 },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500", level: 80 },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-blue-400", level: 95 },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-600", level: 75 },
  { icon: SiDocker, name: "Docker", color: "text-blue-500", level: 70 },
  { icon: SiGit, name: "Git", color: "text-orange-500", level: 85 },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600", level: 80 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Tech</span>
        <span className="text-neutral-500"> Stack</span>
      </motion.h2>

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-50 blur"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="relative flex flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition-all"
                whileHover={{ translateY: -5 }}
              >
                <tech.icon className={`text-7xl ${tech.color} transition-all duration-300 group-hover:scale-110`}/>
                <h3 className="mt-4 text-lg font-medium text-neutral-200">{tech.name}</h3>
                
                <div className="mt-3 h-1.5 w-full rounded-full bg-neutral-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="mt-2 text-sm text-neutral-400">Proficiency: {tech.level}%</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;