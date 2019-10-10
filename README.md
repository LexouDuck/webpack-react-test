General notes on web developement and things to know, regarding packages and whatnot for HTML, CSS, JavaScript, TypeScript, React, GraphQL, Apollo

# HTML
---

### 0) HTML basic frame

The bare minimum template

```html
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title>My Home Page</title>
	</head>

	<body>
		<h1>Welcome to my website</h1>
		<p>Lorem Ipsum dolor sit amet</p>
	</body>

</html> 
```

---

### 1) List of HTML tags and attributes

_General Syntax_:

---

```html
<tag attr1="" attr2="" ... >CONTENT</tag>
```
For a container tag, eg. an HTML tag which holds content inside it (content ban be text, other HTML tags, etc)

```html
<tag attr1="" attr2="" ... />
```
For a standalone tag, such as a ReactJS component, or `<br/>`

---

_Heading tags_:

---

```html
<html lang="en-US">WEBPAGE CONTENT</html>
```
Usually encloses the entire HTML file (except for the `<!DOCTYPE html>` preceding it). Specifies language and encoding for the browser to interpret


```html
<head></head>
```
Where all page metadata (HTML preprocessor info) elements are kept, this includes `<style>`, `<script>`, `<title>`, tags/keywords for bots, character encoding (`<meta charset="">`), icon (see favicon.ico), browser compatibility information (`<meta http-equiv="" content="">`).
See more at https://www.w3schools.com/html/html_head.asp


```html
<title>PAGE TITLE</title>
```
Webpage title (what appears at the top of the browser or in the tab)


```html
<style>CSS</style>
```
CSS information, whether it be inline, or a call to some external source, see CSS section below


```html
<script src="...">
```
include an external script, or write one within the tag (can be JavaScript, PHP) (can also be within `<body>`).


```html
<noscript>
```
	Used to provide an alternative (such as an error message) for browsers where JavaScript has been disabled.


```html
<meta ... name="" content="">
```
Generally used to make responsive web pages (pages that dynamically adapt to the size etc of the platform on which they are viewed), or just generally adapt some of the pages properties and functionalities.
- `<meta charset="" />` defines the encoding.
- `<meta name="description" content="my page description" />`
- `<meta name="keywords" content="search, engine, keyword, list" />`
- `<meta name="author" content="John Doe" />`
- `<meta name="viewport" content="special-syntax-for-what-the-client-views" />`
- `<meta http-equiv="refresh" content="30" />` => refreshes web page automatically every 30 seconds


```html
<link rel="" href="">
```
	Used to import things such as styles or scripts from permanent mirrors somewhere else on the internet.



```html
<base href="base_relative_url" target="">
```
	Specifies the base URL and base target for all relative URLs in a page

---

_Page body tags_:



```html
<body>
```
	Contains the actual content of the webpage


```html
<h1> to <h6>
```
	Text headers in order of decreasing importance. h1 is a chapter, h6 smallest section division within a chapter.


```html
<label id="">
```


```html
<button type="" aria-labelledby="" onclick="">
```


```html
<a href="">
```
	Creates a hyperlink to address given in href


```html
<b>, <i>, <u>, <s>
```
	Bold (`<strong>` can also be used for better/more customisable style such as voice software reading webpages),
	italic (`<em>`, also usable, for the same reasons),
	underline,
	strikethrough


```html
<p>
```
	paragraph


```html
<br>
```
	Line break, newline


```html
<ul>, <li>
```
	non-enumerated list
	list item


```html
<table>, <tr>, <th>, <td>
```
	creates a table,
	creates a table row,
	creates a table header (element that looks more important than td),
	creates table data.


```html
<div ...>
```
	defines a section in a document (is "block" level)


```html
<span ...>
```
	defines a section in a document (is "inline" level), is often used as a container for some text


```html
<code>, <kbd>, <samp>, <var>, <pre>
```
	write text in a font like raw code snippets on the web
	write text in a font like keyboard keys, to represent user input
	write text in a font like a terminal output
	write text in a font like mathematical variables
	used to align `<code>` text by accepting line returns in the plaintext between `<code>` and `</code>`


```html
<form>
```
	Builds/contains form elements.


```html
<input ...>, <textarea ...>, <select ...>
```
	Used for fields in a form, syntax is specific and deserves more details.


```html
<img src="img.jpg" width="500" height="600" alt="The image contains X."> 
```
	Used to insert an image stored at "img.jpg" with corresponding width and height in pixel
	NB: alt replaces the image with some text if necessary (used for hovertext or the hearing impaired for example).


