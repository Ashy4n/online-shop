import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import { useContext, useState } from 'react';
import CartContext from "../../store/cartContext"
import Checkout from './Checkout';

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const cartItems = cartCtx.items

    const [isCheckout, setIsCheckout] = useState(false);


    const itemsList = cartItems.map((item => {
        return <CartItem
            key={item.id}
            name={item.name}
            imgUrl={item.img}
            price={item.price}
            amount={item.amount}
        />
    }))

    //Checkout

    const toggleCheckout = () => {
        setIsCheckout(!isCheckout);
    }

    const onCheckoutSubmit = (checkoutData) => {
        fetch('https://react-a9331-default-rtdb.europe-west1.firebasedatabase.app/Orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: checkoutData,
                orderedItems: cartItems,
                orderPrice: cartCtx.totalAmount
            })
        })
    }

    return (<>

        <Modal onBackdropClick={props.onCloseClick}>
            {cartItems.length === 0 ? <div className={styles.emptyCart}>Cart is empty</div> : itemsList}

            <div className={styles.cartContainer}>
                <div>
                    <p>Total price</p>
                    <p>{cartCtx.totalAmount}</p>
                </div>
                {isCheckout ? <Checkout onClose={toggleCheckout} onConfirm={onCheckoutSubmit} /> : <div className={styles.btnContainer}>
                    <button onClick={toggleCheckout}>Checkout</button>
                    <button onClick={props.onCloseClick}>Close</button>
                </div>}

            </div>
        </Modal>

    </>

    )
}
export default Cart