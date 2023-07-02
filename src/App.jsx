import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./compo/Navbar";

import Home from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { useEffect, useState } from "react";
import { auth } from "./compo/firebase";
import { Priveteroutes } from "./compo/Priveteroutes";
import { Priveteroutes2 } from "./compo/Priveteroutes2";
import { Profile } from "./pages/Profile";
import DeveloperIntro from "./pages/DeveloperIntro";

function App() {
  return (
    <>
    <Navbar />
    <div>
      
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />

        <Route path="/userLog" Component={Priveteroutes2}>
          <Route path="login" Component={Login} />
          <Route path="Signup" Component={Signup} />
        </Route>

        <Route path="/contact" Component={Contact} />

        <Route path="/user" Component={Priveteroutes}>
          
          <Route path="blog" Component={Blog} />
          <Route path="profile" Component={Profile} />
          <Route path="devinfo" Component={DeveloperIntro}/>
        </Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
