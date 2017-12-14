$(document).ready(function(){
	$('.cupcake').hide();
	$('.dona').hide();
	$('.helado').hide();

})

/** función que hace que despues de que se vea el splash redireccione al index.html */
function load(){
  var url = 'index.html';
  setTimeout(function () {
    $('.dominos').fadeOut(500);
  }, 3000);
  setTimeout(function () {
    $(location).attr('href', 'index.html').fadeIn(500)
  }, 3000);
}

$('#cupcakes').click(function(){
	$('.cupcake').show();
	$('.dona').hide();
	$('.helado').hide();
})


$('#donuts').click(function(){
	$('.dona').show();
	$('.cupcake').hide();
	$('.helado').hide();
})

$('#icream').click(function(){
	$('.helado').show();
	$('.dona').hide();
	$('.cupcake').hide();
})

