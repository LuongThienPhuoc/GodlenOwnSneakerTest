import * as CartContants from '../contants/cart.contants'

export const AddProductCart = (shoes) => {
    return dispatch => {
        dispatch({
            type: CartContants.ADD_PRODUCT_CART,
            shoes
        })
    }
}

export const RemoveProductCart = (shoes) => {
    return dispatch => {
        dispatch({
            type: CartContants.REMOVE_PRODUCT_CART,
            shoes
        })
    }
}

export const PlusItem = (shoes) => {
    return dispatch => {
        dispatch({
            type: CartContants.PLUS_ITEM,
            shoes
        })
    }
}

export const MinusItem = (shoes) => {
    return dispatch => {
        dispatch({
            type: CartContants.MINUS_ITEM,
            shoes
        })
    }
}