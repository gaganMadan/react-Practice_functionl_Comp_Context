import React from "react";
import "./style.css";
import Listing from './Listing';
import Nav from './Nav';
import AddItem from  './AddItem'
import {ItemsProvider} from './ItemsContext';

const App = () => (
    <ItemsProvider>
      <div className="App">
          <Nav />
          <Listing />
          <AddItem />
      </div>
    </ItemsProvider>
    
)

export default App
