function getInputValue() {
    var inputElement = document.getElementById('input');
      return inputElement.value;
  }
console.log(getInputValue());
module.exports = getInputValue;