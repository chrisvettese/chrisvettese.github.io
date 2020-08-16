import basilI1 from "./images/basil/i1.jpg";
import basilI2 from "./images/basil/i2.jpg";
import basilI3 from "./images/basil/i3.jpg";
import basilI4 from "./images/basil/i4.jpg";
import daveWatcherI1 from "./images/daveWatcher/i1.jpg";
import daveWatcherI2 from "./images/daveWatcher/i2.jpg";
import daveWatcherI3 from "./images/daveWatcher/i3.jpg";
import bakeFromHomeI1 from "./images/bakeFromHome/i1.PNG";
import bakeFromHomeI2 from "./images/bakeFromHome/i2.PNG";
import bakeFromHomeI3 from "./images/bakeFromHome/i3.PNG";
import bakeFromHomeI4 from "./images/bakeFromHome/i4.PNG";
import fortressAllianceI1 from "./images/fortressAlliance/i1.png";
import fortressAllianceI2 from "./images/fortressAlliance/i2.png";
import fortressAllianceI3 from "./images/fortressAlliance/i3.png";
import fortressAllianceI4 from "./images/fortressAlliance/i4.png";
import fortressAllianceI5 from "./images/fortressAlliance/i5.png";
import mazescapeI2 from "./images/mazescape/i2.png";

import javaIcon from "./images/java.png";
import javascriptIcon from "./images/javascript.png";
import reactIcon from "./images/react.png";
import androidIcon from "./images/android.png";
import firebaseIcon from "./images/firebase.png";
import libgdxIcon from "./images/libgdx.png";

import githubIcon from "./images/github.png";
import devpostIcon from "./images/devpost.png";
import demoIcon from "./images/demo.png";

const languages = [[javaIcon, "Java"], [javascriptIcon, "JavaScript"], [reactIcon, "React"], [androidIcon, "Android"], [firebaseIcon, "Firebase"], [libgdxIcon, "libGDX"]];
const websites = [[demoIcon, "Demo Project"], [githubIcon, "GitHub"], [devpostIcon, "Devpost"]];

export const projects = {
    basil: {
        name: "Basil",
        description: "I collaborated on Basil for uOttaHack 2020. Basil is a web app that allows users to enter ingredients they have in their kitchen, and then matches these ingredients with recipes found across the internet. Basil then goes a step further by displaying the nutrition information for each recipe, and assigning each recipe as health rating to allow the user to determine which recipe is the healthiest.",
        links: [[websites[1], "https://github.com/kareemassad/basil"], [websites[2], "https://devpost.com/software/basil-94xomp"]],
        images: [basilI1, basilI2, basilI3, basilI4],
        captions: ["The home page of the app.", "Users can select from a list of suggested ingredients.", "Recipes are displayed based on the user's ingredients.", "Recipe information can be viewed in detail."],
        wideImage: true,
        languages: [languages[1], languages[2]]
    },
    daveWatcher: {
        name: "DaveWatcher",
        description: "Hundreds of millions of smartphones are thrown out each year. Many of these could have avoided landfill or recycling if they were repurposed. DaveWatcher is a home security app that uses machine learning to detect human and animal motion inside a home. It can be installed on any Android device with a camera. The app uses a Google Cloud machine learning library to distinguish between human and non-human motion.",
        links: [[websites[1], "https://github.com/chrisvettese/DeltaHacks2020"], [websites[2], "https://devpost.com/software/davewatcher"]],
        images: [daveWatcherI1, daveWatcherI2, daveWatcherI3],
        captions: ["The sign-in page.", "Each phone can either become a security camera, or control centre (user) that displays status information.", "Status of every camera in the user's network."],
        wideImage: false,
        languages: [languages[0], languages[3], languages[4]]
    },
    bakeFromHome: {
        name: "Bake From Home",
        description: "This is a React website made for a user interface design course. It demonstrates the ability to search for baking recipes in various ways. Plugins used include Material UI and React Router.",
        links: [[websites[0], "https://chrisvettese.github.io/bake-from-home/"], [websites[1], "https://github.com/chrisvettese/bake-from-home"]],
        images: [bakeFromHomeI1, bakeFromHomeI2, bakeFromHomeI3, bakeFromHomeI4],
        captions: ["The home page of the website.", "The website allows various ways of searching for recipes.", "Example of a recipe on the website.", "Each recipe has a review section (visual, reviews are not saved)."],
        wideImage: true,
        languages: [languages[1], languages[2]]
    },
    fortressAlliance: {
        name: "Fortress Alliance",
        description: "Fortress Alliance is a 2D multiplayer platform game written in Java with libGDX. The game consists of two teams that fight each other and aim to get the most kills before the timer runs out. It has a server, which hosts the game, a map maker program, which can be used to design levels, and a client that is used to play the game. Fortress Alliance demonstrates the use of object-oriented programming, efficient collision detection algorithms, and multithreading in Java.",
        links: [[websites[0], "https://github.com/chrisvettese/FortressAlliance#Setup"], [websites[1], "https://github.com/chrisvettese/FortressAlliance"]],
        images: [fortressAllianceI1, fortressAllianceI2, fortressAllianceI3, fortressAllianceI4, fortressAllianceI5],
        captions: ["A scene in the example map.", "The waiting screen.", "A fight between two players.", "When a player dies.", "Editing the map with the map maker."],
        wideImage: true,
        languages: [languages[0], languages[5]]
    },
    mazescape: {
        name: "Mazescape",
        description: "Mazescape is a cross-platform maze exploration game for desktop and Android. The player is placed in a randomly generated maze, and must complete a given mission. The game has enemies that use the A* pathfinding algorithm to track down the player.",
        links: [[websites[0], "https://github.com/chrisvettese/Mazescape"], [websites[1], "https://github.com/chrisvettese/Mazescape"]],
        images: ["https://www.youtube.com/embed/xHNZFTduW2w", mazescapeI2],
        captions: ["A video demonstration of the game.", "The player attacks an enemy."],
        wideImage: true,
        languages: [languages[0], languages[3], languages[5]]
    }
}