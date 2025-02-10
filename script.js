window.onload = function () {
  const modal = document.getElementById("modal");
  const content = document.getElementById("content");

  // Aguardar 4 segundos antes de remover o modal
  setTimeout(() => {
    modal.style.opacity = "0"; // Inicia a transição de opacidade
    setTimeout(() => {
      modal.style.display = "none"; // Remove o modal da tela
      content.style.display = "block"; // Exibe o conteúdo principal
    }, 1000); // Tempo para a transição de opacidade
  }, 2000); // Tempo que o modal ficará visível (4 segundos)
};

document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Mais informações em breve!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".servicos");
  const elements = section.querySelectorAll("h2, .text-content, .read-more");

  const revealElements = () => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.2;

    if (sectionTop < triggerPoint) {
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add("reveal");
      });
      window.removeEventListener("scroll", revealElements); // Remove listener após ativar
    }
  };

  window.addEventListener("scroll", revealElements);
  revealElements(); // Executa ao carregar
});
