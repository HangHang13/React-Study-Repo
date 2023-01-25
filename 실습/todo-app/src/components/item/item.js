import React from 'react'

//props는 부모컴포넌트가 속성값으로 전달한 데이터 객체
const item = (props) => {
    console.log(props);
    const {foodName, prcie:p, quantity:q} = props.foodInfo;
    
  return (
    <li>음식명 : {foodName} 가격 : {p} 수량 : {q}</li>
  )
}

export default item