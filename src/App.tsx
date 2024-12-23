import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import ManageAttendance from "@/pages/faculty/ManageAttendance";
import AttendanceRecords from "@/pages/faculty/AttendanceRecords";
import DownloadReports from "@/pages/faculty/DownloadReports";

function App() {
  return (
    <Router>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faculty/attendance" element={<ManageAttendance />} />
          <Route path="/faculty/records" element={<AttendanceRecords />} />
          <Route path="/faculty/reports" element={<DownloadReports />} />
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </Router>
  );
}

export default App;