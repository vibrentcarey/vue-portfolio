<template>
  <div id="home">
    <h1>Home page</h1>
    <Button @toggleForm="toggleForm" v-if="!showForm" onClick='toggleForm' title="Hire Me" color='#FF8383'></Button>
    <Form v-else @close-form="toggleForm"/>
  </div>
</template>

<script>
import Form from "../components/Form";
import Button from '../components/Button'
export default {
  name: "Home",
  components: { Form, Button },
  created() {
    this.showForm = false
  },
  data() {
    return {
    showForm: false,
    }
  },
  methods: {
    toggleForm() {
    this.showForm = !this.showForm;
    },
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