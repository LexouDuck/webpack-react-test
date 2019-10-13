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

_Inline CSS_:

To style one particular HTML element with CSS, do:

```html
<h1 style="color: blue;">This is a Blue Heading</h1> 
```

This will modify the style of the element on which the style attribute is used.

_Internal CSS_:

To write CSS code within the HTML document, do:

```html
<head>
	<style>
		h1 {color:blue;}
	</style>
</head>
...
<h1>this is now blue</h1>
```

This will apply the given styles/selectors to the entire HTML page.

_Inlcude External CSS_:

To include an external ".css" file, do:

```html
<head>
	<link rel="stylesheet" href="styles.css">
</head>
...
```

This will apply the style rules defined in `styles.css` to the entire HTML document.

---

### CSS Unit types

```css
// absolute unit type

1px 	pixels (1px = 1/96th of 1in)
1cm 	centimeters
1mm 	millimeters
1in 	inches (1in = 96px = 2.54cm)
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
- [Learn more about unit types in CSS](https://www.w3schools.com/CSSref/css_units.asp)

##### CSS calc() function

The calc() function allows you to operate values with different unit types, like this:
```css
width: calc(100% - 50px);
```
- [Learn more about calc](https://www.w3schools.com/cssref/func_calc.asp)

---

### HTML Selectors:

---

##### HTML Tag

```css
html { /* style */ }
```

---

##### HTML id attribute selector

To define a specific style for one special element, add an id attribute to the element:

To define a style for the element with the specific id:
HTML:
```html
<p id="myID">I am different</p>
```
CSS:
```css
#myID // note the hashtag for the id selector
{
	color: blue;
}
```

---

##### HTML class selector

HTML:
```html
<p class="myClass">I am different</p>
```
CSS:
```css
.myClass
{
	text-align: center;
}
```

---

##### Child selectors

```css
div.someParent > .someChild { /* code */ }
```
Selects an element which is a child of another element

```css

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

---

### Block-level, Inline-level elements

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
