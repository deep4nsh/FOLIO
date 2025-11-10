
// Project data
const projects = [
    {
        title: "E-Commerce Flutter App",
        description: "A complete shopping app with payment integration, user authentication, and real-time inventory management. Features include product catalog, cart system, order tracking, and admin dashboard.",
        image: "http://static.photos/retail/640x360/1",
        technologies: ["Flutter", "Firebase", "Stripe", "Provider"],
        githubUrl: "#",
        liveDemo: "#",
        features: [
            "Secure payment processing with Stripe",
            "Real-time inventory updates",
            "User authentication with Firebase",
            "Admin dashboard for product management",
            "Order tracking system"
        ]
    },
    {
        title: "Weather Forecast App",
        description: "Beautiful weather app with location-based forecasts, interactive maps, and weather alerts. Provides detailed 7-day forecasts, hourly predictions, and severe weather notifications.",
        image: "http://static.photos/nature/640x360/2",
        technologies: ["Flutter", "OpenWeather API", "Bloc", "Geolocator"],
        githubUrl: "#",
        liveDemo: "#",
        features: [
            "Location-based weather data",
            "Interactive weather maps",
            "7-day and hourly forecasts",
            "Severe weather alerts",
            "Dark/light mode support"
        ]
    },
    {
        title: "Fitness Tracker",
        description: "Comprehensive fitness app with workout plans, progress tracking, and social features. Tracks workouts, nutrition, and body metrics with detailed analytics.",
        image: "http://static.photos/wellness/640x360/3",
        technologies: ["Flutter", "SQLite", "Charts", "GetX"],
        githubUrl: "#",
        liveDemo: "#",
        features: [
            "Custom workout plans",
            "Nutrition tracking",
            "Progress analytics",
            "Social sharing",
            "Offline functionality"
        ]
    },
{
        title: "News Reader App",
        description: "Modern news aggregator with personalized feeds, offline reading, and dark mode support.",
        image: "http://static.photos/technology/640x360/4",
        technologies: ["Flutter", "News API", "Hive", "Riverpod"],
        githubUrl: "#",
        liveDemo: "#"
    },
    {
        title: "Chat Application",
        description: "Real-time messaging app with group chats, media sharing, and push notifications.",
        image: "http://static.photos/workspace/640x360/5",
        technologies: ["Flutter", "Socket.io", "Node.js", "MongoDB"],
        githubUrl: "#",
        liveDemo: "#"
    },
    {
        title: "Task Management",
        description: "Productivity app with task organization, team collaboration, and deadline tracking.",
        image: "http://static.photos/office/640x360/6",
        technologies: ["Flutter", "Supabase", "Flutter Bloc", "Notifications"],
        githubUrl: "#",
        liveDemo: "#"
    }
];
// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('projects.html')) {
        loadAllProjects();
        setupProjectFilters();
        setupProjectModal();
    } else {
        loadProjects();
    }
    initializeAnimations();
    createFloatingParticles();
    initializeScrollProgress();
    initializeTypewriterEffect();
    initializeInteractiveCards();
    initializeParallaxEffects();
});
// Load projects into the grid with staggered animations
function loadProjects() {
    const projectsGrid = document.querySelector('#projects .grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        projects.forEach((project, index) => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
            
            setTimeout(() => {
                projectCard.classList.add('animate');
            }, index * 150);
        });
    }
}

// Load all projects for projects page
function loadAllProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        projects.forEach((project, index) => {
            const projectCard = createProjectCard(project, true);
            projectsGrid.appendChild(projectCard);
            
            setTimeout(() => {
                projectCard.classList.add('animate');
            }, index * 100);
        });
    }
}

