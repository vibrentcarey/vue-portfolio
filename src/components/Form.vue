<template>
  <div  id="form">
    <form v-if="!success" @submit.prevent='handleFormSubmit' id="form-details">
      <h2>Enter your details below:</h2>
      <label for="fname">First Name:</label>
      <input name="fname" v-model="fname" placeholder="Enter first name..." />
      <hr />
      <label for="lname">Last Name:</label>
      <input name="lname" v-model="lname" placeholder="Enter last name..." />
      <hr />

      <label for="email">Email Address:</label>
      <input name="email" v-model="email" placeholder="Enter email address..." />
      <hr />
      <label for="phone">Phone Number:</label>
      <input name="phone" v-model="phone" type='tel' placeholder="647-669-0083" />
      <hr />
      <label for="company-name">Company Name:</label>
      <input @keydown.enter="handleFormSubmit" name="company-name" v-model="companyName" placeholder="Enter company name..." />
      <hr/>
      <p class='warning' v-if='feedback'>{{feedback}}</p>
      <Button  class='button' @closeForm="closeForm" type="button" onClick='closeForm' title='Cancel' color="#aaaaaa"/>
      <Button class='button' @submitForm='handleFormSubmit' type='submit' onClick='submitForm' title='Submit' color="#FF8383"/>
    </form>
    <h3 v-else>{{success}}</h3>
  </div>
</template>

<script>
import db from '@/firebase/init'
import Button from '../components/Button'
export default {
  name: "Form",
  components: {Button},
  data() {
    return {
      fname: "",
      lname: "",
      companyName: "",
      email: "",
      phone: '',
      feedback:'',
      success:''
    };
  },
  methods: {
    handleFormSubmit(){
      if(this.fname && this.lname && this.companyName && this.email && this.phone){
      db.collection('employers').add({
        firstName: this.fname,
        lastName: this.lname,
        companyName: this.companyName,
        email: this.email,
        phone: this.phone
      });
      
      this.success ='Thank you I will get back to you ASAP!'
  
      setTimeout(()=>{
        this.closeForm()
        this.success =''
      }, 3000)
      } else {
        this.feedback = 'Please fill in all fields to submit'
      }
    },
    closeForm(){
      this.$emit('close-form')
    }
  }
};
</script>

<style lang="css">
#form {
  height: auto;
  width: 50vw;
  background-color: #ffaeaf;
  border-radius: 1em;
  padding: 2em;
  margin: 5em;
}
#form input {
  margin: 1em;
  background-color: #f6f6f6;
  border: none;
}
.button{
  display: inline-block;
}
#form-details {
  width: 80%;
  text-align: left;
}
.warning {
  color: red;
}
</style>