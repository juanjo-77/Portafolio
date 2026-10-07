(() => {
  'use strict';

  /* ───────── DATOS (edítalos aquí) ───────── */
  const PROFILE = {
    email: 'penamunozjuanjose64@gmail.com',
    phone: '+57 304 368 1597',
    wa: 'https://wa.me/573043681597',
    github: 'https://github.com/juanjo-77',
    linkedin: 'https://www.linkedin.com/in/juan-jose-pe%C3%B1a-mu%C3%B1oz-6873953b6/',
  };

  // `repo`: pega aquí el link del repositorio de cada proyecto.
  // Si lo dejas vacío, el botón apunta a tu perfil de GitHub.
  const PROJECTS = [
    {
      id: 'finora', title: 'Finora — App de Finanzas Personales', cats: ['fullstack', 'ia'],
      short: 'App multiplataforma de finanzas personales con asistente de IA y Financial Score.',
      desc: 'Aplicación multiplataforma para llevar el control del dinero: movimientos, deudas, inversiones y metas, con un Financial Score y un asistente de IA.',
      points: ['Movimientos, deudas, inversiones y metas de ahorro', 'Financial Score para medir la salud financiera', 'Asistente de IA con Groq', 'Autenticación con JWT y orquestación con Docker Compose'],
      stack: ['ASP.NET Core', 'PostgreSQL', 'FastAPI', 'Flutter', 'JWT', 'Docker'], repo: '',
    },
    {
      id: 'banckash', title: 'Banckash — Sistema Bancario', cats: ['fullstack', 'backend'],
      short: 'Sistema bancario multitenant con cuentas, transferencias e historial.',
      desc: 'Sistema bancario multitenant con gestión de cuentas, transferencias e historial de movimientos, expuesto mediante APIs REST optimizadas.',
      points: ['Arquitectura multitenant', 'Cuentas, transferencias e historial', 'APIs REST optimizadas', 'Frontend en React'],
      stack: ['C#', 'ASP.NET', 'Entity Framework', 'SQL Server', 'React'], repo: '',
    },
    {
      id: 'wayze', title: 'Wayze — App con Agente de IA', cats: ['ia', 'backend'],
      short: 'App móvil con agente de IA para agendar tareas, rutas y alertas de clima.',
      desc: 'App móvil con un agente de IA que agenda tareas, calcula rutas óptimas y envía alertas de clima en tiempo real.',
      points: ['Agente de IA para agendar tareas', 'Cálculo de rutas óptimas', 'Alertas de clima en tiempo real', 'Automatización con N8n y despliegue en AWS'],
      stack: ['C#', 'Python', 'FastAPI', 'N8n', 'AWS'], repo: '',
    },
    {
      id: 'pqrs', title: 'PQRS SaaS Platform', cats: ['fullstack', 'ia'],
      short: 'Plataforma multitenant con IA (RAG), triaje automático y widget embebible.',
      desc: 'Plataforma SaaS multitenant para gestionar PQRS con IA: respuestas con RAG, triaje automático y un widget embebible, desplegada en AWS.',
      points: ['Multitenant con IA basada en RAG', 'Triaje automático de solicitudes', 'Widget embebible para sitios de clientes', 'Contenedores con Docker y despliegue en AWS'],
      stack: ['C#', '.NET', 'React', 'PostgreSQL', 'Docker', 'AWS'], repo: '',
    },
    {
      id: 'codearena', title: 'CodeArena 3D', cats: ['fullstack'],
      short: 'Juego multijugador en tiempo real con arquitectura distribuida y baja latencia.',
      desc: 'Juego multijugador en tiempo real con arquitectura distribuida y baja latencia usando Socket.IO.',
      points: ['Comunicación en tiempo real con Socket.IO', 'Arquitectura distribuida de baja latencia', 'Backend con NestJS y datos en Supabase'],
      stack: ['TypeScript', 'React', 'NestJS', 'Socket.IO', 'Supabase'], repo: '',
    },
    {
      id: 'dbaas', title: 'DBaaS — Bases de Datos en la Nube', cats: ['backend', 'data'],
      short: 'Servicio para crear bases de datos en segundos con credenciales y API Keys.',
      desc: 'Servicio que permite crear bases de datos en segundos con credenciales propias, API Keys y automatización del aprovisionamiento.',
      points: ['Creación de bases de datos en segundos', 'Credenciales propias y API Keys', 'Soporte para MySQL y PostgreSQL', 'Aprovisionamiento con Docker y API REST'],
      stack: ['C#', 'MySQL', 'PostgreSQL', 'Docker', 'REST'], repo: '',
    },
    {
      id: 'qa-platform', title: 'Plataforma de Aprendizaje QA', cats: ['fullstack'],
      short: 'App full stack para aprender calidad de software con evaluación adaptativa.',
      desc: 'App web full stack para aprender calidad de software: login, evaluación adaptativa de nivel, laboratorio interactivo y generación automática de reportes en PDF.',
      points: ['Login y evaluación adaptativa de nivel', 'Laboratorio interactivo', 'Reportes en PDF automáticos'],
      stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL', 'Tailwind'], repo: 'https://github.com/juanjo-77',
    },
    {
      id: 'excel-pg', title: 'Migración Excel → PostgreSQL', cats: ['data', 'backend'],
      short: 'Herramienta para importar, limpiar y cargar datos de Excel a PostgreSQL.',
      desc: 'Herramienta para importar, transformar y cargar datos desde archivos Excel a una base de datos relacional, con validación, limpieza de datos y log de errores.',
      points: ['Importación y transformación desde Excel', 'Validación y limpieza de datos', 'Log de errores de carga'],
      stack: ['JavaScript', 'PostgreSQL', 'SQL', 'Python'], repo: 'https://github.com/juanjo-77/prueba_DATA_BASE',
    },
  ];

  const SECTIONS = [
    ['hero', 'Inicio'], ['about', 'Sobre mí'], ['skills', 'Stack tecnológico'], ['projects', 'Proyectos'],
    ['experience', 'Trayectoria'], ['terminal', 'Terminal'], ['contact', 'Contacto'],
  ];

  /* ───────── HELPERS ───────── */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const repoOf = (p) => p.repo || PROFILE.github;

  const toastEl = $('#toast');
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2000);
  }

  async function copy(text, msg = 'Copiado ✓') {
    try { await navigator.clipboard.writeText(text); toast(msg); }
    catch { toast('No se pudo copiar'); }
  }

  /* ───────── PROYECTOS ───────── */
  const grid = $('#projectsGrid');
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card panel spot reveal" data-id="${p.id}" data-cats="${p.cats.join(' ')}">
      <div class="project-top"><span>PRJ-${String(i + 1).padStart(2, '0')}</span><em>${esc(p.cats[0].toUpperCase())}</em></div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.short)}</p>
      <div class="stack-row">${p.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</div>
      <button class="card-link" data-open="${p.id}">Ver detalle →</button>
    </article>`).join('');

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (card) openProject(card.dataset.id);
  });

  $('#filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    $$('.filter').forEach((b) => b.classList.toggle('active', b === btn));
    const f = btn.dataset.filter;
    $$('.project-card').forEach((c) => c.classList.toggle('hide', f !== 'all' && !c.dataset.cats.split(' ').includes(f)));
  });

  /* ───────── MODAL ───────── */
  const modal = $('#modal');
  const modalBody = $('#modalBody');
  let lastFocus = null;

  function openProject(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement;
    modalBody.innerHTML = `
      <div class="eyebrow">PROYECTO · ${esc(p.cats.join(' / ').toUpperCase())}</div>
      <h3 id="mTitle">${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <h5>Características</h5>
      <ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      <h5>Stack</h5>
      <div class="stack-row">${p.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</div>
      <div class="modal-actions">
        <a class="btn btn-primary" href="${esc(repoOf(p))}" target="_blank" rel="noopener">${p.repo ? 'Ver repositorio' : 'Ver GitHub'} ↗</a>
        <button class="btn btn-ghost" data-close>Cerrar</button>
      </div>`;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('#modalClose').focus();
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    lastFocus?.focus?.();
  }
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('#modalClose') || e.target.closest('[data-close]')) closeModal();
  });

  /* ───────── PALETA ⌘K ───────── */
  const palette = $('#palette');
  const pInput = $('#paletteInput');
  const pList = $('#paletteList');
  let pItems = [];
  let pSel = 0;

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  function buildItems(q) {
    const t = q.trim().toLowerCase();
    const all = [
      ...SECTIONS.map(([id, label]) => ({ g: 'Navegación', label: `Ir a ${label}`, tag: 'IR', run: () => goTo(id) })),
      ...PROJECTS.map((p) => ({ g: 'Proyectos', label: p.title, tag: 'DETALLE', run: () => openProject(p.id) })),
      { g: 'Acciones', label: 'Copiar email', tag: 'COPIAR', run: () => copy(PROFILE.email, 'Email copiado ✓') },
      { g: 'Acciones', label: 'Abrir GitHub', tag: 'LINK', run: () => window.open(PROFILE.github, '_blank', 'noopener') },
      { g: 'Acciones', label: 'Abrir LinkedIn', tag: 'LINK', run: () => window.open(PROFILE.linkedin, '_blank', 'noopener') },
      { g: 'Acciones', label: 'Escribir por WhatsApp', tag: 'LINK', run: () => window.open(PROFILE.wa, '_blank', 'noopener') },
    ];
    return t ? all.filter((i) => i.label.toLowerCase().includes(t)) : all;
  }

  function renderPalette() {
    pItems = buildItems(pInput.value);
    pSel = Math.min(pSel, Math.max(pItems.length - 1, 0));
    if (!pItems.length) { pList.innerHTML = '<div class="p-empty">Sin resultados</div>'; return; }
    let html = '', last = '';
    pItems.forEach((it, i) => {
      if (it.g !== last) { html += `<div class="p-group">${it.g}</div>`; last = it.g; }
      html += `<button class="p-item ${i === pSel ? 'sel' : ''}" data-i="${i}"><span>${esc(it.label)}</span><small>${it.tag}</small></button>`;
    });
    pList.innerHTML = html;
    $('.p-item.sel', pList)?.scrollIntoView({ block: 'nearest' });
  }
  function openPalette() { palette.hidden = false; pInput.value = ''; pSel = 0; renderPalette(); pInput.focus(); }
  function closePalette() { palette.hidden = true; }
  function runPalette(i) { const it = pItems[i]; if (!it) return; closePalette(); it.run(); }

  $('#openPalette').addEventListener('click', openPalette);
  pInput.addEventListener('input', () => { pSel = 0; renderPalette(); });
  pList.addEventListener('click', (e) => { const b = e.target.closest('.p-item'); if (b) runPalette(+b.dataset.i); });
  palette.addEventListener('click', (e) => { if (e.target === palette) closePalette(); });
  pInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); pSel = (pSel + 1) % pItems.length; renderPalette(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); pSel = (pSel - 1 + pItems.length) % pItems.length; renderPalette(); }
    else if (e.key === 'Enter') { e.preventDefault(); runPalette(pSel); }
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      palette.hidden ? openPalette() : closePalette();
    } else if (e.key === 'Escape') {
      if (!palette.hidden) closePalette();
      else if (!modal.hidden) closeModal();
    }
  });

  /* ───────── TERMINAL ───────── */
  const body = $('#termBody');
  const form = $('#termForm');
  const input = $('#termInput');
  const history = [];
  let hIdx = 0;

  const FILES = {
    'about.md': [
      '<span class="hl"># Juan Jose Peña Muñoz</span>',
      'Full Stack Developer · Medellín, Colombia',
      'Fundador de Atom-Site Studios. 1.5 años de experiencia práctica',
      'construyendo apps web, APIs REST, microservicios y soluciones con IA.',
      'Ing. de Sistemas en el ITM (semestre 5) · Formación en Riwi.',
    ],
    'skills.json': [
      '{',
      '  <span class="hl">"backend"</span>:  ["C#", ".NET Core", "ASP.NET", "FastAPI", "Node.js"],',
      '  <span class="hl">"frontend"</span>: ["React", "Angular", "TypeScript", "JavaScript"],',
      '  <span class="hl">"db"</span>:       ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis"],',
      '  <span class="hl">"devops"</span>:   ["Docker", "GitHub Actions", "AWS", "Kubernetes (básico)"],',
      '  <span class="hl">"ia"</span>:       ["Groq / LLMs", "RAG", "N8n"]',
      '}',
    ],
    'contact.txt': [
      `email    : <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>`,
      `whatsapp : <a href="${PROFILE.wa}" target="_blank" rel="noopener">${PROFILE.phone}</a>`,
      `github   : <a href="${PROFILE.github}" target="_blank" rel="noopener">github.com/juanjo-77</a>`,
      `linkedin : <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">Juan Jose Peña Muñoz</a>`,
    ],
  };

  const COMMANDS = {
    help: () => [
      '<span class="hl">Comandos disponibles</span>',
      '  help            muestra esta ayuda',
      '  whoami          quién soy',
      '  ls              lista archivos',
      '  cat &lt;archivo&gt;   lee un archivo (about.md, skills.json, contact.txt)',
      '  skills          mi stack',
      '  projects        lista de proyectos',
      '  open &lt;id&gt;       abre un proyecto (ej: open finora)',
      '  experience      trayectoria',
      '  git log         historial profesional',
      '  contact         cómo contactarme',
      '  status          disponibilidad',
      '  neofetch        resumen del sistema',
      '  clear           limpia la consola',
    ],
    whoami: () => ['Juan Jose Peña Muñoz — Full Stack Developer. C#, .NET, React y Python. Fundador de Atom-Site Studios.'],
    ls: () => ['about.md   skills.json   contact.txt'],
    skills: () => FILES['skills.json'],
    contact: () => FILES['contact.txt'],
    status: () => ['<span class="gr">● DISPONIBLE</span> para oportunidades de trabajo y proyectos freelance.'],
    projects: () => [
      ...PROJECTS.map((p) => `<span class="am">${p.id.padEnd(12)}</span> ${esc(p.title)}`),
      '',
      'Usa <span class="hl">open &lt;id&gt;</span> para ver el detalle.',
    ],
    experience: () => [
      '<span class="hl">2025 – hoy </span> Fundador &amp; Lead Developer · Atom-Site Studios',
      '<span class="hl">Oct 2025 – hoy</span> Full Stack Developer · Riwi',
      '<span class="hl">2025 – hoy </span> Desarrollador Freelance',
      '<span class="hl">2025 – hoy </span> Ing. de Sistemas · ITM (semestre 5)',
    ],
    neofetch: () => [
      '<span class="hl">juanjo</span>@<span class="hl">dev</span>',
      '-----------------',
      'OS        : Medellín, CO',
      'Role      : Full Stack Developer',
      'Studio    : Atom-Site Studios',
      'Languages : C#, TypeScript, Python, JavaScript',
      'Infra     : Docker, GitHub Actions, AWS',
      'Uptime    : 19 años · 1.5 de experiencia',
    ],
  };

  function print(html, cls = 't-out') {
    const d = document.createElement('div');
    d.className = cls;
    d.innerHTML = html;
    body.appendChild(d);
  }
  function printLines(lines) { print(lines.join('\n')); }

  function run(raw) {
    const cmd = raw.trim();
    if (!cmd) return;
    history.push(cmd); hIdx = history.length;

    const echo = document.createElement('div');
    echo.className = 't-cmd';
    echo.innerHTML = '<b>$</b> ';
    echo.append(document.createTextNode(cmd));   // texto del usuario seguro
    body.appendChild(echo);

    const [name, ...rest] = cmd.toLowerCase().split(/\s+/);
    const arg = rest.join(' ');

    if (cmd.toLowerCase() === 'clear') { body.innerHTML = ''; }
    else if (cmd.toLowerCase() === 'git log') {
      printLines([
        '<span class="am">commit a1f3c9e</span> (HEAD → main)  Fundador &amp; Lead Developer — Atom-Site Studios',
        '<span class="am">commit 7d42b08</span>               Full Stack Developer — Riwi',
        '<span class="am">commit 3be91f5</span>               Desarrollador Freelance',
      ]);
    }
    else if (name === 'cat') {
      if (FILES[arg]) printLines(FILES[arg]);
      else print(`cat: ${esc(arg || '(vacío)')}: no existe. Prueba: about.md, skills.json, contact.txt`);
    }
    else if (name === 'open') {
      const p = PROJECTS.find((x) => x.id === arg);
      if (p) { print(`Abriendo <span class="hl">${esc(p.title)}</span>…`); setTimeout(() => openProject(p.id), 250); }
      else print(`open: proyecto "${esc(arg)}" no encontrado. Usa <span class="hl">projects</span> para ver los ids.`);
    }
    else if (name === 'sudo' && arg.includes('hire')) {
      print('<span class="gr">✔ Permiso concedido.</span> Escríbeme: <a href="#contact">ir a contacto</a> 🚀');
    }
    else if (COMMANDS[name] && !arg) printLines(COMMANDS[name]());
    else print(`comando no encontrado: <span class="am">${esc(name)}</span>. Escribe <span class="hl">help</span>.`);

    body.scrollTop = body.scrollHeight;
  }

  form.addEventListener('submit', (e) => { e.preventDefault(); run(input.value); input.value = ''; });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && history.length) { e.preventDefault(); hIdx = Math.max(0, hIdx - 1); input.value = history[hIdx] ?? ''; }
    else if (e.key === 'ArrowDown') { e.preventDefault(); hIdx = Math.min(history.length, hIdx + 1); input.value = history[hIdx] ?? ''; }
  });
  $('.term-hints').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-cmd]');
    if (b) { run(b.dataset.cmd); }
  });
  $('#term').addEventListener('click', (e) => { if (!e.target.closest('a, button')) input.focus({ preventScroll: true }); });

  print('<span class="gr">Bienvenido 👋</span> Escribe <span class="hl">help</span> para ver los comandos.');

  /* ───────── CONTACTO ───────── */
  $('#copyEmail').addEventListener('click', () => copy(PROFILE.email, 'Email copiado ✓'));

  /* ───────── NAV: móvil, scroll-spy, progreso ───────── */
  const burger = $('#burger');
  const navLinks = $('#navLinks');
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  navLinks.addEventListener('click', (e) => {
    if (e.target.closest('a')) { navLinks.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        $$('.nav-links a').forEach((a) => a.classList.toggle('active', a.dataset.spy === en.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  SECTIONS.forEach(([id]) => { const el = document.getElementById(id); if (el) spy.observe(el); });

  const bar = $('#progress');
  const onScroll = () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ───────── REVEAL + SPOTLIGHT ───────── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
  }, { threshold: 0.08 });
  $$('.reveal').forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });

  document.addEventListener('pointermove', (e) => {
    const el = e.target.closest?.('.spot');
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  });

  $('#year').textContent = new Date().getFullYear();
})();