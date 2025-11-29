import './style.scss'
import { Header } from './components/Header/Header'
import { Filters } from './components/Filters/Filters'
import { Card } from './components/Card/Card'
import { SearchInput } from './components/SearchInput/SearchInput'


const cards = [
    {
        id: 1,
        name: 'The Ultimate Google Ads Training Course',
        price: 100,
        author: 'Jerome Bell',
        image: 'image-8.png',
        area: 'Marketing'
    },
    {
        id: 2,
        name: 'Prduct Management Fundamentals',
        price: 480,
        author: 'Marvin McKinney',
        image: 'image-7.png',
        area: 'Management'
    },
    {
        id: 3,
        name: 'HR  Management and Analytics',
        price: 200,
        author: 'Leslie Alexander Li',
        image: 'image-6.png',
        area: 'HR & Recruting'
    },
    {
        id: 4,
        name: 'Brand Management & PR Communications',
        price: 530,
        author: 'Kristin Watson',
        image: 'image-5.png',
        area: 'Marketing'
    },
    {
        id: 5,
        name: 'Graphic Design Basic',
        price: 500,
        author: 'Guy Hawkins',
        image: 'image-4.png',
        area: 'Design'
    },
    {
        id: 6,
        name: 'Business Development Management',
        price: 400,
        author: 'Dianne Russell',
        image: 'image-3.png',
        area: 'Management'
    },
    {
        id: 7,
        name: 'Highload Software Architecture',
        price: 600,
        author: 'Brooklyn Simmons',
        image: 'image-2.png',
        area: 'Development'
    },
    {
        id: 8,
        name: 'Human Resources – Selection and Recruitment',
        price: 150,
        author: 'Kathryn Murphy',
        image: 'image-1.png',
        area: 'HR & Recruting'
    },
    {
        id: 9,
        name: 'User Experience. Human-centered Design',
        price: 240,
        author: 'Cody Fisher',
        image: 'image.png',
        area: 'Design'
    },
    {
        id: 10,
        name: 'Social Media Marketing Mastery',
        price: 320,
        author: 'Emma Wilson',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 11,
        name: 'Agile Project Management',
        price: 420,
        author: 'Robert Brown',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 12,
        name: 'Talent Acquisition Strategies',
        price: 280,
        author: 'Sophia Garcia',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 13,
        name: 'UI/UX Design Principles',
        price: 380,
        author: 'Michael Chen',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 14,
        name: 'Full-Stack Web Development',
        price: 550,
        author: 'David Johnson',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 15,
        name: 'Content Marketing Strategy',
        price: 270,
        author: 'Olivia Martinez',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 16,
        name: 'Strategic Leadership Program',
        price: 490,
        author: 'James Anderson',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 17,
        name: 'Employee Engagement Methods',
        price: 310,
        author: 'Isabella Thompson',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 18,
        name: 'Digital Illustration Techniques',
        price: 360,
        author: 'William Davis',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 19,
        name: 'Mobile App Development',
        price: 520,
        author: 'Mia Rodriguez',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 20,
        name: 'SEO Optimization Course',
        price: 290,
        author: 'Ethan Miller',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 21,
        name: 'Risk Management Fundamentals',
        price: 440,
        author: 'Charlotte Wilson',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 22,
        name: 'Performance Management Systems',
        price: 330,
        author: 'Alexander Taylor',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 23,
        name: 'Motion Graphics Design',
        price: 410,
        author: 'Amelia White',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 24,
        name: 'Python Programming Mastery',
        price: 470,
        author: 'Benjamin Clark',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 25,
        name: 'Email Marketing Campaigns',
        price: 240,
        author: 'Harper Lewis',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 26,
        name: 'Operations Management',
        price: 460,
        author: 'Daniel Walker',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 27,
        name: 'Compensation and Benefits',
        price: 350,
        author: 'Evelyn Hall',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 28,
        name: 'Typography and Layout',
        price: 320,
        author: 'Henry Allen',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 29,
        name: 'Database Design & SQL',
        price: 480,
        author: 'Luna Scott',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 30,
        name: 'Digital Analytics Training',
        price: 370,
        author: 'Jackson King',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 31,
        name: 'Change Management',
        price: 430,
        author: 'Grace Green',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 32,
        name: 'HR Analytics and Metrics',
        price: 390,
        author: 'Logan Adams',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 33,
        name: 'Product Design Workshop',
        price: 450,
        author: 'Chloe Baker',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 34,
        name: 'JavaScript Frameworks',
        price: 510,
        author: 'Carter Nelson',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 35,
        name: 'PPC Advertising Mastery',
        price: 340,
        author: 'Zoe Carter',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 36,
        name: 'Team Leadership Skills',
        price: 470,
        author: 'Luke Hill',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 37,
        name: 'Recruitment Marketing',
        price: 310,
        author: 'Victoria Young',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 38,
        name: 'Web Design Principles',
        price: 380,
        author: 'Julian Mitchell',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 39,
        name: 'Cloud Computing Basics',
        price: 530,
        author: 'Lily Perez',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 40,
        name: 'Influencer Marketing',
        price: 290,
        author: 'Gabriel Roberts',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 41,
        name: 'Strategic Planning',
        price: 490,
        author: 'Samantha Turner',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 42,
        name: 'Labor Relations',
        price: 360,
        author: 'Christopher Phillips',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 43,
        name: '3D Modeling Basics',
        price: 520,
        author: 'Penelope Campbell',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 44,
        name: 'DevOps Fundamentals',
        price: 570,
        author: 'Andrew Parker',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 45,
        name: 'Market Research Methods',
        price: 330,
        author: 'Hannah Evans',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 46,
        name: 'Quality Management',
        price: 440,
        author: 'Joshua Edwards',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 47,
        name: 'Training and Development',
        price: 370,
        author: 'Avery Collins',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 48,
        name: 'Packaging Design',
        price: 410,
        author: 'Dominic Stewart',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 49,
        name: 'Cybersecurity Essentials',
        price: 590,
        author: 'Scarlett Sanchez',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 50,
        name: 'Brand Strategy Development',
        price: 460,
        author: 'Caleb Morris',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 51,
        name: 'Financial Management',
        price: 520,
        author: 'Eleanor Rogers',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 52,
        name: 'Diversity and Inclusion',
        price: 340,
        author: 'Nathan Reed',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 53,
        name: 'Illustration Techniques',
        price: 390,
        author: 'Hailey Cook',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 54,
        name: 'iOS App Development',
        price: 540,
        author: 'Isaiah Morgan',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 55,
        name: 'Content Strategy Planning',
        price: 350,
        author: 'Nora Bell',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 56,
        name: 'Supply Chain Management',
        price: 480,
        author: 'Thomas Murphy',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 57,
        name: 'HR Technology Systems',
        price: 420,
        author: 'Ellie Bailey',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 58,
        name: 'User Interface Design',
        price: 450,
        author: 'Levi Rivera',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 59,
        name: 'Game Development',
        price: 610,
        author: 'Aurora Cooper',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 60,
        name: 'Marketing Automation',
        price: 470,
        author: 'Christian Richardson',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 61,
        name: 'Crisis Management',
        price: 430,
        author: 'Maya Cox',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 62,
        name: 'Succession Planning',
        price: 380,
        author: 'Josiah Howard',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 63,
        name: 'Corporate Identity Design',
        price: 490,
        author: 'Emilia Ward',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 64,
        name: 'API Development',
        price: 530,
        author: 'Eli Torres',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 65,
        name: 'Customer Journey Mapping',
        price: 320,
        author: 'Ariana Peterson',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 66,
        name: 'Decision Making Skills',
        price: 410,
        author: 'Hunter Gray',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 67,
        name: 'Workplace Safety',
        price: 290,
        author: 'Nevaeh Ramirez',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 68,
        name: 'Digital Painting',
        price: 440,
        author: 'Stella James',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 69,
        name: 'Machine Learning Basics',
        price: 620,
        author: 'Brayden Watson',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 70,
        name: 'Affiliate Marketing',
        price: 270,
        author: 'Mackenzie Brooks',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 71,
        name: 'Time Management',
        price: 350,
        author: 'Kayden Kelly',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 72,
        name: 'Employee Relations',
        price: 370,
        author: 'Clara Sanders',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 73,
        name: 'Photography Composition',
        price: 420,
        author: 'Gavin Price',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 74,
        name: 'Web Security',
        price: 580,
        author: 'Anna Bennett',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 75,
        name: 'Video Marketing',
        price: 390,
        author: 'Tristan Wood',
        image: 'default.png',
        area: 'Marketing'
    },
    {
        id: 76,
        name: 'Negotiation Skills',
        price: 460,
        author: 'Savannah Barnes',
        image: 'default.png',
        area: 'Management'
    },
    {
        id: 77,
        name: 'HR Compliance',
        price: 330,
        author: 'Adrian Ross',
        image: 'default.png',
        area: 'HR & Recruting'
    },
    {
        id: 78,
        name: 'Color Theory',
        price: 310,
        author: 'Bella Henderson',
        image: 'default.png',
        area: 'Design'
    },
    {
        id: 79,
        name: 'Mobile First Development',
        price: 500,
        author: 'Jaxon Coleman',
        image: 'default.png',
        area: 'Development'
    },
    {
        id: 80,
        name: 'Customer Retention Strategies',
        price: 440,
        author: 'Peyton Jenkins',
        image: 'default.png',
        area: 'Marketing'
    }
]


