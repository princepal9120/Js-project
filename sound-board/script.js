const sounds = [ "applause", "boo", "gasp", "tada", "victory", "wrong", "music", "poo"]; 
sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
    btn.addEventListener('click', ()=>{
        document.getElementById(sound).play();
    });
    document.body.appendChild(btn);
});

function stopSongs(){
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.onpause();
        song.currenTime =0;
    })

}