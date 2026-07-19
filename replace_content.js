const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// --- 1. Nav Links ---
html = html.replace(
  /<nav class="nav-links" aria-label="Navegación principal">([\s\S]*?)<\/nav>/,
  `<nav class="nav-links" aria-label="Navegación principal">
        <a href="#" class="nav-item">Inicio</a>
        <a href="#sectores" class="nav-item">Para Empresas</a>
        <a href="#sectores" class="nav-item">Para Personas</a>
        <a href="#modelo" class="nav-item">El Enfoque Forseti Legal</a>
        <a href="#testimonios" class="nav-item">Nuestro Equipo</a>
        <a href="#contacto" class="nav-item">Contacto</a>
      </nav>`
);

html = html.replace(
  /<nav id="nav-links-mobile" class="nav-links-mobile" aria-label="Menú móvil">([\s\S]*?)<\/nav>/,
  `<nav id="nav-links-mobile" class="nav-links-mobile" aria-label="Menú móvil">
      <a href="#" class="nav-item">Inicio</a>
      <a href="#sectores" class="nav-item">Para Empresas</a>
      <a href="#sectores" class="nav-item">Para Personas</a>
      <a href="#modelo" class="nav-item">El Enfoque Forseti Legal</a>
      <a href="#testimonios" class="nav-item">Nuestro Equipo</a>
      <a href="#contacto" class="nav-item">Contacto</a>
      <a href="#contacto" class="btn btn-primary" style="margin-top: 20px;">Solicitar Asesoría</a>
    </nav>`
);

// --- 2. Hero Section ---
html = html.replace(
  /<span class="kicker">Arquitectura Legal de Siguiente Generación<\/span>/,
  `<span class="kicker">EFICIENCIA OPERATIVA Y MITIGACIÓN DE RIESGO CORPORATIVO</span>`
);
html = html.replace(
  /<h1>La infraestructura legal flexible para las empresas que <span>definen el futuro<\/span>\.<\/h1>/,
  `<h1>Transformamos la complejidad jurídica en soluciones <span>visuales, eficientes y predecibles</span></h1>`
);
html = html.replace(
  /<p class="subtitle">Conectamos corporaciones y startups de alto crecimiento con abogados independientes de élite bajo una estructura ágil y optimizada, impulsada por tecnología inteligente\.<\/p>/,
  `<p class="subtitle">Una plataforma jurídica digital diseñada para operar a la velocidad de sus decisiones. Sustituimos los memorandos opacos y la incertidumbre de la hora facturable por una infraestructura virtual avanzada. Aplicando metodologías de Legal Design, traducimos la complejidad regulatoria en productos preventivos de alcance cerrado que optimizan su organización, blindando la continuidad de su negocio y garantizando certeza absoluta en la escrituración y gestión de sus activos personales bajo un modelo ágil y 100% paperless.</p>`
);
html = html.replace(
  /<a href="#simulador" class="btn btn-primary">Probar Simulador<\/a>/,
  `<a href="#contacto" class="btn btn-primary">INICIAR DIAGNÓSTICO PREVENTIVO</a>`
);
html = html.replace(
  /<a href="#modelo" class="btn btn-secondary">Conoce nuestro modelo<\/a>/,
  `<a href="#sectores" class="btn btn-secondary">VER SOLUCIONES</a>`
);

// --- 3. Logo Strip ---
html = html.replace(
  /<section class="logo-strip" aria-label="Logotipos de clientes de confianza">([\s\S]*?)<\/section>/,
  `<section class="logo-strip" aria-label="Portafolio de Soluciones Preventivas">
      <div class="logo-track">
        <div class="logo-item">FAMILY OFFICES</div>
        <div class="logo-item">EMPRENDIMIENTOS DE ALTO CRECIMIENTO</div>
        <div class="logo-item">BIENES RAÍCES</div>
        <div class="logo-item">NOTARÍA PÚBLICA</div>
        <div class="logo-item">CUMPLIMIENTO LABORAL</div>
        <div class="logo-item">PLANIFICACIÓN PATRIMONIAL</div>
        <div class="logo-item">DEFENSA CORPORATIVA</div>
        <div class="logo-item">MEDIACIÓN DE CONFLICTOS</div>
        <!-- Duplicated for marquee effect -->
        <div class="logo-item">FAMILY OFFICES</div>
        <div class="logo-item">EMPRENDIMIENTOS DE ALTO CRECIMIENTO</div>
        <div class="logo-item">BIENES RAÍCES</div>
        <div class="logo-item">NOTARÍA PÚBLICA</div>
      </div>
    </section>`
);

