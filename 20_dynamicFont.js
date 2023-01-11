
let input = document.getElementById("fontsize");
let elementChanger = document.getElementsByClassName("controlled_fontsize");
elementChanger = [...elementChanger]
input.addEventListener("input", function() {
  let fontSize = input.value;
  elementChanger.map( (element) =>element.style.fontSize = fontSize + "px");
});
