function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nome: "Ana" });
      } else {
        reject("id inválido");
      }
    }, 1000);
  });
}

async function mostrarUsuario(id) {
  try {
    const usuario = await buscarUsuario(id);
    console.log("Usuário carregado com sucesso:", usuario);
  } catch (erro) {
    console.log("Não foi possível buscar o usuário:", erro);
  }
}

mostrarUsuario(1);

async function carregarPiadas() {
  try {
    const resposta = await fetch("https://official-joke-api.appspot.com/random_joke");
    const dados = await resposta.json();
    console.log("Piada do dia:", dados);
  } catch (erro) {
    console.log("Erro ao carregar piada:", erro);
  }
}
