# Motley
[![Build Status](https://travis-ci.org/coding-blocks/motley.svg?branch=master)](https://travis-ci.org/coding-blocks/motley)
[![downloads](https://img.shields.io/npm/dm/@coding-blocks/motley)](https://www.npmjs.com/package/@coding-blocks/motley)
[![npm version](https://badge.fury.io/js/%40coding-blocks%2Fmotley.svg)](https://badge.fury.io/js/%40coding-blocks%2Fmotley)

This project is just a bundle of common CSS that we use accross our frontend applications at Coding Blocks. It is based on [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) architecture and written using [Sass](https://sass-lang.com/). The purpose of this project is to make process of developing HTML and CSS loosely coupled with actual frontend project to allow easy contribution and scalability in terms of development effort.

## Demo

https://coding-blocks.github.io/motley

 ## Building and Running Motley Locally
 Building and running Motley in your local dev environment is very easy. Be sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/en/docs/install) installed, then follow the directions below. 
 
 1. Clone the source code

 `git clone https://github.com/coding-blocks/motley.git`

2. Change directory to `motley` and Install development dependencies

`cd motley`

 `yarn install`

3. Run a local development server

 `yarn start`
 
 Motley will start running on [localhost:9000](http://localhost:9000/).
 
 ## Directory Structure
 
 ```
  | sass/styles     contains sass files
  | examples
    - public        contains static assets
    - components    contains individual components
                    these are registered as partials and can be used in pages or other components
    - views         Individual pages, gets build into examples/html/*.html files
 ```
 
 # See Motley in Action
 
 Motley is used in the following websites - 
 
 1. [Coding Blocks Online](https://online.codingblocks.com)
 2. [Hacker Blocks](https://hack.codingblocks.com)
 2. [Coding Blocks Account Dashboard](https://account.codingblocks.com)

 ## Maintainers
 
 1. [Bipin Kalra](https://github.com/BipinKalra) 
 2. [Vibhu Dujari](https://github.com/vdvibhu20)
 3. [Abhishek Gupta](https://github.com/abhishek97)

 
 
