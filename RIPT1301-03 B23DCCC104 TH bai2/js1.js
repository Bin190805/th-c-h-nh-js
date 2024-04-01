// Dữ liệu mẫu cho sinh viên
const students = [
    { id: 1, name: " A", age: 20, address: "B23CCC104", phone: "123456789", email: "a@example.com", class: "CQ04", achievement: "tốt" },
    { id: 2, name: " B", age: 21, address: "B23CCC205", phone: "987654321", email: "b@example.com", class: "CQ03", achievement: "tốt" }
  ];
  
  // Hiển thị danh sách sinh viên
  function displayStudents() {
    const tbody = document.querySelector("#student-table tbody");
    tbody.innerHTML = "";
  
    students.forEach((student, index) => {
      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.address}</td>
          <td>${student.phone}</td>
          <td>${student.email}</td>
          <td>${student.class}</td>
          <td>${student.achievement}</td>
          <td>
            <button onclick="editStudent(${student.id})">Sửa</button>
            <button onclick="deleteStudent(${student.id})">Xóa</button>
          </td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  }
  
  // Hiển thị modal thêm sinh viên
  function openAddModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    document.getElementById("modal-title").textContent = "Thêm sinh viên";
  }
  
  // Đóng modal
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  // Thêm sinh viên mới
  function addStudent(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const age = form.age.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const className = form.class.value;
    const achievement = form.achievement.value;
  
    const id = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    students.push({ id, name, age, address, phone, email, class: className, achievement }); // Thêm trường "achievement"
  
    displayStudents();
    closeModal();
  }
  
  // Chỉnh sửa thông tin sinh viên
  function editStudent(id) {
    const student = students.find(student => student.id === id);
    if (!student) return;
  
    const form = document.getElementById("student-form");
    form.name.value = student.name;
    form.age.value = student.age;
    form.address.value = student.address;
    form.phone.value = student.phone;
    form.email.value = student.email;
    form.class.value = student.class;
    form.achievement.value = student.achievement;
  
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    document.getElementById("modal-title").textContent = "Sửa sinh viên";
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      student.name = form.name.value;
      student.age = form.age.value;
      student.address = form.address.value;
      student.phone = form.phone.value;
      student.email = form.email.value;
      student.class = form.class.value;
      student.achievement = form.achievement.value;
  
      displayStudents();
      closeModal();
    });
  }
  
  // Xóa sinh viên
  function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      students.splice(index, 1);
      displayStudents();
    }
  }
  
  // Hiển thị danh sách sinh viên khi trang được tải
  window.addEventListener("load", function() {
    displayStudents();
  });
  
  // Xác nhận thêm sinh viên
  document.getElementById("add-btn").addEventListener("click", openAddModal);
  document.getElementById("modal").addEventListener("click", function(event) {
    if (event.target === this || event.target.classList.contains("close")) {
      closeModal();
    }
  });
  document.getElementById("student-form").addEventListener("submit", addStudent);
