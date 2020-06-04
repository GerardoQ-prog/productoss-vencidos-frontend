import React from 'react';
import Home from '../src/views/Home/index'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
const App = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/lista" component={Home}></Route>
            </Switch>
        </Router>

     );
}
 
export default App;