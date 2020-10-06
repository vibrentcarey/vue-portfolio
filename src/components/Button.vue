<template>
  <div id='button-box'>
    <span @click="$emit(onClick)" :type="type" :style="{backgroundColor:color}">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['title','color','type', 'onClick']
}
</script>

<style lang="css" scoped>
 span {
  border: none;
  padding: 1em;
  font-size: 1em;
  width: 50%;
  margin: 1em;
  border-radius: .2em;
  display: inline-block;
  text-align: center;
}

 span:hover {
  cursor: pointer;
  background-color: #ff3f3f !important;
}
</style>