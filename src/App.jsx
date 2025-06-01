import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createContext } from "react";
export const AppContext = createContext();
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  return (
    <div>
      <AppContext.Provider value={{ users, setUsers, user, setUser }}>
        <BrowserRouter>
          <header>
            <h1>My Online Shop</h1>
            <Link to="/">Home</Link>-<Link to="/cart">Cart</Link>-
            {user.token ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <hr />
          </header>

          <main>
            <Routes>
              <Route index element={<Product />} />
              <Route path="/" element={<Product />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/login" element={<Login />}></Route>
               <Route path="/logout" element={<Logout />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </main>

          <footer>
            <hr />
            &copy; 2005. All rights Reserved.
          </footer>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;
