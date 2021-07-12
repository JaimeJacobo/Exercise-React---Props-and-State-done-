import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ foodItems, handleClickFavorite }) {
  return (
    <div>
      {foodItems.map((food, index)=> (
        <MenuItem 
          description={food.description}
          foodImage={food.foodImage}
          isFavorite={food.isFavorite}
          itemName={food.itemName}
          price={food.price}
          
          handleClickFavorite={handleClickFavorite}
          index={index}
        />
      ))}
    </div>
  );
}

export default MenuList;
