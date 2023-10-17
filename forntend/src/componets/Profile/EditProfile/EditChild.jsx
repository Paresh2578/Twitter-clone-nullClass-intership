import * as React from 'react';



//mui
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {TextField } from '@mui/material';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));



function EditChild({ dob, setDob }) {
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='birthdate-section' onClick={handleOpen}>
        <text>Edit</text>
      </div>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300, height: 300 }}>
          <div className='text'>
            <h2>Edit date of birth?</h2>
            <p>This can only be changed a few times.<br />
              Make sure you enter the age of the <br />
              person using the account. </p>
            {/* <Button className='e-button'>Edit</Button> */}
            <input
              type="date"
              onChange={e => setDob(e.target.value)}
            />
            <Button className='e-button' onClick={() => { setOpen(false); }}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}


