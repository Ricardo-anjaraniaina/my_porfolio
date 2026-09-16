import { useScroll, useTransform } from "motion/react"
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa"
import { motion } from "motion/react"


export default function About(){
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

    return (
        <>
            <section ref={ref} className="h-[300vh] w-full bg-(--couleur-trois) relative">
                <div className="w-full h-screen bg-(--couleur-deux) sticky top-0 flex overflow-hidden">
                    <motion.div 
                        style={{x}}
                        className="w-full h-full flex"
                    >
                        <div className="w-full p-5 shrink-0 ">
                            <div className="border-2 border-(--couleur-quatre) rounded-3xl flex justify-center items-center w-full h-full gap-5">
                                <h1 className="md:text-9xl text-7xl text-(--couleur-quatre) translate-y-1 p-0">ABOUT ME </h1>
                                <div className="">
                                    <FaArrowRight size={90} color="var(--couleur-quatre)"/>
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage: `url('paper_bg.jpg')`}} className="w-full p-5 shrink-0 bg-cover">
                            <div className="border-2 border-(--couleur-quatre) rounded-3xl w-full h-full grid grid-cols-1 md:grid-cols-3 overflow-hidden">
                                <div className="row-start-1 col-start-1 md:row-auto md:col-start-1 md:col-span-1 "><img src="portrait.png" alt="portrait" /></div>
                                <div className="row-start-1 col-start-1 md:row-auto md:col-start-2 md:col-span-2 flex justify-start items-end flex-col p-4 gap-5">
                                    <h1 className="text-5xl md:text-6xl text-(--couleur-cinq) md:text-(--couleur-une) font-bold">Hi, I'm Ricardo Anjaraniaina</h1>
                                    <p className="text-(--couleur-cinq) md:text-(--couleur-une) text-right text-xl md:text-2xl">I'm a Full-Stack Developer driven by curiosity and a love for building things. I turn ideas into functional digital experiences, explore new technologies, and learn by creating. For me, every project is another opportunity to solve a problem, experiment, and grow.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-5 shrink-0 ">
                            <div className="border-2 border-(--couleur-quatre) rounded-3xl flex justify-center items-center w-full h-full gap-5">
                                <h1 className="md:text-9xl text-7xl text-(--couleur-quatre) translate-y-1 p-0">ABOUT ME </h1>
                                <div className="">
                                    <FaArrowRight size={90} color="var(--couleur-quatre)"/>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )

}