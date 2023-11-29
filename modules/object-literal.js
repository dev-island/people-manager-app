const peopleModule = {
  people: [],
  init: function () {
    this.cacheDom();
    this.bindEvents();
    this.render();
    console.log('object literal');
  },
  bindEvents: function () {
    this.addPerson.addEventListener('submit', this.onAddPerson.bind(this));
    this.peopleList.addEventListener('click', this.onDeleteClick.bind(this));
  },
  cacheDom: function () {
    this.template = document.querySelector('#personTemplate');
    this.addPerson = document.querySelector('#addPerson');
    this.peopleList = document.querySelector('#peopleList');
    this.input = document.querySelector('input[name=name]');
  },
  onAddPerson: function (evt) {
    evt.preventDefault();

    const formData = new FormData(this.addPerson);
    this.people.push(formData.get('name'));
    this.input.value = '';

    this.render();
  },
  onDeleteClick: function (e) {
    if (e.target.classList.contains('del')) {
      const name = e.target.parentNode.querySelector('.name').innerText;
      const index = this.people.indexOf(name);
      this.people.splice(index, 1);
      this.render();
    }
  },
  render: function () {
    this.peopleList.innerHTML = '';

    this.people.forEach((person) => {
      const clone = this.template.content.cloneNode(true);
      clone.querySelector('.name').innerText = person;
      this.peopleList.appendChild(clone);
    });

    this.input.focus();
  },
};

// Initialize the module
peopleModule.init();
