const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* painted florals */
const fl=(g,x,y,s,r=0)=>{let p='';for(let i=0;i<7;i++)p+=`<path d="M50 50C34 38 36 12 50 4 64 12 66 38 50 50Z" fill="url(#${g})" stroke="#6e1b2e22" stroke-width=".8" opacity=".92" transform="rotate(${i*51.4+r} 50 50)"/>`;return`<svg x="${x}" y="${y}" width="${s}" height="${s}" viewBox="0 0 100 100">${p}<circle cx="50" cy="50" r="7" fill="#d9b56d"/><circle cx="50" cy="50" r="3" fill="#8a6a2f"/></svg>`};
const lf=(x,y,r,s=1)=>`<ellipse cx="${x}" cy="${y}" rx="${8*s}" ry="${24*s}" fill="url(#lf)" opacity=".85" transform="rotate(${r} ${x} ${y})"/>`;
$('#defs').insertAdjacentHTML('beforeend',`<symbol id="gar" viewBox="0 0 260 260" overflow="visible">${[[70,22,-70],[120,34,-60],[22,80,-20],[34,130,-10],[95,80,-45],[165,55,-75],[55,170,-5],[140,110,-40],[200,28,-80]].map(a=>lf(...a)).join('')}<path d="M0 30Q80 40 130 110M30 0Q40 80 110 130" stroke="#7d9a6e" stroke-width="2" fill="none" opacity=".6"/>${fl('pk',-10,-10,120,10)}${fl('wh',70,-6,78,20)}${fl('bg',-4,80,80,5)}${fl('wh',62,62,70,30)}${fl('pk',130,10,62,0)}${fl('bg',12,150,56,12)}${fl('pk',105,100,50,40)}<g fill="#e79aa8"><circle cx="190" cy="70" r="5"/><circle cx="72" cy="190" r="5"/><circle cx="170" cy="120" r="4"/></g></symbol>`);
$$('.pg').forEach(p=>p.insertAdjacentHTML('afterbegin',['tl','br','tr','bl'].map(c=>`<svg class="cor ${c}" aria-hidden="true"><use href="#gar"/></svg>`).join('')));
const B=(c,s=40)=>`<svg viewBox="0 0 60 50" width="${s}" aria-hidden="true"><g class="wL"><path d="M30 25C20 2 2 6 6 22c2 10 16 10 24 3z" fill="${c}"/></g><g class="wR"><path d="M30 25C40 2 58 6 54 22c-2 10-16 10-24 3z" fill="${c}"/></g><path d="M30 14v24" stroke="#6e1b2e" stroke-width="2.5"/></svg>`;
const FS=(g,s)=>`<svg viewBox="0 0 100 100" width="${s}" aria-hidden="true">${fl(g,0,0,100)}</svg>`;
$('#d1').innerHTML=FS('pk',120)+`<div style="position:absolute;left:60px;top:-14px">${FS('wh',80)}</div>`;
$('#d2').innerHTML=FS('bg',100)+`<div style="position:absolute;left:-34px;top:56px">${FS('pk',70)}</div>`;
$('#d2').insertAdjacentHTML('beforeend',`<span style="position:absolute;left:-60px;top:0">${B('#e79aa8')}</span>`);
[['#e79aa8',20,16],['#e8cf98',72,64]].forEach(([c,l,t],i)=>$$('.pg')[i?6:0].insertAdjacentHTML('beforeend',`<span class="bf" style="left:${l}%;top:${t}%;--d:${11+i*3}s">${B(c)}</span>`));
[['#f1c4cb',12,52],['#e8cf98',80,22]].forEach(([c,l,t],i)=>$$('.pg')[6].insertAdjacentHTML('beforeend',`<span class="bf" style="left:${l}%;top:${t}%;--d:${9+i*2}s">${B(c,34)}</span>`));
if(!RM){const cs=['#f1c4cb','#e79aa8','#fbe3d6','#c5586f'];for(let i=0;i<12;i++){const s=document.createElement('span');s.className='petal';s.style.cssText=`left:${Math.random()*100}%;--d:${12+Math.random()*10}s;--t:-${Math.random()*18}s;--x:${(Math.random()-.5)*200}px;--r:${Math.random()*720}deg;opacity:.65`;s.innerHTML=`<svg viewBox="0 0 20 28" width="16"><path d="M10 0C22 8 20 22 10 28 0 22-2 8 10 0Z" fill="${cs[i%4]}"/></svg>`;document.body.appendChild(s)}
 const d=$('#dust');for(let i=0;i<30;i++){const e=document.createElement('i');e.style.cssText=`left:${Math.random()*100}%;--s:${3+Math.random()*5}px;--d:${7+Math.random()*8}s;--t:-${Math.random()*12}s;--x:${(Math.random()-.5)*80}px`;d.appendChild(e)}}