```html
<X class="MyClassName">
```
	Using "class" as an attribute allows you to apply anything that applies to said class everywhere it is called.


```html
<X id="MyElemId">
```
	Using "id" as an attribute allows you to apply anything to a specific element. Technically, it is functionally equivalent to using class, but for questions of style, class will apply to a group, while id should be reserved for specific elements. 


```html
<iframe src="URL" height="200" width="300" style="" name="">
```
	allows the embedding of another src, whether that be a webpage or a medium like an image or a video (from an URL, such as a youtube.com/embed/VIDEO_ID).


```html
<audio>
```
	allows embedding of audio such as ogg or mp3. Look here for precise syntax: https://www.w3schools.com/html/html5_audio.asp


```html
<video>
```
	allows embedding of video such as ogg or mp4. Look here for precuse syntax: https://www.w3schools.com/html/html5_video.asp


```html
<object>, <embed>
```
	Allows the embedding of plug-ins, such as Java applets


```html
<canvas>
```
	A container for JavaScript graphics. See more at https://www.w3schools.com/graphics/canvas_intro.asp
	https://www.html5rocks.com/en/tutorials/canvas/performance/


```html
<svg>
```
	A container for Scalable Vector Graphics. See more at https://www.w3schools.com/graphics/svg_intro.asp



---



### 2) Using The id Attribute

---

##### a) CSS

The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).

The id value can be used by CSS and JavaScript to perform certain tasks for the element with the specific id value.

In CSS, to select an element with a specific id, write a hash (#) character, followed by the id of the element:
Example

Use CSS to style an element with the id "myHeader":

```html
<style>
	#myHeader
	{
		background-color: lightblue;
		color: black;
		padding: 40px;
		text-align: center;
	}
</style>
```

Then call the style

```html
<h1 id="myHeader">My Header</h1>
```

---

##### b) JS

JavaScript can access an element with a specified id by using the getElementById() method.

Use the id attribute to manipulate text with JavaScript:
```html
<script>
	function displayResult()
	{
		document.getElementById("myHeader").innerHTML = "Have a nice day!";
	}
</script>
```





3) Element level 

Block level elements in HTML
```html
<address>
<article>
<aside>
<blockquote>
<canvas>
<dd>
<div>
<dl>
<dt>
<fieldset>
<figcaption>
<figure>
<footer>
<form>
<h1>-<h6>
<header>
<hr>
<li>
<main>
<nav>
<noscript>
<ol>
<p>
<pre>
<section>
<table>
<tfoot>
<ul>
<video>
```

Inline elements in HTML
```html
<a>
<abbr>
<acronym>
<b>
<bdo>
<big>
<br>
<button>
<cite>
<code>
<dfn>
<em>
<i>
<img>
<input>
<kbd>
<label>
<map>
<object>
<output>
<q>
<samp>
<script>
<select>
<small>
<span>
<strong>
<sub>
<sup>
<textarea>
<time>
<tt>
<var>
```

---


4) CSS (Cascading Style Sheets, lol wtf kinda name is that)

https://learnxinyminutes.com/docs/css/
https://learnxinyminutes.com/docs/sass/

The basic CSS syntax is 
	selector_str_name { property: value; property2: value2; ... }

CSS can be added to HTML elements in 3 ways:

    Inline - by using the style attribute in HTML elements
    Internal - by using a <style> element in the <head> section
    External - by using an external CSS file

    Examples:
    	 - Inline:		<h1 style="color:blue;">This is a Blue Heading</h1> 
    	 - Internal:	<head><style>h1 {color:blue;}</style></head> ... <h1>this is now blue</h1>
    	 - External:	<head><link rel="stylesheet" href="styles.css"></head> .... with stylesheet containing the appropriate CSS wished for the various element, in the syntax "h1 {color:blue; font-family:verdana;}"


To define a specific style for one special element, add an id attribute to the element:

	<p id="p01">I am different</p>
	
then define a style for the element with the specific id:

	#p01
	{
		color: blue;
	} 

Selectors:
	.my_class (preceding point)
	html_keyword (as is)
	#an_id (preceding hash)
	[has_attribute]
	[attribute="value"] (has attribute equal to "value")
	[attribute^="val"] (has attribute that starts with "val")
	[attribute$="ue"] (has attribute that ends with "ue")
	div.some-parent > .class-name { } (selects an element which is a child of another element)





5) Important CSS attributes

color
font-family
font-size
border
border-style
border-width
padding
margin
background-image





6) Character entities/ Escape sequences

