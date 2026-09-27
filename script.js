const topbar = document.getElementById('topbar');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
window.addEventListener('scroll', () => topbar.classList.toggle('scrolled', window.scrollY > 30));
menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('show') }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const sections = [...document.querySelectorAll('section[id]')];
const navItems = [...document.querySelectorAll('.nav-links a')];
function setActive(){let current='home';sections.forEach(s=>{if(scrollY >= s.offsetTop-140) current=s.id});navItems.forEach(a=>a.classList.toggle('active', a.getAttribute('href') === '#' + current));}
window.addEventListener('scroll', setActive);setActive();
const words=['Grow.','Launch.','Innovate.'];let wi=0,ci=0,del=false;const target=document.getElementById('typingText');function type(){if(!target)return;const word=words[wi];target.textContent=word.slice(0,ci);if(!del&&ci<word.length)ci++;else if(del&&ci>0)ci--;else{del=!del;if(!del)wi=(wi+1)%words.length}setTimeout(type,del?75:115)}type();
const contactForm=document.getElementById('contactForm');contactForm?.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('contactName').value.trim(),email=document.getElementById('contactEmail').value.trim(),subject=document.getElementById('contactSubject').value.trim(),message=document.getElementById('contactMessage').value.trim();const body=`Name: ${name}\nEmail: ${email}\n\n${message}`;window.location.href=`mailto:codeibis.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`});
menuBtn?.addEventListener('click',()=>menuBtn.setAttribute('aria-expanded',String(navLinks.classList.contains('open'))));document.getElementById('year').textContent=new Date().getFullYear();
