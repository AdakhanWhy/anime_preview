import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
    const {addProduct} = useProduct();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        descr: '',
        image: '',
        video: '',
        price: 0,
        amount: 0,
    })

    function handleInp(e){
        if(e.target.name !== 'price' && e.target.name !== 'amount'){
            let obj = {...product, [e.target.name]: e.target.value};
            setProduct(obj);
        }else{
            let obj = {...product, [e.target.name]: +e.target.value};
            setProduct(obj);
        }
    }

    const inputStyles = {
        width: '75%',
        height: '5vh',
        border: '2px solid black',
        fontSize: '1rem',
        margin: '10px auto',
        boxShadow: '5px 5px #ff4655',
        textAlign: 'center',
    }

    return (
        <div style={{width: '50%', margin: '20px auto', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <h2>Admin Page</h2>
            <input style={inputStyles} onChange={(e) => handleInp(e)} type="text" placeholder='Name' name='name' />
            <input style={inputStyles} onChange={(e) => handleInp(e)} type="text" placeholder='Description' name='descr' />
            <input style={inputStyles} onChange={(e) => handleInp(e)} type="text" placeholder='Image' name='image' />
            <input style={inputStyles} onChange={(e) => handleInp(e)} type="text" placeholder='Video' name='video' />
            <input style={inputStyles} onChange={(e) => handleInp(e)} type="number" placeholder='Price' name='price' />
            <input style={inputStyles} onChange={(e) => handleInp(e)} type="number" placeholder='Year' name='amount' />
            <button style={{width: '10vw', height: '5vh', margin: '1rem auto', fontSize: '0.9rem', fontWeight: '700', border: '2px solid black', boxShadow: '2px 2px #2AEABB'}} onClick={() => {
                addProduct(product);
                navigate('/products');
                }}>Add Product</button>
        </div>
    );
};

export default AddProduct;