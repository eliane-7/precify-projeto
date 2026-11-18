/* ==============================
   PRECIFY APP — DEMO SCRIPT
   Demo interativa e pré-configurada:
   tudo funciona com cards clicáveis,
   sem digitação de dados.
   ============================== */

// =====================
// MOCK DATA
// =====================

const AVATAR_COLORS = {
    green: '#193F34',
    gold: '#D9A441',
    teal: '#2E7D78',
    purple: '#6B5B95',
    coral: '#E8745C',
    blue: '#4A90D9',
    brown: '#8B6F47',
    rose: '#C75B7A'
};

// Serviços populares pré-configurados (cards da home do contratante)
const QUICK_SERVICES = [
    {
        id: 'qs1',
        label: 'Arte para Instagram',
        desc: 'Posts e stories',
        category: 'design',
        complexity: 'Intermediária',
        price: 'R$ 30 - R$ 50',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>'
    },
    {
        id: 'qs2',
        label: 'Edição de Reels',
        desc: 'Vídeos curtos',
        category: 'video',
        complexity: 'Simples',
        price: 'R$ 25 - R$ 40',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>'
    },
    {
        id: 'qs3',
        label: 'Texto para blog',
        desc: 'Artigos e posts',
        category: 'writing',
        complexity: 'Simples',
        price: 'R$ 20 - R$ 30',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>'
    },
    {
        id: 'qs4',
        label: 'Ajuste de site',
        desc: 'CSS e responsividade',
        category: 'programming',
        complexity: 'Intermediária',
        price: 'R$ 30 - R$ 50',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
    }
];

const MOCK_FREELANCERS = [
    {
        id: 'fl1',
        name: 'Aline Souza',
        skill: 'Designer Gráfica & Redatora',
        avatar: 'A',
        avatarColor: AVATAR_COLORS.gold,
        rating: 4.9,
        reviews: 12,
        completedJobs: 8,
        responseTime: '1h',
        level: 'gold',
        category: 'design',
        services: [
            { name: 'Arte para redes sociais', price: 'R$ 30 - R$ 50', complexity: 'Intermediária' },
            { name: 'Logotipo simples', price: 'R$ 75 - R$ 100', complexity: 'Avançada' },
            { name: 'Capa para Instagram', price: 'R$ 20 - R$ 30', complexity: 'Simples' }
        ],
        reviewsList: [
            { name: 'Carlos M.', stars: 5, text: 'Excelente trabalho, entrega rápida e muito criativa!' },
            { name: 'Juliana R.', stars: 5, text: 'Super atenciosa, fez exatamente o que eu precisava.' },
            { name: 'Pedro L.', stars: 4, text: 'Bom trabalho, comunicação ótima.' }
        ]
    },
    {
        id: 'fl2',
        name: 'Bruno Carvalho',
        skill: 'Editor de Vídeo',
        avatar: 'B',
        avatarColor: AVATAR_COLORS.teal,
        rating: 4.7,
        reviews: 8,
        completedJobs: 6,
        responseTime: '2h',
        level: 'silver',
        category: 'video',
        services: [
            { name: 'Edição de vídeo curto (Reels)', price: 'R$ 25 - R$ 40', complexity: 'Simples' },
            { name: 'Edição de vídeo YouTube', price: 'R$ 50 - R$ 75', complexity: 'Intermediária' },
            { name: 'Pós-produção completa', price: 'R$ 100 - R$ 150', complexity: 'Avançada' }
        ],
        reviewsList: [
            { name: 'Marina S.', stars: 5, text: 'Editou meu vídeo de forma perfeita, super recomendado!' },
            { name: 'Rafael T.', stars: 4, text: 'Bom trabalho, entregou no prazo.' }
        ]
    },
    {
        id: 'fl3',
        name: 'Carla Mendes',
        skill: 'Redatora e Copywriter',
        avatar: 'C',
        avatarColor: AVATAR_COLORS.purple,
        rating: 5.0,
        reviews: 15,
        completedJobs: 11,
        responseTime: '30min',
        level: 'diamond',
        category: 'writing',
        services: [
            { name: 'Texto para landing page', price: 'R$ 30 - R$ 50', complexity: 'Intermediária' },
            { name: 'Artigo de blog (500 palavras)', price: 'R$ 20 - R$ 30', complexity: 'Simples' },
            { name: 'Estratégia de conteúdo completa', price: 'R$ 100+', complexity: 'Avançada' }
        ],
        reviewsList: [
            { name: 'Ana P.', stars: 5, text: 'Textos incríveis, superou minhas expectativas!' },
            { name: 'Lucas F.', stars: 5, text: 'Profissional excepcional, recomendo demais.' },
            { name: 'Bia S.', stars: 5, text: 'Melhor redatora que já contratei.' }
        ]
    },
    {
        id: 'fl4',
        name: 'Diego Ramos',
        skill: 'Desenvolvedor Web',
        avatar: 'D',
        avatarColor: AVATAR_COLORS.blue,
        rating: 4.8,
        reviews: 7,
        completedJobs: 5,
        responseTime: '1h',
        level: 'gold',
        category: 'programming',
        services: [
            { name: 'Landing page HTML/CSS', price: 'R$ 50 - R$ 100', complexity: 'Intermediária' },
            { name: 'Bug fix ou ajuste CSS', price: 'R$ 30 - R$ 50', complexity: 'Simples' },
            { name: 'Site completo responsivo', price: 'R$ 100 - R$ 200+', complexity: 'Avançada' }
        ],
        reviewsList: [
            { name: 'Fernanda L.', stars: 5, text: 'Código limpo e bem documentado, ótimo trabalho!' },
            { name: 'Téo A.', stars: 4, text: 'Bom desenvolvedor, cumpriu o prazo.' }
        ]
    },
    {
        id: 'fl5',
        name: 'Eliza Nunes',
        skill: 'Social Media & Marketing',
        avatar: 'E',
        avatarColor: AVATAR_COLORS.coral,
        rating: 4.6,
        reviews: 6,
        completedJobs: 4,
        responseTime: '3h',
        level: 'silver',
        category: 'marketing',
        services: [
            { name: 'Calendário de conteúdo', price: 'R$ 40 - R$ 50', complexity: 'Intermediária' },
            { name: 'Gestão de Instagram (semanal)', price: 'R$ 75 - R$ 100', complexity: 'Avançada' },
            { name: 'Post simples', price: 'R$ 20 - R$ 30', complexity: 'Simples' }
        ],
        reviewsList: [
            { name: 'Gabi R.', stars: 5, text: 'Gestão incrível, seguidores cresceram muito!' },
            { name: 'Rui M.', stars: 4, text: 'Bom trabalho com o calendário de posts.' }
        ]
    }
];

