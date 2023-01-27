import "./App.css";
import { Route, Routes, Router, Outlet, Navigate } from "react-router-dom";
// import ItemMain from "./components/item/itemMain";
import TodoTemplate from "./todo/TodoTemplate";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Join from "./components/user/Join";
import 'bootstrap/dist/css/bootstrap.min.css';
import Snowfall from 'react-snowfall'
import Login from "./components/user/Login";
import AppRouter from "./router/AppRouter";



function App() {
  return (
    <>
      {/* <Hello></Hello> */}
      {/* <ItemMain></ItemMain> */}
      {/* <Snowfall
  // Changes the snowflake color
  color="blue"
  // Applied to the canvas element
  style={{ background: '#fff', 
  ZIndex: -10 }}
  // Controls the number of snowflakes that are created (default 150)
  snowflakeCount={250}
  wind={[-0.5, 2.0]}
  speed={[1.0, 3.0]
  }
/> */}
      <Header/>
  
      {/* <Join/> */}
      {/* <TodoTemplate/> */}
      <Footer/>
    </>
  );
}

export default App;
