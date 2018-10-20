# Raven

<img width="600" alt="screenshot-1" src="https://user-images.githubusercontent.com/27681148/47255915-d1272380-d477-11e8-84ff-d08d35338e10.png">

Collaborative note taking without a fuss.

## The idea

There are many note taking applications out there, so why build another one?

We came up with the idea while participating in a coding bootcamp. While a lot of people were taking amazingly detailed notes, sharing these notes was always a very time-consuming process. We wanted to build an option that encourages collaboration and sharing knowledge between peers.

This is what sets _Raven Notes_ apart:

- ✨ Unobtrusive interface
- 👫 Sharing by default
- 🐥 Keeping it simple

## Getting started

To get started, first install all dependencies to run the project (desktop client and server).

```sh
> npm install
```

In order to run the project, you need to configure your environment by adding a custom `.env` file to the `/server` and `client-desktop` directory.

Look at the `.env.example` files for the required and optional settings.

Once configured, run the project with

```sh
# Runs both client and server
> npm start

# Starts the desktop client
> npm run start:client

# Starts the server
> npm run start:server
```
