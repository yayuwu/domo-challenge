import { Nav } from "./components/nav"
import { HomeFisrtPart, HomeSecondPart } from "./components/homeComponents"

function App() {

  return (
    <>
      <Nav/>
      <div className="d-flex flex-wrap">
        <HomeFisrtPart/>
        <HomeSecondPart/>
      </div>
    </>
  )
}

export default App
