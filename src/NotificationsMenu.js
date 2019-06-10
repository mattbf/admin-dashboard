import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function NotificationsMenu(props) {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  //
  // function handleClick(event) {
  //   setAnchorEl(event.currentTarget);
  // }
  //
  // function handleClose() {
  //   setAnchorEl(null);
  // }

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
        <MenuItem onClick={props.handleClose}>Profile</MenuItem>
        <MenuItem onClick={props.handleClose}>My account</MenuItem>
        <MenuItem onClick={props.handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default NotificationsMenu
