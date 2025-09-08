const passingMarks = 50;

function manageGrades(students) {
  const upperNames = students.map(student => ({
    name: student.name.toUpperCase(),
    marks: student.marks
  }));

  const passedStudents = upperNames.filter(student => student.marks >= passingMarks);

  passedStudents.forEach(student => {
    let grade = '';
    if (student.marks >= 85) grade = 'A';
    else if (student.marks >= 70) grade = 'B';
    else if (student.marks >= 50) grade = 'C';
    const shortName = student.name.slice(0, 3);
    const hasA = student.name.includes('A');
    console.log(
      `Name: ${student.name}, Grade: ${grade}, Short Name: ${shortName}, Includes 'A': ${hasA}`
    );
  });
}

const students = [
  { name: "Anita", marks: 92 },
  { name: "Rahul", marks: 48 },
  { name: "Sara", marks: 81 },
  { name: "Ben", marks: 67 },
];

manageGrades(students);