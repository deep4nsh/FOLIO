
// Project data with metrics, features, challenges, and learnings
const projects = [
    {
        title: "Krave - Canteen Order Management App",
        description: "A digital solution for campus canteens allowing students to pre-order meals, track orders, and make cashless payments. Reduces wait times and improves efficiency.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=640&q=80",
        technologies: ["Flutter", "Firebase", "Razor Pay API", "Provider"],
        githubUrl: "https://github.com/deep4nsh/krave",
        liveDemo: "#",
        metrics: {
            "Active Users": "500+",
            "Downloads": "1.2K+",
            "Rating": "4.8★"
        },
        features: [
            "Real-time order tracking",
            "Digital payment integration",
            "Menu customization",
            "Order history",
            "Admin dashboard"
        ],
        challenges: "Structuring nested NoSQL database nodes on Firebase caused high latency and data fetching overhead during peak canteen hours.",
        learnings: "Learned how to flatten the database tree and denormalize state models, leading to a 40% reduction in database read operations."
    },
    {
        title: "Screen Time Tracker Pro",
        description: "Productivity app that monitors device usage, provides detailed analytics, and helps users reduce screen time with smart reminders.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=640&q=80",
        technologies: ["Flutter", "Android SDK", "SQLite", "Riverpod"],
        githubUrl: "https://github.com/deep4nsh/ScreenTimePro",
        liveDemo: "#",
        metrics: {
            "Downloads": "2.5K+",
            "User Rating": "4.7★",
            "Active Users": "400+"
        },
        features: [
            "App usage statistics",
            "Daily/weekly reports",
            "Usage goals and limits",
            "Focus mode",
            "Cross-device sync"
        ],
        challenges: "Tracking precise background application usage across various Android API levels without causing massive battery drainage.",
        learnings: "Implemented SQLite indexing optimizations and local background sync channels that cut background processing CPU cycles by half."
    },
    {
        title: "Findom - Finance Social Platform",
        description: "A niche social network for finance professionals to share insights, discuss trends, and network with peers.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=640&q=80",
        technologies: ["Flutter", "Firebase", "GraphQL", "Bloc"],
        githubUrl: "https://github.com/deep4nsh/Findom",
        liveDemo: "#",
        metrics: {
            "Active Users": "800+",
            "Impressions": "15K+",
            "Groups": "120+"
        },
        features: [
            "Discussion forums",
            "Market data visualization",
            "User verification",
            "Premium content",
            "Real-time notifications"
        ],
        challenges: "Syncing real-time stock market data widgets while keeping the user feed responsive and lag-free.",
        learnings: "Mastered Flutter BLoC pattern state segregation and utilized WebSockets for low-latency market updates."
    },
    {
        title: "SliceIt - Expense Manager",
        description: "Smart expense splitting app that helps groups track shared expenses and settle balances easily.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=640&q=80",
        technologies: ["Flutter", "Firebase", "Google Auth", "GetX"],
        githubUrl: "https://github.com/deep4nsh/SliceIt",
        liveDemo: "#",
        metrics: {
            "Downloads": "3.2K+",
            "App Rating": "4.8★",
            "Groups": "1.5K+"
        },
        features: [
            "Group expense tracking",
            "Automatic balance calculation",
            "Multi-currency support",
            "Receipt scanning",
            "Payment reminders"
        ],
        challenges: "Developing a circular-dependency-free settlement algorithm for multi-user bill splitting.",
        learnings: "Gained hands-on experience in graph cycle detection algorithms to resolve debt loops, saving average settlement paths by 30%."
    },
    {
        title: "Sortify - Image Classifier",
        description: "ML-powered app that categorizes images using computer vision, with customizable categories and offline support.",
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=640&q=80",
        technologies: ["Flutter", "TensorFlow Lite", "Python", "Firebase ML"],
        githubUrl: "https://github.com/deep4nsh/sortify",
        liveDemo: "#",
        metrics: {
            "Downloads": "800+",
            "Accuracy": "94%",
            "Processed": "5.6K+"
        },
        features: [
            "Custom model training",
            "Offline classification",
            "Batch processing",
            "Category management",
            "Accuracy metrics"
        ],
        challenges: "Compiling and optimizing heavy TensorFlow Lite deep learning models to run efficiently offline on lower-end Android hardware.",
        learnings: "Explored model quantization and image scaling preprocessing pipelines which improved offline inference speed from 1.5s to 200ms."
    }
];

