const arts=document.querySelectorAll('article');
document.querySelectorAll('.post').forEach(b=>b.onclick=()=>{
  arts.forEach(a=>a.classList.remove('on'));
  const a=document.getElementById('a'+b.dataset.n);a.classList.add('on');
  a.scrollIntoView({behavior:'smooth',block:'start'});
});
document.querySelectorAll('.close').forEach(c=>c.onclick=()=>c.parentElement.classList.remove('on'));
const t=document.getElementById('theme'),r=document.documentElement;
t.onclick=()=>{
  const d=r.dataset.theme==='dark'||(!r.dataset.theme&&matchMedia('(prefers-color-scheme:dark)').matches);
  r.dataset.theme=d?'light':'dark';t.textContent=d?'☾':'☀';
};
