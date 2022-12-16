import { Grid } from '@mui/material';
import React, { Component, useState } from "react";
import Item from "../components/Item";


const ItemsPage = (props) => {
  const [open, setOpen] = React.useState(false);
  const [popup, setPopup] = React.useState(false);

  const {
    flowerItems,
    setFlowerItems,
    // editItemSubmitForm,
    // deleteFloweritem
  } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const editItemSubmitForm = (id, newFlowerItem) => {
    setFlowerItems(
      flowerItems.map((item) => (item.id === id ? newFlowerItem : item))
    );
  };

  const newEditedForm = (e, ItemData, inputs) => {
    e.preventDefault();
    const { id, name, url, description, price } = ItemData;

    console.log(inputs);
    console.log(id, url, name, description);

    let newFlowerItem = {
      id,
      name: inputs.name,
      url: inputs.url,
      description: inputs.description,
      price: parseInt(inputs.price),
    };
    editItemSubmitForm(id, newFlowerItem);
    handleClose();
  };

  const handlePopup =()=> {
    setPopup(true);
  }

  // to delete an item
  const deleteFloweritem = (e, id) => {
    handlePopup();
    console.log(id, "id");
    // console.log("deleted")
    setFlowerItems(flowerItems.filter((flowerItem) => flowerItem.id !== id));
  };

  // let totalPrice = 0;

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Grid container>
      {flowerItems.map((item) => {
        // console.log(item);

        // totalPrice +=item.price;
        // console.log(totalPrice)
        return (
          // here this return is mandatory
          <Grid item md={4} lg={3} xs={12}>
          <Item
            key={item.id}
            id={item.id}
            url={item.url}
            name={item.name}
            description={item.description}
            price={item.price}
            editItemSubmitForm={editItemSubmitForm}
            deleteFloweritem={deleteFloweritem}
            newEditedForm={newEditedForm}
          />
          </Grid>
        );
      })}
      </Grid>
    </div>
  );
};

export default ItemsPage;
