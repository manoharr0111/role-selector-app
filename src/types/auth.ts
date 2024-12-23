export type UserRole = 'admin' | 'faculty' | 'student';

export interface BaseAuthFields {
  password: string;
}

export interface AdminAuthFields extends BaseAuthFields {
  email: string;
}

export interface FacultyAuthFields extends BaseAuthFields {
  facultyId: string;
  email?: string;
  name?: string;
}

export interface StudentAuthFields extends BaseAuthFields {
  rollNumber: string;
  class?: string;
  branch?: string;
  year?: string;
  name?: string;
}

export type AuthFields = AdminAuthFields | FacultyAuthFields | StudentAuthFields;