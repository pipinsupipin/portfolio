// ===========================
// DATA SOURCE
// ===========================
const PORTFOLIO_DATA = {
    profile: {
        firstName: "kevin",
        lastName: "azaria",
    },
    skills: [
        "Data Analysis", "Machine Learning", "Flutter Development", 
        "Web Engineering", "AI Implementation"
    ],
    experience: [
        {
            id: "01",
            title: "Bayer",
            location: "Surabaya, Indonesia",
            role: "Data Analyst Intern",
            category: "Incoming Mission",
            desc: "Selected for the Production Engineering (PE) function. Ready to contribute to operational excellence and data-driven projects starting February 2025.",
            image: "/img/exp/bayer.png"
        },
        {
            id: "02",
            title: "Sumatra Expedition",
            location: "Agam, West Sumatra",
            role: "Tech-Support Volunteer",
            category: "Disaster Recovery",
            desc: "Supported recovery efforts by installing water filtration systems for clean water access. Also assisted the electrical team in Starlink deployment to restore area connectivity.",
            image: "/img/exp/sumatra.png"
        },
        {
            id: "03",
            title: "SUARA 2025 Wepose",
            location: "Surabaya, Indonesia",
            role: "Main Event Volunteer",
            category: "Volunteer",
            desc: "Acted as stage runner and timekeeper to ensure a seamless show flow for 1,000+ attendees. Contributed to community campaigns by distributing 5,000 milk boxes.",
            image: "/img/exp/suara.png"
        },
        {
            id: "04",
            title: "GTK Airlangga 4.0",
            location: "Surabaya, Indonesia",
            role: "Grand Closing PIC",
            category: "Event Management",
            desc: "Part of the lead team coordinating the closing ceremony for 3,000+ students. Managed stage flow, performers, and technical setups with 95% on-time performance.",
            image: "/img/exp/gtka.png"
        },
        {
            id: "05",
            title: "Wanagala (POINTER)",
            location: "Surabaya, Indonesia",
            role: "Chairperson",
            category: "Leadership",
            desc: "Led a committee of 100+ to organize a massive inter-cohort gathering. Created interactive concepts to strengthen connections across 4 generations of IS students.",
            image: "/img/exp/wanagala.png"
        },
        {
            id: "06",
            title: "POINTER 2025",
            location: "Surabaya, Indonesia",
            role: "PR & Licensing Coord.",
            category: "Public Relations",
            desc: "Coordinated PR and licensing activities for the university orientation program. Handled permits and external communications with a 100% approval rate.",
            image: "/img/exp/pointer.png"
        },
        {
            id: "07",
            title: "HIMSI UNAIR",
            location: "Surabaya, Indonesia",
            role: "Staff of HRD",
            category: "Organization",
            desc: "Managed human resource development programs, including internal upgrading and bonding events for 120+ new Information Systems students.",
            image: "/img/exp/himsi.png"
        }
    ],
    projects: [
        {
            title: "DocuMate: RAG-Based Documentation",
            tech: ["Python", "Gemini AI", "RAG Architecture", "Django"],
            desc: "An automated documentation engine for Software Engineers. By implementing Retrieval-Augmented Generation (RAG) and Gemini LLM, it transforms GitHub repositories into professional, journal-standard documentation. It offers five specialized documentation types, ensuring structural consistency and technical clarity with a single repository link.",
            link: "https://github.com/AgileSoftDev-2025/DocuMate",
            image: "/img/project/documate.png"
        },
        {
            title: "TugasKu: Gamified Task Engine",
            tech: ["Flutter", "Laravel", "REST API", "MySQL"],
            desc: "A cross-platform productivity ecosystem (Web & Mobile) featuring a unique 'Streak' mechanism to tackle user procrastination. Built with a Laravel backend and Flutter mobile frontend, it synchronizes task management through a centralized JSON API. Includes integrated Pomodoro timers, dynamic calendar views, and a sophisticated streak-freezing logic.",
            link: "https://github.com/pipinsupipin/TugasKuMobile",
            image: "/img/project/tugasku.png"
        },
        {
            title: "Nigeria Aviation Insights",
            tech: ["Tableau", "Data Analytics", "GIS Mapping"],
            desc: "A high-fidelity data visualization project analyzing flight delays across Nigeria's airspace. This interactive dashboard suite provides 360-degree insights—ranging from high-level operational overviews to granular airline performance and route efficiency metrics—designed to identify systemic bottlenecks through professional-grade analytics.",
            link: "https://public.tableau.com/app/profile/ananda.aqeel/viz/NigeriaAirlinePerformancebyKelompok9AVDPrakI2/D1",
            image: "/img/project/nigeria.png"
        }
    ],
    contact: {
        email: "kevinfarrel53@gmail.com",
        phone: "6281212550004",
        messages: {
            whatsapp: "Halo Kevin! Habis liat porto kamu nih. Lagi open buat ngobrolin project atau sharing-sharing ngga?",
            emailSubject: "Let's Connect! ✦",
            emailBody: "Halo Kevin, baru liat portfolio kamu dan tertarik sama project-projectnya. Ngobrol santai yuk?"
        }
    }
};

