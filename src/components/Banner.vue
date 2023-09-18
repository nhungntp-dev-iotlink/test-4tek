<script setup lang="ts">
import InputComp from "./InputComp.vue";
import CountDown from "./CountDown.vue";
import FairyMobile from "./FairyMobile.vue";
</script>

<template>
  <div class="banner">
    <div class="banner__ellipse">
      <img src="/image/header_bg.png" alt="header_bg" />
    </div>
    <div class="banner__content">
      <div class="content__title">
        <span>{{ $t("banner.game") + " " }}</span>
        <span>{{ $t("banner.ready") }}</span>
      </div>
      <CountDown />

      <div class="banner__newLetter">
        <h4 class="banner__newLetter--desc">
          {{ $t("banner.letter") }}
        </h4>
        <InputComp placeholder="banner.placeholder" />
      </div>
    </div>
  </div>
  <div class="banner__fairy">
    <FairyMobile />
  </div>
</template>

<style scoped>
@import "../assets/css/banner.css";
</style>
