
function tagSelector() {
  let element = document.getElementsByTagName("button")[0];
  return element;
}

//create an error in web console
//but required for unit test
//you can ignore error message "Uncaught ReferenceError: module is not defined"
module.exports = tagSelector;
