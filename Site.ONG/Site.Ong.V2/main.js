// Menu responsivo
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu-list");

toggle.addEventListener("click", () => {
  const isExpanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !isExpanded);
  menu.classList.toggle("show");
});

// Botão "voltar ao topo"
const btnTopo = document.getElementById("btn-topo");
window.addEventListener("scroll", () => {
  btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});