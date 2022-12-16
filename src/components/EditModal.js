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
import { Grid } from "@mui/material";
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

const EditModal = (props) => {
  const {
    open,
    handleClose,
    closeModal,
    id,
    url,
    name,
    description,
    price,
    handleChange,
    inputs,
    newEditedForm,
    handleClickOpen,
  } = props;

  const handOnSubmit = (e) => {
    e.preventDefault();
    let ItemData = {
      id,
      name,
      url,
      description,
    };
    console.log(ItemData);
    newEditedForm && newEditedForm(e, ItemData, inputs);
    closeModal && closeModal();
  };


  return (
    <Grid display="flex" marginTop={1} padding={2} justifyContent="flex-end">
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Edit Item
        </BootstrapDialogTitle>
        <form onSubmit={handOnSubmit}>
          <Box
            // component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Grid
              container
              display="flex"
              padding={2}
              justifyContent="space-evenly"
            >
              <Grid item>
                <TextField
                  required
                  label="Image Path"
                  name="imagePath"
                  id="outlined-size-small1"
                  // defaultValue="Small"
                  size="small"
                  placeholder="Image Path"
                  type={"string"}
                  value={inputs.url}
                  onChange={handleChange}
                />
                <TextField
                  required
                  label="Name"
                  name="name"
                  id="outlined-size-small2"
                  // defaultValue="Small"
                  size="small"
                  placeholder="Name"
                  type="string"
                  value={inputs.name}
                  onChange={handleChange}
                />
                <TextField
                  required
                  id="filled-multiline-static3"
                  name="description"
                  label="Description"
                  multiline
                  rows={4}
                  // defaultValue="Default Value"
                  //   variant="filled"
                  placeholder="Description"
                  type={"string"}
                  value={inputs.description}
                  onChange={handleChange}
                />
                <TextField
                  required
                  label="Price"
                  name="price"
                  id="outlined-size-small2"
                  // defaultValue="Small"
                  size="small"
                  placeholder="Price"
                  type={"string"}
                  value= {inputs.price}
                  onChange={handleChange}
                />
              </Grid>
              <Grid container  style={{display:"flex",justifyContent: "space-around"}}>
              <Grid item>
                <Button type="submit" variant="contained" color="info">
                  Edit
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={closeModal} variant="contained" color="info">
                  Close
                </Button>
              </Grid>
              </Grid>
            </Grid>
          </Box>
        </form>
      </BootstrapDialog>
    </Grid>
  );
};

export default EditModal;
