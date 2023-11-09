import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import CreateNewUser from '../components/CreateNewUser';
import { useSelector} from 'react-redux';
import {addCartItems} from '../reduxStore/slices/cartItems'
import { useDispatch } from 'react-redux';
import {updateCounter} from '../reduxStore/slices/cartItems'
import Pagination from '../components/Pagination';

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

const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
  '&:hover': {
    backgroundColor: 'blue',
  },
};

export default function UsersDetails() {
  const [data, setData] = useState([]);
  const searchTerm = useSelector((state) => state.searchData.searchTerm);
  const selectMainInfo = useSelector((state) => state.selectData.select);
  const createUserInfoPage = useSelector((state)=>state.toggleinfo.userCreatePage) 
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredDatainfo, setFilteredDatainfo] = useState([])
  const dispath = useDispatch();
  const [cartCounter, setCartCounter] = useState(0);


const handleGetAllData = async () => {
	try {
	  const res = await axios.get(`http://localhost:8080/api/users`, {
		params: {
		  select: JSON.stringify(selectMainInfo),
		  searchTerm, // Include the search term in the request
		  page: currentPage,
		  limit: 20,
		},
	  });
	  if (res.status === 200) {
		console.log("res.data.res", res.data)
		setData(res.data);

	  }
	} catch (error) {
	  throw error
	}
  };

  const handleAddUserInCart = (id)=>{
	const filteredData  = data.result.find((user)=>user._id==id)
	setFilteredDatainfo([...filteredDatainfo, filteredData])
	setCartCounter(cartCounter+1);
}

useEffect(()=>{
	dispath(addCartItems(filteredDatainfo))
	dispath(updateCounter(cartCounter))
},[filteredDatainfo, cartCounter])

console.log("filteredddd", filteredDatainfo)


  useEffect(() => {
    handleGetAllData();
  }, [searchTerm, currentPage, selectMainInfo]);

//   console.log("ddd", selectMainInfo)

  return (
	<>
    <div style={{ marginTop: "25px", position:"relative", filter:createUserInfoPage===true ? "blur(25px)":"none"}}>
      <div style={cardContainerStyle}>
        {data.result ? (
          data.result.map((user) => (
            <Card key={user._id} sx={cardStyle}>
              <CardHeader
                title={user.first_name}
                avatar={
                  <Avatar src={user.avatar} alt="User Avatar" />
                }
              />
              <CardMedia
                component="img"
                height="194"
                image={user.avatar}
                alt="User Avatar"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                  {user.domain}
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={buttonStyle} fullWidth onClick={()=>handleAddUserInCart(user._id)}>
                  Select User
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
