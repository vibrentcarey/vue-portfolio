<template>
  <div id="home">
    <h1>Hi my name is Brent!</h1>
    <transition name="fade" appear>
      <img v-if='showImage' src='../assets/brent.png'/>
    </transition>
  
    <h3>I am an aspring web developer <br/>
    who would like to master this craft! </h3>
<transition name='bounce' appear>
    <Button :class="{flash: buttonActive}" @toggleForm="toggleForm"  v-if='!showForm' onClick='toggleForm' title="Hire Me" color='#FF8383'></Button>
    </transition>
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
    this.toggleFlash()
  },
  data() {
    return {
    showForm: false,
    showImage: false,
    buttonActive: false
    }
  },
  methods: {
    toggleForm() {
    this.showForm = !this.showForm;
    },
    toggleFlash() {
      setInterval(()=>{
      this.buttonActive = !this.buttonActive
      }, 1000)
    }
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
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
/*button bounce in */
.bounce-enter-active {
  animation: bounce-in 2s;
}
.bounce-leave-active {
  animation: bounce-in 2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
img {
  height: 15em;
  border-radius: 50%;
}
.flash {
  color: red;
}
</style>