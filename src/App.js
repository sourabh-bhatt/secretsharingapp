import { Routes, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Login from "./Components/Login";

function App() {
  return <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/*" element={<Error/>}/>
    </Routes>
  </>;
}

export default App;
