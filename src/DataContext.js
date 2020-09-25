import React, {createContext,  useReducer} from 'react';
import AppReducer from  './AppReducer';

export const DataContext = createContext();

export const DataProvider = (props) => {

    {/*const [posts, setPosts] = useState([]);*/}
    const initialState = {
        data : [
            {
              userId: 1, 
              id: 1, 
              title: 'sunt aut facere repellat', 
              body: 'tempore vitae\nsequi sint nihil reprehenderit' 
            },
            {
              userId: 1, 
              id: 1, 
              title: 'sunt aut facere repellat', 
              body: 'tempore vitae\nsequi sint nihil reprehenderit' 
            }

        ]
    }
   

    const [state, dispatch] =  useReducer( AppReducer, initialState );

    const addData = (post) => {
          dispatch({
              type: 'ADD_DATA',
              payload: post
          })
    }

    return (
      <DataContext.Provider value={{data: state.data, addData : addData}}>
            {props.children}
      </DataContext.Provider>
    )
}