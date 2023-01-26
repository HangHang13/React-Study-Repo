import "./App.css";

// import ItemMain from "./components/item/itemMain";
import TodoTemplate from "./todo/TodoTemplate";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      {/* <Hello></Hello> */}
      {/* <ItemMain></ItemMain> */}
      <Header/>
      <TodoTemplate/>
      <Footer/>
    </>
  );
}

export default App;
