// MENU MOBILE //

window.addEventListener("scroll", function(){
  let header = this.document.querySelector('#header');
  header.classList.toggle('rolagem',window.scrollY > 0);
})

/*Menu Mobile*/
let bntMenu = document.getElementById('btn--open')
let menu = document.getElementById('menu--mobile')
let overlay = document.getElementById('overlay--menu')

bntMenu.addEventListener('click', ()=>{
  menu.classList.add('open--menu')
})

menu.addEventListener('click', ()=>{
  menu.classList.remove('open--menu')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('open--menu')
})


const enviar = document.getElementById("btnEnviar");
enviar.addEventListener("click", mensagem)
function mensagem(enviar){
  alert("Mensagem enviada com sucesso, a Coderflix agradece o seu contato!");
}



  
  