// --- 4. Interactive Simulator (Asignación de Recursos) ---
html = html.replace(
  /<span class="kicker">Algoritmo de Habilidades<\/span>/,
  `<span class="kicker">Gestión jurídica estructural para la continuidad del negocio</span>`
);
html = html.replace(
  /<h2 class="section-title">El abogado perfecto para tu caso en <span>segundos<\/span>\.<\/h2>/,
  `<h2 class="section-title">Sustituimos la incertidumbre por <span>soluciones estructuradas</span>.</h2>`
);
html = html.replace(
  /<p class="subtitle">Tradicionalmente, encontrar un especialista en temas específicos tomaba semanas de cotizaciones\. Nuestro simulador analiza tu caso y encuentra al perfil idóneo de nuestra red curada\.<\/p>/,
  `<p class="subtitle">Sustituimos la incertidumbre de la consultoría abierta y las horas facturables imprevistas por soluciones corporativas estructuradas por fases. Traducimos las contingencias operativas en herramientas de control financiero, diseñadas para mantener la estabilidad de su presupuesto y agilizar las decisiones de la junta directiva.</p>`
);
html = html.replace(
  /<h4 style="font-size: 18px; margin-bottom: 10px; font-weight: 500; font-family: var\(--font-sans\);">¿Cómo funciona\?<\/h4>/,
  `<h4 style="font-size: 18px; margin-bottom: 10px; font-weight: 500; font-family: var(--font-sans);">Asignación de Recursos y Alcance</h4>`
);
html = html.replace(
  /<p style="font-size: 13px; color: var\(--text-secondary\); margin-bottom: 0;">Selecciona una de las principales áreas de práctica, escribe una breve descripción de tu necesidad, y nuestro algoritmo simulará el proceso de búsqueda en tiempo real dentro de nuestra base de más de 400 abogados de primer nivel\.<\/p>/,
  `<p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 0;">Seleccione un área de práctica para conocer el enfoque preventivo, los entregables documentales y la estrategia de mitigación asignada a cada proyecto.</p>`
);

// Simulator buttons
html = html.replace(
  /<button class="console-btn active" data-category="ma">M&A y Sociedades<\/button>/,
  `<button class="console-btn active" data-category="laboral">Cumplimiento Laboral</button>`
);
html = html.replace(
  /<button class="console-btn" data-category="tech">Tecnología y PI<\/button>/,
  `<button class="console-btn" data-category="contratos">Ingeniería Contractual</button>`
);
html = html.replace(
  /<button class="console-btn" data-category="tax">Impuestos y Fondos<\/button>/,
  `<button class="console-btn" data-category="pi">Propiedad Intelectual</button>`
);
html = html.replace(
  /<button class="console-btn" data-category="regulatory">Regulatorio y FinTech<\/button>/,
  `<button class="console-btn" data-category="publico">Derecho Público y Contencioso</button>`
);

