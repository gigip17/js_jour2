function classSelector() {
    const leTroisieme = document.querySelectorAll('.x-wing');
    return leTroisieme[2].innerText;
  }
  
  console.log(classSelector());
module.exports = classSelector;