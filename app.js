var o_image = "https://www.dlf.pt/dfpng/middlepng/499-4993682_letter-o-with-sunflower-hd-png-download.png";
var x_image = "images/cross.jpg";
var x_gif = "images/cross.gif";
var x_idel = "images/player1_idel.gif";
var x_win = "images/player1_win.gif";
var x_lose = "images/player1_lose.gif";
var player_id = 1;
var player = document.getElementById("player");
var played = [0,0,0,0,0,0,0,0,0];
var total = 0;
var game_over = false;
var isWin = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var clicked = function(btn){
    if(played[btn.id-1]==0 && !game_over){
        total++;
        played[btn.id-1] = player_id;
        if(player_id==1){
            btn.style.backgroundImage = "url("+x_idel+")";
            player.innerHTML = "Player 2 turn";
        }
        else{
            btn.style.backgroundImage = "url("+o_image+")";
            player.innerHTML = "Player 1 turn";
        }
        isWin.forEach((arr)=>{
            var win = true;
            arr.forEach((data)=>{
                if(played[data-1]!=player_id){
                    win = false;
                }
            });
            if(win){
                game_over = true;
                arr.forEach((data)=>{
                    var btn = document.getElementById(data);
                    if(player_id==1){
                        btn.style.backgroundImage = "url("+x_win+")";
                    }
                });
                if(player_id==2){
                    for(var i=1 ; i<10 ; i++){
                        if(played[i-1]==1){
                            var btn = document.getElementById(i);
                            btn.style.backgroundImage = "url("+x_lose+")";
                        }
                    }
                }
            }
        });
        if(game_over){
            if(player_id==1){
                player.innerHTML = "Congratulations! Player1 wins";
            }
            else{
                player.innerHTML = "Congratulations! Player2 wins";
            }
        }
        else if(total==9){
            player.innerHTML = "Game Draw";
            game_over = true;
        }
        player_id = player_id%2 + 1;
    }

}