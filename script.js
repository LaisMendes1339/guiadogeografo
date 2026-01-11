// === DADOS ===
const conteudos = [
  // ... (mesmo array anterior) ...
  { tipo: 'academico', titulo: 'Geografia Física', texto: 'Estudo dos processos naturais: clima, relevo, solos, hidrografia e ecossistemas. Base para análise ambiental e riscos.' },
  { tipo: 'academico', titulo: 'Geografia Humana', texto: 'Investiga migrações, identidade cultural, urbanização e desigualdades sociais sob uma perspectiva espacial crítica.' },
  { tipo: 'academico', titulo: 'Geografia Agrária', texto: 'Analisa estrutura fundiária, reforma agrária, conflitos rurais e produção no campo brasileiro.' },
  { tipo: 'academico', titulo: 'Geografia Urbana', texto: 'Estuda segregação espacial, mobilidade, periferias e políticas de planejamento nas cidades.' },
  { tipo: 'academico', titulo: 'Geopolítica', texto: 'Explora poder, fronteiras, recursos estratégicos e narrativas territoriais no cenário global.' },
  { tipo: 'academico', titulo: 'Cartografia', texto: 'Representação do espaço com rigor técnico: escalas, projeções, simbologia e mapas temáticos.' },
  { tipo: 'pratico', titulo: 'Networking Profissional', texto: 'Como construir contatos reais com empresas, órgãos públicos e colegas — essencial para oportunidades.' },
  { tipo: 'pratico', titulo: 'Mercado Real', texto: 'Onde os geógrafos atuam hoje: consultorias ambientais, prefeituras, energia, logística e startups.' },
  { tipo: 'pratico', titulo: 'Primeiro Emprego', texto: 'Dicas práticas para conseguir seu primeiro trabalho mesmo sem experiência formal.' },
  { tipo: 'pratico', titulo: 'Especializações Valorizadas', texto: 'SIG, sensoriamento remoto, análise territorial e gestão ambiental são diferenciais no currículo.' },
  { tipo: 'pratico', titulo: 'Relatórios Técnicos', texto: 'Modelo usado no mercado: objetivo, metodologia, resultados, conclusões e anexos visuais.' },
  { tipo: 'pratico', titulo: 'Leitura de Editais', texto: 'Como interpretar editais públicos e montar propostas competitivas para projetos.' },
  { tipo: 'pratico', titulo: 'Ferramentas Autodidatas', texto: 'QGIS, Google Earth Pro, drones, KoboToolbox — aprenda sozinho com tutoriais online.' },
  { tipo: 'campo', titulo: '🌱 Planejamento', texto: 'Leitura prévia da área, definição de objetivos, checklist logístico e plano de segurança.' },
  { tipo: 'campo', titulo: '🦺 EPIs Essenciais', texto: 'Botas de borracha, colete refletivo, protetor solar, repelente e prancheta à prova d’água.' },
  { tipo: 'campo', titulo: '🛰️ Tecnologias', texto: 'GPS de precisão, apps móveis (Survey123, Kobo), drones autorizados e QGIS Mobile.' },
  { tipo: 'campo', titulo: '❌ Erros Comuns', texto: 'Nunca vá sem planejamento, subestime riscos climáticos ou ignore normas ambientais locais.' }
];

// === QUIZ: Dados e lógica ===
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

let currentQuestion = 0;
let answers = [];

// === DOM Elements ===
const contentGrid = document.getElementById('contentGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const buyBtn = document.getElementById('buyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const checkoutModal = document.getElementById('checkoutModal');
const whatsappModal = document.getElementById('whatsappModal');
const closeButtons = document.querySelectorAll('.close');

// === Funções principais ===
function renderCards(filter = 'all') {
  contentGrid.innerHTML = '';
  const itens = filter === 'all' 
    ? conteudos 
    : conteudos.filter(item => item.tipo === filter);
  
  itens.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.type = item.tipo;
    card.innerHTML = `<h3>${item.titulo}</h3><p>${item.texto}</p>`;
    contentGrid.appendChild(card);
  });
}

// === Quiz Functions ===
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
    // Calcular resultado
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

// === Event Listeners ===
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards(btn.dataset.filter);
  });
});

buyBtn.addEventListener('click', () => checkoutModal.classList.remove('hidden'));
downloadBtn.addEventListener('click', () => whatsappModal.classList.remove('hidden'));
closeButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.closest('.modal').classList.add('hidden');
  });
});

document.getElementById('confirmBuy').addEventListener('click', () => {
  alert('🎉 Obrigado! Em breve enviaremos o link do e-book via WhatsApp.');
  checkoutModal.classList.add('hidden');
});

// Inicializar
renderCards('all');
showQuiz();