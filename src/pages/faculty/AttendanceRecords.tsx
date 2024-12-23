import React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

// Mock data - replace with actual data from backend
const mockAttendanceRecords = [
  {
    id: "1",
    date: "2024-02-20",
    class: "CSE-A",
    subject: "Data Structures",
    students: [
      { id: "1", name: "John Doe", rollNo: "CSE001", present: true },
      { id: "2", name: "Jane Smith", rollNo: "CSE002", present: false },
    ],
  },
];

const AttendanceRecords = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  const [selectedClass, setSelectedClass] = React.useState<string>();
  const [selectedSubject, setSelectedSubject] = React.useState<string>();

  const handleEdit = (recordId: string) => {
    toast({
      title: "Success",
      description: "Attendance record updated successfully.",
    });
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-2xl font-bold">Attendance Records</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-4">
          <h3 className="font-medium mb-2">Select Class</h3>
          <Select onValueChange={setSelectedClass}>
            <SelectTrigger>
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CSE-A">CSE-A</SelectItem>
              <SelectItem value="CSE-B">CSE-B</SelectItem>
            </SelectContent>
          </Select>
        </Card>

        <Card className="p-4">
          <h3 className="font-medium mb-2">Select Subject</h3>
          <Select onValueChange={setSelectedSubject}>
            <SelectTrigger>
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DS">Data Structures</SelectItem>
              <SelectItem value="ALGO">Algorithms</SelectItem>
            </SelectContent>
          </Select>
        </Card>

        <Card className="p-4">
          <h3 className="font-medium mb-2">Select Date</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Present Students</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAttendanceRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{format(new Date(record.date), "PP")}</TableCell>
                <TableCell>{record.class}</TableCell>
                <TableCell>{record.subject}</TableCell>
                <TableCell>
                  {record.students.filter((s) => s.present).length}/{record.students.length}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(record.id)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AttendanceRecords;