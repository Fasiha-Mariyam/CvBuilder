/* eslint-disable no-unused-vars */
import React from "react";

import { Route, Routes } from "react-router-dom";
import UnProtectedRoutes from "./UnProtectedRoutes";
import HomeScreen from "../pages/MainFlow/Home/HomeScreen";
import CreateResumeScreen from "../pages/MainFlow/CreateResume/CreateResumeScreen";


const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<UnProtectedRoutes Component={HomeScreen} />} />
      <Route path="/CreateResume" element={<UnProtectedRoutes Component={CreateResumeScreen} />} />
    </Routes>
  );
};

export default RoutesIndex;
