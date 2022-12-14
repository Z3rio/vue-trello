<script setup lang="ts">
import { ref } from "vue";
import FeatureList from "../featurelists/FeatureList.vue";
import ExtraFeatureList from "../featurelists/ExtraFeatureList.vue";
import ClientTestimonials from "../testimonials/ClientTestimonials.vue";

const features = ref([
  {
    header: "See Trello pricing",
    description:
      "Whether you’re a team of 2 or 2,000, Trello can be customized for your organization. Explore which option is best for you.",
    buttonText: "Compare pricing",
    imageUrl:
      "https://images.ctfassets.net/rz1oowkt5gyp/2ozLp25HsHeANpiNqAwzGI/d60a017d2f214c28f774b35d03499782/tag.svg",
  },
  {
    header: "What is Trello?",
    description:
      "Trello is the visual tool that empowers your team to manage any type of project, workflow, or task tracking.",
    buttonText: "Tour Trello",
    imageUrl:
      "https://images.ctfassets.net/rz1oowkt5gyp/6rRWTcHzPKupQ3ZDqBaxu6/aecd045f4b31a92288a85bdb4a9dfe2c/compass.svg ",
  },
  {
    header: "Discover Trello Enterprise",
    description:
      "The productivity tool teams love, paired with the features and security needed for scale.",
    buttonText: "Learn more",
    imageUrl:
      "https://images.ctfassets.net/rz1oowkt5gyp/5AE4nXLOennRxmmUMcgMLM/747e96bdd16cf4113e4ef867bd85fd29/solutions.svg",
  },
]);
const companies = ref([
  "https://images.ctfassets.net/rz1oowkt5gyp/7nR3kQlx8IP5mfCCBTatsy/0b3952a6be3ebb10116d62aa93be7bbb/coinbase.svg",
  "https://images.ctfassets.net/rz1oowkt5gyp/6VwRn7PI4zrZo84Uoa8rnt/b0ae3da34916a3ff02d26e2120efe9b8/johnDeere.svg",
  "https://images.ctfassets.net/rz1oowkt5gyp/5KdQPApAFJpLMv9AntiNLk/530cef2a4b56ad758c1e91fad5c3e7ac/Grand-Hyatt.svg",
  "https://images.ctfassets.net/rz1oowkt5gyp/2zdwHAyV1sdTRtu3VZWrnp/cdabf13fb68d433667812689add7cdc8/Google.svg",
  "https://images.ctfassets.net/rz1oowkt5gyp/1zdBcYqeqkDsLUfggfKFRO/a732e0001ca5153ef7195eea63ff6a3b/Visa.svg",
  "https://images.ctfassets.net/rz1oowkt5gyp/2Im844Kon73pvCD2ljoxeL/4073e041eb8eb961a0f9505965dec09b/Zoom.png?w=576",
]);
const extra_features = ref([
  {
    header: "Features to help your team succeed",
    description:
      "Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.",
    align: "left",
    hideLearnMore: true,
  },
  {
    upperHeader: "CHOOSE A VIEW",
    header: "The board is just the beginning",
    description:
      "Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.",
    align: "right",
    image: {
      url: "https://images.ctfassets.net/rz1oowkt5gyp/4gcdup5C0Z1rQEQDGfeWth/71156837ac2d75293bf0eec8010aeb6e/view.svg",
      width: 415,
      height: 313,
    },
    isOpened: false,
    learnMore: {
      text: "You and your team can start up a Trello board in seconds. With the ability to view board data from many different angles, the entire team stays up-to-date in the way that suits them best:",
      list: [
        "Use a Timeline view for project planning",
        "Calendar helps with time management",
        "Table view connects work across boards",
        "See board stats with Dashboard, and more!",
      ],
      linkText: "Learn more about views",
    },
  },
  {
    upperHeader: "DIVE INTO THE DETAILS",
    header: "Cards contain everything you need",
    description:
      "Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.",
    align: "left",
    image: {
      url: "https://images.ctfassets.net/rz1oowkt5gyp/4B1RPRoUspHQXgYCRAndBX/466053fb07ff2cdc0ae06649d5f30d8f/card-back.svg",
      width: 339,
      height: 275,
    },
    isOpened: false,
    learnMore: {
      text: "Spin up a Trello card with a click, then uncover everything it can hold. Break down bigger card tasks into steps with file attachment previews, reminders, checklists and comments—emoji reactions included! Plus, gain powerful perspective by seeing all cards by list and status at the board level.",
      text2: "Your team can:",
      list: [
        "Manage deadlines",
        "Provide and track feedback",
        "Assign tasks and hand off work",
        "Connect work across apps",
      ],
    },
  },
  {
    upperHeader: "MEET YOUR NEW BUTLER",
    header: "No-code automation",
    description:
      "Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.",
    align: "right",
    image: {
      url: "https://images.ctfassets.net/rz1oowkt5gyp/1zR830Rgv5hpZbwuiyAFkq/326d72f720d090342f0744a8deb8b727/automation.png?w=576",
      width: 489.5,
      height: 370,
    },
    isOpened: false,
    learnMore: {
      text: "Butler uses natural language commands to automate just about any task in Trello:",
      list: [
        "Automate common actions like moving lists",
        "Create custom buttons to build process quickly",
        "Surface upcoming deadlines to the team",
        "Schedule teammate assignments, and more!\n",
      ],
      linkText: "Learn more about Butler Automation",
    },
  },
  {
    upperHeader: "POWER-UPS",
    header: "Integrate top work tools",
    description:
      "Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered.",
    align: "left",
    image: {
      url: "https://images.ctfassets.net/rz1oowkt5gyp/17AXIwjhGkuPEpvcWzwoIJ/e6e767d503809a89be375846ac81bbef/power-ups.png?w=576",
      width: 376.5,
      height: 339,
    },
    isOpened: false,
    learnMore: {
      text: "From Reporting to Custom Fields to your beloved software integrations—we’ve got functionalities, your favorites, and more!",
      text2: "Such as:",
      list: ["Confluence", "Slack", "Dropbox", "Google Drive", "Evernote"],
      linkText: "Learn more about views",
    },
  },
]);
const testimonials = ref([
  {
    quote:
      "Everyone loves it; it has democratized our finance function. In some ways Trello shattered hierarchy and brought us together.",
    person: {
      name: "BHARATH SUNDAR",
      jobTitle: "Finance, eBay",
    },
    industry: "eCommerce",
    logo: {
      url: "https://images.ctfassets.net/rz1oowkt5gyp/6fuM8z1xpeF4hbcwea2bVV/9307ee47c45122c399c33b7536024bd6/ebay.svg",
      height: 120,
      width: 300,
    },
  },
  {
    quote:
      "Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others.",
    person: {
      name: "KERRY PARKER-EVANS",
      jobTitle: "IT Project Manager, Egencia",
    },
    industry: "Travel",
    logo: {
      url: "https://images.ctfassets.net/rz1oowkt5gyp/II3Kz8QYmBOB2hZw2OpWa/019c22804631400fc7ed850908c5829c/egencia.svg",
      height: 38,
      width: 300,
    },
  },
  {
    quote:
      "Trello makes it easy to keep everyone on the same page. As changes happen, the real-time updates with email notifications have been key.",
    person: {
      name: "HAYDON DOTSON",
      jobTitle: "Sales Manager, Detroit Red Wings",
    },
    industry: "Sport",
    logo: {
      url: "https://images.ctfassets.net/rz1oowkt5gyp/7lYMIrJ4C3qzbliMFrounD/42b0bd6e2a60c2685289b2fdb161f208/detroit-red-wings.svg",
      height: 186,
      width: 280,
    },
  },
  {
    quote:
      "Now that we've switched to a remote environment, with the use of Trello, we can now limit the number of meetings we have regarding specific projects and turn to Trello for updates instead.",
    person: {
      name: "HALEY ENNES",
      jobTitle: "HR Manager, Sprout Social",
    },
    industry: "Marketing",
    logo: {
      url: "https://images.ctfassets.net/rz1oowkt5gyp/7nXolb9JdcJnMUUnrq4HGO/79745cbc1df4920d6596db73d065897a/sprout-social.svg",
      height: 179,
      width: 260,
    },
  },
]);
</script>

