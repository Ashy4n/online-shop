import styles from './CartItem.module.css'

const CartItem = (props) => {
    return (
        <div className={styles.itemContainer}>
            <img src={props.imgUrl}></img>
            <h1>{props.name}</h1>

            <p>${props.price} </p>
            <input type="number" defaultValue={1}></input>

        </div>

    )
}
export default CartItem