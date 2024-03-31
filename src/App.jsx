import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import Homepage from "./Pages/Homepage";
import HomeProducts from "./Pages/HomeProducts";
import { Route, Routes, useLocation } from "react-router-dom";
import { db } from "./Config/Firbase";
import { collection } from "firebase/firestore";
import AddProduct from "./Pages/AddProduct";
import ProductPage from "./Pages/ProductPage";
import UserRegistration from "./Components/UserAuth/UserAuth";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import OrderConfirmation from "./Components/OrderConfirmation/OrderConfirmation";
import { useEffect } from "react";
import CartPage from "./Pages/CartPage";
import UserProfile from "./Components/UserProfile/UserProfile";

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  // const [list, setList] = useState([]);

  const listCollection = collection(db, "Products");

  // const getList = async () => {
  //   try {
  //     const data = await getDocs(listCollection);
  //     const filterdData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setList(filterdData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getList();
  // }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/men" element={<HomeProducts title="Men" />} />
        <Route path="/women" element={<HomeProducts title="Women" />} />
        <Route path="/kids" element={<HomeProducts title="Kids" />} />
        <Route path="/Accessories" element={<HomeProducts title="Accessories" />}/>
        <Route path="/product" element={<ProductPage />}>
          <Route path=":productId" element={<ProductPage />} />
        </Route>
        <Route path="addproduct" element={<AddProduct dbRef={listCollection} />}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<UserRegistration />}/>
        <Route path="/registration" element={<UserRegistration />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
