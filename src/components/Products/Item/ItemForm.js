import { useState } from "react"
import CartIcon from "../../UI/Icons/CartIcon"
import styles from "./ItemForm.module.css"

const ItemForm = (props) => {
    const [amount, setAmount] = useState('1');

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(amount);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <input value={amount} onChange={(amount) => setAmount(amount.target.value)} name="amount" type="number" min="1" max='99' ></input>
            <button type="submit"><CartIcon /></button>
        </form>
    )

}

export default ItemForm