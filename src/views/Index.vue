<template>
  <div class="pg-index">
    <div class="pg-container">
      <logo />
      <h2 class="titleName">Nosagie Onaiwu</h2>
      <p class="titleDesc">Product Designer</p>
      <div class="desc">
        <p class="top">I'm a product designer focusing on simplifying digital experiences for you, me and everyone we know.</p>
        <p class="lower">I do both User Interface Design and Frontend Development. I design with Adobe XD and Figma and write frontend with HTML, SCSS and Javascript. If we’re talking frameworks, I build with VueJS.</p>
      </div>
      <div class="contact">
        <span class="__mail">nos.onaiwu@gmail.com</span>
        <div class="__social">
          <a href="https://dribbble.com/nxsa" target="_blank" class="__link" >
            <dribbble />
          </a>
          <a href="https://github.com/Nxsa" target="_blank" class="__link">
            <github />
          </a>
          <a href="https://www.behance.net/thenxsa" target="_blank" class="__link">
            <behance />
          </a>
          <a href="https://medium.com/four-walls" target="_blank" class="__link">
            <medium />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/vectors/logo/Logo.vue";
import Dribbble from "@/vectors/Dribbble";
import Github from "@/vectors/Github";
import Behance from "@/vectors/Behance";
import Medium from "@/vectors/Medium";

export default {
  name: "Index",
  components: {
    Logo,
    Github,
    Dribbble,
    Behance,
    Medium
  },
  metaInfo: {
    title: "Nosagie Onaiwu",
    titleTemplate: "%s - Product Designer",
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
