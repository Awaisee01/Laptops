import React, { useState } from 'react';
import styled from 'styled-components';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Simulate successful form submission
      console.log('Form submitted successfully:', formData);
      setSuccessMessage('Account created successfully!');
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }); // Clear the form
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSuccessMessage(''); // Clear success message if validation fails
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        
        <Label>
          Username
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <Error>{errors.username}</Error>}
        </Label>

        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <Error>{errors.email}</Error>}
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <Error>{errors.password}</Error>}
        </Label>

        <Label>
          Confirm Password
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
        </Label>

        <Button type="submit">Create Account</Button>

        {successMessage && <Success>{successMessage}</Success>}
      </Form>
    </Container>
  );
};

export default CreateAccount;

// Styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Error = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const Success = styled.div`
  color: green;
  font-size: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;
