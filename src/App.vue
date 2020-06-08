<script>
  import {version} from '../package.json';

  export default {
    name: 'App',
    setup() {
      const appVersion = version;

      return {appVersion};
    },
  }
</script>

<template>
  <div id="app">
    <header class="masthead mb-auto">
      <div class="inner">
        <h3 class="masthead-brand">
          Console
        </h3>
        <nav
          id="nav"
          class="nav nav-masthead justify-content-center"
        >
          <router-link
            to="/"
            class="nav-link"
          >
            Home
          </router-link> | 
          <router-link
            to="/about"
            class="nav-link"
          >
            About
          </router-link>
        </nav>
      </div>
    </header>

    <main
      role="main"
      class="inner cover"
    >
      <router-view />
      <span class="version">Version {{ appVersion }}</span>
    </main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

</style>

<style lang="scss">
  @import "./scss/_variables.scss";
  @import "./scss/_global.scss";
</style>