In HTML one writes special sequences because of the syntactic role of some elements.
	"&lt;" for "<"
	"&gt;" for ">"
	"&nbsp;"" is a non-breaking space (a space which cannot be used to jump a line)
https://www.w3schools.com/html/html_entities.asp
https://www.w3schools.com/html/html_symbols.asp





7) HTML Forms
https://www.w3schools.com/html/html_forms.asp
https://www.w3schools.com/html/html_form_elements.asp
https://www.w3schools.com/html/html_form_input_types.asp
https://www.w3schools.com/html/html_form_attributes.asp





8) HTML Layouts

https://www.w3schools.com/html/html_layout.asp
In a nutshell, the reason why Bootstrap and all these JS frameworks like Angular and React were invented. Making a layout in pure HTML is a bitch, and don't even hope to make it interactive.





9) JavaScript

https://learnxinyminutes.com/docs/javascript/
http://www.jslint.com/
https://www.w3schools.com/jsref/default.asp
http://www.jsperf.com/

	-call: method for every function that takes an object and the function's arguments (knowing the object is used for previously unreferenced "this" in the function definition)
	-apply: method for every function that takes an object and an array with the function's arguments (especially useful if the function runs over an array, such as a fold/reduce type function; similar use of unreference "if")
	-bind: method for every function that takes an object and sets it for the unreferenced "this" (to be precise, it actually curryes the function, and partially applies argument in the order they are defined; with "obj/self/this" always being the first, hence the primary behavior of bind; to curry a function with no unreferenced object, just use "this" as the first argument to bind).

All time quantities JS are given in milliseconds (ie 5000 is 5 seconds).

let vs var:
	https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
	https://davidwalsh.name/for-and-against-let

NB: JavaScript has Automatic Semicolon Insertion, because fuck having the right to a clear programming style.

	return {
	    a: "A",
	    b: "B"
	};
	
	// vs.
	
	return // Semicolon automatically inserted here! Uh oh! //Seriously WTF Allman is the preferred programming style of like 60% of programmers, and for GOOD REASON (it's not like you're going to print your code on paper nowadays amirite), ECMA get your SHIT together xd
	{
	    a: "A",
	    b: "B"
	};

	As a suggested fix for this "feature", we /strongly/ recommend always having parenthese after a return keyword, and to fuck with those trying to force the ungodly K&R style on us, try the python-ey Pico style for return statements, or just create a variable for any return that should be multiline:

	return {
	    a: "A",
	    b: "B" 	};





10) TypeScript

https://www.typescriptlang.org/
https://learnxinyminutes.com/docs/typescript/
https://www.typescriptlang.org/docs/handbook/basic-types.html
https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html
https://2ality.com/2018/04/type-notation-typescript.html

-"interface" in TS works as a "typedef" in C (can be used either for function type renaming or object type definition)
-classes are general OO classes, in that they allow a constructor, implementation of methods, public and private attributes and methods, static members (reminder: a static element in OO, is a "class-level" not "instance-level" property, constants should be declared with const outside the class or readonly inside the class).

File extension
	.ts for normal typescript, .tsx for typescript with JSX


Compilation:
	tsconfig.json is a (required) file which gives info to the TS compiler: the command "npx tsc --init" can be used to generate it. More info: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

	rootDir and outDir give locations for where to run the TS compiler and return output respectively. Generally, you don’t want to keep the generated javascript in your source control, so be sure to add the build folder to your .gitignore

	Running:
		npm run build
	If you see no output, it means that it completed successfully.



11) Document Object Model (DOM)

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

Basically, the content of a web page as an object/data tree. The DOM allows the webpage's info to be accessed via various languages: it serves as an interface.

When you create a script–whether it's inline in a <script> element or included in the web page by means of a script loading instruction–you can immediately begin using the API for the document or window elements to manipulate the document itself or to get at the children of that document, which are the various elements in the web page.

Document and window objects are the objects whose interfaces you generally use most often in DOM programming. In simple terms, the window object represents something like the browser, and the document object is the root of the document itself.


The following is a brief list of common APIs in web and XML page scripting using the DOM.

    document.getElementById(id)
    document.getElementsByTagName(name)
    document.createElement(name)
    parentNode.appendChild(node)
    element.innerHTML
    element.style.left
    element.setAttribute()
    element.getAttribute()
    element.addEventListener()
    window.content
    window.onload
    console.log()
    window.scrollTo()





12) ReactJS Introduction

As simply put as possible, ReactJS is a framework used to create custom HTML tags (called components), that stores variables over normal HTML tags (called elements), to simplify the coding of complex webpages. Elements are written in a superset of JavaScript called JSX in which JavaScript and HTML syntax can be used together.

