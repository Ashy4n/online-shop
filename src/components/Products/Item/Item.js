import ItemForm from "./ItemForm"
import styles from "./item.module.css"
import { useContext } from 'react'
import CartContext from '../../../store/cartContext'

const Item = (props) => {
    const cartCtx = useContext(CartContext);

    const onSubmit = (amount) => {
        cartCtx.addItem({
            name: props.name,
            price: parseInt(props.price),
            img: props.imgUrl,
            amount: parseInt(amount)
        })
    }

    return (
        <div className={styles.itemContainer}>
            <img src={props.imgUrl}></img>
            <div className={styles.itemInfo}>
                <h1>{props.name}</h1>
                <p>{props.description} </p>
                <div>
                    <p>${props.price} </p>
                    <ItemForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Item