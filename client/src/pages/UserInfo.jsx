
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, CircularProgress, Grid, Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserInfoCard = ({ user }) => {
  return (
    <Card style={{ maxWidth: '500px', width: '100%', margin: 'auto', backgroundColor: 'lightGreen',marginTop:"50px", borderRadius:"15px", height:"300px"  }}>
      <CardContent>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4}>
            <Avatar alt="User Avatar" src={user.avatar} sx={{ width: 120, height: 120 }} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h5" style={{ color: '#333' }}>
              {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" style={{ color: '#666' }}>
              Email: {user.email}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" style={{ color: '#666' }}>
              Gender: {user.gender}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" style={{ color: '#666' }}>
              Domain: {user.domain}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" style={{ color: '#666' }}>
              Availability: {user.available ? 'true' : 'false'}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const UserInfo = () => {
  const { id } = useParams();
  const [userDetailedInfo, setUserDetailedData] = useState({});
  const [loading, setLoading] = useState(true);

  const handleUser = async () => {
    try {
      const res = await axios.get(`https://mernapp-user.onrender.com/api/users/${id}`);
      if (res.status === 200) {
        setUserDetailedData(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleUser();
  }, [id]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'lightBlue' }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <div style={{ width: '100%', maxWidth: '800px', padding: '20px', height:"500px"}}>
          <Typography variant="h4" gutterBottom align="center" style={{ color: '#333', marginTop:"5px" }}>
            User Information
          </Typography>
          <UserInfoCard user={userDetailedInfo} />
        </div>
      )}
    </div>
  );
};

export default UserInfo;
