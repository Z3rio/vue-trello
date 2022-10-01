<script setup lang="ts">
import { ref } from "vue";
import ClientTestimonial from "./ClientTestimonial.vue";

const currentTestimonial = ref(0);
const props = defineProps<{
  testimonials: Array;
}>();

function click_chevron(type) {
  if (type === "+") {
    if (currentTestimonial.value === props.testimonials.length - 1) {
      currentTestimonial.value = 0;
    } else {
      currentTestimonial.value += 1;
    }
  } else if (type === "-") {
    if (currentTestimonial.value === 0) {
      currentTestimonial.value = props.testimonials.length - 1;
    } else {
      currentTestimonial.value -= 1;
    }
  }
}
</script>

<template>
  <div class="testimonial-container">
    <div class="inner2">
      <div class="inner3">
        <div class="testimonial-buttons">
          <v-btn
            elevation="0"
            fab
            tile
            :ripple="false"
            color="#fff"
            small
            icon="mdi-chevron-left"
            height="40" width="40"
            @click="click_chevron('-')"
          ></v-btn>
          <v-btn
            elevation="0"
            fab
            tile
            :ripple="false"
            color="#fff"
            small
            @click="click_chevron('+')"
            height="40" width="40"
            icon="mdi-chevron-right"
          ></v-btn>
        </div>

        <div
          class="testimonials"
          :style="{ 'margin-left': '-' + 100 * currentTestimonial + '%' }"
        >
          <ClientTestimonial
            v-for="(data, index) in testimonials"
            :key="index"
            :data="data"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.testimonial-container {
  background-color: rgb(230, 252, 255);
  color: rgb(9, 30, 66);

  width: 100%;

  padding-top: 5rem;
  padding-bottom: 5rem;
}

.testimonial-container .inner2 {
  margin: 0 auto;
  padding-bottom: 3rem;
}

.testimonial-container .inner2 .inner3 {
  overflow: hidden;
  width: calc(100% - 4rem);
}

.testimonial-buttons {
  width: fit-content;

  margin-left: auto;

  display: flex;
  column-gap: 15px;
}

.testimonial-buttons button {
  box-shadow: none !important;
  border: 1px solid rgb(244, 245, 247) !important;
}

.testimonial-buttons .v-btn--icon {
  border-radius: 0px!important;
}

.testimonial-buttons button:hover {
  border-color: rgb(223, 225, 230) !important;
}

.testimonial-buttons button:hover svg {
  color: #08bada;
}

.testimonial-buttons button::before {
  display: none !important;
}

.testimonials {
  width: 400%;
  display: flex;
  flex-direction: row;

  transition: 250ms;

  margin-top: 20px;
}
</style>
