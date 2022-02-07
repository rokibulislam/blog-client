import React from 'react'
import './styles.scss'

const Alert = ({ message, variant, onClose }) => {
    return (
        <div className={'alert alert-' + (variant || 'primary' )}>
            { message }
            <button type="button" onClick={onClose} class="alert-close">X</button>
        </div>
    )
}

export default Alert