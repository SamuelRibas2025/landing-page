document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("mensagem").textContent = "Obrigado! Seus dados foram enviados.";
  // Aqui você pode integrar com alguma API de e-mail ou planilha futuramente
});
