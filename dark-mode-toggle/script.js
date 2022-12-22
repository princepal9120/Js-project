const toggle = document.getElementById("toggle");
toggle.addEventListener('change',(e) =>{
    document.body.classList.toggle("dark", e.target.checked)
    document.body.style.background = randomBg();
})
// function randomBg(){
//     return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`;
// }