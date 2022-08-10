import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./AdminHomePage";
import ApplicationFormPage from "./ApplicationFormPage";
import CreateTripPage from "./CreateTripPage";
import ListTrips from "./ListTrips";
import LoginPage from "./LoginPage";
import TripDetails from "./TripDetails";
import HomePage from "./HomePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="/trips/list" element={<ListTrips />} />

        <Route path="/trips/application" element={<ApplicationFormPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/trips/list" element={<AdminHomePage />} />

        <Route path="/admin/trips/create" element={<CreateTripPage />} />

        <Route path="/admin/trips/:id" element={<TripDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
