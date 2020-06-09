import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return ( 
        <div className="nav">
           <div className="nav-logo">
               <h1>VenciAPP</h1>
           </div>
           <div className="nav__rigth">
                <div className="nav-buttonlistaprod">
                <a href="/">Registro de Productos</a>
                </div>
                <Link to="/lista">
                <div className="nav-buttonlistaprod">
                    Lista de Productos
                </div>
                </Link>
                
           </div>
        </div>
     );
}
 
export default Navigation;