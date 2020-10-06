<template>
  <div id="home">
    <Button @toggleForm="toggleForm"  v-if='!showForm' onClick='toggleForm' title="Hire Me" color='#FF8383'></Button>
    <transition name='fade'>
    <Form v-if="showForm" @close-form="toggleForm"/>
    </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>