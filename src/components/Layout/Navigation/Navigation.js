import styles from "./navigation.module.css"
import CartButton from "./CartButton/CartButton"

const Navigation = (props) => {
    return (
        <div className={styles.nav}>
            <h1>REACT SHOP</h1>
            <CartButton cartItems={1} />
        </div>
    )
}

export default Navigation