import styles from "./CartButton.module.css"

const CartButton = () => {
    return (
        <div className={styles.main} >
            <i class="fa-solid fa-cart-shopping"></i>
            <p>Your Cart</p>
            <div className={styles.indicator}>3</div>
        </div>
    )
}

export default CartButton