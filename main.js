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
]

