# Javascript (ECMAscript)
---



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


### HTML and Javascript


JavaScript can access an element with a specified id by using the getElementById() method.

Use the id attribute to manipulate text with JavaScript:

```html
<script type="text/javascript">
	function displayResult()
	{
		document.getElementById("myHeader").innerHTML = "Have a nice day!";
	}
</script>
```

https://developer.mozilla.org/en-US/docs/Web/API

