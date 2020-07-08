let allPlayers = [], loop1, loop2, loop3, loop4, condition1;

class Player {
    constructor(r, g, b, name) {
        this.name = name;
        this.colour = new Colour(r, g, b);
        this.turn = allPlayers.length;
        this.turnText = function(x, y) {
            if (turn % allPlayers.length === this.turn) {
                fill(this.colour.r, this.colour.g, this.colour.b);
                text("Turn of : " + this.name, x, y);
            }
        }
        this.score = 0;
        this.getScore = function() {
            this.score = 0;
            for(loop2 = 0; loop2 < allPieces.length; loop2++) {
                if (allPieces[loop2].colour.r === this.colour.r && allPieces[loop2].colour.g === this.colour.g && allPieces[loop2].colour.b === this.colour.b) {
                    this.score++;
                }
            }
            return this.score;
        }
        this.printScore = function(x, y) {
            strokeWeight(0);
            fill(this.colour.r, this.colour.g, this.colour.b);
            text("Score of " + this.name + " = " + this.getScore(), x, y);
        }
        allPlayers.push(this);
    }
}

function turnTextAll(x, y) {
    for(loop1 = 0; loop1 < allPlayers.length; loop1++) {
        allPlayers[loop1].turnText(x, y);
    }
}