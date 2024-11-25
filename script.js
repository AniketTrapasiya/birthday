const wishes = [
  "Bayiiii... ",
  "Pada hari yang sangat istimewa ini... ",
  "Saya ingin memberitahukan sesuatu dari hati saya...",
  "Anda membawa begitu banyak kebahagiaan untuk setiap orang di sekitar Anda! ",
  "Senyuman Anda mencerahkan bahkan hari-hari yang paling gelap! ",
  "Kesabaran Anda membuat dunia ini menjadi tempat yang lebih baik! ",
  "Selamat Ulang Tahun! ",
  "Namun sebelum kita lanjutkan...",
  "Saya punya pertanyaan spesial untuk Anda... "
];
const gfChat = [
  "Hafsah, cinta saya untuk Anda tidak terbatas...",
  "Di mata Anda, saya melihat masa depan saya, saya melihat selamanya...",
  "Setiap momen dengan Anda adalah hadiah, setiap ciuman adalah mimpi yang terwujud...",
  "Saya cinta bagaimana kita dapat menjembatani jarak di antara kita hanya dengan sekali pandang, sekali sentuhan, sekali janji yang bisik...",
  "Saya cinta bagaimana kita dapat membuat satu sama lain merasa dilihat dan didengar, bahkan ketika kita berada di tempat yang sangat jauh...",
  "Saya cinta Anda lebih dari kata-kata yang dapat saya ucapkan, lebih dari puisi yang dapat saya tuliskan...",
  "Anda adalah rumah saya, tempat saya berlindung, saya mencintai Anda selamanya...",
];
const bestFriendMessages = [
  "Moonlight, cinta saya, jantung saya berdetak untuk Anda saja...",
  "Di pelukan Anda, saya menemukan ketenangan saya, saya menemukan keselamatan saya...",
  "Setiap momen tanpa Anda adalah seumur hidup, setiap detik adalah keabadian...",
  "Saya cinta bagaimana kita dapat melewati waktu dan ruang, bagaimana kita dapat bersama-sama walaupun kita berada di tempat yang sangat jauh...",
  "Saya cinta bagaimana kita dapat membuat satu sama lain merasa utuh, bahkan ketika kita hancur berkeping-keping...",
  "Saya cinta Anda lebih dari hidup saya sendiri, lebih dari napas saya sendiri...",
  "Anda adalah segalanya untuk saya, saya mencintai Anda selamanya...",
  "Maukah Anda menjadi pacar saya, pasangan saya, teman saya seumur hidup?",
];

function createStars() {
  const starsContainer = document.createElement("div");
  starsContainer.className = "stars";
  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--duration", `${Math.random() * 3 + 1}s`);
    starsContainer.appendChild(star);
  }
  document.body.appendChild(starsContainer);
}

