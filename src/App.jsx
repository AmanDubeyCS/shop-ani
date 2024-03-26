import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import Homepage from "./Pages/Homepage";
import HomeProducts from "./Pages/HomeProducts";
import { Route, Routes } from "react-router-dom";
import { db } from "./Config/Firbase";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import AddProduct from "./Pages/AddProduct";
import ProductPage from "./Pages/ProductPage";
import UserLogin from "./Components/UserAuth/UserLogin";
import UserRegistration from "./Components/UserAuth/UserRegistration";
import Cart from "./Components/Cart/Cart";

function App() {
  const [list, setList] = useState([]);

  const listCollection = collection(db, "Products");

  const getList = async () => {
    try {
      const data = await getDocs(listCollection);
      const filterdData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setList(filterdData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          index 
          path="/" 
          element={<Homepage data={list} />} />
        <Route 
          path="/men" 
          element={<HomeProducts title="Men" data={list} />} />
        <Route
          path="/women"
          element={<HomeProducts title="Women" data={list} />}
        />
        <Route
          path="/kids"
          element={<HomeProducts title="Kids" data={list} />}
        />
        <Route
          path="/Accessories"
          element={<HomeProducts title="Accessories" data={list} />}
        />
        <Route 
          path="/product" 
          element={<ProductPage data={list} />}>
          <Route 
            path=":productId" 
            element={<ProductPage />} />
        </Route>
        <Route
          path="addproduct"
          element={<AddProduct dbRef={listCollection} />}
        />
        <Route path="/cart"
        element={<Cart />}
        />
        <Route
          path="/login"
          element={<UserLogin />}
        />
        <Route
          path="/registration"
          element={<UserRegistration />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
