<template>
  <div id="app">
    <div id="nav">
      <div id="nav-left">
        <img id='nav-img' src='../src/assets/brentLaptop.png'/>
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
  padding: 0;
  background-color: #f6f6f6;
  height: 100vh;
  width: 100vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6f6f6f;
  height: 100vh;
  width: 100vw;
}

#nav {
  padding: 30px;
  background-color: #ffe2e2;
  display: flex;
  align-items: center;
  width: 100vw;
}
#nav-right {
  width: 80vw;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}
#nav-left{
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #aaaaaa;
  font-size: 2em;
  margin: 0 .6em;
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
  margin: 0;
}
#nav-img {
  height: 3em;
  border-radius: 50%;
  margin: 0;
}
</style>
