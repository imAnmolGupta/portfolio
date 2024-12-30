import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

const App = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    window.open('/path-to-your-resume.pdf', '_blank')
  }

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-cyan-900/10 to-neutral-950"
              animate={{
                opacity: [0.5, 0.3, 0.5],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-8"
      >
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </motion.div>

      {/* Floating Resume Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-75"
          animate={{
            opacity: [0.75, 0.9, 0.75],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.button
          onClick={handleDownloadResume}
          className="relative flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-white shadow-lg backdrop-blur-sm"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
          </motion.span>
          <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent font-medium">
            Download Resume
          </span>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default App