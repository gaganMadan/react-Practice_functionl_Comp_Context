import React,{useState} from 'react';
import List from './List';

const Listing = () => {
    const [items, setItems] = useState([
          {
            id: 0,
            name: 'Gagan',
            skills: ['js','.net','java']
          },
          {
            id: 1,
            name: 'Anu',
            skills: ['node','mongo','java']
          },
          {
            id: 2,
            name: 'Dikshan',
            skills: ['js','ptthon','.net']
          }

    ])

    return (
        <>
         <h1>Listing Page </h1>
          { items.map( item => (
                  <List id={item.id} name={item.name} skills={item.skills}/>
                
          ))}
        </>
        
    )
}

export default Listing