import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function UpdateProduct() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const params = useParams();
  const navigat = useNavigate();

  useEffect(() => {
    const getProductDetails = async () => {

      let result = await fetch(`http://localhost:5000/product/${params.id}`);
      result = await result.json();
      setName(result.name);
      setPrice(result.price);
      setCategory(result.category);
      setCompany(result.company);
    }
    
    getProductDetails();
  }, []);

  

  const updateProduct = async () => {

    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {

      method: 'Put',
      body: JSON.stringfy({ name, price, category, company }),
      headers: {
        'Content-Type': "application/json"
      }
    });
    result = await result.json();
    console.log(result);
    navigat('/');
  }
  return (
    <>
      <div className='addproduct'>
        <h1> Update-Product </h1>
        <input className='inputBox' type="text" value={name}
          onChange={e => setName(e.target.value)} placeholder='Enter product name' />

        <input className='inputBox' type="text" value={price}
          onChange={e => setPrice(e.target.value)} placeholder='Enter product Price name' />

        <input className='inputBox' type="text" value={category}
          onChange={e => setCategory(e.target.value)} placeholder='Enter product Categry name' />

        <input className='inputBox' type="text" value={company}
          onChange={e => setCompany(e.target.value)} placeholder='Enter product company name' />

        <button className='Submitbtn' onClick={updateProduct} >Update Product</button>
      </div>
    </>
  )
}

export default UpdateProduct;