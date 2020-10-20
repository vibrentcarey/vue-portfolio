<template>
  <div id="albert">
    <h1>Albert Collage</h1>
    <transition name="fade" appear>
      <div id="albert-box">
        <div class="albert-pics" v-for="image in images" :key="image">
          <img :src="require(`../assets/${image}.jpeg`)" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Albert",
  data() {
    return {
      images: ["albert-sleep", "albert-laying", "albert-couch"]
    };
  }
};
</script>

<style lang="css" scoped>
#albert-box {
  display: flex;
  flex-wrap: wrap;
}
.albert-pics {
  background-color: #fee2e2;
  margin: 1em;
  border-radius: 0.2em;
}

img {
  margin: 1em;
  border-radius: 0.2em;
}

.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 5s;
}
</style>