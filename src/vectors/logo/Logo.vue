<template>
  <img :src="logo" width="28" alt="Kobopay" class="logo" />
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {
      logo: require("@/assets/logo/logo.svg"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
