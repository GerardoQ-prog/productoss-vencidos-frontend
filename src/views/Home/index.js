import React, { Fragment } from 'react';
import Navigation from '../../components/Header/Navigation'
import Footer from '../../components/Footer/Footer'
import FormProduct from '../../components/FormProduct/index'
const Home = () => {
    return ( 
        <Fragment>
            <Navigation></Navigation>
            <FormProduct></FormProduct>
            <Footer></Footer>
            
        </Fragment>
        
     );
}
 
export default Home;