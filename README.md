# Build Your First Ionic App: Notes App (Ionic React and Capacitor)
Get started with Ionic by building a Notes app that runs on iOS, Android, and the web - with just one codebase.
Powered by [Ionic React](https://ionicframework.com/docs/react) (web app) and [Capacitor](https://capacitor.ionicframework.com) (native app runtime).

## How It Works
It is a Notes app which have two tabs, one is the home page where the notes are listed and another is the new note tab where you can create the new note and save it. These notes are saved in the local storage.

## Feature Overview
* App framework: [React](https://reactjs.org/)
* UI components: [Ionic Framework](https://ionicframework.com/docs/components)
  * Menu Tabs: [Tab-based navigation](https://ionicframework.com/docs/api/tabs)
  * Notes display cards: [Cards](https://ionicframework.com/docs/api/card)

## Project Structure
* Home page (`src/pages/Home/home.tsx`): Notes displaying page in the card view.
* New List page (`src/pages/New List/newList.tsx`): Creating a new note and saving it.
* Layout high order component (`src/hoc/layout.tsx`): Defines the structure of the application with routing.

## How to Run
> Note: It's highly recommended to follow along with the [tutorial guide](https://ionicframework.com/docs/react/your-first-app), which goes into more depth, but this is the fastest way to run the app. 

1) Install Ionic: `npm install -g @ionic/cli`.
2) Clone this repository.
3) In a terminal, change directory into the repo: `cd cs732-se75-assignment-mohatankita`.
4) Install all packages: `npm install`.
5) Run on the web: `ionic serve`.
6) Create the build: `ionic build`
7) Run on Android:
  - If capacitor is not installed, use this command to enable the capacitor: `ionic integrations enable capacitor`
  - Create the build: `ionic capacitor add android`
  - Run the build: `ionic capacitor run android`
  - For more info, See [here](https://ionicframework.com/docs/developing/android)
  - Creating virtual device on android: See [here](https://ionicframework.com/docs/developing/android#creating-an-android-virtual-device)
8) Run on iOS:
  - If capacitor is not installed, use this command to enable the capacitor: `ionic integrations enable capacitor`
  - Create the build: `ionic capacitor add ios`
  - Run the build: `ionic capacitor run ios`
  - For more info, See [here](https://ionicframework.com/docs/developing/android)

## Deployment
> Deploying to play store, See [here](https://ionicframework.com/docs/deployment/play-store)
> Deploying to app store, See [here](https://ionicframework.com/docs/deployment/app-store)