https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2/
https://reactjs.org/docs/hello-world.html

"In our experience, thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs."

Updating the UI is done through the call of the "ReactDOM.render(element, HTML_DOM_TreeNode)" function.

Debugging ReactJS:
https://github.com/facebook/react-devtools



12)A) Elements

Unlike browser DOM elements, React elements are plain objects, and are cheap to create.
React elements are necessarily declared with const, as they are immutable.
The only way to update the UI is to create a *new* element, and pass it to ReactDOM.render().

Instantiation:

	const element = (
	  <h1 className="greeting">
	    Hello, world!
	  </h1>
	);

	or

	const element = React.createElement(
	  'h1',
	  {className: 'greeting'},
	  'Hello, world!'
	);


A react element is composed of:
	-type: (ie, h1)
	-props: attributes (ie, className), children (subnodes in the DOM, such as the text within a div)


To "convert" an element to HTML, use:

	<div id="ID_X"></div> //in HTML file

	and

	const element = <h1>Hello, world</h1>;
	ReactDOM.render(element, document.getElementById('ID_X')); //in ReactJS file

	This will set the appropriate div with the appropriate text/element value


However, elements can also represent user-defined components (see below), in which case, React sees the element representing a user-defined component, and passes JSX attributes to this component as a single object. We call this object “props” (see below):

	function Welcome(props) {
	  return <h1>Hello, {props.name}</h1>;
	}
	
	const element = <Welcome name="Sara" />; //note the syntax, the tag is the component FunctionName, 'props' are the attributes
	ReactDOM.render(
	  element,
	  document.getElementById('root') //note that this refers to an element in the DOM
	);

	=> renders "Hello Sara" on the page:
	    - We call ReactDOM.render() with the <Welcome name="Sara" /> element.
	    - React calls the Welcome component with {name: 'Sara'} as the props.
	    - Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
	    - React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.



12)B) Components & Props

https://reactjs.org/docs/react-component.html

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”, for "properties") and return React elements describing what should appear on the screen. A valid React component accepts a single “props” object argument with data and returns a React element. In practice, the component's name is used as a capitalized HTML tag in a markup, while the props object will contain the attributes of that markup (accessed as props.attr1, props.attr2, etc).
Components can also be written as classes. This syntax is useful when dealing with states (see below).

Instantiation:

	//As a function:

	function Welcome(props) {
	  return <h1>Hello, {props.name}</h1>;
	}

	//As a class:

	class Welcome extends React.Component {
	  render() {
	    return <h1>Hello, {this.props.name}</h1>;
	  }
	}

NB: Always start component names with a CAPITAL LETTER. React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

NB: Components can refer to other components in their output, and can thus be composed. This lets us use the same component abstraction for any level of detail.

NB: Props are read-only. This is the #1 rule of React. All React components must act like pure functions (lambda expressions) with respect to their props. A component should/can never modify its own props. The inability to change props is why React uses states to circumvent this rule.

You can convert a function-component to a class-component in five steps:
    1- Create an ES6 class, with the same name, that extends React.Component.
    2- Add a single empty method to it called render().
    3- Move the body of the function into the render() method.
    4- Replace props with this.props in the render() body.
    5- Delete the remaining empty function declaration.



12)C) States and lifecycles

Basically, if we want a component to evolve over time, we need it to be a MyClass class-component and give it some extra info.

Adding a local state (making a component go from "stateless" to "stateful"):
	1- Replace this.props.attribute with this.state.attribute in the render() method:
	2- Add a class constructor that assigns the initial this.state:
	  	constructor(props) { //Class components should always call the base constructor with 'props'.
 			super(props);
 			this.state = {attribute: new Attribute()}; //any mutable attribute is stored here as JSON
 		}
	3- Remove the state-specific 'attribute' from the <MyClass attribute="" /> line in ReactDom.render()


To manage resources correctly, one must first "mount" (allocate) the component into the DOM the first time, and "unmount" (free) the DOM's component every time it changes. There are two methods (called "lifecycle methods") which React defines to be read at the appropriate times:

	componentDidMount() {	}
	componentWillUnmount() {	}

	-The componentDidMount() method runs after the component output has been rendered to the DOM.
	-The componentWillUnmount() method is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

These should be used in conjunction with 'this.setState()', called by other custom methods (themselves called by cDM and cWU), to schedule updates to the component local state.

