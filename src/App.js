import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import SurveyScreen from "./screens/SurveyScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster reverseOrder={true} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="survey" element={<SurveyScreen />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
