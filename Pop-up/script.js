const open = document.getElementById("open")
const close = document.getElementById("close")
const container = document.getElementById("container")
open.addEventlistner("click" ,()=>
{
    container.classList.add("active");
});
close.addEventlistner("click" ,()=>
{
    container.classList.remove("active");
});