NB: if you modify state directly, it will not update the DOM/re-render. One MUST use this.setState({attribute: "attrval"}).
NB: React may batch multiple setState() calls into a single update for performance. Therefore, this.props and this.state may be updated asynchronously, and you should not rely on their values for calculating the next state. For this reason, there is a polymorphic version of setState, which takes a function as an argument: this function should take as argument 'state' and 'props' and return the updated value as a JSX in curlybraces.
NB: if a given component has different elements that can be state-updated, React performs a merge on the object to obtain its new version, affecting only that which is to be state-updated.
NB: Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class. This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it. One can however hand a "this.state.attribute" to a child component through a basic JSX-in-curlybraces without trouble ("unidirectional data flow").



12)D) Event Handling

https://reactjs.org/docs/handling-events.html

NB: React events are named using camelCase, rather than lowercase.
NB: With JSX you pass a *function* as the event handler callback, rather than a string (of a *function call*, like in HTML).

	For example, the HTML:
	
		<button onclick="activateLasers()">
		  Activate Lasers
		</button>
	
	is slightly different in React:
	
		<button onClick={activateLasers}>
		  Activate Lasers
		</button>

NB: any class method should be bound to its class to avoid undefined errors. In JS, class methods are not bound by default (generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method); ie, in the class-component constructor, you need the following line (or else the callback will fail):
    this.myMethod = this.myMethod.bind(this);
    //Also see https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/

NB:Passing Arguments to Event Handlers: inside a loop it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:

	<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
	<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>


12)E) Conditionals

Pretty straightforward for anyone with a programming background (ternaries are also allowed). Keep in mind that code will become illegible fast with conditionals, so small components are a must.

Here are some more exotic uses of conditionals in ReactJS.

You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element, using sequencing order:

    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>

In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.


12)F) Lists & Keys

One can easily map JS lists to JSX/ReactJS elements with, you guessed it, array.map:

	const numbers = [1, 2, 3, 4, 5];

	const listItems = numbers.map((number) =>
	  <li>{number}</li>
	);

	//Some equivalent syntactic sugar:

	ReactDOM.render(
	  <ul>{listItems}</ul>,
	  document.getElementById('root')
	);

Generally though it's better practice to make a component for a specific type of list. However, you'll run into the issue of keys. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings (ie, the key could be listelem.toString()). Do note that keys used within arrays should be unique among their siblings. However they don’t need to be globally unique. Most often you would use IDs from your data as keys. When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort. We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. No key is needed when the component's props is a single value already extracted from the array; however in this case, it is better practice to hand both the value and a key to the component in the component markup.

	const listItems = mylist.map((listelem) =>
	    <ListItemComponent
	    	key={listelem.toString()}
	    	value={listelem}
	    />
	);

NB: Keys are never accessible by props, the "key" attribute above is special in that it serves as a hint to React, but is not a regular "props" data field: props.key is undefined.


12)G) Forms

https://reactjs.org/docs/forms.html

In HTML, various form elements each have their own current state. In React we use the form to have a full state

[TODO]


12)H) Lifting State Up

There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.


12)I) Composition vs Inheritance, and Higher Order Components

Because React cannot truly implement OO inheritance, building a reusable frame for components boils down to using composition (where it is possible), or better yet, using Higher Order Components.

TODO
https://reactjs.org/docs/composition-vs-inheritance.html

Containment
The use case here is when you have a container (box like structure), that can contain diverse types of elements within. props.children is a special field for sub-props unknown ahead of time; one can also use this scheme with a custom division of props.

Specialization (OO Inheritance)
In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props.

https://reactjs.org/docs/higher-order-components.html
Concretely, a higher-order component is a function that takes a component and returns a new component.
	const EnhancedComponent = higherOrderComponent(WrappedComponent, dataOrFunctionThatSpecializesTheComponent1, ...);

	or in more detail

	const higherOrderComponent = (WrappedComponent) => {
	  class HOC extends React.Component {
	    render() {
	      return <WrappedComponent />;
	    }
	  }
	    
	  return HOC;
	};


12)J) Global Context

https://reactjs.org/docs/context.html
TODO


12)X) Building a ReactJS app

Step 1: Break The UI Into A Component Hierarchy

The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. If you’re working with a designer, they may have already done this, so go talk to them! Their Photoshop layer names may end up being the names of your React components! The rule to follow is the single responsibility principle, that is, a component should ideally only do one thing.


Step 2: Build A Static Version in React 

Now that you have your component hierarchy, it’s time to implement your app. The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing.

To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props. props are a way of passing data from parent to child. If you’re familiar with the concept of state, don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.

Build your component hierarchy either top-down or bottom-up.


Step 3: Identify The Minimal (but complete) Representation Of UI State

