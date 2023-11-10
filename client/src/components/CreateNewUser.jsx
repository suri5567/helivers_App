
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import {infoUserCreatePage} from '../reduxStore/slices/toggleCreateUserPage'

function CreateNewUser() {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		gender: '',
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
		const res = await axios.post("https://mernapp-user.onrender.com/api/users", formData);
		try {
			if (res.status === 201) {
				setFormData({
					first_name: '',
					last_name: '',
					email: '',
					gender: '',
					domain: '',
					avatar: '',
					available: '',
				})
				alert("User created successfully");
				dispatch(infoUserCreatePage(!createUserInfoPage));
			}
		} catch (error) {
			console.log("Internal server error !!!");
		}
	};
	
	return (
		<Container
			maxWidth="xs"
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				display: createUserInfoPage === true ? 'block' : 'none',
				filter: createUserInfoPage === true && 'none',
				position: 'fixed',
				backgroundColor: 'white',
				padding: '16px',
				boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
				borderRadius: '12px',
				maxHeight: '80vh', 
				marginTop:"50px"
			}}
			style={{marginLeft:"10px", marginRight:"12px"}}
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
					style={{ marginBottom: '-2px' }}
				/>
				<TextField
					label="Last Name"
					variant="outlined"
					fullWidth
					margin="normal"
					name="last_name"
					value={formData.last_name}
					onChange={handleChange}
					style={{ marginBottom: '-2px' }}
				/>
				<TextField
					label="Email"
					variant="outlined"
					fullWidth
					margin="normal"
					name="email"
					value={formData.email}
					onChange={handleChange}
					style={{ marginBottom: '-2px' }}
				/>
				<TextField
					label="Gender"
					variant="outlined"
					fullWidth
					margin="normal"
					name="gender"
					value={formData.gender}
					onChange={handleChange}
					style={{ marginBottom: '-2px' }}
				/>
				<TextField
					label="Domain"
					variant="outlined"
					fullWidth
					margin="normal"
					name="domain"
					value={formData.domain}
					onChange={handleChange}
					style={{ marginBottom: '-2px' }}
				/>
				<TextField
					label="Image (URL)"
					variant="outlined"
					fullWidth
					margin="normal"
					name="avatar"
					value={formData.avatar}
					onChange={handleChange}
					style={{ marginBottom: '-2px' }}
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
					style={{ marginBottom: '-2px' }}
				>
					<MenuItem value={'true'}>true</MenuItem>
					<MenuItem value={'false'}>false</MenuItem>
				</TextField>
				<Button variant="contained" color="primary" type="submit" width="30px" style={{marginTop:"12px", marginLeft:"125px"}}  >
					Create User
				</Button>
			</form>
		</Container>
	);
}

export default CreateNewUser;



