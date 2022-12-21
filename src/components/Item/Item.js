import styles from "./item.module.css"


const Item = (props) => {
    return (
        <div className={styles.itemContainer}>
            <img src={props.imgUrl}></img>
            <div>
                <h1>
                    {props.name}
                </h1>
                <p>
                    {props.description}
                </p>
                <p>
                    {props.price}
                </p>
                <button><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    )
}

export default Item