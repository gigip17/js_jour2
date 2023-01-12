const button = document.querySelector("button");
button.addEventListener("click", function() { 
  setTimeout(function() { // utilise setTimeout pour déclencher une fonction après un certain temps
    const p = document.createElement("p"); 
    p.textContent = "Element ajouté après 2 secondes";
    document.body.appendChild(p); 
  }, 2000); // a la fin on rajoute le temps qu'on veux 
});