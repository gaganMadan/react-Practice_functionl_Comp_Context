import React from 'react';
 
const AddItem = () => {
  //const [name, setName] = useState('');


  return (
    <form onSubmit={submitValues
    }>
      <span> Please Enter Name : </span>
      <input type="text" value={name} onChange={handler}/>
      <input type="submit"/>
    </form>
  )
}
export default AddItem