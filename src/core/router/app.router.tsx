import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {  ListCatsScene, ListDogsScene } from "@/scenes";
import { SwitchRoutes } from "./routes";

export const AppRouter = () => {
  return (
      <Router>
        <Routes>
          <Route path={SwitchRoutes.cats} element={< ListCatsScene />} />
          <Route path={SwitchRoutes.dogs} element={<ListDogsScene />} />
        </Routes>
      </Router>
  );
};
