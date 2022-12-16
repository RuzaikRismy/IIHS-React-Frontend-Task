import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// export default function TransitionsModal() {
const Confirmation = (props) => {
  const { popup, handleOpenpopup, handleClosepopup,id,deleteFloweritem} = props;

  // const [popup, setPopup] = React.useState(false);
  // const handleOpenpopup = () => setPopup(true);
  // const handleClosepopup = () => setPopup(false);

  return (
    <div>
      {/* <Button onClick={handleOpenpopup}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={popup}
        onClose={handleClosepopup}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={popup} id={id}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              want to delete this item ?
            </Typography>
            <Grid container flex={"space-evenly"} spacing={2}>
              <Grid item>
                <Button onClick={deleteFloweritem}>Delete</Button>
              </Grid>
              <Grid item>
                <Button onClick={handleClosepopup}>Close</Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Confirmation;
