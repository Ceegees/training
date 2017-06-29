var suites = ["S","C","H","D"];
var values = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
var deck = [];

for(var i=0;i<suites.length;i++)
{
	for (var j=0;j<values.length;j++){
	
		deck[values.length*i+j] = deck.push(new card(values[j],suites[i]));

	}
}

function card(values,suites)
{
	this.values = values;
	this.suites = suites;
	//document.write(suites +''+ values +"<br/>");
  console.log(suites +''+ values +"\n");
}