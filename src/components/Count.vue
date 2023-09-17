<template>
  <div class="content__calendar">
    <div class="calendar__item">
      <div class="calendar__item--count">{{ days }}</div>
      <div class="calendar__item--label">{{ $t("banner.days") }}</div>
    </div>
    <div class="calendar__divider"></div>
    <div class="calendar__item">
      <div class="calendar__item--count">{{ hour }}</div>
      <div class="calendar__item--label">{{ $t("banner.hours") }}</div>
    </div>
    <div class="calendar__divider"></div>
    <div class="calendar__item">
      <div class="calendar__item--count">{{ min }}</div>
      <div class="calendar__item--label">{{ $t("banner.minutes") }}</div>
    </div>
    <div class="calendar__divider"></div>
    <div class="calendar__item">
      <div class="calendar__item--count">{{ sec }}</div>
      <div class="calendar__item--label">{{ $t("banner.second") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
let timer = 0;
const endDate = new Date("10-20-2023").getTime();
let nowDate = new Date();
const now = nowDate.getTime();
export default {
  computed: {
    days() {
      let d = Math.trunc((endDate - now) / 1000 / 86400);
      return d > 9 ? d : "0" + d;
    },
    hour() {
      let h = Math.trunc((endDate - now) / 1000 / 3600);
      return h > 9 ? h : "0" + h;
    },
    min() {
      let m = Math.trunc((endDate - now) / 1000 / 60) % 60;
      return m > 9 ? m : "0" + m;
    },
    sec() {
      let s = Math.trunc((endDate - now) / 1000) % 60;
      return s > 9 ? s : "0" + s;
    },
  },
  watch: {
    endDate: {
      immediate: true,
      handler(newVal) {
        if (timer) {
          clearInterval(timer);
        }
        timer = setInterval(() => {
          nowDate = new Date();
          if (now > newVal) {
            nowDate = newVal;
            this.$emit("endTime");
            clearInterval(timer);
          }
        }, 10);
      },
    },
  },
  beforeDestroy() {
    clearInterval(timer);
  },
};
</script>
<style scoped>
@import "../assets/css/banner.css";
</style>
