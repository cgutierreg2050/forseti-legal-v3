// Mock Lawyer Database for Interactive Match Simulator
const LAWYER_POOL = {
  ma: [
    {
      name: "Victoria Sterling",
      role: "Corporate M&A & Cross-Border Deals",
      bio: "Former Senior Partner at Clifford Chance. 14+ years experience structuring multi-billion dollar acquisitions across Europe and LatAm.",
      tags: ["M&A", "Private Equity", "Cross-Border"],
      score: "99%",
      avatar: "assets/avatar-victoria.png"
    },
    {
      name: "Adrian Vance",
      role: "Venture Capital & Structuring",
      bio: "Ex-Latham & Watkins. Advises high-growth startups and tech conglomerates on Series A-E financing and corporate restructuring.",
      tags: ["Corporate Law", "Venture Capital", "Financing"],
      score: "96%",
      avatar: "assets/avatar-adrian.png"
    }
  ],
  tech: [
    {
      name: "Dr. Elena Rostova",
      role: "IP, AI Regulation & Tech Compliance",
      bio: "Former In-House IP Lead at Microsoft. Specializes in global patent strategies, algorithmic compliance, and machine learning licensing.",
      tags: ["Tech", "IP Strategy", "AI Compliance"],
      score: "98%",
      avatar: "assets/avatar-elena.png"
    },
    {
      name: "Julian Kross",
      role: "Data Privacy & Software Licensing",
      bio: "Ex-Baker McKenzie. Expert on GDPR, CCPA, and building scalable data transfer compliance systems for SaaS businesses.",
      tags: ["Data Privacy", "SaaS", "Compliance"],
      score: "95%",
      avatar: "assets/avatar-adrian.png"
    }
  ],
  tax: [
    {
      name: "Santiago Silva",
      role: "International Tax & Fund Structuring",
      bio: "Former Tax Director at PwC. Expert in international tax treaty networks, transfer pricing, and corporate inversion structures.",
      tags: ["International Tax", "Transfer Pricing", "Funds"],
      score: "97%",
      avatar: "assets/avatar-santiago.png"
    }
  ],
  regulatory: [
    {
      name: "Marcus Thorne",
      role: "Fintech & Financial Services Regulation",
      bio: "Ex-SEC & Linklaters counsel. Expert in banking compliance, blockchain assets regulation, and cross-border payment licenses.",
      tags: ["Fintech", "SEC Compliance", "Regulatory"],
      score: "96%",
      avatar: "assets/avatar-marcus.png"
    },
    {
      name: "Clara Dupont",
      role: "Antitrust & Competition Counsel",
      bio: "Former DG Comp (European Commission) investigator. 12+ years advising on complex anti-monopoly merger reviews and cartel investigations.",
      tags: ["Antitrust", "EU Law", "Competition"],
      score: "98%",
      avatar: "assets/avatar-victoria.png"
    }
  ]
};

// Simulation Logs to show progressive matching
const SIMULATION_LOGS = [
  "Initializing Forseti legal capacity grid...",
  "Analyzing client case objectives & practice area...",
  "Filtering out traditional overhead and administrative conflicts...",
  "Scanning regional regulatory databases and certified peer networks...",
  "Locating elite partners with verified success metrics...",
  "Optimal matches found. Presenting counsel profile..."
];

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initHeaderScroll();
  initMobileMenu();
  initSimulator();
  initComparisonToggle();
  initContactWizard();
  initScrollReveal();
});

// 1. Theme Switcher (Dark/Light mode)
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;
  
  // Force default to Light Theme (youthful, bright and sober)
  // Use theme_v2 to clear any old cached dark theme from local storage
  localStorage.removeItem("theme"); 
  const savedTheme = localStorage.getItem("theme_v2");
  
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
  
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme_v2", currentTheme);
  });
}

// 2. Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// 3. Mobile Hamburger Menu
function initMobileMenu() {
  const burgerBtn = document.getElementById("burger-menu");
  const mobileMenu = document.getElementById("nav-links-mobile");
  
  if (!burgerBtn || !mobileMenu) return;
  
  burgerBtn.addEventListener("click", () => {
    const isExpanded = burgerBtn.getAttribute("aria-expanded") === "true";
    burgerBtn.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("active");
    
    // Animate burger lines
    const lines = burgerBtn.querySelectorAll(".burger-line");
    if (!isExpanded) {
      lines[0].style.transform = "translateY(7.5px) rotate(45deg)";
      lines[1].style.opacity = "0";
      lines[2].style.transform = "translateY(-7.5px) rotate(-45deg)";
    } else {
      lines[0].style.transform = "none";
      lines[1].style.opacity = "1";
      lines[2].style.transform = "none";
    }
  });
}

