import { Action } from '../actions'

const initialState = {
    user: {}, // {id: // token: //}
    profile: {}, //
    wishlist: [],
    cart: [],
    orders: [],
    address:[],
    haveAccount:true,
    token:localStorage.getItem('token')
}

export const UserReducer  = (state = initialState, action) => {

    switch(action.type){
        case Action.SIGNUP:
        case Action.LOGIN:
            return {
                ...state, 
                user: action.payload
            };
        case Action.PROFILE:
            return {
                ...state, 
                profile: action.payload,
                wishlist: action.payload.wishlist,
                cart: action.payload.cart,
                address: action.payload.address,
                orders: action.payload.orders,
            };
        case Action.ADDED_NEW_ADDRESS:
            return {
                ...state,
                address: action.payload.address
            }
        case Action.ADD_TO_WISHLIST:
            return {
                ...state, 
                wishlist: state.wishlist.length ? [...state.wishlist, action.payload] : [action.payload]
            }; 
             
        case Action.REMOVE_ADDRESS:

            if(state.address.length && action.payload){

                const existAddress = state.address.filter((item) => item._id !== action.payload._id)
                return {
                    ...state,
                    address: existAddress
                }
 
            }else{
                return {
                    ...state,
                    address: []
                } 
            }          
        case Action.REMOVE_FROM_WISHLIST:

            if(state.wishlist.length){

                const existWishlist = state.wishlist.filter((item) => item._id !== action.payload._id)

                return {
                    ...state,
                    wishlist: existWishlist
                }
 
            }else{
                return {
                    ...state,
                    wishlist: []
                } 
            }
        case Action.ADD_TO_CART:

            let existingCart = state.cart;

            if(existingCart.length){

                const existItem = existingCart.filter(({ product }) => product._id == action.payload.product._id)
                
                if(existItem.length){
                    const index = existingCart.indexOf(existItem[0]);
                    existingCart[index] = action.payload;
                    return {
                        ...state, 
                        cart: existingCart
                    };  
                }else{
                    return {
                        ...state, 
                        cart: [...state.cart,action.payload]
                    }; 
                }
            }else{
                return {
                    ...state, 
                    cart: [action.payload]
                };  
            }
        case Action.REMOVE_FROM_CART:
            let currentCart = state.cart;
            if(currentCart.length){

                const existItem = currentCart.filter(({ product }) => product._id !== action.payload.product._id)
                
                return {
                    ...state,
                    cart: existItem
                }
               
            }else{
                return {
                    ...state,
                    cart: []
                }
            }
 
        case Action.PLACE_ORDER:
            return {
                ...state, 
                orders: [action.payload, ...state.orders],
                cart: [],
            };
        case Action.IS_LOGIN_FORM:
            return {
                ...state,
                haveAccount:action.payload
            }
        case Action.TOKEN:
            return {
                ...state,
                token:action.payload
            }    
        default: 
            return state;


    }

}
