import ItemForm from "./ItemForm"
import styles from "./item.module.css"
import { useContext } from 'react'
import CartContext from '../../../store/cartContext'

const Item = (props) => {
    const cartCtx = useContext(CartContext);

    const onSubmit = (amount) => {
        cartCtx.addItem({
            id: Math.random(),
            name: props.name,
            price: parseFloat(props.price),
            img: props.imgUrl,
            amount: parseFloat(amount)
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