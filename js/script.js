// inizializzo il doc
$(function(){
  // aggiungo un event listener al drop-menu per trovare i vari hover
  $('.drop-menu').mouseenter(function(){
    // nel momento in cui lo trova, una funzione anonima cerca nei vari drop-menu il tag che possiede sia la classe "dropdown" che "active", quando la trova la rimuove(active)
    $('.drop-menu').find('.dropdown.active').removeClass('active');
    // utilizzando "(this).find" controllo se nel drop-menu è presente un elemento con classe dropdown e ad esso aggiungo la classe active aprendo il menu a tendina
    $(this).find('.dropdown').addClass('active');
  });
  // aggiungo un altro event listener al drop-menu per identificare i click
  $('.drop-menu').click(function(){
    // nel momento in cui lo trova, una funzione anonima cerca nei vari dropdown i tag che possiedono la medesima classe, e ad esso rimuove la classe active chiudendo il menu a tendina
    $(this).find('.dropdown').removeClass('active');
  });
});