// Oportunidades para o contratado (solicitações de clientes)
const MOCK_OPPORTUNITIES = [
    {
        id: 'opp1',
        title: 'Criar 3 artes para Instagram',
        description: 'Preciso de 3 artes para posts de Instagram da minha loja de roupas. Temas: promoção, novidade e interação com seguidores.',
        budget: 'R$ 30 - R$ 50',
        budgetValue: 40,
        category: 'design',
        complexity: 'Intermediária',
        client: { name: 'Eliane Martins', avatar: 'E', avatarColor: AVATAR_COLORS.green },
        deadline: '3 dias',
        location: 'Remoto',
        urgent: false,
        status: 'available'
    },
    {
        id: 'opp2',
        title: 'Editar vídeo de 2 minutos',
        description: 'Tenho um vídeo bruto de 5 minutos que precisa ser editado para 2 minutos, com cortes, transições e música de fundo.',
        budget: 'R$ 50 - R$ 75',
        budgetValue: 60,
        category: 'video',
        complexity: 'Intermediária',
        client: { name: 'Marcos Silva', avatar: 'M', avatarColor: AVATAR_COLORS.brown },
        deadline: '5 dias',
        location: 'Remoto',
        urgent: false,
        status: 'available'
    },
    {
        id: 'opp3',
        title: 'Texto para página de vendas',
        description: 'Preciso de um texto persuasivo para a landing page do meu curso online. Público: empreendedores iniciantes.',
        budget: 'R$ 75 - R$ 100',
        budgetValue: 85,
        category: 'writing',
        complexity: 'Avançada',
        client: { name: 'Patrícia Lima', avatar: 'P', avatarColor: AVATAR_COLORS.rose },
        deadline: '2 dias',
        location: 'Remoto',
        urgent: true,
        status: 'available'
    },
    {
        id: 'opp4',
        title: 'Ajustar CSS de site responsivo',
        description: 'Meu site tem alguns problemas de responsividade no mobile. Preciso que alguém ajuste o CSS para funcionar bem em todos os tamanhos de tela.',
        budget: 'R$ 30 - R$ 50',
        budgetValue: 40,
        category: 'programming',
        complexity: 'Intermediária',
        client: { name: 'Rui Costa', avatar: 'R', avatarColor: AVATAR_COLORS.blue },
        deadline: '1 dia',
        location: 'Remoto',
        urgent: true,
        status: 'available'
    },
    {
        id: 'opp5',
        title: 'Calendário de conteúdo mensal',
        description: 'Preciso de um calendário de conteúdo para Instagram e Facebook da minha marca de cosméticos. São 20 posts no total.',
        budget: 'R$ 40 - R$ 50',
        budgetValue: 50,
        category: 'marketing',
        complexity: 'Intermediária',
        client: { name: 'Sônia Alves', avatar: 'S', avatarColor: AVATAR_COLORS.purple },
        deadline: '7 dias',
        location: 'Remoto',
        urgent: false,
        status: 'available'
    }
];

// Solicitações do contratante (já feitas)
const MOCK_CLIENT_REQUESTS = [
    {
        id: 'req1',
        title: 'Logo para minha startup',
        freelancer: MOCK_FREELANCERS[0],
        price: 'R$ 85',
        status: 'in-progress',
        statusLabel: 'Em andamento',
        date: '12/11',
        progress: 60,
        description: 'Criar um logotipo moderno para minha startup de tecnologia.'
    },
    {
        id: 'req2',
        title: 'Texto para blog',
        freelancer: MOCK_FREELANCERS[2],
        price: 'R$ 25',
        status: 'completed',
        statusLabel: 'Concluído',
        date: '08/11',
        progress: 100,
        description: 'Artigo de blog sobre tendências de marketing digital.'
    },
    {
        id: 'req3',
        title: 'Edição de Reels',
        freelancer: MOCK_FREELANCERS[1],
        price: 'R$ 35',
        status: 'delivered',
        statusLabel: 'Entregue',
        date: '15/11',
        progress: 100,
        description: 'Edição de um Reels de 30 segundos para Instagram.'
    }
];

