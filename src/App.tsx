import Navbar from "./components/navbar"
import Hero from "./components/heros"
import About from "./components/about"
import Loader from "./components/loader"
import { useState } from "react"
import Service from "./components/service"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="ml-12 h-screen">
          <Navbar/>
          <Hero/>
          <About/>
          <Service/>
        </div>
      )}
    </>
  )
}

export default App