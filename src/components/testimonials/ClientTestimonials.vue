<template>
  <div class="testimonial-container">
    <div class="inner2">
      <div class="inner3">
        <div class="testimonial-buttons">
          <v-btn
            elevation="0"
            fab tile :ripple="false"
            color="#fff" small
            @click="click_chevron('-')"
          >
            <ChevronLeftIcon />
          </v-btn>
          <v-btn
            elevation="0"
            fab tile :ripple="false"
            color="#fff" small
            @click="click_chevron('+')"
          >
            <ChevronRightIcon />
          </v-btn>
        </div>

        <div class="testimonials" :style="{'margin-left': '-' + 100 * currentTestimonial + '%'}">
          <ClientTestimonial v-for="(data,index) in testimonials" :key="index" :data="data" />
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
  box-shadow: none!important;
  border: 1px solid rgb(244, 245, 247)!important;
}

.testimonial-buttons button:hover {
  border-color: rgb(223, 225, 230)!important;
}

.testimonial-buttons button:hover svg {
  color: #08bada;
}

.testimonial-buttons button::before {
  display: none!important;
}

.testimonials {
  width: 400%;
  display: flex;
  flex-direction: row;

  transition: 250ms;

  margin-top: 20px;
}
</style>

<script>
import Vue from 'vue';
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue';
import ClientTestimonial from './ClientTestimonial.vue';

export default Vue.extend({
  name: 'ClientTestimonials',

  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
    ClientTestimonial,
  },

  methods: {
    click_chevron(type) {
      if (type === '+') {
        if (this.currentTestimonial === this.testimonials.length - 1) {
          this.currentTestimonial = 0;
        } else {
          this.currentTestimonial += 1;
        }
      } else if (type === '-') {
        if (this.currentTestimonial === 0) {
          this.currentTestimonial = this.testimonials.length - 1;
        } else {
          this.currentTestimonial -= 1;
        }
      }
    },
  },

  data: () => ({
    currentTestimonial: 0,
  }),

  props: {
    testimonials: Array,
  },
});
</script>
