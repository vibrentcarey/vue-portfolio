<template>
  <div id='hobby-card'>
    <h2>{{title}}</h2>
      <img :src="require(`../assets/${imgSrc}`)"/>
    <h4>{{description}}</h4>
    <router-link tag="h3" :to='route'>Click For More</router-link>
  </div>
</template>

<script>
export default {
  name: 'HobbyCard',
  props: ['title','description','imgSrc', 'route']
}
</script>

<style lang="css">
  #hobby-card {
    background-color: #ffc7c7;
    height: auto;
    width: auto;
    margin: 1em;
    border-radius: 1em;
    display: inline-block;
    padding: 1em;
  }
  img{
    height: 20vh;
  }
  h3{
    color: #FF8382
  }
  h3:hover{
    color: red;
    cursor: pointer;
  }
</style>