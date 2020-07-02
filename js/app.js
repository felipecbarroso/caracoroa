function pegar(id){
return document.getElementById(id);
}
pegar("botaoJogar").onclick =() =>{
const jogadorCara = pegar("jogadorCara").value;
const jogadorCoroa = pegar("jogadorCoroa").value;

if (jogadorCara == "" || jogadorCoroa == ""){
  return alert("Insira os nomes");
}

// document.getElementById("botaoJogar").onclick = () => {
  const valor = Math.random();

  let imagem = "";
  let nomeVencedor = "";
  if (valor > 0.5) {
    imagem = "coroa";
    nomeVencedor = jogadorCoroa;
  } else {
    imagem = "cara";
    nomeVencedor = jogadorCara;
  }

  const caminhoImagem = `assets/images/${imagem}.png`;
  document.getElementById("imagemMoeda").src = caminhoImagem;
  alert (nomeVencedor + " ganhou");
};

let nome = "Felipe";
var nomeAluno = "Felipe";

// let alunoA = "lucas";
// let alunoB = "João";

// let nomeAlunos = ["Lucas", "João", "Pedro", "Gustavo", "Luiz"];

// i = 0 - 0 + 1

// i = i + 1 -> i = 0 + 1 = 1
// i = 1 + 1 = 2
// i = 2 + 1 = 3

// for (let i = 0; i <= 4; i++) {
//   console.log("Nome do aluno: " + nomeAlunos[i]);
// }

// let aprovado = true;

// let contador = 0;

// while (contador < 3) {
//   alert("Teste");
//   contador++;
// }
