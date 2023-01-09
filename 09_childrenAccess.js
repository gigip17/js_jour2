function childrenAcess() {
    let firstItem = document.getElementById("menu").children[0];
    return firstItem.innerHTML;
  }
  console.log(childrenAcess());
  module.export=childrenAcess