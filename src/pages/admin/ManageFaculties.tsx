import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, Pencil, Trash2, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Temporary mock data - replace with actual data fetching
const mockFaculties = [
  {
    id: "1",
    name: "John Doe",
    facultyId: "FAC001",
    email: "john@example.com",
    phone: "1234567890",
    subjects: ["Mathematics", "Physics"],
  },
];

const ManageFaculties = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newFaculty, setNewFaculty] = useState({
    name: "",
    facultyId: "",
    email: "",
    phone: "",
  });

  const handleAddFaculty = (e: React.FormEvent) => {
    e.preventDefault();
    // Add faculty logic here
    toast({
      title: "Faculty added successfully",
      description: `${newFaculty.name} has been added to the system.`,
    });
    setIsAddDialogOpen(false);
    setNewFaculty({ name: "", facultyId: "", email: "", phone: "" });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Manage Faculties</h1>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Faculty
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Faculty</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddFaculty} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newFaculty.name}
                  onChange={(e) =>
                    setNewFaculty({ ...newFaculty, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facultyId">Faculty ID</Label>
                <Input
                  id="facultyId"
                  value={newFaculty.facultyId}
                  onChange={(e) =>
                    setNewFaculty({ ...newFaculty, facultyId: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newFaculty.email}
                  onChange={(e) =>
                    setNewFaculty({ ...newFaculty, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={newFaculty.phone}
                  onChange={(e) =>
                    setNewFaculty({ ...newFaculty, phone: e.target.value })
                  }
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Add Faculty
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Faculty ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Subjects</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockFaculties.map((faculty) => (
            <TableRow key={faculty.id}>
              <TableCell>{faculty.name}</TableCell>
              <TableCell>{faculty.facultyId}</TableCell>
              <TableCell>{faculty.email}</TableCell>
              <TableCell>{faculty.phone}</TableCell>
              <TableCell>{faculty.subjects.join(", ")}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageFaculties;