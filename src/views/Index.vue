<template>
  <div class="pg-index bgBackground">
    <div class="pg-container">
      <logo />
      <h2 class="titleName">Nosagie Onaiwu</h2>
      <p class="titleDesc">Product Designer</p>
    </div>
  </div>
</template>

<script>
import Logo from "@/vectors/logo/Logo.vue";
export default {
  name: "Index",
  components: {
    Logo,
  },
  metaInfo: {
    title: "Nosagie Onaiwu",
    titleTemplate: "%s - Product Designer",
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
