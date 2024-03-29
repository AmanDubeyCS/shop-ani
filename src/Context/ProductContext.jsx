
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from "../Config/Firbase";
import { getDocs, collection } from "firebase/firestore";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const listCollection = collection(db, "Products");

  const getList = async () => {
    try {
      const data = await getDocs(listCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setList(filteredData);
      setLoading(false); // Set loading to false after data fetch
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false on error
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <ProductContext.Provider value={{ list, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

