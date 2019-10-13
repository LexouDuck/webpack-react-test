# CSS (Cascading Style Sheets) and SASS/SCSS
---



General Syntax
---

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



CSS Unit types
---

There are several CSS style commands which take number arguments, where you can use several numerical units:

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



CSS Selectors:
---

CSS applies styles to different HTML elements - as such, it has several rules to get the right HTML elements: these are called selectors.

- [Learn more](https://www.w3schools.com/cssref/css_selectors.asp)

##### HTML Tag

You can apply CSS styles to all occurences of an HTML tag by simply writing the tag name before brackets, like this:

```css
html { /* CSS style attributes */ }

a { /* The code here will affect all HTML <a> hyperlink elements */ }

p {
	color: #FFFFFF; /* Make all text inside <p> tags white */
}
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
#myID /* note the hashtag for the id selector */
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
	text-align: center; /* make all element which have myClass have text center-aligned */
}
```

---

##### Child selectors

```css
div.someParent > .someChild { /* code */ }
```
Selects any direct child which is a child of another element

```css
div.someParent .someChild { /* code */ }
```
Select any child element of `<div class="someParent">` which has the `someChild` class (so it can nested)

```css
div.someChild:nth-child(1) { /* this will affect the 1st child with the class "someChild" */ }
div.someChild:nth-child(2) { /* this will affect the 2nd child with the class "someChild" */ }
```

---

##### Other selectors

There are many other selectors for specfic situations of elements in CSS, here are some examples:

```css
a:hover { /* The code here will affect all <a> links, when the mouse is positioned above them */ }

p:last-child { /* This code will affect all <p> elements which are the last one within their parent element */ }
```

---



Important CSS attributes
---

##### display

- [Learn more](https://www.w3schools.com/css/css_display_visibility.asp)
- [Learn more about inline-block](https://www.w3schools.com/css/css_inline-block.asp)

---

##### position

- [Learn more](https://www.w3schools.com/css/css_positioning.asp)

---

##### margin & padding

These two attributes define how to space other elements around this element.
```css
a {
	margin: 20px 0px 10px 0px; 

	/* margin is a shortcut command for 4 sub-attributes: */
	margin-top: 20px;
	margin-right: 0px;
	margin-bottom: 10px;
	margin-left: 0px;
}
```

The margin is the _exterior_ spacing of the element, whereas the padding is the _interior_ spacing of the element.
This can be clearly seen by experimenting in your browser's "Inspect Element..." console.

```css
padding: ;
```

- [Learn more: margin](https://www.w3schools.com/css/css_margin.asp)
- [Learn more: padding](https://www.w3schools.com/css/css_padding.asp)

---

##### size

- [Learn more](https://www.w3schools.com/css/css_dimension.asp)

---

##### color

```css
color: #FFFFFF;
```

Sets the foreground color

- [Learn more](https://www.w3schools.com/css/css_colors.asp)

---

##### text styling

- [Learn more](https://www.w3schools.com/css/css_text.asp)

---

##### font

`font-family: MyFont,monospace;`
`font-size: 5rem;`

- [Learn more](https://www.w3schools.com/css/css_font.asp)

---

##### background

`background-color: ;`
`background-image: ;`

- [Learn more](https://www.w3schools.com/css/css_background.asp)

---

##### border

`border: ;`
`border-style: ;`
`border-width: ;`

- [Learn more](https://www.w3schools.com/css/css_border.asp)
- [Learn more about rounded borders](https://www.w3schools.com/css/css3_borders.asp)

---

##### overflow

- [Learn more](https://www.w3schools.com/css/css_overflow.asp)

---

##### flexbox

- [Learn more](https://www.w3schools.com/css/css3_flexbox.asp)

---

##### 3D transforms

- [Learn more](https://www.w3schools.com/css/css3_3dtransforms.asp)

---



CSS Transitions
---

The CSS transition rule is a powerful tool that allows you to make any style number smoothly change to whatever its new value is.

It'll most often be used for moving elements aroudn smmothly, fading things in or out, or animations, etc.

For example, if you have an image which you wish to smoothly fade out to half-transparent when the user positions their mouse above it, do:
```css
img.myImage
{
	opacity: 1;
	transition: opacity 1s ease-in-out;
}

img.myImage:hover
{
	opacity: 0;
}
```

The `transition` rule is actually a shortcut for several different properties:
```css
a {
	transition: width 2s linear 0.5s;
	/* the above line does the same thing as the 4 lines below */
	transition-property: width;
	transition-duration: 2s;
	transition-timing-function: linear;
	transition-delay: 0.5s
}
```

- [Learn more](https://www.w3schools.com/css/css3_transitions.asp)

---



Responsive design: CSS Media queries
---

- [Learn more](https://www.w3schools.com/css/css3_mediaqueries.asp)

---



Block-level, Inline-level elements
---

_Block-level elements in HTML_:

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

_Inline elements in HTML_:

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
