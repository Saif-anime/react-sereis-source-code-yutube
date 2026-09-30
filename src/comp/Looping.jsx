import React from 'react'

const Looping = () => {

    // const product_list = ['mango', 'banana', 'apple', 't-shirt', 'others'];
    // const product_list = {
    //     product1:"mango",
    //     product2:"banana",
    //     product3:"apple",
    //     product4:"tshirt",
    // }

    const products = [
      { id: 1, name: 'Apple', price: '$1', isAvailable: true },
      { id: 2, name: 'Banana', price: '$0.5', isAvailable: false },
      { id: 3, name: 'Cherry', price: '$2', isAvailable: true }
  ];


  const hasProducts = products.length > 0;

  return (
    <>

<ul>

{
    // product_list.map((item, index) =>{
    //     return <li key={index}>{item}</li>
    // })


  //  Object.entries(product_list).map(([index, item]) =>{
  //   return <li>{index}</li>
  //  })


  // products.map((v, i) =>{
  //   return <li key={i}> {v.name} - {v.price}</li>
  // })


hasProducts?(
  products.map((v, i) =>{
    return <li key={i}> {v.name} - {v.price} - {v.isAvailable ? (<span>In Stock</span>): (<span>Out of Stock</span>)}</li>
  })

):(
  <h1>No Product</h1>
)


}




</ul>
    
    
    </>
  )
}

export default Looping