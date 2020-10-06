<template>
  <div id='hobby-card'>
    <h2>{{title}}</h2>
    <h4>{{description}}</h4>
  </div>
</template>

<script>
export default {
  name: 'HobbyCard',
  props: ['title','description']
}
</script>

<style lang="css">
  #hobby-card {
    background-color: #ffc7c7;
    height: 30vh;
    width: 25vw;
    margin: 1em;
    border-radius: 1em;
    display: inline-block;
    padding: 1em;
    
  }
</style>