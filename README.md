FeTest
======

To run this nodeJS app
----------------------

1. Clone this repro
2. cd app
3. npm install
4. ./bin/www

The app will be server on http://localhost:3000/

The Task
========

Create a widget that displays 5 Ad listing horizontally with titles and price.

DESKTOP
-------
```
-------------------------------------------------------------
|price      |price      |price      |price      |price      |
|           |           |           |           |           |
|           |           |           |           |           |
|           |           |           |           |           |
|title      |title      |title      |title      |title      |
-------------------------------------------------------------
```

PORTRAIT TABLET
---------------
The widget should display 3 ads on a portrait tablet device and a single ad on a phone.
On tablet and phone the widget should enable the user to click/tap and view the Ads not
in the view port. (A carousel)
```
      -------------------------------------
      |price      |price      |price      |
      |           |           |           |
<last |           |           |           | next>
      |           |           |           |
      |title      |title      |title      |
      -------------------------------------
```
PHONE
-----
```
      -------------
      |price      |
      |           |
<last |           | next>
      |           |
      |title      |
      -------------
```


The Ads should be load from data/data.json with an ajax request. Only ads with the category 'cars' should
be displayed so you will need to filter out some of the ads from the json.

Use any libs / tools you like.

Should take 6 hours or less.

Send us a link you your repository in git when done.


=================================================================

-I created a new /cars endpoint to be able to implement some backend logic and optimise the JSON filtering (since we are only interested on cars items). It make use of fs node module, make sure to run npm install before launching the app.

-The approach I used throughout the test has been mobile first, all the defaults settings (in both JS and CSS) are referring to the mobile scenario. Exceptions are made for tablets and desktops.

-For a simpler device detection I integrate a small 3rd party library called mobile-detect.js.

-I didn't have time to minify CSS and JS, this is obviously needed on production
