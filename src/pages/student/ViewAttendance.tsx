import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Calendar } from "lucide-react";

// Mock data - replace with actual data from backend
const mockAttendanceData = [
  { subject: "Mathematics", total: 50, present: 45, percentage: 90 },
  { subject: "Physics", total: 48, present: 40, percentage: 83.33 },
  { subject: "Chemistry", total: 45, present: 42, percentage: 93.33 },
];

const mockDetailedRecords = [
  { date: "2024-03-01", subject: "Mathematics", status: "Present" },
  { date: "2024-03-01", subject: "Physics", status: "Present" },
  { date: "2024-03-01", subject: "Chemistry", status: "Absent" },
  { date: "2024-02-29", subject: "Mathematics", status: "Present" },
  { date: "2024-02-29", subject: "Physics", status: "Present" },
];

const ViewAttendance = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Attendance Overview</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockAttendanceData.map((subject) => (
          <Card key={subject.subject}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {subject.subject}
              </CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{subject.percentage}%</div>
              <p className="text-xs text-muted-foreground">
                Present: {subject.present} / Total: {subject.total}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Detailed Attendance Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDetailedRecords.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.subject}</TableCell>
                  <TableCell className={record.status === "Present" ? "text-green-600" : "text-red-600"}>
                    {record.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewAttendance;