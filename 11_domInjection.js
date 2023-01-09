function insertHelloWorld() {
    var content = document.getElementById("content");
    var p = document.createElement("p");
    p.innerText = "hello World";
    content.insertBefore(p, content.firstChild);
  }
  insertHelloWorld();