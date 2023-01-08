import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div class={styles.spinnerContainer}>
            <div class={styles.spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
export default Loader