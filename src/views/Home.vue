<script>
// @ is an alias to /src
import Tetris from '@/games/Tetris.vue';

export default {
  name: 'Console',
  components: {
    Tetris,
  }
}
</script>

<template>
  <div class="console">
    <Tetris />
  </div>
</template>
