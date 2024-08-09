import React from 'react';
import pdt1 from './images/tel1.jpg';
import pdt2 from './images/tel2.jpg';
import pdt3 from './images/tel3.jpg'
import pdt4 from './images/tel4.jpg';
import pdt5 from './images/tel5.jpg';
import pdt6 from './images/tele1.jpg';
import './product.css';

const Product = () => {
    return (
        <div className='product'>
            <h1>Products</h1>
            <div className='pdt'>
            <div className='img'>
                <div><img src={pdt1}></img></div>
                <h3>product1</h3>
            </div>
            <div className='img'>
            <div><img src={pdt2}></img></div>
                <h3>product2</h3>
            </div>
            <div className='img'>
            <div><img src={pdt3}></img></div>
                <h3>product3</h3>
            </div>
            <div className='img'>
            <div><img src={pdt4}></img></div>
                <h3>product4</h3>
            </div>
            <div className='img'>
            <div><img src={pdt5}></img></div>
                <h3>product4</h3>
            </div>
            <div className='img'>
            <div><img src={pdt6}></img></div>
                <h3>product5</h3>
            </div>
            </div>
        </div>
    );
}

export default Product;
