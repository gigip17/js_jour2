const submitButton = document.querySelector("button#submit");
const formElements = document.querySelectorAll("input");
const result = document.querySelector("p#result");

submitButton.addEventListener("click", function() {
  let values = [];
  for (let i = 0; i < formElements.length; i++) {
    let name = formElements[i].name;
    let value = formElements[i].value;
    values.push(`${name}: ${value}`);
  }
  result.textContent = values.join(", ");
});
