<script setup lang="ts">
import InputComp from "./InputComp.vue";
</script>

<template>
  <div class="banner">
    <div class="banner__ellipse">
      <img src="../assets/image/header_bg.png" alt="header_bg" />
    </div>
    <div class="banner__content">
      <h1 class="content__title">we’re getting ready</h1>
      <div class="content__calendar">
        <div class="calendar__item">
          <div class="calendar__item--count">30</div>
          <div class="calendar__item--label">days</div>
        </div>
        <div class="calendar__divider"></div>
        <div class="calendar__item">
          <div class="calendar__item--count">18</div>
          <div class="calendar__item--label">hours</div>
        </div>
        <div class="calendar__divider"></div>
        <div class="calendar__item">
          <div class="calendar__item--count">20</div>
          <div class="calendar__item--label">minutes</div>
        </div>
        <div class="calendar__divider"></div>
        <div class="calendar__item">
          <div class="calendar__item--count">11</div>
          <div class="calendar__item--label">second</div>
        </div>
      </div>

      <div class="banner__newLetter">
        <h4 class="banner__newLetter--desc">
          We will back to something amazing. Getting the latest updates about
          our games. Please sign up to our newsletter.
        </h4>
        <InputComp />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/banner.css";
</style>
