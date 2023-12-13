// Navigation.jsx
import React from 'react';
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleClose();
    // Add your logout logic here
  };
  const navigate = useNavigate();

  if (!navigationMenu || !Array.isArray(navigationMenu)) {
    console.error("navigationMenu is not defined or not an array");
    return null;
  }

  return (
    <div className='h-screen sticky top-0'>
      <div>
        <div className='space-y-6'>
          {navigationMenu.map((item) => (
            <div
              key={item.title} // Add a key to each mapped item
              className='cursor-pointer flex space-x-3 items center'
              onClick={() =>
                item.title === 'Profile'
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className='text-xl'>{item.title}</p>
            </div>
          ))}
        </div>
        <div className='py-10'>
          <Button
            sx={{
              width: '30%',
              borderRadius: '29px',
              py: '15px',
              bgcolor: '#1d9bf0',
            }}
            variant='contained'
            size='large'
          >
            Tweet
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <Avatar
            alt='Remy Sharp'
            src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'
          />
          <div>
            <p>Code with Ayush</p>
            <p className='opacity-70'>And Arun</p>
          </div>
        </div>
        <Button
          id='demo-positioned-button'
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </Button>
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navigation;

