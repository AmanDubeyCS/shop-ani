
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Homepage from "./Pages/Homepage";
import Menspage from "./Pages/Menspage";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="men" element={<Menspage />} />
        <Route path="product" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
