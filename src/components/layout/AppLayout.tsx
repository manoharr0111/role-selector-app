import React from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Settings, HelpCircle, LogOut, User, ClipboardCheck, Download } from "lucide-react";
import { UserRole } from "@/types/auth";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
  userRole: UserRole;
}

const AppLayout = ({ children, userRole }: AppLayoutProps) => {
  const navigate = useNavigate();

  const getNavItems = (role: UserRole) => {
    switch (role) {
      case "faculty":
        return [
          { icon: ClipboardCheck, label: "Attendance", path: "/faculty/attendance" },
          { icon: ClipboardCheck, label: "Records", path: "/faculty/records" },
          { icon: Download, label: "Reports", path: "/faculty/reports" },
        ];
      case "student":
        return [
          { icon: ClipboardCheck, label: "Attendance", path: "/student/attendance" },
          { icon: Download, label: "Reports", path: "/student/reports" },
          { icon: User, label: "Profile", path: "/student/profile" },
        ];
      case "admin":
        return [
          { icon: User, label: "Faculties", path: "/admin/faculties" },
          { icon: User, label: "Students", path: "/admin/students" },
          { icon: ClipboardCheck, label: "Classes", path: "/admin/classes" },
          { icon: Download, label: "Reports", path: "/admin/reports" },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems(userRole);

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="pb-16 md:pb-0">{children}</main>

      {/* Side Drawer */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 right-4 z-50"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-4 mt-8">
            <Button
              variant="ghost"
              className="justify-start gap-2"
              onClick={() => navigate("/settings")}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Button>
            <Button
              variant="ghost"
              className="justify-start gap-2"
              onClick={() => navigate("/help")}
            >
              <HelpCircle className="h-5 w-5" />
              Help
            </Button>
            <Button
              variant="ghost"
              className="justify-start gap-2 text-destructive hover:text-destructive"
              onClick={() => navigate("/")}
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t md:hidden">
        <nav className="flex justify-around p-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={cn(
                "flex-col gap-1 h-auto py-2 px-1",
                "hover:bg-transparent hover:text-primary"
              )}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AppLayout;