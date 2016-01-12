$(document).ready(function () {
  $("#bark").click(function () {
    $("ul#bark-return").prepend("<li>WOOF!</li>");
    $("ul#bark-return").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("#meow").click(function () {
    $("ul#meow-return").prepend("<li>MEOW!</li>");
    $("ul#meow-return").children("li").click(function() {
      $(this).remove();
    });
  });
});
