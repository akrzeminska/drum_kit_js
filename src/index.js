import style from "./css/style.css";

import clap from './assets/sounds/clap.wav';
import hihat from './assets/sounds/hihat.wav';
import kick from './assets/sounds/kick.wav';
import openhat from './assets/sounds/openhat.wav';
import boom from './assets/sounds/boom.wav';
import ride from './assets/sounds/ride.wav';
import snare from './assets/sounds/snare.wav';
import tom from './assets/sounds/tom.wav';
import tink from './assets/sounds/tink.wav';

let drums = document.querySelectorAll('.drum');

drums.forEach(drum => {
    drum.addEventListener('click', () => {
       const shortcutContent = drum.querySelector('.shortcut').textContent;
        playSound(shortcutContent);
        playAnimation(shortcutContent);
    })
})

document.addEventListener('keypress', (event)=> {
    playSound(event.key);
    playAnimation(event.key);
})

const sounds = {
    w: clap,
    s: hihat,
    d: kick,
    f: openhat,
    g: boom,
    h: ride,
    j: snare,
    k: tom,
    l: tink
};

function playSound(key) {
    key = key.toLowerCase();
    const audio = new Audio(sounds[key]);
    audio.play();
}

export default function playAnimation (currentKey) {
    const animationTime = 250;
    currentKey = currentKey.toLowerCase();
    let activeButton = document.getElementById(currentKey);  
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, animationTime)
}
