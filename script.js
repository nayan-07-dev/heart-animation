// Floating hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "float 5s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 300);

// Floating animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-110vh); opacity: 0; }
}`;
document.head.appendChild(style);

// 💋 Blowing kisses
setInterval(() => {
    const kiss = document.createElement("div");
    kiss.className = "kiss";
    kiss.innerHTML = "💋";
    kiss.style.left = Math.random() * 100 + "vw";
    kiss.style.bottom = "50px";
    document.body.appendChild(kiss);

    setTimeout(() => kiss.remove(), 3000);
}, 1200);

// 👆 Click heart burst
document.addEventListener("click", (e) => {
    const heart = document.createElement("div");
    heart.className = "click-heart";
    heart.innerHTML = "❤️";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
});

// 🎵 Music toggle
const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");

muteBtn.addEventListener("click", () => {
    music.muted = !music.muted;
    muteBtn.innerHTML = music.muted ? "🔇" : "🔊";
});
