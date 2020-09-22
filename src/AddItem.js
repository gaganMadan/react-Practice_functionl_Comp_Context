import React, {useState, useContext} from 'react';
import {ItemsContext} from './ItemsContext';

 
const AddItem = () => {
  const [items,setItems] = useContext(ItemsContext);

  const [name, setName] = useState('');
  const [skillfirst, setSkillfirst] = useState('');
  const [skillsecond, setSkillsecond] = useState('');
  const [skillthird, setSkillthird] = useState('');
  //console.log(skill);

  const submitHandler = e => {
    e.preventDefault();
    setItems([...items, {id: 4, name: name, skills:[ [...skillfirst].join(''), [...skillsecond].join(''), [...skillthird].join('')]}])
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
         <input type="text" value={skillfirst} onChange={e => setSkillfirst(e.target.value)}/>
        </p>
        <p>
          <input type="text" value={skillsecond} onChange={e => setSkillsecond(e.target.value)}/>
        </p>
        <p>
          <input type="text" value={skillthird} onChange={e => setSkillthird(e.target.value)}/>
        </p>      
      </div>
      <input type="submit"/>
    </form>
  )
}
export default AddItem