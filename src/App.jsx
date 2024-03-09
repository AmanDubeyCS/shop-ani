import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"
import HotAnime from "./Components/HotAnime/HotAnime"
import ProductCrousal from "./Components/YouMayLike/ProductCrousal"
import Homepage from "./Pages/Homepage"
import Menspage from "./Pages/Menspage"

function App() {
  

  return (
    <>
      <div className="">
          <Navbar />
          {/* <Homepage /> */}
          <Menspage />
          <Footer />
      </div>
      
    </>
  )
}

export default App
