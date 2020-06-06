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
        <Fragment>
            <h1>Registro</h1>
            <Link to={"/"} 
            className="btn-nuevo-prod">Nuevo Producto</Link>
            <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
            <table className="table-products" id="table-to-xls">

            <tr>
               <td>Descripcion</td>
               <td>Sku</td>
               <td>Area</td>
               <td>Fecha de retiro</td>
               <td>Fecha de vencimiento</td>
           </tr>

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
             
        </Fragment>
     );
}
 
export default Products;