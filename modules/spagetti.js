const people = [];
const template = document.querySelector('#personTemplate');
const addPerson = document.querySelector('#addPerson');
const peopleList = document.querySelector('#peopleList');
const input = document.querySelector('input[name=name]');

addPerson.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(addPerson);
  people.push(formData.get('name'));
  input.value = '';

  peopleList.innerHTML = '';

  people.forEach((person) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.name').innerText = person;
    peopleList.appendChild(clone);
    input.focus();
  });
});

peopleList.addEventListener('click', (e) => {
  if (e.target.classList.contains('del')) {
    const index = people.indexOf(
      e.target.parentNode.querySelector('.name').innerText
    );

    people.splice(index, 1);
    e.target.parentNode.remove();
  }
});

console.log('spagetti');