// Create enhanced project card for projects page
function createProjectCard(project, isDetailed = false) {
    const card = document.createElement('div');
    card.className = `project-card bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 transform-gpu ${project.technologies.map(t => `tech-${t.toLowerCase().replace(/\s+/g, '-')}`).join(' ')}`;
    
    if (isDetailed) {
        card.innerHTML = `
            <div class="relative overflow-hidden h-64">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700">
                <div class="project-overlay absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 transition-opacity duration-500"></div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-primary-400 mb-3">${project.title}</h3>
                <p class="text-gray-400 mb-4 line-clamp-2">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => 
                        `<span class="bg-primary-900 text-primary-200 px-3 py-1 rounded-full text-sm">${tech}</span>`
                    ).join('')}
                </div>
                <div class="flex justify-between items-center">
                    <button class="view-details-btn text-primary-400 hover:text-primary-300 transition-colors" data-project-id="${projects.indexOf(project)}">
                        View Details
                    </button>
                    <div class="flex gap-4">
                        <a href="${project.githubUrl}" class="text-gray-400 hover:text-white transition-colors" target="_blank">
                            <i data-feather="github" class="w-5 h-5"></i>
                        </a>
                        <a href="${project.liveDemo}" class="text-gray-400 hover:text-white transition-colors" target="_blank">
                            <i data-feather="external-link" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    } else {
        card.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-700">
                <div class="project-overlay absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 transition-opacity duration-500"></div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-primary-400 mb-3 transform transition-transform duration-500">${project.title}</h3>
                <p class="text-gray-400 mb-4 transition-all duration-500">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4 transition-all duration-500">
                    ${project.technologies.map(tech => 
                        `<span class="bg-primary-900 text-primary-200 px-3 py-1 rounded-full text-sm transform transition-transform duration-300 hover:scale-110">${tech}</span>`
                    ).join('')}
                </div>
                <div class="flex gap-4 transition-all duration-500">
                    <a href="${project.githubUrl}" class="text-primary-400 hover:text-primary-300 transition-all duration-300 transform hover:scale-110">
                        <i data-feather="github" class="w-5 h-5"></i> Code
                    </a>
                    <a href="${project.liveDemo}" class="text-secondary-400 hover:text-secondary-300 transition-all duration-300 transform hover:scale-110">
                        <i data-feather="external-link" class="w-5 h-5"></i> Demo
                    </a>
                </div>
            </div>
        `;
    }
    
    return card;
}

// Setup project filters
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-primary-600', 'text-white'));
            filterButtons.forEach(btn => btn.classList.add('border', 'border-primary-600', 'text-primary-400'));
            
            button.classList.add('active', 'bg-primary-600', 'text-white');
            button.classList.remove('border', 'border-primary-600', 'text-primary-400');
            
            // Filter projects
            const filter = button.id.replace('filter-', '');
            const projects = document.querySelectorAll('.project-card');
            
            projects.forEach(project => {
                if (filter === 'all') {
                    project.style.display = 'block';
                } else {
                    if (project.classList.contains(`tech-${filter}`)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Setup project modal
function setupProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal');
    const modalContent = document.getElementById('modal-content');
    const viewButtons = document.querySelectorAll('.view-details-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project-id');
            const project = projects[projectId];
            
            modalContent.innerHTML = `
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <img src="${project.image}" alt="${project.title}" class="w-full rounded-lg mb-4">
                        <div class="flex gap-4 justify-center">
                            <a href="${project.githubUrl}" class="bg-dark-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-dark-600 transition-colors" target="_blank">
                                <i data-feather="github" class="w-5 h-5"></i> View Code
                            </a>
                            <a href="${project.liveDemo}" class="bg-primary-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary-500 transition-colors" target="_blank">
                                <i data-feather="external-link" class="w-5 h-5"></i> Live Demo
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-primary-400 mb-4">${project.title}</h2>
                        <p class="text-gray-300 mb-6">${project.description}</p>
                        
                        <h3 class="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                        <div class="flex flex-wrap gap-2 mb-6">
                            ${project.technologies.map(tech => 
                                `<span class="bg-primary-900 text-primary-200 px-3 py-1 rounded-full text-sm">${tech}</span>`
                            ).join('')}
                        </div>
                        
                        <h3 class="text-xl font-semibold text-white mb-3">Key Features</h3>
                        <ul class="list-disc pl-5 text-gray-300 space-y-2 mb-6">
                            ${project.features ? project.features.map(feature => 
                                `<li>${feature}</li>`
                            ).join('') : '<li>No features listed</li>'}
                        </ul>
                    </div>
                </div>
            `;
            
            feather.replace();
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }
    });
}
// Initialize interactive cards with hover effects
function initializeInteractiveCards() {
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover');
            card.style.transform = 'translateY(-8px) scale(1.02) rotate(2deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover');
            card.style.transform = 'translateY(0) scale(1) rotate(0)';
        });
    });
}

