import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Team from "../pages/team";
import Contacts from "../pages/contacts";
import Invoices from "../pages/invoices";
import Form from "../pages/form";
import Bar from "../pages/bar";
import Line from "../pages/line";
import Pie from "../pages/pie";
import FAQ from "../pages/faq";
import Calendar from "../pages/calendar";
import Geography from "../pages/geography";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/line" element={<Line />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/geography" element={<Geography />} />
    </Routes>
  );
};

export default AppRoutes;
