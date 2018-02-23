function addStudent() {
    var firstName = document.getElementById("studentFirstName").value;
    var lastName = document.getElementById("studentLastName").value;
    var grade = document.getElementById("studentGrade").value;
    allStudents.push(new Student(firstName, lastName, grade));
    document.getElementById("confirmation").innerHTML = "Student Added";
    addToLists();
    clearPage();
}

function addTeacher() {
    var firstName = document.getElementById("teacherFirstName").value;
    var lastName = document.getElementById("teacherLastName").value;
    var subject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(firstName, lastName, subject));
    document.getElementById("confirmation").innerHTML = "Teacher Added";
    clearPage();
}

function addSection() {
    var name = document.getElementById("sectionName").value;
    var count = document.getElementById("sectionCount").value;
    allSections.push(new Section(name, count));
    document.getElementById("confirmation").innerHTML = "Section Added";

}

function listItems() {
    var html = "<table border = '1'>";
    var lists = document.getElementById("items").value;
    console.log(lists);
    if(lists === "student") {
        for(var i = 0; i < allStudents.length; i++) {
            html += "<tr>";     
            html += "<td>" + allStudents[i].firstName + "</td>";
            html += "<td>" + allStudents[i].lastName + "</td>";
            html += "<td>" + allStudents[i].grade + "</td>";
            html += "</tr>";
        }
    }
    if(lists === "teacher") {
        for(var j = 0; j < allTeachers.length; j++) {
            html += "<tr>";
            html += "<td>" + allTeachers[j].firstName + "</td>";
            html += "<td>" + allTeachers[j].lastName + "</td>";
            html += "<td>" + allTeachers[j].subject + "</td>";
            html += "</tr>";
        }
    }
    if(lists === "section") {
        for(var k = 0; k < allSections.length; k++) {
            html += "<tr>";
            html += "<td>" + allSections[k].name + "</td>";
            html += "<td>" + allSections[k].count + "</td>";
            html += "</tr>";
        }
    }
    html += "</table>";
    console.log(html);
    document.getElementById("listed").innerHTML = html;
}


function addToLists() {
    var kids = "<option value = 100>Select Student</option>";
    var adults = "<option value = 100>Select Teacher</option>";
    var subjects = "<option value = 100>Select Section</option>";
    console.log(allStudents);
    document.getElementById("students").innerHTML = "";
    document.getElementById("teachers").innerHTML = "";
    document.getElementById("sections").innerHTML = "";

    for(var i = 0; i < allStudents.length; i++) {
        kids += "<option value='" + allStudents[i].id + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>";
    }
    document.getElementById("students").innerHTML += kids;
    for(var i = 0; i < allTeachers.length; i++) {
        adults += "<option value='" + allTeachers[i].id + "'>" + allTeachers[i].firstName + " " + allTeachers[i].lastName + "</option>";
    }
    document.getElementById("teachers").innerHTML += adults;
    for(var i = 0; i < allSections.length; i++) {
        subjects += "<option value='" + allSections[i].id + "'>" + allSections[i].name +  "</option>";
    }
    document.getElementById("sections").innerHTML += subjects;
    document.getElementById("sections2").innerHTML += subjects;
}

function clearPage() {
    var elements = document.getElementsByTagName("input");
    for (var i=0; i<elements.length; i++) {
        if (elements[i].type === "text") {
            elements[i].value = "";
        }
    }
}

function getStudentById(studId) {
    for(var i=0; i < allStudents.length; i++) {
        if(allStudents[i].id == studId) {
            return allStudents[i];
        }
    }
}

function getTeacherById(teachId) {
    for(var i=0; i < allTeachers.length; i++) {
        if(allTeachers[i].id == teachId) {
            return allTeachers[i];
        }
    }
}

function getSectionById(secId) {
    for(var i=0; i < allSections.length; i++) {
        if(allSections[i].id == secId) {
            return allSections[i];
        }
    }
}

function addStudentToSection() {
    var stud = getStudentById(document.getElementById("students").value);
    var sec = getSectionById(document.getElementById("sections").value);
    sec.addStudentToSection(stud);
    console.log(sec.studentsInSection);
}

function addTeacherToSection() {
    var teach = getTeacherById(document.getElementById("teachers").value);
    var sec = getSectionById(document.getElementById("sections").value);
    sec.addTeacherToSection(teach);
    console.log(sec.teacher);
}

function displayStudentsInSection() {
    var kids = "<table id='studentsInSection' border='1'>";
    var section = getSectionById(parseInt(document.getElementById("sections2").value));
    console.log(section);
    for(var i = 0; i < section.studentsInSection.length; i++) {
        kids += "<tr><td>" + section.studentsInSection[i].firstName + " </td> <td> " + section.studentsInSection[i].lastName + "</td>";
        kids += "<td> <button value='" +section.studentsInSection[i].id + "'id='" +section.studentsInSection[i].id +
            "' onclick=removeStudentFromSection(this.value," + section.id + ")>Remove Student</button></td></tr>";

    }
    kids += "</table>";
    document.getElementById("studentsInSection").innerHTML = kids;

}

function removeStudentFromSection(studentId, sectionId) {
    var section = getSectionById(parseInt(sectionId));
    section.removeStudentFromSection(studentId);
    displayStudentsInSection();
}

