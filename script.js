let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let question = document.getElementById("question");
let bear = document.getElementById("bear");

let noClicks = 0;
let messages = [
    "Are you sure? 😢",
    "Think about it again... 💔",
    "You really don't love me? 😭",
    "You are breaking my heart... 💔🥺",
    "Please say yes... 🥺",
    "You're really rejecting me? 😞",
    "I'm gonna cry... 😭",
    "My heart is shattering... 💔",
    "You're my only love... 🥹",
    "Don't make me sad forever... 💔🥺",
    "Last chance, please say yes! 😣💕"
];

noButton.addEventListener("click", () => {
    if (noClicks < messages.length) {
        noButton.innerText = messages[noClicks]; // Update "No" button text
        noButton.style.transform = `scale(${1 - noClicks * 0.1})`; // Shrink "No" button
        yesButton.style.transform = `scale(${1 + noClicks * 0.15})`; // Enlarge "Yes" button
        noClicks++;
    } else {
        noButton.style.display = "none"; // Hide "No" button
        question.style.display = "none"; // Hide the Valentine question

        // ✅ Force the "Yes" button to update
        yesButton.innerText = "You have no choice now! 😆";
        yesButton.style.transform = "scale(2)"; // Make button bigger
        yesButton.style.backgroundColor = "#32CD32"; // Change button color
        yesButton.style.padding = "15px 30px"; // Increase size for visibility

        // ✅ Ensure it updates immediately
        setTimeout(() => {
            yesButton.innerText = "You have no choice now! 😆";
        }, 50);
    }
});

yesButton.addEventListener("click", () => {
    bear.src = "bear-kiss.mp4"; // ✅ Change video to kissing bears
    bear.load(); // ✅ Reload the new video
    bear.play(); // ✅ Auto-play the new video
    question.style.display = "none"; // ✅ Hide the Valentine question
    noButton.style.display = "none"; // ✅ Hide the "No" button
    yesButton.style.display = "none"; // ✅ Hide the "Yes" button after clicking
});
