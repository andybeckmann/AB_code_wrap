
var code = document.getElementsByTagName('code');

for (var i=0; i<code.length; i++) {

	var codeLanguage = '';

	if (code[i].classList.contains('language-javascript')) {
		codeLanguage = 'script.js';
	} else if (code[i].classList.contains('language-css')) {
		codeLanguage = 'style.css';
	} else if (code[i].classList.contains('language-html')) {
		codeLanguage = 'index.html';
	}

	var pre = code[i].parentNode;

	var codeToolbar = document.createElement('div');

	codeToolbar.innerHTML = '<div class="code-toolbar"><div class="code-toolbar"><div class="top">' + codeLanguage + '</div><div class="code-toolbar-button red"></div><div class="code-toolbar-button yellow"></div><div class="code-toolbar-button green"></div><div class="body"></div></div></div>';

	pre.parentNode.insertBefore(codeToolbar, pre);

	codeToolbar.appendChild(pre);
}