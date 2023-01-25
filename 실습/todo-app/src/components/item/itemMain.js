import React from "react";
import Item from "./item";
const ItemMain = () => {
  const foodArray = [
    {
      foodName: "짜장면",
      prcie: 6000,
      quantity: 3,
    },
    {
      foodName: "탕수육",
      prcie: 16000,
      quantity: 1,
    },
    {
      foodName: "울면",
      prcie: 8000,
      quantity: 2,
    },
  ];
  //음식 수만큼 li태그 생성하기

  //   const tagArray = [];
  //   const makeLi = () => {
  //     for (let food of foodArray){
  //         const {foodName, prcie, quantity} = food;
  //         tagArray.push(<li>음식명 : {foodName} 가격 : {prcie} 수량 : {quantity}</li>)
  //     }
  //     return tagArray;
  //   }
  const tagArray = foodArray.map((food) => {
    // const {foodName, prcie, quantity} = food;
    return <Item  key={food.foodName} foodInfo={food} abc="메롱"></Item>;
  });
  return <ul>{tagArray}</ul>;
};
export default ItemMain;
