import ThrashIcon from '../UI/Icons/TrashIcon'
import styles from './CartItem.module.css'
import { useContext, useState } from 'react'
import CartContext from '../../store/cartContext'

const CartItem = (props) => {
    const [amount, setAmount] = useState(props.amount);

    const cartCtx = useContext(CartContext);
    const changeAmountHndl = (event) => {
        setAmount(event.target.value)
    }

    return (
        <div className={styles.itemContainer}>
            <img src={props.imgUrl} />
            <h1>{props.name}</h1>
            <p>${props.price} </p>

            <input onChange={changeAmountHndl} type="number" value={amount}></input>
            <ThrashIcon />
        </div>

    )
}
export default CartItem