// Testimonials data
const testimonials = [
    {
        name: "Aarav Mehta",
        role: "Product Manager",
        company: "Krave Canteen Solutions",
        rating: 5,
        content: "Deepansh delivered the Krave app ahead of schedule. The payment gateway integration with Razorpay works flawlessly, and the UI is incredibly intuitive."
    },
    {
        name: "Sarah Jenkins",
        role: "CTO",
        company: "FocusTech Apps",
        rating: 5,
        content: "Deepansh's implementation of SQLite and Riverpod in Screen Time Tracker Pro was highly optimized. He writes clean, clean-architected code that scales."
    },
    {
        name: "Rohan Das",
        role: "Co-Founder",
        company: "Findom Social",
        rating: 5,
        content: "Deepansh is an expert in state management. Using Bloc, he helped us develop Findom, ensuring that real-time market feeds and chats updates seamlessly."
    },
    {
        name: "Emily Watson",
        role: "Lead UI Designer",
        company: "SliceIt Labs",
        rating: 5,
        content: "Collaborating with Deepansh is a delight. He has a great eye for design details and implemented the split expense settlement animations perfectly."
    },
    {
        name: "Dr. Linus Vance",
        role: "AI Research Lead",
        company: "Sortify ML",
        rating: 5,
        content: "We were impressed by Deepansh's integration of TensorFlow Lite models on-device. The application runs offline, is fast, and maintains 94% accuracy."
    }
];