<template>
  <div>
    <v-container fluid class="home-container">
      <v-row class="inner">
        <v-col cols="10" sm="6" md="7">
          <h1 class="home-header">Trello helps teams move work forward.</h1>
          <p class="home-description mt-2">
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is
            unique—accomplish it all with Trello.
          </p>

          <v-row class="mt-7">
            <v-col cols="10" sm="6" md="8">
              <v-text-field
                class="home_email-text-field"
                placeholder="Email"
                solo
                hide-details
                flat
                background-color="#fff"
              ></v-text-field>
            </v-col>
            <v-col cols="6" md="4">
              <v-btn
                elevation="0"
                color="#0065ff"
                class="blue-button home-btn"
                href="http://localhost:5173/signup"
                >Sign up - it’s free
              </v-btn>
            </v-col>
          </v-row>
          <div class="home_watch-video mt-7 ml-4">
            <h1>Watch Video</h1>
            <v-icon :size="28">mdi-play-circle-outline</v-icon>
          </div>
        </v-col>

        <v-col cols="6" md="5">
          <img
            class="home-main-image mt-n7"
            src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp"
            alt="Image"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div class="inner2 features">
        <hr />
        <FeatureList :features="features" />
        <hr />
      </div>
    </v-container>
    <v-container class="inner2 second-section text-center">
      <h1>It’s more than work. It’s a way of working together.</h1>
      <!-- eslint-disable max-len -->
      <p>
        Start with a Trello board, lists, and cards. Customize and expand with
        more features as your teamwork grows. Manage projects, organize tasks,
        and build team spirit—all in one place.
      </p>
      <!-- eslint-enable max-len -->
      <v-btn class="blue-button thick" elevation="2" color="#0065ff"
        >Start doing</v-btn
      >
      <br />

      <!-- eslint-disable max-len -->
      <img
        class="mt-7 trello-board-img"
        src="https://images.ctfassets.net/rz1oowkt5gyp/7pYWhpQ3vnntxoShaImNws/777fabbf069416489167ab92027ce086/board.png?w=1200&fm=webp"
        alt="Illustration of a team Trello Board"
      />

      <p class="mt-3">
        Join over 2,000,000 teams worldwide that are using Trello to get more
        done.
      </p>
      <!-- eslint-enable max-len -->
      <div class="companies">
        <img
          v-for="(value, index) in companies"
          :key="index"
          :src="value"
          alt="Company Image"
        />
      </div>

      <ExtraFeatureList
        :features="extra_features"
        @onLearnMoreClick="
          (index) => {
            extra_features.value[index].isOpened =
              !extra_features.value[index].isOpened;
          }
        "
      />
    </v-container>
    <ClientTestimonials :testimonials="testimonials" />
    <div class="inner2 third-section">
      <p>
        Sign up and get started with Trello today. A world of productive
        teamwork awaits!
      </p>

      <div class="bottom">
        <v-text-field
          class="home_email-text-field"
          placeholder="Email"
          solo
          hide-details
          flat
          color="#fff"
        ></v-text-field>
        <v-btn elevation="0" color="#fff" class="grey-button thick"
          >Sign up</v-btn
        >
      </div>
    </div>
    <div class="app-section">
      <div class="inner2">
        <p>Trello also works great on your smaller screen.</p>
        <img
          src="https://images.ctfassets.net/rz1oowkt5gyp/1A08O96pP0xMdLEGWQsqFl/1bdabd473356ca3f47b6f2bc1c4dd710/app-store.svg"
          alt="Download on app store"
          width="217"
          height="64"
        />
        <img
          src="https://images.ctfassets.net/rz1oowkt5gyp/ySXuMiOD6CoFYE7olrufg/612dce982aca4bbe1218b703f8541544/play-store.svg"
          alt="Download on play store"
          width="217"
          height="64"
        />
      </div>
    </div>
  </div>