/* open */
const env=$('#env');let opened=false;
function openEnv(){if(opened)return;opened=true;env.disabled=true;$('#intro').classList.add('open');
 setTimeout(()=>{$('#intro').classList.add('gone');$('#book').classList.add('in');go(0);setTimeout(()=>$('#intro').style.display='none',1700)},RM?50:2700)}
env.onclick=openEnv;$('.tap').onclick=openEnv;

/* pages */
const pages=$$('.pg'),dots=$('#dots');let cur=-1;
pages.forEach(()=>dots.appendChild(document.createElement('i')));
function go(n){n=Math.max(0,Math.min(pages.length-1,n));cur=n;
 pages.forEach((p,i)=>{p.classList.toggle('t',i<n);p.classList.toggle('cur',i===n);p.style.zIndex=pages.length-i;if(i===n)p.removeAttribute('inert');else p.setAttribute('inert','')});
 [...dots.children].forEach((d,i)=>d.classList.toggle('on',i===n));
 dots.style.display=n===6?'none':'flex';dots.style.left='50%';dots.style.transform='translateX(-50%)';dots.style.zIndex=99}
pages.forEach((p,i)=>{const n=document.createElement('div');n.className='nav a';n.style.setProperty('--i',5);
 if(i>0)n.insertAdjacentHTML('beforeend','<button class="btn alt" data-go="'+(i-1)+'" aria-label="Previous page">&lsaquo; Previous</button>');
 if(i<pages.length-1)n.insertAdjacentHTML('beforeend','<button class="btn" data-go="'+(i+1)+'">'+(i===0?'Tap to continue':'Next')+' &rsaquo;</button>');
 p.appendChild(n)});
$$('[data-go]').forEach(b=>b.onclick=()=>go(+b.dataset.go));
addEventListener('keydown',e=>{if(!opened||e.target.matches('input,select'))return;if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
pages.forEach(p=>p.setAttribute('inert',''));

/* countdown to 28 Nov 2026 00:00 local – no event time assumed */
const T=new Date(2026,10,28).getTime(),last={};
function tick(){const d=Math.max(0,T-Date.now()),v={D:Math.floor(d/864e5),H:Math.floor(d%864e5/36e5),M:Math.floor(d%36e5/6e4),S:Math.floor(d%6e4/1e3)};
 for(const k in v){const el=$('#cd'+k),t=String(v[k]).padStart(2,'0');if(last[k]!==t){el.textContent=t;last[k]=t;if(!RM&&last.on){el.classList.remove('tick');void el.offsetWidth;el.classList.add('tick')}}}last.on=1}
tick();setInterval(tick,1000);

/* RSVP */
let ans='';const show=id=>['r1','r2','r3'].forEach(r=>$('#'+r).classList.toggle('hide',r!==id));
$$('[data-a]').forEach(b=>b.onclick=()=>{ans=b.dataset.a;$('#msg').textContent=ans==='yes'?'We can’t wait to celebrate with you!':'Thank you for letting us know. You’ll be missed!';$('#gc').classList.toggle('hide',ans!=='yes');$('#err').textContent='';show('r2');$('#gn').focus()});
$('#cl2').onclick=$('#cl3').onclick=()=>show('r1');
$('#r2').addEventListener('submit',e=>{e.preventDefault();const n=$('#gn').value.trim();if(!n){$('#err').textContent='Please enter your name.';$('#gn').focus();return}
 const g=$('#gg').value,t=ans==='yes'?`Assalamualaikum, this is ${n}. I’ll be attending Hania & Najam’s Reception on 28 November 2026 (${g} guest${g>1?'s':''}).`:`Assalamualaikum, this is ${n}. Sorry, I can’t make it to Hania & Najam’s Reception. Wishing you both the very best!`;
 $('#wa').href='https://wa.me/923113195571?text='+encodeURIComponent(t);show('r3')});