// Blog data
const blogPosts = [
    {
        id: "state-management",
        title: "State Management Guide: Provider vs Bloc vs Riverpod",
        category: "Technical",
        tags: ["Flutter", "Dart", "Architecture"],
        excerpt: "An in-depth comparison of the three most popular state management approaches in Flutter, exploring when to use which for production apps.",
        date: "May 25, 2026",
        readTime: "8 min read",
        content: `
# State Management Guide: Provider vs Bloc vs Riverpod

Choosing the right state management solution is one of the most critical decisions when building a Flutter application. Let's break down the three giants of the Flutter ecosystem.

## 1. Provider
**Provider** is a wrapper around \`InheritedWidget\` to make them easier to reuse and manage. It is highly recommended for beginners and medium-sized applications.

- **Pros**: Easy to learn, simple setup, minimal boilerplate.
- **Cons**: Can lead to coupled UI and logic if not careful, context-dependent.

## 2. Bloc (Business Logic Component)
**Bloc** separates presentation from business logic using events and states. It is the industry standard for large, enterprise-grade applications.

- **Pros**: Highly testable, strict separation of concerns, predictable state changes.
- **Cons**: High boilerplate, steep learning curve.

## 3. Riverpod
**Riverpod** is a complete rewrite of Provider by the same author, designed to solve compile-time issues, remove the dependency on \`BuildContext\`, and make state management more robust.

- **Pros**: No \`BuildContext\` needed, compile-safe, highly flexible.
- **Cons**: Relatively new concepts, frequent package updates.

## Verdict
- Use **Provider** for quick prototypes or simple utility apps.
- Use **Bloc** for large teams, complex workflows, and strict testing.
- Use **Riverpod** for modern Flutter apps that value clean architecture and testability without context constraints.
        `
    },
    {
        id: "firebase-realtime",
        title: "Firebase Realtime Database: Scaling Challenges & Solutions",
        category: "Case Study",
        tags: ["Firebase", "Backend", "NoSQL"],
        excerpt: "How we tackled data synchronization latency and structured complex NoSQL data models in a highly concurrent multiplayer environment.",
        date: "May 18, 2026",
        readTime: "6 min read",
        content: `
# Firebase Realtime Database: Scaling Challenges & Solutions

Firebase Realtime Database is excellent for syncing data in real-time, but as your user base grows, you may run into typical NoSQL pitfalls.

## Challenge 1: Data Structuring (Deep Nesting)
Nesting data too deeply is a common error. Since Firebase fetches all child nodes when you access a path, deep nesting leads to huge bandwidth consumption.

**Solution**: Flatten your database. Denormalize your data just like you would in a traditional database by keeping data records in separate paths and linking them using keys.

## Challenge 2: Client Bandwidth Limits
If a user listens to a root path, any minor change triggers a download of the entire path.

**Solution**: Use specific listeners. Listen only to the exact keys that are changing. Implement cloud functions to aggregate updates.
        `
    },
    {
        id: "flutter-performance",
        title: "Performance Optimization: Securing 60FPS in Flutter",
        category: "Technical",
        tags: ["Flutter", "Optimization", "UI"],
        excerpt: "Practical tips for diagnosing rendering jank, reducing widget rebuilds, and leveraging GPU acceleration in complex layouts.",
        date: "May 10, 2026",
        readTime: "7 min read",
        content: `
# Performance Optimization: Securing 60FPS in Flutter

Users expect buttery-smooth interactions. Flutter is fast by default, but poorly written code can cause frame drops. Here is how to keep your app running at 60FPS (or 120FPS on high-refresh screens).

## 1. Avoid Heavy Build Methods
The \`build\` method should only construct widgets. Never perform database lookups, network requests, or heavy math inside \`build()\`.

## 2. Leverage \`const\` Constructors
Using \`const\` widgets allows Flutter to cache them, skipping rebuilding entirely if their inputs haven't changed.

## 3. Use RepaintBoundary
If you have a complex widget that animates alongside static content, wrap the animating widget in a \`RepaintBoundary\` to prevent the entire screen from repainting.
        `
    },
    {
        id: "career-journey",
        title: "My Career Journey: Transitioning from Web to Mobile Dev",
        category: "Insights",
        tags: ["Career", "Web", "Mobile"],
        excerpt: "A personal reflection on the shift from web frameworks to Flutter/Android SDK, highlighting key concepts that helped me adapt.",
        date: "May 02, 2026",
        readTime: "5 min read",
        content: `
# Transitioning from Web to Mobile Dev

Moving from Web development (React, HTML/CSS) to Mobile development (Flutter, Android SDK) was an exciting shift. Here are the key lessons learned.

## Declarative UI is the Bridge
If you know React, Flutter's declarative layout model will feel immediately familiar. State changes rebuild the widget tree, just like React renders.

## Mobile Limitations
Unlike web pages that have virtually unlimited memory on modern desktops, mobile devices have strict memory limits and background process constraints. Managing resource cleanup (disposing controllers) is critical on mobile.
        `
    },
    {
        id: "payment-integration",
        title: "Payment Integration: Razorpay & Stripe in Flutter Apps",
        category: "Lessons",
        tags: ["Payments", "API", "Security"],
        excerpt: "A step-by-step guide to setting up secure client-side checkouts and verifying transactions using webhooks.",
        date: "April 20, 2026",
        readTime: "9 min read",
        content: `
# Payment Integration: Razorpay & Stripe in Flutter Apps

Integrating payments securely requires careful orchestration between client, payment gateway, and backend server.

## 1. Client SDK Setup
Install payment SDKs and configure platform-specific credentials (like Apple Pay configurations or Android manifest files).

## 2. Server-side Verification
Never trust payment status reported solely by the client application. Always use secure webhooks sent directly from Razorpay or Stripe to your backend to verify and record transaction completion.
        `
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('projects.html')) {
        loadAllProjects();
        setupProjectFilters();
        setupProjectModal();
    } else if (window.location.pathname.includes('blog.html')) {
        loadBlogPage();
    } else {
        loadProjects();
        loadTestimonials();
        loadBlogPreviews();
    }
    initializeAnimations();
    createFloatingParticles();
    initializeScrollProgress();
    initializeTypewriterEffect();
    initializeInteractiveCards();
    initializeParallaxEffects();
    setupMobileMenu();
    setupThemeToggle();
});

