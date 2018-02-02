$(document).ready(function(){
  console.log("click is ready");
  
  $("#nav-logo").click(function(){
    $("audio")[0].play();
    
  });
  
  
  $(".grid-item").draggable();
  
});