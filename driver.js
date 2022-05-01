class AccademicYear {
  constructor(name, ...semesters) {
    this.name = name;
    this.totalCus;
    this.cgpa;
    this.semesters = semesters;
  }
  addSemester(semester) {
    this.semesters.push(semester);
  }
}
var a = [];

class Semester {
  constructor(name, ...courses) {
    this.name = name;
    this.totalCus;
    this.gpa;
    this.cgpa;
    this.courses = courses;
  }
  addCourse(course) {
    this.courses.push(course);
  }
  removeCourse(courseId) {}
}
class Course {
  constructor(name, creditUnits, grade) {
    this.name = name;
    this.creditUnits = creditUnits;
    this.grade = grade;
    this.comment;
  }
  getCuTimesGp() {
    var result = this.creditUnits * this.grade.gradePoint;
    return result;
  }
  update(name, creditUnits, grade) {
    this.name = name;
    this.grade = grade;
    this.creditUnits = creditUnits;
  }
}

class Grade {
  constructor(grade, gradePoint) {
    this.grade = grade;
    this.gradePoint = gradePoint;
  }
  update(grade, gradePoint) {
    this.grade = grade;
    this.gradePoint = gradePoint;
  }
  getPoint() {
    return Number.parseFloat(this.gradePoint);
  }
}

class Program {
  constructor(name, ...accademicYears) {
    this.name = name;
    this.accademicYears = accademicYears;
    this.duration = 0;
  }
  addAccademicYear(accademicYear) {
    this.accademicYears.push(accademicYear);
  }
}

bsse = new Program("software Engineering");
acYear = new AccademicYear("2021/2022");
sem1 = new Semester("sem1");
acYear.addSemester(sem1);
bsse.addAccademicYear(acYear);
console.log(bsse);
