import Table from './Table.js';

let texts = document.getElementById("texts");
let select = document.getElementById("select");
let playerName = [];


select.onchange = function() {
  let v = select.options[select.selectedIndex].value;
  texts.innerHTML = "";
  for (let i = 1; i <= v; i++) {
    texts.innerHTML += '<div class="form-group"><label class="col-sm-4 control-label">Player' + i + '</label><div class="col-md-6"><input type="text" class="form-control" name="playerName" id="t' + i + '"</div></div>';
  }


  $(document).on('keyup', '#t' + v, function() {
    document.getElementById("shufffleButton").innerHTML = '<button type="button" class="btn btn-primary" id="shuffleButton">shuffle</button>';
  });



  $(document).on('click', '#shuffleButton', function(e) {
    e.preventDefault();
    for (let i = 1; i <= v; i++) {
      let name = document.getElementById("t" + i).value;
      playerName.push(name);
    }
    screenChange();
    let t = new Table();
    t.joinPlayers();
  });
}

$(document).ready(function() {
  $("screen-2").hide();
});

function screenChange() {
  $("screen-1").hide();
  $("screen-2").show();
}

export default playerName;
