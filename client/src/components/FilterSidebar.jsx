
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';

// const centerStyle = {
// 	display: 'flex',
// 	justifyContent: 'center',
// 	width: '100vw',
// 	marginTop: '70px',
// 	position: "sticky"
// };

// export default function TemporaryDrawer() {
// 	const [state, setState] = React.useState({
// 		right: false,
// 	});

// 	const [select, setSelect] = useState([]);

// 	const toggleDrawer = (open) => (event) => {
// 		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
// 			return;
// 		}

// 		setState({ right: open });
// 	};

// 	const list = (
// 		<Box sx={{ width: 250, padding: 2 }}>
// 			<div>
// 				<FormControl fullWidth sx={{ marginBottom: 2 }}>
// 					<InputLabel htmlFor="domain">Domain:</InputLabel>
// 					<Select id="domain" onChange={updateSelection}>
// 						<MenuItem value="Sales">Sales</MenuItem>
// 						<MenuItem value="Marketing">Marketing</MenuItem>
// 						<MenuItem value="Finance">Finance</MenuItem>
// 						<MenuItem value="IT">IT</MenuItem>
// 						<MenuItem value="Management">Management</MenuItem>
// 						<MenuItem value="UIDesigning">UI Designing</MenuItem>
// 						<MenuItem value="BusinessDevelopment">Business Development</MenuItem>
// 					</Select>
// 				</FormControl>
// 				<FormControl fullWidth sx={{ marginBottom: 2 }}>
// 					<InputLabel htmlFor="gender">Gender:</InputLabel>
// 					<Select id="gender" onChange={updateSelection}>
// 						<MenuItem value="male">Male</MenuItem>
// 						<MenuItem value="female">Female</MenuItem>
// 					</Select>
// 				</FormControl>
// 				<FormControl fullWidth sx={{ marginBottom: 2 }}>
// 					<InputLabel htmlFor="availability">Availability:</InputLabel>
// 					<Select id="availability" onChange={updateSelection}>
// 						<MenuItem value="true">True</MenuItem>
// 						<MenuItem value="false">False</MenuItem>
// 					</Select>
// 				</FormControl>
// 				<Button variant="contained" color="primary" fullWidth onClick={toggleDrawer(false)}>
// 					Submit
// 				</Button>
// 			</div>
// 		</Box>
// 	);

// 	const updateSelection = (e)=>{
//          setSelect([...select, e.target.value])
// 	}

// 	return (
// 		<div style={centerStyle}>
// 			{['right'].map((anchor) => (
// 				<React.Fragment key={anchor}>
// 					<div style={{ textAlign: 'center', display: "flex", gap: "10px" }}>
// 						<Button onClick={toggleDrawer(true)} variant="contained" color="primary" fullWidth sx={{ backgroundColor: "blue", fontSize: "12px", whiteSpace: "nowrap", padding: "10px", height: "30px" }}>
// 							Filter users
// 						</Button>
// 						<Button onClick={toggleDrawer(true)} variant="contained" color="primary" fullWidth sx={{ backgroundColor: "green", fontSize: "12px", whiteSpace: "nowrap", padding: "10px", height: "30px" }}>
// 							Create User
// 						</Button>
// 					</div>

// 					<Drawer
// 						anchor={anchor}
// 						open={state[anchor]}
// 						onClose={toggleDrawer(false)}
// 					>
// 						{list}
// 					</Drawer>
// 				</React.Fragment>
// 			))}
// 		</div>
// 	);
// }


// import React,{useState} from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';

// const centerStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   width: '100vw',
//   marginTop: '70px',
//   position: 'sticky',
// };

// export default function TemporaryDrawer() {
//   const [state, setState] = useState({
//     right: false,
//   });

//   const [select, setSelect] = useState({
//     domain: [],
//     gender: [],
//     availability: [],
//   });

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ right: open });
//   };

