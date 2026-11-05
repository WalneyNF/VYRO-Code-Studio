'use strict';
(function(){
 const KEY='vyro-theme-v1',allowed=['hacker','dark','light','ocean'];
 let theme='hacker';try{const v=localStorage.getItem(KEY);if(allowed.includes(v))theme=v}catch{}
 function apply(v){document.documentElement.setAttribute('data-vyro-theme',v);try{localStorage.setItem(KEY,v)}catch{}}
 apply(theme);
 function init(){if(document.getElementById('vyro-theme-picker'))return;const wrap=document.createElement('label');wrap.id='vyro-theme-picker';wrap.textContent='Tema ';const select=document.createElement('select');select.setAttribute('aria-label','Tema visual VYRO');for(const [id,name] of [['hacker','Hacker (padrão)'],['dark','Escuro'],['light','Claro'],['ocean','Oceano']]){const opt=new Option(name,id);select.add(opt)}select.value=theme;select.addEventListener('change',()=>{theme=select.value;apply(theme)});wrap.append(select);const header=document.querySelector('header');if(header)header.append(wrap);else{wrap.style.position='fixed';wrap.style.top='8px';wrap.style.right='8px';document.body.append(wrap)}}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
