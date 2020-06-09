<script>

    import { ref } from "vue";
    import $ from "jquery";

    import ArrowButtons from '@/components/ArrowButtons.vue';
    import ScoreModals from '@/components/ScoreModals.vue';
    import PouchDB from "pouchdb";

export default {
  name: "Pacman",
  components: {
    ArrowButtons,
    ScoreModals,
  },
  setup() {
	const score = ref(0);
	const width = 28;
	const grid = document.querySelector('.grid');
	const layout = [
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
	1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
	1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
	1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
	1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
	1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
	1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
	1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
	1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
	1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
	1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
	1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
	4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
	1,1,1,1,1,1,0,1,1,4,1,2,2,1,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
	1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
	1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
	1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
	1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
	1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
	1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
	1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
	1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
	1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
	1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
	1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
	1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
	];
	// 0 - pac-dots
	// 1 - wall
	// 2 - ghost-lair
	// 3 - power-pellet
	// 4 - empty

	const squares = [];
	
	//create Characters
	//draw pacman onto the board
	const pacmanCurrentIndex = 490;

	const ghosts = [];
	const pacTimer = null;
	const db = null;
    const highScore = 0;
    const gameover = false;

     return { width,  score, grid, layout, squares, pacmanCurrentIndex, ghosts, pacTimer, highScore, db, gameover};
  },
  mounted() {
	this.grid = document.querySelector(".grid");
	this.scoreDisplay = document.querySelector("#score");
	this.createBoard();
	this.squares[this.pacmanCurrentIndex].classList.add('pac-man');
	const self = this;

	$(document).keyup(e => {
        self.activeKey = e;
        self.movePacman(e);
        clearInterval(self.pacTimer);
		self.pacTimer = setInterval(self.movePacman, 250);
    });

    //all my ghosts
	this.ghosts = [
		new Ghost('blinky', 348, 250),
		new Ghost('pinky', 376, 400),
		new Ghost('inky', 351, 300),
		new Ghost('clyde', 379, 500)
	];

	//draw my ghosts onto the grid
	this.ghosts.forEach(ghost => {
	this.squares[ghost.currentIndex].classList.add(ghost.className);
	this.squares[ghost.currentIndex].classList.add('ghost');
	})

	//move the Ghosts randomly
	this.ghosts.forEach(ghost => this.moveGhost(ghost));

	this.db = new PouchDB("tetris");

    this.db.get("pacman").then(doc => {
        self.highScore = doc.score;
    }).catch(function (err) {
        if (err.status === 404) {
            const highScore = {
                _id: "pacman",
                score: 0,
                timestamp: Date.now(),
            };

            self.db.put(highScore);
        }
        else
            console.log(err);
    });
  },
  methods: {
    createBoard: createBoard,
    movePacman: movePacman,
    pacDotEaten: pacDotEaten,
    powerPelletEaten: powerPelletEaten,
    unScareGhosts: unScareGhosts,
    moveGhost: moveGhost,
    checkForGameOver: checkForGameOver,
    checkForWin: checkForWin,
    reset: reset,
  } 
}

