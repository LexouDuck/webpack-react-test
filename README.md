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
$ yarn add ...
```

It's essentially the same as:

```sh
$ npm install ...
```

When using Typescript, you also need to ensure the types for all the Javascript packages we're using (like React).
So by default, you should have `@types/react` and `@types/react-dom` installed (https://definitelytyped.org/)

For any other package, `npm` will usually warn you that you need to download the `@types/package` for your package.

If the type declarations for your package of choice do not exist, then you can create a 'declaration' file to define the types yourself (learn more [here](https://basarat.gitbooks.io/typescript/docs/types/ambient/d.ts.html))

Testing the project
---

Once everything is set up you just do:
```sh
$ npm start
```
And Node will start up a local server to test your application (by default on network port 3000), and so it will open a tab in your browser for the URL: `localhost:3000` in which you can try out your app/website locally.

Depending on your OS, npm might start Node in the background. If this happens, then you need a way to stop the Node server.
The simplest way to do this is to add a `stop` script: just add the following line in your `package.json`, under the `scripts` section:
```json
	...
	"scripts":
	{
		"start": "react-scripts start",
===>	"stop": "taskkill -F -IM node.exe",
		"build": "react-scripts build",
		...
	}
	...
```

---



Project Structure
---

A typical React (with Node/npm) project is organized as follows:

```
|- .gitignore			// The git ignore file states every file/folder that git shouldn't track for the remote repository
|- package.json			// The package file is what Node/npm uses to determine which packages are needed for the project
|- package-lock.json	// This file is like a "history" of all past dependency packages, to be able to backtrack through installations
|- tsconfig.json		// The Typescript configuration file defines the options/flags used to call the typescript-to-javascript compiler
|- README.md			// The readme file (markdown syntax, like this file you're reading) shows up on the project's main page
|
\___ node_modules		// The node_modules folder holds all the code for the packages you use, and their dependencies
|	|- subfolders		// one for each package
|	|- ...
|
\___ public				// The public folder holds files that are to be served "as is", without any compilation/preprocessing or other.
|	|- index.html		// The template HTML file: has a "<div id="root"></div> which is filled with React components
|	|- manifest.json	// The manifest file stores data that is used to describe the React app (like smartphone icon, launch properties, etc)
|	|- favico.ico		// The favicon is the icon your app uses as logo (.jpg/.png/.gif work, but .ico is better because it stores multiple sizes)
|	|- ...				// Other assets, see here: https://create-react-app.dev/docs/using-the-public-folder
|
\___ src				// The src folder holds all the code, and common assets like fonts, images, svg files, etc...
|	|- index.tsx		// The index file describes how to fill the template index.html file (by default, it puts "App" in the <div id="root">)
|	|- App.tsx			// The main "App" component (this is the HTML that will fill the inside of "<div id='root'></div>" of index.html)
|	|- App.test.tsx		// The testing suite for the "App" component (create-react-app installs jest by default, to test applications)
|	|- App.scss			// The main SCSS file, holding all the SCSS code which is to be processed into CSS code
|	|- serviceWorker.ts	// A file created by create-react-app which essentially allows the app to work offline
|	|- ...				// Other code files
|	|
|	\___ assets			// A folder to hold common assets to used in the app
|	|	|- logo.svg		// Images, SVGs, videos, etc
|	|	|- ...
|	|
|	|
|	\___ fonts			// A folder to hold fonts
|	|	|- font.otf		// different formats of fonts, fallback fonts, etc
|	|	|- font.ttf
|	|	|- font.svg
|	|	|- ...


```
- [Learn more about .gitignore syntax](https://git-scm.com/docs/gitignore)
- [Learn more about manifest.json](https://developers.google.com/web/fundamentals/web-app-manifest/)
- [Learn more about package.json](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/)
- [Learn more about package-lock.json](https://docs.npmjs.com/files/package-lock.json)
- [Learn more about tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [Learn more about MarkDown syntax for README files](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Learn more about Jest testing suites](https://jestjs.io/docs/en/tutorial-react)

---



Installing libraries
---

### React

Since we used `npx create-react-app`, everything should already be covered for react, you simply need to include react in your code:
```typescript
import * from "react";
import * from "react-dom";
```

But, we are using typescript - this means we need to install the type definitions for each package we include.
Here are some examples:

### react-router

React is a framework which has single-page applications in mind - if you wish to have a multiple-page website, you can use `react-router`:
```sh
$ npm install react-router
$ npm install @types/react-router
```

### SASS/SCSS

To install the scss preprocessor package, do:
```sh
$ npm install node-sass
```

There are no type definitions for SCSS, as it is simply a preprocessor to compile SCSS files into CSS.

https://medium.com/@lavrton/using-react-with-html5-canvas-871d07d8d753

---



Other libraries which could be useful (who knows ?)
---

### Konva

https://konvajs.org/api/Konva.html

### AngularJS (who knows ?)

https://learnxinyminutes.com/docs/angularjs/

### ZDog

https://zzz.dog/

---
