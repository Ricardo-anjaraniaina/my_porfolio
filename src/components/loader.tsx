import {motion} from 'framer-motion';

const containerUp =  {
    hidden: {
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    show: {
        clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        transition: {
            delay:4,
            duration: 0.6,
            ease: "easeInOut" as const,
        },
    },
}

const textReveal = {
    hidden: {
        opacity: 0.05,
    },
    show: {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1.2,
        }
    }
}

type LoaderProps = {
    onComplete: () => void
}

function Loader({ onComplete }: LoaderProps) {

    return(
        <>
            <motion.div 
                className="fixed inset-0 bg-(--couleur-une-sombre) w-screen h-screen z-50 flex justify-center items-center overflow-hidden"
                variants={containerUp}
                initial="hidden"
                animate="show"
                onAnimationComplete={onComplete}
            >
                <motion.h1 
                    className="md:text-8xl text-5xl font-bold"
                    variants={textReveal}
                    initial="hidden"
                    animate="show"
                >
                    Ricardo Anjaraniaina
                </motion.h1>
            </motion.div>
        </>
    )
}

export default Loader;