const extend=(className,name)=>{
    
const p=document.querySelector(`${className}`);
   if(p.hasAttribute(`hidden`)===true){
    p.removeAttribute(`hidden`);
   }else p.setAttribute(`hidden`,'');

   const svg=document.querySelector(`${name}`);

   if (svg.classList.contains('active')) {
    svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="#AD28EB" viewBox="0 0 30 31"><path d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`;
    svg.classList.remove('active');
} else {
    svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="#301534" viewBox="0 0 30 31"><path d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`;
    svg.classList.add('active');
}
}
