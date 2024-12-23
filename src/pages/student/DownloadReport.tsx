import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";

const DownloadReport = () => {
  const handleDownload = () => {
    // Implement PDF download logic here
    console.log("Downloading report...");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Download Attendance Report</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Select Report Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="fromDate" className="text-sm font-medium">
                From Date
              </label>
              <Input
                id="fromDate"
                type="date"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="toDate" className="text-sm font-medium">
                To Date
              </label>
              <Input
                id="toDate"
                type="date"
                className="w-full"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject (Optional)
            </label>
            <select
              id="subject"
              className="w-full h-10 px-3 rounded-md border border-input bg-background"
            >
              <option value="">All Subjects</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
            </select>
          </div>

          <Button
            onClick={handleDownload}
            className="w-full md:w-auto"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DownloadReport;