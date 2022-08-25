import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import ListTrips from "../pages/ListTrips";
import LoginPage from "../pages/LoginPage";
import TripDetails from "../pages/TripDetails";
import HomePage from "../pages/HomePage";

function Router() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="/trips/list" element={<ListTrips />} />

        <Route path="/trips/application/" element={<ApplicationFormPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/trips/list" element={<AdminHomePage />} />

        <Route path="/admin/trips/create" element={<CreateTripPage />} />

        <Route path="/admin/trips/:id" element={<TripDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
