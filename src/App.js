import React from "react";
import "./style.css";
import Listing from './Listing';
import Nav from './Nav';
import AddItem from  './AddItem'
import {ItemsProvider} from './ItemsContext';
import FormContainer from './FormContainer';

//For Routing 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => (
    <ItemsProvider>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/listing" component={Listing}>
                <Listing />
              </Route>
              <Route exact path="/" component={AddItem}>
                <AddItem />
              </Route>
              
              <Route path="/form1" component={FormContainer}>
                <br />
                <br />
                <br />
                <FormContainer />
              </Route>
            </Switch>
          </div>
        </Router>
    </ItemsProvider>
    
)

export default App
