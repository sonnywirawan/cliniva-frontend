import { formatDate } from "@angular/common";
export class Doctors {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  gender: string;
  mobile: string;
  designation: string;
  department: string;
  dateOfBirth: string;
  age: number;
  address: string;
  education: string;
  img: string;
  specialization: string;
  degree: string;
  joiningDate: string;
  constructor(doctors) {
    {
      // this.id = doctors.id || this.getRandomID();
      this.id = doctors.id;
      this.email = doctors.email;
      this.password = doctors.password;
      this.firstName = doctors.firstName;
      this.lastName = doctors.lastName;
      this.role = doctors.role;
      this.gender = doctors.gender;
      this.mobile = doctors.mobile;
      this.designation = doctors.designation;
      this.dateOfBirth = doctors.dateOfBirth;
      this.age = doctors.age;
      this.address = doctors.address;
      this.education = doctors.education;
      this.specialization = doctors.specialization;
      this.degree = doctors.degree;
      this.joiningDate = doctors.joiningDate;
      this.img = doctors.img || "assets/images/user/user1.jpg";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
