<template>
  <div class="content__calendar">
    <div class="calendar__item">
      <div class="calendar__item--count">{{ timerOutput.day }}</div>
      <div class="calendar__item--label">{{ $t("banner.days") }}</div>
    </div>
    <div class="calendar__divider"></div>
    <div class="calendar__item">
      <div class="calendar__item--count">{{ timerOutput.hour }}</div>
      <div class="calendar__item--label">{{ $t("banner.hours") }}</div>
    </div>
    <div class="calendar__divider"></div>
    <div class="calendar__item">
      <div class="calendar__item--count">{{ timerOutput.minute }}</div>
      <div class="calendar__item--label">{{ $t("banner.minutes") }}</div>
    </div>
    <div class="calendar__divider"></div>
    <div class="calendar__item">
      <div class="calendar__item--count">{{ timerOutput.second }}</div>
      <div class="calendar__item--label">{{ $t("banner.seconds") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      countDownToTime: new Date("Oct 19, 2023 00:00:00").getTime(),
      timerOutput: {} as any,
    };
  },
  methods: {
    startTimer: function () {
      const timeNow = new Date().getTime();
      const timeDistance = this.countDownToTime - timeNow;

      const secondByMilSeconds = 1000;
      const minuteByMilSeconds = secondByMilSeconds * 60;
      const hourByMilSeconds = minuteByMilSeconds * 60;
      const dayByMilSeconds = hourByMilSeconds * 24;
      const differenceInDays = timeDistance / dayByMilSeconds;

      const distanceHour = (timeDistance % dayByMilSeconds) / hourByMilSeconds;
      const distanceMinutes = (timeDistance % hourByMilSeconds) / minuteByMilSeconds;
      const distanceSeconds = (timeDistance % minuteByMilSeconds) / secondByMilSeconds;

      let numDay = Math.floor(differenceInDays);
      let numHours = Math.floor(distanceHour);
      let numMinutes = Math.floor(distanceMinutes);
      let numSeconds = Math.floor(distanceSeconds);

      this.timerOutput = {
        day: numDay,
        hour: numHours,
        minute: numMinutes,
        second: numSeconds,
      };
    },
  },
  mounted() {
    setInterval(() => {
      this.startTimer();
    }, 1000);
  },
});
</script>

<style scoped>
@import "../assets/css/banner.css";
</style>
