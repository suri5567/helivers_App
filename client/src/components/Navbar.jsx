

// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { infoSearchTerm } from '../reduxStore/slices/serachTermSlice'
// import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux';
// import image1 from '../assets/InShot_20231110_124232331.png';
// import image2 from '../assets/InShot_20231110_123715755 (1).png';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)((({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// })));

// const NavbarContainer = styled(Box)(({ theme }) => ({
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
// }));

// export default function Navbar() {
//   const cartcounter = useSelector((state) => state.cartInfo.counter)
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = React.useState('');
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//     setMobileMenuOpen(false);
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   }

//   React.useEffect(() => {
//     dispatch(infoSearchTerm(searchTerm));
//   }, [searchTerm]);

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//     setMobileMenuOpen(true);
//   };

//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id="primary-search-account-menu"
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id="primary-search-account-menu-mobile"
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="open shopping cart"
//           color="inherit"
//           onClick={() => navigate('/cart')}
//         >
//           <Badge badgeContent={cartcounter} color="error" >
//             <ShoppingCartIcon />
//           </Badge>
//         </IconButton>
//         <p>Cart</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of the current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <NavbarContainer style={{zIndex:5}}>
//       <AppBar position="fixed" sx={{ background: 'black' }}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleMobileMenuOpen}
//             sx={{ mr: 2, display: { sm: 'block', xs: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//             <img src={image1} width="40px" onClick={() => navigate('/')} style={{ cursor: "pointer" }} />
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//               onChange={handleSearch} />
//           </Search>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} />
//           <IconButton
//             size="large"
//             aria-label="open shopping cart"
//             color="inherit"
//             onClick={() => navigate('/cart')}
//           >
//             <Badge badgeContent={cartcounter || "0"} color="error">
//               {/* <ShoppingCartIcon /> */}
// 			  <img src={image2} width="25px" style={{ cursor: "pointer" }} />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </NavbarContainer>
//   );
// }


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
