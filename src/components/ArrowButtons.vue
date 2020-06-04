<script>
export default {
	name:'ArrowButtons',
	methods: {
		btnClick: btnClick,
		downClick: downClick,
	},
}

function btnClick(button) {
	const event = {keyCode: Number(button)};
	this.$emit("arrow-click", event);
}

function downClick(button) {
	const event = {keyCode: Number(button)};
	this.$emit("down-click", event);
}
</script>

<template>
  <div class="arrowButtons">
    <button
      id="up"
      type="button"
      class="btn btn-warning"
      @click="btnClick('38')"
    >
      <i class="fas fa-arrow-alt-circle-up" />
    </button>
    <div>
      <button
        id="left"
        type="button"
        class="btn btn-warning"
        @click="btnClick('37')"
      >
        <i class="fas fa-arrow-alt-circle-left" />
      </button>
      <button
        id="right"
        type="button"
        class="btn btn-warning"
        @click="btnClick('39')"
      >
        <i class="fas fa-arrow-alt-circle-right" />
      </button>
    </div>
    <button
      id="down"
      type="button"
      class="btn btn-warning"
      @click="downClick('40')"
    >
      <i class="fas fa-arrow-alt-circle-down" />
    </button>
  </div>
</template>
