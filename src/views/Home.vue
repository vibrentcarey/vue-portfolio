<template>
  <div id="home">
    <h1>Hi my name is Brent!</h1>
    <transition name="fade" appear>
      <img v-if='showImage' src='../assets/brent.png'/>
    </transition>
  
    <h3>I am an aspring web developer <br/>
    who would like to master this craft! </h3>

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
    this.showImage = true
  },
  data() {
    return {
    showForm: false,
    showImage: false
    }
  },
  methods: {
    toggleForm() {
    this.showForm = !this.showForm;
    },
  }
};
</script>

<style lang="css" scoped>
#home {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
img {
  height: 15em;
  border-radius: 50%;
}
</style>