</template>

<style>
.home-container {
  background: linear-gradient(rgb(234, 230, 255), rgb(255, 255, 255)) no-repeat;
}

.v-row.inner {
  margin: 7.5vh auto 0 auto;
}

hr {
  width: 100%;
  height: 1px !important;
  border: none;
  background: #c1c1c1;
}

.inner2.features {
  margin: 3.5vh auto 0 auto;
}

.inner2.second-section {
  padding: 3rem 1rem 1rem;
  margin: 0 auto;
}

.bottom input {
  background: #fff!important;
  color: black;

  margin: 0!important;
}

.home-header {
  font-size: 3rem;
  font-family: "Charlie Display Semi Bold", sans-serif;
  line-height: 1.2;
}

.home-description {
  font-size: 20px;
  font-family: "Charlie Display", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
}

.home-main-image {
  width: 80%;
  margin-left: 20%;
}

.home_email-text-field {
  border: 1px solid rgb(223, 225, 230);
}

.inner .col-sm-6 .v-row {
  width: 87.5%;
}

.blue-button {
  color: white !important;

  font-size: 1rem;
  font-family: "Charlie Text", sans-serif;
  font-weight: 500;
  text-transform: none !important;

  transition: 250ms;
}

.grey-button {
  color: #172b4d !important;

  font-size: 1rem;
  font-family: "Charlie Display Semi Bold", sans-serif;
  font-weight: 500;
  text-transform: none !important;

  transition: 250ms;
}