//   const list = (
//     <Box sx={{ width: 250, padding: 2 }}>
//       <div>
//         <FormControl fullWidth sx={{ marginBottom: 2 }}>
//           <InputLabel htmlFor="domain">Domain:</InputLabel>
//           <Select
//             id="domain"
//             multiple  // Allow multiple selections
//             value={select.domain}
//             onChange={updateSelection('domain')}
//             renderValue={(selected) => selected.join(', ')} // Display selected options
//           >
//             <MenuItem value="Sales">Sales</MenuItem>
//             <MenuItem value="Marketing">Marketing</MenuItem>
//             <MenuItem value="Finance">Finance</MenuItem>
//             <MenuItem value="IT">IT</MenuItem>
//             <MenuItem value="Management">Management</MenuItem>
//             <MenuItem value="UIDesigning">UI Designing</MenuItem>
//             <MenuItem value="BusinessDevelopment">Business Development</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl fullWidth sx={{ marginBottom: 2 }}>
//           <InputLabel htmlFor="gender">Gender:</InputLabel>
//           <Select
//             id="gender"
//             multiple
//             value={select.gender}
//             onChange={updateSelection('gender')}
//             renderValue={(selected) => selected.join(', ')}
//           >
//             <MenuItem value="male">Male</MenuItem>
//             <MenuItem value="female">Female</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl fullWidth sx={{ marginBottom: 2 }}>
//           <InputLabel htmlFor="availability">Availability:</InputLabel>
//           <Select
//             id="availability"
//             multiple
//             value={select.availability}
//             onChange={updateSelection('availability')}
//             renderValue={(selected) => selected.join(', ')}
//           >
//             <MenuItem value="true">True</MenuItem>
//             <MenuItem value="false">False</MenuItem>
//           </Select>
//         </FormControl>
//         <Button variant="contained" color="primary" fullWidth onClick={toggleDrawer(false)}>
//           Submit
//         </Button>
//       </div>
//     </Box>
//   );

//   const updateSelection = (name) => (event) => {
//     setSelect({
//       ...select,
//       [name]: event.target.value, 
//     });
//   };

//   return (
//     <div style={centerStyle}>
//       {['right'].map((anchor) => (
//         <Fragment key={anchor}>
//           <div style={{ textAlign: 'center', display: 'flex', gap: '10px' }}>
//             <Button
//               onClick={toggleDrawer(true)}
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{
//                 backgroundColor: 'blue',
//                 fontSize: '12px',
//                 whiteSpace: 'nowrap',
//                 padding: '10px',
//                 height: '30px',
//               }}
//             >
//               Filter users
//             </Button>
//             <Button
//               onClick={toggleDrawer(true)}
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{
//                 backgroundColor: 'green',
//                 fontSize: '12px',
//                 whiteSpace: 'nowrap',
//                 padding: '10px',
//                 height: '30px',
//               }}
//             >
//               Create User
//             </Button>
//           </div>

//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(false)}
//           >
//             {list}
//           </Drawer>
//         </Fragment>
//       ))}
//     </div>
//   );
// }


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

export default function TemporaryDrawer() {
	const [state, setState] = useState({
		right: false,
	});
	const dispatch = useDispatch()
	const [userCreatePage, setuserCreatePage] = useState(false);
	// const [result, setResult] = useState({});

	const [select, setSelect] = useState({
		domain: [],
		gender: [],
		availability: [],
	});

	
	// Define the updateSelection function here before it's used
	const updateSelection = (name) => (event) => {
		setSelect({
			...select,
			[name]: event.target.value,
		});
	};
	
	const handleSelection=()=>{
		dispatch(infoSelection(select));
	}
	




   	// 	const handleSelection = async () => {
	// 		toggleDrawer(false);
	// 		try {
	// 		  const res = await axios.get(`http://localhost:8080/api/users?select=${select}`);
	// 		  if (res.status === 200) {
	// 			console.log("rrrrrrrrrrrrrrrrr", res.data)
	// 			setResult(res.data);
	// 		  }
	// 		} catch (error) {
	// 		  console.error(error);
	// 		}
	// }

	// const handleSelection = async () => {
	// 	toggleDrawer(false);
	// 	try {
	// 	  // Construct the selection object in the required format
	// 	  const selection = Object.keys(select).map((key) => {
	// 		return select[key].map((value) => ({
	// 		  key: key,
	// 		  value: value,
	// 		}));
	// 	  }).flat();
	
	// 	  const res = await axios.get(`http://localhost:8080/api/users?select=${JSON.stringify(selection)}`);
	// 	  if (res.status === 200) {
	// 		console.log("Response", res.data);
	// 		setResult(res.data);
	// 	  }
	// 	} catch (error) {
	// 	  console.error(error);
	// 	}
	// }
	

	// const handleSelection = async () => {
	// 	toggleDrawer(false);
	// 	try {
	// 	  const response = await axios.get('http://localhost:8080/api/users', {
	// 		params: {
	// 		  searchTerm: '', // Add the search term if needed
	// 		  select: JSON.stringify(select), // Convert the selection to JSON
	// 		  limit: 20, // Add the limit and page if needed
	// 		  page: 1,
	// 		},
	// 	  });
	// 	  if (response.status === 200) {
	// 		setResult(response.data.result);
	// 	  }
	// 	} catch (error) {
	// 	  console.error(error);
	// 	}
	//   };
	  
	

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
						<MenuItem value="male">Male</MenuItem>
						<MenuItem value="female">Female</MenuItem>
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
						<MenuItem value="true">True</MenuItem>
						<MenuItem value="false">False</MenuItem>
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