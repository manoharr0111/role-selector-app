import { useState } from "react";
import { UserRole, AuthFields } from "@/types/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  validateEmail,
  validatePassword,
  validateRollNumber,
  validateFacultyId,
  validateName,
} from "@/utils/validation";

interface AuthFormProps {
  mode: "signin" | "signup";
  role: UserRole;
}

const AuthForm = ({ mode, role }: AuthFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<AuthFields>({} as AuthFields);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation based on role
    let isValid = true;
    const errors: string[] = [];

    if (role === "admin") {
      const adminData = formData as { email: string; password: string };
      if (!validateEmail(adminData.email)) {
        isValid = false;
        errors.push("Invalid email format");
      }
    } else if (role === "faculty") {
      const facultyData = formData as { facultyId: string; password: string };
      if (!validateFacultyId(facultyData.facultyId)) {
        isValid = false;
        errors.push("Faculty ID must be at least 5 characters");
      }
    } else if (role === "student") {
      const studentData = formData as { rollNumber: string; password: string };
      if (!validateRollNumber(studentData.rollNumber)) {
        isValid = false;
        errors.push("Invalid roll number format");
      }
    }

    if (!validatePassword(formData.password)) {
      isValid = false;
      errors.push("Password must be at least 8 characters");
    }

    if (!isValid) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: errors.join(", "),
      });
      return;
    }

    // TODO: Handle authentication
    console.log("Form submitted:", { mode, role, formData });
    toast({
      title: "Success",
      description: `${mode === "signin" ? "Signed in" : "Signed up"} successfully!`,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {role === "admin" && (
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
        </div>
      )}

      {role === "faculty" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="facultyId">Faculty ID</Label>
            <Input
              id="facultyId"
              name="facultyId"
              required
              placeholder="Enter your faculty ID"
              onChange={handleInputChange}
            />
          </div>
          {mode === "signup" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
        </>
      )}

      {role === "student" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="rollNumber">Roll Number</Label>
            <Input
              id="rollNumber"
              name="rollNumber"
              required
              placeholder="Enter your roll number"
              onChange={handleInputChange}
            />
          </div>
          {mode === "signup" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="class">Class</Label>
                <Input
                  id="class"
                  name="class"
                  required
                  placeholder="Enter your class"
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="branch">Branch</Label>
                <Input
                  id="branch"
                  name="branch"
                  required
                  placeholder="Enter your branch"
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  name="year"
                  required
                  placeholder="Enter your year"
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
      </div>

      <Button type="submit" className="w-full">
        {mode === "signin" ? "Sign In" : "Sign Up"}
      </Button>
    </form>
  );
};

export default AuthForm;