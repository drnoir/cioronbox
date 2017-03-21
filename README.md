# Cioran Box 

## TIRED OF CONSTANTLY HITTING REFRESH TO REVIEW CODE CHANGES...

No more, client side code changes are pushed through to the browser in real time. Edit and review your CSS and DOM elements without leaving the editor

## DEVELOPMENT Mode

To run the app in development mode with 'hot loading' enabled run:

``
npm run app-dev
``

Open your browser at **http://localhost:4000**

The client side code is served by the 'webpack-dev-middleware' and is held in memory, no actual files are created.

Open **app/editor/build/components/App.css** and make a change to the CSS, such as change background colour, hold back a yippee as the browser immediately reflects the change.

You can also change mark up in the render() method of **app/editor/build/components/App.js**.

## PRODUCTION Mode

Build first to generates the public/bundles content:

``
npm run build
``

Then we run the app normally with webpack disabled using:

``
npm run app-live
``

or

``
node app
``

This will then use the final version of the client side code with no hot loading.
