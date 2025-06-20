$(function() {
    var el = $('.box');

    el.html('<div class="test">Meu elemento!</div>');

    var meuTexto = 'Olá mundo!';

    el.html("<div class=\"teste\">"+meuTexto+"</div>"); //Essa linha em jQuery substitui todo o conteúdo do elemento el por uma nova <div> com a classe teste, apagando o que havia antes.

    el.html(el.html() +'<h1 class="texto">Meu texto via javascript!</h1>');

    console.log(el.html());

    $('.box2').text("<div></div>");
    $('.box2').text($('.box2').text() + "Olá Mundo!");

   console.log(el.text());
    console.log($('.box2').text());

    $('input[type=text]').val("Olá mundo!"); // No input type text manipulamos com o val. 

    $('textarea').text("Olá mundo!");

    $('input[type=button]').click(function(){
       
          var str = $('input[type=text]').val();       
       
          var var2 = v.split("@"); //Split separa nossa string com base no delimitador.
          
          console.log(str.substr(1,4)); // Substr recorta nossa string.

          var splitstr = str.split("@");

          if(splitstr[1] == 'hotmail.com') {
             $('input[type=text]').css('opacity','0');
          } else {
             console.log("A condição não bateu!");
          }
    });
});
