const studentInput = document.getElementById('studentInput');
const addStudentBtn = document.getElementById('addStudentBtn');
const studentList = document.getElementById('studentList');
const studentCount = document.getElementById('studentCount');

let students = [];

const updateStudentCount = () => {
  studentCount.textContent = `Total Students: ${students.length}`;
};

const createStudentItem = (name, index) => `
  <li data-index="${index}">
    <span class="student-name">${name}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  </li>
`;

const renderList = () => {
  studentList.innerHTML = students.map((name, i) => createStudentItem(name, i)).join('');
  updateStudentCount();
};

const addStudent = () => {
  const name = studentInput.value.trim();
  if (!name.trim() || /\d/.test(name)) return alert('Please enter a valid student name.');
  students.push(name);
  studentInput.value = '';
  renderList();
};

const updateStudent = (index) => {
  const newName = prompt('Edit student name:', students[index]);
  if (newName && newName.trim()) {
    students[index] = newName.trim();
    renderList();
  }
};

const deleteStudent = (index) => {
  students.splice(index, 1);
  renderList();
};

studentList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  const index = +li.dataset.index;

  if (e.target.classList.contains('edit')) updateStudent(index);
  if (e.target.classList.contains('delete')) deleteStudent(index);
});

addStudentBtn.addEventListener('click', addStudent);

studentInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addStudent();
});