To make your UI interactive, you need to be able to trigger changes to your underlying data model. React achieves this with state. To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: Don’t Repeat Yourself. Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand.

Let’s go through each one and figure out which one is state. Ask three questions about each piece of data:
    1- Is it passed in from a parent via props? If so, it probably isn’t state.
    2- Does it remain unchanged over time? If so, it probably isn’t state.
    3- Can you compute it based on any other state or props in your component? If so, it isn’t state.


Step 4: Identify Where Your State Should Live 

OK, so we’ve identified what the minimal set of app state is. Next, we need to identify which component mutates, or owns, this state. Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state. This is often the most challenging part for newcomers to understand, so follow these steps to figure it out:

For each piece of state in your application:
    -Identify every component that renders something based on that state.
    -Find a common owner component (a single component above all the components that need the state in the hierarchy).
    -Either the common owner or another component higher up in the hierarchy should own the state.
    -If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.


Step 5: Add Inverse Data Flow

Use callbacks to call a "setState" explicitly to change the state of a component higher in the hierarchy, so that other aspects of the webpage may depend on it.





13) JSX

https://reactjs.org/docs/jsx-in-depth.html

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

NB: You can put *any* valid JavaScript expression inside the curly braces in JSX. Be wary however: either quotes for tring literals, or curlybraces for a JavaScript expression, both at the same time can lead to errors. By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application, and can be used to stringify user input without risking an XSS attack.

Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function. The JSX code:

	<MyButton color="blue" shadowSize={2}>
	  Click Me
	</MyButton>

compiles into:

	React.createElement(
	  MyButton,							//component
	  {color: 'blue', shadowSize: 2},	//props
	  'Click Me'						//children
	)

and

	<div className="sidebar" />

compiles into:

	React.createElement(
	  'div',
	  {className: 'sidebar'},
	  null
	)





14) Advanced React Considerations

https://reactjs.org/docs/accessibility.html

	import { add } from './math.js';

https://reactjs.org/docs/error-boundaries.html
https://reactjs.org/docs/fragments.html

https://reactjs.org/docs/higher-order-components.html
Concretely, a higher-order component is a function that takes a component and returns a new component.
	const EnhancedComponent = higherOrderComponent(WrappedComponent);

https://reactjs.org/docs/optimizing-performance.html

https://reactjs.org/docs/portals.html

https://reactjs.org/docs/reconciliation.html
	=> explains in detail the tree-diffing/page updating algorithm

https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680
-> in particular,  lookup types:
doing Class['fieldName'] compiles to: 

https://templecoding.com/blog/2016/03/31/creating-typescript-typings-for-existing-react-components


15) React Native

	import React, {Component} from 'react';
	import {Text, View} from 'react-native';

    Instead of 'div' and 'span', you'll use native components like 'View' and 'Text'.





16) React with TypeScript

https://reactjs.org/docs/static-type-checking.html
https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter
https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

To use TypeScript, you need to:

    - Add TypeScript as a dependency to your project (npx tsc --init)
    - Configure the TypeScript compiler options
    - Use the right file extensions
    - Add definitions for libraries you use





17) React Native with React

https://github.com/Microsoft/TypeScript-React-Native-Starter
https://medium.com/@jonnykalambay/your-first-hybrid-app-in-15-minutes-react-native-on-the-web-2cc2646051e

yarn add react-scripts react-dom react-native-web react-art react-router-native react-router-dom






18) GraphQL

A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type. It is, if one is to caricature, a great language for a dynamic JSON generation/edition/management system over a database.


Service
	A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.


Operation
	operation types: 
		- query,
		- mutation,
		- subscription
	NB: Query fields are executed in parallel, mutation fields run in series (this allows fast reads, and clean writes).

	"Operation name" is a meaningful and explicit name for your operation (like a good function name). It is only required in multi-operation documents, but its use is encouraged because it is very helpful for debugging and server-side logging.


Query
	"query" keyword for GET/read operations that are named.
	Unnamed strings between curly braces correspond to anonymous query operations over data fields.
	Arguments can be used to hone-in on specific queries.

	Named query:
		query HeroNameAndFriends {
		  hero {
		    name
		    friends {
		      name
		    }
		  }
		}

	Anonymous query:
		{
		  hero {
		    name
		    # Queries can have comments!
		    friends {
		      name
		    }
		  }
		}

	Query over field with an argument:
		{
		  human(id: "1000") {
		    name
		    height
		  }
		}


