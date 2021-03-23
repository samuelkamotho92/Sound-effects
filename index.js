const sounds = [
    'applause',
    'boo',
    'gasp',
];
sounds.forEach((sound)=>{
console.log(sound);
const btn = document.createElement("button");
btn.innerText = sound;
btn.addEventListener("click",(e)=>{
    stopsong();
    document.getElementById(sound).play();
});
document.body.appendChild(btn);
});
function stopsong() {
    sounds.forEach((sound)=>{
        document.getElementById(sound).pause();
    })
};