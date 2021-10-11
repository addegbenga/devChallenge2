<!-- Please update value in the {}  -->

<h1 align="center">Weather App</h1>

<div align="center">
   Solution for a challenge from  <a href="https://investondaba.notion.site/daba-Front-End-Advanced-Test-1-e75b281f295e4457acac147d70312ee2" target="_blank">daba front end advanced coding exercise</a>.
</div>

<div align="center">
  <h3>
    <a href="https://www.loom.com/share/9cba89695fba4371b91571a3878aa994">
      Demo
    </a>
    <span> | </span>
    <a href="https://weather-forecast007.netlify.app">
      Solution
    </a>
    <span> | </span>
    <a href="https://investondaba.notion.site/daba-Front-End-Advanced-Test-1-e75b281f295e4457acac147d70312ee2">
      Exercise
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://raw.githubusercontent.com/addegbenga/devChallenge2/main/public/assets/desktopside.png?raw=true")


- Where can I see your demo?

<a href="https://www.loom.com/share/9cba89695fba4371b91571a3878aa994">
      Check out the demo here real quick
</a>

- What was your experience building it.

Building this project has broaden my knowledge of my previous understanding of building things.
I got quite familiar with alot of external api's while working on this project.
One of my major challenge was getting user current location.
I needed to make the user experience to be sleek so my best option was getting user info from their Ip Address.
This approach was chosen so the user interface wont be altered when user decide to turn off their location.
Also i had challenges deploying to Vercel due to cors policy and majorly configuration issues.
So i opt for netlify which came to the rescue, i learnt how their configuration work when working with external api's
which only support http request for their free tier.
This was a major win for me because its create alot of ideas of what to build next as a side project.
Moving on i wll keep building and working on my skills thanks for reading to the end.


### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [meta-weather-api](https://www.metaweather.com/api/)
- [ip-geolocation](https://ipgeolocation.abstractapi.com)

## Features





What features did you develop?
<!-- List the features of your application or follow the template. Don't share the figma file here :) -->
<ul>
<li>user can current location weather by default</li>
<li>user can search for city and search will show your search query if available</li>
<li>user can see weather of today and the next 5 days</li>
<li>user can see weather status image for each type of weather </li>
<li>user can see additional info like humidity percentage, visibility indicator, and air pressure number about each weather when they click on it</li>
</ul>

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone git@github.com:addegbenga/devChallenge2.git

# Install dependencies
$ npm install

# Setup your ip
Get your api key from ip-geolocation and setup your http-proxy-middleware to proxy from /api/ to  https://ipgeolocation.abstractapi.com/v1/?api_key={api-key}.
This setup very important to run locally.

# Run the app
$ npm start
```