// Serviços do contratado (aceitos/em andamento)
const MOCK_FREELANCER_SERVICES = [
    {
        id: 'fs1',
        title: 'Logo para startup',
        client: { name: 'Eliane Martins', avatar: 'E', avatarColor: AVATAR_COLORS.green },
        price: 'R$ 85',
        status: 'active',
        statusLabel: 'Em andamento',
        progress: 60,
        deadline: '2 dias restantes'
    },
    {
        id: 'fs2',
        title: 'Capa de Facebook',
        client: { name: 'Jorge T.', avatar: 'J', avatarColor: AVATAR_COLORS.brown },
        price: 'R$ 25',
        status: 'active',
        statusLabel: 'Em andamento',
        progress: 30,
        deadline: '4 dias restantes'
    },
    {
        id: 'fs3',
        title: 'Identidade visual completa',
        client: { name: 'Marina F.', avatar: 'M', avatarColor: AVATAR_COLORS.rose },
        price: 'R$ 150',
        status: 'completed',
        statusLabel: 'Concluído',
        progress: 100,
        deadline: 'Entregue em 05/11'
    },
    {
        id: 'fs4',
        title: '3 posts para Instagram',
        client: { name: 'Paulo R.', avatar: 'P', avatarColor: AVATAR_COLORS.blue },
        price: 'R$ 45',
        status: 'completed',
        statusLabel: 'Concluído',
        progress: 100,
        deadline: 'Entregue em 28/10'
    }
];

// Atividades do contratante — cards interativos pré-configurados
const MOCK_ACTIVITIES_CLIENT = [
    {
        id: 'act-c1',
        type: 'message',
        title: 'Nova mensagem de Aline Souza',
        desc: '"Já estou trabalhando no logo. Logo envio uma prévia."',
        time: '14:32',
        action: () => openChatWithPerson(MOCK_FREELANCERS[0])
    },
    {
        id: 'act-c2',
        type: 'delivery',
        title: 'Reels entregue por Bruno Carvalho',
        desc: 'Toque para ver a solicitação e confirmar a entrega.',
        time: '09:30',
        action: () => switchScreen('requests')
    },
    {
        id: 'act-c3',
        type: 'status',
        title: 'Logo em andamento',
        desc: 'Aline atualizou o progresso para 60%.',
        time: 'Ontem',
        action: () => switchScreen('requests')
    },
    {
        id: 'act-c4',
        type: 'payment',
        title: 'Pagamento aprovado',
        desc: 'Pagamento de R$ 25,00 realizado com sucesso.',
        time: '08/11',
        action: () => showToast('Pagamento registrado na carteira.')
    }
];

// Atividades do contratado — cards interativos pré-configurados
const MOCK_ACTIVITIES_FREELANCER = [
    {
        id: 'act-f1',
        type: 'message',
        title: 'Nova mensagem de Jorge T.',
        desc: '"Quando fica pronta a capa?" — toque para responder.',
        time: '11:00',
        action: () => openChatWithPerson({ name: 'Jorge Tavares', avatar: 'J', avatarColor: AVATAR_COLORS.brown })
    },
    {
        id: 'act-f2',
        type: 'opportunity',
        title: 'Nova oportunidade disponível',
        desc: '"Criar 3 artes para Instagram" — R$ 30 - R$ 50.',
        time: '10:15',
        action: () => switchScreen('opportunities')
    },
    {
        id: 'act-f3',
        type: 'status',
        title: 'Prazo se aproximando',
        desc: 'Logo para startup: 2 dias restantes.',
        time: '08:00',
        action: () => switchScreen('my-services')
    },
    {
        id: 'act-f4',
        type: 'payment',
        title: 'Pagamento recebido',
        desc: 'Você recebeu R$ 40,50 (3 posts para Instagram).',
        time: 'Ontem',
        action: () => showToast('Saldo atualizado nos seus ganhos.')
    }
];

// Ícones por tipo de atividade
const ACTIVITY_ICONS = {
    message: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
    delivery: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    status: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    payment: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
    opportunity: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7L9 18l-5-5"/><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>'
};

const ACTIVITY_COLORS = {
    message: '#4A90D9',
    delivery: '#00695C',
    status: '#E8920C',
    payment: '#4CAF8A',
    opportunity: '#D9A441'
};

// Estado do app
let currentMode = 'client';
let currentScreen = 'home';
let activeCategory = 'all';
let activeServiceTab = 'active';
let selectedFreelancer = null;
let selectedServiceIndex = 0;
let selectedOpportunity = null;
let activeChatData = null;
let suggestCategory = null;

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', () => {
    renderQuickServices();
    renderFreelancers(MOCK_FREELANCERS);
    renderOpportunities(MOCK_OPPORTUNITIES);
    renderClientRequests(MOCK_CLIENT_REQUESTS);
    renderFreelancerServices(MOCK_FREELANCER_SERVICES);
    renderActivities('client', MOCK_ACTIVITIES_CLIENT);
    renderActivities('freelancer', MOCK_ACTIVITIES_FREELANCER);
    setupEventListeners();
});

// =====================
// RENDER: Quick services (cards pré-configurados)
// =====================
function renderQuickServices() {
    const container = document.getElementById('quick-services');
    if (!container) return;

    container.innerHTML = QUICK_SERVICES.map(qs => `
        <button class="quick-service-card" data-quick="${qs.id}">
            <span class="quick-service-card__icon">${qs.icon}</span>
            <span class="quick-service-card__label">${qs.label}</span>
            <span class="quick-service-card__desc">${qs.desc}</span>
        </button>
    `).join('');

    container.querySelectorAll('.quick-service-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-quick');
            const qs = QUICK_SERVICES.find(q => q.id === id);
            if (!qs) return;

            // Destaca o card selecionado
            container.querySelectorAll('.quick-service-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            // Mostra a análise de preço (IA) pré-configurada
            suggestCategory = qs.category;
            document.getElementById('suggest-task').textContent = qs.label;
            document.getElementById('suggest-price-range').textContent = qs.price;
            document.getElementById('suggest-complexity').textContent = 'Complexidade: ' + qs.complexity;
            const result = document.getElementById('price-suggest-result');
            result.removeAttribute('hidden');
            result.classList.remove('pop');
            void result.offsetWidth; // reinicia a animação
            result.classList.add('pop');
        });
    });
}

