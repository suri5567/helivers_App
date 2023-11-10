
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import CreateNewUser from '../components/CreateNewUser';
import { useSelector } from 'react-redux';
import { addCartItems } from '../reduxStore/slices/cartItems';
import { useDispatch } from 'react-redux';
import { updateCounter } from '../reduxStore/slices/cartItems';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

const cardContainerStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
	gap: '20px',
	padding: '20px',
};

const cardStyle = {
	maxWidth: 345,
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
	transition: '0.3s',
	'&:hover': {
		boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
		transform: 'scale(1.05)',
	},
};

const buttonContainerStyle = {
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
}

const buttonStyle = {
	backgroundColor: 'black',
	color: 'white',
	textTransform: 'none',
	fontFamily: 'Arial, sans-serif',
	'&:hover': {
		backgroundColor: 'blue',
	},
};

const deleteButtonStyle = {
	backgroundColor: 'red',
	color: 'white',
	textTransform: 'none',
	fontFamily: 'Arial, sans-serif',
	'&:hover': {
		backgroundColor: 'darkred',
	},
};


const updateButtonStyle = {
	backgroundColor: 'green',
	color: 'white',
	textTransform: 'none',
	fontFamily: 'Arial, sans-serif',
	'&:hover': {
		backgroundColor: 'darkgreen',
	},
};


export default function UsersDetails({ data, setData }) {
	const searchTerm = useSelector((state) => state.searchData.searchTerm);
	const selectMainInfo = useSelector((state) => state.selectData.select);
	const createUserInfoPage = useSelector((state) => state.toggleinfo.userCreatePage);
	const [currentPage, setCurrentPage] = useState(1);
	const dispath = useDispatch();
	const navigate = useNavigate();


	const handleGetAllData = async () => {
		try {

			const res = await axios.get(`https://mernapp-user.onrender.com/api/users`, {
				params: {
					searchTerm,
					page: currentPage,
					limit: 20,
				},
			});
			if (res.status === 200) {
				setData(res.data);
			}

		} catch (error) {
			throw error;
		}
	};

	const updateUser = (id) => {
		navigate(`/updateuser/${id}`)
	}


	const handleDeleteUser = async (id) => {
		try {
			const res = await axios.delete(`https://mernapp-user.onrender.com/api/users/${id}`);
			if (res.status === 200) {
				handleGetAllData();
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleGetAllData();

	}, [searchTerm, currentPage, selectMainInfo]);

	const handleWholeInfo = (id) => {
		navigate(`/userdata/${id}`)
	}

	return (
		<>
			<div style={{ marginTop: "2px", position: "relative", filter: createUserInfoPage === true ? "blur(25px)" : "none" }}>
				<div style={cardContainerStyle}>
					{data.result ? (
						data.result.map((user) => (
							<Card key={user._id} sx={cardStyle} style={{ borderRadius: "10px" }}>
								<CardHeader
									title={user.first_name}
									avatar={<Avatar src={user.avatar} alt="User Avatar" />}
								/>
								<CardMedia
									component="img"
									height="150"
									image={user.avatar}
									alt="User Avatar"
									onClick={() => handleWholeInfo(user._id)}
									style={{ cursor: "pointer" }}
								/>
								<CardContent>
									<Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
										{user.domain}
									</Typography>
								</CardContent>
								<CardActions style={buttonContainerStyle}>
									<Button sx={buttonStyle} fullWidth onClick={() => dispath(addCartItems(user))}>
										Add to Team
									</Button>
									<Button sx={updateButtonStyle} fullWidth onClick={() => updateUser(user._id)}>
										Update User
									</Button>
									<Button sx={deleteButtonStyle} fullWidth onClick={() => handleDeleteUser(user._id)}>
										Delete User
									</Button>
								</CardActions>
							</Card>
						))
					) : (
						<div>Loading, please wait...</div>
					)}
				</div>
				<Pagination totalPages={data?.totalPages} activePage={currentPage} handlePage={setCurrentPage} />
			</div>
			<CreateNewUser />
		</>
	);
}
