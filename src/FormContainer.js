import React from 'react';
import Form1 from './Form1'
import {DataProvider} from './DataContext';

const FormContainer = () => {
    return (
      <DataProvider>
          <Form1 /> 
      </DataProvider>
    )
}

export default FormContainer