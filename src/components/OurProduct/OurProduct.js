import React, {useState} from 'react';
import './OurProduct.css'
import Product from '../Product/Product';
import Data from '../Shopping/shoes.json'

function OurProduct(props) {
    const [shoes, setShoes] = useState(Data.shoes)
    
    return (
        <div className='card'>
            <img className='card__logo' src='./app/assets/nike.png' ></img>
            <div className='card__title'>Our Products</div>
            <div className='card__product'>
                {
                    shoes ? shoes.map((value, index) => {
                        return (
                            <Product shoes={value} key={index}></Product>
                        )
                    }) : null
                }
            </div>
        </div>
    );
}

export default OurProduct;