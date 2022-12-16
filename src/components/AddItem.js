import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid, Input, inputAdornmentClasses } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  // handle form validation
  const[errors,setErrors] = React.useState('Required');

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const AddItem = (props) => {
  const {
    open,
    handleClose,
    handleSubmit,
    handleChange,
    handleClickOpen,
    inputs,
  } = props;

  // const [open, setOpen] = React.useState(false);

  // const [inputs,setInputs] = React.useState({
  //   name:"",
  //   url:"",
  //   description:""
  // });

  // const handleChange =(e)=> {
  //   setInputs((prev)=>({
  //     ...prev,
  //     [e.target.name] : e.target.value
  //   }))

  // }

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };


  // const handleSubmit=()=> {
  //   console.log('Heloo1')
  // }

  return (
    <Grid
      container
      display="flex"
      marginTop={1}
      padding={2}
      justifyContent="flex-end"
    >
      <Grid item>
        <Button variant="outlined" onClick={handleClickOpen} color="primary">
          Add Item
        </Button>
      </Grid>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add a new item
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit}>
          <Box
            // component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
            // onSubmit={formSubmit}
          >
            <Grid
              container
              display="flex"
              padding={2}
              justifyContent="space-evenly"
            >
              <Grid item>
                <TextField
                  // required
                  label="Image Path"
                  name="imagePath"
                  id="outlined-size-small1"
                  // defaultValue="Image Path"
                  size="small"
                  type={"string"}
                  onChange={handleChange}
                  value={inputs.imagePath}
                  required
                />
                <TextField
                  // required
                  label="Name"
                  name="name"
                  id="outlined-size-small2"
                  // defaultValue="Name"
                  size="small"
                  type="string"
                  onChange={handleChange}
                  value={inputs.name}
                  required
                />
                <TextField
                  // required
                  name="description"
                  id="filled-multiline-static3"
                  label="Description"
                  multiline
                  rows={4}
                  variant="outlined"
                  type="string"
                  onChange={handleChange}
                  value={inputs.description}
                  required
                />
                 <TextField
                  // required
                  name="price"
                  id="outlined-size-small2"
                  label="price"
                  multiline
                  variant="outlined"
                  type="number"
                  onChange={handleChange}
                  value={inputs.price}
                  required
                />
              </Grid>

              <Grid item>
                <Button variant="contained" color="info" type="submit">
                  Add
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </BootstrapDialog>
    </Grid>
  );
};

export default AddItem;
