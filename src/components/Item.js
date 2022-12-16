import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";

// Modals
import EditModal from "../components/EditModal";
import Confirmation from '../components/Confirmation'

const Item = (props) => {
  const {
    id,
    url,
    name,
    price,
    description,
    deleteFloweritem,
    editItemSubmitForm,
    newEditedForm,
    handleClose
    
  } = props;

  const [open, setOpen] = React.useState(false);

  const [popup, setPopup] = React.useState(false);

  // These all functions are related to Edit Modal

  const handleClickOpen = () => {
    setOpen(true);
  };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  const closeModal = () => {
    setOpen(false);
  };

  const [inputs, setInputs] = React.useState({
    name: name,
    url: url,
    description: description,
    price:price
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const newEditedForm = (e) => {
  //   e.preventDefault();
  //   console.log(id, url, name, description);
  // };
  // console.log(id)

  // const deleteFloweritem =(e)=> deleteFloweritem(e,id)
  //   onClick={(e)=>deleteFloweritem(e,id)}
  // }
  

  const handleOpenpopup = () => setPopup(true);
  const handleClosepopup = () => setPopup(false);

  const handleConfirmation =()=> {
    setPopup(true);
    // alert("heloo")
    handleOpenpopup()
  }

  console.log("popup",popup)

  return (
    <Grid
      container
      display="flex"
      justifyContent=""
      padding={0}
      margin={0}
      marginLeft={7}
      marginRight={5}
    >
      <Grid item>
        <Card sx={{ maxWidth: 280  }} style={{ margin: "30px" }}>
          <CardMedia
            component="img"
            height="140"
            width="140"
            image={url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2"  style={{fontSize:"1.1rem"}} color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" style={{fontSize:"1rem"}} color="text.secondary">
              ${price}
            </Typography>
          </CardContent>
          <CardActions
            // id={id}
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <IconButton
              id={id}
              aria-label="delete"
              color="dark"
              // onClick={(e)=>deleteFloweritem(e,id)}
              onClick={handleConfirmation}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="edit"
              onClick={handleClickOpen}
              color="dark"
              editItemSubmitForm={editItemSubmitForm}
            >
              <EditIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>

      {/* This is the imported edit modal */}
      {/* Inside this edit modal have to pass all props values methioned in Edit Modal */}
      <EditModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        closeModal={closeModal}
        editItemSubmitForm={editItemSubmitForm}
        handleChange={handleChange}
        inputs={inputs}
        newEditedForm={newEditedForm}
        id={id}
        url={url}
        name={name}
        description={description}
        price={price}
      />
     <Confirmation
      popup={popup}
      handleOpenpopup={handleOpenpopup}
      handleClosepopup={handleClosepopup}
      deleteFloweritem={(e)=>deleteFloweritem(e,id)}
     />
    </Grid>
  );
};
export default Item;
