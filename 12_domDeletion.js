var element = document.getElementById("content");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}