document.addEventListener("DOMContentLoaded", () => {

  // ===========================
  // FORMULÁRIO DE REGISTRO
  // ===========================
  const formRegistro = document.getElementById("formRegistro");
  if (formRegistro) {
    formRegistro.addEventListener("submit", (event) => {
      event.preventDefault(); // impede envio automático

      const email = document.getElementById("email-registro").value.trim();
      const senha = document.getElementById("senha-registro").value.trim();
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
      formRegistro.reset();
    });
  }

  // ===========================
  // FORMULÁRIO DE LOGIN
  // ===========================
  const formLogin = document.getElementById("formLogin");
  if (formLogin) {
    formLogin.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = document.getElementById("email-login").value.trim();
      const senha = document.getElementById("senha-login").value.trim();

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

      alert("Login realizado com sucesso!");
      formLogin.reset();
    });
  }

});
