const chapterMembers = [
  { name: 'Neeharika Nair', className: 'Founding', position: 'President', study: 'Computer Science', linkedin: 'https://www.linkedin.com/in/neeharikanair/' , photo: 'assets/NeeharikaN-Headshot.jpg'},
  { name: 'Alekhya Vadiala', className: 'Founding', position: 'Executive Vice President', study: 'Intelligent Systems Engineering', linkedin: 'https://www.linkedin.com/in/alekhya-vadiala-176999324/' , photo: 'assets/AlekhyaV-Headshot.jpg'},
  { name: 'Genny Foulk', className: 'Founding', position: 'Vice President of Operations', study: 'Intelligent Systems Engineering', linkedin: 'https://www.linkedin.com/in/genny-foulk-2073ba348/' , photo: 'assets/GennyF-Headshot.jpg'},
  { name: 'Jaiden Medina', className: 'Founding', position: 'Vice President of Technical Development', study: 'Intelligent Systems Engineering', linkedin: 'https://www.linkedin.com/in/jaiden-medina/' , photo: 'assets/JaidenM-Headshot.jpg'},
  { name: 'Martin Vadal', className: 'Founding', position: 'Vice President of Professional Development', study: 'Intelligent Systems Engineering', linkedin: 'https://www.linkedin.com/in/martin-vidal-luddy/' , photo: 'assets/MartinV-Headshot.jpg'},
  { name: 'Tanner Gault', className: 'Founding', position: 'Vice President of Recruitment', study: 'Intelligent Systems Engineering', linkedin: 'https://www.linkedin.com/in/tannergault/' , photo: 'assets/TannerG-Headshot.jpg'},
  { name: 'Tessa Troyer', className: 'Founding', position: 'Vice President of Finance', study: 'Finance', linkedin: 'https://www.linkedin.com/in/tessa-troyer-vw/' , photo: 'assets/TessaT-Headshot.jpg'},
  { name: 'Caroline Conway', className: 'Founding', position: 'Vice President of Social Engagement', study: 'Tourism, Hospitality, and Event Management', linkedin: 'https://www.linkedin.com/in/carolineconway2006/', photo: 'assets/CarolineC-Headshot.jpg'},
  /*
  { name: 'Alexa Napireralski', className: '', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Andrew Borgsdorf', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Andrew Pasnik', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Bella Sauer', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Benjamin Rimington', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Connor Prodoehl', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Daven Sproull', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'David Akinfisoye', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Gabby Roose', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Grace Roudebush', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Harkhush Singh', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Ibrahim', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Jack Wember', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Jacob Jenkins', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Jezel Lopez', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Johnny Zheng', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Josh Lindley', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Katie Castro', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Kirsten Jackson', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Lavanya Nahar', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Litzy Mrtz', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Logan Reddell', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Lois', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Maddy Nizza', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Matt Daudelin', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Mia Schlessinger', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Mike Weyne', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Monish', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Nathan U', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Neve B', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Peri Small', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'pri k.', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Rylan Kagan', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Sam Mellon', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Spencer Goodson', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Tanisha Chandrasekaran', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  { name: 'Taylor Bishop', className: 'Alpha', position: '', study: '', linkedin: '' , photo: ''},
  //{ name: '', className: '', position: '', study: '', linkedin: '' , photo: ''},*/
];

function initNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-links] a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  items.forEach((item) => observer.observe(item));
}

function renderMembers() {
  const grid = document.querySelector('[data-members-grid]');
  const filter = document.querySelector('[data-class-filter]');
  if (!grid) return;

  function makeCard(member) {
    const a = document.createElement('a');
    a.className = 'member-card reveal';
    a.href = member.linkedin;
    a.target = '_blank';
    a.rel = 'noreferrer';
    a.dataset.class = member.className;
    a.innerHTML = `
      <div class="member-photo"><img src="${member.photo}" alt="${member.name}"></div>
      <div class="member-body">
        <h3 class="member-name">${member.name}</h3>
        <p class="member-meta"><strong>Position:</strong> ${member.position}</p>
        <p class="member-study"><strong>Studying:</strong> ${member.study}</p>
        <span class="member-chip">${member.className}</span>
      </div>
    `;
    return a;
  }

  const draw = (selected = 'all') => {
    grid.innerHTML = '';
    const filtered = selected === 'all'
      ? chapterMembers
      : chapterMembers.filter((m) => m.className.toLowerCase() === selected.toLowerCase());
    filtered.forEach((member) => grid.appendChild(makeCard(member)));
    initReveal();
  };

  draw(filter ? filter.value : 'all');
  if (filter) {
    filter.addEventListener('change', () => draw(filter.value));
  }
}

function initAutoMarquee() {
  document.querySelectorAll('[data-marquee]').forEach((marquee) => {
    const track = marquee.querySelector('.marquee-track');
    if (!track || track.dataset.cloneReady) return;
    track.innerHTML += track.innerHTML;
    track.dataset.cloneReady = 'true';
  });
}

function init() {
  initNav();
  initReveal();
  renderMembers();
  initAutoMarquee();
  initVerticalMarquee();
}

function initVerticalMarquee() {
  const track = document.querySelector('.vertical-track');
  if (!track || track.dataset.cloneReady) return;

  track.innerHTML += track.innerHTML;
  track.dataset.cloneReady = 'true';
}

function initVerticalFocus() {
  const container = document.querySelector('.vertical-marquee');
  const items = document.querySelectorAll('.vm-item');

  if (!container || !items.length) return;

  function update() {
    const center = container.getBoundingClientRect().top + container.offsetHeight / 2;

    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;

      const distance = Math.abs(center - itemCenter);

      const maxDist = container.offsetHeight / 2;

      const scale = Math.max(0.7, 1 - distance / maxDist);
      const opacity = Math.max(0.2, 1 - distance / maxDist);

      item.style.transform = `scale(${scale})`;
      item.style.opacity = opacity;
    });

    requestAnimationFrame(update);
  }

  update();
}

initVerticalFocus();

const track = document.querySelector('.v-track');
if (track && !track.dataset.cloned) {
  track.innerHTML += track.innerHTML;
  track.dataset.cloned = 'true';
}

document.addEventListener('DOMContentLoaded', init);
