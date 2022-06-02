import React from 'react';
import './Product.css'
import { AddProductCart } from '../../redux/actions/cart.action'
import { useDispatch, useSelector } from 'react-redux'
function Product(props) {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)
    const render = () => {
        const index = cart.findIndex(item => item.id == props.shoes.id);
        if (index === -1) {
            return (
                <button
                    className="product__btn--add"
                    onClick={() => { dispatch(AddProductCart(props.shoes)) }}
                >
                    ADD TO CART
                </button>
            )
        } else {
            return (
                <div className='product__btn--button'>
                    <img alt="..." width={20} height={20} src='./app/assets/check.png'></img>
                </div>
            )
        }

    }
    return (
        <div className='product'>
            <div style={{ backgroundColor: props.shoes.color }} className='product__img'>
                <img src={props.shoes.image} alt={props.shoes.name} />
            </div>
            <div className='product__name'>
                {
                    props.shoes.name
                }
            </div>
            <div className='product__description'>
                {
                    props.shoes.description
                }
            </div>
            <div className='product__btn'>
                <div className='product__btn--price'>
                    ${props.shoes.price}
                </div>
                {
                    render()
                }

            </div>
        </div>
    );
}

export default Product;