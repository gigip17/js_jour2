function insertHelloWorld() {
    var content = document.getElementById("content");
    var p = document.createElement("p");
    p.innerText = "Hello World";
    content.insertBefore(p, content.firstChild);
  }
  insertHelloWorld();