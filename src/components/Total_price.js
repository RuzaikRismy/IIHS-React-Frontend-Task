import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const TotalPrice = (props) => {
  
 const {
  Total
 } = props

  return (
    <Grid container display="flex" justifyContent="flex-end">
      <Box sx={{ flexGrow: 1 }} style={{ margin: "10px" }}>
        <AppBar position="static">
          <Grid item >
            <Toolbar>
              <Typography
                variant="h4"
                component="div"
                sx={{ flexGrow: 2 }}
                color="dark"
              >
                FLOWER MART
              </Typography>
              <Grid item display="flex" spacing="2px" justifyContent="flex-end">
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ flexGrow: 2}}
                  color="dark"
                >
                  Total Price - 
                </Typography>
                <Box>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    color="dark"
                    margin={"8px"}
                  >
                    ${Total}
                  </Typography>
                </Box>
              </Grid>
            </Toolbar>
          </Grid>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default TotalPrice;
