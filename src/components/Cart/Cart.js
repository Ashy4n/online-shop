import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from "../../store/cartContext"

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const cartItems = cartCtx.items

    const itemsList = cartItems.map((item => {
        return <CartItem
            key={item.id}
            name={item.name}
            imgUrl={item.img}
            price={item.price}
            amount={item.amount}
        />
    }))
    console.log(parseFloat(cartCtx.totalAmount))
    return (<>

        <Modal onBackdropClick={props.onCloseClick}>

            {itemsList}
            <div className={styles.cartContainer}>
                <div>
                    <p>Total price</p>
                    <p>{cartCtx.totalAmount}</p>
                </div>
                <div className={styles.btnContainer}>
                    <button>Checkout</button>
                    <button onClick={props.onCloseClick}>Close</button>
                </div>
            </div>
        </Modal>

    </>

    )
}
export default Cart