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

                <Link to="/">
                    Registro de Productos
                    </Link>
                </div>


                <div className="nav-buttonlistaprod">
                <Link to="/lista">
                    Lista de Productos
                    </Link>
                </div>
                
                
           </div>
        </div>
     );
}
 
export default Navigation;