/* ==============================
   PRECIFY APP — DEMO SCRIPT
   Mock data + full demo flows
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

const MOCK_FREELANCERS = [
    {
        id: 'fl1',
        name: 'Aline Souza',
        skill: 'Designer Grafica & Redatora',
        avatar: 'A',
        avatarColor: AVATAR_COLORS.gold,
        rating: 4.9,
        reviews: 12,
        completedJobs: 8,
        responseTime: '1h',
        level: 'gold',
        category: 'design',
        services: [
            { name: 'Arte para redes sociais', price: 'R$ 30 - R$ 50', complexity: 'Intermediaria' },
            { name: 'Logotipo simples', price: 'R$ 75 - R$ 100', complexity: 'Avancada' },
            { name: 'Capa para Instagram', price: 'R$ 20 - R$ 30', complexity: 'Simples' }
        ],
        reviewsList: [
            { name: 'Carlos M.', stars: 5, text: 'Excelente trabalho, entrega rapida e muito criativa!' },
            { name: 'Juliana R.', stars: 5, text: 'Super atenciosa, fez exatamente o que eu precisava.' },
            { name: 'Pedro L.', stars: 4, text: 'Bom trabalho, comunicacao otima.' }
        ]
    },
    {
        id: 'fl2',
        name: 'Bruno Carvalho',
        skill: 'Editor de Video',
        avatar: 'B',
        avatarColor: AVATAR_COLORS.teal,
        rating: 4.7,
        reviews: 8,
        completedJobs: 6,
        responseTime: '2h',
        level: 'silver',
        category: 'video',
        services: [
            { name: 'Edicao de video curto (Reels)', price: 'R$ 25 - R$ 40', complexity: 'Simples' },
            { name: 'Edicao de video YouTube', price: 'R$ 50 - R$ 75', complexity: 'Intermediaria' },
            { name: 'Pos-producao completa', price: 'R$ 100 - R$ 150', complexity: 'Avancada' }
        ],
        reviewsList: [
            { name: 'Marina S.', stars: 5, text: 'Editou meu video de forma perfeita, super recomendado!' },
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
            { name: 'Texto para landing page', price: 'R$ 30 - R$ 50', complexity: 'Intermediaria' },
            { name: 'Artigo de blog (500 palavras)', price: 'R$ 20 - R$ 30', complexity: 'Simples' },
            { name: 'Estrategia de conteudo completa', price: 'R$ 100+', complexity: 'Avancada' }
        ],
        reviewsList: [
            { name: 'Ana P.', stars: 5, text: 'Textos incriveis, superou minhas expectativas!' },
            { name: 'Lucas F.', stars: 5, text: 'Profissional excepcional, recomendo demais.' },
            { name: 'Bia S.', stars: 5, text: 'Melhor redatora que ja contratei.' }
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
            { name: 'Landing page HTML/CSS', price: 'R$ 50 - R$ 100', complexity: 'Intermediaria' },
            { name: 'Bug fix ou ajuste CSS', price: 'R$ 30 - R$ 50', complexity: 'Simples' },
            { name: 'Site completo responsivo', price: 'R$ 100 - R$ 200+', complexity: 'Avancada' }
        ],
        reviewsList: [
            { name: 'Fernanda L.', stars: 5, text: 'Codigo limpo e bem documentado, otimo trabalho!' },
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
            { name: 'Calendario de conteudo', price: 'R$ 40 - R$ 50', complexity: 'Intermediaria' },
            { name: 'Gestao de Instagram (semanal)', price: 'R$ 75 - R$ 100', complexity: 'Avancada' },
            { name: 'Post simples', price: 'R$ 20 - R$ 30', complexity: 'Simples' }
        ],
        reviewsList: [
            { name: 'Gabi R.', stars: 5, text: 'Gestao incrivel, seguidores cresceram muito!' },
            { name: 'Rui M.', stars: 4, text: 'Bom trabalho com o calendario de posts.' }
        ]
    }
];

// Oportunidades para o contratado (solicitacoes de clientes)
const MOCK_OPPORTUNITIES = [
    {
        id: 'opp1',
        title: 'Criar 3 artes para Instagram',
        description: 'Preciso de 3 artes para posts de Instagram da minha loja de roupas. Temas: promocao, novidade e interacao com seguidores.',
        budget: 'R$ 30 - R$ 50',
        budgetValue: 40,
        category: 'design',
        complexity: 'Intermediaria',
        client: { name: 'Eliane Martins', avatar: 'E', avatarColor: AVATAR_COLORS.green },
        deadline: '3 dias',
        location: 'Remoto',
        urgent: false,
        status: 'available'
    },
    {
        id: 'opp2',
        title: 'Editar video de 2 minutos',
        description: 'Tenho um video bruto de 5 minutos que precisa ser editado para 2 minutos, com cortes, transicoes e musica de fundo.',
        budget: 'R$ 50 - R$ 75',
        budgetValue: 60,
        category: 'video',
        complexity: 'Intermediaria',
        client: { name: 'Marcos Silva', avatar: 'M', avatarColor: AVATAR_COLORS.brown },
        deadline: '5 dias',
        location: 'Remoto',
        urgent: false,
        status: 'available'
    },
    {
        id: 'opp3',
        title: 'Texto para pagina de vendas',
        description: 'Preciso de um texto persuasivo para a landing page do meu curso online. Publico: empreendedores iniciantes.',
        budget: 'R$ 75 - R$ 100',
        budgetValue: 85,
        category: 'writing',
        complexity: 'Avancada',
        client: { name: 'Patricia Lima', avatar: 'P', avatarColor: AVATAR_COLORS.rose },
        deadline: '2 dias',
        location: 'Remoto',
        urgent: true,
        status: 'available'
    },
    {
        id: 'opp4',
        title: 'Ajustar CSS de site responsivo',
        description: 'Meu site tem alguns problemas de responsividade no mobile. Preciso que alguem ajuste o CSS para funcionar bem em todos os tamanhos de tela.',
        budget: 'R$ 30 - R$ 50',
        budgetValue: 40,
        category: 'programming',
        complexity: 'Intermediaria',
        client: { name: 'Rui Costa', avatar: 'R', avatarColor: AVATAR_COLORS.blue },
        deadline: '1 dia',
        location: 'Remoto',
        urgent: true,
        status: 'available'
    },
    {
        id: 'opp5',
        title: 'Calendario de conteudo mensal',
        description: 'Preciso de um calendario de conteudo para Instagram e Facebook da minha marca de cosmeticos. Sao 20 posts no total.',
        budget: 'R$ 40 - R$ 50',
        budgetValue: 50,
        category: 'marketing',
        complexity: 'Intermediaria',
        client: { name: 'Sonia Alves', avatar: 'S', avatarColor: AVATAR_COLORS.purple },
        deadline: '7 dias',
        location: 'Remoto',
        urgent: false,
        status: 'available'
    }
];

// Solicitacoes do contratante (ja feitas)
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
        statusLabel: 'Concluido',
        date: '08/11',
        progress: 100,
        description: 'Artigo de blog sobre tendencias de marketing digital.'
    },
    {
        id: 'req3',
        title: 'Edicao de Reels',
        freelancer: MOCK_FREELANCERS[1],
        price: 'R$ 35',
        status: 'delivered',
        statusLabel: 'Entregue',
        date: '15/11',
        progress: 100,
        description: 'Edicao de um Reels de 30 segundos para Instagram.'
    }
];

// Servicos do contratado (aceitos/em andamento)
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
        statusLabel: 'Concluido',
        progress: 100,
        deadline: 'Entregue em 05/11'
    },
    {
        id: 'fs4',
        title: '3 posts para Instagram',
        client: { name: 'Paulo R.', avatar: 'P', avatarColor: AVATAR_COLORS.blue },
        price: 'R$ 45',
        status: 'completed',
        statusLabel: 'Concluido',
        progress: 100,
        deadline: 'Entregue em 28/10'
    }
];

// Conversas de chat
const MOCK_CHATS_CLIENT = [
    {
        id: 'chat1',
        person: MOCK_FREELANCERS[0],
        lastMessage: 'Claro! Ja estou trabalhando no logo. Logo envio uma previa.',
        time: '14:32',
        unread: 1,
        messages: [
            { sender: 'them', text: 'Oi Eliane! Recebi sua solicitacao do logo.', time: '14:20' },
            { sender: 'them', text: 'Pode me dizer mais sobre a identidade da startup?', time: '14:20' },
            { sender: 'me', text: 'Oi Aline! Claro, e uma startup de tecnologia focada em pequenos negocios.', time: '14:25' },
            { sender: 'me', text: 'Quero algo moderno e minimalista.', time: '14:25' },
            { sender: 'them', text: 'Perfeito! Vou trabalhar nessa linha.', time: '14:30' },
            { sender: 'them', text: 'Claro! Ja estou trabalhando no logo. Logo envio uma previa.', time: '14:32' }
        ]
    },
    {
        id: 'chat2',
        person: MOCK_FREELANCERS[2],
        lastMessage: 'Artigo entregue! Espero que goste :)',
        time: 'Ontem',
        unread: 0,
        messages: [
            { sender: 'me', text: 'Carla, precisava de um artigo sobre marketing digital.', time: 'Ontem 10:00' },
            { sender: 'them', text: 'Claro! Qual o publico alvo?', time: 'Ontem 10:05' },
            { sender: 'me', text: 'Empreendedores iniciantes.', time: 'Ontem 10:07' },
            { sender: 'them', text: 'Perfeito, vou comecar agora.', time: 'Ontem 10:10' },
            { sender: 'them', text: 'Artigo entregue! Espero que goste :)', time: 'Ontem 16:00' }
        ]
    },
    {
        id: 'chat3',
        person: MOCK_FREELANCERS[1],
        lastMessage: 'O video ficou pronto! Posso enviar?', time: 'Hoje',
        unread: 2,
        messages: [
            { sender: 'me', text: 'Bruno, o Reels ficou pronto?', time: 'Hoje 09:00' },
            { sender: 'them', text: 'O video ficou pronto! Posso enviar?', time: 'Hoje 09:30' }
        ]
    }
];

const MOCK_CHATS_FREELANCER = [
    {
        id: 'chatf1',
        person: { name: 'Eliane Martins', avatar: 'E', avatarColor: AVATAR_COLORS.green },
        lastMessage: 'Quero algo moderno e minimalista.',
        time: '14:25',
        unread: 0,
        messages: [
            { sender: 'me', text: 'Oi Eliane! Recebi sua solicitacao do logo.', time: '14:20' },
            { sender: 'me', text: 'Pode me dizer mais sobre a identidade da startup?', time: '14:20' },
            { sender: 'them', text: 'Oi Aline! Claro, e uma startup de tecnologia focada em pequenos negocios.', time: '14:25' },
            { sender: 'them', text: 'Quero algo moderno e minimalista.', time: '14:25' },
            { sender: 'me', text: 'Perfeito! Vou trabalhar nessa linha.', time: '14:30' },
            { sender: 'me', text: 'Claro! Ja estou trabalhando no logo. Logo envio uma previa.', time: '14:32' }
        ]
    },
    {
        id: 'chatf2',
        person: { name: 'Jorge Tavares', avatar: 'J', avatarColor: AVATAR_COLORS.brown },
        lastMessage: 'Quando fica pronto a capa?', time: 'Hoje',
        unread: 1,
        messages: [
            { sender: 'them', text: 'Quando fica pronto a capa?', time: 'Hoje 11:00' }
        ]
    }
];

// Estado do app
let currentMode = 'client';
let currentScreen = 'home';
let activeCategory = 'all';
let activeServiceTab = 'active';
let selectedFreelancer = null;
let selectedOpportunity = null;
let activeChatData = null;

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', () => {
    renderFreelancers(MOCK_FREELANCERS);
    renderOpportunities(MOCK_OPPORTUNITIES);
    renderClientRequests(MOCK_CLIENT_REQUESTS);
    renderFreelancerServices(MOCK_FREELANCER_SERVICES);
    renderChatList('client', MOCK_CHATS_CLIENT);
    renderChatList('freelancer', MOCK_CHATS_FREELANCER);
    setupEventListeners();
});

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
        <div class="freelancer-card" data-freelancer="${fl.id}">
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

    container.innerHTML = list.map(opp => `
        <div class="opportunity-card" data-opp="${opp.id}">
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
                <p>Voce ainda nao tem solicitacoes.</p>
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
                <button class="request-card__btn btn-outline" onclick="openChat(${JSON.stringify(req.freelancer).replace(/"/g, '&quot;')})">Mensagem</button>
                ${req.status === 'delivered' ? `<button class="request-card__btn btn-gold" onclick="confirmDelivery('${req.id}')">Confirmar entrega</button>` : ''}
                ${req.status === 'in-progress' ? `<button class="request-card__btn btn-primary" onclick="showToast('Aguardando entrega do profissional')">Ver detalhes</button>` : ''}
                ${req.status === 'completed' ? `<button class="request-card__btn btn-gold" onclick="showToast('Avaliacao enviada! Obrigado.')">Avaliar</button>` : ''}
            </div>
        </div>
    `).join('');
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
                <p>Nenhum servico ${activeServiceTab === 'active' ? 'em andamento' : 'concluido'}.</p>
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
                <button class="request-card__btn btn-outline" onclick='openChat(${JSON.stringify(s.client).replace(/"/g, "&quot;")})'>Mensagem</button>
                ${s.status === 'active'
                    ? `<button class="request-card__btn btn-gold" onclick="deliverService('${s.id}')">Marcar entregue</button>`
                    : `<button class="request-card__btn btn-primary" onclick="showToast('Servico avaliado pelo cliente!')">Ver avaliacao</button>`
                }
            </div>
        </div>
    `).join('');
}

// =====================
// RENDER: Chat List
// =====================
function renderChatList(mode, chats) {
    const containerId = mode === 'client' ? 'client-chat-list' : 'freelancer-chat-list';
    const container = document.getElementById(containerId);
    if (!container) return;

    if (chats.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                <p>Nenhuma mensagem ainda.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = chats.map(chat => `
        <div class="chat-item" data-chat="${chat.id}">
            <div class="chat-item__avatar" style="background:${chat.person.avatarColor || AVATAR_COLORS.green}">${chat.person.avatar}</div>
            <div class="chat-item__body">
                <div class="chat-item__name">${chat.person.name}</div>
                <div class="chat-item__preview">${chat.lastMessage}</div>
            </div>
            <div class="chat-item__meta">
                <span class="chat-item__time">${chat.time}</span>
                ${chat.unread > 0 ? `<span class="chat-item__badge">${chat.unread}</span>` : ''}
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.chat-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-chat');
            const chat = chats.find(c => c.id === id);
            if (chat) openChatModal(chat);
        });
    });
}

// =====================
// MODAL: Freelancer detail
// =====================
function openFreelancerModal(fl) {
    selectedFreelancer = fl;
    const body = document.getElementById('modal-freelancer-body');

    body.innerHTML = `
        <div class="detail-profile">
            <div class="detail-profile__avatar" style="background:${fl.avatarColor}">${fl.avatar}</div>
            <h3 class="detail-profile__name">${fl.name}</h3>
            <p class="detail-profile__skill">${fl.skill}</p>
            <div class="detail-profile__rating">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ${fl.rating} - ${fl.reviews} avaliacoes
            </div>
            <div class="profile-score-badge">
                <span class="score-badge score-badge--${fl.level}">✦</span>
                <span>${fl.level === 'gold' ? 'Ouro' : fl.level === 'silver' ? 'Prata' : fl.level === 'diamond' ? 'Diamante' : 'Iniciante'}</span>
            </div>
        </div>

        <div class="detail-stats">
            <div class="detail-stat">
                <strong>${fl.completedJobs}</strong>
                <span>Servicos concluidos</span>
            </div>
            <div class="detail-stat">
                <strong>${fl.responseTime}</strong>
                <span>Responde em</span>
            </div>
            <div class="detail-stat">
                <strong>${fl.rating}</strong>
                <span>Avaliacao</span>
            </div>
        </div>

        <div class="detail-section">
            <div class="detail-section__label">Servicos oferecidos</div>
            <div class="detail-services">
                ${fl.services.map(s => `
                    <div class="detail-service">
                        <span class="detail-service__name">${s.name}</span>
                        <span class="detail-service__price">${s.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="detail-section">
            <div class="detail-section__label">Avaliacoes recentes</div>
            <div class="detail-reviews">
                ${fl.reviewsList.map(r => `
                    <div class="detail-review">
                        <div class="detail-review__header">
                            <span class="detail-review__name">${r.name}</span>
                            <span class="detail-review__stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</span>
                        </div>
                        <p class="detail-review__text">${r.text}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <button class="detail-hire-btn" onclick="startHireFlow()">Contratar ${fl.name.split(' ')[0]}</button>
    `;

    document.getElementById('modal-freelancer').removeAttribute('hidden');
}

document.getElementById('modal-freelancer-close').addEventListener('click', () => {
    document.getElementById('modal-freelancer').setAttribute('hidden', '');
});

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

        <button class="opp-detail__btn" id="accept-opp-btn" onclick="acceptOpportunity()">Aceitar oportunidade</button>
    `;

    document.getElementById('modal-opportunity').removeAttribute('hidden');
}

document.getElementById('modal-opportunity-close').addEventListener('click', () => {
    document.getElementById('modal-opportunity').setAttribute('hidden', '');
});

// =====================
// HIRE FLOW (Contratante)
// =====================
function startHireFlow() {
    if (!selectedFreelancer) return;

    // Close freelancer modal
    document.getElementById('modal-freelancer').setAttribute('hidden', '');

    const fl = selectedFreelancer;
    const firstService = fl.services[0];
    const priceMin = parseInt(firstService.price.match(/\d+/g)[0]);
    const priceMax = parseInt(firstService.price.match(/\d+/g)[1] || priceMin);
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
            <p class="hire-step__desc">Voce esta prestes a contratar ${fl.name} para o servico: <strong>${firstService.name}</strong></p>

            <div class="hire-summary">
                <div class="hire-summary__row">
                    <span>Servico</span>
                    <span>${firstService.name}</span>
                </div>
                <div class="hire-summary__row">
                    <span>Profissional</span>
                    <span>${fl.name}</span>
                </div>
                <div class="hire-summary__row">
                    <span>Complexidade</span>
                    <span>${firstService.complexity}</span>
                </div>
                <div class="hire-summary__divider"></div>
                <div class="hire-summary__row">
                    <span>Valor do servico</span>
                    <span>R$ ${avgPrice},00</span>
                </div>
                <div class="hire-summary__row">
                    <span>Comissao Precify (10%)</span>
                    <span>R$ ${commission},00</span>
                </div>
                <div class="hire-summary__divider"></div>
                <div class="hire-summary__total">
                    <span>Total a pagar</span>
                    <span>R$ ${total},00</span>
                </div>
                <p class="hire-summary__commission">O freelancer recebe R$ ${avgPrice - commission},00 (90%)</p>
            </div>

            <button class="hire-btn hire-btn--gold" onclick="confirmHire()">Confirmar contratacao</button>
        </div>
    `;

    document.getElementById('modal-hire').removeAttribute('hidden');
}

function confirmHire() {
    const body = document.getElementById('modal-hire-body');
    const fl = selectedFreelancer;

    body.innerHTML = `
        <div class="hire-success">
            <div class="hire-success__check">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            </div>
            <h3 class="hire-success__title">Contratacao confirmada!</h3>
            <p class="hire-success__desc">
                ${fl.name} foi notificado da sua solicitacao.
                Voce pode acompanhar o status na aba "Solicitacoes".
            </p>
            <div class="hire-summary" style="text-align:left;">
                <div class="hire-summary__row">
                    <span>Profissional</span>
                    <span>${fl.name}</span>
                </div>
                <div class="hire-summary__row">
                    <span>Status</span>
                    <span style="color:#2E7D32;">Em andamento</span>
                </div>
                <div class="hire-summary__divider"></div>
                <div class="hire-summary__row">
                    <span>Valor pago</span>
                    <span>R$ ${parseInt(selectedFreelancer.services[0].price.match(/\d+/g)[0])},00</span>
                </div>
            </div>
            <button class="hire-btn hire-btn--primary" onclick="closeHireAndGoToRequests()">Acompanhar solicitacao</button>
        </div>
    `;

    // Add to requests
    const newReq = {
        id: 'req-new-' + Date.now(),
        title: selectedFreelancer.services[0].name,
        freelancer: selectedFreelancer,
        price: 'R$ ' + selectedFreelancer.services[0].price.match(/\d+/g)[0],
        status: 'in-progress',
        statusLabel: 'Em andamento',
        date: 'Hoje',
        progress: 10,
        description: selectedFreelancer.services[0].name
    };
    MOCK_CLIENT_REQUESTS.unshift(newReq);
    renderClientRequests(MOCK_CLIENT_REQUESTS);

    showToast('Contratacao realizada com sucesso!');
}

function closeHireAndGoToRequests() {
    document.getElementById('modal-hire').setAttribute('hidden', '');
    switchScreen('requests');
}

document.getElementById('modal-hire-close').addEventListener('click', () => {
    document.getElementById('modal-hire').setAttribute('hidden', '');
});

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
                Voce aceitou o servico "${opp.title}" de ${opp.client.name}.
                Acompanhe na aba "Meus servicos".
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
                    <span>Sua comissao (90%)</span>
                    <span style="color:#D9A441;">R$ ${Math.round(opp.budgetValue * 0.9)},00</span>
                </div>
            </div>
            <button class="hire-btn hire-btn--primary" onclick="closeOppAndGoToServices()">Ir para meus servicos</button>
        </div>
    `;

    // Add to freelancer services
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

    // Remove from opportunities
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
// CHAT MODAL
// =====================
function openChat(person) {
    // Create a simple chat from a person object
    const personObj = typeof person === 'string' ? JSON.parse(person.replace(/&quot;/g, '"')) : person;
    const chat = {
        id: 'temp-chat',
        person: personObj,
        messages: [
            { sender: 'them', text: 'Oi! Como posso ajudar?', time: 'Agora' }
        ]
    };
    openChatModal(chat);
}

function openChatModal(chat) {
    activeChatData = chat;
    const avatar = document.getElementById('chat-avatar');
    const name = document.getElementById('chat-name');

    avatar.textContent = chat.person.avatar;
    avatar.style.background = chat.person.avatarColor || AVATAR_COLORS.green;
    name.textContent = chat.person.name;

    renderChatMessages(chat.messages);
    document.getElementById('modal-chat').removeAttribute('hidden');
}

function renderChatMessages(messages) {
    const container = document.getElementById('chat-messages');
    container.innerHTML = messages.map(msg => `
        <div class="chat-bubble chat-bubble--${msg.sender === 'me' ? 'sent' : 'received'}">
            ${msg.text}
            <span class="chat-bubble__time">${msg.time}</span>
        </div>
    `).join('');
    container.scrollTop = container.scrollHeight;
}

document.getElementById('chat-close').addEventListener('click', () => {
    document.getElementById('modal-chat').setAttribute('hidden', '');
});

document.getElementById('chat-send').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;

    const now = new Date();
    const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

    if (activeChatData) {
        activeChatData.messages.push({ sender: 'me', text, time });
        renderChatMessages(activeChatData.messages);
        input.value = '';

        // Simulate response after 1.5s
        setTimeout(() => {
            const responses = [
                'Entendi! Vou trabalhar nisso agora.',
                'Perfeito, obrigado pelo retorno!',
                'Combinado! Qualquer coisa me chame.',
                'Ja estou cuidando disso, logo te retorno.',
                'Otimo! Vou enviar uma previa em breve.'
            ];
            const reply = responses[Math.floor(Math.random() * responses.length)];
            activeChatData.messages.push({ sender: 'them', text: reply, time });
            renderChatMessages(activeChatData.messages);
        }, 1500);
    }
}

// =====================
// PRICE SUGGESTION
// =====================
document.getElementById('btn-price-suggest').addEventListener('click', () => {
    const input = document.getElementById('price-suggest-input');
    const result = document.getElementById('price-suggest-result');
    const text = input.value.trim().toLowerCase();

    if (!text) {
        showToast('Descreva o servico para analisar');
        return;
    }

    // Simple keyword-based "AI" analysis
    let complexity = 'Intermediaria';
    let priceRange = 'R$ 30 - R$ 50';

    const simpleKeywords = ['capa', 'post', 'foto', 'ajuste', 'pequeno', 'simples', 'rapido'];
    const advancedKeywords = ['completo', 'identidade visual', 'estrategia', 'site', 'app', 'complexo', 'plataforma'];

    if (simpleKeywords.some(k => text.includes(k))) {
        complexity = 'Simples';
        priceRange = 'R$ 20 - R$ 30';
    } else if (advancedKeywords.some(k => text.includes(k))) {
        complexity = 'Avancada';
        priceRange = 'R$ 75 - R$ 100';
    }

    document.getElementById('suggest-price-range').textContent = priceRange;
    document.getElementById('suggest-complexity').textContent = 'Complexidade: ' + complexity;
    result.removeAttribute('hidden');
});

// =====================
// MODE SWITCH (Contratante <-> Contratado)
// =====================
function switchMode(mode) {
    currentMode = mode;

    // Toggle top tabbar
    document.querySelectorAll('.top-tabbar__btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });

    // Move indicator
    const indicator = document.getElementById('tabbar-indicator');
    indicator.classList.toggle('right', mode === 'freelancer');

    // Toggle mode screens
    document.getElementById('client-screens').classList.toggle('active', mode === 'client');
    document.getElementById('freelancer-screens').classList.toggle('active', mode === 'freelancer');

    // Toggle bottom nav
    document.getElementById('client-nav').classList.toggle('active', mode === 'client');
    document.getElementById('freelancer-nav').classList.toggle('active', mode === 'freelancer');

    // Toggle header avatar
    const headerAvatar = document.getElementById('header-user-avatar');
    const avatarText = document.getElementById('user-avatar-text');
    if (mode === 'client') {
        headerAvatar.classList.remove('freelancer-mode');
        avatarText.textContent = 'E';
    } else {
        headerAvatar.classList.add('freelancer-mode');
        avatarText.textContent = 'A';
    }

    // Switch to first screen of the mode
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

    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

    // Show target screen
    const target = document.querySelector(`.screen[data-screen="${screenName}"]`);
    if (target) target.classList.add('active');

    // Update bottom nav
    document.querySelectorAll('.bottom-nav__mode.active .nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-screen') === screenName);
    });
}

// =====================
// SERVICE DELIVERY
// =====================
function deliverService(serviceId) {
    const service = MOCK_FREELANCER_SERVICES.find(s => s.id === serviceId);
    if (!service) return;

    service.status = 'completed';
    service.statusLabel = 'Concluido';
    service.progress = 100;
    service.deadline = 'Entregue hoje';

    renderFreelancerServices(MOCK_FREELANCER_SERVICES);
    showToast('Servico marcado como entregue!');
}

// =====================
// CONFIRM DELIVERY (client side)
// =====================
function confirmDelivery(reqId) {
    const req = MOCK_CLIENT_REQUESTS.find(r => r.id === reqId);
    if (!req) return;

    req.status = 'completed';
    req.statusLabel = 'Concluido';
    req.progress = 100;

    renderClientRequests(MOCK_CLIENT_REQUESTS);
    showToast('Entrega confirmada! Voce pode avaliar o profissional.');
}

// =====================
// UTILITIES
// =====================
function getCategoryLabel(cat) {
    const labels = {
        design: 'Design e artes',
        video: 'Edicao de video',
        writing: 'Redacao',
        programming: 'Programacao',
        marketing: 'Marketing digital',
        other: 'Outros'
    };
    return labels[cat] || cat;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.removeAttribute('hidden');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.setAttribute('hidden', '');
    }, 3000);
}

// =====================
// EVENT LISTENERS
// =====================
function setupEventListeners() {
    // Top tabbar mode switch
    document.querySelectorAll('.top-tabbar__btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchMode(btn.getAttribute('data-mode'));
        });
    });

    // Bottom nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            switchScreen(item.getAttribute('data-screen'));
        });
    });

    // Category filter
    document.querySelectorAll('.category-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeCategory = chip.getAttribute('data-cat');
            renderFreelancers(MOCK_FREELANCERS);
        });
    });

    // Services tab (freelancer)
    document.querySelectorAll('.services-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.services-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeServiceTab = tab.getAttribute('data-status');
            renderFreelancerServices(MOCK_FREELANCER_SERVICES);
        });
    });

    // Search
    const searchInput = document.getElementById('client-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const filtered = query
                ? MOCK_FREELANCERS.filter(f =>
                    f.name.toLowerCase().includes(query) ||
                    f.skill.toLowerCase().includes(query)
                )
                : MOCK_FREELANCERS;
            renderFreelancers(filtered);
        });
    }

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.setAttribute('hidden', '');
            }
        });
    });
}
