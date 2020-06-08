<script>
// @ is an alias to /src
import Tetris from '@/games/Tetris.vue';

export default {
  name: 'Console',
  components: {
    Tetris,
  },
  setup() {
    const tetrisKey = 0;

    return { tetrisKey };
  },
  methods: {
    tetrisReset: tetrisReset,
  },
}

function tetrisReset() {
  this.tetrisKey++;
}
</script>

<template>
  <div class="console">
    <Tetris
      :key="tetrisKey"
      @tetris-reset="tetrisReset"
    />
  </div>
</template>
