import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import AdminHomePage from "../components/AdminHomePage";
import ApplicationFormPage from "../components/ApplicationFormPage";
import CreateTripPage from "../components/CreateTripPage";
import ListTrips from "../components/ListTrips";
import LoginPage from "../components/LoginPage";
import TripDetails from "../components/TripDetails";
import HomePage from "../components/HomePage";

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
