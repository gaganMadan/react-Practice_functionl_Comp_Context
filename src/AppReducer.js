const AppReducer = ( state, action ) => {
      
      switch( action.type ){
        
         case 'ADD_DATA' :
            return {
                data : [ action.payload, ...state.data]
            }
          default :
            return state.data;
              
      }

}

export default AppReducer;