 var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas", "TR7K", "brunofin", "comster404", "aces_tv"];
 var client_ID = '?client_id=sn1uh7oufw4g32dix91bgfc5p2wqlc'; // key get on twitch.tv
 var API_state = 'https://api.twitch.tv/kraken/streams/'; //check if stream live or dead

for(var i=0; i<channels.length; i++) { //iterate for every channel

  $.getJSON(API_state + channels[i] + client_ID, function(result){ //checking channel's current state
         //console.log(result);
 var api_data = result._links.channel + client_ID; //api for main data: logo, name

 if(result.stream === null) {  //display all offline streams
          $.getJSON(api_data, function(data) {
            //  console.log(data);
       var logo = "<div class='row well off'> <div class='col-md-4'><img src='" + data.logo+ "'width=50px;></div>";
       var link_name = "<div class='col-md-4'> <h4><a href='"+ data.url+"' target='blank'>" + data.display_name+ "</a></h4></div>";
       var statusOff = "<div class='col-md-4'  id='status'>Offline</div>";
       var blockOffline = logo + link_name + statusOff + "</div>";
       $("#offline").append(blockOffline);
          });
  }
  else {//display all online streams. Another identical bunch of code
     $.getJSON(api_data, function(data) {
            //  console.log(data);
       var logo = "<div class='row well on'> <div class='col-md-4'><img src='" + data.logo+ "'width=50px;></div>";
       var link_name = "<div class='col-md-4'> <h4><a href='"+ data.url+"' target='blank'>" + data.display_name+ "</a></h4></div>";
       var statusOnn = "<div class='col-md-4'>" + data.game +":" + data.status + "</div>";
       var blockOnline = logo + link_name + statusOnn + "</div>";
       $("#online").prepend(blockOnline);
       });
      }
    });
  };

 $("#all").click(function() {
    $("#offline").slideDown("slow");
   $("#online").slideDown("slow");
});

$("#online-but").click(function() {
   $("#online").slideDown("slow");
    $("#offline").slideUp("slow");
});

$("#offline-but").click(function() {
  $("#offline").slideDown(1000);
    $("#online").slideUp(1000);
});
