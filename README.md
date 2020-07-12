About the project - 
    
    This project is based on the board game Othello. Written in javascript programming language it primarily uses arrays and loops. It contains 1 library file (p5.min.js) and 4 other javascript files. The game is highly user friendly and can easily be edited by the user. The unedited version can be played at https://addyj2008.github.io/Othello/

About the game & how to play -
    
    1. Othello is a board game played between 2 players on an 8 by 8 board using circular pieces.
    
    2. In the begining 4 circular pieces are placed in a ceckerboard style format at the centre.
    
    3. Each player chooses a colour and takes turn moving.
    4. A player can move on any of the empty squares if moving there gives him/her 1 or more point(s).
    
    5. If there isn't a empty square on which moving is possible for the player the turn gets passed
    
    6. If no player can move or the whole board is filled then the game ends.
   
    7. Scoring - After a piece is placed if a straight line can be drawn to another piece of the same colour and the line has no empty spots and only contains pieces of a diffferent colour then those pieces tusn to the colour of the placed piece(Lines can be drawn horizontally, vertically and diagonally).
    
    8. Ending the game - When no player can move or the whole board is filled with pieces then the game ends.
    
    9. Winner - The winner is the person with the most pieces to his name.

How to edit the game - 

    To edit the game first you need a copy of the game a zip of which can be downloaded from its github link (https://github.com/Addyj2008/Othello). After editing the edited version can be played by the using a local web server (200 OK) or simply opening the index.html. The link generated is local meaning it can't be shared. To edit the game the sketch.js file needs to be opened in a code editor (VS code studio). Remember to save changes after editing!
    
    (i). Size of the board - Find function setup() in the sketch.js file and in the first to lines of function setup() you'll find boardX = 8; and boardY = 8; Change the 8 to any number of your choice and the size of the board will change.
    
    (ii). Player colour and name - Once again in function setup(), in the lines after the boardX and boardY you'll find the player data. It can be edited in the following way - player1/player2 = new Player(<Player colour r value (Hex colours(RGB))>, <Player colour b value (Hex colours(RGB))>, <Player colour g value (Hex colours(RGB))>, "<Player name>");
    
    (iii). Orignal pieces - To edit how the game starts go to the line after the players are defined in function setup() and change the line to - basePieces = [<Piece 1>, <Piece 2>, <Piece 3>, <Piece 4>, <Piece 5> ....]; A piece can be defined as - new Piece(<Piece X (Horizontal Position in Board)>, <Piece Y (Vertical Position in Board)>, <Player whose colour piece orignally is(Write the variable name(player1) not player name(Player 1))>)
    
    (iv). Numbers af players can be edited by deleting the line where the player is defined or adding a line containg definition of new player. The second line of the sketch.js file also needs to be edited respectively - let player1, player2, player3, player4....;