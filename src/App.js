import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PlacesToStay from "./Pages/PlacesToStay/Placestostay";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/placestostay" element={<PlacesToStay />} />
              </Routes>
        </BrowserRouter>{" "}
      </div>
  );
}

export default App;