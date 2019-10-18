[ci.tests-master-badge]: https://circleci.com/gh/eugene-matvejev/react.js-carousel-example/tree/master.svg?style=svg
[ci.tests-master]: https://circleci.com/gh/eugene-matvejev/react.js-carousel-example/tree/master
[ci.coverage-master-badge]: https://codecov.io/gh/eugene-matvejev/react.js-carousel-example/branch/master/graph/badge.svg
[ci.coverage-master]: https://codecov.io/gh/eugene-matvejev/react.js-carousel-example/branch/master

[ci.tests-heroku-badge]: https://circleci.com/gh/eugene-matvejev/react.js-carousel-example/tree/heroku.svg?style=svg
[ci.tests-heroku]: https://circleci.com/gh/eugene-matvejev/react.js-carousel-example/tree/heroku
[ci.coverage-heroku-badge]: https://codecov.io/gh/eugene-matvejev/react.js-carousel-example/branch/heroku/graph/badge.svg
[ci.coverage-heroku]: https://codecov.io/gh/eugene-matvejev/react.js-carousel-example/branch/heroku

|                  | master                                                      | heroku
|---               |---                                                          |---
| __tests__        |
| _< Circle CI >_  | [![tests][ci.tests-master-badge]][ci.tests-master]          | [![tests][ci.tests-heroku-badge]][ci.tests-heroku]
| __coverage__     |
| _< codecov.io >_ | [![coverage][ci.coverage-master-badge]][ci.coverage-master] | [![coverage][ci.coverage-heroku-badge]][ci.coverage-heroku]

[DEMO](https://carousel-demo.herokuapp.com/) it might take a while for first load, as it is 'free tier' heroku account

# Carousel DEMO
## TODO:
* DONE - Code structure, quality and consistency
* DONE - Technology choices
* DONE - Accessibility
* WIP - Cross browser compatibility
* DONE - Responsiveness
* WIP - Attention to detail
* DONE - Clear documentation
* DONE - Dependency management
* DONE - Test quality


## THIS IS SPARE TIME PROJECT, WORK IN PROGRESS!

## software requirements

* [node.js](https://nodejs.org/) v10+
* [npm](https://www.npmjs.com/) v6+ or [yarn](https://yarnpkg.com/)

## used technologies

* [react.js](https://reactjs.org/) v16+
* [enzyme](http://airbnb.io/enzyme/) v3+
* [jest](https://facebook.github.io/jest/) v23+
* [sass](https://sass-lang.com/)

## user services

* [CircleCI](https://circleci.com/)
* [codecov](https://codecov.io/)
* [snyk](https://snyk.io/)

  
## used enviroment variables

* __PORT__ - to serve assets from different port other than default [3000 for local development, 5000 for production]
  * example: `$ PORT=8080 npm start`
 
## how to install
* `$ npm i`
* `$ npm start`
* __to assemble static assets__
  * `$ npm run build` - compile app and assets, compiled app will be located in __./build__ directory

## how to serve 'production' assets
* `$ npm run i`
* `$ npm run build`
* `$ npm run start:static` 

## how to run tests

### unit and functional tests
* `$ npm i`
* `$ npm test`
* functional 'jest' tests: `$ make test` or `$ npm test`
  * __optional__ [ 'jest' CLI params](https://facebook.github.io/jest/docs/en/cli.html), examples:
    * to collect coverage, example: `$ npm test -- --coverage`, report will be located in __./coverage__ directory
    * to run tests __only__ in specific file, example: `$ npm test src/carousel-item.jsx`

### intergration tests
* `$ npm i`
* `$ npm run start &`
* `$ cd utils/cypress`
* `$ npm test`
   
## gitlow

* master -> most upto date 'production' version
* heroku -> demo branch [master is not deployed to heroku with every push, because of constrains on 'free account']
* other branches -> 'feature branches' get merged into master
* coverage report check / CI build is mandatory checks for every PR to be merged in

# Publicis.Sapient Front End Senior Associate Test

## Introduction
This is a standard test where we expect the developer to respond to several aspects:

1. Ensure the output reflects your understanding of the best current technology
2. Use of modular JavaScript patterns and/or a JS framework (e.g. Angular, Polymer, React, etc.) to build the necessary functionality
3. Show how a user interface can operate in different contexts 
3. Demonstrate your approach to using an API to retrieve data and content
4. Demonstrate your ability to deliver and enforce high code quality and maintainability
5. We'd like to see how you use Git in your workflow
6. Where possible to provide nice flourishes to demonstrate a flair

## Example of what you will be building

### Mobile
![Carousel Test Example Mobile](./carousel-mobile.png)
### Desktop
![Carousel Test Example Desktop](./carousel-desktop.png)

## Brief
Using the image above as a reference build a mobile-first carousel widget that cycles through six images via the `prev` and `next` buttons. These are styled differently depending on the viewport size.

To obtain the images please use our Pixabay account, details below. Once they are available to the app load them into the carousel and enable the functionality for the buttons.

Feel free to use whatever tools seem most appropriate for managing styles.

Please do not spend more than three hours on this test. **It's not important to complete the code** in the time that you have, but it is important that you are able to demonstrate your thinking via documentation and additional information.

We do not expect a high amount of unit test coverage for this project given the short timeframe. However, we are keen to see tests for the most important functions.

Keep the carousel itself quite simple in terms of how it responds; it doesn't need to snap. Concentrate on the quality of the code.

## Pixabay API
API url `https://pixabay.com/api/`
API key: `9656065-a4094594c34f9ac14c7fc4c39`
Documentation: `https://pixabay.com/api/docs/`
Example search: `https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo`
This will return an object with a `hits` property, which will be an array of images. Relevant properties in the request result are:
`hits[0].imageURL` 
`hits[0].user` 
`hits[0].likes`

### Typeface
Use `Ropa Sans` as the typeface for the text, which is available through [Google Fonts here](https://fonts.google.com/specimen/Ropa+Sans)

### Images
Use the SVG included in this directory for the arrow icons

![arrow](./arrow.svg)

## How it should work
* The 'active' carousel item is always centred in its container
* When you click the `prev` button, it should centre the previous item
* When you click the `next` button, it should centre the next item
* As you scale up the browser window more of the carousel becomes visible
* It should run in the last two versions of Chrome, Firefox, Safari and Edge

## Evaluation criteria
We will assess your work on the following basis:

* Code structure, quality and consistency
* Technology choices
* Accessibility
* Cross browser compatibility 
* Responsiveness
* Attention to detail
* Clear documentation
* Dependency management
* Test quality
* Git commit history


## Rules
* You can install any core library you like (e.g. React, Angular, Vue, etc.) **BUT…**
* Please **DO NOT** use a 3rd party carousel plugin - we want to see your JS skills

### Git
Please initialise a new git repository and commit your changes whenever you feel necessary. We will review your git commit history log.

# Conclusion
When you've finished, please zip up the repository and email it to your Publicis.Sapient hiring contact.