Mutation
	"mutation" keyword for POST/write operations.

		mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
		  createReview(episode: $ep, review: $review) {
		    stars
		    commentary
		  }
		}

		#variables
		{
		  "ep": "JEDI",
		  "review": {
		    "stars": 5,
		    "commentary": "This is a great movie!"
		  }
		}


Variables
	In most applications, the arguments to fields will be dynamic, rather than a query string (which is messy and costly). This allows better parsing through data dictionaries.

	How to use variables:
		Replace the static value in the query with $variableName
		Declare $variableName as one of the variables accepted by the query
		Pass variableName: value in the separate, transport-specific (usually JSON) variables dictionary

	Variable definition:
		basic syntax is
			($variableName: VariableType, $varName2: VarType2)	#for declaring that variables are needed
			{"variablename": variable_value}					#in a separate part of the code, for instantiation
		this works just like the argument definitions for a function in a typed language. All declared variables must be either scalars, enums, or input object types. For more info, notably on syntax, see GraphQL Schema language page. https://graphql.org/learn/schema/

		Default values, required values:
			- default value with ($variableName: VariableType = default_value)
			- required value with "!" added right after VariableType (for lists, myField: [String!] means that the list itself can be null, but it can't have any null members, while [String]! must have at least one item, but that the item may be the 'null' element/pointer)



Types

The "type" keyword is used to define a type. 
Scalar types (defined in the standard):
	-ID
	-String #utf-8
	-Int
	-Float
	-Boolean
In most GraphQL service implementations, there is also a way to specify custom scalar types: the "scalar" keyword. Then it's up to your implementation to define how that type should be serialized, deserialized, and validated.
Enumeration types are a special kind of scalar that is restricted to a particular set of allowed values. They are declared with the "scalar" keyword.

type Character { 			#GraphQL Object Type, meaning it's a type with some fields
  name: String!				#field1, of type String
  appearsIn: [Episode!]!	#field2, of type Array of Episodes
}

Types are grossly put data trees.
	- We start with a special "root" object (of "Root" or "Query" type, the fundamental entry point), called "data" generally
    - We select a first-rank field "field1" on that
    - For the object returned by "field1", we select the subfields "sf1" and "sf2"

    Example:
    	Query:
    		{
			  field1 {
			    sf1
			    sf2
			  }
			}

		Return:
			{
			  "data": {
			    "field1": {
			      "sf1": "SF1_VALUE3",
			      "sf2": [
			        "SF2_VALUE1",
			        "SF2_VALUE4",
			        "SF2_VALUE6"
			      ]
			    }
			  }
			}


Interfaces
	An interface is an abstract data type that contains a list of field to be implemented for anything inheriting from that interface.
		interface InterfaceName {
			common_field1 : TypeA!
			common_field2 : TypeB
		}

		type SubInterfaceType implements InterfaceName {
			common_field1 : TypeA!
			common_field2 : TypeB
			particular_field1 : TypeC! 
		}

	Implementing a query over an interface requires the use of inline fragments. Meta fileds (__typename) are also useful.

Union types
	Union types are very similar to interfaces, but they don't get to specify any common fields between the types.
		union UnionTypeName = UnionCaseType1 | UnionCaseType2 | UnionCaseType3
	Implementing a query over a union also requires the use of inline fragments. Meta fileds (__typename) are also useful.

Schemas
	Schemas are a way to elaborate a common type system for GraphQL while staying language-agnostic.
	Within the schema, Query and Mutation are particular types.


Fragments
	"fragment" is akeyword used to construct a set of queries that can be reused. Useful when a series of queries can be complex. Fragments can be nested, but are invalid if they are self-referential/recursive.
		{
		  fragment_use1: hero(episode: EMPIRE) {
		    ...commonFragment
		  }
		  fragment_use2: hero(episode: JEDI) {
		    ...commonFragment
		  }
		}
		
		fragment commonFragment on QueriedDataType {
		  field_1
		  field_2
		  field_3 {
		    field_3a
		  }
		}

	NB: Variables in fragments: It is possible for fragments to access variables declared in the query or mutation.

		query NamedQueryWithArgs($arg1 : ArgType = default_val) {
			{
			  fragment_use1: hero(episode: EMPIRE) {
			    ...commonFragment
			  }
			  fragment_use2: hero(episode: JEDI) {
			    ...commonFragment
			  }
			}
		}
		
		fragment commonFragment on QueriedDataType {
		  field_1
		  field_2_needs_arg(arg1 : $arg1)
		  field_3 {
		    field_3a
		  }
		}

	Inline fragments: If you are querying a field that returns an interface or a union type, you will need to use inline fragments to access data on the underlying concrete type.

		query NamedQueryWithArgs($arg1 : ArgType = default_val) {
			{
			  field_1
			  ... on InterfaceType1 {
			    field2_of_interfacetype1
			  }
			  ... on InterfaceType2 {
			    field2_of_interfacetype2
			  }
			}
		}


Meta fields

	Given that there are some situations where you don't know what type you'll get back from the GraphQL service, you need some way to determine how to handle that data on the client. GraphQL allows you to request __typename, a meta field, at any point in a query to get the name of the object type at that point.


Directives 
	A directive can be attached to a field or fragment inclusion, and can affect execution of the query in any way the server desires. The core GraphQL specification includes exactly two directives:
		fieldName @include(if: Boolean)
			Only include this field in the result if the argument is true.
		fieldName @skip(if: Boolean)
			Skip this field if the argument is true.


Aliases
	Since the result object fields match the name of the field in the query but don't include arguments, you can't directly query for the same field with different arguments. Aliases let you rename the result of a field to anything you want and avoid such conflicts.

		{
		  alias1: super_field_name(arg1: ARG_VALUE_1) {
		    desired_query_subfield_name
		  }
		  alias2: super_field_name(arg1: ARG_VALUE_2) {
		    desired_query_subfield_name
		  }
		}


Object Input Types:
	In the GraphQL schema language, input types look exactly the same as regular object types, but with the keyword 'input' instead of 'type' (which corresponds to 'output' objects, which are the default I guess). They allow passing of complex objects as arguments - they are especially useful to handle mutations.


Validation
	GraphQL can be statically analyzed for query correctness.


Execution
	After being validated, a GraphQL query is executed by a GraphQL server which returns a result that mirrors the shape of the requested query, typically as JSON. GraphQL cannot execute a query without a type system.
	Queries are typically executed through a background function called the resolver (one for each field). Many GraphQL libraries will let you omit resolvers and will just assume that if a resolver isn't provided for a field, that a property of the same name should be read and returned - you can however provide a custom resolver for a complex query.

	A resolver function receives four arguments:
    - 'obj' The previous object, which for a field on the root Query type is often not used.
    - 'args' The arguments provided to the field in the GraphQL query.
    - 'context' A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database.
    - 'info' A value which holds field-specific information relevant to the current query as well as the schema details.

    See JS "Promises"


Introspection
	The introspection system allows the programmer to ask the GraphQL schema what queries it supports.
	We designed the type system, so we know what types are available, but if we didn't, we can ask GraphQL, by querying the '__schema' field, always available on the root type of a Query.

	__Schema, __Type, __TypeKind, __Field, __InputValue, __EnumValue, __Directive - These all are preceded with a double underscore, indicating that they are part of the introspection system.





19) Setup JS/TS/React/Webpack

