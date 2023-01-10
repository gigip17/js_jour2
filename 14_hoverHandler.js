const hoverme = document.querySelector('p');
const div = document.querySelector('div');

hoverme.addEventListener('mouseover', function() {
  const p = document.createElement('p');
  p.id = 'result';
  p.textContent = 'hovered';
  div.appendChild(p);
});