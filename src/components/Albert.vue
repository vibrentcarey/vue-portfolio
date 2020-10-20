<template>
  <div id="albert">
    <h1>Albert Collage</h1>
    <div id="albert-box">
      <div class="albert-pics" v-for="image in images" :key="image">
        <img :src="require(`../assets/${image}.jpeg`)" />
      </div>
    </div>
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
  background-color: #FEE2E2;
  height: 30vh;
  width: 15vw;
  margin: 2em;
  border-radius: .5em;
}
.albert-pics img {

 max-width: 12vw;
 max-height: 28vh;
}

img{
  height: 90%;
  width: auto;
  margin: .5em;
  border-radius: .5em;
}
</style>