https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter
https://webpack.js.org/

Mac:
	brew install npm
	npm install
	npm install webpack -g

"yarn add ..." can be replaced with "npm install -S ..."

Make sure that you have @types/react and @types/react-dom installed (https://definitelytyped.org/)

TO SETUP A NEW PROJECT:

$	npx create-react-app [folder_name] --typescript


19)A) Function Components

These can be written as normal functions that take a props argument and return a JSX element.

	type AppProps = { message: string }; /* could also use interface */
	const App = ({ message }: AppProps) => <div>{message}</div>;

Due to limitations in the compiler, function components cannot return anything other than a JSX expression or null, otherwise it complains with a cryptic error message saying that the other type is not assignable to Element.


19)B) Components

Within TypeScript, React.Component is a generic type (aka React.Component<PropType, StateType>), so you want to provide it with (optional) prop and state type parameters:

	type MyProps = {
	  // using `interface` is also ok
	  message: string;
	};
	type MyState = {
	  count: number; // like this
	};
	class App extends React.Component<MyProps, MyState> {
	  state: MyState = {
	    // optional second annotation for better type inference
	    count: 0
	  };
	  render() {
	    return (
	      <div>
	        {this.props.message} {this.state.count}
	      </div>
	    );
	  }
	}





X) Libraries which could be useful

https://konvajs.org/api/Konva.html
https://medium.com/@lavrton/using-react-with-html5-canvas-871d07d8d753






X) AngularJS
https://learnxinyminutes.com/docs/angularjs/





GraphQL with React: using Apollo

https://www.apollographql.com/docs/react/data/queries/

https://graphqlmastery.com/blog/react-hooks-in-apollo-client-for-graphql-queries-and-mutations

https://www.howtographql.com/react-apollo/6-more-mutations-and-updating-the-store/

