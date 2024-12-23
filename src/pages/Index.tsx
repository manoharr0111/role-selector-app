import { UserRole } from "@/types/auth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, BarChart, ClipboardCheck, Download, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Temporary mock - replace with actual auth logic later
const mockUserRole = "faculty" as UserRole;

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        icon={<Users className="h-6 w-6" />}
        title="Manage Faculties"
        onClick={() => navigate("/admin/faculties")}
      />
      <DashboardCard
        icon={<Users className="h-6 w-6" />}
        title="Manage Students"
        onClick={() => navigate("/admin/students")}
      />
      <DashboardCard
        icon={<BookOpen className="h-6 w-6" />}
        title="Manage Classes/Subjects"
        onClick={() => navigate("/admin/classes")}
      />
      <DashboardCard
        icon={<BarChart className="h-6 w-6" />}
        title="View Reports"
        onClick={() => navigate("/admin/reports")}
      />
    </div>
  );
};

const FacultyDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        icon={<ClipboardCheck className="h-6 w-6" />}
        title="Manage Attendance"
        onClick={() => navigate("/faculty/attendance")}
      />
      <DashboardCard
        icon={<ClipboardCheck className="h-6 w-6" />}
        title="View/Edit Attendance Records"
        onClick={() => navigate("/faculty/records")}
      />
      <DashboardCard
        icon={<Download className="h-6 w-6" />}
        title="Download Reports"
        onClick={() => navigate("/faculty/reports")}
      />
    </div>
  );
};

const StudentDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        icon={<ClipboardCheck className="h-6 w-6" />}
        title="View Attendance"
        onClick={() => navigate("/student/attendance")}
      />
      <DashboardCard
        icon={<Download className="h-6 w-6" />}
        title="Download Reports"
        onClick={() => navigate("/student/reports")}
      />
      <DashboardCard
        icon={<User className="h-6 w-6" />}
        title="Update Profile"
        onClick={() => navigate("/student/profile")}
      />
    </div>
  );
};

const DashboardCard = ({ 
  icon, 
  title, 
  onClick 
}: { 
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}) => (
  <Card 
    className="hover:shadow-lg transition-shadow cursor-pointer"
    onClick={onClick}
  >
    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
      {icon}
      <h3 className="text-lg font-semibold text-center">{title}</h3>
    </CardContent>
  </Card>
);

const Index = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            Welcome, {mockUserRole.charAt(0).toUpperCase() + mockUserRole.slice(1)}
          </h1>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {mockUserRole === "admin" && <AdminDashboard />}
        {mockUserRole === "faculty" && <FacultyDashboard />}
        {mockUserRole === "student" && <StudentDashboard />}
      </div>
    </div>
  );
};

export default Index;
