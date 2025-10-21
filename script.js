document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formRegistro");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // impede o envio automático

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const termos = document.getElementById("termos").checked;

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Digite um email válido!");
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres!");
      return;
    }

    if (!termos) {
      alert("Você deve aceitar os termos para continuar!");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    form.reset();
  });
});
