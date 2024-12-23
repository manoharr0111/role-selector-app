import { Button } from "@/components/ui/button";
import { UserRole } from "@/types/auth";

interface RoleSelectorProps {
  selectedRole: UserRole;
  onRoleSelect: (role: UserRole) => void;
}

const RoleSelector = ({ selectedRole, onRoleSelect }: RoleSelectorProps) => {
  const roles: UserRole[] = ['admin', 'faculty', 'student'];

  return (
    <div className="flex gap-2 mb-6">
      {roles.map((role) => (
        <Button
          key={role}
          variant={selectedRole === role ? "default" : "outline"}
          onClick={() => onRoleSelect(role)}
          className="flex-1 capitalize"
        >
          {role}
        </Button>
      ))}
    </div>
  );
};

export default RoleSelector;