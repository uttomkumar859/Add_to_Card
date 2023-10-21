/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import './css/product.css'
import { CustomHooks } from "../cardContext/CardProvider";


const Product = () => {
  const [List ,setList] = useState ([]);
 
  const allProduct = async() =>{
    const response = await fetch('https://fakestoreapi.com/products')
    setList(await response.json())
  }
  useEffect(()=>{
    allProduct()
  },[])
// add to card handler
const {dispatch} = CustomHooks() 
const handleCard = (props) => {
  console.log(props)
  dispatch({type: 'Add_to_Cart' , payload:props})
}

  return (
    <>
      <div className="container">
            <h1>Product List</h1>
            <div className="product">
              {List.map((props , index) =>{
                return(
                  <div key={index} className="product_item">
                    <img src={props.image} alt=""/>
                    <h4>{props.title}</h4>
                    <p>${props.price}</p>
                    {/* <p>{props.description}</p> */}
                    <button onClick={()=>handleCard()}>Add to Card</button>
                  </div>
                )
              })}
            </div>
      </div>
    </>
  )
}

export default Product;