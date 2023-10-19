const vm = new Vue({
    el: '#app',
    data: {
      selectedCity: '',
      selectedWorkshop: '',
      selectedEmployee: '',
      selectedBrigade: '',
      cities: [
        { label: 'Город 1', value: 'city1' },
        { label: 'Город 2', value: 'city2' },
        { label: 'Город 3', value: 'city3' }
      ],
      workshops: [
        { label: 'Цех 1', value: 'workshop1', city: 'city1' },
        { label: 'Цех 2', value: 'workshop2', city: 'city1' },
        { label: 'Цех 3', value: 'workshop3', city: 'city2' },
        { label: 'Цех 4', value: 'workshop4', city: 'city2' },
        { label: 'Цех 5', value: 'workshop5', city: 'city3' },
        { label: 'Цех 6', value: 'workshop6', city: 'city3' }
      ],
      employees: [
        { label: 'Сотрудник 1', value: 'employee1', workshop: 'workshop1' },
        { label: 'Сотрудник 2', value: 'employee2', workshop: 'workshop1' },
        { label: 'Сотрудник 3', value: 'employee3', workshop: 'workshop2' },
        { label: 'Сотрудник 4', value: 'employee4', workshop: 'workshop2' },
        { label: 'Сотрудник 5', value: 'employee5', workshop: 'workshop4' },
        { label: 'Сотрудник 6', value: 'employee6', workshop: 'workshop4' },
        { label: 'Сотрудник 7', value: 'employee7', workshop: 'workshop5' },
        { label: 'Сотрудник 8', value: 'employee8', workshop: 'workshop5' }
      ]
    },
    computed: {
      filteredWorkshops() {
        return this.workshops.filter(workshop => workshop.city === this.selectedCity);
      },
      filteredEmployees() {
        return this.employees.filter(employee => employee.workshop === this.selectedWorkshop);
      }
    },
    methods: {
      updateWorkshops() {
        this.selectedWorkshop = '';
        this.selectedEmployee = '';
      },
      updateEmployees() {
        this.selectedEmployee = '';
      }
    }
  });