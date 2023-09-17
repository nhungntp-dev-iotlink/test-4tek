<template>
  <div class="wrapper">
    <SplitCarousel v-bind="defaultConfig">
      <SplitCarouselItem v-for="item in items" :key="item">
        <div class="box">
          <img :src="item" :alt="item" />
        </div>
      </SplitCarouselItem>
    </SplitCarousel>
  </div>
</template>

<script>
 
const defaultConfig = {
  displayAmount: 4,
  autoplay: true,
  speed: 500,
  interval: 3000,
  loop: true,
  height: 80,
  itemWidth: 120,
  pauseOnHover: true,
  timingFunction: "ease",
  arrowVisible: "default",
};

export default {
  name: "App",
  data: () => ({
    items:[
    "src/assets/image/partners/ea-game.png",
    "src/assets/image/partners/game.png",
    "src/assets/image/partners/first-power-up.png",
    "src/assets/image/partners/disney.png",
    "src/assets/image/partners/book-pro.png",
    "src/assets/image/partners/sega.png",
    "src/assets/image/partners/2k.png",
  ]
  })
};
</script>

<style scoped>
@import "../assets/css/partner.css";
.box {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.operator {
  padding: 30px 0;
}
.code {
  margin: 0;
}
details {
  padding: 25px 0 0 10px;
}
</style>


