![Logo](https://user-images.githubusercontent.com/54480523/192051819-588aa5f9-a5b7-4b31-a6b9-1001bb4b5041.png)
This is just a clone of trello that I have started working on.<br>
I plan to have it up an running in around a week of work although it wont be fully finished in that time frame.

# Requirements:

- [NPM / Node.js](https://nodejs.org/en/)
- [Firebase Database](https://firebase.google.com/)

# Installation:

Download all the files and put them into a folder.<br>
Open the console and navigate to the folder you put all of those folders into.<br>
Run `npm i` to install all the node modules.
<br><br>
Open [Firebase](https://console.firebase.google.com/u/0/) and create a project and open the Build tab and click Authentication,<br>
Sign-in methods and add Email/Password as a new provider

### Start dev server

Run `npm run dev` in the console, this will start a dev server which is accessible at `http://localhost:5173`

### Build application

Run `npm run build` in the console, this will build the files into the `dist` folder. Keep in mind that this requires server hosted to work (obviously)

# Contribute

We are very happy to get help and potential contributions for this project.<br>
If you find an issue then open an issue in the github page. If you want to fix an issue then simply create an Pull Request and we we will look over it ! :)
<br><br>

# Technologies:

#### Frontend:

- Vue 3.0
- Vite
- VueRouter
- Vuetify
- MDI Icons

#### Backend:

- Firebase

  <br><br>

# Done:

- Home page
- Login & Signup Design
- Footer
- Main workflow
- Start using Vite
- Migrate to Vue 3

# Todo:

- Add the actual functionality / trello cards
- Add google recaptcha
- Add email verification
- Add password resetting
