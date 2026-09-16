import { useEffect, useState } from 'react';
import {FaLinkedin, FaGithub, FaWhatsapp, FaMailBulk} from 'react-icons/fa';
import {motion, AnimatePresence} from 'framer-motion';

const mots = ["WEB", "MOBILE", "FULL-STACK"]

function Hero() {

    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1 ) % mots.length);
        }, 3000)

        return () => clearInterval(interval);
    })

    return (
        <section className="w-full h-screen p-6">
            <div className='h-full w-full relative'>
                <div className='flex absolute gap-3 bottom-0'>
                    <a href=""><FaLinkedin size={24}/></a>
                    <a href=""><FaGithub size={24}/></a>
                    <a href=""><FaWhatsapp size={24}/></a>
                    <a href=""><FaMailBulk size={24}/></a>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='md:col-span-2 overflow-hidden'>
                        <AnimatePresence mode='wait'>
                            <motion.h1 
                                key={mots[index]}
                                initial={{y: 20, opacity:  0}}
                                animate={{y: 0, opacity: 1}}
                                exit={{x: -20, opacity: 0}}
                                transition={{duration: 0.5}}
                                className='md:text-9xl text-7xl'
                            >
                                {mots[index]}
                            </motion.h1>
                        </AnimatePresence>
                        <h1 className='md:text-9xl text-7xl'>DEVELOPER</h1>
                    </div>
                    <div className='md:col-span-1 flex items-center border-b-2 md:border-b-3 border-(--couleur-quatre)'>
                        <p className='text-3xl tracking-widest text-(--couleur-quatre)'>Ricardo <br /><span className='text-(--couleur-cinq)'>Anjaraniaina</span></p>
                    </div>
                </div>
                <div className='absolute bottom-0 right-0'>
                    <p className='leading-none p-0 m-0 translate-y-1 text-right'>Open for <br /> collaboration</p>
                </div>
                
            </div>
        </section>
    )
}

export default Hero;