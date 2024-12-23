export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

export const validateRollNumber = (rollNumber: string): boolean => {
  return rollNumber.length >= 5;
};

export const validateFacultyId = (facultyId: string): boolean => {
  return facultyId.length >= 5;
};

export const validateName = (name: string): boolean => {
  return name.length >= 2;
};