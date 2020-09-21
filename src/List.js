import React from 'react';

const List = (props) => {
    //{console.log(props.id)}
    return (
         <div key={props.key}>
              <span>Name :</span>
              {props.name}
              <div>Skill Set: <span>{ props.skills + ''} </span></div>
          </div>

    )
}
export default List