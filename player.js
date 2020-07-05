var allPlayers = [], loop1, loop2, loop3, loop4, condition1;

class Player {
    constructor(r, g, b, name) {
        this.name = name;
        this.colour = new Colour(r, g, b);
        this.turn = allPlayers.length;
        this.turnText = function(x, y) {
            if (turn % turn.length === this.turn) {
                push();
                strokeWeight(0);
                fill(this.colour.r, this.colour.g, this.colour.b);
                text("Turn of : " + this.name, x, y);
                pop();
            }
        }
        this.score = 0;
        this.getScore = function() {
            this.score = 0;
            for(loop1 = 0; loop1 < allPieces.length; loop1++) {
                if (allPieces[loop1].colour.r === this.colour.r && allPieces[loop1].colour.g === this.colour.g && allPieces[loop1].colour.b === this.colour.b) {
                    this.score++;
                }
            }
            return this.score;
        }
        this.printScore = function(x, y) {
            push();
            strokeWeight(0);
            fill(this.colour.r, this.colour.g, this.colour.b);
            text("Score of" + this.name + " = " + this.getScore, x, y);
            pop();
        }
        allPlayers.push(this);
    }
}

function turnTextAll(x, y) {
    for(loop1 = 0; loop1 < allPlayers.length; loop1++) {
        allPlayers[loop1].turnText(x, y);
    }
}