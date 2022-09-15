const person = {
  firstName: "Ali",
  lastName: "Sadeghipour",
  age: 23,
  job: "English teacher",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  bio: function () {
    return `Hello,this is ${this.fullName()} , ${
      this.job
    } from Tehran.This is a test by JS and I have lived for ${
      this.age
    } years. `;
  },
};

console.log(person.bio());
