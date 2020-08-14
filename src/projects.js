import basilI1 from "./images/basil/i1.jpg";
import basilI2 from "./images/basil/i2.jpg";
import basilI3 from "./images/basil/i3.jpg";
import basilI4 from "./images/basil/i4.jpg";
import daveWatcherI1 from "./images/daveWatcher/i1.jpg";
import daveWatcherI2 from "./images/daveWatcher/i2.jpg";
import daveWatcherI3 from "./images/daveWatcher/i3.jpg";

export const projects = {
    basil: {
        name: "Basil",
        description: "I collaborated on Basil for uOttaHack 2020. Basil is a web app that allows users to enter ingredients they have in their kitchen, and then matches these ingredients with recipes found across the internet. Basil then goes a step further by displaying the nutrition information for each recipe, and assigning each recipe as health rating to allow the user to determine which recipe is the healthiest.",
        links: ["https://github.com/kareemassad/basil", "https://devpost.com/software/basil-94xomp"],
        images: [basilI1, basilI2, basilI3, basilI4],
        captions: ["The home page of the app.", "Users can select from a list of suggested ingredients.", "Recipes are displayed based on the user's ingredients.", "Recipe information can be viewed in detail."]
    },
    daveWatcher: {
        name: "Dave Watcher",
        description: "Hundreds of millions of smartphones are thrown out each year. Many of these could have avoided landfill or recycling if they were repurposed. DaveWatcher is a home security app that uses machine learning to detect human and animal motion inside a home. It can be installed on any Android device with a camera. The app uses a Google Cloud machine learning library to distinguish between human and non-human motion.",
        links: ["https://github.com/chrisvettese/DeltaHacks2020", "https://devpost.com/software/davewatcher"],
        images: [daveWatcherI1, daveWatcherI2, daveWatcherI3],
        captions: ["The sign-in page.", "Each phone can either become a security camera, or control centre (User) that displays status information.", "Status of every camera in the user's network."]
    }
}