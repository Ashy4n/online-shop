import styles from './Modal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = () => {
    return (
        <div className={styles.backdrop}>
        </div>
    )
}

const ModalOverlay = (props) => {
    return (
        < div className={styles.modal} >
            {props.children}
        </div >
    )
}


const Modal = (props) => {
    const portalLocation = document.getElementById('overlays');
    return (
        <>
            {ReactDOM.createPortal(<Backdrop></Backdrop>, portalLocation)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
        </>
    )
}
export default Modal
