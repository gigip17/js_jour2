
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const button = document.querySelector("button");
button.addEventListener("click", () => {
    sleep(2000).then(() => {
        const p = document.createElement("p"); 
        p.textContent = "Element ajouté après 2 secondes";
        document.body.appendChild(p);
    });
});
// function myFunctionAsync(){

// }
