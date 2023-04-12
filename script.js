/*
----LOGIC----
Step 1. Select all drums
Step 2. Add btn press/click event listner to all 
Step 3. Play sound when btn press/click
Step 4. Animate
*/

// Step 1: Get all drums
let drums = document.querySelectorAll('.drum');

// Step 2.1: Add clik event listener
drums.forEach(drum => {
    drum.addEventListener('click', () => {
       playSound(drum.querySelector('.shortcut').textContent)
       playAnimation(drum.querySelector('.shortcut').textContent)
    })
})

// Step 2.2: Add keypress event listener
document.addEventListener('keypress', (event)=> {
    playSound(event.key);
    playAnimation(event.key)
})

// Step 3: Play sound when event is triggeredwss
function playSound(drum) {
    drum = drum.toLowerCase();
    switch (drum) {
        case "w":
            var audio =  new Audio("assets/sounds/clap.wav")
            audio.play()
            break;
        case "s":
            var audio =  new Audio("assets/sounds/hihat.wav")
            audio.play()
            break;
        case "d":
            var audio =  new Audio("assets/sounds/kick.wav")
            audio.play()
            break;
        case "f":
            var audio =  new Audio("assets/sounds/openhat.wav")
            audio.play()
            break;
        case "g":
            var audio =  new Audio("assets/sounds/boom.wav")
            audio.play()
            break;
        case "h":
            var audio =  new Audio("assets/sounds/ride.wav")
            audio.play()
            break;
        case "j":
            var audio =  new Audio("assets/sounds/snare.wav")
            audio.play()
            break;
        case "k":
            var audio =  new Audio("assets/sounds/tom.wav")
            audio.play()
            break;
        case "l":
            var audio =  new Audio("assets/sounds/tink.wav")
            audio.play()
            break;

        default:
            console.log(drum)
            break;
    }
}

// Step 4: Animate active button
function playAnimation (currentKey) {
    console.log(currentKey);
    currentKey = currentKey.toLowerCase();
    let activeButton = document.getElementById(currentKey); 

    console.log(activeButton);
    activeButton.classList.add("pressed")
    
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 250)
}