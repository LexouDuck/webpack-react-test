# React (a framework for generating HTML that optimally updates itself)
---



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

### Function Components

These can be written as normal functions that take a props argument and return a JSX element.

	type AppProps = { message: string }; /* could also use interface */
	const App = ({ message }: AppProps) => <div>{message}</div>;

Due to limitations in the compiler, function components cannot return anything other than a JSX expression or null, otherwise it complains with a cryptic error message saying that the other type is not assignable to Element.

### Components

Within TypeScript, React.Component is a generic type (aka React.Component<PropType, StateType>), so you want to provide it with (optional) prop and state type parameters:

```typescript
type MyProps =
{
	// using `interface` is also ok
	message: string;
};
type MyState =
{
	count: number; // like this
};
class App extends React.Component<MyProps, MyState>
{
	state: MyState =
	{
		// optional second annotation for better type inference
		count: 0
	};

	render()
	{
		return (
			<div>
				{this.props.message} {this.state.count}
			</div>
		);
	}
}
```

---

# JSX

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

https://github.com/Microsoft/TypeScript-React-Native-Starter
https://medium.com/@jonnykalambay/your-first-hybrid-app-in-15-minutes-react-native-on-the-web-2cc2646051e

yarn add react-scripts react-dom react-native-web react-art react-router-native react-router-dom



16) React with TypeScript

https://reactjs.org/docs/static-type-checking.html
https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter
https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

To use TypeScript, you need to:

- Add TypeScript as a dependency to your project (npx tsc --init)
- Configure the TypeScript compiler options
- Use the right file extensions
- Add definitions for libraries you use

Redux
---

- Explanation: https://www.tutorialspoint.com/redux/redux_quick_guide.htm
- Typescript: https://redux.js.org/recipes/usage-with-typescript
- How to type redux with typescript: https://medium.com/knerd/typescript-tips-series-proper-typing-of-react-redux-connected-components-eda058b6727d
- Formatting/project structure: https://github.com/erikras/ducks-modular-redux



