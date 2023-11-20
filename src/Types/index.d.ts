export enum ROLE {
  Admin = "admin",
  User = "student",
  Teacher = "teacher",
}
export type UserData = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  sex: string;
  grade: string;
  password: string;
  confirmPassword: string;
  role: ROLE;
  username: string;
};

export type StudentData = {
  first_name: "Hamza";
  last_name: "Alade";
  email: "alade@gmail.com";
  address: "lane 9, tambobo california";
  gender: "male";
  class: "grade 1";
  password: "12345678";
  password_confirmation: "12345678";
  role: ROLE;
};

export type AdminData = {};

export interface TeacherDetails {
  first_name: string;
  last_name: string;
  email: string;
  class_to_teach: string;
}

export interface TeacherData {
  id: string;
  details: TeacherDetails;
}
