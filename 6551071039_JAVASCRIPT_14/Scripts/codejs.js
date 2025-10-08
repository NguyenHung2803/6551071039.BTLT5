function Student(Name, NumberID, Gender){
    this.Name = Name;
    this.NumberID = NumberID;
    this.Gender = Gender;
}

var student1 = new Student("Ngô Bá Khá", "8386", "Male");

document.writeln("Thông tin sinh viên:<br>");
document.writeln("Tên: ", student1.Name, "<br>");
document.writeln("Id: ", student1.NumberID, "<br>");
document.writeln("Giới tính: ", student1.Gender, "<br>");