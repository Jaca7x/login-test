// Lista de usuários com páginas específicas
const usuariosValidos = [
  { usuario: "Miguel Costa", senha: "1234", pagina: "conteudo-miguel.html" },
  { usuario: "Nathan Domingues", senha: "5678", pagina: "conteudo-nathan.html" },
  { usuario: "Yago Blunk", senha: "abcd", pagina: "conteudo-yago.html" }
];

// Seleciona os elementos do DOM
const usuario = document.getElementById("login");
const senha = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

// Adiciona o evento de clique ao botão
loginBtn.addEventListener("click", function (event) {
  // Impede o comportamento padrão do botão (se ele estiver dentro de um formulário)
  event.preventDefault();

  // Verifica se os campos estão vazios
  if (usuario.value === "" || senha.value === "") {
    alert("Os campos usuário e senha são obrigatórios");
    return; // Interrompe a execução do restante do código
  }

  // Verifica se o usuário e a senha estão corretos
  const usuarioValido = usuariosValidos.find(
    (u) => u.usuario === usuario.value && u.senha === senha.value
  );

  if (usuarioValido) {
    alert("Login realizado com sucesso");
    window.location.href = usuarioValido.pagina; // Redireciona para a página específica
  } else {
    alert("Usuário ou senha incorretos");
  }
});