// Simulator Input Area (Changing it to purely display the details)
html = html.replace(
  /<div class="console-step-box">\s*<span class="console-label">2\. Describe tu necesidad<\/span>\s*<div class="console-input-area">\s*<input type="text" id="console-input" class="console-input" placeholder="Ej: Necesitamos estructurar una ronda semilla de \$1\.5M con notas convertibles\.\.\." required>\s*<button id="console-submit" class="console-submit">Buscar<\/button>\s*<\/div>\s*<\/div>/,
  `<div class="console-step-box">
              <span class="console-label">2. DESCRIBE TU NECESIDAD</span>
              <div class="console-input-area" style="display: block; background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 18px; margin-top: 15px;">
                <div id="dynamic-desc-content" style="font-size: 14px; color: var(--text-primary); line-height: 1.6;">
                  <strong>Auditoría de Relaciones Obrero-Patronales:</strong> Diagnóstico estructural de contratos de trabajo, políticas internas y esquemas de compensación. Identificamos pasivos contingentes y riesgos de fricción administrativa antes de la apertura de cualquier proceso judicial. <br><br>
                  <strong style="color: var(--gold-accent);">Entregable:</strong> Matriz indexada de exposición de riesgo laboral y plan correctivo.
                </div>
              </div>
              <a href="#contacto" class="console-submit" style="display: block; width: 100%; margin-top: 15px; text-align: center; padding: 14px 0; text-decoration: none;">AGENDAR EVALUACIÓN TÉCNICA</a>
            </div>`
);

// Remove the old results/loader since the UI changes
html = html.replace(/<div class="sim-idle-text">([\s\S]*?)<\/div>/, '');
html = html.replace(/<div id="sim-loader" class="sim-loader">([\s\S]*?)<\/div>/, '');
html = html.replace(/<div id="sim-result" class="sim-result">([\s\S]*?)<\/div>/, '');

// --- 5. Model Features ---
html = html.replace(
  /<h3>Talento Elite Curado<\/h3>\s*<p>No somos un directorio abierto\. Nuestra red está conformada exclusivamente por abogados provenientes de las firmas más prestigiosas \("Big Law"\) e in-house de grandes corporativos\. Solo admitimos al 5% de los aplicantes tras un riguroso proceso de validación técnica y de referencias\.<\/p>/,
  `<h3>Criterio Técnico Directo</h3>
            <p>Eliminamos los intermediarios y la delegación de casos en personal júnior. Su organización interactúa directamente con especialistas sénior en materia laboral, corporativa, administrativa, notarial y de familia, integrados bajo una dirección estratégica única para asegurar una cobertura integral, preventiva y sin fisuras.</p>`
);
html = html.replace(
  /<h3>Emparejamiento Inteligente<\/h3>\s*<p>Olvídate del proceso de cotización a ciegas\. Nuestro modelo alinea tu caso con el abogado idóneo basándose en experiencia exacta, historial de proyectos exitosos, regulaciones jurisdiccionales y feedback verificado\. Eficiencia algorítmica con criterio profesional humano\.<\/p>/,
  `<h3>Claridad Estructural</h3>
            <p>Sustituimos los memorandos opacos y el lenguaje críptico tradicional por entregables funcionales basados en Legal Design. Traducimos la complejidad regulatoria en matrices de riesgo indexadas y diagramas procedimentales, transformando el derecho en una herramienta visual lista para la toma de decisiones.</p>`
);
html = html.replace(
  /<h3>Fricción Administrativa Cero<\/h3>\s*<p>Trabajamos de forma 100% digital\. Eliminamos la burocracia, los despachos opulentos y los honorarios inflados por horas facturables poco claras\. Obtienes equipos ágiles, presupuestos fijos por proyecto e integración directa con tu flujo de trabajo\.<\/p>/,
  `<h3>Certeza de Alcance</h3>
            <p>Operamos mediante un entorno virtual que delimita con precisión las fases de cada proyecto antes de su inicio. Erradicamos la incertidumbre de la facturación abierta por horas y los costos imprevistos de gestión, garantizando estabilidad y predictibilidad absoluta para su presupuesto anual.</p>`
);

