$(document).ready(function(){

    $("#click").click(function(){
        $("#imagen").hide();

    });

    $("#click2").click(function(){
        $("#imagen").show();
    });

    var habitos=$(".habito");
    habitos.click(function(){
        var texto=$(this).text();
        $("#lista").append(" "+texto);

    });

    $("#click3").click(function(){
        $("#lista").text("Caminar, leer y reir :)");
    });

    $("#fondo").hover(function(){
        $(this).css("background-color", "rgb(253, 127, 148)")},function(){$(this).css("background-color", "white")
            }
    );
});