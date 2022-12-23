import ThrashIcon from '../UI/Icons/TrashIcon'
import styles from './CartItem.module.css'
import { useContext, useState } from 'react'
import CartContext from '../../store/cartContext'


const CartItem = (props) => {
    const [amount, setAmount] = useState(props.amount);

    const cartCtx = useContext(CartContext);
    const changeAmountHndl = (event) => {


        if (amount < event.target.value) {
            console.log("add")
            setAmount(event.target.value)
            console.log(parseInt(amount));
            cartCtx.addItem({
                id: Math.random(),
                name: props.name,
                price: parseFloat(props.price),
                img: props.imgUrl,
                amount: 1
            })
        } else {
            console.log("remove")
            setAmount(event.target.value)
            console.log(parseInt(amount));
            cartCtx.decreseAmount(props.name, 1)
        }
    }

    const removeItem = () => {
        console.log(props.name)
        cartCtx.removeItem(props.name)
    }

    return (
        <div className={styles.itemContainer}>
            <img src={props.imgUrl} />
            <h1>{props.name}</h1>
            <p>${props.price} </p>

            <input min={1} onChange={changeAmountHndl} type="number" value={amount}></input>
            <ThrashIcon onClick={removeItem} />
        </div>

    )
}
export default CartItem