// 4. Interactive Match Simulator
function initSimulator() {
  const categoryBtns = document.querySelectorAll(".console-btn");
  const descContent = document.getElementById("dynamic-desc-content");
  
  const contents = {
    laboral: "<strong>Auditoría de Relaciones Obrero-Patronales:</strong> Diagnóstico estructural de contratos de trabajo, políticas internas y esquemas de compensación. Identificamos pasivos contingentes y riesgos de fricción administrativa antes de la apertura de cualquier proceso judicial.<br><br><strong style='color: var(--gold-accent);'>Entregable:</strong> Matriz indexada de exposición de riesgo laboral y plan correctivo.",
    contratos: "<strong>Estructuración de Acuerdos Comerciales:</strong> Diseño técnico de contratos de distribución, franquicias, pactos de accionistas y alianzas estratégicas. Sustituimos las cláusulas ambiguas por flujos lógicos de ejecución que agilizan los cierres de negocio.<br><br><strong style='color: var(--gold-accent);'>Entregable:</strong> Modelos contractuales funcionales y diagramas procedimentales de ejecución.",
    pi: "<strong>Protección de Activos Intangibles:</strong> Registro, auditoría y defensa de marcas, nombres comerciales, patentes y secretos industriales. Aseguramos la exclusividad del valor comercial de su identidad corporativa en el mercado.<br><br><strong style='color: var(--gold-accent);'>Entregable:</strong> Títulos de propiedad industrial certificados y bitácora de vigilancia marcaria.",
    publico: "<strong>Estrategia Regulatoria y Defensa Administrativa:</strong> Gestión técnica de licitaciones públicas, contratos estatales y representación especializada en litigios contenciosos de alta cuantía frente a la administración pública.<br><br><strong style='color: var(--gold-accent);'>Entregable:</strong> Análisis predictivo de contingencia regulatoria y defensa procesal estructurada."
  };
  
  if(!categoryBtns.length || !descContent) return;

  categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.category;
      descContent.innerHTML = contents[cat] || contents.laboral;
    });
  });
}
// 5. Interactive Comparison Toggle
function initComparisonToggle() {
  const traditionalToggle = document.getElementById("toggle-trad");
  const forsetiToggle = document.getElementById("toggle-for");
  
  const traditionalCard = document.getElementById("comp-traditional");
  const forsetiCard = document.getElementById("comp-forseti");
  
  if (!traditionalToggle || !forsetiToggle || !traditionalCard || !forsetiCard) return;
  
  traditionalToggle.addEventListener("click", () => {
    traditionalToggle.classList.add("active");
    forsetiToggle.classList.remove("active");
    traditionalCard.style.opacity = "1";
    traditionalCard.style.transform = "scale(1)";
    forsetiCard.style.opacity = "0.4";
    forsetiCard.style.transform = "scale(0.96)";
  });
  
  forsetiToggle.addEventListener("click", () => {
    forsetiToggle.classList.add("active");
    traditionalToggle.classList.remove("active");
    forsetiCard.style.opacity = "1";
    forsetiCard.style.transform = "scale(1)";
    traditionalCard.style.opacity = "0.4";
    traditionalCard.style.transform = "scale(0.96)";
  });
}

// 6. Contact Multi-Step Wizard
function initContactWizard() {
  const steps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");
  const nextBtn = document.getElementById("form-next");
  const prevBtn = document.getElementById("form-prev");
  const submitBtn = document.getElementById("form-submit");
  const successOverlay = document.getElementById("form-success");
  const formContent = document.getElementById("form-wizard-content");
  
  if (!nextBtn || !prevBtn || steps.length === 0) return;
  
  let currentStep = 0;
  
  function updateWizard() {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === currentStep);
    });
    
    progressSteps.forEach((pStep, i) => {
      pStep.classList.toggle("active", i === currentStep);
      pStep.classList.toggle("completed", i < currentStep);
    });
    
    // Toggle Prev button visibility
    prevBtn.style.display = currentStep === 0 ? "none" : "block";
    
    // Toggle Next/Submit button visibility
    if (currentStep === steps.length - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "block";
    } else {
      nextBtn.style.display = "block";
      submitBtn.style.display = "none";
    }
  }
  
  nextBtn.addEventListener("click", () => {
    // Basic validation
    const inputs = steps[currentStep].querySelectorAll("input, textarea, select");
    let valid = true;
    inputs.forEach(input => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        valid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "";
      }
    });
    
    if (!valid) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }
    
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateWizard();
    }
  });
  
  prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateWizard();
    }
  });
  
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Validate final step
    const inputs = steps[currentStep].querySelectorAll("input, textarea, select");
    let valid = true;
    inputs.forEach(input => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        valid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "";
      }
    });
    
    if (!valid) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }
    
    // Simulate successful form submit
    formContent.style.display = "none";
    successOverlay.style.display = "block";
  });
  
  // Initial state setup
  updateWizard();
}

// 7. Scroll Reveal Animation using IntersectionObserver
function initScrollReveal() {
  // Add stagger classes dynamically to grids for modern animations
  document.querySelectorAll('.grid-3, .sectors-grid, .testi-grid, .comp-grid').forEach(grid => {
    Array.from(grid.children).forEach((child, idx) => {
      child.classList.add('reveal');
      if (idx === 1) child.classList.add('reveal-delay-1');
      if (idx === 2) child.classList.add('reveal-delay-2');
      if (idx === 3) child.classList.add('reveal-delay-3');
    });
  });

  const reveals = document.querySelectorAll(".reveal");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  
  reveals.forEach(el => observer.observe(el));
}
