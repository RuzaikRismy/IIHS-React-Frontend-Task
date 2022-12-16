import TotalPrice from "../components/Total_price";
// import Item from "../components/Item";
import AddItem from "../components/AddItem";
import * as React from "react";
import ItemsPage from "./ItemsPage";
import uuid from "react-uuid";
import { Grid } from '@mui/material';


const HomePage = () => {
  // below all details are come from AddItem.js page
  // because, AddItem.js is a children of HomePage.js

  const [open, setOpen] = React.useState(false);

  const [flowerItems, setFlowerItems] = React.useState([
    {
      id: uuid(),
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3EXIprqMbKhTorq3fbaUo_AWeAOtlTBB9w&usqp=CAU",
      name: "flower 1",
      description: "Item 1",
      price: 100
    },
    {
      id: uuid(),
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfImAiO1CjUImbkOr-tUP-F63Vsd22BjRyg&usqp=CAU",
      name: "flower 2",
      description: "Item 2",
      price:120
    },
    {
      id: uuid(),
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYKHOOiu1h_lTqbvnP9LRrdFjr2i3KRU0kJf7zhmWuxHwc187djOpzbmLic3judAXs8oM&usqp=CAU",
      name: "flower 3",
      description: "Item 3",
      price:80
    },
    {
      id: uuid(),
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczwd5zaO_WzcwIOXJy_EBSX3Fr36Dtc11yIK2QROdk-Dj_9dU67xjD11ZLqCCwBv9Z08&usqp=CAU",
      name: "flower 4",
      description: "Item 4",
      price:130
    },
  ]);

  
  const [inputs, setInputs] = React.useState({
    imagePath: "",
    name: "",
    description: "",
    price:''
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      //this prev will get that previous state of the input field
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // console.log(inputs)
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs); //////// Here onwards this is not working
      let newFlowerItems  = {
        id: uuid(),
        url: inputs.imagePath,
        name: inputs.name,
        description: inputs.description,
        price:parseInt(inputs.price)
      }
        setFlowerItems([...flowerItems,newFlowerItems])
        console.log(newFlowerItems);

        setInputs({
          imagePath:"",
          name:"",
          description:"",
          price:""
        })

        handleClose();
        
     
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const editItemSubmitForm =(e)=> {
  //   e.preventDefault();
  //   console.log("Updated");
  //   console.log(inputs.id,inputs.name,inputs.imagePath,inputs.description)
  // }



// to calculate sum of all product prices
  const Total = flowerItems.reduce((total,item)=>{   
    return parseInt(total+= item.price);
  },0);  // here initial value is 0

  console.log(Total);

  return (
    <Grid container>
      <TotalPrice
      Total ={Total}
     
      />
      <AddItem
        open={open}
        inputs={inputs}
        handleChange={handleChange}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
      
      <ItemsPage 
       flowerItems = {flowerItems} 
      // deleteFloweritem={deleteFloweritem}
      setFlowerItems={setFlowerItems}
      
       />
    </Grid>
  );
};
export default HomePage;
