import React from 'react';

const FormProduct = () => {
    return ( 
      <form className="form">
          <div className="form-title">Registro de Productos</div>
          <div className="form-inputs">
          <label>Descripcion</label>
          <input className="form-input"></input>
          <label>Area</label>
          <input className="form-input"></input>
          <label>Fecha de retiro</label>
          <input type="Date" className="form-input"></input>
          <label>Fecha de vencimiento</label>
          <input type="Date" className="form-input"></input>
          </div>
          
      </form>  
     );
}
 
export default FormProduct;