let state = {
    cards: cards,
    currentFilter: 'All',
    filters: ['All', 'Marketing', 'Management', 'HR & Recruting', 'Design', 'Development'],
    coursesAmount: {
        all: cards.length,
        marketing: cards.filter(c => c.area === 'Marketing').length,
        management: cards.filter(c => c.area === 'Management').length,
        hr: cards.filter(c => c.area === 'HR & Recruting').length,
        design: cards.filter(c => c.area === 'Design').length,
        development: cards.filter(c => c.area === 'Development').length
    },
    maxAmount: 9,
    searchValue: ''
};

// -------------------- STATE UPDATE --------------------
function updateState(newState) {
    const prev = { ...state };
    state = { ...state, ...newState };

    if (shouldRenderSearchPanel(prev, state)) renderSearchPanel();
    if (shouldRenderCardsList(prev, state)) renderCardsList();
}

// -------------------- FILTERING --------------------
function filterCards(filter, searchValue) {
    const search = searchValue.trim().toLowerCase();
    return cards.filter(card => {
        const matchesFilter = filter === 'All' || card.area === filter;
        const matchesSearch = card.name.toLowerCase().includes(search);
        return matchesFilter && matchesSearch;
    });
}

// -------------------- RENDER --------------------
function renderApp() {
    const hasMore = state.maxAmount < state.cards.length;
    document.querySelector('#app').innerHTML = `
        ${Header()}
        <div class="search-panel width-container">
            ${Filters(state.filters, state.currentFilter, state.coursesAmount)}
            ${SearchInput(state.searchValue)}
        </div>
        <div class="cards-list__wrapper width-container">
            <div class="cards-list">
                ${state.cards.slice(0, state.maxAmount).map(Card).join('')}
            </div>
            <div class="cards-list__btn-container">
                ${hasMore ? '<button class="cards-list__more-btn">Load more</button>' : ''}
            </div>
        </div>
    `;
    initEventListeners();
}

