<h1>
<img src=https://user-images.githubusercontent.com/27681148/47256814-f6bb2980-d485-11e8-8543-b2c9710535b6.png alt="Raven" width=35>&nbsp;Raven Notes&nbsp;
</h1>

Collaborative note taking without a fuss.

<p align="center">
  <img width="600" alt="main interface" src="https://user-images.githubusercontent.com/27681148/47255915-d1272380-d477-11e8-84ff-d08d35338e10.png">
</p>

# Idea

There are many note taking applications out there, so why build another one?

We came up with the idea while participating in a coding bootcamp. While a lot of people were taking amazingly detailed notes, sharing these notes was always a very time-consuming process. We wanted to build an option that encourages collaboration and sharing knowledge between peers.

This is what sets _Raven Notes_ apart:

- ✨ Unobtrusive interface
- 👫 Sharing by default
- 🐥 Keeping it simple

# Technologies

- [Electron](https://electronjs.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://github.com/redux-saga/redux-saga)
- [GraphQL](https://graphql.org)
- [Apollo Server](https://www.apollographql.com/server)
- [MySQL](https://www.mysql.com/)

# Showcase

<center>
  <table>
    <tr>
      <td><img width="240" alt="lauragift21" src="https://user-images.githubusercontent.com/27681148/47256944-b8bf0500-d487-11e8-902d-4493ac6c83c8.png"></td>
      <td><img width="240" alt="maracuja-juice" src="https://user-images.githubusercontent.com/27681148/47256946-bfe61300-d487-11e8-89a1-48ade57349e8.png"></td>
    </tr>
    <tr>
      <td><img width="240" alt="chdemko" src="https://user-images.githubusercontent.com/27681148/47256912-7269a600-d487-11e8-9da2-6275cd81ee5d.png"></td>
      <td><img width="240" alt="chendaniely" src="https://user-images.githubusercontent.com/27681148/47256915-831a1c00-d487-11e8-8838-98cdc4eb2989.png"></td>
    </tr>
    <tr>
      <td><img width="240" alt="lauragift21" src="https://user-images.githubusercontent.com/27681148/47256927-9200ce80-d487-11e8-942e-a2f6693a3d3b.png"></td>
      <td><img width="240" alt="maracuja-juice" src="https://user-images.githubusercontent.com/27681148/47256937-a04eea80-d487-11e8-8302-9305eda4a253.png"></td>
    </tr>

  </table>
</center>

# Get started

1. Clone the repository

```sh
> git clone https://github.com/carlhueffmeier/raven-notes.git
```

2. Install dependencies

```sh
> npm install
```

3. Configure your environment

```sh
> cp client-desktop/.env.example client-desktop/.env
# Edit client-desktop/.env

> cp server/.env.example server/.env
# Edit server/.env
```

4. Run the project

```sh
# Runs both client and server
> npm start

# Starts the desktop client
> npm run start:client

# Starts the server
> npm run start:server
```

# Authors

The initial version was the result of a two week group project in [Codeworks](https://codeworks.me/).

Original authors:

- Sae [@saerose](https://github.com/saerose)
- Rodrigo [@RodriFS](https://github.com/RodriFS)
- Nicola [@Nikko89](https://github.com/Nikko89)
- Carl [@carlhueffmeier](https://github.com/carlhueffmeier)

# Contributions

Contributions are always welcome! Please check the [`CONTRIBUTING.md`](CONTRIBUTING.md).