//create your board
  function createBoard() {
    for (let i = 0; i < this.layout.length; i++) {
      const square = document.createElement('div');
      this.grid.appendChild(square);
      this.squares.push(square);

      //add layout to the board
      if(this.layout[i] === 0) {
        this.squares[i].classList.add('pac-dot');
      } else if (this.layout[i] === 1) {
        this.squares[i].classList.add('wall');
      } else if (this.layout[i] === 2) {
        this.squares[i].classList.add('ghost-lair');
      } else if (this.layout[i] === 3) {
        this.squares[i].classList.add('power-pellet');
      }
    }
  }

  //move pacman
  function movePacman(e) {
	if (!e)
		e = this.activeKey;
    this.squares[this.pacmanCurrentIndex].classList.remove('pac-man')
    switch(e.keyCode) {
      case 37:
        if(
          this.pacmanCurrentIndex % this.width !== 0 &&
          !this.squares[this.pacmanCurrentIndex -1].classList.contains('wall') &&
          !this.squares[this.pacmanCurrentIndex -1].classList.contains('ghost-lair')
          )
        this.pacmanCurrentIndex -= 1;
        if (this.squares[this.pacmanCurrentIndex -1] === this.squares[363]) {
          this.pacmanCurrentIndex = 391;
        }
        break
      case 38:
        if(
          this.pacmanCurrentIndex - this.width >= 0 &&
          !this.squares[this.pacmanCurrentIndex - this.width].classList.contains('wall') &&
          !this.squares[this.pacmanCurrentIndex - this.width].classList.contains('ghost-lair')
          ) 
        this.pacmanCurrentIndex -= this.width;
        break
      case 39:
        if(
          this.pacmanCurrentIndex % this.width < this.width - 1 &&
          !this.squares[this.pacmanCurrentIndex +1].classList.contains('wall') &&
          !this.squares[this.pacmanCurrentIndex +1].classList.contains('ghost-lair')
        )
        this.pacmanCurrentIndex += 1;
        if (this.squares[this.pacmanCurrentIndex +1] === this.squares[392]) {
          this.pacmanCurrentIndex = 364;
        }
        break
      case 40:
        if (
          this.pacmanCurrentIndex + this.width < this.width * this.width &&
          !this.squares[this.pacmanCurrentIndex + this.width].classList.contains('wall') &&
          !this.squares[this.pacmanCurrentIndex + this.width].classList.contains('ghost-lair')
        )
        this.pacmanCurrentIndex += this.width;
        break
    }
    this.squares[this.pacmanCurrentIndex].classList.add('pac-man');
    this.pacDotEaten();
    this.powerPelletEaten();
    this.checkForGameOver();
    this.checkForWin();
  }

   // what happens when you eat a pac-dot
  function pacDotEaten() {
    if (this.squares[this.pacmanCurrentIndex].classList.contains('pac-dot')) {
      this.score++
      //this.scoreDisplay.innerHTML = this.score
      this.squares[this.pacmanCurrentIndex].classList.remove('pac-dot')
    }
  }

  //what happens when you eat a power-pellet
  function powerPelletEaten() {
    if (this.squares[this.pacmanCurrentIndex].classList.contains('power-pellet')) {
      this.score +=10
      this.ghosts.forEach(ghost => ghost.isScared = true)
      setTimeout(this.unScareGhosts, 10000)
      this.squares[this.pacmanCurrentIndex].classList.remove('power-pellet')
    }
  }

  //make the ghosts stop flashing
  function unScareGhosts() {
    this.ghosts.forEach(ghost => ghost.isScared = false)
  }

  //create ghosts using Constructors
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.isScared = false
      this.timerId = NaN
    }
  }

  function moveGhost(ghost) {
    const directions =  [-1, +1, this.width, - this.width];
    let direction = directions[Math.floor(Math.random() * directions.length)];
    const self = this;

    ghost.timerId = setInterval(function() {
      //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
      if  (!self.squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !self.squares[ghost.currentIndex + direction].classList.contains('wall') ) {
          //remove the ghosts classes
          self.squares[ghost.currentIndex].classList.remove(ghost.className)
          self.squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
          //move into that space
          ghost.currentIndex += direction
          self.squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      //else find a new random direction ot go in
      } else direction = directions[Math.floor(Math.random() * directions.length)]

      //if the ghost is currently scared
      if (ghost.isScared) {
        self.squares[ghost.currentIndex].classList.add('scared-ghost')
      }

      //if the ghost is currently scared and pacman is on it
      if(ghost.isScared && self.squares[ghost.currentIndex].classList.contains('pac-man')) {
        self.squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        ghost.currentIndex = ghost.startIndex
        self.score +=100
       self.squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      }
    self.checkForGameOver()
    }, ghost.speed)
  }

   //check for a game over
  function checkForGameOver() {
    if (this.squares[this.pacmanCurrentIndex].classList.contains('ghost') &&
      !this.squares[this.pacmanCurrentIndex].classList.contains('scared-ghost')) {
      this.ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', this.movePacman);
      clearInterval(this.pacTimer);

      this.gameover = true;
      const self = this;

		self.db.get("pacman").then(doc => {
		if (self.score > doc.score) {
			self.highScore = self.score;
			$("#highScoreModal").modal("show");
		} else
			$("#scoreModal").modal("show");

		doc.score = self.highScore;
		doc.timestamp = Date.now();

		return self.db.put(doc);
		});
    }
  }

  //check for a win - more is when this score is reached
  function checkForWin() {
    if (this.score === 274) {
      this.ghosts.forEach(ghost => clearInterval(ghost.timerId));
      document.removeEventListener('keyup', this.movePacman);
      //setTimeout(function(){ alert("You have WON!"); }, 500);
      clearInterval(this.pacTimer);

      this.gameover = true;
		const self = this;
		self.db.get("pacman").then(doc => {
		if (self.score > doc.score) {
			self.highScore = self.score;
			$("#highScoreModal").modal("show");
		} else
			$("#scoreModal").modal("show");

		doc.score = self.highScore;
		doc.timestamp = Date.now();

		return self.db.put(doc);
		});
    }
  }

  function reset() {
        this.$emit("pacman-reset");
    }

</script>

<template>
  <div class="pacman">
	<h3 class="score">
		Score: {{score}}
	</h3>
    <div class="container">     
      <div class="grid" />

      <div class="controls">
        <div class="highscore">
          <i class="fas fa-medal" /><br /> High Score: {{ highScore }} <br /><i class="fas fa-medal" />
        </div>
        
        <button
          id="start-button"
          type="button"
          class="btn btn-primary"
        >
          Reset
        </button>

        <ArrowButtons
          @arrow-click="movePacman($event)"
          @down-click="movePacman($event)"
        />
      </div>
    </div>

    <ScoreModals
      :score="score"
      :high-score="highScore"
      @reset="reset"
    />
  </div>
</template>