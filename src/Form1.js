import React, {useState, useContext} from 'react';
import {DataContext} from './DataContext';


const Form1 = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    /*const {addData} = useContext(DataContext);*/

    const submitHandler = (e) => {
        e.preventDefault();
        let newData = {
           "userId": 1,
            "id":  Math.floor(Math.random() * 100000000),
            title,
            body
        }
       addData(newData);
    }

      return (
        <div class="form-style-3">
          <form onSubmit={submitHandler}>
            <fieldset>
              <legend>Personal</legend>
              <label for="field1"><span>Title <span class="required">*</span></span><input type="text" class="input-field" name="title" value={title} onChange={() => set(title)}/></label>
              {/*<label for="field2"><span>Email <span class="required">*</span></span><input type="email" class="input-field" name="field2" value="" /></label>
              <label for="field3"><span>Phone <span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" /></label>
              <label for="field4">
                  <span>Subject</span>
                  <select name="field4" class="select-field">
                    <option value="Appointment">Appointment</option>
                    <option value="Interview">Interview</option>
                    <option value="Regarding a post">Regarding a post</option>
                  </select>
              </label>*/}
            </fieldset>
            <fieldset>
              <legend>Message</legend>
              <label for="field6"><span>Body <span class="required">*</span></span><textarea name="body" class="textarea-field" value={body} onChange={() => setBody(body)}></textarea></label>
              <label><span> </span><input type="submit" value="Submit" /></label>
            </fieldset>
        </form>
      </div>
      )
}

export default Form1