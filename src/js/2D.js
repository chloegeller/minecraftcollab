$(function(){
    $("#Event_2DPoints").load("./plots/2d/overworld/PlayerMoveEvent.html");
  });

function onChange(selection){

    var worldSelector = document.getElementById("WorldSelect");
    var eventSelector = document.getElementById("EventSelect");

    var plotID = worldSelector.value + eventSelector.value;
    var titleID = worldSelector.value + "_title";
    console.log(plotID)

    var maps = document.getElementsByClassName("map");
    var titles = document.getElementsByClassName("worldTitle");

    $("#Event_2DPoints").load("plots/2d/"+ worldSelector.value + "/" + eventSelector.value + ".html");
}