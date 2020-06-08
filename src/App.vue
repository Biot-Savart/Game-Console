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
    <nav class="navbar navbar-expand-sm navbar-dark">
      <a class="navbar-brand" href="#">Game Console</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Games
            </a>
            <div class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
              <router-link
                to="/"
              >
                <a class="dropdown-item dropdown-item-dark" href="#">Tetris <span class="sr-only">(current)</span></a>
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
            >
              <a class="nav-link" href="#">About</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

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
