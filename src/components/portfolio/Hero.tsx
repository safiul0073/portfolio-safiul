import { motion } from 'framer-motion';
import Image from 'next/image';
import profile from "@/profile.png"

const Hero = () => {
  return (
<section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
      <div className="p-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Md Safiullah
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mb-8"
        >
          A Passionate Software Engineer
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="md:p-8"
      >
        <Image
          src={profile} 
          alt="Profile Image"
          className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover mx-auto"
        />
      </motion.div>
    </section>
  )
}

export default Hero;
