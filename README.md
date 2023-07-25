# Macys-Onboarding-Task

MockAPI -> Express -> Backbone + Marionette

## Requirements
https://griddynamics.atlassian.net/wiki/spaces/MCS/pages/1122271241/UI+interns+onboarding
 
Styling should be done with Foundation framework

Create an app showing a list of products, with ability to open an individual product page with it’s details(called PDP). Product image should be inspectable with the zoom. Here is a demo of zoom behavior - React Inner Image Zoom Component. 

Additional functions: ability to add selected products to cart. Products can be saved to localStorage.


We want as a basis to use some mock API service, that will give up product data. 

After getting data from the service we want to transform it by adding image to each of product. 

This will happen on intermediate BFF layer, which will be built based on express.js. 

BFF stand for “backend for frontend”. In our case it will be used for transformnig data and server side rendering (SSR). Server side document with the layout and data inserted will go to client along with link to prebuilt script with client logic. 

Client logic(like  zoomer feature) will be handled by Marrionette. Adding to cart also should be implemented with Marionette. It can be separate view that will listen click on “Add to bag” button via Backbone.Radio