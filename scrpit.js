const student = [];

const fechaActual = new Date();
const elementoFecha = document.getElementById('date');
elementoFecha.textContent = `Hoy es: ${fechaActual}`;

document.getElementById("st-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Evita que el formulario se envíe
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const newStudent = {
    name: name,
    age: age,
    email: email,
  };
  
  student.push(newStudent);
  let idS = student.length; 
  addStudent(newStudent,idS)
  return student
})
function addStudent(info,idS){
  const table = document.getElementById('tableStudnet');
  const row = document.createElement('tr');
  const id = document.createElement('td');
  const nameCell = document.createElement('td');
  const ageCell = document.createElement('td');
  const emailCell = document.createElement('td');
  const eli = document.createElement('button');
  const upt = document.createElement('button');

    
  nameCell.textContent = info.name;
  ageCell.textContent = info.age;
  emailCell.textContent = info.email;
  id.textContent = idS;
  eli.textContent = 'Eliminar';
  upt.textContent = 'Editar';


  console.log(table)

  eli.classList.add('btn', 'btn-danger');
  eli.id="elimiinar"+idS;
  upt.classList.add('btn', 'btn-primary');
  
  row.appendChild(id)
  row.appendChild(nameCell)
  row.appendChild(ageCell)
  row.appendChild(emailCell)
  row.appendChild(eli)
  row.appendChild(upt)
  table.appendChild(row)
  upt.addEventListener('click', function() {
    editStudent(row, info, nameCell, ageCell, emailCell, upt);
  });
  del(eli,table,row)
}



function del(item,tble,row){
  item.addEventListener('click', function() {
    tble.removeChild(row); 
  });
}
function editStudent(row, info, nameCell, ageCell, emailCell, upt) {

  const nameInput = document.createElement('input');
  nameInput.value = info.name;

  const ageInput = document.createElement('input');
  ageInput.value = info.age;

  const emailInput = document.createElement('input');
  emailInput.value = info.email;

  nameCell.innerHTML = '';
  ageCell.innerHTML = '';
  emailCell.innerHTML = '';
  nameCell.appendChild(nameInput);
  ageCell.appendChild(ageInput);
  emailCell.appendChild(emailInput);
  upt.textContent = 'Guardar';
  upt.classList.remove('btn-primary');
  upt.classList.add('btn-success');


  upt.addEventListener('click', function saveChanges() {

    const newName = nameInput.value;
    const newAge = ageInput.value;
    const newEmail = emailInput.value;


    info.name = newName;
    info.age = newAge;
    info.email = newEmail;

    nameCell.textContent = newName;
    ageCell.textContent = newAge;
    emailCell.textContent = newEmail;


    upt.textContent = 'Editar';
    upt.classList.remove('btn-success');
    upt.classList.add('btn-primary');

    upt.removeEventListener('click', saveChanges);
  });
}