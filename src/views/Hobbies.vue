<template>
  <div class="about">
    <h1>My Hobbies Include</h1>
    <div id="hobby-box">
      <HobbyCard
        v-for="hobby in hobbies"
        :imgSrc="hobby.imageLink"
        :key="hobby.title"
        :title="hobby.title"
        :description="hobby.description"
        :route="hobby.route"
      />
    </div>
  </div>
</template>
<script>
import HobbyCard from "@/components/HobbyCard";
export default {
  name: "Hobbies",
  components: { HobbyCard },
  data() {
    return {
      hobbies: [
        {
          title: "Piano",
          imageLink: "piano.jpeg",
          description: "I started learning this year!"
        },
        {
          title: "Video Games",
          imageLink: "game.jpeg",
          description: "Mainly Super Smash Bros!"
        },
        {
          title: "Ping Pong",
          imageLink: "pong.jpeg",
          description: "My favourite sport to play!"
        },
        {
          title: "Cat Parenting",
          imageLink: "albert-main.jpeg",
          description: "My cat son Albert!",
          route: "hobbies/albert"
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