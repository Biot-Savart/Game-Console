<script>

    import { ref } from "vue";
    import $ from "jquery";

    import ArrowButtons from '@/components/ArrowButtons.vue';

export default {
  name: "Tetris",
  components: {
    ArrowButtons,
  },
  setup() {
    const grid = document.querySelector(".grid");
    let squares = Array.from(document.querySelectorAll(".grid div"));
    const scoreDisplay = document.querySelector("#score");
    const startBtn = ref($("#start-button"));
    const width = 10;
    let nextRandom = 0;
    let timerId = null;
    let score = 0;
    const colours = [
        "blue",
        "orange",
        "purple",
        "green",
        "red",
        "aqua",
        "yellow"
    ];
    const activeKey = null;

    //The Tetrominos
    const lTetromino = [
        [0, width, width*2, width*2+1],
        [0, 1, 2, width],
        [0, 1, width+1, width*2+1],
        [2, width, width+1, width+2]
    ];

    const reverseZTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
    ];

    const tTetromino = [
        [1,width,width+1,width+2],
        [0,width,width+1,width*2],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ];

    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ];

    const iTetromino = [
        [0,width,width*2,width*3],
        [width,width+1,width+2,width+3],
        [0,width,width*2,width*3],
        [width,width+1,width+2,width+3]
    ];

    const reverseLTetromino = [
        [1, width+1, width*2+1, width*2],
        [0, width, width+1, width+2],
        [0, width, width*2, 1],
        [0, 1, 2, width+2]
    ];


    const zTetromino = [
        [0, 1, width+1, width+2],
        [1, width, width+1, width*2],
        [0, 1, width+1, width+2],
        [1, width, width+1, width*2]
    ];

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino, reverseLTetromino,reverseZTetromino];

    let currentPosition = 4;
    let currentRotation = 0;

    //randomly select a tetromino and its first rotation
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];

    //show up-next Tetromino in mini-grid display
    const displaySquares = document.querySelectorAll(".mini-grid div");
    const displayWidth = 4;
    const displayIndex = 0;

    //the Tetrominos without rotations
    const upNextTetrominoes = [
        [1, displayWidth+1, displayWidth*2+1, displayWidth*2+2], //lTetromino
        [0, 1, displayWidth+1, displayWidth+2], //zTetromino
        [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
        [0, 1, displayWidth, displayWidth+1], //oTetromino
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1], //iTetromino
        [displayWidth-2, displayWidth*2-2, displayWidth*3-2, displayWidth*3 -3], // reverseLTetromino
        [0,displayWidth,displayWidth+1,displayWidth*2+1]    //reverseZTetromino
    ];

     return { grid, squares, scoreDisplay, startBtn, nextRandom, timerId, score, colours, lTetromino, zTetromino, tTetromino, oTetromino, iTetromino, theTetrominoes, currentPosition, currentRotation, random, current, displaySquares, displayWidth, displayIndex, upNextTetrominoes, width, activeKey };
  },
  mounted() {
     const self = this;
    $(document).keydown(this.control);

    $(document).keyup(e => {
        self.activeKey = e;
        clearInterval(self.timerId);
       self.timerId = setInterval(self.moveDown, 1000);
    });
     //$(document).keyup(this.control);
    this.grid = document.querySelector(".grid");
     this.squares = Array.from(document.querySelectorAll(".grid div"));
     this.displaySquares = document.querySelectorAll(".mini-grid div");
     this.scoreDisplay = document.querySelector("#score");

    //add functionality to the button   
    $("#start-button").on("click", () => {
        if (self.timerId) {
            clearInterval(self.timerId);
            self.timerId = null;
        } else {
            self.draw();
            self.timerId = setInterval(self.moveDown, 1000);
            self.nextRandom = Math.floor(Math.random() * self.theTetrominoes.length);
            self.displayShape();
        }
    });

  },
  methods: {
    draw: draw,
    undraw: undraw,
    control: control,
    moveDown: moveDown,
    freeze: freeze,
    moveLeft: moveLeft,
    moveRight: moveRight,
    rotate: rotate,
    displayShape: displayShape,
    addScore: addScore,
    gameOver: gameOver
  } 
}

