const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Function to extract a section by id or class
function extractSection(htmlStr, tag, attr, value) {
  const regex = new RegExp(`<${tag}[^>]*?${attr}="${value}"[^>]*>[\\s\\S]*?<\\/${tag}>`);
  const match = htmlStr.match(regex);
  return match ? match[0] : '';
}

function removeSection(htmlStr, tag, attr, value) {
  const regex = new RegExp(`<${tag}[^>]*?${attr}="${value}"[^>]*>[\\s\\S]*?<\\/${tag}>`);
  return htmlStr.replace(regex, '');
}

const hero = extractSection(html, 'section', 'class', 'hero');
let htmlNoHero = removeSection(html, 'section', 'class', 'hero');

const logoStrip = extractSection(htmlNoHero, 'section', 'class', 'logo-strip');
let htmlNoLogo = removeSection(htmlNoHero, 'section', 'class', 'logo-strip');

const simulador = extractSection(htmlNoLogo, 'section', 'id', 'simulador');
let htmlNoSim = removeSection(htmlNoLogo, 'section', 'id', 'simulador');

const modelo = extractSection(htmlNoSim, 'section', 'id', 'modelo');
let htmlNoMod = removeSection(htmlNoSim, 'section', 'id', 'modelo');

const comparison = extractSection(htmlNoMod, 'section', 'class', 'comparison-section reveal');
let htmlNoComp = removeSection(htmlNoMod, 'section', 'class', 'comparison-section reveal');

const sectores = extractSection(htmlNoComp, 'section', 'id', 'sectores');
let htmlNoSect = removeSection(htmlNoComp, 'section', 'id', 'sectores');

const testimonios = extractSection(htmlNoSect, 'section', 'id', 'testimonios');
let htmlNoTest = removeSection(htmlNoSect, 'section', 'id', 'testimonios');

const contacto = extractSection(htmlNoTest, 'section', 'id', 'contacto');
let htmlNoCont = removeSection(htmlNoTest, 'section', 'id', 'contacto');

// Now reassemble the main content
const newMainContent = `
  <main id="main-content">
    ${hero}
    ${logoStrip}
    ${sectores}
    ${simulador}
    ${modelo}
    ${comparison}
    ${testimonios}
    ${contacto}
  </main>
`;

// Replace old main content
const finalHtml = html.replace(/<main id="main-content">[\s\S]*?<\/main>/, newMainContent);

// Also fix titles
let updatedHtml = finalHtml;

// Sectores title fix
updatedHtml = updatedHtml.replace(
  /<span class="kicker">Áreas de Especialidad<\/span>/,
  `<span class="kicker">MATERIAS DE PRÁCTICA</span>`
);

// Simulator title fix
updatedHtml = updatedHtml.replace(
  /<span class="kicker">Gestión jurídica estructural para la continuidad del negocio<\/span>\s*<h2 class="section-title">Sustituimos la incertidumbre por <span>soluciones estructuradas<\/span>\.<\/h2>/,
  `<span class="kicker">EL ENFOQUE FORSETI LEGAL</span>
          <h2 class="section-title">Gestión jurídica estructural para la <span>continuidad del negocio</span>.</h2>`
);

// Nav items fix: "Para Empresas" and "Para Personas" should go to #sectores
updatedHtml = updatedHtml.replace(
  /href="#sectores" class="nav-item">Para Empresas<\/a>\s*<a href="#sectores" class="nav-item">Para Personas<\/a>/g,
  `href="#sectores" class="nav-item">Para Empresas</a>
        <a href="#sectores" class="nav-item">Para Personas</a>`
); // Nothing changes functionally, just confirming.

// Footer fix
updatedHtml = updatedHtml.replace(
  /<ul class="footer-links">\s*<li><a href="#modelo">El Modelo<\/a><\/li>\s*<li><a href="#simulador">Simulador Match<\/a><\/li>\s*<li><a href="#sectores">Áreas de Especialidad<\/a><\/li>\s*<li><a href="#testimonios">Testimonios<\/a><\/li>\s*<\/ul>/,
  `<ul class="footer-links">
          <li><a href="#sectores">Para Empresas / Personas</a></li>
          <li><a href="#simulador">Enfoque Forseti</a></li>
          <li><a href="#testimonios">Nuestro Equipo</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>`
);

updatedHtml = updatedHtml.replace(
  /<ul class="footer-links">\s*<li><a href="#sectores">Startups & Venture Capital<\/a><\/li>\s*<li><a href="#sectores">Fusiones y Adquisiciones<\/a><\/li>\s*<li><a href="#sectores">Tecnología, PI & IA<\/a><\/li>\s*<li><a href="#sectores">Estructuración Fiscal<\/a><\/li>\s*<\/ul>/,
  `<ul class="footer-links">
          <li><a href="#sectores">Derecho Laboral</a></li>
          <li><a href="#sectores">Contencioso Administrativo</a></li>
          <li><a href="#sectores">Bienes Raíces</a></li>
          <li><a href="#sectores">Propiedad Intelectual</a></li>
        </ul>`
);

fs.writeFileSync('index.html', updatedHtml);
console.log("Reordered sections successfully.");
