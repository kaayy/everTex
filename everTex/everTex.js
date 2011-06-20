// everTex
// A Chrome extension that shows formulas in EverNote's web interface using MathJax
// author: kaayy
// date: Jun, 2011


// Embed everTex_inner.js in the html's main frame. This is necessary due to a known bug (http://code.google.com/p/chromium/issues/detail?id=20773).
var dScript=document.createElement('script');
dScript.type='text/javascript';
dScript.src=chrome.extension.getURL("everTex_inside.js");
document.head.appendChild(dScript);

