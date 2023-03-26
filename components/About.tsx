import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }
    };

    return (
        <section className="bg-gray-900 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-4xl font-bold text-white mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } }}
                >
                    Who am I?
                </motion.h2>
                <motion.div
                    className="flex flex-col md:flex-row gap-8"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <p className="text-lg text-gray-300 mb-8 md:w-1/2">
                        Just your friendly neighborhood software engineer, at your service! I've been working at FuseMachines for about 2 years now, building out beautiful and intuitive front-end applications that make people wonder how they ever lived without them.
                    </p>
                    <p className="text-lg text-gray-300 mb-8 md:w-1/2">
                        When I'm not busy crushing bugs and writing code, I'm usually tinkering with my latest side project or exploring the great outdoors. Whether it's hiking, camping, or just a leisurely stroll through the park, there's nothing quite like getting out into nature and breathing in that fresh, smog-free air.
                    </p>
                </motion.div>
                <motion.p
                    className="text-lg text-gray-300 mb-8"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    I'm always up for a challenge, and I love nothing more than diving head-first into a new technology or programming language and figuring out how it works. So if you're looking for someone to help bring your vision to life, look no further! Let's build something amazing together.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
