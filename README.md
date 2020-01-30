# Pixi Leaflet
solving the 10 million points in WOD for Leaflet using Pixi.js and Leaflet.PixiOverlay

# Install Leaflet
npm i leaflet

# Install Pixi JS
npm i pixi.js

# Install Leaflet.PixiOverlay
npm i leaflet-pixi-overlay

# Install D3 version 5.15.0
npm i d3

# WOD Data service
I am running a docker container for the ds_pgis_api in my local development environment to connect to the WOD13 database. You can change the url of the api to point to any instance of ds_pgis_api that you have access to. The only difference is that i have made some changes to the ds_pgis_api for the wod_envelope api call to support profile rankings.

# Run python simple http server
python -m SimpleHTTPServer 8000

browse to path /datasets/ALL this will return all datasets within the bounds near New Zealand and the dateline to see how rendering works for this area. 

there are other bounds in the file that can be uncommented out to see how it works in the following areas making sure to comment out the area you dont want to see

    // Indonesia
    //mapcoords = [-8.35891, 124.90296]
    //mapcoords = [-8.50512, 115.96023]
    // Solomon Islands
    //mapcoords = [-5.90145, 156.1256]
    //mapcoords = [-8.51821, 158.79483]