// --- 6. Comparison Section ---
html = html.replace(
  /<h3>Firmas Tradicionales<\/h3>\s*<p class="desc">Estructuras jerárquicas rígidas diseñadas para optimizar la rentabilidad de los socios, no los resultados del cliente\.<\/p>/,
  `<h3>Estructura Tradicional</h3>
            <p class="desc">Estructuras corporativas rígidas orientadas a maximizar la facturación interna, postergando la agilidad operativa y los resultados tangibles de la organización.</p>`
);
html = html.replace(
  /<span class="comp-feat-title">Tarifas Indeterminadas<\/span>\s*<span class="comp-feat-text">Cobro por hora facturada\. Incentivos alineados con alargar los procesos, resultando en sorpresas presupuestales constantes\.<\/span>/,
  `<span class="comp-feat-title">CONSULTORÍA ABIERTA POR HORAS</span>
                <span class="comp-feat-text">Aplicación de tarifas variables sin límite de tiempo. Incentivos desalineados que tienden a prolongar los procesos y generar variaciones presupuestarias imprevistas.</span>`
);
html = html.replace(
  /<span class="comp-feat-title">Asignación Ineficiente<\/span>\s*<span class="comp-feat-text">El trabajo de nivel estratégico suele delegarse a asociados junior inexpertos, cobrando tarifas de socio senior\.<\/span>/,
  `<span class="comp-feat-title">02. DELEGACIÓN INEFICIENTE</span>
                <span class="comp-feat-text">Transferencia operativa del trabajo estratégico hacia personal júnior, manteniendo tasas de facturación equivalentes a las de un especialista sénior.</span>`
);
html = html.replace(
  /<span class="comp-feat-title">Puesta en Marcha Lenta<\/span>\s*<span class="comp-feat-text">Burocracia de onboarding de clientes, conflictos de interés lentos de resolver y semanas para arrancar el trabajo real\.<\/span>/,
  `<span class="comp-feat-title">INCORPORACIÓN BUROCRÁTICA</span>
                <span class="comp-feat-text">Procesos lentos de apertura de expedientes, validaciones administrativas complejas y demoras prolongadas antes del inicio real de la gestión.</span>`
);

html = html.replace(
  /<h3>Modelo Forseti<\/h3>\s*<p class="desc">Estructura ágil en la nube centrada en la especialización pura, transparencia y entrega de valor inmediato\.<\/p>/,
  `<h3>Modelo Forseti</h3>
            <p class="desc">Infraestructura virtual avanzada centrada en la especialización técnica, el control estricto de contingencias y el retorno de valor inmediato.</p>`
);
html = html.replace(
  /<span class="comp-feat-title">Presupuestos fijos y claros<\/span>\s*<span class="comp-feat-text">Cotizaciones cerradas basadas en hitos\. Sabes exactamente cuánto vas a gastar desde el primer día de trabajo\.<\/span>/,
  `<span class="comp-feat-title">01. PREDICTIBILIDAD PRESUPUESTARIA</span>
                <span class="comp-feat-text">Planificación financiera estructurada por fases y delimitación estricta de alcances. Certeza absoluta sobre la inversión requerida desde el inicio del proyecto.</span>`
);
html = html.replace(
  /<span class="comp-feat-title">Socios de Elite Hands-on<\/span>\s*<span class="comp-feat-text">Trato directo con el abogado senior asignado\. Quien te vende la propuesta es quien realmente ejecuta y firma tu caso\.<\/span>/,
  `<span class="comp-feat-title">02. CRITERIO SÉNIOR DIRECTO</span>
                <span class="comp-feat-text">Interacción exclusiva y directa con el especialista responsable del área. Garantía de que la estrategia diseñada es ejecutada de principio a fin por profesionales experimentados.</span>`
);
html = html.replace(
  /<span class="comp-feat-title">Activación en 24-48 Horas<\/span>\s*<span class="comp-feat-text">Procesos de compliance digitalizados y automatizados para comenzar a trabajar de inmediato cuando más lo necesitas\.<\/span>/,
  `<span class="comp-feat-title">RESPUESTA OPERATIVA ÁGIL</span>
                <span class="comp-feat-text">Digitalización de los procesos de verificación de conflictos e incorporación. Optimización del tiempo institucional para iniciar la gestión formal sin dilaciones.</span>`
);

