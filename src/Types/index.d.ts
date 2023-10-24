export enum ROLE {
    Admin = "admin",
    User = "user",
    Teacher = "teacher"
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
};