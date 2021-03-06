import React,{useState} from 'react';
import Axios from '../../config/axios'
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'

const FormProduct = () => {

    const {register, errors, handleSubmit, reset } = useForm();

    const [product, setProduct] = useState({
        description:'',
        sku:'',
        area:'',
        date_retirement:'',
        date_expiration:''
        

    })
    const newProduct = (data,e) =>{
        e.target.reset();
        //envair peticion
        Axios.post('/products',product)
        .then(res =>{
            //validar si hay errores de mongo
            if(res.data.code === 404){
                Swal.fire({
                    type:'error',
                    title:'Hubo un error',
                    text: ' No se agrego producto'
                  })
            }else{
                
                Swal.fire(
                    'Se agrego producto',
                    res.data.mensaje,
                    'success'
                  )  
                  
                
            }
        })
       
    }
    

    const actualizaState = e =>{
        //alamacena lo que se escribe
        setProduct({
            //copia del state actual
            ...product,
            [e.target.name]:e.target.value

        })
        
        
    }


    return ( 
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit(newProduct)}  >
          
          <div className="form__inputs-container">
          <div className="form-title">
              Registro de Productos
          </div>
          <div className="form__input-item">
            <label>Sku</label>
                <input 
                className="form-input"
                placeholder="Ingrese sku del producto"
                name="sku"
                ref={register({
                  required: {
                      type:Number,
                      value: true, 
                      },
                      minLength:2
                  })}
                  onChange={actualizaState}
                >
                </input>
                {errors.sku && <span className="form-error">Ingrese minimo 2 digitos</span>}
          </div>
          <div className="form__input-item">
            <label>Descripción</label>
                <input 
                    className="form-input"
                    placeholder="Ingrese descripción del producto"
                    name="description"
                    ref={register({
                      required: {
                          value: true, 
                          }
                      })}
                      onChange={actualizaState}
                    >
                    </input>
                    {errors.description && <span className="form-error">Se requiere la descripcion
                    del producto</span>}
          </div>         
          <div className="form__input-item">
            <label>Cantidad</label>
                <input 
                type="Number"
                min="0"
                    className="form-input"
                    placeholder="Ingrese cantidad"
                    name="cantidad"
                    ref={register({
                      required: {
                          value: true, 
                          }
                      })}
                      onChange={actualizaState}>
                    </input>
                    {errors.cantidad && <span className="form-error">Se requiere la cantidad</span>}
          </div>
          <div className="form__input-item">
                <label>Fecha de vencimiento</label>
                <input 
                type="Date" 
                className="form-input"
                name="date_expiration"
                ref={register({
                    required: {
                        value: true, 
                        }
                    })}
                onChange={actualizaState}>
                </input>
                {errors.date_expiration && <span className="form-error">Se requiere fecha de vencimiento</span>}
          </div>
          <div className="form__input-item">
                <label>Dias para Retiro</label>
                <input 
                type="Number" 
                min="0"
                placeholder="Ingrese dias para retirar"
                className="form-input"
                name="dias"
                ref={register({
                    required: {
                        value: true, 
                        }
                    })}
                onChange={actualizaState}>
                </input>
                {errors.dias && <span className="form-error">Se requiere dias para retiro</span>}
          </div>
          <div className="form__input-item">
            <label>Fecha de retiro</label>
                <input 
                type="Date" 
                className="form-input"
                name="date_retirement"
                ref={register({
                    required: {
                        value: true, 
                        }
                    })}    
                onChange={actualizaState}>
                </input>
                {errors.date_retirement && <span className="form-error">Se requiere fecha de retiro</span>}
           </div>
           <div className="form__input-item">
            <label>Área</label>
                <input 
                    className="form-input"
                    placeholder="Ingrese área"
                    name="area"
                    ref={register({
                      required: {
                          value: true, 
                          }
                      })}
                      onChange={actualizaState}>
                    </input>
                    {errors.area && <span className="form-error">Se requiere el area del producto</span>}
          </div>
          <div className="form__input-item">  
          <button 
          type="submit" 
          className="form-btnregistro"
          >
            Registrar
          </button>
          </div>

          </div>
            </form>  
        </div>
     
     );
}
 
export default FormProduct;