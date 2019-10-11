# TypeScript (like Javascript, but with types)
---



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


