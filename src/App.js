import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './component/NavBar';
import Addproduct from './component/Addproduct';
import UpdateProduct from './component/UpdateProduct';
import Profile from './component/Profile';
import Footer from './component/Footer';
import Signup from './component/Signup';
import PrivetComponenet from './component/PrivateComponenet';
import Login from './component/Login';
import ProductList from './component/ProductList';

function App() {
  return (
    <div className="App">
      {/* <h1>Full Stack Developer</h1> */}
      <NavBar />
      <Routes>

        <Route element={<PrivetComponenet />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<Addproduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/logout" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;