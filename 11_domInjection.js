function insertHelloWorld(parent) {
    var p = document.createElement("p");
    p.innerText = "Hello World";
    parent.insertBefore(p, target.firstChild);
  }
  var content = document.getElementById("content");
  insertHelloWorld(content);
  