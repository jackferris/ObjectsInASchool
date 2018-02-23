var id = 0;

function Student(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.id = id++;
}

function Teacher(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id = id++;
}

function Section(name, count) {
    this.name = name;
    this.count = count;
    this.id = id++;
    this.studentsInSection = [];
    this.teacher = "";
    this.addStudentToSection = function(student) {
        this.studentsInSection.push(student);
    };
    this.addTeacherToSection = function(teacher) {
        this.teacher = teacher;
    };
    this.removeStudentFromSection = function(id) {
        for(var i = 0; i < this.studentsInSection.length; i++) {
            if(this.studentsInSection[i].id == id){
             this.studentsInSection.splice(i,1);
            }
        }
    };
}