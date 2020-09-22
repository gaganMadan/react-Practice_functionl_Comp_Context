import React, {useState, useContext} from 'react';
import {ItemsContext} from './ItemsContext';

 
const AddItem = () => {
  const [items,setItems] = useContext(ItemsContext);

  const [name, setName] = useState('');
  const [skill, setSkill] = useState(['hello', 'fello','ggan']);
  console.log(skill);

  const submitHandler = e => {
    e.preventDefault();
    setItems([...items, {id: 4, name: name, skills: [...skill]}])
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label> Please Enter Name : </label>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <div className="skillSet">
         <label> Enter Skill Set : </label>
        <p>
         <input type="text" value={skill[0]} onChange={ e => setSkill([ 'hhh', ...skill ])}/>
        </p>
        <p>
          <input type="text" value={skill[1]} onChange={ e => setSkill([e.target.value])}/>
        </p>
        <p>
          <input type="text" value={skill[2]} onChange={ e => setSkill([e.target.value])}/>
        </p>      </div>
      <input type="submit"/>
    </form>
  )
}
export default AddItem