//draw the Tetromino
    function draw() {
        const self = this;
        this.current.forEach(index => {
            self.squares[self.currentPosition + index].classList.add("tetromino");
            self.squares[self.currentPosition + index].style.backgroundColor = self.colours[self.random];
        });
    }

    //draw the Tetromino
    function undraw() {
        const self = this;
        this.current.forEach(index => {
            self.squares[self.currentPosition + index].classList.remove("tetromino");
            self.squares[self.currentPosition + index].style.backgroundColor = "";
        });
    }

    //assign functions to keyCodes
    function control(e) {
        if (e.keyCode === 37)
            this.moveLeft();
        else if (e.keyCode === 38)
            this.rotate();
        else if (e.keyCode === 39)
            this.moveRight();
        else if (e.keyCode === 40) {
            if (e.click === false) {
                clearInterval(this.timerId);
                this.timerId = setInterval(this.moveDown, 100);
            }            
            this.moveDown();
        }
    }

    //move down function
    function moveDown() {
        //debugger;
        this.undraw();
        this.currentPosition += this.width;
        this.draw();
        this.freeze();
    }

    function freeze() {
        if(this.current.some(index => this.squares[this.currentPosition + index + this.width].classList.contains("taken"))) {
            this.current.forEach(index => this.squares[this.currentPosition + index].classList.add("taken"));
            //start a new Tetromino falling
            this.random = this.nextRandom;
            this.nextRandom = Math.floor(Math.random() * this.theTetrominoes.length);
            this.current = this.theTetrominoes[this.random][this.currentRotation];
            this.currentPosition = 4;
            this.draw();
            this.displayShape();
            this.addScore();
            this.gameOver();
        }
    }

    //move the Tetromino left, unless it is at the edge or there is a blockage
    function moveLeft() {
        this.undraw();
        const isAtLeftEdge = this.current.some(index => (this.currentPosition + index) % this.width === 0);

        if (!isAtLeftEdge)
            this.currentPosition -= 1;

        if (this.current.some(index => this.squares[this.currentPosition + index].classList.contains("taken")))
            this.currentPosition += 1;

        this.draw();
    }

    //move the Tetromino right, unless it is at the edge or there is a blockage
    function moveRight() {
        this.undraw();
        const isAtRightEdge = this.current.some(index => (this.currentPosition + index) % this.width === this.width - 1);

        if (!isAtRightEdge)
            this.currentPosition += 1;

        if (this.current.some(index => this.squares[this.currentPosition + index].classList.contains("taken")))
            this.currentPosition -= 1;

        this.draw();
    }

    //rotate the Tetromino
    function rotate() {
        this.undraw();
        this.currentRotation++;

        if(this.currentRotation === this.current.length)
            this.currentRotation = 0;

        this.current = this.theTetrominoes[this.random][this.currentRotation];

        const isAtLeftEdge = this.current.some(index => (this.currentPosition + index) % this.width === 0);

        if (isAtLeftEdge)
            this.currentRotation -= 1;

        if (this.currentRotation === -1)
            this.currentRotation = 0;

        this.current = this.theTetrominoes[this.random][this.currentRotation];
        this.draw();
    }

    //display the shape in the mini-grid display
    function displayShape() {
        //remove tetromino from mini-grid
        this.displaySquares.forEach(square => {
            square.classList.remove("tetromino");
            square.style.backgroundColor = "";
        });

        const self = this;

        this.upNextTetrominoes[this.nextRandom].forEach(index => {
            self.displaySquares[self.displayIndex + index].classList.add("tetromino");
            self.displaySquares[self.displayIndex + index].style.backgroundColor = self.colours[self.nextRandom];
        });
    }

    //add score
    function addScore() {
        for (let i = 0; i < 199; i += this.width) {
            const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];

             const self = this;
            if (row.every(index => self.squares[index].classList.contains("taken"))) {
                this.score += 10;
                this.scoreDisplay.innerHTML = this.score;
               
                row.forEach(index => {
                    self.squares[index].classList.remove("taken");
                    self.squares[index].classList.remove("tetromino");
                    self.squares[index].style.backgroundColor = "";
                });
                const squaresRemoved = this.squares.splice(i, this.width);
                this.squares = squaresRemoved.concat(this.squares);
                this.squares.forEach(cell => self.grid.appendChild(cell));
            }
        }
    }

    //game over
    function gameOver() {
        const self = this;
        if (this.current.some(index => self.squares[self.currentPosition + index].classList.contains("taken"))) {
            this.scoreDisplay.innerHTML = this.score + " - end";
            clearInterval(this.timerId);
        }
    }
</script>

<template>
  <div class="tetris">    
    <div class="container">
        <h3 class="score">Score: <span id="score" /></h3>
      <div class="grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div class="taken hide" />
        <div class="taken hide" />
        <div class="taken hide" />
        <div class="taken hide" />
        <div class="taken hide" />
        <div class="taken hide" />
        <div class="taken hide" />
        <div class="taken hide" />
        <div class="taken hide" />
        <div class="taken hide" />
      </div>

    <div class="controls">
        <div class="mini-grid">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>

        
    <button
      id="start-button"
      type="button"
      class="btn btn-primary"
    >
      Start/Pause
    </button>
    <ArrowButtons v-on:arrow-click="control($event)" />
    </div>

    </div>
  </div>
</template>