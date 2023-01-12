const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const button = document.querySelector("button");
button.addEventListener("click", async () => {
    await sleep(2000);
    const p = document.createElement("p"); 
    p.textContent = "Element ajouté après 2 secondes";
    document.body.appendChild(p);
});