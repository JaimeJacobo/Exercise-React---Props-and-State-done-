import React, {useState} from "react";

function MenuItem(props) {

  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={props.foodImage} alt={props.itemName} />
        </div>
        <div className="itemDescription">
          <h3>{props.itemName}</h3>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="rightContainer">
        <div>{props.price} EUR</div>

        <div 
          className={props.isFavorite ? "isFavorite" : "notFavorite"} 
          onClick={()=>props.handleClickFavorite(props.index)} 
          id="favorite"
        >
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
