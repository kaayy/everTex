var iframename_0='EN_IframePanel_0';
var iframename_1='EN_IframePanel_1';

function bodymod(iframename){
  var dom=document.getElementById(iframename).contentWindow.document;
  if(dom.body.innerHTML=='') return;
  if(dom.body.innerHTML=='<h3>Loading note data...</h3>') return;
  var getmark=dom.getElementById('everTex_mark');
  if(getmark==null){
    var div=dom.createElement('div');
    div.style.visibility='hidden';
    div.id='everTex_mark';
    dom.body.insertBefore(div,dom.body.firstChild);
    var dScript=dom.createElement('script');
    dScript.type='text/javascript';
    dScript.text='MathJax.Hub.Queue(["Typeset",MathJax.Hub]);';
    dom.body.appendChild(dScript);
  }
}

if(document.getElementById(iframename_1)!=null){
  var dom=document.getElementById(iframename_1).contentWindow.document;
  dScript=dom.createElement('script');
  dScript.type='text/javascript';
  dScript.src='http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
  dScript.text='MathJax.Hub.Startup.onload();';
  dom.head.appendChild(dScript);
  dom.body.addEventListener("DOMSubtreeModified",function(){bodymod(iframename_1);},false);
}

if(document.getElementById(iframename_0)!=null){
  var dom=document.getElementById(iframename_0).contentWindow.document;
  dScript=dom.createElement('script');
  dScript.type='text/javascript';
  dScript.src='http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
  dScript.text='MathJax.Hub.Startup.onload();';
  dom.head.appendChild(dScript);
  dom.body.addEventListener("DOMSubtreeModified",function(){bodymod(iframename_0);},false);
}




