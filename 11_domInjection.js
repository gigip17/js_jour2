function addHelloWorld(content) {
    let div = document.getElementById(content);
    let p = document.createElement('p');
    p.textContent = "Hello world";
    div.appendChild(p);
  }
  addHelloWorld('content');
