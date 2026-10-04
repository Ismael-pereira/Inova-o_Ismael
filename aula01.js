const dobro = (n) => n * 2;

const precos = [10, 20, 30];
const comDesconto = precos.map((p) => p * 0.9);

const alunos = [
  { id: 1, nome: "Ana", nota: 8 },
  { id: 2, nome: "Bruno", nota: 5 }
];
const nomes = alunos.map((a) => a.nome);

const aprovados = alunos.filter((a) => a.nota >= 6);

const aluno = { id: 1, nome: "Ana", nota: 8 };
const { nome, nota } = aluno;

function saudacao({ nome }) {
  return "Olá, " + nome;
}

const a = [1, 2, 3];
const b = [...a, 4];

const corrigido = { ...aluno, nota: 10 };

export function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2);
}

export default function Botao() {
  return null;
}
