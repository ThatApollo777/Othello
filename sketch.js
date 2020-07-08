let turn, boardX, boardY, gameState;
let player1, player2;
let winners = [], basePieces = [];

function setup() {
    boardX = 8;
    boardY = 8;
    player1 = new Player(0, 0, 0, "Player 1");
    player2 = new Player(0, 0, 255, "Player 2");
    basePieces = [new Piece(190, 190, player1), new Piece(190, 245, player2), new Piece(245, 190, player2), new Piece(245, 245, player1)];
    createCanvas(boardX * 55 - 5, boardY * 55 + 25 + allPlayers.length * 15);
    turn = 0;
    for (loop1 = 1; loop1 <= boardX; loop1 += 1) {
        for (loop2 = 1; loop2 <= boardY; loop2 += 1) {
            new EmptySpace(25 + loop1 * 55 - 55, 25 + loop2 * 55 - 55);
        }
    }
    gameState = "PLAY";
    strokeWeight(0);
}

function draw() {
    background(255, 255, 255);
    displayAllEmptySpaces();
    displayAllPieces();
    EmptyCheck();
    if (gameState === "PLAY") {
        if (!turnPossible()) {
            turn += 1;
        }
        turnTextAll(0, 0 + boardY * 55 + 10);
        for (loop1 = 0; loop1 < allPlayers.length; loop1 += 1) {
            allPlayers[loop1].printScore(0,  boardY * 55 + 25 + loop1 * 15);
        }
        if (allEmptySpaces.length === allPieces.length) {
            gameState = "END";
            winners.push(allPlayers[0]);
            for (loop1 = 1; loop1 < allPlayers.length; loop1 += 1) {
                if (allPlayers[loop1].getScore() === winners[0].getScore()) {
                    winners.push(allPlayers[loop1]);
                } else if (allPlayers[loop1].getScore() > winners[0].getScore()) {
                    winners = [allPlayers[loop1]];
                }
            }
        }
    } else if (gameState === "END") {
        fill(80, 80, 80);
        text("Press R to restart", 0, boardY * 55 + 10);
        if (winners.length === 1) {
            fill(winners[0].colour.r, winners[0].colour.g, winners[0].colour.b);
            text("The WINNER is : " + winners[0].name, 0, boardY * 55 + 25);
        } else {
            fill(80, 80, 80);
            text("TIE between :", 0, boardY * 55 + 25);
            for (loop1 = 0; loop1 < allPlayers.length; loop1 += 1) {
                fill(winners[loop1].colour.r, winners[loop1].colour.g, winners[loop1].colour.b);
                text((loop1 + 1) + ". " + winners[loop1].name, 0, boardY * 55 + 40 + loop1 * 15);
            }
        }
        if (keyCode === 114) {
            gameState = "PLAY";
            reset();
        }
    }
}

function mouseReleased() {
    if (gameState === "PLAY") {
        placePieceAll();
    }
}

function reset() {
    turn = 0;
    revertToOrignal();
    allPieces = basePieces;
    winners = [];
}