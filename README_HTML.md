# HTML (HyperText Markup Language)
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



6) Character entities/ Escape sequences

In HTML one writes special sequences because of the syntactic role of some elements.
	`&lt;` for `<`
	`&gt;` for `>`
	`&nbsp;` is a non-breaking space (a space which cannot be used to jump a line)
	`&amp;` is an ampersand `&`
	`&copy;` for a copyright symbol
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