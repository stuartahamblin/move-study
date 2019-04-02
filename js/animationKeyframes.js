// $('.box').on('click', function(){
//     $(this).toggleClass('is-paused');
// });
$('html').on('click', function(){
    $(this).find('body').append('<div class="box">');
});