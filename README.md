AB_code_wrap
==========

AB_code_wrap wraps styles around ```<code></code>``` blocks using JavaScript.

## Screenshot
![Screenshot](/screenshot.jpg?raw=true)

## Required files

### Styles
[AB_code_wrap/scss/components/_AB_code_wrap.scss](https://github.com/andybeckmann/AB_code_wrap/blob/master/scss/components/_AB_code_wrap.scss)

### Scripts
[AB_code_wrap/js/AB_code_wrap.js](https://github.com/andybeckmann/AB_code_wrap/blob/master/js/AB_code_wrap.js)

## Example

### HTML
```html
<pre><code class="language-javascript">function() {
	console.log('Example');
}</code></pre>
```

### JS
```javascript
codeWrap('script.js');
```