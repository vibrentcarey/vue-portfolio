<template>
  <div class="about">
    <h1>My Hobbies Include</h1>
    <div id="hobby-box">

      <HobbyCard v-for="hobby in hobbies" :key="hobby.title" :title="hobby.title" :description="hobby.description" />
    </div>
  </div>
</template>
<script>
import HobbyCard from "@/components/HobbyCard";
export default {
  name: "About",
  components: { HobbyCard },
  data() {
    return {
      hobbies: [
        {
          title: "Piano",
          imageLink: "",
          description: "I started teaching myself this year!"
        },
        {
          title: "Nintendo Switch",
          imageLink: "",
          description: "Mainly Super Smash Bros!"
        },
        {
          title: "Ping Pong",
          imageLink: "",
          description: "My favourite sport to play!"
        }
      ]
    };
  }
};
</script>
<style lang="css">
.about {
  display: flex;
 flex-direction: column;
align-items: center;
}

#hobby-box {
  width: 80vw;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2em;
}
</style>