import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Download } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Temporary mock data - replace with actual data fetching
const mockAttendanceData = [
  { name: "CSE-A", attendance: 85 },
  { name: "CSE-B", attendance: 78 },
  { name: "IT-A", attendance: 92 },
];

const ViewReports = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    branch: "",
    year: "",
    class: "",
    subject: "",
    faculty: "",
  });

  const handleExportPDF = () => {
    // Export PDF logic here
    console.log("Exporting PDF...");
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Attendance Reports</h1>
        </div>
        <Button onClick={handleExportPDF}>
          <Download className="mr-2 h-4 w-4" />
          Export PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="space-y-2">
          <Label>Branch</Label>
          <Select
            value={filters.branch}
            onValueChange={(value) => setFilters({ ...filters, branch: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="it">Information Technology</SelectItem>
              <SelectItem value="ec">Electronics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Year</Label>
          <Select
            value={filters.year}
            onValueChange={(value) => setFilters({ ...filters, year: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Class</Label>
          <Select
            value={filters.class}
            onValueChange={(value) => setFilters({ ...filters, class: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cse-a">CSE-A</SelectItem>
              <SelectItem value="cse-b">CSE-B</SelectItem>
              <SelectItem value="it-a">IT-A</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Subject</Label>
          <Select
            value={filters.subject}
            onValueChange={(value) => setFilters({ ...filters, subject: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ds">Data Structures</SelectItem>
              <SelectItem value="os">Operating Systems</SelectItem>
              <SelectItem value="db">Database Systems</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Faculty</Label>
          <Select
            value={filters.faculty}
            onValueChange={(value) => setFilters({ ...filters, faculty: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Faculty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="john">John Doe</SelectItem>
              <SelectItem value="jane">Jane Smith</SelectItem>
              <SelectItem value="bob">Bob Johnson</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-card rounded-lg p-4 h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockAttendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="attendance" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ViewReports;