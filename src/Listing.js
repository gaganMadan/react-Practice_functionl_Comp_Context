import React,{useContext, useState} from 'react';
import List from './List';
import {ItemsContext} from './ItemsContext';

const Listing = () => {
   const [items, setItems] = useContext(ItemsContext);
   console.log(items)
    return (
        <>
         <h1>Listing Page </h1>
          { items.map( item => (
                  <List key={item.id} name={item.name} skills={item.skills}/>
                
          ))}
        </>
        
    )
}

export default Listing