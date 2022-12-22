import styles from "./CartButton.module.css"
import { useContext } from "react"
import cartContext from "../../../../store/cartContext"


const CartButton = (props) => {
    const cartCtx = useContext(cartContext);
    const numberOfItemsInCart = cartCtx.items.reduce(
        (currentNum, item) => { return currentNum + item.amount }
        , 0)
    return (
        <div onClick={props.onClick} className={styles.main} >
            <i class="fa-solid fa-cart-shopping"></i>
            <p>Your Cart</p>
            <div className={styles.indicator}>{numberOfItemsInCart}</div>
        </div>
    )
}

export default CartButton