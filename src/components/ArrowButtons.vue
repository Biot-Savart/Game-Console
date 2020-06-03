<script>
export default {
	name:'ArrowButtons',
	methods: {
		btnClick: btnClick,
	},
}

function btnClick(button) {
	const event = {keyCode: Number(button), click: true};
	this.$emit("arrow-click", event);
}
</script>

<template>
  <div class="arrowButtons">
    <button id="up" type="button" class="btn btn-warning" @click="btnClick('38')"><i class="fas fa-arrow-alt-circle-up"></i>
    </button>
    <div>
		<button id="left" type="button" class="btn btn-warning" @click="btnClick('37')"><i class="fas fa-arrow-alt-circle-left"></i></button>
		<button id="right" type="button" class="btn btn-warning" @click="btnClick('39')"><i class="fas fa-arrow-alt-circle-right"></i></button>
    </div>
    <button id="down" type="button" class="btn btn-warning" @click="btnClick('40')"><i class="fas fa-arrow-alt-circle-down"></i></button>
  </div>
</template>
