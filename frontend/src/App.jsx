import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, json } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import { Inspection } from "./components/Inspection";
import { BackendCall } from "./components/BackendCall";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  const [onChange,onSubmit] = useState()
  
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inspection" element={<Inspection />} />
        <Route path="/testing" element={<BackendCall />} />
      </Routes>
    </Router>
    </ChakraProvider>
  );
};

export default App;
