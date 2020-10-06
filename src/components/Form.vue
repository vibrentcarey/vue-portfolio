<template>
  <div id="form">
    <h3>Enter your details below:</h3>
    <form @submit.prevent='handleFormSubmit' id="form-details">
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
      <input name="company-name" v-model="companyName" placeholder="Enter company name..." />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      fname: "",
      lname: "",
      companyName: "",
      email: ""
    };
  }
};
</script>

<style lang="css">
#form {
  height: auto;
  width: auto;
  background-color: #ffaeaf;
  border-radius: 1em;
  padding: 1em;
}
#form input {
  margin: 1em;
  background-color: #f6f6f6;
  border: none;
}
#form button {
  background-color: #FF8383;
  border: none;
  padding: 1em;
  font-size: 1em;
  width: 30%;
  margin: 1em;
  border-radius: .2em;

}
#form button:hover {
  cursor: pointer;
  background-color: #ff3f3f;
}
#form-details {
  width: 80%;
  text-align: left;
}
</style>