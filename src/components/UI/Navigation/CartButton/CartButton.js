import styles from "./CartButton.module.css"

const CartButton = (props) => {
    return (
        <div className={styles.main} >
            <i class="fa-solid fa-cart-shopping"></i>
            <p>Your Cart</p>
            <div className={styles.indicator}>{props.cartItems}</div>
        </div>
    )
}

export default CartButton