// ===========================
// UTILITY FUNCTIONS
// ===========================
const utils = {
    // Generate contact URLs
    getContactUrls() {
        const { email, phone, messages } = PORTFOLIO_DATA.contact;
        return {
            whatsapp: `https://wa.me/${phone}?text=${encodeURIComponent(messages.whatsapp)}`,
            email: `mailto:${email}?subject=${encodeURIComponent(messages.emailSubject)}&body=${encodeURIComponent(messages.emailBody)}`
        };
    },

    // Smooth scroll to section
    scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    // Set animation delays dynamically
    setAnimationDelays(selector) {
        document.querySelectorAll(selector).forEach((el, idx) => {
            el.style.setProperty('--index', idx + 1);
        });
    }
};

// ===========================
// RENDER FUNCTIONS
// ===========================
const render = {
    // Render marquee skills
    marquee() {
        const container = document.getElementById('marquee-content');
        if (!container) return;

        const content = PORTFOLIO_DATA.skills
            .map(skill => `<div class="flex items-center"><span class="mx-6 text-white">✦</span><span>${skill}</span></div>`)
            .join('');

        // Triple repeat for seamless loop
        container.innerHTML = content + content + content;
    },

    // Render experience cards
    experience() {
        const container = document.getElementById('experience-list');
        if (!container) return;

        container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
            <div class="exp-card group py-8 px-4">
                <img src="${exp.image}" class="exp-bg-image" alt="${exp.title}">
                <div class="exp-content">
                    <span class="text-xl font-light text-gray-300 group-hover:text-black transition-colors italic">${exp.id}.</span>
                    <div class="transition-transform duration-500 group-hover:translate-x-2">
                        <div class="flex items-center gap-3 mb-1">
                            <h3 class="text-2xl font-black tracking-tighter uppercase leading-none">${exp.title}</h3>
                            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">— ${exp.location}</span>
                        </div>
                        <p class="text-sm text-gray-500 font-medium max-w-xl line-clamp-2 italic group-hover:text-black transition-colors">${exp.desc}</p>
                    </div>
                    <div class="text-right exp-role-container">
                        <p class="text-[9px] font-bold text-gray-400 tracking-widest uppercase">${exp.category}</p>
                        <p class="text-lg font-bold italic tracking-tight">${exp.role}</p>
                    </div>
                </div>
            </div>
        `).join('');

        utils.setAnimationDelays('.exp-card');
    },

    // Render projects
    projects() {
        const container = document.getElementById('project-list-container');
        if (!container) return;

        container.innerHTML = PORTFOLIO_DATA.projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            const align = isEven ? 'text-left' : 'text-right';
            const justify = isEven ? 'justify-start' : 'justify-end';
            const padding = isEven ? 'pl-12' : 'pr-12';

            return `
                <div class="project-row group flex items-center justify-between w-full ${isEven ? 'flex-row' : 'flex-row-reverse'}">
                    <div class="timeline-number font-black">PROJ_${String(idx + 1).padStart(2, '0')}</div>
                    <div class="timeline-dot"></div>

                    <div class="project-image-side w-[45%]">
                        <div class="project-image-wrapper overflow-hidden rounded-md aspect-[16/10]">
                            <img src="${proj.image}" alt="${proj.title}">
                        </div>
                    </div>

                    <div class="project-info-side w-[45%] ${padding} ${align}">
                        <div class="flex flex-wrap gap-2 mb-4 ${justify}">
                            ${proj.tech.map(t => `<span class="text-[9px] font-black border border-black/20 px-2 py-0.5 uppercase">${t}</span>`).join('')}
                        </div>
                        
                        <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-3 group-hover:text-blue-600 transition-colors">
                            ${proj.title}
                        </h3>
                        
                        <p class="text-sm text-gray-500 font-medium leading-relaxed mb-6 italic">
                            ${proj.desc}
                        </p>

                        <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 text-[10px] font-black tracking-[0.3em] border-b-2 border-black pb-1 uppercase hover:gap-6 transition-all">
                            View Project 
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            `;
        }).join('');

        utils.setAnimationDelays('.project-row');
    },

    // Render footer
    footer() {
        const container = document.getElementById('dynamic-footer');
        if (!container) return;

        const { email } = PORTFOLIO_DATA.contact;
        const urls = utils.getContactUrls();

        container.innerHTML = `
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-2">
                        <div class="w-1.5 h-1.5 rounded-full bg-[#67e8f9] shadow-[0_0_8px_#67e8f9] animate-pulse"></div>
                        <span class="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">Available</span>
                    </div>
                    <h2 class="text-xl font-black uppercase tracking-tighter italic">Get in touch —</h2>
                    <a href="${urls.email}" class="text-sm font-medium text-gray-400 hover:text-[#fb92c4] transition-colors italic">${email}</a>
                </div>

                <div class="flex items-center gap-6">
                    <a href="https://linkedin.com/in/kevinazaria/" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="LinkedIn">
                        <i data-lucide="linkedin" class="w-5 h-5"></i>
                    </a>
                    <a href="https://github.com/pipinsupipin" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="GitHub">
                        <i data-lucide="github" class="w-5 h-5"></i>
                    </a>
                    <a href="https://instagram.com/kevinazaria/" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="Instagram">
                        <i data-lucide="instagram" class="w-5 h-5"></i>
                    </a>
                    <a href="${urls.whatsapp}" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="WhatsApp">
                        <i data-lucide="message-circle" class="w-5 h-5"></i>
                    </a>
                </div>

                <div class="text-[8px] font-bold text-gray-600 uppercase tracking-widest">
                    © 2026 kevinazaria
                </div>
            </div>
        `;

        // Re-init Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
};

// ===========================
// EVENT HANDLERS
// ===========================
const events = {
    // Setup navigation scroll
    setupNavigation() {
        document.querySelectorAll('[data-scroll-to]').forEach(nav => {
            nav.addEventListener('click', () => {
                const targetId = nav.getAttribute('data-scroll-to');
                utils.scrollToSection(targetId);
                
                // Close mobile menu after navigation
                this.closeMobileMenu();
            });
        });
    },

    // Setup mobile menu toggle
    setupMobileMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const nav = document.getElementById('main-nav');
        const overlay = document.getElementById('nav-overlay');

        if (!menuToggle || !nav || !overlay) return;

        // Close menu function
        const closeMenu = () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        // Toggle menu (open/close)
        menuToggle.addEventListener('click', () => {
            const isActive = menuToggle.classList.contains('active');
            
            if (isActive) {
                closeMenu();
            } else {
                menuToggle.classList.add('active');
                nav.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });

        // Close when clicking overlay
        overlay.addEventListener('click', closeMenu);

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                closeMenu();
            }
        });
    },

    // Helper to close mobile menu
    closeMobileMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const nav = document.getElementById('main-nav');
        const overlay = document.getElementById('nav-overlay');

        if (menuToggle) menuToggle.classList.remove('active');
        if (nav) nav.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    },

    // Setup contact links
    setupContactLinks() {
        const urls = utils.getContactUrls();
        
        const navEmail = document.getElementById('nav-email-link');
        if (navEmail) {
            navEmail.href = urls.email;
        }

        const navEmailText = document.getElementById('nav-email-text');
        if (navEmailText) {
            navEmailText.textContent = PORTFOLIO_DATA.contact.email;
        }

        const heroTalk = document.getElementById('hero-wa-link');
        if (heroTalk) {
            heroTalk.href = urls.whatsapp;
        }
    },

    // Dynamic tab title
    setupTabTitle() {
        const originalTitle = document.title;
        
        window.addEventListener('blur', () => {
            document.title = "Hey, come back! ✦";
        });
        
        window.addEventListener('focus', () => {
            document.title = originalTitle;
        });
    }
};

// ===========================
// INITIALIZATION
// ===========================
function init() {
    // Render all sections
    render.marquee();
    render.experience();
    render.projects();
    render.footer();

    // Setup event handlers
    events.setupNavigation();
    events.setupMobileMenu();
    events.setupContactLinks();
    events.setupTabTitle();
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}