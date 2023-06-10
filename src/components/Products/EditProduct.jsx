import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContextProvider';

const EditProduct = () => {
    const {oneProduct, getOneProduct, editProduct} = useProduct();
    useEffect(() => {
        getOneProduct(id);
    }, [])
    const [product, setProduct] = useState(oneProduct);
    const {id} = useParams();
    const {name, descr, video, image, price, amount} = product;
    const navigate = useNavigate();

    const inputStyles = {
        width: '75%',
        height: '5vh',
        border: '2px solid black',
        fontSize: '1rem',
        margin: '10px auto',
        boxShadow: '5px 5px #2AEABB',
        textAlign: 'center',
    }

    function handleInp(e){
        if(e.target.name !== 'price' && e.target.name !== 'amount'){
            let obj = {...product, [e.target.name]: e.target.value};
            setProduct(obj);
        }else{
            let obj = {...product, [e.target.name]: +e.target.value};
            setProduct(obj);
        }
        console.log(product);
    }

    return (
        <div style={{width: '50%', margin: '20px auto', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <h2>Edit Page</h2>
            <input style={inputStyles} value={name || ''} onChange={(e) => {handleInp(e)}} type="text" placeholder='Name' name='name' />
            <input style={inputStyles} value={descr || ''} onChange={(e) => {handleInp(e)}} type="text" placeholder='Description' name='descr' />
            <input style={inputStyles} value={image || ''} onChange={(e) => {handleInp(e)}} type="text" placeholder='Image' name='image' />
            <input style={inputStyles} value={video || ''} onChange={(e) => {handleInp(e)}} type="text" placeholder='Video' name='video' />
            <input style={inputStyles} value={price || ''} onChange={(e) => {handleInp(e)}} type="number" placeholder='Price' name='price' />
            <input style={inputStyles} value={amount || ''} onChange={(e) => {handleInp(e)}} type="number" placeholder='Year' name='amount' />
            <button style={{width: '10vw', height: '5vh', margin: '1rem auto', fontSize: '0.9rem', fontWeight: '700', border: '2px solid black', boxShadow: '2px 2px #2AEABB'}} onClick={() => {
                editProduct(id, product)
                navigate('/products')
                }}>Edit Product</button>
        </div>
    );
};

export default EditProduct;