import Navbar from "./components/navbar"
import Hero from "./components/heros"
import About from "./components/about"
import Loader from "./components/loader"
import { useState, useEffect } from "react"
import Service from "./components/service"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isLoading])

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div className={`ml-12 ${isLoading ? "h-screen overflow-hidden" : ""}`}>
        <Navbar/>
        <Hero/>
        <About/>
        <Service/>
      </div>
    </>
  )
}

export default App