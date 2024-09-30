import { useEffect, useState } from "react"
import { Nav } from "./components/nav"
import { Home } from "./pages/home"
import { LoadPage } from "./pages/load"

function App() {
  const [loading, setLoading] = useState(true)
  const [exit, setExit] = useState(false)

  useEffect(()=>{
    const timer = setTimeout(()=> {
      setExit(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }, 4000)    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div>
        <Nav />
        <Home />
      </div>
      {loading && <LoadPage isExiting={exit} />}
    </>
  )
}

export default App
