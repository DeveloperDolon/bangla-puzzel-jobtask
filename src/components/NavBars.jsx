import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from "../assets/pngwing.com (3).png";
import Button from '@mui/material/Button';
import { LocalMall } from '@mui/icons-material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Drawer from '@mui/material/Drawer';
import { AuthContext } from '../contextApi/AuthProvider';


export default function PrimarySearchAppBar() {
    const { cart, state, toggleDrawer} = React.useContext(AuthContext);

    // const toggleDrawer = (anchor) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }
        
    //     if(event?.target?.parentNode?.offsetParent?.id === "cart-btn" || event?.target?.id === "cart-btn" || event?.target?.parentNode?.parentNode?.offsetParent?.id === "cart-btn") {
    //         setOpen(!open);
    //     } else if(open === false) {
    //         setOpen(true);
    //     }

    //     setState({ ...state, [anchor]: open });
    // };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280 , background: "#fd5442", height:"100%"}}
            role=""
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='bg-white py-4 px-5 flex justify-between'>
                <div className='flex md:gap-4 gap-3 text-[#fd5442]'>
                    <LocalMall></LocalMall>
                    <p className='md:text-base text-sm font-semibold'>{cart?.length} Item</p>
                </div>

                <Button id='close-btn' onClick={toggleDrawer(anchor)} variant='outlined' size='small' sx={{color: "#fd5442", border: "1px solid #fd5442"}}>Close</Button>
            </div>
        </Box>
    );

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const pages = ['Menu', 'Rewards', 'Locations', 'Gift Cards', 'Log In'];
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className='bg-[#f9f5f1]'>
            <Box sx={{ flexGrow: 1, margin: "0px auto" }} maxWidth={"lg"}>
                <AppBar position="static" sx={{ background: "transparent", boxShadow: "none", color: "black" }}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            <img className='md:w-20 w-14 py-3' src={logo} alt="" />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: "20px" }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    // onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', color: "black", }}
                                >
                                    <span className='font-semibold'>
                                        {page}
                                    </span>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: "space-between", alignItems: "center" } }}>
                            <IconButton
                                id='cart-btn'
                                onClick={toggleDrawer("right")}
                                sx={{ marginRight: "15px" }}
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={cart?.length} color="error">
                                    <LocalMall style={{ fontSize: "30px" }} />
                                </Badge>
                            </IconButton>

                            <div>
                                <Drawer
                                    variant="persistent"
                                    sx={{
                                        flexShrink: 0,
                                        '& .MuiDrawer-paper': {
                                            width: "auto",
                                            boxSizing: 'border-box',
                                        },
                                        background: "#fd5442"
                                    }}
                                    anchor={"right"}
                                    open={state["right"]}
                                >
                                    {list("right")}
                                </Drawer>
                            </div>

                            <div>
                                <Button variant="contained" size='medium' sx={{ background: '#fd5442', fontWeight: "600", padding: "10px 40px" }}>Order Now</Button>
                            </div>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
        </div>
    );
}
