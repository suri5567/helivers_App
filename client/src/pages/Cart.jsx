
import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCartItem } from '../reduxStore/slices/cartItems';
import { updateCounter } from '../reduxStore/slices/cartItems';
import {counterDecrement} from '../reduxStore/slices/cartItems' 

// Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px', 
	marginTop:"30px"
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    height: '100%', 
    background: '#f5f5f5',
    borderRadius: '12px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    marginBottom: '10px', 
  },
  button: {
    marginTop: '10px',
    backgroundColor: '#ff0000', 
    color: 'white',
    padding: '12px 24px', 
    borderRadius: '8px', 
    fontSize: '14px', 
    transition: 'background-color 0.3s', 
    '&:hover': {
      backgroundColor: '#d30000', 
    },
  },
  text: {
    fontFamily: 'Arial, sans-serif',
  },
  blueText: {
    color: 'blue',
  },
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cartInfo.cartItems);
  const cartCounter = useSelector((state) => state.cartInfo.counter);
  const dispatch = useDispatch();

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
	dispatch(deleteCartItem(updatedCart));
	dispatch(counterDecrement(cartCounter-1))
};


  return (
    <div style={styles.container}>
      <h2 style={{ marginTop: '50px', marginBottom:"8px" }}>Team Members</h2>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Paper elevation={3} style={styles.paper}>
              <Avatar alt={item.first_name} src={item.avatar} style={styles.avatar} />
              <div style={styles.text}>
                <p style={{ marginBottom: '8px' }}><strong>First Name:</strong> {item.first_name}</p>
                <p style={{ marginBottom: '8px' }}><strong>Last Name:</strong> {item.last_name}</p>
                <p style={{ marginBottom: '8px' }}><strong>Domain:</strong> {item.domain}</p>
                <p style={{ marginBottom: '8px' }}>
                  <strong>Email:</strong>
                  <span style={styles.blueText}> {item.email}</span>
                </p>
              </div>
              <Button
                variant="contained"
                style={styles.button}
				onClick={() => dispatch(deleteCartItem(item._id))}
              >
                <DeleteIcon /> Delete
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cart;



