import "./App.css";
import { Provider } from "react-redux";
import store from './store/store';
import Home from "./components/Home";
import AddUser from "./components/Adduser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edituser from "./components/Edituser";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addUser" element={<AddUser/>} />
          <Route exact path="/editUser/:id" element={<Edituser/>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
