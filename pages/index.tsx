import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import SEO from '@/components/SEO';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <>
      <SEO />
      <main>

        <div className="bg-gray-900 text-white">
          <nav className="flex items-center justify-start h-16 px-6 border-b border-gray-700">
            <div className="flex items-center">
              <Image src="/icons/gautamapp-logos_transparent.png" alt="logo" width={40} height={40} />
            </div>
          </nav>
          <div className="relative h-screen">
            <Image src="/icons/banner2.png" alt="banner" fill className="object-center object-cover" />

            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
              initial="initial"
              animate="animate"
              variants={variants}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <h1 className="text-6xl font-bold mb-8">
                Wow! A Software Engineer with a Website...
              </h1>
              <p className="text-xl">
                I guess you must be really good at copy-pasting Stack Overflow code snippets.
              </p>
            </motion.div>
          </div>

          <About />
          <Projects />
          <Skills />
          <Blogs />
          <Contact />
        </div>
      </main>
    </>
  )
}
