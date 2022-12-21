import styles from "./footer.module.css"


const Footer = () => {
    const date = new Date();
    return (
        <div className={styles.footer}>
            <p>	 {date.getFullYear()} &#169; Mateusz Dworowy </p>

        </div>
    )
}

export default Footer