function renderSearchPanel() {
    const panel = document.querySelector('.search-panel');
    panel.innerHTML = `
        ${Filters(state.filters, state.currentFilter, state.coursesAmount)}
        ${SearchInput(state.searchValue)}
    `;
    initEventListeners();
}

function renderCardsList() {
    const wrapper = document.querySelector('.cards-list__wrapper');
    const hasMore = state.maxAmount < state.cards.length;

    if (state.cards.length > 0) {
        wrapper.innerHTML = `
        <div class="cards-list">
            ${state.cards.slice(0, state.maxAmount).map(Card).join('')}
        </div>
        <div class="cards-list__btn-container">
            ${hasMore ? '<button class="cards-list__more-btn">Load more</button>' : ''}
        </div>
    `;
    } else {
        wrapper.innerHTML = `
        <div class="cards-list">
            <p class="cards-list__nothing">No courses were found</p>
        </div>

    `;
    }

    
    initEventListeners();
}

// -------------------- RENDER CONDITIONS --------------------
function shouldRenderSearchPanel(prev, curr) {
    return prev.currentFilter !== curr.currentFilter;
}

function shouldRenderCardsList(prev, curr) {
    return prev.maxAmount !== curr.maxAmount ||
           prev.currentFilter !== curr.currentFilter ||
           prev.searchValue !== curr.searchValue ||
           prev.cards.length !== curr.cards.length;
}

// -------------------- EVENT HANDLERS --------------------
function handleFilterClick(event) {
    const tab = event.target.closest('.filters__tab');
    if (!tab) return;
    const filtered = filterCards(tab.dataset.filter, state.searchValue);
    updateState({ currentFilter: tab.dataset.filter, cards: filtered, maxAmount: 9 });
}

function handleMoreButtonClick(event) {
    if (!event.target.classList.contains('cards-list__more-btn')) return;
    updateState({ maxAmount: state.maxAmount + 9 });
}

function handleSearchInput(event) {
    if (!event.target.classList.contains('search-panel__input')) return;
    const searchValue = event.target.value;
    const filtered = filterCards(state.currentFilter, searchValue);
    updateState({ searchValue, cards: filtered, maxAmount: 9 });
}

// -------------------- EVENT LISTENERS --------------------
function initEventListeners() {

    document.querySelector('.filters')?.removeEventListener('click', handleFilterClick);
    document.querySelector('.cards-list__more-btn')?.removeEventListener('click', handleMoreButtonClick);
    document.querySelector('.search-panel__input')?.removeEventListener('input', handleSearchInput);

    document.querySelector('.filters')?.addEventListener('click', handleFilterClick);
    document.querySelector('.cards-list__more-btn')?.addEventListener('click', handleMoreButtonClick);
    document.querySelector('.search-panel__input')?.addEventListener('input', handleSearchInput);
}

// -------------------- INITIALIZE --------------------
renderApp();