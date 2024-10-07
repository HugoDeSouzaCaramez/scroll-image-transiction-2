// Script para ativar as seções conforme o usuário rola a página
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const scrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop - sectionHeight / 3) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});