// Initialize parallax effects
function initializeParallaxEffects() {
    const heroSection = document.querySelector('.min-h-screen');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.backgroundPositionY = `${rate}px`;
        });
    }
}

// Create project card element with enhanced animations
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 transform-gpu';
    
    card.innerHTML = `
        <div class="relative overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-700">
            <div class="project-overlay absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 transition-opacity duration-500"></div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold text-primary-400 mb-3 transform transition-transform duration-500">${project.title}</h3>
            <p class="text-gray-400 mb-4 transition-all duration-500">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4 transition-all duration-500">
                ${project.technologies.map(tech => 
                    `<span class="bg-primary-900 text-primary-200 px-3 py-1 rounded-full text-sm transform transition-transform duration-300 hover:scale-110">${tech}</span>`
                ).join('')}
            </div>
            <div class="flex gap-4 transition-all duration-500">
                <a href="${project.githubUrl}" class="text-primary-400 hover:text-primary-300 transition-all duration-300 transform hover:scale-110">
                    <i data-feather="github" class="w-5 h-5"></i> Code
                </a>
                <a href="${project.liveDemo}" class="text-secondary-400 hover:text-secondary-300 transition-all duration-300 transform hover:scale-110">
                    <i data-feather="external-link" class="w-5 h-5"></i> Demo
                </a>
            </div>
        </div>
    `;
    
    return card;
}
// Initialize animations with enhanced effects
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'skills') {
                    animateSkillsCards();
                } else if (entry.target.id === 'hero') {
                    animateHeroSection();
                } else if (entry.target.id === 'projects') {
                    animateProjectCards();
                } else if (entry.target.id === 'contact') {
                    animateContactSection();
                } else {
                    entry.target.classList.add('animate-fade-in');
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Animate skill cards with staggered effects
    function animateSkillsCards() {
        const skillCards = document.querySelectorAll('#skills .text-center');
        skillCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-slide-in-up');
                card.style.setProperty('--delay', `${index * 0.1}s`);
            }, index * 150);
        });
    }

    // Animate hero section with enhanced effects
    function animateHeroSection() {
        const hero = document.querySelector('.min-h-screen');
        hero.classList.add('animate-fade-in-up');
        
        const h1 = hero.querySelector('h1');
        const p = hero.querySelector('p');
        const buttons = hero.querySelectorAll('a');
        
        setTimeout(() => {
            h1.classList.add('animate-typing');
        }, 500);
        
        setTimeout(() => {
            p.classList.add('animate-fade-in');
        }, 1000);
        
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.classList.add('animate-pulse-glow');
                button.style.setProperty('--btn-delay', `${index * 0.2}s`);
            }, 1200 + (index * 200));
        });
    }

    // Animate project cards with enhanced effects
    function animateProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-float-in');
                card.style.setProperty('--card-delay', `${index * 0.1}s`);
            }, index * 100);
        });
    }

    // Animate contact section
    function animateContactSection() {
        const contactSection = document.querySelector('#contact');
        const h2 = contactSection.querySelector('h2');
        const p = contactSection.querySelector('p');
        const buttons = contactSection.querySelectorAll('a');
        
        h2.classList.add('animate-bounce-in');
        p.classList.add('animate-fade-in');
        
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.classList.add('animate-scale-in');
            }, index * 200);
        });
    }
}
// Smooth scroll for navigation links with animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Add scroll animation
            document.body.style.scrollBehavior = 'smooth';
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Add visual feedback
            this.classList.add('animate-pulse');
            setTimeout(() => {
                this.classList.remove('animate-pulse');
            }, 1000);
        }
    });
});
