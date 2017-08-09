// Create a select option and texts for entering players name
var select = document.getElementById("select");
var texts = document.getElementById("texts");
var playersName = [];
select.onchange = function() {
  var val = select.options[select.selectedIndex].value;
  text.innerHTML = "";
  for (var i = 0; i < val; i++) {
    texts.innerHTML += '<div class="form-group"><label class=col-sm-4 control-label">Player ' + i + ':</label><div class="col-sm-6"><input type="text" class="form-control" name="playerName" "id=t + i +"/></div></div>'
  }
  $(document).on('keyup', '#t' + val, function() {
    document.getElementById("buttonArea").innerHTML = '<button class="btn btn-primary" id="shufflebutton">shuffle</button>'
  });
  $(document).on("click", "#shufflebutton", function(e) {
    e.preventDefault();
    for (var i = 0; i < val; i++) {
      var n = document.getElementById('t' + i).value;
      playersName.push(n);
    }
    changescreen();
    t = new Table();
    t.joiningPlayer();
    t.distributeCard();
  });
  $(document).ready(function() {
    $("#screen-2").hide();
  });
}

function changescreen() {
  $("#screen-1").hide();
  $("#screen-2").show();
}
