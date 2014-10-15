/*
.on()
Attach an event handler function for one or more events
to the selected elements.

.on( events [, selector ] [, data ], handler )



//Display a paragraph's text in an alert when clicked:
$( "p" ).on( "click", function() {
  alert( $( this ).text() );
});

//Pass data to event handler, which is specified by name:
function myHandler( event ) {
  alert( event.data.foo );
}
$( "p" ).on( "click", { foo: "bar" }, myHandler );
*/


/*
Create 20 different jQuery interactions.
I would like to see the following used at least once.

Use some of (if not all of the following)

.on('click')
.on('keyup')
.on('keydown')
.hover() or .on('mouseenter') & .on('mouseleave')
.scroll()



$('#yourElement').addClass('animated bounceOutLeft');


*/


// $('.a').click(function(){
//
//   $(this).removeClass('content');
//
//   $('.c').addClass('b');
//
// });



  $('.circle').on("click", function(){

    $(this).addClass('animated bounceOutLeft');
    console.log("test");
  });


$('.square').on('keyup', function(){
  $(this).addClass('animated zoomInLeft');
});


$('.at').on('click', function(){
  $(this).addClass('animated swing');
});

$('.triangle').hover(function(){
  $(this).addClass('animated rubberBand');
});

$('.anbox').scroll(function(){
  $('p');
});

$('.double').on('dblclick', function(){
  $(this).addClass('animated flipOutY');
});

$('.transf').on('click', function(){
  $(this).addClass('.transfclick');
});
