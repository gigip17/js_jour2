const button = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', function() {
  const p = document.createElement('p');
  p.id = 'result';
  p.innerHTML = 'clicked';
  div.appendChild(p);
});