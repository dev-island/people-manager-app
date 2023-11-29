const peopleModule = (function () {
  console.log('revealing module');

  const people = [];

  // Cache DOM
  const template = document.querySelector('#personTemplate');
  const addPerson = document.querySelector('#addPerson');
  const peopleList = document.querySelector('#peopleList');
  const input = document.querySelector('input[name=name]');

  // Setup Events
  addPerson.addEventListener('submit', onAddPerson);
  peopleList.addEventListener('click', onDelete);

  render();

  function onAddPerson(evt) {
    let name;
    if (typeof evt === 'string') {
      name = evt;
    } else {
      evt.preventDefault();
      const formData = new FormData(addPerson);
      name = formData.get('name');
    }

    people.push(name);
    input.value = '';

    render();
  }

  function onDelete(evt) {
    let name;
    if (typeof evt === 'string') {
      name = evt;
    } else {
      if (evt.target.classList.contains('del')) {
        name = evt.target.parentNode.querySelector('.name').innerText;
      }
    }
    const index = people.indexOf(name);
    people.splice(index, 1);
    render();
  }

  function render() {
    peopleList.innerHTML = '';

    people.forEach((person) => {
      const clone = template.content.cloneNode(true);
      clone.querySelector('.name').innerText = person;
      peopleList.appendChild(clone);
    });

    input.focus();
  }

  return { onAddPerson, onDelete };
})();
