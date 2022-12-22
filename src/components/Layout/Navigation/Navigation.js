import styles from "./navigation.module.css"
import CartButton from "./CartButton/CartButton"

const Navigation = (props) => {

    // const cartButtonHandler = () => {
    //     props.onCartClick();
    // }


    return (
        <div className={styles.nav}>
            <h1>REACT SHOP</h1>
            <CartButton onClick={props.onCartClick} cartItems={1} />
        </div>
    )
}

export default Navigation