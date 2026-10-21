
    const button=document.getElementById('language');
    button.addEventListener('click',()=>{const isEnglish=document.body.classList.toggle('english');document.documentElement.lang=isEnglish?'en':'te';button.textContent=isEnglish?'తెలుగు':'English';});
    document.querySelectorAll('[data-open-drawer]').forEach(trigger=>trigger.addEventListener('click',()=>document.getElementById(trigger.dataset.openDrawer).showModal()));
    document.querySelectorAll('[data-close-drawer]').forEach(trigger=>trigger.addEventListener('click',()=>trigger.closest('dialog').close()));
    document.querySelectorAll('.side-drawer').forEach(drawer=>drawer.addEventListener('click',event=>{if(event.target===drawer)drawer.close();}));
  