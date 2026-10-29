const intro = document.getElementById("balloon-intro");
const balloonField = document.getElementById("balloonField");
const birthdayPage = document.getElementById("birthdayPage");
const codeScreen = document.getElementById("codeScreen");
const giftPage = document.getElementById("giftPage");
const openGift = document.getElementById("openGift");
const codeForm = document.getElementById("codeForm");
const giftCode = document.getElementById("giftCode");
const codeError = document.getElementById("codeError");

const balloonColors = ["#f4b8cc", "#f7d7e2", "#e9c5e8", "#f8e3ad", "#d9c9ee", "#efc6bc", "#f6dce6"];
for (let i = 0; i < 24; i++) {
  const balloon = document.createElement("span");
  balloon.className = "balloon";
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.setProperty("--w", `${42 + Math.random() * 45}px`);
  balloon.style.setProperty("--balloon", balloonColors[i % balloonColors.length]);
  balloon.style.setProperty("--duration", `${4.5 + Math.random() * 3}s`);
  balloon.style.setProperty("--delay", `${Math.random() * 1.5}s`);
  balloonField.appendChild(balloon);
}

function enterBirthday() {
  intro.classList.add("fade-out");
  window.setTimeout(() => {
    intro.style.display = "none";
    birthdayPage.classList.remove("hidden");
  }, 850);
}
document.getElementById("skipIntro").addEventListener("click", enterBirthday);
window.setTimeout(() => {
  if (!intro.classList.contains("fade-out")) enterBirthday();
}, 7200);

openGift.addEventListener("click", () => {
  birthdayPage.classList.add("hidden");
  codeScreen.classList.remove("hidden");
  giftCode.focus();
});
document.getElementById("backToBirthday").addEventListener("click", () => {
  codeScreen.classList.add("hidden");
  birthdayPage.classList.remove("hidden");
  codeError.textContent = "";
  giftCode.value = "";
});
codeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (giftCode.value === "7519") {
    codeScreen.classList.add("hidden");
    giftPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    codeError.textContent = "Mmm, ese no es el código. ¡Inténtalo otra vez! ♡";
    giftCode.value = "";
    giftCode.focus();
  }
});
