# Location-App

https://github.com/jpuranen/Location-App

### About this repository

This repository includes source files (can be found in the src-folder) for Location-App. 

With Location-App you can add coordinates to the map either by entering the coordinates into the form or by clicking the map.

### How to create Location-App project


1. Install Node.js

2. Install Angular CLI
```
npm install -g @angular/cli
```

3. Create new angular 2+ project
```
ng new my-location-app
```
4. Move to project folder (my-location-app)
```
cd my-location-app
```
5. Install Angular Google Maps (AGM) Core - Angular 2+ Google Maps components 
```
npm install @agm/core
```
6. Download the files of this repository into your project folder (src-folder)

7. insert your own apiKey into app.module.ts

### How to run the Location-App

1. Build the application, start a web server and open the url in defaul browser
```
ng serve -open 
```
2. Start the backend server (not included in this repository)
