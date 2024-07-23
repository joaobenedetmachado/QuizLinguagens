var titulo = document.getElementById("perguntaTitulo");
var paragrafo = document.getElementById("perguntaParagrafo");
var sobre = document.getElementById("SobreResposta")
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var BackEndDev = 0
var FrontEndDev = 0
var GameDev = 0
var MobileDev = 0
var OutrosDev = 0

const perguntas = {
    pergunta1: {
        titulo: "Pergunta 1",
        paragrafo: "Qual aspecto da programação você mais se interessa?",
        p1: "a) Lógica e algoritmos",
        p2: "b) Design de interfaces e experiência do usuário",
        p3: "c) Gráficos e interações visuais",
        p4: "d) Integração de hardware e software",
    },
    pergunta2: {
        titulo: "Pergunta 2",
        paragrafo: "Em qual ambiente você prefere trabalhar?",
        p1: "a) Servidores e backend",
        p2: "b) Interfaces gráficas e web",
        p3: "c) Motores de jogo e gráficos 3D",
        p4: "d) Dispositivos móveis e tablets",
    },
    pergunta3: {
        titulo: "Pergunta 3",
        paragrafo: "Qual linguagem de programação você prefere ou gostaria de aprender mais?",
        p1: "a) Java, Python, C",
        p2: "b) JavaScript, HTML, CSS",
        p3: "c) C++, UnityScript, Unreal Engine",
        p4: "d) Swift, Kotlin, Objective-C",
    },
    pergunta4: {
        titulo: "Pergunta 4",
        paragrafo: "O que mais te atrai na área de desenvolvimento?",
        p1: "a) O desafio de otimizar e resolver problemas complexos",
        p2: "b) Criar interfaces intuitivas e amigáveis",
        p3: "c) Explorar novas tecnologias de gráficos e animações",
        p4: "d) Desenvolver aplicativos práticos e funcionais",
    },
};

const infoDesenvolvedores = {
    "BackEndDev": {
        titulo: "Desenvolvedor Back-end",
        sobre: "Os desenvolvedores Back-end são responsáveis pela lógica e funcionalidades do lado do servidor. Eles lidam com bancos de dados, estruturas de dados e lógica de negócios. Linguagens comuns incluem Python, Java, Node.js, e Ruby on Rails.",
        especificacoes: [
            "Construção e manutenção de APIs",
            "Integração com bancos de dados",
            "Segurança e performance de servidores"
        ]
    },
    "FrontEndDev": {
        titulo: "Desenvolvedor Front-end",
        sobre: "Os desenvolvedores Front-end se concentram na parte visual e interativa das aplicações web. Eles trabalham com HTML, CSS, JavaScript e frameworks como React, Angular e Vue.js para criar interfaces de usuário responsivas e amigáveis.",
        especificacoes: [
            "Design e implementação de interfaces de usuário",
            "Compatibilidade com diferentes navegadores e dispositivos",
            "Otimização de performance e experiência do usuário"
        ]
    },
    "GameDev": {
        titulo: "Desenvolvedor de Jogos",
        sobre: "Os desenvolvedores de jogos criam jogos para várias plataformas, como consoles, computadores e dispositivos móveis. Eles usam engines como Unity e Unreal Engine, além de linguagens como C++, C# e JavaScript para desenvolver jogos interativos e imersivos.",
        especificacoes: [
            "Desenvolvimento de gameplay e mecânicas de jogo",
            "Gráficos 2D/3D e efeitos especiais",
            "Otimização de desempenho para diferentes plataformas"
        ]
    },
    "MobileDev": {
        titulo: "Desenvolvedor Mobile",
        sobre: "Os desenvolvedores Mobile criam aplicativos para smartphones e tablets. Eles usam linguagens como Swift (iOS), Kotlin (Android) e frameworks como Flutter e React Native para desenvolver aplicativos nativos e multiplataforma.",
        especificacoes: [
            "Desenvolvimento de aplicativos nativos e multiplataforma",
            "Integração com APIs e serviços de nuvem",
            "Otimização de desempenho e usabilidade em dispositivos móveis"
        ]
    },
    "OutrosDev": {
        titulo: "Outros Tipos de Desenvolvedor",
        sobre: "Este perfil indica que você pode ter interesses variados ou habilidades que se aplicam a diferentes áreas de desenvolvimento. Isso pode incluir DevOps, IoT (Internet of Things), Realidade Aumentada (AR), entre outros.",
        especificacoes: [
            "Variedade de habilidades e conhecimentos em diferentes áreas de desenvolvimento",
            "Capacidade de adaptar-se a diferentes tecnologias e demandas",
            "Exploração de novas tendências e tecnologias emergentes"
        ]
    }
};

var perguntaAtual = 1;

if (perguntaAtual === 1) {
    titulo.innerHTML = perguntas.pergunta1.titulo;
    paragrafo.innerHTML = perguntas.pergunta1.paragrafo;
    btn1.innerHTML = perguntas.pergunta1.p1;
    btn2.innerHTML = perguntas.pergunta1.p2;
    btn3.innerHTML = perguntas.pergunta1.p3;
    btn4.innerHTML = perguntas.pergunta1.p4;
}

