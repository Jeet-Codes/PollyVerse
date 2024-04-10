import styles from "./style";
import {  Navbar, Hero } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Adminpages/Layout";
import Avtar from "./components/Adminpages/Avtar";
import Home from "./components/Adminpages/Home";
import Message from "./components/Adminpages/Message";
import Drag from "./components/Adminpages/Drag";
import Setting from "./components/Adminpages/Setting";
import Saved from "./components/Adminpages/Saved";
import Manger from "./components/Adminpages/Manger";
const App = () => (
  
  <BrowserRouter>
  
  <div className="bg-primary w-full overflow-hidden">
   

    <Routes>
      <Route element={<Login/>} path={'/login'}/>
      
      <Route element={<Hero/>} path={'/'}/>
      <Route element={<Layout/>} path={'/dashboard'}/>
      {/* adminpage */}
      <Route element={<Avtar/>} path={'/profile'}/>
      <Route element={<Home/>} path={'/home'}/>
      <Route element={<Message/>} path={'/message'}/>
      <Route element={<Drag/>} path={'/drag'}/>
      <Route element={<Setting/>} path={'/setting'}/>
      <Route element={<Saved/>} path={'/save'}/>
     
    </Routes>

  
    
  
  </div>
  </BrowserRouter>
);

export default App;
