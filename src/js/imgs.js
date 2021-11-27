

// var img_path1 = "../imgs/ALL/overworld/player_37/PlayerMoveEvent.png"

var paths = []
NUM_PLAYERS = 48
NUM_DAYS = 29

MAX_DAY = NUM_DAYS-1;
MIN_DAY = 0;


function clicked(){
    createImage();
}

PLAYER_TO_CHECK = 21;

var player_box = document.getElementById("players");
var ul = document.createElement("ul");
ul.id = "playerList";

//create player checkboxes
for(var i = 0; i < NUM_PLAYERS; i++){

    var li = document.createElement("li");
    var box = document.createElement("input");

    if(i == PLAYER_TO_CHECK){
        box.checked = true;
    }

    box.classList.add("checkbox");
    box.type = "checkbox";
    box.id = "checkbox";
    box.value = "player_" + i;
    box.onclick = clicked;
    
    li.innerHTML = "Player " + i + "    \t   ";
    li.appendChild(box);
    ul.appendChild(li);
}

player_box.appendChild(ul);

function createImage(){
    paths = [] 

    var world_folder = document.getElementById("WorldSelect").value;
    var event_file = document.getElementById("EventSelect").value;

    var charts = document.getElementsByClassName("chart");

    while(charts[0]){
        charts[0].parentNode.removeChild(charts[0]);
    }

    var boxes = document.getElementsByClassName("checkbox")

    if(MAX_DAY == NUM_DAYS-1 && MIN_DAY == 0){
        var day_folder = "ALL";
        
        for(var i = 0; i < NUM_PLAYERS; i++){
            if(boxes[i].checked == true){
                var path_to_push = "../imgs/"+day_folder+"/"+world_folder+"/"+"player_"+i+"/"+event_file+".png";
                if(exists(path_to_push)){
                    paths.push(path_to_push);
                }
            }
        }
    }
    else{
        for(var i = MIN_DAY; i <= MAX_DAY; i++){
            console.log(MIN_DAY);
            console.log(MAX_DAY);
            var day_folder = "day_"+i;
            for(var j = 0; j < NUM_PLAYERS; j++){
                if(boxes[j].checked == true){
                    var path_to_push = "../imgs/"+day_folder+"/"+world_folder+"/"+"player_"+j+"/"+event_file+".png";
                    console.log(path_to_push);
                    if(exists(path_to_push)){
                        paths.push(path_to_push);
                    }
                }
            }
        }
    }
    
    for(var i = 0; i < paths.length; i++){
        var img = document.createElement("img");
        img.classList.add("chart");
        img.id = "chart";
        img.src = paths[i];
        var container = document.getElementById("container");
        container.appendChild(img);
    }

    
}

function exists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();

    return http.status != 404;
}



$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: NUM_DAYS-1,
      values: [ MIN_DAY, MAX_DAY],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ]);
        MIN_DAY = ui.values[0];
        MAX_DAY = ui.values[1];
        createImage();
      }
    });
    $( "#amount" ).val(+ $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
});

createImage();