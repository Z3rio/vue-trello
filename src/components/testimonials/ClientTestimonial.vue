<script setup lang="ts">
const props = defineProps<{
  data: Object;
}>();
</script>

<template>
  <div class="testimonial">
    <div class="quote">
      <div class="logo"></div>
      <div class="quoteTextDiv">
        <p class="quoteText">{{ data.quote }}</p>

        <div class="footer">
          <div class="author">
            <b>{{ data.person.name }}</b> - {{ data.person.jobTitle }}
          </div>
          <div class="industry">
            Industry: <b>{{ data.industry }}</b>
          </div>
          <img
            :src="data.logo.url"
            alt="Industry Image"
            :height="data.logo.height"
            :width="data.logo.width"
            class="jobLogo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.testimonial {
  flex: 0 100%;
}

.testimonial .quote {
  margin-left: 8.33333%;
  width: calc(100% - 8.33333%);

  display: flex;
}

.quote .quoteText {
  font-family: "Charlie Display", sans-serif;
  font-size: 2.25rem;
}

.quote .quoteTextDiv {
  width: calc(100% - 4rem);

  margin-left: auto;
  margin-top: -10px;
}

.quote .logo {
  background-image: url("data:image/svg+xml,%3Csvg fill='none' height='31' viewBox='0 0 33 31' width='33' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m32.4 24.1002c0-3.7-2.5-6-6.3-6h-2c.3-7.2 4.1-10.5 8.8-11.30001v-6.599995c-9.3.999995-14.3 7.499995-14.3 18.400005 0 8.6 2.9 11.7 7.5 11.7 3.9 0 6.3-2.7 6.3-6.2zm-18.5 0c0-3.7-2.5-6-6.29999-6h-2c.3-7.2 4.1-10.5 8.79999-11.30001v-6.599995c-9.29999.999995-14.299994 7.499995-14.299994 18.400005 0 8.6 2.900004 11.7 7.500004 11.7 3.89999 0 6.29999-2.7 6.29999-6.2z' fill='%2300a3bf'/%3E%3C/svg%3E");

  display: block;

  height: 31px;
  width: 33px;
}

.footer {
  display: flex;
  width: 100%;

  gap: 1.5rem;

  font-family: "Charlie Text", sans-serif;
}

.footer b {
  font-family: "Charlie Display Semi Bold", sans-serif;
  color: black;
}

.footer div {
  width: calc(100% / 3);
}

.footer img {
  max-width: 220px;
  max-height: 66px;

  height: auto;
  width: auto;

  margin-left: auto;
}
</style>
