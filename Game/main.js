


//Initialization
var game = {};
game.cookies = 0;
game.numCursors = 0;


function round(num){
    return Math.floor(num*1000)/1000
}



game.bigCookieClick = function() {
    game.cookies++;
}

game.buyCursor = function() {
    cursorCost = ((game.numCursors**2 * 10) + 10)
    console.log(cursorCost)
    if(game.cookies >= cursorCost){
        game.cookies = game.cookies - cursorCost
        game.numCursors++;
    }
}

game.cursorTick = function(){
    game.cookies += game.numCursors * 0.1
}


game.updateData = function(){
    document.getElementById('cookies').innerHTML = round(game.cookies) + " Cookies"
    document.getElementById('cursorData').innerHTML = "Cursors: " + game.numCursors + " generating " + round(game.numCursors * 0.1) + " cps<br>Costs: " +  round(((game.numCursors**2 * 10) + 10))
}




//Update Cycles
game.update = function(){
    game.updateData()
}

game.fixedUpdate = function()
{
    game.cursorTick()
    game.updateData()
    //console.log('Loop')
}






// Essentially main():
window.onload=function()
{
    console.log('Hi')
    game.updateData()
}

window.setInterval(function(){
    game.fixedUpdate()
}, 1000)

window.setInterval(function(){
    game.update()
}, (1000/30))