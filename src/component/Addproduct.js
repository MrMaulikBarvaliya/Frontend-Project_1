import React, { useState } from 'react';
import '../App.css';


function Addproduct() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const [error, seterror] = useState(false);

  const addProduct = async () => {

    if (!name || !price || !category || !company) {

      seterror(true);
      return false;
    }



    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem('user'));
    // console.log(userId._id);
    let result = await fetch('http://localhost:5000/addproduct', {

      method: 'post',
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    result = await result.json();
    console.log(result);

  }

  return (
    <>
      <div className='addproduct' >
        <h1> Add-Product </h1>
        <input  className='inputBox' type="text" value={name}
          onChange={e => setName(e.target.value)} placeholder='Enter product name' />
        {error && !name && <span className='invalid-input'> Enter Valid Name </span>}

        <input className='inputBox' type="text" value={price}
          onChange={e => setPrice(e.target.value)} placeholder='Enter product Price name' />
        {error && !price && <span className='invalid-input'> Enter Valid Price </span>}


        <input className='inputBox' type="text" value={category}
          onChange={e => setCategory(e.target.value)} placeholder='Enter product Categry name' />
        {error && !category && <span className='invalid-input'> Enter Valid Categry </span>}

        <input className='inputBox' type="text" value={company}
          onChange={e => setCompany(e.target.value)} placeholder='Enter product company name' />
        {error && !company && <span className='invalid-input'> Enter Valid Company </span>}

        <button className='Submitbtn' onClick={addProduct} >Add Product</button>
      </div>
    </>
  )
}

export default Addproduct;