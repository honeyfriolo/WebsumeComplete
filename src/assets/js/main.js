"use strict";

$(document).ready(function () {
  $("#navbar a").click(function (event) {
    event.preventDefault(); //same as return false

    $("#navbar a").removeClass("active");
    $(this).toggleClass("active");
  });
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  }); // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 500, "linear");
  });
});