button.thick {
  height: 50px !important;
}

.blue-button.home-btn {
  height: 100% !important;
}

.blue-button:hover {
  background: rgb(7, 71, 166) !important;
  transition: 400ms;
}

.home_watch-video {
  display: flex;
  align-items: center;
  gap: 10px;
}

.home_watch-video span {
  margin-top: 8px;
}

.home_watch-video h1 {
  font-size: 1rem;
  font-family: "Charlie Text", sans-serif;
  text-decoration: underline;
}

.home_watch-video span,
.home_watch-video h1 {
  color: rgb(0, 82, 204);
}

.second-section h1 {
  font-family: "Charlie Display", sans-serif;
  font-size: 2.25rem;
  margin: 0 0 8px;
}

.second-section p {
  font-family: "Charlie Text", sans-serif;
  font-size: 20px;
  margin: 0 0 24px;
}

.second-section .trello-board-img {
  width: 100%;
  padding: 0 calc(1rem + 72px) 0 calc(1rem + 72px);
}

.companies {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  width: calc(162px * 4 + 2rem);
  margin: 0 auto;
}

.companies img {
  height: 80px;
  width: 162px;
  padding: 0 1rem 1rem;
}

.inner2.third-section {
  background: linear-gradient(rgb(64, 50, 148), rgb(76, 154, 255)) no-repeat;

  border-radius: 0.5rem;

  padding: 1.5rem 3rem 2rem 3rem;
  color: white;

  display: grid;
  gap: 3rem;

  margin: -5rem auto 5rem auto;
}

.inner2.third-section p {
  font-family: "Charlie Text", sans-serif;
  font-size: 1.5rem;
  text-align: center;
}

.inner2.third-section .bottom {
  display: flex;
  justify-content: center;
}

.inner2.third-section input {
  margin-right: 1rem;
}

.bottom .v-input {
  flex: 0 0 auto !important;
  width: 376px;
  margin-right: 1.25vh;

  border-radius: 0.3rem;
}

.bottom .v-input,
.bottom .v-input__control,
.bottom .v-field,
.bottom .v-field__field,
.bottom input {
  height: 50px!important;
  min-height: 50px!important;
}

.app-section {
  background: rgb(250, 251, 252);
  color: rgb(9, 30, 66);

  width: 100%;

  border-radius: 0.5rem;

  padding-left: 1rem;
  padding-right: 1rem;
}

.app-section .inner2 {
  margin: 0 auto;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.app-section p {
  margin: 0;

  font-size: 20px;
  font-family: "Charlie Text", sans-serif;

  width: 66.6667%;

  text-align: right;
}

.app-section p,
.app-section img {
  padding: 1rem;
}

.app-section img {
  max-width: 100%;
  height: auto;
}

@media (min-width: 576px) {
  .inner,
  .inner2 {
    max-width: 540px!important;
  }
}

@media (min-width: 768px) {
  .inner,
  .inner2 {
    max-width: 720px!important;
  }
}

@media (min-width: 992px) {
  .inner,
  .inner2 {
    max-width: 960px!important;
  }
}

@media (min-width: 1200px) {
  .inner,
  .inner2 {
    max-width: 1140px!important;
  }
}
</style>
