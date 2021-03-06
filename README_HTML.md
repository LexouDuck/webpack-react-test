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

# List of HTML tags and attributes

This list not exhaustive nor comprehensive, just meant to be a quick recap of the important elements and attributes:

---

### _Heading tags_:

---

```html
<html lang="en-US">
	...
</html>
```
Usually encloses the entire HTML file (except for the `<!DOCTYPE html>` preceding it). Specifies language and encoding for the browser to interpret

---

```html
<head>
	...
</head>
```
Where all page metadata (HTML preprocessor info) elements are kept, this includes `<style>`, `<script>`, `<title>`, tags/keywords for bots, character encoding (`<meta charset="">`), icon (see favicon.ico), browser compatibility information (`<meta http-equiv="" content="">`).
See more at https://www.w3schools.com/html/html_head.asp

---

```html
<title>PAGE TITLE | About</title>
```
Webpage title (what appears at the top of the browser or as the tab title)

---

```html
<style>/* inline CSS code */</style>
```
CSS information, whether it be inline, or a call to some external source, see [README_CSS.md](https://github.com/LexouDuck/webpack-react-test/blob/master/README_CSS.md)

---

```html
<script type="text/..." src="..."></script>
```
Include an external script, or write one within the tag (can be JavaScript, PHP) (can also be within `<body>`).
	
[Learn more](https://www.w3schools.com/Tags/tag_script.asp)

---

```html
<noscript>You must enable Javascript to run this</noscript>
```
Used to provide an alternative (such as an error message) for browsers where JavaScript has been disabled.

---

```html
<meta ... name="" content="" />
```
Metadata tags, generally used to make responsive web pages (pages that dynamically adapt to the size etc of the platform on which they are viewed), or just generally adapt some of the pages properties and functionalities.
```html
<meta charset="utf-8" /> <!-- defines the type of text encoding (in this example, UTF-8) -->
<meta name="viewport" content="width=device-width, initial-scale=1" /> <!-- special-syntax-for-what-the-client-views -->
<meta name="title" content="Website" />
<meta name="author" content="Company" />
<meta name="description" content="Website page description" />
<meta name="keywords" content="search, engine, keyword, list" />
<meta name="thumbnail" content="https://www.website.com/assets/thumbnail.png" /> The thumbnail is usually a screenshot of the websitè
<meta property="og:url" content="https://www.website.com" />
<meta property="og:title" content="Website" />
<meta property="og:image" content="https://www.website.com/assets/thumbnail.png" />
<meta property="og:description" content="Website page description" />
<meta http-equiv="refresh" content="30" /> <!-- refreshes web page automatically every 30 seconds -->
```
- [Learn more](https://www.w3schools.com/tags/tag_meta.asp)

---

```html
<link rel="" href="" />
```
Used to import things such as styles or scripts from permanent mirrors somewhere else on the internet.
- [Learn more](https://www.w3schools.com/Tags/tag_link.asp)

---

```html
<base href="http://www.base.url/" target="_blank" />
```
Specifies the base URL and base target for all relative URLs in a page
- [Learn more](https://www.w3schools.com/Tags/tag_base.asp)

---

### _Page body tags_:

---

```html
<body>
	...
</body>
```
Contains the actual content of the webpage, (usually a bunch of `<div>` tags and text content with `<p>` and `<h1-6>` tags)

---

```html
<h1>TITLE</h1>
<h2>TITLE</h2>
<h3>TITLE</h3>
<h4>TITLE</h4>
<h5>TITLE</h5>
<h6>TITLE</h6>
```
Text headers in order of decreasing importance.

You may style these however you wish in your CSS, but traditionally: h1 is largest, h6 is the smallest kind of sub-section title.

---

```html
<p>text</p>
```
Paragraph of text

---

```html
<b>bold text</b>
<i>italic text</i>
<u>underlined text</u>
<s>strikethrough text</s>
```
- **Bold text** (`<strong>` can also be used for better/more customisable style such as voice software reading webpages),
- _Italic text_ (`<em>`, also usable, for the same reasons),
- Underlined text
- ~~Strikethrough text~~
- [Learn more](https://www.w3schools.in/html-tutorial/phrase-tags/)

---

```html
<br/>
```
Line break, newline

---

```html
<hr/>
```
Horizontal separation line

---

```html
<ul>
	<li>list item</li>
	<li>...</li>
</ul>

<ol>
	...
</ol>
```
UL tag is unordered list: items are preceded by a dot
OL tag is ordered list, items are preceded by incrementing numbers

---

```html
<a href="https://www.google.com">hypertext link</a>
```
Creates a hyperlink to address given in href (can be a URL, or an id of another HTML element)

---

```html
<div class="" style="">
	...
</div>
```
Defines a section in a document, used for most hierarchical structure in the HTML file (is "block" level)

---

```html
<span class="" style="">
	...
</span>
```
Defines a section in a document (is "inline" level), is often used as a container for styling a particular section of some text

---

```html
<table>
	<tr>
		<th>1st column</th>
		<th>2nd column</th>
		<th>3rd column</th>
	</tr>
	<tr>
		<td>data 1</td>
		<td>data 2</td>
		<td>data 3</td>
	</tr>
	<tr>
		<td>25</td>
		<td>50</td>
		<td>75</td>
	</tr>
</table>
```
-`table` Creates a table,
-`tr` Creates a table row,
-`th` Creates a table header (element that looks more important than td),
-`td` Creates table data.
- [Learn more](https://www.w3schools.com/html/html_tables.asp)

---

```html
<code>...</code>
<pre>...</pre>
<kbd>...</kbd>
<samp>...</samp>
<var>...</var>
```
- `code` tag: display text in a monospace (syntax-colored) font like raw code snippets on the web
- `pre` tag: Used to align `<code>` text by accepting line returns in the plaintext between `<code>` and `</code>`
- `kbd` tag: Display text in a font like keyboard keys, to represent user input
- `samp` tag: Display text in a font like a terminal output
- `var` tag: Display text in a font like mathematical variables
- [Learn more](https://www.w3schools.in/html-tutorial/phrase-tags/)

---

```html
<img src="img.jpg" alt="The image contains X." width="500" height="600" /> 
```
Used to insert an image, the `alt` attribute is the alternate text to show up if the image doesn't load for whichever reason.
Optionally, you may also set the desired image width and height dimensions in pixels
NB: alt replaces the image with some text if necessary (used for hovertext or the hearing impaired for example).

---

### Interactive elements

```html
<iframe src="http://www.otherwebsite.com"></iframe>
```
Allows the embedding of another HTML document within this HTML document, whether that be a webpage or an embedded applet like an image viewer or a video player (from an URL, such as a youtube.com/embed/VIDEO_ID).
- [Learn more](https://www.w3schools.com/tags/tag_iframe.asp)

---

```html
<audio controls>
	<source src="sound.ogg" type="audio/ogg">
	<source src="sound.mp3" type="audio/mpeg">
	Your browser does not support the audio HTML tag.
</audio> 
```
Allows embedding of audio such as ogg or mp3.
- [Learn more](https://www.w3schools.com/html/html5_audio.asp)

---

```html
<video width="640" height="480" controls>
	<source src="movie.mp4" type="video/mp4">
	<source src="movie.ogg" type="video/ogg">
	Your browser does not support the video HTML tag.
</video> 
```
Allows embedding of video such as ogg or mp4.
- [Learn more](https://www.w3schools.com/html/html5_video.asp)

---

```html
<object data="sound.wav">
	<param name="autoplay" value="true">
</object> 
<embed src="flash-program.swf"> 
```
Allows the embedding of plug-ins (such as Java applets) or other external applications
- [Learn more about object](https://www.w3schools.com/Tags/tag_object.asp)
- [Learn more about embed](https://www.w3schools.com/Tags/tag_embed.asp)

---

```html
<canvas id="myCanvas"></canvas>
```
A container for JavaScript-based programmed graphics. 

- [Learn more - intro](https://www.w3schools.com/graphics/canvas_intro.asp)
- [Learn more - advanced](https://www.html5rocks.com/en/tutorials/canvas/performance/)
- [Learn more - React with HTML canvas](https://medium.com/@lavrton/using-react-with-html5-canvas-871d07d8d753)

---

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="#000000" stroke-width="5" fill="#888888" />
</svg>
```
A container for Scalable Vector Graphics (in fact, SVG files merely contain HTML text detailing the vectorial shapes)
- [Learn more](https://www.w3schools.com/graphics/svg_intro.asp)

---

```html
<button type="button" onClick="">Click Me!</button>
```
A clickable button (has a default style which depends on the browser and the OS used - it can be styled manually with CSS)
- [Learn more](https://www.w3schools.com/tags/tag_button.asp)

---

### Usage of "class" and "id" attributes

```html
<tagname class="MyClassName">
```
Using "class" as an attribute allows you to apply anything that applies to said class everywhere it is called.

```html
<tagname id="MyElemId">
```
Using "id" as an attribute allows you to apply anything to a specific element. Technically, it is functionally equivalent to using class, but for questions of style, class will apply to a group, while id should be reserved for specific, unique elements.

---

### Character entities / Escape sequences

In HTML one writes special sequences because of the syntactic role of some elements.
- `&lt;` for `<`
- `&gt;` for `>`
- `&nbsp;` is a non-breaking space (a space which cannot be used to jump a line)
- `&amp;` is an ampersand `&`
- `&copy;` for a copyright symbol

- https://www.w3schools.com/html/html_entities.asp
- https://www.w3schools.com/html/html_symbols.asp

---

### HTML Forms

```html
<form action="/action_page.php">
	<label for="option1">1st option</label>
	<input type="radio" id="option1" value="option1"><br>
	<label for="option2">2nd option</label>
	<input type="radio" id="option2" value="option2"><br>
	<input type="submit" value="Submit">
</form> 
```
The HTML `form` tag builds/contains one or several form elements, and links a function to that set of inputs (can be Javascript, PHP, etc).

---

```html
<input type="submit" />			<!-- The button for submitting data to the HTML form handler -->
<input type="reset" />			<!-- A reset button which returns all other other inputs in the form to their default values -->
<input type="text" />			<!-- A one-line text input field -->
<input type="password" />		<!-- A password (hidden text) input field -->
<input type="button" />			<!-- A clickable button -->
<input type="checkbox" />		<!-- A box that can be toggled on (checked) or off (unchecked) -->
<input type="radio" />			<!-- A circular togglable button (meant to be one of many choices of several radio buttons) -->

<!-- HTML5 only from here on: -->
<input type="number" />			<!-- numeric input field -->
<input type="search" />			<!-- A search text field (behaves pretty much like a regular text field) -->
<input type="url" />			<!-- A URL text field (depending on browser validation of format may be automatic) -->
<input type="color" />			<!-- A color picker tooltip -->
<input type="date" />			<!-- A date input field -->
<input type="datetime-local" />		<!-- A date and time input field, with no time zone -->
<input type="month" />			<!-- An input field for month + year -->
<input type="week" />			<!-- An input field for week + year -->
<input type="time" />			<!-- An input field for a time of day -->
<input type="email" />			<!-- A text input field for an email address -->
<input type="file" />			<!-- A filesystem OS-dependent browsing menu for file uploading -->
<input type="hidden" />			<!--  -->
<input type="range" />			<!--  -->
<input type="image" />			<!--  -->
<input type="tel" />			<!-- A set of several text input fields for a several-part number -->
```
A tag used to write HTML form input labels
- [Learn more about the input tag](https://www.w3schools.com/tags/tag_input.asp)
- [Learn more about different input field types](https://www.w3schools.com/html/html_form_input_types.asp)

---

```html
<select>
	<option value="French">Français</option>
	<option value="English">English</option>
	<option value="Spanish">Español</option>
</select>
```
The `<select>` element is used to create a drop-down list
- [Learn more](https://www.w3schools.com/tags/tag_select.asp)

```html
<textarea maxlength="500">...</textarea>
```
The `<textarea>` tag defines a multi-line text input control
- [Learn more](https://www.w3schools.com/tags/tag_textarea.asp)

```html
<label for="thing">thing</label>
```
A tag used to write HTML form input labels
- [Learn more](https://www.w3schools.com/tags/tag_label.asp)

---

- https://www.w3schools.com/html/html_forms.asp
- https://www.w3schools.com/html/html_form_elements.asp
- https://www.w3schools.com/html/html_form_input_types.asp
- https://www.w3schools.com/html/html_form_attributes.asp

---

### HTML Layouts

https://www.w3schools.com/html/html_layout.asp
In a nutshell, the reason why Bootstrap, CSS and all these JS frameworks like Angular and React were invented. Making a layout in pure HTML is a terrible way to do things, and don't even hope to make it interactive.
