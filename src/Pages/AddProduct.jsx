import React, { useState } from 'react'
import Card from '../Components/Card/Card'
import { addDoc } from 'firebase/firestore'

const AddProduct = ({dbRef}) => {
  const [products, setProducts] = useState([
    {
      Name: "Product Name",
      Type: "Eg: T-shirt",
      Collection: "Eg: Naruto",
      Color: "Black",
      Price: 0,
      Discount: 0,
      Fabric: "Cotton",
      Pattern: "",
      Sleeve: "",
      Image: {
        Front: "",
        Back: "",
        Side: "",
        Other: "",
      },
      Gender: "",
      Link: ""
    }
  ])

  const productDetails = ["Name","Type","Collection","Color","Price","Discount","Fabric","Pattern","Sleeve","ImageFront","ImageBack","ImageSide","ImageOther","Gender","Link"]

  const handleChange = (e, index) => {
    const newProducts = [...products]
    if (e.target.name.startsWith('Image')) {
      console.log(e.target.name.slice(5,12))
      newProducts[index] = {
        ...newProducts[index],
        Image: {
          ...newProducts[index].Image,
          [(e.target.name.slice(5,12))]: e.target.value
        }
      }
    } else {
      newProducts[index] = {
        ...newProducts[index],
        [e.target.name]: e.target.value
      }
    }
    setProducts(newProducts)
  }

  const onSubmitDetails = async() =>{
    try {
      await addDoc(dbRef, {
        Collection: products[0].Collection,
        Color: products[0].Color,
        Discount: products[0].Discount,
        Fabric: products[0].Fabric,
        Gender: products[0].Gender,
        Image: {
          Front: products[0].Image.Front || " ",
          Back: products[0].Image.Back || " ",
          Side: products[0].Image.Side || " ",
          Other: products[0].Image.Other || " ",
        },
        Name: products[0].Name,
        Pattern: products[0].Pattern,
        Price: products[0].Price,
        Sleeve: products[0].Sleeve,
        Type: products[0].Type,
        Link: products[0].Link

      })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container flex gap-6'>
      <div className='flex flex-col'>
        <h1>Add Your Product</h1>
        {products.map((product, index) => (
          <div key={index}>
            {productDetails.map((detail) => (
              <div className='flex w-96 justify-between' key={detail}>
                <label htmlFor={`${detail}${index}`}>{detail} : </label>
                <input type="text" name={detail} id={`${detail}${index}`} className="justify-end border-2 outline-none rounded-lg px-6 py-1 text-base transition" 
                value={detail.startsWith('Image') ? product.Image[detail] : product[detail]} onChange={(e) => handleChange(e, index)}/>
              </div>
            ))}
          </div>
        ))}

        <button onClick={onSubmitDetails} className='border p-5'>Submit</button>
      </div>

      <Card list={products}/>
    </div>
  )
}

export default AddProduct
