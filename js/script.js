// Toggle kelas active
const menu = document.querySelector(".menu");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  menu.classList.toggle("active");
};

// Untuk menghilangkan hamburger menu tanpa klik icon

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !menu.contains(e.target))
    menu.classList.remove("active");
});
