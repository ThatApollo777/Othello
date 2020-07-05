var turn;
var player1, player2;
var winner = [], basePieces = [];
var x;

function setup() {
    createCanvas(435, 500);
    turn = 0;
    player1 = new Player(0, 0, 0, "Player 1");
    player2 = new Player(0, 0, 255, "Player 2");
    for (loop1 = 25; loop1 <= 410; loop1 += 55) {
        for (loop2 = 25; loop2 <= 410; loop2 += 55) {
            new EmptySpace(loop1, loop2);
        }
    }
    basePieces = [new Piece(190, 190, player1), new Piece(190, 245, player2), new Piece(245, 190, player2), new Piece(245, 245, player1)];
}

function draw() {
    displayAllEmptySpaces();
    displayAllPieces();
    EmptyCheck();
}

function mouseReleased() {
    placePieceAll();
}

function reset() {
    turn = 0;
    revertToOrignal();
    allPieces = basePieces;
}