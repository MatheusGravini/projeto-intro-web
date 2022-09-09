// FILMES DE TERROR STREAMING

//1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
//Você precisará criar pelo menos:
//* uma característica String;
//* uma característica Number;
//* uma característica Boolean;

const FilmesTotais = ["O Iluminado", "O Exorcista", "Possessão"]
const TempoGeralDosFilmes = [146, 132, 124 ]
const gêneroSlasher = ["Pânico", "A Hora do Pesadelo", "Chuck"]
const notaImdb = [8.4, 8.1, 7.3]

//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const Filme1 = FilmesTotais[0]
const TempoDoFilme1 = TempoGeralDosFilmes[0]
const gêneroSobrenatural1 = gêneroSlasher.includes("O Iluminado")

const Filme2 = FilmesTotais[1]
const TempoDoFilme2 = TempoGeralDosFilmes[1]
const gêneroSobrenatural2 = gêneroSlasher.includes("O Exorcista")

const Filme3 = FilmesTotais[2]
const TempoDoFilme3 = TempoGeralDosFilmes[2]
const gêneroSobrenatural3 = gêneroSlasher.includes("Possessão")

/*console.log(Filme1)
console.log(Filme2)
console.log(Filme3)

console.log(TempoDoFilme1)
console.log(TempoDoFilme2)
console.log(TempoDoFilme3)


console.log(gêneroSobrenatural1)
console.log(gêneroSobrenatural2)
console.log(gêneroSobrenatural3) */


//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;


const tempofilmesmédias =  ((TempoGeralDosFilmes[0] + TempoGeralDosFilmes[1] + TempoGeralDosFilmes[2])/3)
console.log("O tempo médio dos filmes em minutos:",tempofilmesmédias)

console.log("==================")

//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const verificGêneros = gêneroSobrenatural1 && gêneroSobrenatural2 && gêneroSobrenatural3
console.log("Todos os filmes fazem parte do gênero slacher:",verificGêneros)

console.log("==================")

//5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

//Estou criando no momento uma nova característica para o item que eu criei. Será um array chamado notaImdb. const notaImdb = [8.4, 8.1, 7.3]


//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
  //1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
/*FULANO
idade: 33
verificou email?: false
projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] */


console.log("Nome:",Filme1.toUpperCase())
console.log("Tempo:",TempoDoFilme1,"minutos")
console.log("Faz parte do gênero slacher:",gêneroSobrenatural1)
console.log("Nota IMDB:",notaImdb[0])

console.log("==================")

console.log("Nome:",Filme2.toUpperCase())
console.log("Tempo:",TempoDoFilme2,"minutos")
console.log("Faz parte do gênero slacher:",gêneroSobrenatural2)
console.log("Nota IMDB:",notaImdb[1])

console.log("==================")

console.log("Nome:",Filme3.toUpperCase())
console.log("Tempo:",TempoDoFilme3,"minutos")
console.log("Faz parte do gênero slacher:",gêneroSobrenatural3)
console.log("Nota IMDB:",notaImdb[2])

console.log("==================")




                                                                                                                                                        