// --- 7. Sectors Section ---
html = html.replace(
  /<h2 class="section-title">Especialistas en industrias de <span>alta complejidad<\/span>\.<\/h2>/,
  `<h2 class="section-title">Dirección jurídica para la <span>gestión operativa y patrimonial</span>.</h2>`
);
html = html.replace(
  /<p class="subtitle" style="margin-bottom: 0;">Nuestros abogados entienden el lenguaje de la tecnología, los mercados financieros y la innovación empresarial global\.<\/p>/,
  `<p class="subtitle" style="margin-bottom: 0;">Estructuramos la práctica del despacho en función de las contingencias regulatorias de la empresa y los requerimientos de la propiedad privada, asegurando un criterio unificado en cada área de asignación.</p>`
);

html = html.replace(
  /<h3>Venture Capital & Startups<\/h3>\s*<p>Estructuración de rondas \(SAFE, notas, Equity\), planes de opciones para empleados \(ESOP\) e incorporación de matrices en el extranjero \(Cayman, Delaware Flip\)\.<\/p>/,
  `<h3>Derecho Laboral</h3>
              <p>Auditoría y estructuración de contratos de trabajo, reglamentos internos y gestión de riesgos patronales. Mitigación de pasivos contingentes y representación en procesos de conciliación administrativa.</p>`
);
html = html.replace(
  /<h3>M&A & Fusiones Corporativas<\/h3>\s*<p>Adquisiciones nacionales e internacionales, joint ventures, alianzas estratégicas y procesos exhaustivos de due diligence legal corporativo\.<\/p>/,
  `<h3>Contencioso Administrativo</h3>
              <p>Asesoría en contratación pública, procesos de licitación y cumplimiento normativo. Defensa procesal técnica ante la jurisdicción contencioso-administrativa frente a actuaciones y resoluciones del Estado.</p>`
);
html = html.replace(
  /<h3>Tech, IP & Regulación de IA<\/h3>\s*<p>Protección y registro de propiedad intelectual, contratos de licenciamiento de software complejo, protección de datos y cumplimiento ético\/legal de Inteligencia Artificial\.<\/p>/,
  `<h3>Notaría Pública y Bienes Raíces</h3>
              <p>Formalización de escrituras públicas, constitución de garantías reales y traspasos de bienes. Instrumentación jurídica de transacciones comerciales, segregaciones y contratos traslativos de dominio.</p>`
);
html = html.replace(
  /<h3>Impuestos y Planificación Fiscal<\/h3>\s*<p>Estructuración fiscal internacional, optimización tributaria para transacciones corporativas de gran escala y consultoría regulatoria para fondos de inversión\.<\/p>/,
  `<h3>Recuperación de Capital y Propiedad Intelectual</h3>
              <p>Ejecución de cobro judicial corporativo, mitigación de contingencias operativas y recuperación de inversiones. Trámite de registro, auditoría y protección de marcas, nombres comerciales y propiedad intelectual.</p>`
);

// --- Testimonios Title ---
html = html.replace(
  /<span class="kicker">Opiniones de Clientes<\/span>/,
  `<span class="kicker">Nuestro Equipo Directivo</span>`
);
html = html.replace(
  /<h2 class="section-title" style="margin-bottom: 60px;">Lo que dicen quienes ya <span>dejaron atrás el modelo tradicional<\/span>\.<\/h2>/,
  `<h2 class="section-title" style="margin-bottom: 60px;">Especialistas senior con amplia <span>trayectoria en la materia</span>.</h2>`
);

