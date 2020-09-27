import React, {createContext,  useReducer} from 'react';
import AppReducer from  './AppReducer';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {

    {/*const [posts, setPosts] = useState([]);*/}
    const initialState = {
        data : [
            {
              userId: 1, 
              title: 'sunt aut facere repellat', 
              body: 'tempore vitae\nsequi sint nihil reprehenderit' 
            },
            {
              userId: 1, 
              title: 'sunte repellat', 
              body: 'tempore rehenderit' 
            }

        ]
    }
   

    const [state, dispatch] =  useReducer( AppReducer, initialState );
    console.log(state.data);

    const addData = (post) => {
          axios.post(`https://jsonplaceholder.typicode.com/posts/?userId=${post.userId}&title=${post.title}&body=${post.body}`)
          .then((response) => {
              dispatch({
                type: 'ADD_DATA',
                payload: post
              })
          })
         .catch( err => console.log(err))
    }

    return (
      <DataContext.Provider value={{data: state.data, addData : addData}}>
            {props.children}
      </DataContext.Provider>
    )
}