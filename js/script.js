const cities = [
  { label: 'Город 1', value: 'city1' },
  { label: 'Город 2', value: 'city2' },
  { label: 'Город 3', value: 'city3' }
];

const workshops = [
  { label: 'Цех 1', value: 'workshop1', city: 'city1' },
  { label: 'Цех 2', value: 'workshop2', city: 'city1' },
  { label: 'Цех 3', value: 'workshop3', city: 'city2' },
  { label: 'Цех 4', value: 'workshop4', city: 'city2' },
  { label: 'Цех 5', value: 'workshop5', city: 'city3' },
  { label: 'Цех 6', value: 'workshop6', city: 'city3' }
];

const employees = [
  { label: 'Сотрудник 1', value: 'employee1', workshop: 'workshop1' },
  { label: 'Сотрудник 2', value: 'employee2', workshop: 'workshop1' },
  { label: 'Сотрудник 3', value: 'employee3', workshop: 'workshop2' },
  { label: 'Сотрудник 4', value: 'employee4', workshop: 'workshop2' },
  { label: 'Сотрудник 5', value: 'employee5', workshop: 'workshop4' },
  { label: 'Сотрудник 6', value: 'employee6', workshop: 'workshop4' },
  { label: 'Сотрудник 7', value: 'employee7', workshop: 'workshop5' },
  { label: 'Сотрудник 8', value: 'employee8', workshop: 'workshop5' }
];

const citySelect = document.getElementById('city');
cities.forEach(function(city) {
  const option = document.createElement('option');
  option.value = city.value;
  option.textContent = city.label;
  citySelect.appendChild(option);
});

const updateWorkshops = () => {
  const cityValue = citySelect.value;

  const workshopSelect = document.getElementById('workshop');
  workshopSelect.innerHTML = '<option value="">Выберите цех</option>';
  workshopSelect.disabled = true;

  const employeeSelect = document.getElementById('employee');
  employeeSelect.innerHTML = '<option value="">Выберите сотрудника</option>';
  employeeSelect.disabled = true;

  if (cityValue) {
    const filteredWorkshops = workshops.filter((workshop) => {
      return workshop.city === cityValue;
    });

    filteredWorkshops.forEach((workshop) => {
      const option = document.createElement('option');
      option.value = workshop.value;
      option.textContent = workshop.label;
      workshopSelect.appendChild(option);
    });

    workshopSelect.disabled = false;
  }
}

const updateEmployees = () => {
  const workshopValue = document.getElementById('workshop').value;

  const employeeSelect = document.getElementById('employee');
  employeeSelect.innerHTML = '<option value="">Выберите сотрудника</option>';
  employeeSelect.disabled = true;

  if (workshopValue) {
    const filteredEmployees = employees.filter((employee) => {
      return employee.workshop === workshopValue;
    });

    filteredEmployees.forEach((employee) => {
      const option = document.createElement('option');
      option.value = employee.value;
      option.textContent = employee.label;
      employeeSelect.appendChild(option);
    });

    employeeSelect.disabled = false;
  }
}

const formatDate = (date) => {
  return date.toISOString().slice(0, 19);
}

const getShiftByTime = (time) => {
  const shift1Start = new Date();
  shift1Start.setHours(8, 0, 0); 

  const shift1End = new Date();
  shift1End.setHours(20, 0, 0);

  if (time >= shift1Start && time <= shift1End) {
    return 'brigade1';
  } else {
    return 'brigade2';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const brigadeSelect = document.getElementById('brigade');

  const updateBrigade = () => {
    const currentTime = new Date();
    const currentShift = getShiftByTime(currentTime);

    brigadeSelect.value = currentShift;
  };

  updateBrigade();
});