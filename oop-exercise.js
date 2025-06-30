/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */

class Student {
    constructor(name, age, grades=[]) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }
    getName() { return this.name }

    getAge() { return this.age }

    addGrade(newGrade) {
        if (newGrade >= 0 && newGrade <= 100) {
            this.grades.push(newGrade);
        }
        else {
            console.log("Grade must be between 0 and 100.")
        }
    }
    calculateAverageGrade() {
        if (this.grades.length == 0) {
            return 0;
        }
        else {
            const sum = this.grades.reduce((acc, current) => acc + current, 0);
            const avg = sum / this.grades.length;
            return avg;
        }
    }
    hasPassed(passingGrade) {
        if (this.calculateAverageGrade() >= passingGrade ){
            return true;
        }
        else {
            return false;
        }
    }
}

class Course {
    constructor(title, students = []) {
        this.title = title;
        this.students = students;
    }
    listStudents() {
        if (this.students.length === 0) {
            console.log("There are no students enrolled in this class yet.");
        }
        else {
            console.table(this.students);
        }
    }
    enrollStudent(student) {
        this.students.push(student);
    }
    calculateAverageGrade() {
       if (this.students.length === 0) {
            return 0;
        }

        let total = 0;

        for (let i = 0; i < this.students.length; i++) {
            total += this.students[i].calculateAverageGrade();
        }

        const average = total / this.students.length;
        return average;
    }
}


// const student1 = new Student("Kimberly Reddick", 54);

// console.log(student1);

// student1.addGrade(100);
// student1.addGrade(75);
// student1.addGrade(80);
// student1.addGrade(100);


// console.log(student1);

// const name = student1.getName();
// const age = student1.getAge();

// console.log(`What is ${name}'s class average: `, student1.calculateAverageGrade());

// console.log(`Did ${name} pass the class? `, student1.hasPassed(80));

// console.log(`${name} is ${age} years old.`)

const course1 = new Course("Biology")

console.log(course1);

course1.enrollStudent(new Student("Kimberly Reddick", 54, [89, 90, 92, 100]));

course1.enrollStudent(new Student("Rick Hammaker", 56, [69, 89, 78, 50]));

course1.listStudents();

console.log(`\nClase average: `, course1.calculateAverageGrade());
