import Item from "../Item/Item"
import styles from "./items.module.css"
import { useEffect, useState } from "react"


const Items = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchUrl = "https://react-a9331-default-rtdb.europe-west1.firebasedatabase.app/Items.json";
        const fetchItems = async () => {
            const res = await fetch(fetchUrl);
            const responseData = await res.json();
            const loadedItems = []
            for (const item in responseData) {
                loadedItems.push({
                    id: item,
                    name: responseData[item].name,
                    imgUrl: responseData[item].imgUrl,
                    price: responseData[item].price,
                    description: responseData[item].description
                })
            }

            setItems(loadedItems);
        }
        fetchItems();
    }, [])


    const itemsList = items.map((item => {
        return <Item
            key={item.name}
            name={item.name}
            imgUrl={item.imgUrl}
            description={item.description}
            price={item.price}
        />
    }))

    return (
        <div className={styles.itemsContainer}>
            {itemsList}
        </div>
    )
}

export default Items