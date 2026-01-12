// === DADOS EXISTENTES ===
const dados = {
  academico: [
    { titulo: "Geografia Física", texto: "Estudo de clima, relevo, solos e hidrografia. Foco em processos naturais e análise ambiental." },
    { titulo: "Geografia Humana", texto: "Relações sociedade-espaço, migração, urbanização e cultura. Base teórica crítica." },
    { titulo: "Geografia Agrária", texto: "Estrutura fundiária, reforma agrária, conflitos rurais e produção no campo." },
    { titulo: "Geografia Urbana", texto: "Dinâmica das cidades, segregação espacial, mobilidade e planejamento urbano." },
    { titulo: "Geopolítica", texto: "Poder, território, fronteiras e relações internacionais sob ótica geográfica." },
    { titulo: "Cartografia", texto: "Representação do espaço, escalas, projeções e introdução a mapas temáticos." }
  ],
  pratico: [
    "Networking profissional (como construir contatos reais)",
    "Mercado de trabalho real (onde os geógrafos atuam hoje)",
    "Como conseguir seu primeiro trabalho (sem experiência)",
    "Especializações valorizadas (SIG, meio ambiente, gestão territorial)",
    "Escrita de relatório técnico (modelo usado por empresas)",
    "Leitura e interpretação de editais públicos",
    "Ferramentas que você aprende sozinho (QGIS, Google Earth, drones)"
  ],
  campo: [
    {
      tipo: "planejamento",
      titulo: "🌱 Planejamento",
      itens: ["Leitura prévia da área", "Definição de objetivos", "Checklist logístico", "Plano de segurança"]
    },
    {
      tipo: "equipamento",
      titulo: "🦺 EPIs Essenciais",
      itens: ["Botas de borracha", "Colete refletivo", "Protetor solar", "Repelente", "Prancheta à prova d’água"]
    },
    {
      tipo: "tecnologia",
      titulo: "🛰️ Tecnologias",
      itens: ["GPS de precisão", "Apps móveis (Survey123, Kobo)", "Drones autorizados", "Google Earth Pro", "QGIS Mobile"]
    },
    {
      tipo: "erros",
      titulo: "❌ Erros Comuns",
      itens: ["Ir sem planejamento", "Subestimar riscos climáticos", "Ignorar normas ambientais locais"]
    }
  ]
};

// === QUIZ DATA ===
const quizData = [
  {
    question: "Qual atividade te atrai mais?",
    options: [
      { text: "Mapear áreas de risco ambiental", type: "ambiente" },
      { text: "Entrevistar moradores de favelas", type: "social" },
      { text: "Criar mapas interativos no computador", type: "tecnologia" },
      { text: "Planejar uso do solo rural", type: "campo" }
    ]
  },
  {
    question: "Seu maior talento é:",
    options: [
      { text: "Observar detalhes na paisagem", type: "ambiente" },
      { text: "Ouvir e entender histórias locais", type: "social" },
      { text: "Organizar e analisar dados", type: "tecnologia" },
      { text: "Resolver problemas no terreno", type: "campo" }
    ]
  },
  {
    question: "Seu ambiente ideal de trabalho:",
    options: [
      { text: "Laboratório ou escritório com foco ambiental", type: "ambiente" },
      { text: "Escola, ONG ou comunidade", type: "social" },
      { text: "Startup, empresa de tecnologia ou home office", type: "tecnologia" },
      { text: "Campo, fazenda ou unidade de conservação", type: "campo" }
    ]
  }
];

const perfis = {
  ambiente: {
    title: "Geógrafo Ambiental",
    description: "Você se conecta com a natureza e busca soluções para crises ecológicas. Atua em licenciamento, conservação e gestão de recursos."
  },
  social: {
    title: "Geógrafo Social",
    description: "Seu foco é a justiça espacial e os direitos humanos. Ideal para educação, movimentos sociais e políticas públicas."
  },
  tecnologia: {
    title: "Geógrafo Analista de Dados",
    description: "Transforma dados em mapas inteligentes. Alta demanda em empresas de logística, energia e governo."
  },
  campo: {
    title: "Geógrafo de Campo",
    description: "Prático e observador, você coleta dados onde a ação acontece. Essencial em agronegócio, mineração e pesquisa."
  }
};

// === JORNADA: DO CAMPUS AO CAMPO ===
const jornadaDados = [
  {
    id: 'campus',
    titulo: 'Campus',
    descricao: 'A graduação oferece uma base teórica sólida, mas muitas vezes desconectada da realidade profissional.',
    aprendizados: [
      'O que a graduação ensina',
      'Limitações da teoria',
      'Importância da base conceitual'
    ]
  },
  {
    id: 'planejamento',
    titulo: 'Planejamento',
    descricao: 'Antes de sair para o campo, é essencial definir objetivos claros e preparar-se tecnicamente.',
    aprendizados: [
      'Definição de objetivos',
      'Estudo prévio da área',
      'Escolha de métodos e equipamentos'
    ]
  },
  {
    id: 'campo',
    titulo: 'Campo',
    descricao: 'Momento de coleta direta, observação crítica e adaptação às condições reais do território.',
    aprendizados: [
      'Coleta de dados',
      'Uso de EPIs',
      'Técnicas de observação e registro'
    ]
  },
  {
    id: 'pos-campo',
    titulo: 'Pós-campo',
    descricao: 'Transformar dados brutos em conhecimento útil para análise, relatórios e tomada de decisão.',
    aprendizados: [
      'Organização dos dados',
      'Análise e interpretação',
      'Relatórios e tomada de decisão'
    ]
  }
];

