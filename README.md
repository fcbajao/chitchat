# chitchat

A simple chat web app as my playground for Rails and React, overly engineered for fun and learning.

## Prerequisites

These are the versions that I used on my dev environment. I didn't test the app on lower or higher versions:

* PostgreSQL 9.5
* Ruby 2.3.3
* Node v7.7.4

## Background

I wanted to build an app where I could practice and learn more about React and Rails 5, specially using the new Webpacker and applying React/JavaScript best practices. I hope that other devs can learn something useful from my implementation.

These are the notable tools/libraries/frameworks that I used:

* Rails 5
* Webpacker (with `webpacker:install:react`)
* ActionCable (Websocket for chat)
* SimpleCommand (Gem for writing service objects)
* JWT (JSON Web Token for authentication)
* RSpec
* ES6
* StandardJS (For JS linting)
* Flow (For static typing)
* React
* Redux
* redux-saga (For better and cleaner management of side-effects)
* React Router v4
* Redux Form v6

## TODOS

The app still has a long way to go and there are more tools that I need to explore. Here are the things that I still need to add:

- [ ] Add jest tests
- [ ] Add CI build
- [ ] HMR
- [ ] Add support for storing token in localStorage
- [ ] Show previous messages
- [ ] Show online users
- [ ] Use Docker

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* Thank you internet for all the helpful resources and smart people.
