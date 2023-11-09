import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

function CreateNewUser() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
	gender:'',
    domain: '',
    avatar: '',
    available: '',
  });
  const createUserInfoPage = useSelector((state) => state.toggleinfo.userCreatePage);

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        avatar: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:8080/api/users", formData);
    try {
      if (res.status === 201) {
        alert("User created successfully");
      }
    } catch (error) {
      console.log("Internal server error !!!");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        position: 'absolute',
        top: '400px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: createUserInfoPage === true ? 'block' : 'none',
        filter: createUserInfoPage === true && 'none',
        position: 'fixed',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: '12px',
		marginLeft: '16px', 
        marginRight: '16px', 
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Gender"
          variant="outlined"
          fullWidth
          margin="normal"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
        <TextField
          label="Domain"
          variant="outlined"
          fullWidth
          margin="normal"
          name="domain"
          value={formData.domain}
          onChange={handleChange}
        />
        <TextField
          label="Image (URL)"
          variant="outlined"
          fullWidth
          margin="normal"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
        />
        <TextField
          select
          label="Availability"
          variant="outlined"
          fullWidth
          margin="normal"
          name="available"
          value={formData.available}
          onChange={handleChange}
        >
          <MenuItem value={true}>true</MenuItem>
          <MenuItem value={false}>false</MenuItem>
        </TextField>
        <Button variant="contained" color="primary" type="submit">
          Create User
        </Button>
      </form>
    </Container>
  );
}

export default CreateNewUser;
