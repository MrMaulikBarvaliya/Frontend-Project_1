import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {

        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/product');
        result = await result.json();
        setProduct(result);
    }

    const deleteProduct = async (id) => {

        let result = await fetch(`http://localhost:5000/product/${id}`, {

            method: 'delete',
        })
        result = await result.json();
        if (result) {
            alert("rescod is Delete");
            getProducts();
        }
    }
    const searchHandle = async (event) =>
    {
        let key = event.target.value;
        if (key) {
            
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {
                setProduct(result);
            }
        }else{
            getProducts();
        }
    }

    return (
        <>
            <div className="product-List">
                <h1>Product List</h1>
                <input  style={{width:"400px",margin:"20px",height:"40px",border:"1px solid skyblue"}} 
                 type="text" placeholder="Search..." onChange={searchHandle} />
                <ul>
                    <li>S.no</li>
                    <li>item.Name</li>
                    <li>Price</li>
                    <li>item.Category</li>
                    <li>item.Company</li>
                    <li>Operation</li>
                </ul>
                {
                    product.length > 0 ? product.map((item, index) =>
                        <ul key={item._id}>
                            <li>{index + 1}</li>
                            <li>{item.name}</li>
                            <li>${item.price}</li>
                            <li>{item.category}</li>
                            <li>{item.company}</li>
                            <li>
                            <Link to={"/update/"+item._id}>Update</Link>
                                <button onClick={() => deleteProduct(item._id)}>Delete</button>
                            </li>
                        </ul>
                    ) 
                    : <h1>No Products Found..!</h1>
                }
            </div>
        </>
    )
}

export default ProductList;