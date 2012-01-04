// ==UserScript==
// @name           EverTex
// @namespace      http://www.github.com/kaayy
// @version        1.1
// @description    Display formulas in EverNote
// @include        https://www.evernote.com/Home.action*
// @include        https://www.evernote.com/view/*
// ==/UserScript==
// This is the Greasemonkey version of EverTex. 
// This userscript displays formulas in EverNote's web interface via MathJax.
// Source Code available at: https://github.com/kaayy/everTex
// Author: kaayy
// Date: Jan. 2012
// Thanks to Lars Kindler, who gave me the first version of this userscript.


var iframename_0='EN_IframePanel_0';
var iframename_1='EN_IframePanel_1';


function iframeload_listener(iframename){
  var dom=document.getElementById(iframename).contentWindow.document;
  if(dom.body.innerHTML=='') return;
  if(dom.body.innerHTML=='<h3>Loading note data...</h3>') return;
  var getmark=dom.getElementById('evertex_mathjax');
  if(getmark==null){
    dScript=dom.createElement('script');
    dScript.type='text/javascript';
    dScript.id='evertex_mathjax'
    dScript.src='http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
    dScript.text='if(!MathJax.isReady) MathJax.Hub.Startup.onload(); MathJax.Hub.Typeset();'
    dom.body.appendChild(dScript);
  }
  return;
}

window.addEventListener('load', function(){
  if(document.getElementById(iframename_1)!=null){
    document.getElementById(iframename_1).addEventListener("load",function(){iframeload_listener(iframename_1);},false);
}
  if(document.getElementById(iframename_0)!=null){
    document.getElementById(iframename_0).addEventListener("load",function(){iframeload_listener(iframename_0);},false);
}

},
false);

