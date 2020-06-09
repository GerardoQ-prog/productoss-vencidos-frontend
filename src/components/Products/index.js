import React,{useState, useEffect ,Fragment} from 'react';
import {Link} from 'react-router-dom'
import Axios from '../../config/axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Products = () => {

    const [products, setProducts]=useState([])


    useEffect(() => {

         const consultaApi = async () =>{
             const productoconsulta = await  Axios.get('/products')
             console.log(productoconsulta)
              setProducts(productoconsulta.data)
         }
         consultaApi()
    }, []
    )

    return ( 
        <div className="product__container">
            <div className="product__container-header">
            <div className ="product__container-title">
            Productos
            </div>
            <div className="product__container-buttons">
            <Link to={"/"} 
            >
            <button className="btn-nuevo-prod">
             Nuevo Producto   
            </button></Link>
            <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn-nuevo-prod"
                    table="table-to-xls"
                    filename="Productos_vencidos"
                    sheet="Productos_vencidos"
                    buttonText="Descargar XLS"/>
            </div>
            </div>
            <table className="tablep" id="table-to-xls">
            <thead>
            <tr className="tablep-thead">
               <td>SKU</td>
               <td>DESCRIPCION</td>
               <td>CANTIDAD</td>
               <td>FECHA DE VENCIMIENTO</td>
               <td>DIAS PARA RETIRO</td>
               <td>FECHA DE RETIRO</td>
               <td>ÁREA</td>
           </tr>              
           </thead>
           <tbody>
               
               {
                   products.map(product =>(
                    <tr key={product._id}>
                        <td>{product.description}</td>
                        <td>{product.sku}</td>
                        <td>{product.area}</td>
                        <td>{product.date_retirement}</td>
                        <td>{product.date_expiration}</td> 
                    </tr>
                   ))
               } 
           </tbody>
               
            </table>
             
        </div>
     );
}
 
export default Products;