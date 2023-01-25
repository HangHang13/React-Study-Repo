import React from "react";
import FoodItem from "./FoodItem";

export const FoodList = () => {
  return (
    <ul>
      <FoodItem foodName="짜장면" price={6000}></FoodItem>
      <FoodItem foodName="짬뽕" price={6000}></FoodItem>
      <FoodItem foodName="볶음밥" price={5000}></FoodItem>
      <FoodItem foodName="울면" price={8000}></FoodItem>
    </ul>
  );
};
export default FoodList;
