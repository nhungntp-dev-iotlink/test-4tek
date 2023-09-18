<script setup lang="ts">
import InputComp from './InputComp.vue';
</script>

<template>
  <div class="footer">
    <div class="footer__info">
      <div class="info__container">
        <div class="container container__media">
          <div class="logo">
            <img src="/logo/header_logo.svg" alt="logo" />
          </div>
          <div class="media__list">
            <div class="media__list--icon">
              <img src="/icon/twitter.svg" alt="twitter" />
            </div>
            <div class="media__list--icon">
              <img src="/icon/facebook.svg" alt="facebook" />
            </div>
            <div class="media__list--icon">
              <img src="/icon/linkedin.svg" alt="linkedin" />
            </div>
          </div>
        </div>
        <div class="container container__address">
          <div class="title">{{ $t("address.title") }}</div>
          <div class="item item__address">
            <div class="item__icon">
              <img src="/icon/address.svg" alt="address"/>
            </div>
            <div class="item__text">
              <div class="item__text--address">
                {{ $t("address.line1") }}
              </div>
              <div class="item__text--address">
                {{ $t("address.line2") }}
              </div>
            </div>
          </div>

          <div class="item">
            <div class="item__icon">
              <img src="/icon/mobile.svg" alt="mobile"/>
            </div>
            <div class="item__text">
              <div class="item__text--phoneNumber">
                {{ $t("phone.line") }}
              </div>
            </div>
          </div>

        </div>
        
        <div class="container container__subscribe">
          <div class="subscribe__title">
            {{ $t("subscribe.title") }}
          </div>
          <div class="subscribe__caption">
            {{ $t("subscribe.content") }}
          </div>
          <div class="subscribe__input">
            <InputComp isGosh placeholder="Email"/>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">2017 Copyright. Policy.</div>
  </div>
</template>

<style scoped>
@import "../assets/css/footer.css";
</style>
