# CSS (Cascading Style Sheets) and SASS/SCSS
---



### General Syntax

https://learnxinyminutes.com/docs/css/
https://learnxinyminutes.com/docs/sass/

The basic CSS syntax is like such:
```css
	selector_str_name { property: value; property2: value2; ... }
```

CSS can be added to HTML elements in 3 ways:
- Inline - by using the style attribute in HTML elements
- Internal - by using a `<style>` element in the `<head>` section
- External - by using an external CSS file

##### Examples:

Inline:

```html
	<h1 style="color:blue;">This is a Blue Heading</h1> 
```

Internal:

```html
	<head><style>h1 {color:blue;}</style></head> ... <h1>this is now blue</h1>
```

External:

```html
	<head><link rel="stylesheet" href="styles.css"></head> .... with stylesheet containing the appropriate CSS wished for the various element, in the syntax "h1 {color:blue; font-family:verdana;}"
```

---

### CSS Unit types

```css
// absolute unit type

1cm 	centimeters
1mm 	millimeters
1in 	inches (1in = 96px = 2.54cm)
1px 	pixels (1px = 1/96th of 1in)
1pt 	points (1pt = 1/72 of 1in)
1pc 	picas (1pc = 12 pt) 

// relative unit types

1% 	Relative to the parent HTML element's size
1vw 	Relative to 1% of the width of the viewport* 	
1vh 	Relative to 1% of the height of the viewport* 	
1vmin 	Relative to 1% of viewport's smallest dimension 	
1vmax 	Relative to 1% of viewport's largest dimension 	
1em 	Relative to the font-size of the element (2em means 2 times the size of the current font) 	
1rem 	Relative to font-size of the root element 	
1ex 	Relative to the x-height of the current font (rarely used) 	
1ch 	Relative to width of the "0" (zero) 	
```
[Learn more about unit types in CSS](https://www.w3schools.com/CSSref/css_units.asp)

##### CSS calc() function

The calc() function allows you to operate values with different unit types, like this:
```css
width: calc(100% - 50px);
```

[Learn more about calc](https://www.w3schools.com/cssref/func_calc.asp)

---

### HTML Selectors:

-	HTML Tag:
```css
html { /* style */ }
```

To define a specific style for one special element, add an id attribute to the element:
```html
	<p id="p01">I am different</p>
```
then define a style for the element with the specific id:
```html
	#p01
	{
		color: blue;
	} 
```

```css
	.my_class (preceding point)
	html_keyword (as is)
	#an_id (preceding hash)
	[has_attribute]
	[attribute="value"] (has attribute equal to "value")
	[attribute^="val"] (has attribute that starts with "val")
	[attribute$="ue"] (has attribute that ends with "ue")
	div.some-parent > .class-name { } (selects an element which is a child of another element)
```

---

### Important CSS attributes

`color: #FFFFFF;`
`font-family: MyFont,monospace;`
`font-size: 5rem;`
`border: ;`
`border-style: ;`
`border-width: ;`
`padding: ;`
`margin: ;`
`background-color: ;`
`background-image: ;`




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

### Using The HTML "id" Attribute

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
