import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function FormExample() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [sectorValue, setSectorValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const navigate= useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      checkbox: checkboxValue,
      sector: sectorValue,
      name: nameValue,
    };

    fetch('http://localhost:8000/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate('/success');
      })
      
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
    });
  };

  return (

    <Container>
    <Form onSubmit={handleSubmit}>
        <h1 className='mb-3 text-center'>Django React Info Form</h1>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={nameValue} onChange={(event) => setNameValue(event.target.value)}
          className="mb-3"  type="text" name="name" placeholder="Your Name" />
    <Form.Select name="selectValue" value={sectorValue} onChange={(event) => setSectorValue(event.target.value)} className="mb-3" aria-label="Default select example">
        <option value='Manufacturer'>Manufacturer</option>
        <option value='Furniture'>Furniture</option>
        <option value='Wood'>Wood</option>
    </Form.Select>
    <Form.Group name="checkboxValue"  checked={checkboxValue}
          onChange={(event) => setCheckboxValue(event.target.checked)} className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree" />
    </Form.Group>
    <Button  className="mb-3" variant="primary" type="submit">
        Submit
    </Button>

        
    </Form>
    </Container>

    
  );
}

export default FormExample;
