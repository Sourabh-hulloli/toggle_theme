const toggleBtn = document.querySelector(".toggle-theme");
const body = document.body;

function toggleTheme() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    toggleBtn.textContent = "Dark Mode";
  } else {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "Light Mode";
  }
}

toggleBtn.addEventListener("click", toggleTheme);
