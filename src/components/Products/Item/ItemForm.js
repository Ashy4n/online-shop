import CartIcon from "../../UI/CartIcon"
import styles from "./ItemForm.module.css"

const ItemForm = () => {
    const submitHandler = () => {

    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <input type="number" defaultValue={1} min="1" max='99' ></input>
            <button type="submit"><CartIcon /></button>
        </form>
    )

}

export default ItemForm