<template>
  <div id="app">
    <div id="nav">
      <div id="nav-left">
        <router-link to="/">Home</router-link>
      </div>
      <div id="nav-right">
        <router-link :to="{name:'Social'}">Social</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
    <footer id="footer">
      <h6>Copyright</h6>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #f6f6f6;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aaaaaa;
  height: 100vh;
}

#nav {
  padding: 30px;
  background-color: #ffe2e2;
  display: flex;
  align-items: center;
}
#nav-right {
  width: 80vw;
  display: flex;
  justify-content: flex-end;
}

#nav a {
  font-weight: bold;
  color: #aaaaaa;
  font-size: 2em;
  margin: 0 1em;
   text-decoration: none;
}

#nav a:hover {
  color: #ff8383;
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #ff8383;
  text-decoration: underline;
}

#footer {
  background-color: #ffe2e2;
  height: 4vh;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
}
</style>