// === ELEMENTOS ===
let currentQuestion = 0;
let answers = [];
let etapaAtiva = 'campus';

const navLinks = document.querySelectorAll('.navbar-menu a');
const buyBtn = document.getElementById('buyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const verEbooksBtn = document.getElementById('verEbooks');
const checkoutModal = document.getElementById('checkoutModal');
const whatsappModal = document.getElementById('whatsappModal');
const closeButtons = document.querySelectorAll('.close');

// === FUNÇÕES ===
function renderAcademico() {
  const container = document.getElementById('academicoCards');
  container.innerHTML = '';
  dados.academico.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card-academico';
    card.innerHTML = `<h3>${item.titulo}</h3><p>${item.texto}</p>`;
    container.appendChild(card);
  });
}

function renderPratico() {
  const container = document.getElementById('praticoItems');
  container.innerHTML = '';
  dados.pratico.forEach((texto, i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.textContent = texto;
    item.style.animationDelay = `${i * 0.1}s`;
    container.appendChild(item);
  });
}

function renderCampo() {
  const container = document.getElementById('campoGroups');
  container.innerHTML = '';
  dados.campo.forEach(grupo => {
    const div = document.createElement('div');
    div.className = `campo-card ${grupo.tipo}`;
    const itensHtml = grupo.itens.map(i => `<li>• ${i}</li>`).join('');
    div.innerHTML = `<h3>${grupo.titulo}</h3><ul>${itensHtml}</ul>`;
    container.appendChild(div);
  });
}

function showQuiz() {
  const quizEl = document.getElementById('quizContent');
  if (currentQuestion < quizData.length) {
    const q = quizData[currentQuestion];
    let optionsHtml = q.options.map((opt, i) => 
      `<div class="quiz-option" data-index="${i}">${opt.text}</div>`
    ).join('');
    
    quizEl.innerHTML = `
      <div class="quiz-question">
        <h3>Pergunta ${currentQuestion + 1} de ${quizData.length}</h3>
        <p>${q.question}</p>
        <div class="quiz-options">${optionsHtml}</div>
        <button class="quiz-btn" id="nextBtn" disabled>Próximo</button>
      </div>
    `;
    
    document.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        document.getElementById('nextBtn').disabled = false;
        const index = parseInt(opt.dataset.index);
        answers[currentQuestion] = q.options[index].type;
      });
    });
    
    document.getElementById('nextBtn').addEventListener('click', () => {
      currentQuestion++;
      showQuiz();
    });
  } else {
    const counts = {};
    answers.forEach(a => counts[a] = (counts[a] || 0) + 1);
    const resultType = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    const perfil = perfis[resultType];
    
    quizEl.innerHTML = `
      <div class="quiz-result">
        <h3>🎉 ${perfil.title}</h3>
        <p>${perfil.description}</p>
        <button class="quiz-restart" id="restartQuiz">Refazer Quiz</button>
      </div>
    `;
    
    document.getElementById('restartQuiz').addEventListener('click', () => {
      currentQuestion = 0;
      answers = [];
      showQuiz();
    });
  }
}

function renderTimeline() {
  const timelineContainer = document.getElementById('timelineContainer');
  timelineContainer.innerHTML = '';
  jornadaDados.forEach((etapa, index) => {
    const div = document.createElement('div');
    div.className = `etapa ${etapa.id === etapaAtiva ? 'ativa' : ''}`;
    div.dataset.id = etapa.id;
    div.innerHTML = `
      <div class="etapa-circle">${index + 1}</div>
      <div class="etapa-label">${etapa.titulo}</div>
    `;
    div.addEventListener('click', () => mudarEtapa(etapa.id));
    timelineContainer.appendChild(div);
  });
}

function atualizarConteudo(id) {
  const etapa = jornadaDados.find(e => e.id === id);
  if (!etapa) return;

  const itensHtml = etapa.aprendizados.map(item => `<li>${item}</li>`).join('');
  const contentDiv = document.getElementById('jornadaContent');
  contentDiv.innerHTML = `
    <h3>${etapa.titulo}</h3>
    <p>${etapa.descricao}</p>
    <ul>${itensHtml}</ul>
  `;
}

function mudarEtapa(id) {
  etapaAtiva = id;
  renderTimeline();
  atualizarConteudo(id);
}

// === FAQ INTERATIVO ===
document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      
      // Fecha todos
      faqQuestions.forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.hidden = true;
      });
      
      // Abre o clicado
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });
});

// === EVENTOS ===
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Atualiza classe 'active' no menu
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

buyBtn.addEventListener('click', () => checkoutModal.classList.remove('hidden'));
downloadBtn.addEventListener('click', () => whatsappModal.classList.remove('hidden'));
verEbooksBtn.addEventListener('click', () => {
  document.querySelector('.ebook-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.closest('.modal').classList.add('hidden');
  });
});

document.getElementById('confirmBuy')?.addEventListener('click', () => {
  alert('🎉 Obrigado! Em breve enviaremos o link do e-book via WhatsApp.');
  checkoutModal.classList.add('hidden');
});

// === INICIALIZAÇÃO ===
document.addEventListener('DOMContentLoaded', () => {
  renderAcademico();
  renderPratico();
  showQuiz();
  renderTimeline();
  atualizarConteudo(etapaAtiva);

  // Define o primeiro link como ativo
  if (navLinks.length > 0) {
    navLinks[0].classList.add('active');
  }
});
