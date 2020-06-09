import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Link to="/">
                VenciApp
                </Link>
                    
                <p>Gerardo J. Quispe Chavez</p>
                <p>©Copyright 2020</p>
            </div>
        </footer>
    )
}

export default Footer
