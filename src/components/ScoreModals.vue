<script>
export default {
	name:'ScoreModals',
	props: {
		score: { type: Number, default: 0 },
		highScore: { type: Number, default: 0 },
	},
	methods: {
		reset: reset,
	},
}

function reset() {
	this.$emit("reset");
}
</script>

<template>
  <div class="scoreModals">
    <!-- High Score Modal -->
    <div
      id="highScoreModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="highScoreodalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-bahai" /> New High Score!
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <i class="fas fa-medal" /> {{ highScore }} <i class="fas fa-medal" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
              @click="reset()"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Score Modal -->
    <div
      id="scoreModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="scoreModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-bahai" /> Final Score
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <i class="fas fa-poo" /> {{ score }} <i class="fas fa-poo" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
              @click="reset()"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>