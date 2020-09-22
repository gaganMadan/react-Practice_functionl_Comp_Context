import React, {useState} from 'react';
 
const AddItem = () => {
  const [name, setName] = useState('');
  const [skill, setSkill] = useState(['']);

  const submitHandler = e => {
    e.preventDefault();
    alert(`Hello ${name} Skills ${skill}`)
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
         <input type="text" value={skill[0]} onChange={e => setSkill(...skill, e.target.value)}/>
        </p>
        <p>
          <input type="text" value={skill[1]} onChange={e => setSkill(...skill, e.target.value)}/>
        </p>
        <p>
          <input type="text" value={skill[2]} onChange={e => setSkill(...skill, e.target.value)}/>
        </p>
      </div>
      <input type="submit"/>
    </form>
  )
}
export default AddItem