function voltarPergunta() {
    perguntaAtual = perguntaAtual - 1;
    console.log(perguntaAtual);

    if (perguntaAtual < 1) {
        perguntaAtual = 1;
    }

    ChecarPergunta();

    BackEndDev = 0;
    FrontEndDev = 0;
    GameDev = 0;
    MobileDev = 0;
    OutrosDev = 0;

    sobreResposta.innerHTML = '';

    titulo.style.display = 'block';
    paragrafo.style.display = 'block';
    btn1.style.display = 'inline-block';
    btn2.style.display = 'inline-block';
    btn3.style.display = 'inline-block';
    btn4.style.display = 'inline-block';
}

    

const proxPergunta = () => {
    perguntaAtual = perguntaAtual + 1;

    if (perguntaAtual > 4) {
        console.log("Quiz Concluído!");
        mostrarResultado(); 
        return;
    }

    ChecarPergunta();
}

function mostrarResultado() {
    var resultado = "";
    var tipoDesenvolvedor = "";
    titulo.style.display = 'none'
    paragrafo.style.display = 'none'
    btn1.style.display = 'none'
    btn2.style.display = 'none'
    btn3.style.display = 'none'
    btn4.style.display = 'none'

    if (BackEndDev > FrontEndDev && BackEndDev > GameDev && BackEndDev > MobileDev && BackEndDev > OutrosDev) {
        resultado = "Você seria um desenvolvedor Back-end!";
        tipoDesenvolvedor = "BackEndDev";
    } else if (FrontEndDev > BackEndDev && FrontEndDev > GameDev && FrontEndDev > MobileDev && FrontEndDev > OutrosDev) {
        resultado = "Você seria um desenvolvedor Front-end!";
        tipoDesenvolvedor = "FrontEndDev";
    } else if (GameDev > BackEndDev && GameDev > FrontEndDev && GameDev > MobileDev && GameDev > OutrosDev) {
        resultado = "Você seria um desenvolvedor de Jogos!";
        tipoDesenvolvedor = "GameDev";
    } else if (MobileDev > BackEndDev && MobileDev > FrontEndDev && MobileDev > GameDev && MobileDev > OutrosDev) {
        resultado = "Você seria um desenvolvedor Mobile!";
        tipoDesenvolvedor = "MobileDev";
    } else {
        resultado = "Você tem um perfil diversificado de desenvolvimento!";
        tipoDesenvolvedor = "OutrosDev";
    }

    var sobreResposta = document.getElementById("SobreResposta");
    sobreResposta.innerHTML = `
        <h3>${infoDesenvolvedores[tipoDesenvolvedor].titulo}</h3>
        <p>${infoDesenvolvedores[tipoDesenvolvedor].sobre}</p>
        <h4>Especificações:</h4>
        <ul>
            <li>${infoDesenvolvedores[tipoDesenvolvedor].especificacoes[0]}</li>
            <li>${infoDesenvolvedores[tipoDesenvolvedor].especificacoes[1]}</li>
            <li>${infoDesenvolvedores[tipoDesenvolvedor].especificacoes[2]}</li>
        </ul>
    `;
}


function ChecarPergunta() {
        titulo.innerHTML = perguntas[`pergunta${perguntaAtual}`].titulo;
        paragrafo.innerHTML = perguntas[`pergunta${perguntaAtual}`].paragrafo;
        btn1.innerHTML = perguntas[`pergunta${perguntaAtual}`].p1;
        btn2.innerHTML = perguntas[`pergunta${perguntaAtual}`].p2;
        btn3.innerHTML = perguntas[`pergunta${perguntaAtual}`].p3;
        btn4.innerHTML = perguntas[`pergunta${perguntaAtual}`].p4;
}

function selecionarResposta(resposta) {
    
    if (perguntaAtual == 1) {
        if (resposta == 1) {
            BackEndDev++
            MobileDev++
        }
        if (resposta == 2) {
            FrontEndDev++
            MobileDev++
        }
        if (resposta == 3) {
            GameDev++
        }
        if (resposta == 4) {
            OutrosDev++
        }
    }
    if (perguntaAtual == 2) {
        if (resposta == 1) {
            BackEndDev++
        }
        if (resposta == 2) {
            FrontEndDev++
        }
        if (resposta == 3) {
            GameDev++
        }
        if (resposta == 4) {
            MobileDev++
        }
    }
    if (perguntaAtual == 3) {
        if (resposta == 1) {
            OutrosDev++
            BackEndDev++
        }
        if (resposta == 2) {
            FrontEndDev++
        }
        if (resposta == 3) {
            GameDev++
        }
        if (resposta == 4) {
            MobileDev++
        }
    }
    if (perguntaAtual == 4) {
        if (resposta == 1) {
            OutrosDev++
            BackEndDev++
        }
        if (resposta == 2) {
            FrontEndDev++
        }
        if (resposta == 3) {
            GameDev++
        }
        if (resposta == 4) {
            MobileDev++
        }
    }

    proxPergunta();
}

ChecarPergunta();