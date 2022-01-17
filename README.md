# Pokedex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

After clone the repo please run `npm install` to install all dependencies.

Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project Structure

This Angular app is strutured in:
* `src/app/components` has all the component used in this project.

## Routes

There are three routes in this project:
* `/` home component displays all pokemon.
* `/pokemon/:id` contains all detail info of each pokemon.
* `/favorites` contains all favorites pokemons.

## Navigation

To go to favorites page:

![alt text](https://github.com/baguskna/pokedex/blob/develop/src/assets/images/navigate_to_fav.png)

To go to detail pokemon page:

![alt text](https://github.com/baguskna/pokedex/blob/develop/src/assets/images/navigate_to_detail.png)

To add pokemon to favorites:

![alt text](https://github.com/baguskna/pokedex/blob/develop/src/assets/images/add_to_fav.png)

To remove pokemon from favorites:

![alt text](https://github.com/baguskna/pokedex/blob/develop/src/assets/images/remove_to_fav.png)

## PWA and Native iOS and Android App

Before generating PWA and Native mobile app first thing to do is to generate production build app, by running:

`ng build`

## PWA

1. To run PWA locally we need to install `http-server`, in order to do that run `npm install -g http-server`.
2. Then go to dist folder by typing `cd/pokedex`.
3. Next run `http-server -p 8081`.
4. The app will run on port `8081`.

## Native iOS and Android App

To run native mobile app, I use [Capacitor Angular](https://capacitorjs.com/solution/angular)

### iOS

1. run `npx cap add ios` to add ios folder in project.
2. Then run `npx cap open ios`.
3. Next run `npx cap run ios` or on Xcode follow this command ![alt text](https://github.com/baguskna/pokedex/blob/develop/src/assets/images/ios_command.png)

** NOTES THAT THE APP IS LOADING VERY SLOW. THE WILLINGNESS TO BE PATIENT IS REQUIRED.

### Android

1. run `npx cap add android` to add ios folder in project.
2. Then run `npx cap open android`.
3. Next run `npx cap run android` or on Android Studio follow this command ![alt text](https://github.com/baguskna/pokedex/blob/develop/src/assets/images/running_android.png)

** NOTES THAT THE APP IS LOADING VERY SLOW. THE WILLINGNESS TO BE PATIENT IS REQUIRED.


