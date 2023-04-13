const links = Array.from(document.querySelectorAll('.header-menu a'));

links.forEach(function(link){
  const local = location.href;  //Pega o link da página atual
  const href = link.href;       // pega o link de cada item no menu

  if (local.includes(href))  
   // verifico se a página local possui o mesmo link do "a" e assim insiro a classe ativo e modifico-a no CSS
  link.classList.add('ativo')   
})


// ativar items no orçamento
const parametros = new URLSearchParams(location.search);

parametros.forEach(function(parametro){
  const elemento = document.getElementById(parametro);
  if(elemento){
    elemento.checked = true;
  }
  console.log(elemento)
});


//perguntas frequentes

const perg = document.querySelectorAll('.questions button')

/**@param {MouseEvent} event */
function ativacao(event){ 
  const perguntasss = event.currentTarget;
  const controls = perguntasss.getAttribute('aria-controls')
  const resp = document.getElementById(controls)

  resp.classList.toggle('ativa')
  const ativa = resp.classList.contains('ativa')
  perguntasss.setAttribute('aria-expanded', ativa)

} 


perg.forEach(function(pergunta){
  pergunta.addEventListener('click', ativacao)
})


// Galeria de bicicletas

const galeria = document.querySelectorAll('.bikes-imgs img');
const galeria_conteiner = document.querySelector('.bikes-imgs');

function trocarImagem(event){
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  if(media){
    galeria_conteiner.prepend(img);
  }
}


galeria.forEach(function(img){
  img.addEventListener('click', trocarImagem)
}) 

// Plugins

if (window.SimpleAnime){
  new SimpleAnime();
}