// =====================
// RENDER: Freelancers
// =====================
function renderFreelancers(list) {
    const container = document.getElementById('freelancer-list');
    if (!container) return;

    const filtered = activeCategory === 'all'
        ? list
        : list.filter(f => f.category === activeCategory);

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M9 9h.01M15 9h.01"/></svg>
                <p>Nenhum profissional encontrado nesta categoria.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(fl => `
        <div class="freelancer-card" data-freelancer="${fl.id}" role="button" tabindex="0">
            <div class="freelancer-card__avatar" style="background:${fl.avatarColor}">${fl.avatar}</div>
            <div class="freelancer-card__body">
                <div class="freelancer-card__name">${fl.name}</div>
                <div class="freelancer-card__skill">${fl.skill}</div>
                <div class="freelancer-card__meta">
                    <span class="freelancer-card__rating">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        ${fl.rating} (${fl.reviews})
                    </span>
                    <span class="freelancer-card__price">a partir de ${fl.services[0].price.split(' - ')[0]}</span>
                </div>
            </div>
            <div class="freelancer-card__badge badge-${fl.level}">
                <span class="score-badge score-badge--${fl.level}">✦</span>
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.freelancer-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-freelancer');
            const fl = MOCK_FREELANCERS.find(f => f.id === id);
            if (fl) openFreelancerModal(fl);
        });
    });
}

// =====================
// RENDER: Opportunities
// =====================
function renderOpportunities(list) {
    const container = document.getElementById('opportunity-list');
    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7L9 18l-5-5"/><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
                <p>Nenhuma oportunidade aberta no momento.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map(opp => `
        <div class="opportunity-card" data-opp="${opp.id}" role="button" tabindex="0">
            <div class="opportunity-card__header">
                <span class="opportunity-card__title">${opp.title}</span>
                <span class="opportunity-card__budget">${opp.budget}</span>
            </div>
            <p class="opportunity-card__desc">${opp.description}</p>
            <div class="opportunity-card__footer">
                <div class="opportunity-card__client">
                    <div class="opportunity-card__client-avatar" style="background:${opp.client.avatarColor}">${opp.client.avatar}</div>
                    <span>${opp.client.name}</span>
                </div>
                <div style="display:flex;gap:6px;">
                    ${opp.urgent ? '<span class="opportunity-card__tag opportunity-card__tag--urgent">Urgente</span>' : ''}
                    <span class="opportunity-card__tag">${opp.deadline}</span>
                </div>
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.opportunity-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-opp');
            const opp = MOCK_OPPORTUNITIES.find(o => o.id === id);
            if (opp) openOpportunityModal(opp);
        });
    });
}

// =====================
// RENDER: Client Requests
// =====================
function renderClientRequests(list) {
    const container = document.getElementById('client-requests-list');
    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
                <p>Você ainda não tem solicitações.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map(req => `
        <div class="request-card">
            <div class="request-card__header">
                <span class="request-card__title">${req.title}</span>
                <span class="request-card__status status-${req.status}">${req.statusLabel}</span>
            </div>
            <div class="request-card__freelancer">
                <div class="request-card__freelancer-avatar" style="background:${req.freelancer.avatarColor}">${req.freelancer.avatar}</div>
                <div class="request-card__freelancer-info">
                    <strong>${req.freelancer.name}</strong>
                    <span>${req.freelancer.skill} - ${req.date}</span>
                </div>
            </div>
            <div class="request-card__price">${req.price}</div>
            ${req.progress < 100 ? `
                <div class="service-card__progress">
                    <div class="service-card__progress-label">
                        <span>Progresso</span>
                        <span>${req.progress}%</span>
                    </div>
                    <div class="service-card__progress-bar">
                        <div class="service-card__progress-fill" style="width:${req.progress}%"></div>
                    </div>
                </div>
            ` : ''}
            <div class="request-card__actions">
                <button class="request-card__btn btn-outline" data-req-chat="${req.id}">Mensagem</button>
                ${req.status === 'delivered' ? `<button class="request-card__btn btn-gold" data-req-confirm="${req.id}">Confirmar entrega</button>` : ''}
                ${req.status === 'in-progress' ? `<button class="request-card__btn btn-primary" data-req-detail="${req.id}">Ver detalhes</button>` : ''}
                ${req.status === 'completed' ? `<button class="request-card__btn btn-gold" data-req-rate="${req.id}">Avaliar</button>` : ''}
            </div>
        </div>
    `).join('');

    // Ações dos cards (delegação dentro do container)
    container.querySelectorAll('[data-req-chat]').forEach(btn => {
        btn.addEventListener('click', () => {
            const req = list.find(r => r.id === btn.getAttribute('data-req-chat'));
            if (req) openChatWithPerson(req.freelancer);
        });
    });
    container.querySelectorAll('[data-req-confirm]').forEach(btn => {
        btn.addEventListener('click', () => confirmDelivery(btn.getAttribute('data-req-confirm')));
    });
    container.querySelectorAll('[data-req-detail]').forEach(btn => {
        btn.addEventListener('click', () => showToast('Aguardando entrega do profissional'));
    });
    container.querySelectorAll('[data-req-rate]').forEach(btn => {
        btn.addEventListener('click', () => showToast('Avaliação enviada! Obrigado.'));
    });
}

