<template>
  <div id="home">
    <h1>Home page</h1>
    <button v-if="!showForm" @click='toggleForm'>Hire Me</button>
    <Form v-else/>
  </div>
</template>

<script>
import Form from "../components/Form";
export default {
  name: "Home",
  components: { Form },
  data() {
    return {
    showForm: false,
    }
  },
  methods: {
    toggleForm() {
    this.showForm = !this.showForm;
    }
  }
};
</script>

<style lang="css">
#home {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>