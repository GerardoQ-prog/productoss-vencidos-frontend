import React from 'react';

const Navigation = () => {
    return ( 
        <div className="nav">
           <div className="nav-logo">
               <h1>VenciAPP</h1>
           </div>
           <div className="nav__rigth">
                <div className="nav-buttonlistaprod">
                <a href="/lista">Registro de Productos</a>
                </div>
                <div className="nav-buttonlistaprod">
                <a href="/lista">Lista de Productos</a>
                </div>
           </div>
        </div>
     );
}
 
export default Navigation;