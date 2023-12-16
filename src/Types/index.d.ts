export enum ROLE {
  Admin = "admin",
  User = "student",
  Teacher = "teacher",
}
export type UserData = {
  id: string;
  first_name: string;
  last_name: string;
  address: string;
  email: string;
  sex: string;
  grade: string;
  password: string;
  confirmPassword: string;
  role: ROLE;
  grade: string;
  username: string;
  gender: string;
  class_to_teach: string;
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
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  class_to_teach: string;
}

export interface TeacherData {
  id: string;
  details: TeacherDetails;
}

type StudentDetails = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  gender: string;
  student_class_id: number;
  profile_image: null | string;
  created_at: string;
  updated_at: string;
  class_to_teach: string;
};

type StudentData = {
  current_page: number;
  data: StudentDetails[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};
