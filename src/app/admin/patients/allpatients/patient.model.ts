export class Patient {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  gender: string;
  mobile: string;
  dateOfBirth: string;
  age: number;
  maritalStatus: string;
  address: string;
  bloodGroup: string;
  bloodPressure: string;
  sugger: string;
  injury: string;
  img: string;

  constructor(patient) {
    {
      // this.id = patient.id || this.getRandomID();
      this.id = patient.id;
      this.email = patient.email;
      this.password = patient.password;
      this.firstName = patient.firstName;
      this.lastName = patient.lastName;
      this.role = patient.role;
      this.gender = patient.gender;
      this.mobile = patient.mobile;
      this.dateOfBirth = patient.dateOfBirth;
      this.age = patient.age;
      this.maritalStatus = patient.maritalStatus;
      this.address = patient.address;
      this.bloodGroup = patient.bloodGroup;
      this.bloodPressure = patient.bloodPressure;
      this.sugger = patient.sugger;
      this.injury = patient.injury;
      this.img = patient.img || "assets/images/user/user1.jpg";
    }
  }
  public getRandomID(): string {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
