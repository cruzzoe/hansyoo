document.addEventListener('DOMContentLoaded', () => {
  const preferredLanguage = localStorage.getItem('hans-language');
  const currentLanguage = location.pathname.includes('/ko/') ? 'ko' : 'en';
  if (preferredLanguage && preferredLanguage !== currentLanguage && !sessionStorage.getItem('hans-language-redirected')) {
    sessionStorage.setItem('hans-language-redirected', 'true');
    const koreanPath = location.pathname.includes('/ko/') ? location.pathname : location.pathname.replace('/hansyoo/', '/hansyoo/ko/');
    const englishPath = location.pathname.replace('/hansyoo/ko/', '/hansyoo/');
    location.replace(preferredLanguage === 'ko' ? koreanPath : englishPath);
    return;
  }
  const field = document.querySelector('.bubble-field');
  let last = 0;
  document.addEventListener('pointermove', (event) => {
    if (event.timeStamp - last < 90 || !field) return;
    last = event.timeStamp;
    const bubble = document.createElement('i');
    bubble.className = 'bubble';
    bubble.style.left = `${event.clientX}px`; bubble.style.top = `${event.clientY}px`;
    bubble.style.width = bubble.style.height = `${5 + Math.random() * 10}px`;
    field.appendChild(bubble); setTimeout(() => bubble.remove(), 5100);
  });
  const links = [...document.querySelectorAll('[data-lightbox]')];
  links.forEach(link => link.addEventListener('click', event => {
    event.preventDefault(); const modal = document.createElement('div'); modal.className = 'lightbox';
    modal.innerHTML = `<button aria-label="Close">×</button><img src="${link.href}" alt="${link.dataset.title}"><p>${link.dataset.title}</p>`;
    Object.assign(modal.style,{position:'fixed',inset:0,zIndex:20,background:'#001a3eeb',display:'grid',placeItems:'center',padding:'30px'});
    modal.querySelector('img').style.cssText='max-width:92vw;max-height:78vh;border:12px solid #fff;border-radius:5px';
    modal.querySelector('button').style.cssText='position:absolute;top:20px;right:25px;border:0;background:transparent;color:white;font-size:3rem;cursor:pointer';
    modal.querySelector('p').style.cssText='position:absolute;bottom:12px;color:white;font-size:1.15rem';
    modal.addEventListener('click', e => { if(e.target === modal || e.target.tagName === 'BUTTON') modal.remove(); }); document.body.append(modal);
  }));
  const toggle = document.querySelector('[data-lang-toggle]');
  if (toggle) toggle.addEventListener('click', () => localStorage.setItem('hans-language', toggle.href.includes('/ko/') ? 'ko' : 'en'));
});
