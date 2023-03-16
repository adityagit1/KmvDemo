//Onclick Add Class, Remove Class Script
$(".duration-header a").click(function () {
  $(".duration-content").slideToggle('slow');
  $("html").toggleClass('has-duration');
});
$(".profit-header a").click(function () {
  $(".profit-content").slideToggle('slow');
  $("html").toggleClass('has-profit');
});