// =====================
// RENDER: Freelancer Services
// =====================
function renderFreelancerServices(list) {
    const container = document.getElementById('freelancer-services-list');
    if (!container) return;

    const filtered = list.filter(s =>
        activeServiceTab === 'active' ? s.status === 'active' : s.status === 'completed'
    );

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                <p>Nenhum serviço ${activeServiceTab === 'active' ? 'em andamento' : 'concluído'}.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(s => `
        <div class="service-card">
            <div class="service-card__header">
                <span class="service-card__title">${s.title}</span>
                <span class="request-card__status status-${s.status === 'active' ? 'in-progress' : 'completed'}">${s.statusLabel}</span>
            </div>
            <div class="request-card__freelancer">
                <div class="request-card__freelancer-avatar" style="background:${s.client.avatarColor}">${s.client.avatar}</div>
                <div class="request-card__freelancer-info">
                    <strong>${s.client.name}</strong>
                    <span>${s.deadline}</span>
                </div>
            </div>
            <div class="service-card__price">${s.price}</div>
            <div class="service-card__progress">
                <div class="service-card__progress-label">
                    <span>Progresso</span>
                    <span>${s.progress}%</span>
                </div>
                <div class="service-card__progress-bar">
                    <div class="service-card__progress-fill" style="width:${s.progress}%"></div>
                </div>
            </div>
            <div class="service-card__actions">
                <button class="request-card__btn btn-outline" data-svc-chat="${s.id}">Mensagem</button>
                ${s.status === 'active'
                    ? `<button class="request-card__btn btn-gold" data-svc-deliver="${s.id}">Marcar entregue</button>`
                    : `<button class="request-card__btn btn-primary" data-svc-rating="${s.id}">Ver avaliação</button>`
                }
            </div>
        </div>
    `).join('');

    container.querySelectorAll('[data-svc-chat]').forEach(btn => {
        btn.addEventListener('click', () => {
            const s = list.find(item => item.id === btn.getAttribute('data-svc-chat'));
            if (s) openChatWithPerson(s.client);
        });
    });
    container.querySelectorAll('[data-svc-deliver]').forEach(btn => {
        btn.addEventListener('click', () => deliverService(btn.getAttribute('data-svc-deliver')));
    });
    container.querySelectorAll('[data-svc-rating]').forEach(btn => {
        btn.addEventListener('click', () => showToast('Serviço avaliado pelo cliente!'));
    });
}

