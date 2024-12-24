// Ein ganz simples JavaScript, um z.B. zwischen hellem und dunklem Modus zu wechseln
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
