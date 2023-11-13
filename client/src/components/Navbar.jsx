

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import { infoSearchTerm } from '../reduxStore/slices/serachTermSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import image1 from '../assets/InShot_20231110_124232331.png';
import image2 from '../assets/InShot_20231110_123715755 (1).png';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: '50%', 
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')({
  padding: '0 10px',
});

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const NavbarContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%', 
  boxSizing: 'border-box', 
});

export default function Navbar() {
  const cartcounter = useSelector((state) => state.cartInfo.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    dispatch(infoSearchTerm(searchTerm));
  }, [searchTerm]);

  return (
    <NavbarContainer style={{zIndex:5}}>
      <AppBar position="fixed" sx={{ background: 'black' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton onClick={() => navigate('/')} style={{ marginRight: "10px" }}>
            <img src={image1} width="30px" style={{ cursor: "pointer" }} />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
            />
          </Search>
          <IconButton
            size="large"
            aria-label="open shopping cart"
            color="inherit"
            onClick={() => navigate('/cart')}
          >
            <Badge badgeContent={cartcounter || "0"} color="error">
              <img src={image2} width="25px" style={{ cursor: "pointer" }} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </NavbarContainer>
  );
}