function createEmoji() {
  const emojis = ["💖", "⭐", "✨", "🎉", "🎂", "🎈"];
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.top = "-50px";
  document.body.appendChild(emoji);
  const animation = emoji.animate(
    [
      {
        transform: "translateY(0) rotate(0deg)"
      },
      {
        transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360
          }deg)`
      }
    ],
    {
      duration: 3000,
      easing: "linear"
    }
  );
  animation.onfinish = () => emoji.remove();
}

function loveEmoji() {
  const emojis = ["💖", "💗", "🥰", "💝", "💞", "🥰", "💖", "💗", "🥰", "💝", "💞", "🥰"]
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.top = "-50px";
  emoji.style.width = "50px";
  emoji.style.height = "50px";
  document.body.appendChild(emoji);
  const animation = emoji.animate(
    [
      {
        transform: "translateY(0) rotate(0deg)"
      },
      {
        transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360
          }deg)`
      }
    ],
    {
      duration: 3000,
      easing: "linear"
    }
  );
  animation.onfinish = () => emoji.remove();
}
function stopAllMusic() {
  const audios = ["bgMusic", "gfMusic", "bestFriendMusic"];
  audios.forEach((id) => {
    const audio = document.getElementById(id);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}

function playAudio(audioId) {
  const audio = document.getElementById(audioId);
  if (audio) {
    audio.volume = 0.5;
    audio.play().catch((err) => console.log("Audio play failed:", err));
  }
}
let emojiInterval;
async function typeWriter(text) {
  const wishesElement = document.getElementById("wishes");
  wishesElement.style.opacity = 1;
  wishesElement.innerHTML = "";
  wishesElement.className = "wishes neon-text";
  for (let char of text) {
    wishesElement.innerHTML += char;
    await new Promise((resolve) => setTimeout(resolve, 70));
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
let isMuted = false;
const muteButton = document.getElementById("muteButton");
muteButton.addEventListener("click", () => {
  const audios = ["bgMusic", "gfMusic", "bestFriendMusic"];
  isMuted = !isMuted;
  audios.forEach((id) => {
    const audio = document.getElementById(id);
    if (audio) {
      audio.muted = isMuted;
    }
  });
  // Update button text
  muteButton.textContent = isMuted ? "🔇" : "🔊";
});
async function makeChoice(choice) {
  clearInterval(emojiInterval);
  const wishesElement = document.getElementById("wishes");
  document.getElementById("choices").style.display = "none";
  stopAllMusic();

  document.body.classList.remove("love-theme");
  if (choice === "gf") {
    document.body.classList.remove("sad-theme");
    document.body.classList.add("love-theme");
    const gfAudio = document.getElementById("gfMusic");
    gfAudio.muted = isMuted;
    try {
      const playPromise = gfAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Audio play failed:", error);
        });
      }
    } catch (err) {
      console.log("Audio play failed:", err);
    }
    emojiInterval = setInterval(loveEmoji, 200);
    for (let message of gfChat) {
      await typeWriter(message);
    }
    setTimeout(() => {
      setTimeout(() => {
        window.open(
          "https://t.me/@art260301",
          "_blank"
        );
        wishesElement.innerHTML =
          "Check your Telegram, ratuku! 📱✨<br>💖I am there💖";
      }, 1000);
    }, 2000);
  } else {
    document.body.classList.add("sad-theme");
    const bestFriendAudio = document.getElementById("bestFriendMusic");
    bestFriendAudio.muted = isMuted;
    try {
      const playPromise = bestFriendAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Audio play failed:", error);
        });
      }
    } catch (err) {
      console.log("Audio play failed:", err);
    }
    for (let message of bestFriendMessages) {
      await typeWriter(message);
    }
    document.getElementById("choices").innerHTML = `
                    <button class="choice-btn" onclick="makeChoice('gf')">Girl Friend</button>
                `;
    document.getElementById("choices").style.display = "block";
    document.querySelector(".choice-btn").style.opacity = 1;

  }
}
document.getElementById("startBtn").addEventListener("click", async () => {
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("wishesContainer").classList.remove("hidden");
  const bgAudio = document.getElementById("bgMusic");
  bgAudio.muted = isMuted;
  try {
    const playPromise = bgAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Audio play failed:", error);
      });
    }
  } catch (err) {
    console.log("Audio play failed:", err);
  }
  emojiInterval = setInterval(createEmoji, 300);
  for (let wish of wishes) {
    await typeWriter(wish);
  }
  document.getElementById("choices").classList.remove("hidden");
  document.querySelectorAll(".choice-btn").forEach((btn) => {
    btn.style.opacity = 1;
  });
});
document.addEventListener("click", async function initAudio() {
  const audios = ["bgMusic", "gfMusic", "bestFriendMusic"];
  for (let id of audios) {
    const audio = document.getElementById(id);
    try {
      await audio.play();
      audio.pause();
      audio.currentTime = 0;
    } catch (err) {
      console.log("Audio initialization failed:", err);
    }
  }
  document.removeEventListener("click", initAudio);
});

createStars();
