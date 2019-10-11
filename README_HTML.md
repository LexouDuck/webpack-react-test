# HTML (HyperText Markup Language)
---



### General Syntax

https://learnxinyminutes.com/docs/html/

There are essentially two kinds of syntax for HTML tags/elements:

```html
<tag attr1="" attr2="" ... >CONTENT</tag>
```
For a container tag, eg. an HTML tag which holds content inside it (content ban be text, other HTML tags, etc)

```html
<tag attr1="" attr2="" ... />
```
For a standalone tag, such as a ReactJS component, or `<br/>`

---

### Basic Template

Here is a bare-bones minimal template of what a typical HTML file looks like:

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

### List of HTML tags and attributes

---

##### _Heading tags_:

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
Metadata tags, generally used to make responsive web pages (pages that dynamically adapt to the size etc of the platform on which they are viewed), or just generally adapt some of the pages properties and functionalities.
- `<meta charset="utf-8" />` defines the type of text encoding (in this example, UTF-8)
- `<meta name="viewport" content="special-syntax-for-what-the-client-views" />`
- `<meta name="title" content="John Doe" />`
- `<meta name="author" content="John Doe" />`
- `<meta name="description" content="my page description" />`
- `<meta name="keywords" content="search, engine, keyword, list" />`
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

##### _Page body tags_:

```html
<body>
```
Contains the actual content of the webpage


```html
<h1> to <h6>
```
Text headers in order of decreasing importance. h1 is a chapter, h6 smallest section division within a chapter.


```html
<p>
```
Paragraph


```html
<b>, <i>, <u>, <s>
```
Bold (`<strong>` can also be used for better/more customisable style such as voice software reading webpages),
Italic (`<em>`, also usable, for the same reasons),
Underline,
Strikethrough


```html
<br/>
```
Line break, newline


```html
<hr/>
```
Horizontal separation line


```html
<ul>, <li>
```
Non-enumerated list
List item


```html
<a href="https://www.google.com">hypertext link</a>
```
Creates a hyperlink to address given in href (can be a URL, or an id of another HTML element)


```html
<div ...>
```
Defines a section in a document (is "block" level)


```html
<span ...>
```
Defines a section in a document (is "inline" level), is often used as a container for styling a particular section of some text


```html
<table>, <tr>, <th>, <td>
```
Creates a table,
Creates a table row,
Creates a table header (element that looks more important than td),
Creates table data.


```html
<code>, <kbd>, <samp>, <var>, <pre>
```
Write text in a font like raw code snippets on the web
Write text in a font like keyboard keys, to represent user input
Write text in a font like a terminal output
Write text in a font like mathematical variables
Used to align `<code>` text by accepting line returns in the plaintext between `<code>` and `</code>`


```html
<label id="">
```
A label


```html
<button type="" onClick="" />
```
A clickable button (has a default style which depends on the browser and the OS used - it can be styled manually with CSS)


```html
<form>
```
Builds/contains form elements.


```html
<input ...>, <textarea ...>, <select ...>
```
Used for fields in a form, syntax is specific and deserves more details.


```html
<img src="img.jpg" alt="The image contains X." width="500" height="600" /> 
```
Used to insert an image, the `alt` attribute is the alternate text to show up if the image doesn't load for whichever reason.
Optionally, you may also set the desired image width and height dimensions in pixels
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
Allows the embedding of another src, whether that be a webpage or a medium like an image or a video (from an URL, such as a youtube.com/embed/VIDEO_ID).


```html
<audio>
```
Allows embedding of audio such as ogg or mp3. Look here for precise syntax: https://www.w3schools.com/html/html5_audio.asp


```html
<video>
```
Allows embedding of video such as ogg or mp4. Look here for precuse syntax: https://www.w3schools.com/html/html5_video.asp


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

### Character entities/ Escape sequences

In HTML one writes special sequences because of the syntactic role of some elements.
- `&lt;` for `<`
- `&gt;` for `>`
- `&nbsp;` is a non-breaking space (a space which cannot be used to jump a line)
- `&amp;` is an ampersand `&`
- `&copy;` for a copyright symbol
https://www.w3schools.com/html/html_entities.asp
https://www.w3schools.com/html/html_symbols.asp



---

### HTML Forms

https://www.w3schools.com/html/html_forms.asp
https://www.w3schools.com/html/html_form_elements.asp
https://www.w3schools.com/html/html_form_input_types.asp
https://www.w3schools.com/html/html_form_attributes.asp



---

### HTML Layouts

https://www.w3schools.com/html/html_layout.asp
In a nutshell, the reason why Bootstrap and all these JS frameworks like Angular and React were invented. Making a layout in pure HTML is a bitch, and don't even hope to make it interactive.