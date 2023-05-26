import { Route, Routes } from "react-router-dom";
import Navbar from "./compo/Navbar";

import Home from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";

function App() {
  return (
    <div>
      
      <Navbar />
       <Routes>
         <Route path="/" Component={Home}/>
         <Route path="/about" Component={About}/>
         <Route path="/blog" Component={Blog}/>
         <Route path="/contact" Component={Contact}/>
         <Route path="/login" Component={Login}/>
       </Routes>
     
    </div>
  );
}

export default App;
