// enable ”active" state for touch devices

document.addEventListener("touchstart", function(){}, true);

// if the button has the fncn class, it can have the selected state, regular cta's cannot.

$('.btn').click(function(){
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    $(this).addClass('selected');
  }
});