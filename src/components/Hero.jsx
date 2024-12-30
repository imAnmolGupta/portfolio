import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_CONTENT } from "../constants/index.js";
import profilePic from "../assets/AnmolProfile.png";
import { HiOutlineArrowDown, HiOutlineCode, HiOutlineLightBulb } from 'react-icons/hi';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const nameVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      }
    }
  };

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const roles = [
    { text: "Full Stack Developer", icon: HiOutlineCode },
    { text: "Problem Solver", icon: HiOutlineLightBulb },
    { text: "Tech Enthusiast", icon: HiOutlineCode }
  ];

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      style={{ y, opacity }}
      className="relative min-h-screen border-b border-neutral-800/50 pb-4"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3d4451,transparent)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(52, 211, 153, 0.15) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(52, 211, 153, 0.15) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative flex min-h-screen flex-wrap items-center px-4">
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={nameVariants}
              initial="initial"
              animate="animate"
              className="pb-8 text-6xl font-thin tracking-tight lg:text-8xl relative"
            >
              {"Anmol".split('').map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="inline-block hover:text-emerald-400 transition-colors duration-300"
                  whileHover={{ 
                    y: -5,
                    color: '#34d399',
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                variants={letterVariants}
                className="inline-block mx-2"
              > </motion.span>
              {"Gupta".split('').map((letter, i) => (
                <motion.span
                  key={i + 6}
                  variants={letterVariants}
                  className="inline-block hover:text-emerald-400 transition-colors duration-300"
                  whileHover={{ 
                    y: -5,
                    color: '#34d399',
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.div 
                className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </motion.h1>

            <div className="relative h-16 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/20 to-neutral-950 blur-sm" />
              <motion.div
                className="relative flex items-center gap-4 p-1"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(16, 185, 129, 0.2)"
                  }}
                >
                  <HiOutlineCode className="h-5 w-5 text-emerald-400" />
                </motion.div>
                <div className="flex flex-col min-w-[300px]">
                  <div className="relative h-10">
                    <div className="absolute inset-0">
                      {roles.map((role, index) => (
                        <motion.div
                          key={role.text}
                          className="absolute top-0 left-0 w-full"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: [0, 1, 1, 0],
                            y: [10, 0, 0, -10]
                          }}
                          transition={{
                            duration: 4,
                            delay: index * 4,
                            repeat: Infinity,
                            repeatDelay: (roles.length - 1) * 4,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.9, 1]
                          }}
                        >
                          <div className="flex items-center">
                            <motion.span 
                              className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-2xl font-medium tracking-tight text-transparent whitespace-nowrap"
                            >
                              {role.text}
                            </motion.span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <motion.div 
                    className="h-0.5 w-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            </div>

            <motion.p 
              className="relative my-2 max-w-xl py-6 font-light tracking-tighter text-emerald-100/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 lg:p-8"
          style={{ scale }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center relative">
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/50 via-teal-500/50 to-cyan-500/50 rounded-2xl blur-md opacity-30"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.img
              src={profilePic}
              alt="Anmol Profile"
              style={{ width: '28rem' }}
              className="relative rounded-2xl shadow-xl hover:shadow-emerald-500/20 transition-shadow duration-300 bg-neutral-950/80"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            />
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.button
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-emerald-400/60 hover:text-emerald-400 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, 10, 0],
          }}
          transition={{ 
            opacity: { duration: 0.5, delay: 1 },
            y: { duration: 1.5, repeat: Infinity }
          }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <HiOutlineArrowDown className="h-6 w-6" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Hero; 


