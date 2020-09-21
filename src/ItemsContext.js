import React, {useState, createContext} from 'react'

export const ItemsContext = createContext();

// Provider provide the data to application
export const ItemsProvider = props => {
   const [items, setItems] = useState([
          {
            id: 1,
            name: 'Gagan',
            skills: ['js','.net','java']
          },
          {
            id: 2,
            name: 'Anu',
            skills: ['node','mongo','java']
          },
          {
            id: 3,
            name: 'Dikshan',
            skills: ['js','ptthon','.net']
          }

    ])

  return (
    <ItemsContext.Provider value={[items,setItems]}>
         {props.children}
    </ItemsContext.Provider>
  )

}