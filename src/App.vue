<template>
  <div id="app">
    <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand">Console</h3>
      <nav class="nav nav-masthead justify-content-center" id="nav">
        <router-link to="/" class="nav-link">Home</router-link> | 
        <router-link to="/about" class="nav-link">About</router-link>
      </nav>
    </div>
  </header>

    <main role="main" class="inner cover">
    <router-view />
    </main>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>

<style lang="scss">
  @import "./scss/_variables.scss";
  @import "./scss/_global.scss";
</style>
