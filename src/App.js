import React from 'react';
import Home from '../src/views/Home/index'
import Products from '../src/views/Products/index'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
const App = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/lista" component={Products} exact/>
                <Route path="/" component={Home}/>

            </Switch>
        </Router>

     );
}
 
export default App;