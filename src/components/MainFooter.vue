<script setup lang="ts">
import InputComp from './InputComp.vue';
</script>

<template>
  <div class="footer">
    <div class="footer__info">
      <div class="info__container">
        <div class="container container__media">
          <div class="logo">
            <img src="../assets/logo/header_logo.svg" alt="logo" />
          </div>
          <div class="media__list">
            <div class="media__list--icon">
              <img src="../assets/icon/twitter.svg" alt="twitter" />
            </div>
            <div class="media__list--icon">
              <img src="../assets/icon/facebook.svg" alt="facebook" />
            </div>
            <div class="media__list--icon">
              <img src="../assets/icon/linkedin.svg" alt="linkedin" />
            </div>
          </div>
        </div>
        <div class="container container__address">
          <div class="title">Address</div>
          <div class="item item__address">
            <div class="item__icon">
              <img src="../assets/icon/address.svg" alt="address"/>
            </div>
            <div class="item__text">
              <div class="item__text--address">
                Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US
              </div>
              <div class="item__text--address">
                20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam
              </div>
            </div>
          </div>

          <div class="item">
            <div class="item__icon">
              <img src="../assets/icon/mobile.svg" alt="mobile"/>
            </div>
            <div class="item__text">
              <div class="item__text--phoneNumber">
                (+1) 555-0108-000 or (+236) 555-0108
              </div>
            </div>
          </div>

        </div>
        
        <div class="container container__subscribe">
          <div class="subscribe__title">
            Subscribe
          </div>
          <div class="subscribe__caption">
            Subscribe to our newsletter and be the first to know about our updates
          </div>
          <div class="subscribe__input">
            <InputComp/>
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
