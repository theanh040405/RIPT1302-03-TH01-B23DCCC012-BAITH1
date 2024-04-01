// Mảng chứa thông tin sinh viên
var students = [];

// Hàm thêm sinh viên mới
function addStudent() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var classRoom = document.getElementById("class").value;
  
  // Tạo một object mới đại diện cho sinh viên
  var student = {
    name: name,
    age: age,
    address: address,
    phone: phone,
    email: email,
    class: classRoom
  };

  // Thêm sinh viên vào mảng
  students.push(student);

  // Hiển thị lại bảng sinh viên
  displayStudents();

  // Reset form
  document.getElementById("add-student-form").reset();

  return false; // Ngăn form submit
}

// Hàm hiển thị danh sách sinh viên
function displayStudents() {
  var tableBody = document.getElementById("student-table");
  tableBody.innerHTML = ""; // Xóa bảng sinh viên hiện tại

  // Duyệt qua mảng sinh viên và thêm vào bảng
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var row = "<tr><td>" + (i + 1) + "</td><td>" + student.name + "</td><td>" + student.age + "</td><td>" + student.address + "</td><td>" + student.phone + "</td><td>" + student.email + "</td><td>" + student.class + "</td><td><button onclick='deleteStudent(" + i + ")'>Xóa</button></td></tr>";
    tableBody.innerHTML += row;
  }
}

// Hàm xóa sinh viên
function deleteStudent(index) {
  students.splice(index, 1); // Xóa sinh viên khỏi mảng
  displayStudents(); // Hiển thị lại bảng sinh viên
}


