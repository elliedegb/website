document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");

  if (!toggle || !icon) return;

  function setIcon(isDark) {
    icon.src = isDark ? "images/sun.webp" : "images/moon.png";
  }

  const isDark = localStorage.getItem("theme") === "dark";
  if (isDark) document.body.classList.add("dark-mode");

  setIcon(isDark);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const nowDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", nowDark ? "dark" : "light");

    setIcon(nowDark);
  });
});