// =====================
// RENDER: Activities (cards interativos)
// =====================
function renderActivities(mode, activities) {
    const container = document.getElementById(mode === 'client' ? 'client-activity-list' : 'freelancer-activity-list');
    if (!container) return;

    container.innerHTML = activities.map(act => `
        <div class="activity-card" data-activity="${act.id}" role="button" tabindex="0">
            <div class="activity-card__icon" style="background:${ACTIVITY_COLORS[act.type]}1a;color:${ACTIVITY_COLORS[act.type]}">
                ${ACTIVITY_ICONS[act.type] || ACTIVITY_ICONS.status}
            </div>
            <div class="activity-card__body">
                <div class="activity-card__title">${act.title}</div>
                <div class="activity-card__desc">${act.desc}</div>
            </div>
            <div class="activity-card__meta">
                <span class="activity-card__time">${act.time}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener('click', () => {
            const act = activities.find(a => a.id === card.getAttribute('data-activity'));
            if (act && typeof act.action === 'function') act.action();
        });
    });
}

// =====================
// MODAL: Freelancer detail (com seleção de serviço por card)
// =====================
function openFreelancerModal(fl) {
    selectedFreelancer = fl;
    selectedServiceIndex = 0;
    renderFreelancerModal();
    document.getElementById('modal-freelancer').removeAttribute('hidden');
}

function renderFreelancerModal() {
    const fl = selectedFreelancer;
    if (!fl) return;
    const body = document.getElementById('modal-freelancer-body');

    body.innerHTML = `
        <div class="detail-profile">
            <div class="detail-profile__avatar" style="background:${fl.avatarColor}">${fl.avatar}</div>
            <h3 class="detail-profile__name">${fl.name}</h3>
            <p class="detail-profile__skill">${fl.skill}</p>
            <div class="detail-profile__rating">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ${fl.rating} - ${fl.reviews} avaliações
            </div>
            <div class="profile-score-badge">
                <span class="score-badge score-badge--${fl.level}">✦</span>
                <span>${fl.level === 'gold' ? 'Ouro' : fl.level === 'silver' ? 'Prata' : fl.level === 'diamond' ? 'Diamante' : 'Iniciante'}</span>
            </div>
        </div>

        <div class="detail-stats">
            <div class="detail-stat">
                <strong>${fl.completedJobs}</strong>
                <span>Serviços concluídos</span>
            </div>
            <div class="detail-stat">
                <strong>${fl.responseTime}</strong>
                <span>Responde em</span>
            </div>
            <div class="detail-stat">
                <strong>${fl.rating}</strong>
                <span>Avaliação</span>
            </div>
        </div>

        <div class="detail-section">
            <div class="detail-section__label">Escolha um serviço (toque para selecionar)</div>
            <div class="detail-services">
                ${fl.services.map((s, i) => `
                    <div class="detail-service ${i === selectedServiceIndex ? 'detail-service--selected' : ''}" data-service-index="${i}" role="button" tabindex="0">
                        <span class="detail-service__check">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                        </span>
                        <span class="detail-service__info">
                            <span class="detail-service__name">${s.name}</span>
                            <span class="detail-service__complexity">${s.complexity}</span>
                        </span>
                        <span class="detail-service__price">${s.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="detail-section">
            <div class="detail-section__label">Avaliações recentes</div>
            <div class="detail-reviews">
                ${fl.reviewsList.map(r => `
                    <div class="detail-review">
                        <div class="detail-review__header">
                            <span class="detail-review__name">${r.name}</span>
                            <span class="detail-review__stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span>
                        </div>
                        <p class="detail-review__text">${r.text}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <button class="detail-hire-btn" id="detail-hire-btn">Contratar ${fl.name.split(' ')[0]}</button>
    `;

    // Seleção de serviço por card
    body.querySelectorAll('.detail-service').forEach(card => {
        card.addEventListener('click', () => {
            selectedServiceIndex = parseInt(card.getAttribute('data-service-index'), 10);
            body.querySelectorAll('.detail-service').forEach(c => c.classList.remove('detail-service--selected'));
            card.classList.add('detail-service--selected');
            showToast('Serviço selecionado: ' + fl.services[selectedServiceIndex].name);
        });
    });

    const hireBtn = body.querySelector('#detail-hire-btn');
    if (hireBtn) hireBtn.addEventListener('click', startHireFlow);
}

// =====================
// MODAL: Opportunity detail
// =====================
function openOpportunityModal(opp) {
    selectedOpportunity = opp;
    const body = document.getElementById('modal-opportunity-body');

    body.innerHTML = `
        <h3 class="opp-detail__title">${opp.title}</h3>
        <div class="opp-detail__budget">${opp.budget}</div>
        <p class="opp-detail__desc">${opp.description}</p>

        <div class="opp-detail__info">
            <div class="opp-detail__info-row">
                <span>Categoria</span>
                <span>${getCategoryLabel(opp.category)}</span>
            </div>
            <div class="opp-detail__info-row">
                <span>Complexidade</span>
                <span>${opp.complexity}</span>
            </div>
            <div class="opp-detail__info-row">
                <span>Prazo</span>
                <span>${opp.deadline}</span>
            </div>
            <div class="opp-detail__info-row">
                <span>Cliente</span>
                <span>${opp.client.name}</span>
            </div>
            <div class="opp-detail__info-row">
                <span>Local</span>
                <span>${opp.location}</span>
            </div>
        </div>

        <button class="opp-detail__btn" id="accept-opp-btn">Aceitar oportunidade</button>
    `;

    const acceptBtn = body.querySelector('#accept-opp-btn');
    if (acceptBtn) acceptBtn.addEventListener('click', acceptOpportunity);

    document.getElementById('modal-opportunity').removeAttribute('hidden');
}

// =====================
// HIRE FLOW (Contratante) — usa o serviço selecionado por card
// =====================
function startHireFlow() {
    if (!selectedFreelancer) return;

    // Fecha o modal do freelancer
    document.getElementById('modal-freelancer').setAttribute('hidden', '');

    const fl = selectedFreelancer;
    const service = fl.services[selectedServiceIndex];
    const nums = service.price.match(/\d+/g).map(Number);
    const priceMin = nums[0];
    const priceMax = nums[1] || priceMin;
    const avgPrice = Math.round((priceMin + priceMax) / 2);
    const commission = Math.round(avgPrice * 0.1);
    const total = avgPrice;

    const body = document.getElementById('modal-hire-body');

    body.innerHTML = `
        <div class="hire-step">
            <div class="hire-step__icon">
                <svg width="56" height="56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="46" fill="#193F34"/>
                    <circle cx="50" cy="50" r="33" fill="#D9A441"/>
                    <circle cx="50" cy="50" r="22" fill="#193F34"/>
                    <circle cx="50" cy="50" r="10" fill="#D9A441"/>
                </svg>
            </div>
            <h3 class="hire-step__title">Contratar ${fl.name}</h3>
            <p class="hire-step__desc">Você está prestes a contratar <strong>${fl.name}</strong> para o serviço: <strong>${service.name}</strong></p>

            <div class="hire-summary">
                <div class="hire-summary__row">
                    <span>Serviço</span>
                    <span>${service.name}</span>
                </div>
                <div class="hire-summary__row">
                    <span>Profissional</span>
                    <span>${fl.name}</span>
                </div>
                <div class="hire-summary__row">
                    <span>Complexidade</span>
                    <span>${service.complexity}</span>
                </div>
                <div class="hire-summary__divider"></div>
                <div class="hire-summary__row">
                    <span>Valor do serviço</span>
                    <span>R$ ${avgPrice},00</span>
                </div>
                <div class="hire-summary__row">
                    <span>Comissão Precify (10%)</span>
                    <span>R$ ${commission},00</span>
                </div>
                <div class="hire-summary__divider"></div>
                <div class="hire-summary__total">
                    <span>Total a pagar</span>
                    <span>R$ ${total},00</span>
                </div>
                <p class="hire-summary__commission">O freelancer recebe R$ ${avgPrice - commission},00 (90%)</p>
            </div>

            <button class="hire-btn hire-btn--gold" id="confirm-hire-btn">Confirmar contratação</button>
        </div>
    `;

    const confirmBtn = body.querySelector('#confirm-hire-btn');
    if (confirmBtn) confirmBtn.addEventListener('click', confirmHire);

    document.getElementById('modal-hire').removeAttribute('hidden');
}

function confirmHire() {
    const body = document.getElementById('modal-hire-body');
    const fl = selectedFreelancer;
    const service = fl.services[selectedServiceIndex];
    const nums = service.price.match(/\d+/g).map(Number);
    const avgPrice = Math.round((nums[0] + (nums[1] || nums[0])) / 2);

    body.innerHTML = `
        <div class="hire-success">
            <div class="hire-success__check">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            </div>
            <h3 class="hire-success__title">Contratação confirmada!</h3>
            <p class="hire-success__desc">
                ${fl.name} foi notificado da sua solicitação.
                Você pode acompanhar o status na aba "Solicitações".
            </p>
            <div class="hire-summary" style="text-align:left;">
                <div class="hire-summary__row">
                    <span>Profissional</span>
                    <span>${fl.name}</span>
                </div>
                <div class="hire-summary__row">
                    <span>Serviço</span>
                    <span>${service.name}</span>
                </div>
                <div class="hire-summary__row">
                    <span>Status</span>
                    <span style="color:#2E7D32;">Em andamento</span>
                </div>
                <div class="hire-summary__divider"></div>
                <div class="hire-summary__row">
                    <span>Valor pago</span>
                    <span>R$ ${avgPrice},00</span>
                </div>
            </div>
            <button class="hire-btn hire-btn--primary" id="go-requests-btn">Acompanhar solicitação</button>
        </div>
    `;

    const goBtn = body.querySelector('#go-requests-btn');
    if (goBtn) goBtn.addEventListener('click', closeHireAndGoToRequests);

    // Adiciona à lista de solicitações
    const newReq = {
        id: 'req-new-' + Date.now(),
        title: service.name,
        freelancer: fl,
        price: 'R$ ' + avgPrice,
        status: 'in-progress',
        statusLabel: 'Em andamento',
        date: 'Hoje',
        progress: 10,
        description: service.name
    };
    MOCK_CLIENT_REQUESTS.unshift(newReq);
    renderClientRequests(MOCK_CLIENT_REQUESTS);

    showToast('Contratação realizada com sucesso!');
}

function closeHireAndGoToRequests() {
    document.getElementById('modal-hire').setAttribute('hidden', '');
    switchScreen('requests');
}

// =====================
// ACCEPT OPPORTUNITY (Contratado)
// =====================
function acceptOpportunity() {
    if (!selectedOpportunity) return;
    const opp = selectedOpportunity;

    const body = document.getElementById('modal-opportunity-body');

    body.innerHTML = `
        <div class="hire-success">
            <div class="hire-success__check">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 7L9 18l-5-5"/></svg>
            </div>
            <h3 class="hire-success__title">Oportunidade aceita!</h3>
            <p class="hire-success__desc">
                Você aceitou o serviço "${opp.title}" de ${opp.client.name}.
                Acompanhe na aba "Meus serviços".
            </p>
            <div class="hire-summary" style="text-align:left;">
                <div class="hire-summary__row">
                    <span>Cliente</span>
                    <span>${opp.client.name}</span>
                </div>
                <div class="hire-summary__row">
                    <span>Valor</span>
                    <span>${opp.budget}</span>
                </div>
                <div class="hire-summary__row">
                    <span>Prazo</span>
                    <span>${opp.deadline}</span>
                </div>
                <div class="hire-summary__divider"></div>
                <div class="hire-summary__row">
                    <span>Sua comissão (90%)</span>
                    <span style="color:#D9A441;">R$ ${Math.round(opp.budgetValue * 0.9)},00</span>
                </div>
            </div>
            <button class="hire-btn hire-btn--primary" id="go-services-btn">Ir para meus serviços</button>
        </div>
    `;

    const goBtn = body.querySelector('#go-services-btn');
    if (goBtn) goBtn.addEventListener('click', closeOppAndGoToServices);

    // Adiciona aos serviços do freelancer
    const newService = {
        id: 'fs-new-' + Date.now(),
        title: opp.title,
        client: opp.client,
        price: 'R$ ' + opp.budgetValue,
        status: 'active',
        statusLabel: 'Em andamento',
        progress: 5,
        deadline: opp.deadline + ' restantes'
    };
    MOCK_FREELANCER_SERVICES.unshift(newService);
    renderFreelancerServices(MOCK_FREELANCER_SERVICES);

    // Remove das oportunidades
    const idx = MOCK_OPPORTUNITIES.findIndex(o => o.id === opp.id);
    if (idx >= 0) MOCK_OPPORTUNITIES.splice(idx, 1);
    renderOpportunities(MOCK_OPPORTUNITIES);

    showToast('Oportunidade aceita com sucesso!');
}

function closeOppAndGoToServices() {
    document.getElementById('modal-opportunity').setAttribute('hidden', '');
    switchScreen('my-services');
}

// =====================
// CHAT (com respostas rápidas por cards — sem digitação)
// =====================
function openChatWithPerson(person) {
    const chat = {
        id: 'temp-chat-' + Date.now(),
        person: person,
        messages: [
            { sender: 'them', text: 'Olá! Como posso ajudar?', time: 'Agora' }
        ]
    };
    openChatModal(chat);
}

function openChatModal(chat) {
    activeChatData = chat;
    const avatar = document.getElementById('chat-avatar');
    const name = document.getElementById('chat-name');

    if (!avatar || !name) return;

    avatar.textContent = chat.person.avatar;
    avatar.style.background = chat.person.avatarColor || AVATAR_COLORS.green;
    name.textContent = chat.person.name;

    renderChatMessages(chat.messages);
    document.getElementById('modal-chat').removeAttribute('hidden');
}

function renderChatMessages(messages) {
    const container = document.getElementById('chat-messages');
    if (!container) return;

    container.innerHTML = messages.map(msg => `
        <div class="chat-bubble chat-bubble--${msg.sender === 'me' ? 'sent' : 'received'}">
            ${msg.text}
            <span class="chat-bubble__time">${msg.time}</span>
        </div>
    `).join('');
    container.scrollTop = container.scrollHeight;
}

function sendChatMessage(text) {
    if (!activeChatData || !text) return;

    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    activeChatData.messages.push({ sender: 'me', text, time });
    renderChatMessages(activeChatData.messages);

    // Simula resposta após 1,5s
    setTimeout(() => {
        if (!activeChatData) return;
        const responses = [
            'Entendi! Vou trabalhar nisso agora.',
            'Perfeito, obrigado pelo retorno!',
            'Combinado! Qualquer coisa me chame.',
            'Já estou cuidando disso, logo te retorno.',
            'Ótimo! Vou enviar uma prévia em breve.'
        ];
        const reply = responses[Math.floor(Math.random() * responses.length)];
        activeChatData.messages.push({ sender: 'them', text: reply, time });
        renderChatMessages(activeChatData.messages);
    }, 1500);
}

// =====================
// SERVICE DELIVERY
// =====================
function deliverService(serviceId) {
    const service = MOCK_FREELANCER_SERVICES.find(s => s.id === serviceId);
    if (!service) return;

    service.status = 'completed';
    service.statusLabel = 'Concluído';
    service.progress = 100;
    service.deadline = 'Entregue hoje';

    renderFreelancerServices(MOCK_FREELANCER_SERVICES);
    showToast('Serviço marcado como entregue!');
}

// =====================
// CONFIRM DELIVERY (client side)
// =====================
function confirmDelivery(reqId) {
    const req = MOCK_CLIENT_REQUESTS.find(r => r.id === reqId);
    if (!req) return;

    req.status = 'completed';
    req.statusLabel = 'Concluído';
    req.progress = 100;

    renderClientRequests(MOCK_CLIENT_REQUESTS);
    showToast('Entrega confirmada! Você pode avaliar o profissional.');
}

// =====================
// MODE SWITCH (Contratante <-> Contratado)
// =====================
function switchMode(mode) {
    currentMode = mode;

    // Alterna a tabbar superior
    document.querySelectorAll('.top-tabbar__btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });

    // Move o indicador
    const indicator = document.getElementById('tabbar-indicator');
    if (indicator) indicator.classList.toggle('right', mode === 'freelancer');

    // Alterna as telas do modo
    document.getElementById('client-screens').classList.toggle('active', mode === 'client');
    document.getElementById('freelancer-screens').classList.toggle('active', mode === 'freelancer');

    // Alterna a navegação inferior
    document.getElementById('client-nav').classList.toggle('active', mode === 'client');
    document.getElementById('freelancer-nav').classList.toggle('active', mode === 'freelancer');

    // Alterna o avatar do cabeçalho
    const headerAvatar = document.getElementById('header-user-avatar');
    const avatarText = document.getElementById('user-avatar-text');
    if (mode === 'client') {
        headerAvatar.classList.remove('freelancer-mode');
        avatarText.textContent = 'E';
    } else {
        headerAvatar.classList.add('freelancer-mode');
        avatarText.textContent = 'A';
    }

    // Vai para a primeira tela do modo
    if (mode === 'client') {
        switchScreen('home');
    } else {
        switchScreen('opportunities');
    }

    showToast(mode === 'client' ? 'Modo Contratante' : 'Modo Contratado');
}

// =====================
// SCREEN NAVIGATION
// =====================
function switchScreen(screenName) {
    currentScreen = screenName;

    // Esconde todas as telas
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

    // Mostra a tela alvo
    const target = document.querySelector(`.screen[data-screen="${screenName}"]`);
    if (target) {
        target.classList.add('active');
        const scroll = target.querySelector('.screen__scroll');
        if (scroll) scroll.scrollTop = 0;
    }

    // Atualiza a navegação inferior
    document.querySelectorAll('.bottom-nav__mode.active .nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-screen') === screenName);
    });
}

// =====================
// UTILITIES
// =====================
function getCategoryLabel(cat) {
    const labels = {
        design: 'Design e artes',
        video: 'Edição de vídeo',
        writing: 'Redação',
        programming: 'Programação',
        marketing: 'Marketing digital',
        other: 'Outros'
    };
    return labels[cat] || cat;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.removeAttribute('hidden');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.setAttribute('hidden', '');
    }, 3000);
}

function setCategoryFilter(category) {
    activeCategory = category;
    document.querySelectorAll('.category-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-cat') === category);
    });
    renderFreelancers(MOCK_FREELANCERS);
}

// =====================
// EVENT LISTENERS
// =====================
function setupEventListeners() {
    // Tabs de modo (Contratante / Contratado)
    document.querySelectorAll('.top-tabbar__btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchMode(btn.getAttribute('data-mode'));
        });
    });

    // Navegação inferior
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            switchScreen(item.getAttribute('data-screen'));
        });
    });

    // Filtro por categorias
    document.querySelectorAll('.category-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            setCategoryFilter(chip.getAttribute('data-cat'));
        });
    });

    // CTA do resultado da sugestão de preço → filtra profissionais
    const suggestCta = document.getElementById('suggest-cta');
    if (suggestCta) {
        suggestCta.addEventListener('click', () => {
            if (!suggestCategory) return;
            setCategoryFilter(suggestCategory);
            const list = document.getElementById('freelancer-list');
            if (list) list.scrollIntoView({ behavior: 'smooth', block: 'start' });
            showToast('Profissionais da área filtrados');
        });
    }

    // Tabs de serviços (contratado)
    document.querySelectorAll('.services-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.services-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeServiceTab = tab.getAttribute('data-status');
            renderFreelancerServices(MOCK_FREELANCER_SERVICES);
        });
    });

    // Fechar modais (botões e clique no overlay)
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.getElementById(btn.getAttribute('data-close'));
            if (modal) modal.setAttribute('hidden', '');
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.setAttribute('hidden', '');
            }
        });
    });

    // Chat: fechar, enviar por input e respostas rápidas
    const chatClose = document.getElementById('chat-close');
    if (chatClose) {
        chatClose.addEventListener('click', () => {
            document.getElementById('modal-chat').setAttribute('hidden', '');
        });
    }

    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    if (chatSend && chatInput) {
        chatSend.addEventListener('click', () => {
            const text = chatInput.value.trim();
            if (!text) return;
            sendChatMessage(text);
            chatInput.value = '';
        });
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const text = chatInput.value.trim();
                if (!text) return;
                sendChatMessage(text);
                chatInput.value = '';
            }
        });
    }

    // Respostas rápidas (cards) — sem digitação
    document.querySelectorAll('.quick-reply-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            sendChatMessage(chip.getAttribute('data-reply'));
        });
    });
}
