<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    slides: [
      "src/assets/image/partners/ea-game.png",
      "src/assets/image/partners/game.png",
      "src/assets/image/partners/first-power-up.png",
      "src/assets/image/partners/disney.png",
      "src/assets/image/partners/book-pro.png",
      "src/assets/image/partners/sega.png",
      "src/assets/image/partners/2k.png",
    ],
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      375: {
        //min 700px
        itemsToShow: 3,
        snapAlign: "center",
      },
      768: {
        //min 700px
        itemsToShow: 3,
        snapAlign: "center",
      },
      // min 1336px
      1336: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
});
</script>

<template>
  <div class="partner">
    <div class="partner__title">
      {{ $t("Our_Partners") }}
    </div>
    <Carousel :v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="item in slides" :key="item">
        <div class="carousel__item">
          <img :src="item" :alt="item" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style>
.partner {
  width: calc(100% - 380px);
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 40px;
}
.partner__title {
  font-family: Playfair Display;
  font-size: 60px;
  font-style: normal;
  font-weight: 900;
  line-height: 80px;
  letter-spacing: 3.6px;
  color: #000;
  width: 100%;
  text-align: center;
}
.partner .carousel {
  width: 100%;
  padding-top: 70px;
}
.carousel__prev,
.carousel__next {
  width: 40px;
  height: 40px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -40px;
}

.carousel__item > img {
  width: 100%;
  object-fit: cover;
}
/* mobile */
@media only screen and (max-width: 768px) {
  .partner {
    width: calc(100% - 24px);
  }

  .partner__title {
    font-size: 40px;
    line-height: 50px;
  }

  .partner .carousel {
    padding-top: 40px !important;
  }

  .carousel__prev,
  .carousel__next {
    margin: 0 !important;
  }
}
</style>
