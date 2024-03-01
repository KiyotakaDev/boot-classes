import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";

// Pages
import HomePage from "../Pages/HomePage";
const DevsPage = React.lazy(() => import("../Pages/DevsPage"));
const ProjectsPage = React.lazy(() => import("../Pages/ProjectsPage"));
const AboutPage = React.lazy(() => import("../Pages/About"));

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={null}>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/developers" element={<DevsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
