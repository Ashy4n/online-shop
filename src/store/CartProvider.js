import { useReducer } from "react";
import CartContext from "./cartContext"
import cartReducer from "./cartReducer";


// name: props.name,
// price: props.price,
// img: props.imgUrl,
// amount: parseInt(amount)
// = state.items.concat(action.item)


const CartProvider = (props) => {

    const [cartState, distpatchCart] = useReducer(cartReducer, {
        items: [],
        totalAmount: 0
    })

    const addItemToCart = (item) => {
        distpatchCart({ type: "ADD", item: item })
    }

    const removeItemFromCart = (name) => {
        distpatchCart({ type: "REMOVE", name: name })
    }

    const decreseAmount = (name, amount) => {
        distpatchCart({ type: "REMOVE_AMOUNT", name: name, amount: amount })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        decreseAmount: decreseAmount
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider