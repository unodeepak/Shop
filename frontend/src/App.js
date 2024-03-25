import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import ShowItem from "./components/items/showItems";
// import AddItem from "./items/addItem";
import AddItem from "./components/items/addItem";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import UpdateItem from "./components/items/updateItem";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/updateItem" element={<UpdateItem />} />
        <Route path="/" element={<ShowItem />} />
      </Routes>
    </Router>
  );
}

export default App;
