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
    "The cabbage sways in doubt—wait a moment."
];

// Add tap/click event listener
const cabbage = document.getElementById('elder-cabbage');
const answerDiv = document.getElementById('answer');

cabbage.addEventListener('click', () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    answerDiv.textContent = randomAnswer;

    // Show answer with fade-in effect
    answerDiv.style.opacity = 1;

    // Reset opacity after a few seconds
    setTimeout(() => {
        answerDiv.style.opacity = 0;
    }, 4000); // Answer fades out after 4 seconds for added suspense
});
