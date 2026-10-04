const $=id=>document.getElementById(id);
let mode='q',wk=0,miss=false,deck=[],i=0,flip=false,picked=-1,opts=[],run=0,st={};
try{st=JSON.parse(localStorage.getItem('cst2550')||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem('cst2550',JSON.stringify(st))}catch(e){}};
const key=c=>c[0]+c[1];
const shuf=a=>{for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}return a};
if(typeof EX!=='undefined')Q.forEach((q,k)=>{q[6]=EX[k]});
function mk(c){return shuf(c.slice(2,6))}
function build(){deck=(mode==='q'?Q:D).filter(c=>(!wk||c[0]===wk)&&(!miss||st[key(c)]==='n'));if(mode==='q')shuf(deck);i=0;run=0;setup()}
function setup(){picked=-1;flip=false;opts=(mode==='q'&&deck[i])?mk(deck[i]):[];render()}
function render(){
 const q=mode==='q',c=deck[i],done=q&&deck.length&&i>=deck.length;
 ['no','ok'].forEach(id=>$(id).classList.toggle('hide',q));
 $('hint').classList.toggle('hide',q||!c);
 $('card').classList.toggle('flip',!q&&flip);
 $('opts').innerHTML='';$('ex').textContent='';
 $('fill').style.width=deck.length?Math.min(100,(i+(picked>=0||done?1:0))/deck.length*100)+'%':'0';
 const g=deck.filter(x=>st[key(x)]==='y').length,m=deck.filter(x=>st[key(x)]==='n').length;
 $('score').textContent='Got it '+g+' | Missed '+m;
 if(!deck.length){$('tag').textContent='';$('txt').textContent=miss?'No missed cards. Nice!':'No cards.';$('pos').textContent='0 / 0';return}
 if(done){$('tag').textContent='Finished';$('txt').textContent='This run: '+run+' / '+deck.length+' correct. Tap Next to go again.';$('pos').textContent=deck.length+' / '+deck.length;return}
 $('pos').textContent=(i+1)+' / '+deck.length;
 if(q){
  $('tag').textContent='Week '+c[0]+' - choose one';$('txt').textContent=c[1];
  opts.forEach((o,k)=>{const b=document.createElement('button');b.textContent=o;
   if(picked>=0){if(o===c[2])b.className='right';else if(k===picked)b.className='wrong'}
   b.onclick=()=>pick(k);$('opts').appendChild(b)});
  if(picked>=0&&c[6])$('ex').textContent=c[6];
 }else{
  $('tag').textContent='Week '+c[0]+(flip?' - Answer':' - Question');$('txt').textContent=flip?c[2]:c[1];
 }
}
function pick(k){if(picked>=0)return;const c=deck[i];picked=k;const ok=opts[k]===c[2];if(ok)run++;st[key(c)]=ok?'y':'n';save();render()}
function go(d){
 if(!deck.length)return;
 if(mode==='q'){if(i>=deck.length){build();return}i=Math.max(0,i+d);setup();return}
 i=(i+d+deck.length)%deck.length;setup();
}
function mark(v){const c=deck[i];if(!c)return;st[key(c)]=v;save();go(1)}
const w=$('weeks');
['All',1,2,3,4,5,6].forEach((x,n)=>{const b=document.createElement('button');b.textContent=n?'Week '+x:'All';if(!n)b.className='on';b.onclick=()=>{wk=n;[...w.children].forEach(e=>e.className='');b.className='on';build()};w.appendChild(b)});
function setMode(m){mode=m;$('tq').className=m==='q'?'on':'';$('tc').className=m==='c'?'on':'';build()}
$('tq').onclick=()=>setMode('q');$('tc').onclick=()=>setMode('c');
$('card').onclick=e=>{if(mode==='c'&&deck.length){flip=!flip;render()}};
$('prev').onclick=()=>go(-1);$('next').onclick=()=>go(1);
$('ok').onclick=()=>mark('y');$('no').onclick=()=>mark('n');
$('shuf').onclick=()=>{shuf(deck);i=0;setup()};
$('miss').onclick=()=>{miss=!miss;$('miss').className=miss?'on':'';build()};
$('rst').onclick=()=>{st={};save();build()};
build();