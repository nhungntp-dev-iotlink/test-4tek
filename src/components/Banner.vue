<script setup lang="ts">
import InputComp from "./InputComp.vue";
import Count from "./Count.vue";
</script>

<template>
  <div class="banner">
    <div class="banner__ellipse">
      <img src="../assets/image/header_bg.png" alt="header_bg" />
    </div>
    <div class="banner__content">
      <h1 class="content__title">{{ $t("banner.title") }}</h1>
      <Count />

      <div class="banner__newLetter">
        <h4 class="banner__newLetter--desc">
          {{ $t("banner.letter") }}
        </h4>
        <InputComp placeholder="banner.placeholder" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/banner.css";
</style>
