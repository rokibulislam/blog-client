import React  from 'react'
import './styles.scss'

const Modal = ({ show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                {children}
            </div>
        </div>
    )
}

export default Modal