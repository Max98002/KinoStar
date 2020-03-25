$(".tabs-content div").hide();
$(".tabs-content div:first").fadeIn();
$(".tabs .tabs-item:first").attr("id", "current");

document.addEventListener('DOMContentLoaded', () => {
  $(".tabs-item").click(function (e) {
    e.preventDefault();
    $('.tabs-item').removeClass('tabs-active');
    $(this).addClass('tabs-active');
    $(".tabs-content div").hide();
    $(".tabs a").attr("id", "");
    $(this).parent().attr("id", "current");
    $('#' + $(this).attr('title')).fadeIn();
  });
})