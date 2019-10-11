# CSS (Cascading Style Sheets)
---



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

### HTML Selectors:

-	HTML Tag:
```css
	html { /* style */ }
```
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
background-color
background-image




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
