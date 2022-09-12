$(document).ready(function() {

    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#aaa'},
        to: { color: '#65DAF9'},

        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 60);
        circle.setText(value);

        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
  
      color: '#65DAF9',
      strokeWidth: 8,
      duration: 1600,
      from: { color: '#aaa'},
      to: { color: '#65DAF9'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 254);
        circle.setText(value);
  
      }
  
    });
  
    let containerC = document.getElementById("circleC");
  
    let circleC = new ProgressBar.Circle(containerC, {
  
      color: '#65DAF9',
      strokeWidth: 8,
      duration: 1800,
      from: { color: '#aaa'},
      to: { color: '#65DAF9'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 32);
        circle.setText(value);
  
      }
  
    });
  
    let containerD = document.getElementById("circleD");
  
    let circleD = new ProgressBar.Circle(containerD, {
  
      color: '#65DAF9',
      strokeWidth: 8,
      duration: 2000,
      from: { color: '#aaa'},
      to: { color: '#65DAF9'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 5423);
        circle.setText(value);
  
      }
  
    });
    // iniciando loaders quando a usuário chegar no elemento
    let dataAreaOffset = $('#data-area').offset();
    // stop serve para a animação não carregar mais que uma vez
    let stop = 0;

    $(window).scroll(function (e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);

        stop = 1;
        }

    });

    // Parallax

    // setTimeout serve para carregar primeiro as imagens
    setTimeout(function() {
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        
    }, 200);

    /*
    Qual a lógica desse JS? 

    A ideia é fazer um evento de Click em cada um dos botões do filtro para identificar seu id. Assim, a classe que dá destaque ao botão ('active') será adicionada no botão que foi clicado, retirado do que estava e, por fim, irá exibir somentes os projetos que têm a classe com o mesmo nome do identificador do botão. 

    */

    // Identifica o botão através da classe e atrela um evento de 'click' a ele
    $('.filter-btn').on('click', function() {

      // Armazena os id's dos botões na variável 'type'
      let type = $(this).attr('id');
      // Armazena a classe na variável boxes
      let boxes = $('.project-box');
  
      // Retira do botão inicial a classe que lhe dá destaque e em seguida e atribui ao botão que foi clicado.

      $('.main-btn').removeClass('active');
      $(this).addClass('active');

      // Verifica o id do btn clicado e chama a função que irá exibir os projetos que correspondem àquele id.

      if(type == 'dsg-btn') {
        eachBoxes('dsg', boxes);
      } else if(type == 'dev-btn') {
        eachBoxes('dev', boxes);
      } else if(type == 'seo-btn') {
        eachBoxes('seo', boxes);
      } else {
        eachBoxes('all', boxes);
      }      
  
    });

    function eachBoxes(type, boxes) {

      // Se o type for 'all', irá exibir todos os projetos. Senão, se o projeto não tiver a classe ('type') que foi passada, o esconda de forma lenta ('slow') 
       
      if(type == 'all') {
        $(boxes).fadeIn();
      } else {
        $(boxes).each(function() {
          if(!$(this).hasClass(type)) {
            $(this).fadeOut('slow');
          } else {
            $(this).fadeIn();
          }
        });
      }
    }
})