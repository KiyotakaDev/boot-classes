import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CubePage } from "../pages/CubePage";
import HomePage from "../pages/HomePage";
import TablePage from "../pages/TablePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/cube" element={<CubePage />} />
        <Route path="/table" element={<TablePage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
