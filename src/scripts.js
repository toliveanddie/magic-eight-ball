//shake the ball

var responses = 
["It is certain", 
"it is decidedly so", 
"without a doubt", 
"Yes, definitely", 
"you may rely on it", 
"As I see it, yes", 
"most likely", 
"outlook good", 
"Yes", 
"Signs point to yes", 
"Replay Hazy, try again", 
"Ask again later", 
"Better not tell you now", 
"Cannot predict now", 
"Concentrate and ask again", 
"Don't count on it", 
"My repy is no", 
"My sources say no", 
"Outlook not so good", 
"Very doubtful"]

$("#shake").click(function() {
  var rando = Math.floor(Math.random() * 20 );
  $("#response").css("display", "none");
  $("#response").slideDown( 3000 ).html(responses[rando]);
});