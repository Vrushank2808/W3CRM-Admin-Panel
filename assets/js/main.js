$(document).ready(function () {

  // Click Function

  $('.list-focus').click(function () {
    $(this).next('.list1').slideToggle();
    $(this).toggleClass('list-click');
    $('.list1').not($(this).next('.list1')).slideup();
    $('.list-click').not($(this)).removeclass('list-click');
  });
  $('.list-focus').click(function () {
    $('.f-right').toggleClass('rotate90');
    $('.rotate90').not($(this)).removeclass('rotate90');
  });
  $('.list').click(function () {
    $('header').toggleClass('ml-40');
    $('aside').toggleClass('w-40');
    $('.page-title').toggleClass('ml-40');
    $('.grid').toggleClass('ml-40');
    $('.copyright').toggleClass('ml-40');
    $('.brand-title').toggleClass('d-none');
    $('.logo-abbr').toggleClass('w-100');
    $('.logo-abbr').toggleClass('pm-0');
    $('.s-title').toggleClass('d-none');
    $('.hvr').toggleClass('d-none');
    $('.list1').toggleClass('d-none');
    $('.list-focus p').toggleClass('d-none');
    $('.right-arr').toggleClass('d-none');
    $('.i-blue').toggleClass('pm-0');
    $('.i-blue').toggleClass('w-100');
    $('.help-desk').toggleClass('d-none');
  });
  $('.profile').click(function () {
    $('.d-profile').toggle(300);
  });

  // Drag And Drop Function

  $("#sortable").sortable();
  document.getElementById("sortable").style.cursor = "all-scroll";
});
