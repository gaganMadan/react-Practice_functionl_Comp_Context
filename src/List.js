import React from 'react';

const List = (props) => {
   
    return (
         <div key={props.id + 1}>
              <span>Name :</span>
              {props.name}
              <div>Skill Set: <span>{ props.skills + ''} </span></div>
          </div>

    )
}
export default List