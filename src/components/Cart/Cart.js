import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = [
        {
            name: "Iphone 13",
            price: 3999,
            imgUrl: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/41/4117890/Smartfon-APPLE-Czerwony-1.jpg",
            description: "Solid Phone"
        },
        {
            name: "Apple wtach",
            price: 1399,
            imgUrl: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/41/4119710/Smartwatch-APPLE-SE-Aluminium-Polnoc-Pasek-Polnoc-1.jpg",
            description: "Nice watch"
        },
        {
            name: "Nintendo Switch",
            price: 1400,
            imgUrl: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/30/3059056/Konsola-NINTENDO-Switch-Oled-Czerwono-niebieska-bok.jpg",
            description: "Nice console"
        },
        {
            name: "Some cable",
            price: 18,
            imgUrl: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/36/3604641/Kabel-USB-Typ-C-Lightning-BELKIN-1m-front.jpeg",
            description: "1m black cable"
        },
    ]

    const itemsList = cartItems.map((item => {
        return <div
            name={item.name}
            imgUrl={item.imgUrl}
            description={item.description}
            price={item.price}
        />
    }))

    return (<>

        <Modal>
            <CartItem name={cartItems[0].name} imgUrl={cartItems[0].imgUrl} price={cartItems[0].price} />
            <button>Checkout</button>
            <button>Close</button>
        </Modal>

    </>

    )
}
export default Cart