import "./App.css";

// import ItemMain from "./components/item/itemMain";
import TodoTemplate from "./todo/TodoTemplate";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Join from "./components/user/Join";
import 'bootstrap/dist/css/bootstrap.min.css';
import Snowfall from 'react-snowfall'





function App() {
  return (
    <>
      {/* <Hello></Hello> */}
      {/* <ItemMain></ItemMain> */}
      {/* <Snowfall
  // Changes the snowflake color
  color="blue"
  // Applied to the canvas element
  style={{ background: '#fff', position: 'fixed',
  width: '100vw',
  height: '100vh' }}
  // Controls the number of snowflakes that are created (default 150)
  snowflakeCount={250}
  wind={[-0.5, 2.0]}
  speed={[1.0, 3.0]
  }
/> */}
      <Header/>
      
      <Join/>
      {/* <TodoTemplate/> */}
      <Footer/>
    </>
  );
}

export default App;
