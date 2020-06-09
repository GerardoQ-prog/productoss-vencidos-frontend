import React, { Fragment } from 'react';
import Productss from '../../components/Products/index'
import Navigation from '../../components/Header/Navigation'
import Footer from '../../components/Footer/Footer'
const Products = () => {
    return ( 
        <Fragment>
        <Navigation></Navigation>
        <Productss></Productss>
        <Footer></Footer>
        </Fragment>
        
     );
}
 
export default Products;