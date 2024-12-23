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
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DownloadReports = () => {
  const { toast } = useToast();
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [selectedClass, setSelectedClass] = React.useState<string>();
  const [selectedSubject, setSelectedSubject] = React.useState<string>();

  const handleDownload = () => {
    // Implement PDF generation and download logic here
    toast({
      title: "Success",
      description: "Report downloaded successfully.",
    });
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-2xl font-bold">Download Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <h3 className="font-medium mb-2">Start Date</h3>
          <Calendar
            mode="single"
            selected={startDate}
            onSelect={setStartDate}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-4">
          <h3 className="font-medium mb-2">End Date</h3>
          <Calendar
            mode="single"
            selected={endDate}
            onSelect={setEndDate}
            className="rounded-md border"
          />
        </Card>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleDownload} className="gap-2">
          <Download className="h-4 w-4" />
          Download Report
        </Button>
      </div>
    </div>
  );
};

export default DownloadReports;