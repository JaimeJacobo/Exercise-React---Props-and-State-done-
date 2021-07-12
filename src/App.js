import React, {useState} from "react";
import "./App.css";
import MenuList from "./components/MenuList";
import data from "./data";


const App = () => {

  const [foodItems, setFoodItems] = useState(data)

  const handleClickFavorite = (index)=>{
    const foodItemsCopy = [...foodItems]
    foodItemsCopy[index].isFavorite = !foodItemsCopy[index].isFavorite
    setFoodItems(foodItemsCopy)
  }

  return (
    <div>
      <h1>Wild Restaurant Menu</h1>
      <MenuList 
        foodItems={foodItems} 
        handleClickFavorite={handleClickFavorite}
      />
    </div>
  );
};

export default App;
