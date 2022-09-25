"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[0],{38(k,h,i){function g(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}i.d(h,{TU:()=>d});let j=g(),l=/[&<>"']/,m=/[&<>"']/g,n=/[<>"']|&(?!#?\w+;)/,o=/[<>"']|&(?!#?\w+;)/g,p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},q=a=>p[a];function r(a,b){if(b){if(l.test(a))return a.replace(m,q)}else if(n.test(a))return a.replace(o,q);return a}let s=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function t(a){return a.replace(s,(b,a)=>"colon"===(a=a.toLowerCase())?":":"#"===a.charAt(0)?"x"===a.charAt(1)?String.fromCharCode(parseInt(a.substring(2),16)):String.fromCharCode(+a.substring(1)):"")}let u=/(^|[^\[])\^/g;function c(a,b){a="string"==typeof a?a:a.source,b=b||"";let c={replace:(d,b)=>(b=(b=b.source||b).replace(u,"$1"),a=a.replace(d,b),c),getRegex:()=>new RegExp(a,b)};return c}let v=/[^\w:]/g,w=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function x(d,c,a){if(d){let b;try{b=decodeURIComponent(t(a)).replace(v,"").toLowerCase()}catch(e){return null}if(0===b.indexOf("javascript:")||0===b.indexOf("vbscript:")||0===b.indexOf("data:"))return null}c&&!w.test(a)&&(a=C(c,a));try{a=encodeURI(a).replace(/%25/g,"%")}catch(f){return null}return a}let y={},z=/^[^:]+:\/*[^/]*$/,A=/^([^:]+:)[\s\S]*$/,B=/^([^:]+:\/*[^/]*)[\s\S]*$/;function C(a,b){y[" "+a]||(z.test(a)?y[" "+a]=a+"/":y[" "+a]=E(a,"/",!0)),a=y[" "+a];let c=-1===a.indexOf(":");return"//"===b.substring(0,2)?c?b:a.replace(A,"$1")+b:"/"!==b.charAt(0)?a+b:c?b:a.replace(B,"$1")+b}let f={exec:function(){}};function e(d){let b=1,c,a;for(;b<arguments.length;b++)for(a in c=arguments[b])Object.prototype.hasOwnProperty.call(c,a)&&(d[a]=c[a]);return d}function D(d,c){let e=d.replace(/\|/g,(e,c,d)=>{let a=!1,b=c;for(;--b>=0&&"\\"===d[b];)a=!a;return a?"|":" |"}),a=e.split(/ \|/),b=0;if(a[0].trim()||a.shift(),a.length>0&&!a[a.length-1].trim()&&a.pop(),a.length>c)a.splice(c);else for(;a.length<c;)a.push("");for(;b<a.length;b++)a[b]=a[b].trim().replace(/\\\|/g,"|");return a}function E(c,d,e){let b=c.length;if(0===b)return"";let a=0;for(;a<b;){let f=c.charAt(b-a-1);if(f!==d||e){if(f!==d&&e)a++;else break}else a++}return c.slice(0,b-a)}function F(a){a&&a.sanitize&&!a.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function G(a,b){if(b<1)return"";let c="";for(;b>1;)1&b&&(c+=a),b>>=1,a+=a;return c+a}function H(d,a,e,b){let f=a.href,g=a.title?r(a.title):null,c=d[1].replace(/\\([\[\]])/g,"$1");if("!"!==d[0].charAt(0)){b.state.inLink=!0;let h={type:"link",raw:e,href:f,title:g,text:c,tokens:b.inlineTokens(c)};return b.state.inLink=!1,h}return{type:"image",raw:e,href:f,title:g,text:r(c)}}class Tokenizer{constructor(a){this.options=a||j}space(b){let a=this.rules.block.newline.exec(b);if(a&&a[0].length>0)return{type:"space",raw:a[0]}}code(c){let a=this.rules.block.code.exec(c);if(a){let b=a[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:a[0],codeBlockStyle:"indented",text:this.options.pedantic?b:E(b,"\n")}}}fences(c){let a=this.rules.block.fences.exec(c);if(a){let b=a[0],d=function(c,a){let b=c.match(/^(\s+)(?:```)/);if(null===b)return a;let d=b[1];return a.split("\n").map(a=>{let b=a.match(/^\s+/);if(null===b)return a;let[c]=b;return c.length>=d.length?a.slice(d.length):a}).join("\n")}(b,a[3]||"");return{type:"code",raw:b,lang:a[2]?a[2].trim():a[2],text:d}}}heading(d){let b=this.rules.block.heading.exec(d);if(b){let a=b[2].trim();if(/#$/.test(a)){let c=E(a,"#");this.options.pedantic?a=c.trim():(!c||/ $/.test(c))&&(a=c.trim())}return{type:"heading",raw:b[0],depth:b[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(b){let a=this.rules.block.hr.exec(b);if(a)return{type:"hr",raw:a[0]}}blockquote(c){let a=this.rules.block.blockquote.exec(c);if(a){let b=a[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:a[0],tokens:this.lexer.blockTokens(b,[]),text:b}}}list(c){let h=this.rules.block.list.exec(c);if(h){let f,m,p,d,i,j,q,b,k,n,e,o,g=h[1].trim(),l=g.length>1,a={type:"list",raw:"",ordered:l,start:l?+g.slice(0,-1):"",loose:!1,items:[]};g=l?`\\d{1,9}\\${g.slice(-1)}`:`\\${g}`,this.options.pedantic&&(g=l?g:"[*+-]");let s=new RegExp(`^( {0,3}${g})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;c&&(o=!1,!(!(h=s.exec(c))||this.rules.block.hr.test(c)));){if(f=h[0],c=c.substring(f.length),b=h[2].split("\n",1)[0],k=c.split("\n",1)[0],this.options.pedantic?(d=2,e=b.trimLeft()):(d=(d=h[2].search(/[^ ]/))>4?1:d,e=b.slice(d),d+=h[1].length),j=!1,!b&&/^ *$/.test(k)&&(f+=k+"\n",c=c.substring(k.length+1),o=!0),!o){let t=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),u=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),v=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:\`\`\`|~~~)`),w=new RegExp(`^ {0,${Math.min(3,d-1)}}#`);for(;c&&(b=n=c.split("\n",1)[0],this.options.pedantic&&(b=b.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(v.test(b)||w.test(b)||t.test(b)||u.test(c)));){if(b.search(/[^ ]/)>=d||!b.trim())e+="\n"+b.slice(d);else if(j)break;else e+="\n"+b;j||b.trim()||(j=!0),f+=n+"\n",c=c.substring(n.length+1)}}!a.loose&&(q?a.loose=!0:/\n *\n *$/.test(f)&&(q=!0)),this.options.gfm&&(m=/^\[[ xX]\] /.exec(e))&&(p="[ ] "!==m[0],e=e.replace(/^\[[ xX]\] +/,"")),a.items.push({type:"list_item",raw:f,task:!!m,checked:p,loose:!1,text:e}),a.raw+=f}a.items[a.items.length-1].raw=f.trimRight(),a.items[a.items.length-1].text=e.trimRight(),a.raw=a.raw.trimRight();let x=a.items.length;for(i=0;i<x;i++){this.lexer.state.top=!1,a.items[i].tokens=this.lexer.blockTokens(a.items[i].text,[]);let r=a.items[i].tokens.filter(a=>"space"===a.type),y=r.every(b=>{let c=b.raw.split(""),a=0;for(let d of c)if("\n"===d&&(a+=1),a>1)return!0;return!1});!a.loose&&r.length&&y&&(a.loose=!0,a.items[i].loose=!0)}return a}}html(d){let a=this.rules.block.html.exec(d);if(a){let b={type:"html",raw:a[0],pre:!this.options.sanitizer&&("pre"===a[1]||"script"===a[1]||"style"===a[1]),text:a[0]};if(this.options.sanitize){let c=this.options.sanitizer?this.options.sanitizer(a[0]):r(a[0]);b.type="paragraph",b.text=c,b.tokens=this.lexer.inline(c)}return b}}def(b){let a=this.rules.block.def.exec(b);if(a){a[3]&&(a[3]=a[3].substring(1,a[3].length-1));let c=a[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:c,raw:a[0],href:a[2],title:a[3]}}}table(h){let d=this.rules.block.table.exec(h);if(d){let a={type:"table",header:D(d[1]).map(a=>({text:a})),align:d[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:d[3]&&d[3].trim()?d[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(a.header.length===a.align.length){a.raw=d[0];let e=a.align.length,b,c,f,g;for(b=0;b<e;b++)/^ *-+: *$/.test(a.align[b])?a.align[b]="right":/^ *:-+: *$/.test(a.align[b])?a.align[b]="center":/^ *:-+ *$/.test(a.align[b])?a.align[b]="left":a.align[b]=null;for(b=0,e=a.rows.length;b<e;b++)a.rows[b]=D(a.rows[b],a.header.length).map(a=>({text:a}));for(c=0,e=a.header.length;c<e;c++)a.header[c].tokens=this.lexer.inline(a.header[c].text);for(c=0,e=a.rows.length;c<e;c++)for(f=0,g=a.rows[c];f<g.length;f++)g[f].tokens=this.lexer.inline(g[f].text);return a}}}lheading(b){let a=this.rules.block.lheading.exec(b);if(a)return{type:"heading",raw:a[0],depth:"="===a[2].charAt(0)?1:2,text:a[1],tokens:this.lexer.inline(a[1])}}paragraph(c){let a=this.rules.block.paragraph.exec(c);if(a){let b="\n"===a[1].charAt(a[1].length-1)?a[1].slice(0,-1):a[1];return{type:"paragraph",raw:a[0],text:b,tokens:this.lexer.inline(b)}}}text(b){let a=this.rules.block.text.exec(b);if(a)return{type:"text",raw:a[0],text:a[0],tokens:this.lexer.inline(a[0])}}escape(b){let a=this.rules.inline.escape.exec(b);if(a)return{type:"escape",raw:a[0],text:r(a[1])}}tag(b){let a=this.rules.inline.tag.exec(b);if(a)return!this.lexer.state.inLink&&/^<a /i.test(a[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(a[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:a[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):r(a[0]):a[0]}}link(g){let a=this.rules.inline.link.exec(g);if(a){let c=a[2].trim();if(!this.options.pedantic&&/^</.test(c)){if(!/>$/.test(c))return;let h=E(c.slice(0,-1),"\\");if((c.length-h.length)%2==0)return}else{let e=function(b,c){if(-1===b.indexOf(c[1]))return -1;let e=b.length,d=0,a=0;for(;a<e;a++)if("\\"===b[a])a++;else if(b[a]===c[0])d++;else if(b[a]===c[1]&& --d<0)return a;return -1}(a[2],"()");if(e> -1){let i=0===a[0].indexOf("!")?5:4,j=i+a[1].length+e;a[2]=a[2].substring(0,e),a[0]=a[0].substring(0,j).trim(),a[3]=""}}let b=a[2],d="";if(this.options.pedantic){let f=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(b);f&&(b=f[1],d=f[3])}else d=a[3]?a[3].slice(1,-1):"";return b=b.trim(),/^</.test(b)&&(b=this.options.pedantic&&!/>$/.test(c)?b.slice(1):b.slice(1,-1)),H(a,{href:b?b.replace(this.rules.inline._escapes,"$1"):b,title:d?d.replace(this.rules.inline._escapes,"$1"):d},a[0],this.lexer)}}reflink(c,e){let a;if((a=this.rules.inline.reflink.exec(c))||(a=this.rules.inline.nolink.exec(c))){let b=(a[2]||a[1]).replace(/\s+/g," ");if(!(b=e[b.toLowerCase()])||!b.href){let d=a[0].charAt(0);return{type:"text",raw:d,text:d}}return H(a,b,a[0],this.lexer)}}emStrong(d,e,f=""){let a=this.rules.inline.emStrong.lDelim.exec(d);if(!a||a[3]&&f.match(/[\p{L}\p{N}]/u))return;let h=a[1]||a[2]||"";if(!h||h&&(""===f||this.rules.inline.punctuation.exec(f))){let c=a[0].length-1,i,b,g=c,j=0,k="*"===a[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(k.lastIndex=0,e=e.slice(-1*d.length+c);null!=(a=k.exec(e));){if(!(i=a[1]||a[2]||a[3]||a[4]||a[5]||a[6]))continue;if(b=i.length,a[3]||a[4]){g+=b;continue}if((a[5]||a[6])&&c%3&&!((c+b)%3)){j+=b;continue}if((g-=b)>0)continue;if(b=Math.min(b,b+g+j),Math.min(c,b)%2){let l=d.slice(1,c+a.index+b);return{type:"em",raw:d.slice(0,c+a.index+b+1),text:l,tokens:this.lexer.inlineTokens(l)}}let m=d.slice(2,c+a.index+b-1);return{type:"strong",raw:d.slice(0,c+a.index+b+1),text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(c){let b=this.rules.inline.code.exec(c);if(b){let a=b[2].replace(/\n/g," "),d=/[^ ]/.test(a),e=/^ /.test(a)&&/ $/.test(a);return d&&e&&(a=a.substring(1,a.length-1)),a=r(a,!0),{type:"codespan",raw:b[0],text:a}}}br(b){let a=this.rules.inline.br.exec(b);if(a)return{type:"br",raw:a[0]}}del(b){let a=this.rules.inline.del.exec(b);if(a)return{type:"del",raw:a[0],text:a[2],tokens:this.lexer.inlineTokens(a[2])}}autolink(d,e){let a=this.rules.inline.autolink.exec(d);if(a){let b,c;return c="@"===a[2]?"mailto:"+(b=r(this.options.mangle?e(a[1]):a[1])):b=r(a[1]),{type:"link",raw:a[0],text:b,href:c,tokens:[{type:"text",raw:b,text:b}]}}}url(e,f){let a;if(a=this.rules.inline.url.exec(e)){let b,c;if("@"===a[2])c="mailto:"+(b=r(this.options.mangle?f(a[0]):a[0]));else{let d;do d=a[0],a[0]=this.rules.inline._backpedal.exec(a[0])[0];while(d!==a[0])b=r(a[0]),c="www."===a[1]?"http://"+b:b}return{type:"link",raw:a[0],text:b,href:c,tokens:[{type:"text",raw:b,text:b}]}}}inlineText(c,d){let a=this.rules.inline.text.exec(c);if(a){let b;return b=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):r(a[0]):a[0]:r(this.options.smartypants?d(a[0]):a[0]),{type:"text",raw:a[0],text:b}}}}let b={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:f,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};b._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/,b._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,b.def=c(b.def).replace("label",b._label).replace("title",b._title).getRegex(),b.bullet=/(?:[*+-]|\d{1,9}[.)])/,b.listItemStart=c(/^( *)(bull) */).replace("bull",b.bullet).getRegex(),b.list=c(b.list).replace(/bull/g,b.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+b.def.source+")").getRegex(),b._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",b._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,b.html=c(b.html,"i").replace("comment",b._comment).replace("tag",b._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),b.paragraph=c(b._paragraph).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex(),b.blockquote=c(b.blockquote).replace("paragraph",b.paragraph).getRegex(),b.normal=e({},b),b.gfm=e({},b.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),b.gfm.table=c(b.gfm.table).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex(),b.gfm.paragraph=c(b._paragraph).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",b.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex(),b.pedantic=e({},b.normal,{html:c("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",b._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:f,paragraph:c(b.normal._paragraph).replace("hr",b.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",b.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});let a={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:f,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:f,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function I(a){return a.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function J(c){let d="",a,b,e=c.length;for(a=0;a<e;a++)b=c.charCodeAt(a),Math.random()>.5&&(b="x"+b.toString(16)),d+="&#"+b+";";return d}a._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",a.punctuation=c(a.punctuation).replace(/punctuation/g,a._punctuation).getRegex(),a.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,a.escapedEmSt=/\\\*|\\_/g,a._comment=c(b._comment).replace("(?:-->|$)","-->").getRegex(),a.emStrong.lDelim=c(a.emStrong.lDelim).replace(/punct/g,a._punctuation).getRegex(),a.emStrong.rDelimAst=c(a.emStrong.rDelimAst,"g").replace(/punct/g,a._punctuation).getRegex(),a.emStrong.rDelimUnd=c(a.emStrong.rDelimUnd,"g").replace(/punct/g,a._punctuation).getRegex(),a._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,a._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,a._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,a.autolink=c(a.autolink).replace("scheme",a._scheme).replace("email",a._email).getRegex(),a._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,a.tag=c(a.tag).replace("comment",a._comment).replace("attribute",a._attribute).getRegex(),a._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,a._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,a._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,a.link=c(a.link).replace("label",a._label).replace("href",a._href).replace("title",a._title).getRegex(),a.reflink=c(a.reflink).replace("label",a._label).replace("ref",b._label).getRegex(),a.nolink=c(a.nolink).replace("ref",b._label).getRegex(),a.reflinkSearch=c(a.reflinkSearch,"g").replace("reflink",a.reflink).replace("nolink",a.nolink).getRegex(),a.normal=e({},a),a.pedantic=e({},a.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:c(/^!?\[(label)\]\((.*?)\)/).replace("label",a._label).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",a._label).getRegex()}),a.gfm=e({},a.normal,{escape:c(a.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),a.gfm.url=c(a.gfm.url,"i").replace("email",a.gfm._extended_email).getRegex(),a.breaks=e({},a.gfm,{br:c(a.br).replace("{2,}","*").getRegex(),text:c(a.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class Lexer{constructor(d){this.tokens=[],this.tokens.links=Object.create(null),this.options=d||j,this.options.tokenizer=this.options.tokenizer||new Tokenizer,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let c={block:b.normal,inline:a.normal};this.options.pedantic?(c.block=b.pedantic,c.inline=a.pedantic):this.options.gfm&&(c.block=b.gfm,this.options.breaks?c.inline=a.breaks:c.inline=a.gfm),this.tokenizer.rules=c}static get rules(){return{block:b,inline:a}}static lex(a,b){let c=new Lexer(b);return c.lex(a)}static lexInline(a,b){let c=new Lexer(b);return c.inlineTokens(a)}lex(a){a=a.replace(/\r\n|\r/g,"\n"),this.blockTokens(a,this.tokens);let b;for(;b=this.inlineQueue.shift();)this.inlineTokens(b.src,b.tokens);return this.tokens}blockTokens(b,d=[]){b=this.options.pedantic?b.replace(/\t/g,"    ").replace(/^ +$/gm,""):b.replace(/^( *)(\t+)/gm,(c,a,b)=>a+"    ".repeat(b.length));let a,c,e,g;for(;b;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>!!(a=c.call({lexer:this},b,d))&&(b=b.substring(a.raw.length),d.push(a),!0)))){if(a=this.tokenizer.space(b)){b=b.substring(a.raw.length),1===a.raw.length&&d.length>0?d[d.length-1].raw+="\n":d.push(a);continue}if(a=this.tokenizer.code(b)){b=b.substring(a.raw.length),(c=d[d.length-1])&&("paragraph"===c.type||"text"===c.type)?(c.raw+="\n"+a.raw,c.text+="\n"+a.text,this.inlineQueue[this.inlineQueue.length-1].src=c.text):d.push(a);continue}if((a=this.tokenizer.fences(b))||(a=this.tokenizer.heading(b))||(a=this.tokenizer.hr(b))||(a=this.tokenizer.blockquote(b))||(a=this.tokenizer.list(b))||(a=this.tokenizer.html(b))){b=b.substring(a.raw.length),d.push(a);continue}if(a=this.tokenizer.def(b)){b=b.substring(a.raw.length),(c=d[d.length-1])&&("paragraph"===c.type||"text"===c.type)?(c.raw+="\n"+a.raw,c.text+="\n"+a.raw,this.inlineQueue[this.inlineQueue.length-1].src=c.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if((a=this.tokenizer.table(b))||(a=this.tokenizer.lheading(b))){b=b.substring(a.raw.length),d.push(a);continue}if(e=b,this.options.extensions&&this.options.extensions.startBlock){let f=1/0,i=b.slice(1),j;this.options.extensions.startBlock.forEach(function(a){"number"==typeof(j=a.call({lexer:this},i))&&j>=0&&(f=Math.min(f,j))}),f<1/0&&f>=0&&(e=b.substring(0,f+1))}if(this.state.top&&(a=this.tokenizer.paragraph(e))){c=d[d.length-1],g&&"paragraph"===c.type?(c.raw+="\n"+a.raw,c.text+="\n"+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=c.text):d.push(a),g=e.length!==b.length,b=b.substring(a.raw.length);continue}if(a=this.tokenizer.text(b)){b=b.substring(a.raw.length),(c=d[d.length-1])&&"text"===c.type?(c.raw+="\n"+a.raw,c.text+="\n"+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=c.text):d.push(a);continue}if(b){let h="Infinite loop on byte: "+b.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}return this.state.top=!0,d}inline(b,a=[]){return this.inlineQueue.push({src:b,tokens:a}),a}inlineTokens(b,c=[]){let a,d,g,e=b,f,h,i;if(this.tokens.links){let k=Object.keys(this.tokens.links);if(k.length>0)for(;null!=(f=this.tokenizer.rules.inline.reflinkSearch.exec(e));)k.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(e=e.slice(0,f.index)+"["+G("a",f[0].length-2)+"]"+e.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(f=this.tokenizer.rules.inline.blockSkip.exec(e));)e=e.slice(0,f.index)+"["+G("a",f[0].length-2)+"]"+e.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(f=this.tokenizer.rules.inline.escapedEmSt.exec(e));)e=e.slice(0,f.index)+"++"+e.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;b;)if(h||(i=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>!!(a=d.call({lexer:this},b,c))&&(b=b.substring(a.raw.length),c.push(a),!0)))){if(a=this.tokenizer.escape(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.tag(b)){b=b.substring(a.raw.length),(d=c[c.length-1])&&"text"===a.type&&"text"===d.type?(d.raw+=a.raw,d.text+=a.text):c.push(a);continue}if(a=this.tokenizer.link(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.reflink(b,this.tokens.links)){b=b.substring(a.raw.length),(d=c[c.length-1])&&"text"===a.type&&"text"===d.type?(d.raw+=a.raw,d.text+=a.text):c.push(a);continue}if((a=this.tokenizer.emStrong(b,e,i))||(a=this.tokenizer.codespan(b))||(a=this.tokenizer.br(b))||(a=this.tokenizer.del(b))||(a=this.tokenizer.autolink(b,J))|| !this.state.inLink&&(a=this.tokenizer.url(b,J))){b=b.substring(a.raw.length),c.push(a);continue}if(g=b,this.options.extensions&&this.options.extensions.startInline){let j=1/0,m=b.slice(1),n;this.options.extensions.startInline.forEach(function(a){"number"==typeof(n=a.call({lexer:this},m))&&n>=0&&(j=Math.min(j,n))}),j<1/0&&j>=0&&(g=b.substring(0,j+1))}if(a=this.tokenizer.inlineText(g,I)){b=b.substring(a.raw.length),"_"!==a.raw.slice(-1)&&(i=a.raw.slice(-1)),h=!0,d=c[c.length-1],d&&"text"===d.type?(d.raw+=a.raw,d.text+=a.text):c.push(a);continue}if(b){let l="Infinite loop on byte: "+b.charCodeAt(0);if(this.options.silent){console.error(l);break}throw new Error(l)}}return c}}class Renderer{constructor(a){this.options=a||j}code(a,e,b){let c=(e||"").match(/\S*/)[0];if(this.options.highlight){let d=this.options.highlight(a,c);null!=d&&d!==a&&(b=!0,a=d)}return(a=a.replace(/\n$/,"")+"\n",c)?'<pre><code class="'+this.options.langPrefix+r(c,!0)+'">'+(b?a:r(a,!0))+"</code></pre>\n":"<pre><code>"+(b?a:r(a,!0))+"</code></pre>\n"}blockquote(a){return`<blockquote>
${a}</blockquote>
`}html(a){return a}heading(b,a,c,d){if(this.options.headerIds){let e=this.options.headerPrefix+d.slug(c);return`<h${a} id="${e}">${b}</h${a}>
`}return`<h${a}>${b}</h${a}>
`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(d,a,b){let c=a?"ol":"ul";return"<"+c+(a&&1!==b?' start="'+b+'"':"")+">\n"+d+"</"+c+">\n"}listitem(a){return`<li>${a}</li>
`}checkbox(a){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(a){return`<p>${a}</p>
`}table(b,a){return a&&(a=`<tbody>${a}</tbody>`),"<table>\n<thead>\n"+b+"</thead>\n"+a+"</table>\n"}tablerow(a){return`<tr>
${a}</tr>
`}tablecell(c,a){let b=a.header?"th":"td",d=a.align?`<${b} align="${a.align}">`:`<${b}>`;return d+c+`</${b}>
`}strong(a){return`<strong>${a}</strong>`}em(a){return`<em>${a}</em>`}codespan(a){return`<code>${a}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(a){return`<del>${a}</del>`}link(a,b,c){if(null===(a=x(this.options.sanitize,this.options.baseUrl,a)))return c;let d='<a href="'+r(a)+'"';return b&&(d+=' title="'+b+'"'),d+=">"+c+"</a>"}image(a,b,c){if(null===(a=x(this.options.sanitize,this.options.baseUrl,a)))return c;let d=`<img src="${a}" alt="${c}"`;return b&&(d+=` title="${b}"`),d+=this.options.xhtml?"/>":">"}text(a){return a}}class TextRenderer{strong(a){return a}em(a){return a}codespan(a){return a}del(a){return a}html(a){return a}text(a){return a}link(b,c,a){return""+a}image(b,c,a){return""+a}br(){return""}}class Slugger{constructor(){this.seen={}}serialize(a){return a.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(b,d){let a=b,c=0;if(this.seen.hasOwnProperty(a)){c=this.seen[b];do a=b+"-"+ ++c;while(this.seen.hasOwnProperty(a))}return d||(this.seen[b]=c,this.seen[a]=0),a}slug(a,b={}){let c=this.serialize(a);return this.getNextSafeSlug(c,b.dryrun)}}class Parser{constructor(a){this.options=a||j,this.options.renderer=this.options.renderer||new Renderer,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new TextRenderer,this.slugger=new Slugger}static parse(a,b){let c=new Parser(b);return c.parse(a)}static parseInline(a,b){let c=new Parser(b);return c.parseInline(a)}parse(k,y=!0){let e="",f,c,i,g,q,m,h,n,d,a,r,s,o,l,b,p,u,j,v,w=k.length;for(f=0;f<w;f++){if(a=k[f],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(!1!==(v=this.options.extensions.renderers[a.type].call({parser:this},a))||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type))){e+=v||"";continue}switch(a.type){case"space":continue;case"hr":e+=this.renderer.hr();continue;case"heading":e+=this.renderer.heading(this.parseInline(a.tokens),a.depth,t(this.parseInline(a.tokens,this.textRenderer)),this.slugger);continue;case"code":e+=this.renderer.code(a.text,a.lang,a.escaped);continue;case"table":for(c=0,n="",h="",g=a.header.length;c<g;c++)h+=this.renderer.tablecell(this.parseInline(a.header[c].tokens),{header:!0,align:a.align[c]});for(n+=this.renderer.tablerow(h),d="",g=a.rows.length,c=0;c<g;c++){for(i=0,m=a.rows[c],h="",q=m.length;i<q;i++)h+=this.renderer.tablecell(this.parseInline(m[i].tokens),{header:!1,align:a.align[i]});d+=this.renderer.tablerow(h)}e+=this.renderer.table(n,d);continue;case"blockquote":d=this.parse(a.tokens),e+=this.renderer.blockquote(d);continue;case"list":for(c=0,r=a.ordered,s=a.start,o=a.loose,g=a.items.length,d="";c<g;c++)p=(b=a.items[c]).checked,u=b.task,l="",b.task&&(j=this.renderer.checkbox(p),o?b.tokens.length>0&&"paragraph"===b.tokens[0].type?(b.tokens[0].text=j+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&"text"===b.tokens[0].tokens[0].type&&(b.tokens[0].tokens[0].text=j+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:j}):l+=j),l+=this.parse(b.tokens,o),d+=this.renderer.listitem(l,u,p);e+=this.renderer.list(d,r,s);continue;case"html":e+=this.renderer.html(a.text);continue;case"paragraph":e+=this.renderer.paragraph(this.parseInline(a.tokens));continue;case"text":for(d=a.tokens?this.parseInline(a.tokens):a.text;f+1<w&&"text"===k[f+1].type;)d+="\n"+((a=k[++f]).tokens?this.parseInline(a.tokens):a.text);e+=y?this.renderer.paragraph(d):d;continue;default:{let x='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(x);return}throw new Error(x)}}}return e}parseInline(e,b){b=b||this.renderer;let c="",d,a,f,h=e.length;for(d=0;d<h;d++){if(a=e[d],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(!1!==(f=this.options.extensions.renderers[a.type].call({parser:this},a))||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type))){c+=f||"";continue}switch(a.type){case"escape":case"text":c+=b.text(a.text);break;case"html":c+=b.html(a.text);break;case"link":c+=b.link(a.href,a.title,this.parseInline(a.tokens,b));break;case"image":c+=b.image(a.href,a.title,a.text);break;case"strong":c+=b.strong(this.parseInline(a.tokens,b));break;case"em":c+=b.em(this.parseInline(a.tokens,b));break;case"codespan":c+=b.codespan(a.text);break;case"br":c+=b.br();break;case"del":c+=b.del(this.parseInline(a.tokens,b));break;default:{let g='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(g);return}throw new Error(g)}}}return c}}function d(b,a,c){if(null==b)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof b)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(b)+", string expected");if("function"==typeof a&&(c=a,a=null),a=e({},d.defaults,a||{}),F(a),c){let h=a.highlight,f;try{f=Lexer.lex(b,a)}catch(k){return c(k)}let i=function(b){let e;if(!b)try{a.walkTokens&&d.walkTokens(f,a.walkTokens),e=Parser.parse(f,a)}catch(g){b=g}return a.highlight=h,b?c(b):c(null,e)};if(!h||h.length<3||(delete a.highlight,!f.length))return i();let l=0;d.walkTokens(f,function(a){"code"===a.type&&(l++,setTimeout(()=>{h(a.text,a.lang,function(c,b){if(c)return i(c);null!=b&&b!==a.text&&(a.text=b,a.escaped=!0),0== --l&&i()})},0))}),0===l&&i()}function j(b){if(b.message+="\nPlease report this to https://github.com/markedjs/marked.",a.silent)return"<p>An error occurred:</p><pre>"+r(b.message+"",!0)+"</pre>";throw b}try{let g=Lexer.lex(b,a);if(a.walkTokens){if(a.async)return Promise.all(d.walkTokens(g,a.walkTokens)).then(()=>Parser.parse(g,a)).catch(j);d.walkTokens(g,a.walkTokens)}return Parser.parse(g,a)}catch(m){j(m)}}d.options=d.setOptions=function(a){var b;return e(d.defaults,a),j=b=d.defaults,d},d.getDefaults=g,d.defaults=j,d.use=function(...a){let b=e({},...a),c=d.defaults.extensions||{renderers:{},childTokens:{}},f;a.forEach(a=>{if(a.extensions&&(f=!0,a.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){let b=c.renderers?c.renderers[a.name]:null;b?c.renderers[a.name]=function(...d){let c=a.renderer.apply(this,d);return!1===c&&(c=b.apply(this,d)),c}:c.renderers[a.name]=a.renderer}if(a.tokenizer){if(!a.level||"block"!==a.level&&"inline"!==a.level)throw new Error("extension level must be 'block' or 'inline'");c[a.level]?c[a.level].unshift(a.tokenizer):c[a.level]=[a.tokenizer],a.start&&("block"===a.level?c.startBlock?c.startBlock.push(a.start):c.startBlock=[a.start]:"inline"===a.level&&(c.startInline?c.startInline.push(a.start):c.startInline=[a.start]))}a.childTokens&&(c.childTokens[a.name]=a.childTokens)})),a.renderer){let e=d.defaults.renderer||new Renderer;for(let h in a.renderer){let j=e[h];e[h]=(...c)=>{let b=a.renderer[h].apply(e,c);return!1===b&&(b=j.apply(e,c)),b}}b.renderer=e}if(a.tokenizer){let g=d.defaults.tokenizer||new Tokenizer;for(let i in a.tokenizer){let k=g[i];g[i]=(...c)=>{let b=a.tokenizer[i].apply(g,c);return!1===b&&(b=k.apply(g,c)),b}}b.tokenizer=g}if(a.walkTokens){let l=d.defaults.walkTokens;b.walkTokens=function(c){let b=[];return b.push(a.walkTokens.call(this,c)),l&&(b=b.concat(l.call(this,c))),b}}f&&(b.extensions=c),d.setOptions(b)})},d.walkTokens=function(e,c){let a=[];for(let b of e)switch(a=a.concat(c.call(d,b)),b.type){case"table":for(let f of b.header)a=a.concat(d.walkTokens(f.tokens,c));for(let g of b.rows)for(let h of g)a=a.concat(d.walkTokens(h.tokens,c));break;case"list":a=a.concat(d.walkTokens(b.items,c));break;default:d.defaults.extensions&&d.defaults.extensions.childTokens&&d.defaults.extensions.childTokens[b.type]?d.defaults.extensions.childTokens[b.type].forEach(function(e){a=a.concat(d.walkTokens(b[e],c))}):b.tokens&&(a=a.concat(d.walkTokens(b.tokens,c)))}return a},d.parseInline=function(b,a){if(null==b)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof b)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(b)+", string expected");a=e({},d.defaults,a||{}),F(a);try{let f=Lexer.lexInline(b,a);return a.walkTokens&&d.walkTokens(f,a.walkTokens),Parser.parseInline(f,a)}catch(c){if(c.message+="\nPlease report this to https://github.com/markedjs/marked.",a.silent)return"<p>An error occurred:</p><pre>"+r(c.message+"",!0)+"</pre>";throw c}},d.Parser=Parser,d.parser=Parser.parse,d.Renderer=Renderer,d.TextRenderer=TextRenderer,d.Lexer=Lexer,d.lexer=Lexer.lex,d.Tokenizer=Tokenizer,d.Slugger=Slugger,d.parse=d,d.options,d.setOptions,d.use,d.walkTokens,d.parseInline,Parser.parse,Lexer.lex},31(c,b,a){a.d(b,{Z:()=>g});var d=a(1),e=a(29),f=a(0);let g=function(a){return(0,f.jsx)(e.Z,(0,d.Z)({atom:"path"},a))}},37(c,b,a){a.d(b,{Z:()=>i});var d=a(1),e=a(125),f=a(29),g=a(0),h=["ui","viewBox","atom","width"];let i=function(a){var{ui:b=!1,viewBox:c="0 0 24 24",atom:i="svg",width:j="100%"}=a,k=(0,e.Z)(a,h);return(0,g.jsx)(f.Z,(0,d.Z)({ui:b,viewBox:c,atom:i,width:j},k))}},21(c,b,a){a.d(b,{Z:()=>j});var d=a(1),e=a(125),f=a(37),g=a(31),h=a(0),i=["type","children"];let j=function(b,c){var a=function(j){var{type:k=null,children:l}=j,m=(0,e.Z)(j,i),a=c[k]||c["_"]||c;return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},m),{},{"data-name":b,children:[a.map?a.map(function(a){return(0,h.jsx)(g.Z,{d:a})}):(0,h.jsx)(g.Z,{d:a}),l]}))};return a.displayName=b,a}}}])