// Load projects for homepage
function loadProjects() {
    const projectsGrid = document.querySelector('#projects .grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        projects.slice(0, 3).forEach((project, index) => {
            const projectCard = createProjectCard(project, false);
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

// Create project card HTML
function createProjectCard(project, isDetailed = false) {
    const card = document.createElement('div');
    card.className = `project-card bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 transform-gpu ${project.technologies.map(t => `tech-${t.toLowerCase().replace(/\s+/g, '-')}`).join(' ')}`;
    
    // Construct metrics block
    let metricsHtml = '';
    if (project.metrics) {
        metricsHtml = '<div class="flex gap-4 mb-4 text-xs text-primary-400 font-semibold border-b border-gray-800 pb-3">';
        for (const [key, value] of Object.entries(project.metrics)) {
            metricsHtml += `<span>${key}: <span class="text-white">${value}</span></span>`;
        }
        metricsHtml += '</div>';
    }

    if (isDetailed) {
        card.innerHTML = `
            <div class="relative overflow-hidden h-64">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700">
                <div class="project-overlay absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 transition-opacity duration-500"></div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-primary-400 mb-2">${project.title}</h3>
                ${metricsHtml}
                <p class="text-gray-400 mb-4 line-clamp-2">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.technologies.map(tech => 
                        `<span class="bg-primary-900/60 text-primary-200 px-3 py-1 rounded-full text-xs">${tech}</span>`
                    ).join('')}
                </div>
                <div class="flex justify-between items-center">
                    <button class="view-details-btn text-primary-400 hover:text-primary-300 font-semibold transition-colors flex items-center gap-1" data-project-id="${projects.indexOf(project)}">
                        View Details <i data-feather="arrow-right" class="w-4 h-4"></i>
                    </button>
                    <div class="flex gap-4">
                        <a href="${project.githubUrl}" class="text-gray-400 hover:text-white transition-colors" target="_blank" aria-label="GitHub">
                            <i data-feather="github" class="w-5 h-5"></i>
                        </a>
                        <a href="${project.liveDemo}" class="text-gray-400 hover:text-white transition-colors" target="_blank" aria-label="Demo">
                            <i data-feather="external-link" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    } else {
        card.innerHTML = `
            <div class="relative overflow-hidden h-48">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700">
                <div class="project-overlay absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 transition-opacity duration-500"></div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-primary-400 mb-2">${project.title}</h3>
                ${metricsHtml}
                <p class="text-gray-400 mb-4 line-clamp-2">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.technologies.map(tech => 
                        `<span class="bg-primary-900/60 text-primary-200 px-3 py-1 rounded-full text-xs">${tech}</span>`
                    ).join('')}
                </div>
                <div class="flex gap-4">
                    <a href="${project.githubUrl}" class="text-primary-400 hover:text-primary-300 font-semibold transition-all duration-300 flex items-center gap-1">
                        <i data-feather="github" class="w-4 h-4"></i> Code
                    </a>
                    <a href="${project.liveDemo}" class="text-secondary-400 hover:text-secondary-300 font-semibold transition-all duration-300 flex items-center gap-1">
                        <i data-feather="external-link" class="w-4 h-4"></i> Demo
                    </a>
                </div>
            </div>
        `;
    }
    
    return card;
}

// Setup project filters on projects page
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-primary-600', 'text-white'));
            filterButtons.forEach(btn => btn.classList.add('border', 'border-primary-600', 'text-primary-400'));
            
            button.classList.add('active', 'bg-primary-600', 'text-white');
            button.classList.remove('border', 'border-primary-600', 'text-primary-400');
            
            const filter = button.id.replace('filter-', '').toLowerCase();
            const cards = document.querySelectorAll('.project-card');
            
            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    // Check classes
                    let match = false;
                    card.classList.forEach(cls => {
                        if (cls.includes(`tech-${filter}`)) match = true;
                    });
                    card.style.display = match ? 'block' : 'none';
                }
            });
        });
    });
}

// Setup project details modal
function setupProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal');
    const modalContent = document.getElementById('modal-content');
    
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.view-details-btn');
        if (btn) {
            const projectId = btn.getAttribute('data-project-id');
            const project = projects[projectId];
            
            // Build metrics detail list
            let metricsList = '';
            if (project.metrics) {
                for (const [key, value] of Object.entries(project.metrics)) {
                    metricsList += `
                        <div class="bg-dark-700 p-4 rounded-xl border border-gray-700 text-center">
                            <span class="text-gray-400 text-xs uppercase block mb-1">${key}</span>
                            <span class="text-xl font-bold text-primary-400">${value}</span>
                        </div>
                    `;
                }
            }

            modalContent.innerHTML = `
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <img src="${project.image}" alt="${project.title}" class="w-full rounded-2xl mb-6 border border-gray-700 object-cover h-64 shadow-inner">
                        <div class="grid grid-cols-3 gap-4 mb-6">
                            ${metricsList}
                        </div>
                        <div class="flex gap-4 justify-center">
                            <a href="${project.githubUrl}" class="bg-dark-700 border border-gray-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-dark-600 transition-colors w-1/2 justify-center font-semibold" target="_blank">
                                <i data-feather="github" class="w-5 h-5"></i> View Code
                            </a>
                            <a href="${project.liveDemo}" class="bg-primary-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-primary-500 transition-colors w-1/2 justify-center font-semibold" target="_blank">
                                <i data-feather="external-link" class="w-5 h-5"></i> Live Demo
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between">
                        <div>
                            <h2 class="text-3xl font-bold text-primary-400 mb-3">${project.title}</h2>
                            <p class="text-gray-300 mb-6 leading-relaxed">${project.description}</p>
                            
                            <h3 class="text-lg font-semibold text-white mb-2">Key Features</h3>
                            <ul class="list-disc pl-5 text-gray-300 space-y-1 mb-6">
                                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>

                            <h3 class="text-lg font-semibold text-white mb-2">Technical Challenges</h3>
                            <p class="text-gray-300 mb-6 leading-relaxed border-l-4 border-secondary-500 pl-4 bg-dark-700/40 py-2 rounded-r-xl">${project.challenges}</p>

                            <h3 class="text-lg font-semibold text-white mb-2">Key Learnings & Impact</h3>
                            <p class="text-gray-300 mb-6 leading-relaxed border-l-4 border-primary-500 pl-4 bg-dark-700/40 py-2 rounded-r-xl">${project.learnings}</p>
                        </div>
                        
                        <div>
                            <h3 class="text-sm font-semibold text-gray-400 mb-2">Technologies Used</h3>
                            <div class="flex flex-wrap gap-2">
                                ${project.technologies.map(tech => 
                                    `<span class="bg-primary-900/60 text-primary-200 px-3 py-1 rounded-full text-xs font-semibold">${tech}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            feather.replace();
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        });
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Load testimonials
let currentTestimonialIndex = 0;
function loadTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
    
    renderTestimonial(currentTestimonialIndex);
    
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
            renderTestimonial(currentTestimonialIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            renderTestimonial(currentTestimonialIndex);
        });
    }
    
    // Auto-slide every 8 seconds
    setInterval(() => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        renderTestimonial(currentTestimonialIndex);
    }, 8000);
}

function renderTestimonial(index) {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
    
    const item = testimonials[index];
    
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += `<i data-feather="star" class="w-5 h-5 inline ${i < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}"></i>`;
        }
        
        container.innerHTML = `
            <div class="flex justify-center gap-1 mb-6">
                ${stars}
            </div>
            <p class="text-lg md:text-xl text-gray-300 italic text-center mb-8 px-4 leading-relaxed">
                "${item.content}"
            </p>
            <div class="text-center">
                <h4 class="text-lg font-semibold text-primary-400">${item.name}</h4>
                <p class="text-sm text-gray-400">${item.role} at ${item.company}</p>
            </div>
        `;
        
        feather.replace();
        container.style.opacity = '1';
    }, 300);
}

// Load blog previews on homepage
function loadBlogPreviews() {
    const blogGrid = document.getElementById('blog-preview-grid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = '';
    const featuredPosts = blogPosts.slice(0, 3);
    
    featuredPosts.forEach((post, index) => {
        const postCard = document.createElement('div');
        postCard.className = 'bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 p-6 flex flex-col justify-between hover:scale-[1.02] transform-gpu';
        
        postCard.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-4">
                    <span class="bg-secondary-900/60 text-secondary-200 px-3 py-1 rounded-full text-xs font-semibold">${post.category}</span>
                    <span class="text-xs text-gray-400">${post.date}</span>
                </div>
                <h3 class="text-xl font-semibold text-primary-400 mb-3 hover:text-primary-300 transition-colors">
                    <a href="blog.html?id=${post.id}">${post.title}</a>
                </h3>
                <p class="text-gray-400 mb-6 text-sm line-clamp-3 leading-relaxed">${post.excerpt}</p>
            </div>
            <div class="flex justify-between items-center border-t border-gray-800 pt-4">
                <span class="text-xs text-gray-400 flex items-center gap-1">
                    <i data-feather="clock" class="w-4 h-4"></i> ${post.readTime}
                </span>
                <a href="blog.html?id=${post.id}" class="text-primary-400 hover:text-primary-300 transition-colors text-sm font-semibold flex items-center gap-1">
                    Read More <i data-feather="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
        `;
        blogGrid.appendChild(postCard);
    });
    
    feather.replace();
}

// Load blog page (list or detailed post)
function loadBlogPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    const blogListSection = document.getElementById('blog-list-section');
    const blogDetailSection = document.getElementById('blog-detail-section');
    
    if (postId) {
        if (blogListSection) blogListSection.classList.add('hidden');
        if (blogDetailSection) {
            blogDetailSection.classList.remove('hidden');
            renderBlogPostDetail(postId);
        }
    } else {
        if (blogDetailSection) blogDetailSection.classList.add('hidden');
        if (blogListSection) {
            blogListSection.classList.remove('hidden');
            renderBlogList();
            setupBlogFilters();
        }
    }
}

function renderBlogPostDetail(id) {
    const detailContainer = document.getElementById('blog-post-content');
    if (!detailContainer) return;
    
    const post = blogPosts.find(p => p.id === id);
    if (!post) {
        detailContainer.innerHTML = `
            <div class="text-center py-20">
                <h2 class="text-3xl font-bold text-red-500 mb-4">Post Not Found</h2>
                <a href="blog.html" class="text-primary-400 hover:underline">Back to Blog</a>
            </div>
        `;
        return;
    }
    
    // Simple markdown rendering logic
    let htmlContent = post.content
        .replace(/^# (.*$)/gim, '<h1 class="text-3xl md:text-4xl font-bold text-primary-400 mt-8 mb-4 border-b border-gray-800 pb-2">$1</h1>')
        .replace(/^## (.*$)/gim, '<h2 class="text-xl md:text-2xl font-semibold text-secondary-400 mt-6 mb-3">$1</h2>')
        .replace(/^### (.*$)/gim, '<h3 class="text-lg md:text-xl font-medium text-white mt-4 mb-2">$1</h3>')
        .replace(/^\- (.*$)/gim, '<li class="text-gray-300 ml-6 list-disc mb-1">$1</li>')
        .replace(/^\* (.*$)/gim, '<li class="text-gray-300 ml-6 list-disc mb-1">$1</li>')
        .replace(/\`([^`]+)\`/gim, '<code class="bg-dark-800 text-primary-300 px-2 py-1 rounded text-sm">$1</code>')
        .split('\n\n')
        .map(p => {
            p = p.trim();
            if (!p) return '';
            if (p.startsWith('<h') || p.startsWith('<li') || p.startsWith('<ul')) return p;
            return `<p class="mb-4 text-gray-300 leading-relaxed">${p}</p>`;
        })
        .join('');

    detailContainer.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <a href="blog.html" class="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors font-semibold">
                <i data-feather="arrow-left" class="w-4 h-4"></i> Back to Articles
            </a>
            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                <span class="bg-secondary-900/60 text-secondary-200 px-3 py-1 rounded-full text-xs font-semibold">${post.category}</span>
                <span>${post.date}</span>
                <span>•</span>
                <span>${post.readTime}</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">${post.title}</h1>
            <div class="border-t border-gray-800 pt-8 mt-6 markdown-body">
                ${htmlContent}
            </div>
            <div class="flex flex-wrap gap-2 mt-12 pt-6 border-t border-gray-800">
                ${post.tags.map(tag => `<span class="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-xs">#${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    feather.replace();
}

function renderBlogList(filteredCategory = 'all') {
    const listGrid = document.getElementById('blog-posts-grid');
    if (!listGrid) return;
    
    listGrid.innerHTML = '';
    
    const searchVal = document.getElementById('blog-search')?.value.toLowerCase() || '';
    
    const filtered = blogPosts.filter(post => {
        const matchesCategory = filteredCategory === 'all' || post.category.toLowerCase() === filteredCategory.toLowerCase();
        const matchesSearch = post.title.toLowerCase().includes(searchVal) || 
                              post.excerpt.toLowerCase().includes(searchVal) || 
                              post.tags.some(t => t.toLowerCase().includes(searchVal));
        return matchesCategory && matchesSearch;
    });
    
    if (filtered.length === 0) {
        listGrid.innerHTML = `
            <div class="col-span-full text-center py-20 text-gray-400">
                <i data-feather="alert-circle" class="w-12 h-12 mx-auto mb-4 text-gray-500"></i>
                <p class="text-xl">No articles found matching your criteria.</p>
            </div>
        `;
        feather.replace();
        return;
    }
    
    filtered.forEach((post, index) => {
        const postCard = document.createElement('div');
        postCard.className = 'bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 p-6 flex flex-col justify-between hover:scale-[1.02] transform-gpu';
        
        postCard.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-4">
                    <span class="bg-secondary-900/60 text-secondary-200 px-3 py-1 rounded-full text-xs font-semibold">${post.category}</span>
                    <span class="text-xs text-gray-400">${post.date}</span>
                </div>
                <h3 class="text-xl font-semibold text-primary-400 mb-3 hover:text-primary-300 transition-colors">
                    <a href="blog.html?id=${post.id}">${post.title}</a>
                </h3>
                <p class="text-gray-400 mb-6 text-sm line-clamp-3 leading-relaxed">${post.excerpt}</p>
            </div>
            <div class="flex justify-between items-center border-t border-gray-800 pt-4">
                <span class="text-xs text-gray-400 flex items-center gap-1">
                    <i data-feather="clock" class="w-4 h-4"></i> ${post.readTime}
                </span>
                <a href="blog.html?id=${post.id}" class="text-primary-400 hover:text-primary-300 transition-colors text-sm font-semibold flex items-center gap-1">
                    Read More <i data-feather="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
        `;
        
        listGrid.appendChild(postCard);
    });
    
    feather.replace();
}

function setupBlogFilters() {
    const filterButtons = document.querySelectorAll('.blog-filter-btn');
    const searchInput = document.getElementById('blog-search');
    
    let activeCategory = 'all';
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-primary-600', 'text-white'));
            filterButtons.forEach(btn => btn.classList.add('border', 'border-primary-600', 'text-primary-400'));
            
            button.classList.add('active', 'bg-primary-600', 'text-white');
            button.classList.remove('border', 'border-primary-600', 'text-primary-400');
            
            activeCategory = button.id.replace('filter-', '').toLowerCase();
            renderBlogList(activeCategory);
        });
    });
    
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderBlogList(activeCategory);
        });
    }
}

// Generate dynamic background particles
function createFloatingParticles() {
    const container = document.createElement('div');
    container.className = 'floating-particles';
    document.body.appendChild(container);
    
    const particleCount = 15;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 8 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        particle.style.animationDuration = `${Math.random() * 12 + 10}s`;
        particle.style.animationDelay = `${Math.random() * -20}s`;
        
        container.appendChild(particle);
    }
}

// Scroll progress bar indicator
function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar visible';
    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    progressBar.appendChild(progressFill);
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (height > 0) ? (winScroll / height) * 100 : 0;
        progressFill.style.width = scrolled + '%';
    });
}

// Typewriter effect for Hero
function initializeTypewriterEffect() {
    const heroTitle = document.querySelector('.min-h-screen h1');
    if (!heroTitle) return;
    
    const words = ["Flutter Android Developer", "Mobile Architect", "UI/UX Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    heroTitle.classList.remove('animate-typing');
    heroTitle.style.borderRight = '3px solid #0ea5e9';
    heroTitle.style.whiteSpace = 'normal';
    heroTitle.style.display = 'inline-block';
    
    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            heroTitle.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            heroTitle.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = 100;
        if (isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before next
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// Setup mobile navigation menu click behavior
function setupMobileMenu() {
    // Event delegation for shadow roots and local DOM
    const header = document.querySelector('portfolio-header');
    if (header && header.shadowRoot) {
        const menuBtn = header.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = header.shadowRoot.querySelector('.nav-links');
        
        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navLinks.classList.toggle('active');
            });
            
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
        }
    }
}

// Setup Dark/Light mode theme toggle synchronization
function setupThemeToggle() {
    const isDark = localStorage.getItem('theme') !== 'light';
    applyTheme(isDark);
    
    document.addEventListener('theme-changed', (e) => {
        applyTheme(e.detail.isDark);
    });
}

function applyTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
        localStorage.setItem('theme', 'light');
    }
}

// Interactive card hover effects
function initializeInteractiveCards() {
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.01)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Parallax effects for Hero
function initializeParallaxEffects() {
    const heroSection = document.querySelector('.min-h-screen');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            heroSection.style.backgroundPositionY = `${rate}px`;
        });
    }
}

// Staggered scroll animations for sections
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'skills') {
                    const cards = entry.target.querySelectorAll('.text-center, .skill-card');
                    cards.forEach((card, i) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        }, i * 100);
                    });
                } else if (entry.target.id === 'projects') {
                    const cards = entry.target.querySelectorAll('.project-card');
                    cards.forEach((card, i) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, i * 150);
                    });
                } else {
                    entry.target.classList.add('animate-fade-in');
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
