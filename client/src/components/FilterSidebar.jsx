

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'
import {infoSelection} from '../reduxStore/slices/selecOptions'
import {infoUserCreatePage} from '../reduxStore/slices/toggleCreateUserPage'
import { useDispatch } from 'react-redux';

const centerStyle = {
	display: 'flex',
	justifyContent: 'center',
	width: '100vw',
	marginTop: '70px',
	position: 'sticky',
};

export default function TemporaryDrawer({setData}) {
	const [state, setState] = useState({
		right: false,
	});
	const dispatch = useDispatch()
	const [userCreatePage, setuserCreatePage] = useState(false);
	

	const [select, setSelect] = useState({
		domain: [],
		gender: [],
		availability: [],
	});

	
	const updateSelection = (name) => (event) => {
		setSelect({
			...select,
			[name]: event.target.value,
		});
	};
	
	
	const handleSelection = async () => {
		try {
		  const res = await axios.get(`http://localhost:8080/api/filter`, {
			params: {
				select: JSON.stringify(select)
			  },
		  });
		  if (res.status === 200) {
			setData(res.data);
		  }
		} catch (error) {
		  throw error;
		}
	
	  };
	


	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ right: open });
	};

	const list = (
		<Box sx={{ width: 250, padding: 2 }}>
			<div>
				<FormControl fullWidth sx={{ marginBottom: 2 }}>
					<InputLabel htmlFor="domain">Domain:</InputLabel>
					<Select
						id="domain"
						multiple
						value={select.domain}
						onChange={updateSelection('domain')}
						renderValue={(selected) => selected.join(', ')}
					>
						<MenuItem value="Sales">Sales</MenuItem>
						<MenuItem value="Marketing">Marketing</MenuItem>
						<MenuItem value="Finance">Finance</MenuItem>
						<MenuItem value="IT">IT</MenuItem>
						<MenuItem value="Management">Management</MenuItem>
						<MenuItem value="UIDesigning">UI Designing</MenuItem>
						<MenuItem value="BusinessDevelopment">Business Development</MenuItem>
					</Select>
				</FormControl>
				<FormControl fullWidth sx={{ marginBottom: 2 }}>
					<InputLabel htmlFor="gender">Gender:</InputLabel>
					<Select
						id="gender"
						multiple
						value={select.gender}
						onChange={updateSelection('gender')}
						renderValue={(selected) => selected.join(', ')}
					>
						<MenuItem value="Male">Male</MenuItem>
						<MenuItem value="Female">Female</MenuItem>
					</Select>
				</FormControl>
				<FormControl fullWidth sx={{ marginBottom: 2 }}>
					<InputLabel htmlFor="availability">Availability:</InputLabel>
					<Select
						id="availability"
						multiple
						value={select.availability}
						onChange={updateSelection('availability')}
						renderValue={(selected) => selected.join(', ')}
					>
						<MenuItem value={true}>True</MenuItem>
						<MenuItem value={false}>False</MenuItem>
					</Select>
				</FormControl>
				<Button variant="contained" color="primary" fullWidth  onClick={handleSelection}>
					Submit
				</Button>
			</div>
		</Box>
	);

	const handleCreateUser = ()=>{
		setuserCreatePage(!userCreatePage);
	}

	useEffect(()=>{
      dispatch(infoUserCreatePage(userCreatePage));
	},[userCreatePage])

	return (
		<div style={centerStyle}>
			{['right'].map((anchor) => (
				<React.Fragment key={anchor}>
					<div style={{ textAlign: 'center', display: 'flex', gap: '10px' }}>
						<Button
							onClick={toggleDrawer(true)}
							variant="contained"
							color="primary"
							fullWidth
							sx={{
								backgroundColor: 'blue',
								fontSize: '12px',
								whiteSpace: 'nowrap',
								padding: '10px',
								height: '30px',
							}}
						>
							Filter users
						</Button>
						<Button
							onClick={handleCreateUser}
							variant="contained"
							color="primary"
							fullWidth
							sx={{
								backgroundColor: 'green',
								fontSize: '12px',
								whiteSpace: 'nowrap',
								padding: '10px',
								height: '30px',
							}}
						>
							Create User
						</Button>
					</div>

					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(false)}
					>
						{list}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
} 