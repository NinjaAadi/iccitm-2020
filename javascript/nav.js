var toggler = false;
$(document).ready(function() {
  
  $("#button").click(function() {
    var b1 = $("#button-element-1");
    var b2 = $("#button-element-2");
    var b3 = $("#button-element-3");
    $("#nav-elements").slideToggle(100, "swing");

    if (toggler === false) {
      b1.animate({ top: "52px" }, 50);
      b2.css({ display: "none" });
      b3.animate({ top: "52px" }, 50);

      document.getElementById("button-element-1").style.transform = "rotate(45deg)";
      document.getElementById("button-element-3").style.transform = "rotate(-45deg)";
      toggler = true;
    } 
    
    else {
      b1.animate({ top: "40px" }, 50);
      b2.css({ display: "block" });
      b3.animate({ top: "64px" }, 50);

      document.getElementById("button-element-1").style.transform  = "rotate(0deg)";
      document.getElementById("button-element-3").style.transform  = "rotate(0deg)";
      toggler = false;
    }
  });
});
