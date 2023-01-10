import { useRef, useState } from 'react'
import styles from './Checkout.module.css'

const Checkout = (props) => {
    const nameRef = useRef()
    const emailRef = useRef()
    const streetRef = useRef()
    const cityRef = useRef()

    const notEmpty = (value) => value.trim() !== "";
    const [isFormValid, setIsFormValid] = useState({
        name: true,
        email: true,
        street: true,
        city: true,
    })

    const comfirmOrder = (event) => {
        event.preventDefault();
        const enteredName = nameRef.current.value
        const enteredEmail = emailRef.current.value
        const enteredStreet = streetRef.current.value
        const enteredCity = cityRef.current.value
        setIsFormValid({
            name: notEmpty(enteredName),
            email: notEmpty(enteredEmail),
            street: notEmpty(enteredStreet),
            city: notEmpty(enteredCity),
        })
        console.log(isFormValid.name)
    }
    console.log();
    return (
        <form className={styles.form}>
            <label>Name</label>
            <input className={`${!isFormValid.name && styles.invalid}`} ref={nameRef}></input>
            <label >e-mail</label>
            <input className={`${!isFormValid.email && styles.invalid}`} ref={emailRef}></input>
            <label>Street</label>
            <input className={`${!isFormValid.street && styles.invalid}`} ref={streetRef}></input>
            <label>City</label>
            <input className={`${!isFormValid.city && styles.invalid}`} ref={cityRef}></input>
            <div>
                <button type='submit' onClick={comfirmOrder}>Order</button>
                <button onClick={props.onClose}>Close</button>
            </div>


        </form>
    )
}
export default Checkout