import * as CartContants from '../contants/cart.contants'

const cartSneaker = 'CART_SNEAKER'

let memoryCart = [];

if (localStorage.getItem(cartSneaker)) {
    memoryCart = JSON.parse(localStorage.getItem(cartSneaker))
}

const initialState = {
    cart: memoryCart
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartContants.ADD_PRODUCT_CART:
            {
                const index = state.cart.findIndex(item => item.id == action.shoes.id);
                if (index === -1) {
                    action.shoes.amount = 1;
                    state.cart.push(action.shoes)
                    localStorage.setItem(cartSneaker, JSON.stringify(state.cart));
                }
                return {
                    ...state
                }
            }
        case CartContants.PLUS_ITEM:
            {
                localStorage.setItem(cartSneaker, JSON.stringify(state.cart.map(value => {
                    if (value.id == action.shoes.id) {
                        value.amount++
                    }
                    return value
                })));

                return {
                    ...state
                }

                // return {
                //     cart: state.cart.map(value => {
                //         if (value.id == action.shoes.id) {
                //             value.amount++
                //         }
                //         return value
                //     })
                // }
            }
        case CartContants.REMOVE_PRODUCT_CART:
            {
                localStorage.setItem(cartSneaker, JSON.stringify(state.cart.filter(value => value.id != action.shoes.id)));
                return {
                    ...state,
                    cart: state.cart.filter(value => value.id != action.shoes.id)
                }
            }

        case CartContants.MINUS_ITEM:
            {
                localStorage.setItem(cartSneaker, JSON.stringify(state.cart.map(value => {
                    if (value.id == action.shoes.id) {
                        value.amount--
                    }
                    return value
                })));
                
                return {
                    ...state
                }

                // return {
                //     cart: state.cart.map(value => {
                //         if (value.id == action.shoes.id) {
                //             value.amount--
                //         }
                //         return value
                //     })
                // }
            }


        default:
            return state
    }
}