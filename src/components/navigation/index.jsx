import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"

const Navigation = ( { user, onlogout }) => {
    
    const handleLogout = (e) => {
        e.preventDefault();
        onlogout();
    }

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <Link to="/" className="nav-logo">Blog App </Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/posts" className="nav-link">Posts</Link>
                        </li>
                        {
                            user ? (
                                <>
                                <li className="nav-item">
                                    <Link to="/logout" onClick={handleLogout} className="nav-link button button-danger"> Logout </Link>
                                </li>
                                </>
                            ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">Reigster</Link>
                                </li>
                            </>
                            )
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navigation