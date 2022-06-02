import React, { useState } from 'react';
import './CartItem.css'
import { RemoveProductCart, PlusItem, MinusItem } from '../../redux/actions/cart.action'
import { useDispatch } from 'react-redux'
function CartItem(props) {
    const dispatch = useDispatch()

    const [isShowRight, setIsShowRight] = useState(false)
    const [isDelete, setIsDelete] = useState(false)

    const handleClickPlus = () => {
        dispatch(PlusItem(props.cart))
    }

    const handleClickMinus = () => {
        if (props.cart.amount <= 1) {
            setIsDelete(true)
            setTimeout(function () {
                dispatch(RemoveProductCart(props.cart))
                setIsDelete(false)
            }, 500);
        } else {
            dispatch(MinusItem(props.cart))
        }
    }

    const handleDelete = () => {
        setIsDelete(true)
        setTimeout(function () {
            dispatch(RemoveProductCart(props.cart))
            setIsDelete(false)
        }, 500);
    }

    setTimeout(function () {
        setIsShowRight(true)
    }, 500);

    return (
        <div className={`cart ${isDelete ? 'delete' : ''}`}>
            <div className='cart__left'>
                <div className='cart__item-img' style={{ backgroundColor: props.cart.color, width: '90px', height: '90px', borderRadius: '100%' }}>
                    <div className='cart__item--img'>
                        <img src={props.cart.image} alt={props.cart.name} />
                    </div>
                </div>
            </div>
            <div style={{ display: isShowRight ? 'block' : 'none' }} className='cart__right'>
                <div className="cart__name">{props.cart.name}</div>
                <div className="cart__price">${props.cart.price}</div>
                <div className='cart__action'>
                    <div className='cart__action-count'>
                        <button onClick={handleClickMinus} className="cart__btn-minus" >
                            <img src="./app/assets/minus.png" alt="..." width={8} height={8} />
                        </button>
                        <div className="cart__count-number">{props.cart.amount}</div>
                        <button onClick={handleClickPlus} className="cart__btn-plus">
                            <img src="./app/assets/plus.png" alt="..." width={8} height={8} />
                        </button>
                    </div>
                    <button onClick={handleDelete} className="cart__btn-remove">
                        <img src="./app/assets/trash.png" alt="..." width={16} height={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;