import React from 'react'
import './styles.scss'

const Button = ( { variant, type, label, onClick  }) => {
    return (
        <>
            <button type={ type || 'button' } onClick={onClick} class={'button button-' + (variant || 'primary' ) }> { label }</button>
        </>
    )
}

export default Button