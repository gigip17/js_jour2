function insertHelloWorld() {
    var content = document.getElementById("content");
    var p = document.createElement("p");
    p.innerText = "hello world";
    content.insertBefore(p, content.firstChild);
  }
  insertHelloWorld();