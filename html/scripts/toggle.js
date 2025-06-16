document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("body");
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const nameText = document.getElementById("name-text");
  const subtitleText = document.getElementById("subtitle-text");
  const aboutText = document.getElementById("about-text");
  const footerText = document.getElementById("footer-text");
  const blocks = document.querySelectorAll("[data-block]");

  const toggleBtn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const text = document.getElementById("themeText");

  const githubLight = document.getElementById("github-light");
  const githubDark = document.getElementById("github-dark");

  const light = {
    body: "#F4F4F4",
    text: "#2D2D2D",
    header: "#FFFFFF",
    card: "#EAEAEA",
    border: "#D0D0D0",
    subtitle: "#777",
    icon: "🌞",
    label: "Modo claro"
  };

  const dark = {
    body: "#2B2B2B",
    text: "#F0F0F0",
    header: "#3A3A3A",
    card: "#3A3A3A",
    border: "#959595",
    subtitle: "#959595",
    icon: "🌙",
    label: "Modo oscuro"
  };

  function applyMode(mode) {
    const theme = mode === "dark" ? dark : light;

    body.style.backgroundColor = theme.body;
    body.style.color = theme.text;
    header.style.backgroundColor = theme.header;
    footer.style.backgroundColor = theme.header;
    header.style.borderColor = "#D99058";
    footer.style.borderColor = "#D99058";

    nameText.style.color = theme.text;
    subtitleText.style.color = theme.subtitle;
    aboutText.style.color = theme.text;
    footerText.style.color = theme.subtitle;

    blocks.forEach(el => {
      el.style.backgroundColor = theme.card;
      el.style.borderColor = theme.border;
      el.style.color = theme.text;
    });

    // Cambiar icono y texto del botón
    icon.textContent = theme.icon;

    // Fade out y cambio de texto del botón
    text.style.opacity = 0;
    setTimeout(() => {
      text.textContent = theme.label;
      text.style.opacity = 1;
    }, 200);

    // Cambiar iconos GitHub según modo
    if (mode === "dark") {
      githubLight.classList.add("hidden");
      githubDark.classList.remove("hidden");
    } else {
      githubLight.classList.remove("hidden");
      githubDark.classList.add("hidden");
    }
  }

  function toggleMode() {
    const current = localStorage.getItem("mode") || "dark"; // modo oscuro predeterminado
    const newMode = current === "light" ? "dark" : "light";
    localStorage.setItem("mode", newMode);
    applyMode(newMode);
  }

  // Inicializar modo guardado o modo oscuro por defecto
  const saved = localStorage.getItem("mode") || "dark";
  applyMode(saved);

  // Asignar toggle
  toggleBtn.addEventListener("click", toggleMode);
});