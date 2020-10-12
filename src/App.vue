<template>
  <div id="app" class="wrapper">
    <div id="footer-control">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style lang="scss"></style>
