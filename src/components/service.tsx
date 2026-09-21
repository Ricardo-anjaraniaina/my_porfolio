import { Lottie } from 'lottie-react'
import { useState, useEffect, useRef } from 'react'
import {motion, useInView} from 'framer-motion'
import webDevelopment from '../assets/WebDevelopment.json'
import backend from '../assets/backendAnimation.json'
import ui from '../assets/uiAnimation.json'
import api from '../assets/apiAnimation.json'

const services = [
    {
        title: "01 Web development",
        description: "I build modern, responsive websites that combine clean design, smooth interactions, and a strong user experience. From landing pages to complete web platforms, I turn ideas into interfaces that feel as good as they look.",
        illustration: webDevelopment
    },
    {
        title: "02 Full-Stack development",
        description: "I build complete web applications from frontend to backend, connecting intuitive interfaces with reliable APIs, databases, and business logic. The goal is to create products that are not only visually engaging, but built to work.",
        illustration: backend
    },
    {
        title: "03 UI Implementation",
        description: "I turn designs and ideas into responsive, interactive interfaces. I focus on translating visual concepts into clean code while keeping the experience consistent across different screen sizes.",
        illustration: ui
    },
    {
        title: "04 API and Backend development",
        description: "I develop reliable backend systems and APIs that handle data, authentication, business logic, and communication between applications. I focus on building structured foundations that can grow with the product.",
        illustration: api
    }        
]

function ServiceItem({ service, index, setActive }: { service: typeof services[0], index: number, setActive: (i: number) => void }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5 })

    useEffect(() => {
        if (isInView) setActive(index)
    }, [isInView, index, setActive])

    return (
        <div ref={ref} className="h-screen flex items-center p-10">
            <div className='h-full flex flex-col gap-5 justify-center items-center text-center'>
                <h1 className='md:hidden text-2xl'>{service.title}</h1>
                <Lottie src={service.illustration} loop autoplay className="w-full bg-(--couleur-une) p-3 rounded-xl" />
                <p className='text-xl tracking-wider'>{service.description}</p>
            </div>
        </div>
    )
}

export default function Service() {
    const [active, setActive] = useState(0)

    return (
        <section className="w-full bg-(--couleur-deux) rounded-3xl">
            <div className="w-full h-full p-8 flex flex-col gap-6">
                <div className="w-full flex md:flex-row flex-col justify-between items-center">
                    <h1 className="md:w-1/2 text-5xl text-(--couleur-quatre) md:text-center">What can we build together ?</h1>
                    <p className="md:w-1/2 text-3xl text-left md:text-center">From a simple idea to a digital product, <br />let's make it happen.</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="hidden md:block md:sticky md:top-0 md:h-screen ">
                        <div className="h-full flex flex-col justify-center p-10 gap-5">
                           {services.map((service, index) => (
                            <motion.h1
                                key={service.title}
                                animate={{
                                    opacity: active === index ? 1 : 0.25,
                                    x: active === index ? 15 : 0,
                                    color: active === index ? 'var(--couleur-quatre)' : 'var(--couleur-cinq)'
                                }}
                                transition={{ duration: 0.3 }}
                                className="text-4xl tracking-wider"
                            >
                                {service.title}
                            </motion.h1>
                           ))}
                        </div>
                    </div>
                    <div>
                       {services.map((service, index) => (
                            <ServiceItem key={index} service={service} index={index} setActive={setActive} />
                       ))}
                    </div>
                </div>
            </div>
        </section>
    )
}