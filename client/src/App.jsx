import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TakeawayForm from "./screen/TakeawayForm";
import OrderForm from "./screen/OrderForm";
import Home from "./screen/Home";
import FoodMenu from "./screen/FoodMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<FoodMenu />}></Route>
        <Route path="/takeaway_form" element={<TakeawayForm />}></Route>
        <Route path="/order_form" element={<OrderForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
