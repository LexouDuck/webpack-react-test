This repo holds a small React-based fractal application which is a testing playground used to learn web dev with React/Typescript (and potentially GraphQL/Apollo)

# The README files

General notes on web developement and things to know, regarding packages and whatnot for HTML, CSS, JavaScript, TypeScript, React, GraphQL, Apollo

- [HTML Notes](https://github.com/LexouDuck/webpack-react-test/blob/master/README_HTML.md)
- [CSS Notes](https://github.com/LexouDuck/webpack-react-test/blob/master/README_CSS.md)
- [Javascript Notes](https://github.com/LexouDuck/webpack-react-test/blob/master/README_Javascript.md)
- [Typescript Notes](https://github.com/LexouDuck/webpack-react-test/blob/master/README_Typescript.md)
- [React Notes](https://github.com/LexouDuck/webpack-react-test/blob/master/README_React.md)
- [GraphQL Notes](https://github.com/LexouDuck/webpack-react-test/blob/master/README_GraphQL.md)

---

# Setting up React/Typescript/Node/Webpack

https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter
https://webpack.js.org/

Prerequisite: Node.js
---

##### Mac:

```sh
$ brew install npm
$ npm install
$ npm install webpack -g
```

##### Windows:

Install Node.js from the official website: https://nodejs.org/en/

---

Creating the project
---

To setup a new React project with typescript:

```sh
$ npx create-react-app [folder_name] --typescript
```

You use `npx` when creating the project, and then you can use the `npm` command inside the resulting project folder.

NPM stands for Node Package Manager, it's the tool you use to add libraries, packages, etc to your React app.

`yarn` is another package manager which people use, so if you see something like this:

```sh
yarn add ...
```

It's essentially the same as:

```sh
npm install ...
```

When using Typescript, you also need to ensure the types for all the Javascript packages we're using (like React).
So, you need to make sure that you have @types/react and @types/react-dom installed (https://definitelytyped.org/)

For any other package, `npm` will usually warn you that you need to download the `@types/package` for your package.
If these do not exist, then you can create a 'declaration' file to give out the types yourself (learn more (here)[https://basarat.gitbooks.io/typescript/docs/types/ambient/d.ts.html])


---

### Libraries which could be useful (who knows ?)

https://konvajs.org/api/Konva.html
https://medium.com/@lavrton/using-react-with-html5-canvas-871d07d8d753
TODO add ZDog

---

### AngularJS (who knows ?)
https://learnxinyminutes.com/docs/angularjs/

---
