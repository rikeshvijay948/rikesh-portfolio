/**
 * ==========================================================================
 * RIKESH V - RESUME-INTEGRATED JAVASCRIPT ENGINE
 * B.E. Computer Science, K.S.R. College of Engineering
 * Specializing in AI Automation, Autonomous Agents & Full-Stack Systems
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Curated Project Data Store ---
  const PROJECTS_DATA = [
    {
      id: 'ai-breed-recognition',
      title: 'AI-Powered Breed Recognition for Indian Cattle & Buffaloes',
      category: 'ai',
      categoryLabel: 'AI & Deep Learning',
      status: 'Core ML Project',
      summary: 'An AI-based livestock breed classification system utilizing computer vision, deep learning models, and real-time image feature extraction.',
      icon: 'fa-solid fa-brain',
      tags: ['Python', 'FastAPI', 'React.js', 'TensorFlow', 'PyTorch', 'Computer Vision', 'Deep Learning'],
      demoUrl: 'https://github.com/rikeshvijay948',
      githubUrl: 'https://github.com/rikeshvijay948',
      overview: 'Developed an AI-based cattle and buffalo breed recognition system using deep learning and image classification models to assist farmers and livestock researchers in identifying indigenous and cross-bred livestock accurately.',
      features: [
        'Implemented computer vision techniques for image preprocessing, feature extraction, and livestock breed prediction',
        'Trained deep learning classification models with TensorFlow and PyTorch for high-precision inference',
        'Integrated a high-throughput FastAPI backend for sub-100ms asynchronous model predictions',
        'Engineered an intuitive React.js frontend interface with live image upload and instant diagnostic reports'
      ],
      architecture: 'Computer Vision pipeline using convolutional deep neural networks served via asynchronous FastAPI REST endpoints to a responsive React.js client.'
    },
    {
      id: 'resqnet-disaster-management',
      title: 'ResQNet — Real-Time Disaster Management System',
      category: 'fullstack',
      categoryLabel: 'Full-Stack System',
      status: 'Ongoing Project',
      summary: 'A real-time emergency reporting and triage platform connecting victims, volunteers, NGOs, and government officials with live geolocation tracking.',
      icon: 'fa-solid fa-truck-medical',
      tags: ['Node.js', 'Express.js', 'MongoDB Atlas', 'REST APIs', 'Role-Based Access', 'Real-Time'],
      demoUrl: 'https://github.com/rikeshvijay948',
      githubUrl: 'https://github.com/rikeshvijay948',
      overview: 'Built a comprehensive disaster reporting and relief coordination platform where citizens can report emergencies in real-time with GPS coordinates, photographic evidence, and disaster severity levels.',
      features: [
        'Real-time emergency reporting workflow capturing live GPS location, image uploads, and disaster category',
        'Granular Role-Based Access Control (RBAC) designed specifically for Citizens, Volunteers, NGOs, and Government Administrators',
        'Scalable RESTful backend APIs engineered with Node.js and Express.js for resilient request handling',
        'Secure cloud database architecture using MongoDB Atlas with optimized geospatial queries and aggregation pipelines',
        'Interactive real-time monitoring dashboard for emergency response triage and resource deployment'
      ],
      architecture: 'Asynchronous event-driven Node.js/Express backend paired with MongoDB Atlas cloud clusters and role-based JWT authentication layers.'
    },
    {
      id: 'ecommerce-web-app',
      title: 'Modern E-Commerce Web Application',
      category: 'fullstack',
      categoryLabel: 'E-Commerce App',
      status: 'Completed',
      summary: 'Full-featured online shopping storefront with interactive product catalogs, real-time cart state, price filters, and responsive checkout interface.',
      icon: 'fa-solid fa-cart-shopping',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'REST APIs', 'LocalStorage', 'Responsive UI'],
      demoUrl: 'https://github.com/rikeshvijay948',
      githubUrl: 'https://github.com/rikeshvijay948',
      overview: 'Engineered a modern, high-performance e-commerce web platform designed for seamless user browsing, dynamic cart management, and fluid product exploration with 60fps animations.',
      features: [
        'Interactive product catalog with category search, multi-attribute filtering, and sorting by price/rating',
        'Dynamic slide-out cart drawer with live subtotal computations, quantity adjustments, and persistent storage',
        'Mobile-first responsive design adapting fluidly across smartphones, tablets, and desktop displays',
        'Simulated checkout workflow with order summary and client-side form validation'
      ],
      architecture: 'Component-driven frontend architecture with modular state management and persistent browser storage.'
    },
    {
      id: 'todo-list-app',
      title: 'Interactive To-Do List & Task Management App',
      category: 'fullstack',
      categoryLabel: 'Productivity Tool',
      status: 'Completed',
      summary: 'Productivity task manager featuring task categorization, priority tags, search filters, completion tracking, and persistent local storage.',
      icon: 'fa-solid fa-list-check',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'State Management', 'LocalStorage'],
      demoUrl: 'https://github.com/rikeshvijay948',
      githubUrl: 'https://github.com/rikeshvijay948',
      overview: 'Built a clean, distraction-free task management application to help users organize daily deliverables, prioritize critical milestones, and track productivity metrics.',
      features: [
        'Instant task creation, editing, status toggling, and deletion with smooth micro-animations',
        'Filtering capabilities by status (All, Active, Completed) and priority levels (High, Medium, Low)',
        'Automatic persistent synchronization with browser LocalStorage so tasks are never lost on reload',
        'Responsive, accessible keyboard shortcuts for rapid task entry and navigation'
      ],
      architecture: 'Lightweight reactive DOM architecture with localized state handling and zero external dependencies.'
    }
  ];

  // ==========================================================================
  // 1. LIVE SYSTEM CLOCK
  // ==========================================================================
  const initSystemClock = () => {
    const clockEl = document.getElementById('macos-live-clock');

    const updateClock = () => {
      const now = new Date();
      const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
      const formatted = now.toLocaleDateString('en-US', options).replace(',', '');
      if (clockEl) clockEl.textContent = formatted;
    };

    updateClock();
    setInterval(updateClock, 1000);
  };

  // ==========================================================================
  // 2. DYNAMIC TYPING HEADLINE
  // ==========================================================================
  const initTypingEffect = () => {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const roles = [
      'Autonomous AI Agents',
      'AI Automation & Intelligent Workflows',
      'Computer Vision & Deep Learning',
      'Computer Science Engineering (B.E.)',
      'Full-Stack Web Systems (FastAPI / Node)'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 35;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 80;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 1900;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 380;
      }

      setTimeout(type, typingSpeed);
    };

    type();
  };

  // ==========================================================================
  // 3. NAVIGATION & SCROLL SPY
  // ==========================================================================
  const initNavigation = () => {
    const header = document.getElementById('site-header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');

    const handleScroll = () => {
      if (window.scrollY > 30) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }

      let currentSectionId = '';
      const scrollPosition = window.scrollY + 140;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('open');
        mobileToggle.innerHTML = isOpen
          ? '<i class="fa-solid fa-xmark"></i>'
          : '<i class="fa-solid fa-bars"></i>';
      });

      mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
          mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
      });
    }
  };

  // ==========================================================================
  // 4. CODE CARD TABS
  // ==========================================================================
  const initHeroCodeCard = () => {
    const tabBtns = document.querySelectorAll('.macos-tab-btn');
    const tabPanes = document.querySelectorAll('.code-pane');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const activePane = document.getElementById(`pane-${targetTab}`);
        if (activePane) activePane.classList.add('active');
      });
    });
  };

  // ==========================================================================
  // 5. SKILLS TAB FILTERING
  // ==========================================================================
  const initSkillsFilter = () => {
    const segmentBtns = document.querySelectorAll('.apple-segment-btn[data-category]');
    const skillCards = document.querySelectorAll('.apple-skill-card');

    segmentBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        segmentBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        skillCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  };

  // ==========================================================================
  // 6. PROJECTS RENDER & DETAILS MODAL
  // ==========================================================================
  const initProjects = () => {
    const projectsGrid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.apple-segment-btn[data-filter]');
    const sheetBackdrop = document.getElementById('project-modal-backdrop');
    const sheetCloseBtn = document.getElementById('modal-close-btn');

    const renderProjects = (category = 'all') => {
      if (!projectsGrid) return;
      projectsGrid.innerHTML = '';

      const filtered = category === 'all'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(p => p.category === category);

      filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'apple-project-card';
        card.setAttribute('data-category', project.category);

        const techTagsHtml = project.tags
          .map(t => `<span class="apple-tag-pill">${t}</span>`)
          .join('');

        card.innerHTML = `
          <div class="project-display-banner">
            <i class="${project.icon} project-display-icon"></i>
            <span class="project-pill-cat">${project.categoryLabel}</span>
            <span class="project-pill-status">${project.status}</span>
          </div>
          <div class="project-content-pane">
            <h3 class="project-name">${project.title}</h3>
            <p class="project-brief">${project.summary}</p>
            <div class="project-tags-cloud">${techTagsHtml}</div>
            <div class="project-footer-actions">
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="apple-link-action">
                <span>View GitHub</span>
                <i class="fa-solid fa-chevron-right" style="font-size: 0.72rem;"></i>
              </a>
              <button type="button" class="apple-sheet-btn project-details-btn" data-id="${project.id}">
                Deep Dive
              </button>
            </div>
          </div>
        `;

        projectsGrid.appendChild(card);
      });

      document.querySelectorAll('.project-details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          openDetailsModal(id);
        });
      });
    };

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-filter');
        renderProjects(cat);
      });
    });

    const openDetailsModal = (projectId) => {
      const project = PROJECTS_DATA.find(p => p.id === projectId);
      if (!project || !sheetBackdrop) return;

      const modalContainer = document.getElementById('modal-dynamic-content');
      const featuresHtml = project.features
        .map(f => `<li style="display:flex; align-items:flex-start; gap:8px; margin-bottom:8px; font-size:0.92rem; color:var(--apple-text-secondary);"><i class="fa-solid fa-check" style="color:#30d158; margin-top:4px;"></i> <span>${f}</span></li>`)
        .join('');
      const tagsHtml = project.tags
        .map(t => `<span class="apple-tag-pill" style="font-size:0.8rem; padding:4px 10px;">${t}</span>`)
        .join('');

      modalContainer.innerHTML = `
        <span style="font-size:0.82rem; font-weight:600; color:var(--apple-blue-light); display:inline-block; margin-bottom:8px;">${project.categoryLabel} • ${project.status}</span>
        <h2 style="font-size:1.75rem; font-weight:700; margin-bottom:12px;">${project.title}</h2>
        <p style="font-size:1rem; color:var(--apple-text-secondary); line-height:1.65; margin-bottom:20px;">${project.overview}</p>
        
        <h4 style="font-size:1.05rem; font-weight:600; color:var(--apple-text-primary); margin:20px 0 10px;">Key Technical Highlights</h4>
        <ul style="list-style:none; padding:0; margin-bottom:20px;">${featuresHtml}</ul>

        <h4 style="font-size:1.05rem; font-weight:600; color:var(--apple-text-primary); margin:20px 0 8px;">System Architecture</h4>
        <p style="font-size:0.92rem; color:var(--apple-text-secondary); line-height:1.6; margin-bottom:20px;">${project.architecture}</p>

        <h4 style="font-size:1.05rem; font-weight:600; color:var(--apple-text-primary); margin:20px 0 8px;">Technologies Utilized</h4>
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:28px;">${tagsHtml}</div>

        <div style="display:flex; gap:12px; padding-top:20px; border-top:1px solid var(--apple-border-subtle);">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-apple-primary">
            <i class="fa-brands fa-github"></i>
            <span>GitHub Repository</span>
          </a>
          <a href="mailto:rikeshvijay948@gmail.com?subject=Inquiry regarding ${encodeURIComponent(project.title)}" class="btn-apple-secondary">
            <i class="fa-regular fa-envelope"></i>
            <span>Inquire About Project</span>
          </a>
        </div>
      `;

      sheetBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeDetailsModal = () => {
      if (!sheetBackdrop) return;
      sheetBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    sheetCloseBtn?.addEventListener('click', closeDetailsModal);
    sheetBackdrop?.addEventListener('click', (e) => {
      if (e.target === sheetBackdrop) closeDetailsModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sheetBackdrop?.classList.contains('active')) {
        closeDetailsModal();
      }
    });

    renderProjects('all');
  };

  // ==========================================================================
  // 7. INTERACTIVE DEVELOPER CONSOLE
  // ==========================================================================
  const initTerminal = () => {
    const termWindow = document.getElementById('terminal-window');
    const termInput = document.getElementById('terminal-input');
    const termForm = document.getElementById('terminal-form');
    const suggestionPills = document.querySelectorAll('.apple-chip-btn');

    if (!termWindow || !termInput || !termForm) return;

    let commandHistory = [];
    let historyPointer = -1;

    const commands = {
      help: () => `
        <div class="term-res-body">
          <strong style="color: #30d158;">Available Console Commands:</strong><br>
          • <strong>about</strong>        : Read academic background & AI specialization<br>
          • <strong>education</strong>    : Display degree, institution & CGPA<br>
          • <strong>skills</strong>       : Display technical skillset & tools<br>
          • <strong>projects</strong>     : List Cattle Breed AI, ResQNet, E-Commerce, To-Do App<br>
          • <strong>certifications</strong>: Show NPTEL, PSG Tech, CSC & Coursera credentials<br>
          • <strong>contact</strong>      : Print direct phone, email & LinkedIn<br>
          • <strong>sudo hire</strong>    : Placement recruitment verification<br>
          • <strong>date</strong>         : Print current system timestamp<br>
          • <strong>clear</strong>        : Wipe terminal output
        </div>`,
      about: () => `
        <div class="term-res-body">
          <strong>Rikesh V</strong> — Computer Science undergraduate at K.S.R. College of Engineering (CGPA: 8.12).<br>
          Specializing in AI automation, autonomous AI agents, computer vision, and intelligent system workflows.
        </div>`,
      education: () => `
        <div class="term-res-body">
          • <strong>Bachelor of Engineering in Computer Science (B.E. CSE)</strong><br>
          • <strong>Institution:</strong> K.S.R. College of Engineering, Namakkal (Sept 2024 – Sept 2028)<br>
          • <strong>Academic CGPA:</strong> <span style="color:#30d158; font-weight:700;">8.12 / 10</span>
        </div>`,
      skills: () => `
        <div class="term-res-body">
          <span style="color:#2997ff;">Languages:</span> Python, C (Diploma in C - DCP), Java, JavaScript<br>
          <span style="color:#30d158;">AI & ML:</span> Deep Learning, Computer Vision, Autonomous AI Agents, TensorFlow/PyTorch<br>
          <span style="color:#bf5af2;">Web & Backend:</span> FastAPI, Node.js, Express.js, React.js, HTML/CSS<br>
          <span style="color:#ff9f0a;">Databases:</span> MongoDB Atlas, Firebase<br>
          <span style="color:#64d2ff;">Tools:</span> VS Code, GitHub, Figma, Canva, Excel, Code Debugging
        </div>`,
      projects: () => `
        <div class="term-res-body">
          1. <strong>AI-Powered Breed Recognition for Indian Cattle & Buffaloes</strong> (Deep Learning, Computer Vision, FastAPI, React.js)<br>
          2. <strong>ResQNet — Disaster Management System</strong> (Node.js, Express.js, MongoDB Atlas, Real-time Reporting, RBAC)<br>
          3. <strong>Modern E-Commerce Web Application</strong> (Interactive Storefront, Cart Management, Responsive UI)<br>
          4. <strong>Interactive To-Do List & Task Management App</strong> (State Management, LocalStorage Persistence, Filters)<br>
          <em>(Click 'Deep Dive' on any project in the portfolio to view full architecture!)</em>
        </div>`,
      certifications: () => `
        <div class="term-res-body">
          • <strong>NPTEL Swayam:</strong> Introduction to IoT & Cloud Computing Program<br>
          • <strong>PSG College of Technology:</strong> Code the Web: JavaScript & React in Action Workshop<br>
          • <strong>Computer Software College (CSC):</strong> Diploma in C Programming (DCP)<br>
          • <strong>Hindustan Institute of Technology:</strong> Code Debugging Event Participation<br>
          • <strong>Coursera:</strong> Introduction to Microsoft Excel
        </div>`,
      contact: () => `
        <div class="term-res-body">
          • <strong>Email:</strong> <a href="mailto:rikeshvijay948@gmail.com" style="color:#2997ff;">rikeshvijay948@gmail.com</a><br>
          • <strong>Phone:</strong> <a href="tel:+919597981194" style="color:#30d158;">+91 95979 81194</a><br>
          • <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rikesh-v-63715338a" target="_blank" style="color:#2997ff;">linkedin.com/in/rikesh-v-63715338a</a><br>
          • <strong>GitHub:</strong> <a href="https://github.com/rikeshvijay948" target="_blank" style="color:#2997ff;">github.com/rikeshvijay948</a>
        </div>`,
      'sudo hire': () => `
        <div class="term-res-body" style="color: #30d158; font-weight: 600;">
          [PLACEMENT PROTOCOL: VERIFIED] Candidate Rikesh V (KSRCE CSE, CGPA: 8.12) has been flagged as a top engineering candidate for AI Systems & Software roles!
        </div>`,
      date: () => `<div class="term-res-body">${new Date().toUTCString()}</div>`,
      clear: () => {
        termWindow.innerHTML = `
          <div class="term-intro">
            Console session reset. Type <span style="color: #2997ff;">'help'</span> for available commands.
          </div>
        `;
        return null;
      }
    };

    const executeCommand = (cmdText) => {
      const trimmed = cmdText.trim().toLowerCase();
      if (!trimmed) return;

      commandHistory.push(trimmed);
      historyPointer = commandHistory.length;

      const cmdLine = document.createElement('div');
      cmdLine.className = 'term-line';
      cmdLine.innerHTML = `<span class="term-prompt-txt">rikesh@ksrce:~$</span> <span class="term-input-cmd">${escapeHtml(cmdText)}</span>`;
      termWindow.appendChild(cmdLine);

      let outputHtml = '';
      if (commands[trimmed]) {
        outputHtml = commands[trimmed]();
      } else if (trimmed.startsWith('echo ')) {
        outputHtml = `<div class="term-res-body">${escapeHtml(cmdText.slice(5))}</div>`;
      } else {
        outputHtml = `<div class="term-res-body" style="color: #ff453a;">sh: command not found: ${escapeHtml(trimmed)}. Type 'help' for available commands.</div>`;
      }

      if (outputHtml !== null) {
        const resLine = document.createElement('div');
        resLine.className = 'term-line';
        resLine.innerHTML = outputHtml;
        termWindow.appendChild(resLine);
      }

      termWindow.scrollTop = termWindow.scrollHeight;
    };

    termForm.addEventListener('submit', (e) => {
      e.preventDefault();
      executeCommand(termInput.value);
      termInput.value = '';
    });

    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        if (historyPointer > 0) {
          historyPointer--;
          termInput.value = commandHistory[historyPointer] || '';
        }
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        if (historyPointer < commandHistory.length - 1) {
          historyPointer++;
          termInput.value = commandHistory[historyPointer] || '';
        } else {
          historyPointer = commandHistory.length;
          termInput.value = '';
        }
        e.preventDefault();
      }
    });

    suggestionPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const cmd = pill.getAttribute('data-cmd');
        termInput.value = cmd;
        executeCommand(cmd);
        termInput.value = '';
      });
    });
  };

  // ==========================================================================
  // 8. COMMAND PALETTE (Ctrl+K / ⌘K)
  // ==========================================================================
  const initCommandPalette = () => {
    const backdrop = document.getElementById('cmd-palette-backdrop');
    const input = document.getElementById('cmd-palette-input');
    const list = document.getElementById('cmd-results-list');
    const triggerBtn = document.getElementById('cmd-palette-trigger');
    const menuTrigger = document.getElementById('spotlight-menu-trigger');

    if (!backdrop || !input || !list) return;

    const actions = [
      { name: 'Overview / Hero', icon: 'fa-solid fa-house', tag: 'Section', action: () => scrollToSection('home') },
      { name: 'About Rikesh V (KSRCE)', icon: 'fa-solid fa-user', tag: 'Section', action: () => scrollToSection('about') },
      { name: 'Technical Skills & AI Stack', icon: 'fa-solid fa-sliders', tag: 'Section', action: () => scrollToSection('skills') },
      { name: 'Cattle Breed Recognition AI', icon: 'fa-solid fa-brain', tag: 'Project', action: () => scrollToSection('projects') },
      { name: 'ResQNet Disaster Management', icon: 'fa-solid fa-truck-medical', tag: 'Project', action: () => scrollToSection('projects') },
      { name: 'E-Commerce Web Application', icon: 'fa-solid fa-cart-shopping', tag: 'Project', action: () => scrollToSection('projects') },
      { name: 'To-Do List Task Manager', icon: 'fa-solid fa-list-check', tag: 'Project', action: () => scrollToSection('projects') },
      { name: 'Education (B.E. CSE - CGPA 8.12)', icon: 'fa-solid fa-graduation-cap', tag: 'Section', action: () => scrollToSection('timeline') },
      { name: 'Certifications & Accreditations', icon: 'fa-solid fa-certificate', tag: 'Section', action: () => scrollToSection('certifications') },
      { name: 'Developer Console CLI', icon: 'fa-solid fa-terminal', tag: 'Utility', action: () => scrollToSection('terminal') },
      { name: 'Contact & Placement Connect', icon: 'fa-regular fa-paper-plane', tag: 'Connect', action: () => scrollToSection('contact') },
      { name: 'Copy Email Address (rikeshvijay948@gmail.com)', icon: 'fa-regular fa-envelope', tag: 'Action', action: () => copyEmailToClipboard() },
      { name: 'Call / WhatsApp (+91 95979 81194)', icon: 'fa-solid fa-phone', tag: 'Action', action: () => window.open('tel:+919597981194') },
      { name: 'Open LinkedIn Profile', icon: 'fa-brands fa-linkedin', tag: 'External', action: () => window.open('https://www.linkedin.com/in/rikesh-v-63715338a', '_blank') },
      { name: 'Open GitHub Profile', icon: 'fa-brands fa-github', tag: 'External', action: () => window.open('https://github.com/rikeshvijay948', '_blank') }
    ];

    let selectedIndex = 0;
    let currentFiltered = [...actions];

    const renderList = (filtered) => {
      currentFiltered = filtered;
      list.innerHTML = '';

      if (!filtered.length) {
        list.innerHTML = `<li style="padding: 14px; text-align: center; color: var(--apple-text-muted); font-size:0.9rem;">No matching items found.</li>`;
        return;
      }

      filtered.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = `spotlight-item ${index === selectedIndex ? 'selected' : ''}`;
        li.innerHTML = `
          <div class="spotlight-item-left">
            <div class="spotlight-item-icon"><i class="${item.icon}"></i></div>
            <span class="spotlight-item-name">${item.name}</span>
          </div>
          <span class="spotlight-item-tag">${item.tag}</span>
        `;
        li.addEventListener('click', () => {
          item.action();
          closePalette();
        });
        list.appendChild(li);
      });
    };

    const openPalette = () => {
      backdrop.classList.add('active');
      input.value = '';
      selectedIndex = 0;
      renderList(actions);
      setTimeout(() => input.focus(), 60);
      document.body.style.overflow = 'hidden';
    };

    const closePalette = () => {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    triggerBtn?.addEventListener('click', openPalette);
    menuTrigger?.addEventListener('click', openPalette);

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closePalette();
    });

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        backdrop.classList.contains('active') ? closePalette() : openPalette();
      } else if (e.key === 'Escape' && backdrop.classList.contains('active')) {
        closePalette();
      }
    });

    input.addEventListener('input', () => {
      const val = input.value.toLowerCase().trim();
      const filtered = actions.filter(a =>
        a.name.toLowerCase().includes(val) || a.tag.toLowerCase().includes(val)
      );
      selectedIndex = 0;
      renderList(filtered);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % currentFiltered.length;
        renderList(currentFiltered);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + currentFiltered.length) % currentFiltered.length;
        renderList(currentFiltered);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentFiltered[selectedIndex]) {
          currentFiltered[selectedIndex].action();
          closePalette();
        }
      }
    });
  };

  // ==========================================================================
  // 9. CONTACT FORM WITH AUTO-DRAFT
  // ==========================================================================
  const initContactForm = () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const charCounter = document.getElementById('message-char-count');
    const submitBtn = document.getElementById('contact-submit-btn');

    if (!form || !messageInput) return;

    const DRAFT_KEY = 'rikesh_resume_contact_draft';

    try {
      const savedDraft = JSON.parse(localStorage.getItem(DRAFT_KEY) || '{}');
      if (savedDraft.name && nameInput) nameInput.value = savedDraft.name;
      if (savedDraft.email && emailInput) emailInput.value = savedDraft.email;
      if (savedDraft.subject && subjectInput) subjectInput.value = savedDraft.subject;
      if (savedDraft.message) {
        messageInput.value = savedDraft.message;
        if (charCounter) charCounter.textContent = `${savedDraft.message.length} / 500`;
      }
    } catch (err) {
      console.warn('LocalStorage draft restore failed', err);
    }

    const saveDraft = () => {
      const draft = {
        name: nameInput?.value || '',
        email: emailInput?.value || '',
        subject: subjectInput?.value || '',
        message: messageInput.value || ''
      };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    };

    [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
      inp?.addEventListener('input', saveDraft);
    });

    messageInput.addEventListener('input', () => {
      const len = messageInput.value.length;
      if (charCounter) {
        charCounter.textContent = `${len} / 500`;
        charCounter.style.color = len > 480 ? '#ff453a' : 'var(--apple-text-muted)';
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name || !email || !subject || !message) {
        showToast('Please fill out all required fields.', 'error');
        return;
      }

      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      }

      setTimeout(() => {
        showToast(`Message sent successfully. Thank you, ${name}!`, 'success');
        form.reset();
        localStorage.removeItem(DRAFT_KEY);
        if (charCounter) charCounter.textContent = '0 / 500';

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fa-regular fa-paper-plane"></i> Send Message';
        }
      }, 1000);
    });
  };

  // ==========================================================================
  // 10. TOAST NOTIFICATION SYSTEM
  // ==========================================================================
  window.showToast = (message, type = 'info', duration = 3200) => {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'apple-toast';

    let iconHtml = '<i class="fa-solid fa-circle-info"></i>';
    if (type === 'success') iconHtml = '<i class="fa-solid fa-circle-check" style="color: #30d158;"></i>';
    if (type === 'error') iconHtml = '<i class="fa-solid fa-circle-exclamation" style="color: #ff453a;"></i>';

    toast.innerHTML = `
      <div class="toast-app-icon" style="background: rgba(255,255,255,0.08); border: 1px solid var(--apple-border);">${iconHtml}</div>
      <div class="toast-body">
        <div class="toast-app-name">Rikesh V • Portfolio</div>
        <div class="toast-msg-text">${escapeHtml(message)}</div>
      </div>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 350);
    }, duration);
  };

  // ==========================================================================
  // 11. 1-CLICK COPY EMAIL
  // ==========================================================================
  window.copyEmailToClipboard = () => {
    const email = 'rikeshvijay948@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        showToast('Email (rikeshvijay948@gmail.com) copied to clipboard!', 'success');
      })
      .catch(() => {
        showToast('Email: rikeshvijay948@gmail.com', 'info');
      });
  };

  const initCopyButtons = () => {
    document.querySelectorAll('.copy-email-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        copyEmailToClipboard();
      });
    });
  };

  // Helper: Smooth Scroll to Section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper: Escape HTML string
  const escapeHtml = (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  // ==========================================================================
  // INITIALIZATION RUNNER
  // ==========================================================================
  initSystemClock();
  initTypingEffect();
  initNavigation();
  initHeroCodeCard();
  initSkillsFilter();
  initProjects();
  initTerminal();
  initCommandPalette();
  initContactForm();
  initCopyButtons();
});
