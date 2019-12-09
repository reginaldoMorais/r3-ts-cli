<p align="center">
  <a href="https://github.com/reginaldoMorais/r3-cli-vscode-snippet">
    <img alt="r3-cli" src="https://i.ibb.co/Z8LwRJT/r3-cli-ts-logo.png" width="244">
  </a>
</p>

# R3-TS-CLI

Create React applications with server-side rendering using Redux and Router v4. Simple and very fast!
This CLI is a Typescript version of module [R3-CLI](https://github.com/reginaldoMorais/r3-cli.git).

## Installation

Run the command below, to have the module installed globally:

```bash
npm install -g r3-cli-ts
```

### Javascript version

For using Javascript version please access: [R3-CLI](https://github.com/reginaldoMorais/r3-cli.git)

## Usage

To see commands avaliable, run a single command with argument:

```bash
r3-cli-ts --help
```

To create a new Project, run the command:

```bash
r3-cli-ts
```

or

```bash
r3-cli-ts -c my-app
```

It will create a directory called `my-app` inside the current folder.

You will found the initial Project structure:

```note
my-app
├── .gitignore
├── package.json
├── README.md
├── node_modules
└── src
    ├── @types
    ├── app
    │   │
    │   ├── assets
    │   │   ├── fonts
    │   │   ├── images
    │   │   └── styles
    │   │
    │   ├── redux
    │   │   ├── ducks
    │   │   │   ├── home
    │   │   │   │   ├── actions.ts
    │   │   │   │   ├── index.js
    │   │   │   │   ├── sagas.js
    │   │   │   │   └── types.js
    │   │   │   │
    │   │   │   ├── rootReducer.ts
    │   │   │   ├── rootSagas.ts
    │   │   │   └── types.ts
    │   │   │
    │   │   ├── store
    │   │   │   ├── index.ts
    │   │   │   └── types.ts
    │   │   │
    │   │   └── utils
    │   │
    │   ├── lang
    │   ├── view
    │   │   ├── controller
    │   │   ├── pages
    │   │   │   ├── home
    │   │   │   │   ├── __test__
    │   │   │   │   ├── HomeStyles.ts
    │   │   │   │   ├── types.ts
    │   │   │   │   ├── Home.tsx
    │   │   │   │   └── HomeContainer.tsx
    │   │   │   │
    │   │   │   └── page-not-found
    │   │   │       └── PageNotFound.tsx
    │   │   │
    │   │   ├── shared
    │   │   │   └── SharedComponent.tsx
    │   │   │
    │   │   ├── templates
    │   │   │   ├── OutStyles.ts
    │   │   │   ├── In.tsx
    │   │   │   └── Out.tsx
    │   │   │
    │   │   └── Imports.ts
    │   │
    │   └── mobile (future feature)
    │
    ├── client
    ├── config
    ├── server
    │   ├── excludesExtensions.js
    │   ├── index.js
    │   ├── server.js
    │   └── template.js
    │
    └── utils
```

## Running your new Project

Inside the newly created Project, you need to set a Node version:

### Requisite

**NVM**

To easily switch Node versions for your Project, You can use [NVM](https://github.com/nvm-sh/nvm) command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
source ~/.bashrc
nvm install
nvm use
```

### Running

Afterward you can run some built-in commands:

```bash
npm start:dev
```

or

```bash
yarn start:dev
```

Your Project is ready to be accessed. Your can run the command **npm ls** or **yarn ls** to view available commands.

## Creating a new Route

To create a new route on your Project run the command bellow:

```bash
r3-cli-ts --route
```

A new route and view will automatically be created. It will be created the files:

./src/app/view/page/newView

```note
NewViewStyles.ts
type.ts
NewView.tsx
NewViewContainer.tsx
```

If you option to create a Redux structure it will be created the files:

./src/app/redux/ducks/newView

```note
actions.ts
index.ts
sagas.ts
types.ts
```

## So, enjoy the plugin and Thank you for use it!

[Reginaldo Morais](mailto:reginaldo.cmorais@gmail.com)
