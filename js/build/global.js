/**
 * AB_code_wrap
 * version: 1.0.0
 *
 * codeWrap() wraps preformatted code blocks with a window-like UI
 *
 * @param {string} htmlText - Text displayed above HTML code blocks
 * @param {string} cssText - Text displayed above CSS code blocks
 * @param {string} javascriptText - Text displayed above JavaScript code blocks
 */

function codeWrap (htmlText, cssText, javascriptText) {
	var code = document.getElementsByTagName('code');

	for (var i=0; i<code.length; i++) {

		var codeLanguage = '';

		if (code[i].classList.contains('language-html')) {
			codeLanguage = htmlText;
		} else if (code[i].classList.contains('language-css')) {
			codeLanguage = cssText;
		} else if (code[i].classList.contains('language-javascript')) {
			codeLanguage = javascriptText;
		}

		var pre = code[i].parentNode;

		var codeToolbar = document.createElement('div');

		codeToolbar.innerHTML = '<div class="code-toolbar"><div class="code-toolbar"><div class="top">' + codeLanguage + '</div><div class="code-toolbar-button red"></div><div class="code-toolbar-button yellow"></div><div class="code-toolbar-button green"></div><div class="body"></div></div></div>';

		pre.parentNode.insertBefore(codeToolbar, pre);

		codeToolbar.appendChild(pre);
	}
}