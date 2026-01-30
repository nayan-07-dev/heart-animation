// =========================
// Floating hearts
// =========================
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

// =========================
// Blowing kisses 💋
// =========================
setInterval(() => {
    const kiss = document.createElement("div");
    kiss.className = "kiss";
    kiss.innerHTML = "💋";
    kiss.style.left = Math.random() * 100 + "vw";
    kiss.style.bottom = "50px";
    document.body.appendChild(kiss);

    setTimeout(() => kiss.remove(), 3000);
}, 1200);

// =========================
// Click heart burst
// =========================
document.addEventListener("click", (e) => {
    const clickHeart = document.createElement("div");
    clickHeart.className = "click-heart";
    clickHeart.innerHTML = "❤️";
    clickHeart.style.left = e.clientX + "px";
    clickHeart.style.top = e.clientY + "px";
    document.body.appendChild(clickHeart);

    setTimeout(() => clickHeart.remove(), 1000);
});

// =========================
// Floating sparkles ✨
// =========================
setInterval(() => {
    const spark = document.createElement("div");
    spark.textContent = "✨";
    spark.style.position = "absolute";
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.top = "100vh";
    spark.style.fontSize = "20px";
    spark.style.animation = "spark-float 4s linear";
    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 4000);
}, 600);

// =========================
// Music button 🎵
// =========================
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

btn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        btn.textContent = "⏸️ Pause Music";
    } else {
        music.pause();
        btn.textContent = "▶️ Play Music";
    }
});
