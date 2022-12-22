import ItemForm from "./ItemForm"
import styles from "./item.module.css"


const Item = (props) => {
    return (
        <div className={styles.itemContainer}>
            <img src={props.imgUrl}></img>
            <div className={styles.itemInfo}>
                <h1>{props.name}</h1>
                <p>{props.description} </p>
                <div>
                    <p>${props.price} </p>
                    <ItemForm />
                </div>
            </div>
        </div>
    )
}

export default Item