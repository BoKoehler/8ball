const answers = [
    "Yes, the cabbage approves.",
    "No, not today.",
    "The roots are unclear. Try again later.",
    "It is certain, like the rising sun.",
    "Doubt lingers in the leaves.",
    "Ask the wind, not the cabbage.",
    "The harvest looks promising.",
    "Seek guidance elsewhere.",
    "The cabbage is not ready to answer.",
    "The cabbage foresees great fortune.",
    "Tread carefully, the soil is uncertain.",
    "All signs point to the harvest moon.",
    "A shadow falls on your request.",
    "The leaves whisper a hesitant 'yes.'",
    "Beware, for danger grows like weeds.",
    "The answer lies deep within the earth.",
    "The cabbage suggests patience.",
    "The stars align in your favor.",
    "The cabbage nods in agreement.",
    "A storm brews, it is not the time.",
    "The answer is hidden within the cabbage's heart.",
    "Fortune smiles upon your quest.",
    "The roots grow strong; success is near.",
    "Only time will reveal the answer.",
    "The winds of change are blowing—be ready.",
    "The cabbage sees a clear path ahead.",
    "The leaves are torn—ask again soon.",
    "A vine of fortune wraps around you.",
    "Proceed with caution, the soil is dry.",
    "Your destiny is intertwined with the harvest.",
    "A bountiful crop awaits you.",
    "The cabbage sways in doubt—wait a moment.",
];

// Function to pick a random answer
function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return randomIndex;
}

// Function to play audio
function playAudio(index) {
    if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio.currentTime = 0;
    }

    const audio = new Audio(`./audio/${index + 1}.mp3`);
    window.currentAudio = audio;
    audio.play().catch(error => {
        console.error("Error playing audio:", error);
    });
}

// Event listener for cabbage click
document.getElementById('elder-cabbage').addEventListener('click', function () {
    const answerIndex = getRandomAnswer();
    const answer = answers[answerIndex];
    const answerElement = document.querySelector('.answer');
    
    // Update the text
    answerElement.textContent = answer;
    
    // Play corresponding voice line
    playAudio(answerIndex);

    // Show the answer with animation
    answerElement.classList.add('show');
});