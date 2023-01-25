import React, { useState, useEffect } from "react";
function Hello() {
  //일반 변수는 상태값 관리가 안됨 =? 데이터 유지가 안됨.
  // 배열을 return

  //앞에꺼는 변수, 뒤에꺼는 함수
  const [nickName, setNickName] = useState("익명");

  //상태변수 값을 변경할 때는 직접 대입하면 안되고 상태변경함수를 이용하야 함
  // nickName = ''; X
  // setNickName('')
  console.log("1. nickName(component) : " + nickName);

  //화면이 처음 렌더링될 때, 상태값이 변경될 때 호출
  //2번쨰 파라미터에 의존성 배열을 널 수 있음
  //빈배열 설정시 초기렌더링시에 단 1회만 호출 (안하면 변경될 때마다 호출)
  //의존성 배열에 상태값을 넣으면 해당 값이 업데이트 될 때 다시 호출
  useEffect(() => {
    console.log("2. useEffect call!!!");
    console.log("3. nickName(useEffect): " + nickName);

    //정리함수
    //화면이 리렌더링되기 직전에 호출
    return () => {
      console.log("4. cleanup call!");
      console.log("5. nickName(cleanup): " + nickName);
    };
  }, [nickName]);
  const foo = () => {
    console.log("foo!");
  };

  //여기에 쓴 코드는 태그가 랜더링 되기 전에 실행됨.
  // const $btn = document.querySelector('.btn');
  // $btn.onclick = e =>{
  //     alert("박사님아")
  // }
  const sayHello = (e) => {
    // alert("박사님 안녕");
    setNickName("박사");
    // console.log('sayHello!');
  };

  //컴포넌트 내 실행코드 (1순위) - 화면이 그려지기도 전에 실행
  //렌더링시에 실행되는 코드 (2순위)
  //useEffect에 있는 콜백 (3순위)
  return (
    <>
      {foo()}
      <div>hello {nickName}</div>
      <button className="btn" onClick={sayHello}>
        척척박사
      </button>
      <button
        className="btn"
        onClick={() => {
          //   alert("석사님 안녕");
          setNickName("석사");
        }}
      >
        척척석사
      </button>
    </>
  );
}

export default Hello;
