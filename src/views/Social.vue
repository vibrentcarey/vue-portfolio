<template>
  <div id='social-page'>
    <h1>Social page</h1>
    <div id="social">
    <div class='social resume'>
    <a class="fa fa-briefcase" target="_blank" href="https://www.canva.com/design/DAEHtQ6TbyA/7N5Utpi4Z0AEL17jRBBy4g/view?utm_content=DAEHtQ6TbyA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" ><span>My Resume</span></a>
    </div>
    <div class='social'>
      <h2>You can find me on the following platforms</h2>
      <a href="https://twitter.com/BrentCarey14" class="fa fa-twitter" target="_blank"></a>
      <a target="_blank" href="https://www.linkedin.com/in/brent-carey-0aab6b1b4/" class="fa fa-linkedin"></a>
      <a target="_blank" href="https://github.com/brentcareycode" class="fa fa-github"></a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Social"
};
</script>

<style lang="css" scoped>
#social {
  display: flex;
align-items: center;
justify-content: center;
}
.social {
  width: 40vw;
  height: 30vh;
  background-color: #FFAEAF;
  border-radius: 1em;
  margin: 1em;
}
.social.resume {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fa {
  padding: 0.5em;
  font-size: 2em;
  text-decoration: none;
  border-radius: 50%;
  margin: .5em;
}
.fa:hover {
  opacity: 0.7;
  cursor: pointer;
}
.fa-twitter {
  background: #55acee;
  color: white;
}

.fa-github {
  background: #6f6f6f;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}
span {
  margin: .5em;
}
a {
  color: #6F6F6F;
}
.fa-briefcase:hover{
text-decoration: none;
color: red;
} 
</style>