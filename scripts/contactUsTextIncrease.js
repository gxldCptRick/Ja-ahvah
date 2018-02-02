$(document).ready(function(){
    
    $(".enlarge").click(increaseFontSize);
    
    function increaseFontSize(){
        $(this).toggleClass("increase");
        console.log($(this));
    }
    
    
});