// --- 8. Contact Form ---
html = html.replace(
  /<span class="kicker">Solicitud de Counsel<\/span>/,
  `<span class="kicker">COORDINACIÓN DE SESIÓN</span>`
);
html = html.replace(
  /<h2 class="section-title">Inicia tu caso con nosotros <span>hoy<\/span>\.<\/h2>/,
  `<h2 class="section-title">Inicie la evaluación técnica de su <span>requerimiento</span>.</h2>`
);
html = html.replace(
  /<p class="subtitle">Cuéntanos sobre los requerimientos de tu empresa\. Evaluaremos tu solicitud de inmediato y te conectaremos con el abogado ideal en menos de 24 horas hábiles\.<\/p>/,
  `` // removed, as it's not in the prompt
);
html = html.replace(
  /<h4 style="font-family: var\(--font-sans\); font-size: 15px; font-weight: 600; margin-bottom: 2px;">Confidencialidad Garantizada<\/h4>\s*<p style="font-size: 13px; color: var\(--text-secondary\); margin-bottom: 0;">Toda la información suministrada está protegida por estrictos acuerdos NDA automáticos\.<\/p>/,
  `<h4 style="font-family: var(--font-sans); font-size: 15px; font-weight: 600; margin-bottom: 2px;">Secreto Profesional Garantizado</h4>
                <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 0;">Toda la información y documentación suministrada está estrictamente protegida bajo el marco legal del secreto profesional y protocolos avanzados de confidencialidad corporativa.</p>`
);
html = html.replace(
  /<h4 style="font-family: var\(--font-sans\); font-size: 15px; font-weight: 600; margin-bottom: 2px;">Sin Costos de Onboarding<\/h4>\s*<p style="font-size: 13px; color: var\(--text-secondary\); margin-bottom: 0;">El emparejamiento técnico inicial y la primera llamada exploratoria de alineación son sin cargo\.<\/p>/,
  `<h4 style="font-family: var(--font-sans); font-size: 15px; font-weight: 600; margin-bottom: 2px;">Evaluación Preliminar de Viabilidad</h4>
                <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 0;">El análisis inicial de antecedentes y la asignación del especialista técnico se ejecutan de forma previa a la sesión, asegurando que la reunión aborde directamente la resolución de su asunto.</p>`
);

html = html.replace(
  /<h3 style="font-size: 22px; margin-bottom: 24px; font-family: var\(--font-sans\); font-weight: 600;">Información General<\/h3>/,
  `<h3 style="font-size: 22px; margin-bottom: 24px; font-family: var(--font-sans); font-weight: 600;">Datos de Registro</h3>`
);
html = html.replace(
  /<label for="form-name">Tu Nombre Completo \*<\/label>/,
  `<label for="form-name">NOMBRE COMPLETO *</label>`
);
html = html.replace(
  /<label for="form-category">Área del Asunto \*<\/label>/,
  `<label for="form-category">ÁREA DE ASIGNACIÓN *</label>`
);

html = html.replace(
  /<option value="ma">M&A y Sociedades<\/option>\s*<option value="tech">Tecnología y Propiedad Intelectual<\/option>\s*<option value="tax">Impuestos y Planificación Fiscal<\/option>\s*<option value="regulatory">Regulatorio y FinTech<\/option>\s*<option value="other">Otro asunto corporativo<\/option>/,
  `<option value="laboral">1. Derecho Laboral</option>
                  <option value="contencioso">2. Contencioso Administrativo</option>
                  <option value="notaria">3. Notaría Pública y Bienes Raíces</option>
                  <option value="recuperacion">4. Recuperación de Capital</option>
                  <option value="propiedad">5. Propiedad Intelectual</option>
                  <option value="familia">6. Derecho de Familia</option>
                  <option value="penal">7. Derecho Penal</option>`
);

// We will also update app-v2.js for the dynamic text switching in the console.
let js = fs.readFileSync('app-v2.js', 'utf8');

js = js.replace(/function initSimulator\(\) \{[\s\S]*?\}\n\nfunction displayMatchResult\(category\) \{[\s\S]*?\}/,
`function initSimulator() {
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
}`
);

fs.writeFileSync('index.html', html);
fs.writeFileSync('app-v2.js', js);

console.log("Successfully replaced all texts.");
