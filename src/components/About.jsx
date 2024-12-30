import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi';
import aboutImage from "../assets/About.png";
import { ABOUT_TEXT } from "../constants/index.js";

const features = [
  {
    icon: HiOutlineCode,
    title: "Clean Code",
    description: "Writing maintainable and scalable code following best practices"
  },
  {
    icon: HiOutlineLightBulb,
    title: "Problem Solving",
    description: "Analytical approach to solving complex technical challenges"
  },
  {
    icon: HiOutlineSparkles,
    title: "Innovation",
    description: "Staying updated with latest technologies and trends"
  }
];

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1 
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">About</span>
        <span className="text-neutral-500"> Me</span>
      </motion.h1>

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap">
          <motion.div 
            className="w-full lg:w-1/2 lg:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 blur-lg"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.img 
                className="relative rounded-2xl"
                src={aboutImage} 
                alt="About"
                style={{ width: '28rem' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>         
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-center lg:justify-start">
              <motion.p 
                className="my-2 max-w-xl py-6 text-neutral-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {ABOUT_TEXT}
              </motion.p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
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
                      className="relative flex flex-col items-center rounded-lg border border-neutral-800 bg-neutral-950 p-4 text-center"
                      whileHover={{ translateY: -5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-3 rounded-full bg-cyan-500/10 p-3"
                      >
                        <feature.icon className="text-2xl text-cyan-500" />
                      </motion.div>
                      <h3 className="mb-2 text-lg font-medium text-neutral-200">{feature.title}</h3>
                      <p className="text-sm text-neutral-400">{feature.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;