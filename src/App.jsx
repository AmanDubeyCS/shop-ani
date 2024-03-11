
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Homepage from "./Pages/Homepage";
import Menspage from "./Pages/Menspage";
import { Route, Routes } from "react-router-dom";
import { db } from "./Config/Firbase";
import { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore';
import Card from "./Components/Card/Card";
import AddProduct from "./Pages/AddProduct";

function App() {
  const [list, setList] = useState([]);

  const listCollection = collection(db, "Products");

  const getList = async() => {
    try {
      const data = await getDocs(listCollection)
      const filterdData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setList(filterdData)
      // console.log(filterdData);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="men" element={<Menspage />} />
        <Route path="product" element={<ProductDetails />} />
        <Route path="addproduct" element={<AddProduct />} />
      </Routes>
      {list.map((data) => {
        return(
          <div
        className="w-[300px] h-[500px] bg-white bg-transparent overflow-hidden transition-all duration-200 ease-in-out hover:scale-105 hover:border"
      >
        <div className="h-[400px] overflow-hidden">
          <img src={data?.Image?.Back} alt="" className="h-full "/>
        </div>
        <div className="flex flex-col gap-2 px-3 py-3">
          <div className="text-[12px] text-gray-500 font-medium text-start">{data.Type}</div>
          <div className="text-[14px] font-medium text-black line-clamp-1">
            {data.Name}
          </div>
          <div className="text-[14px] font-medium text-black">
           {data.Price}{" "}
            <span className="text-[12px] line-through text-gray-500 mr-3">
              {data.ActualPrice}
            </span>
            <span className="text-[14px] text-green-500 ">{data.Discount}%</span>
          </div>
          {/* <div className='text-[14px] text-black'><span className='text-[14px] text-gray-500 mr-3'>Size</span>S, M, L, XL</div> */}
        </div>
        {/* <div
        className={`w-[215px] text-black bg-[#FFBADE] text-center py-1 font-semibold text-lg cursor-pointer`}
      >
        Add To Cart
      </div> */}
      </div>
        )
      }
      )}
      <Footer/>
    </>
  );
}

export default App;
