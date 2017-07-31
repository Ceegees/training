var select = document.getElementById("select");
var texts = document.getElementById("texts");
var playerName = [];
select.onchange = function() {
        var val = select.options[select.selectedIndex].value;
        texts.innerHTML = "";
        for (var i = 1; i <= val; i++) {
            texts.innerHTML += '<div class="form-group"><label class="col-sm-4 control-label">Player ' + [i] + ':</label><div class="col-sm-6"><input type="text" class="form-control" name="playerName[]" id="t_' + i +
                '" value="" /></div></div>';
        }

        $(document).on('keyup', '#t_' + val, function() {

            document.getElementById("buttonArea").innerHTML = '<button class="btn btn-primary" id="shuffleButton">Shuffle</button>';

        });

        $(document).on("click", "#shuffleButton", function(e) {
            e.preventDefault();
            $.each($('[id^=t_]'), function(i, item) {
                var name = $(this).val();
                playerName.push(name);
                $(this).val('');
            });
            screenChanger();
            Table();

        });

       
    }
    
    
    // console.log(playerName);

$(document).ready(function() {
    $("#screen-2").hide();
});

function screenChanger() {
    $("#screen-1").hide();
    $("#screen-2").show();

}
