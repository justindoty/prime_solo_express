var clickCount = 0;
$(document).ready(function(){

  $('button').on("click",function() {
     event.preventDefault();
          $(".displayNumberDiv").empty();
         $.get('/balance')
         .then(function(response){
           var bal = response.accountBal;
           var num = response.ranNum;
           console.log(bal);
           console.log(num);
           $(".displayNumberDiv").append('<h1>' + bal + '</h1>');
           $(".displayNumberDiv").append('<h2>' + num + '</h1>');
           $(".displayNumberDiv").find('h1').hide();
           $(".displayNumberDiv").find('h1').slideDown('slow').css({fontsize: '50px'});
           $(".displayNumberDiv").find('h2').hide();
           $(".displayNumberDiv").find('h2').show('slow').css({color: 'red'});
       }).fail(function(response){
          console.log('There was an error!', response);
        })


  });


});
