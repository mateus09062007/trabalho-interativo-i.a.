const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter, ele tambem gera imagens e audios hiper-realistas. Qual é o seu primeiro pensamento?",
        alternativas: [
            "isso é assustador!",
            "isso é assustador!"
        ]
    },

    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligencia Artificial (I.A.), uma professora de tecnologia da escola, decidiu fazer uma sequência de aulas sobre essa tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre a I.A. em sala de aula. Qual atitude você toma?",
        alternativas: [
            "Ultiliza uma ferramenta de busca na internet que utiliza a I.A. para que ela o ajude a encontrar informações relevantes para o trabalho e explique em uma linguagem que facilite o entendimento.",
            "Escreve o trabalho com base nas conversas que teve com os colegas, algumas pesquisas que teve na internet e conhecimentos próprios sobre o tema."
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e a escrita. Nessa conversa foi levantado também um ponto muito importante, como a I.A. impacta o trabalho do futuro. Nesse debate, como voce se posiciona?",
        alternativas: [
            "Defende a ideia de que a I.A. pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            "Me preocupo com as pessoas que perderão seus empregos para máquinas e defende a importância de proteger do trabalhadores."
        ]
    },

    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse oque pensa sobre a I.A., e agora?",
        alternativas: [
            "Criar uma imagem utilizando uma plataforma de design como o Paint.",
            "criar uma imagem utilizando um gerador de imagem de ia."
        ]
    },

    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma I.A. O problema é que está totalmente igual ao do chat oque você faz?",
        alternativas: [
            "Escrever comandos para o chat é uma forma de contribuir para o trabalho, por isso não é um problema utilizar o texto inteiro.",
            "O chat pode ser uma tecnologia muito avancada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial"
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas=document.createElement("button");
        botaoAlternativas.textContent=alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
