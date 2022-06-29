import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./screens/Login";
import SurveyScreen from "./screens/SurveyScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="survey" element={<SurveyScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
