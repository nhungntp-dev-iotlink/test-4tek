<script setup lang="ts">
import HeaderLang from "./HeaderLang.vue";
</script>

<template>
  <div class="header">
    <img src="../assets/logo/header_logo.svg" />
    <ul class="header__menu">
      <li class="header__menu--item">{{ $t("header.about_us") }}</li>
      <li class="header__menu--item">{{ $t("header.games") }}</li>
      <li class="header__menu--item">{{ $t("header.partners") }}</li>
      <li class="header__menu--item">{{ $t("header.contact_us") }}</li>
      <HeaderLang />
    </ul>
  </div>
</template>

<style scoped>
@import "../assets/css/header.css";
</style>
