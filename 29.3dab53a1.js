(window.webpackJsonp=window.webpackJsonp||[]).push([[29,30],{108:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(o){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),c};e.exports=n,e.exports.default=n},109:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},110:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),c=a(102),o=a(100),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:s};function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},h=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},b=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=m({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=m({},a,{backgroundColor:null}),r};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var g=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?b(e.theme,e.language):void 0;return t.themeDict=a})),u(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=m({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(l.style=c.plain),void 0!==r&&(l.style=void 0!==l.style?m({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),u(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var c=n?{display:"inline-block"}:{},o=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[c].concat(o))}})),u(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,c=m({},y(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?m({},c.style,r):r),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),c=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,c=0,o=[],s=[o];c>-1;){for(;(l=n[c]++)<r[c];){var i=void 0,u=t[c],m=a[c][l];if("string"==typeof m?(u=c>0?u:["plain"],i=m):(u=h(u,m.type),m.alias&&(u=h(u,m.alias)),i=m.content),"string"==typeof i){var b=i.split(p),y=b.length;o.push({types:u,content:b[0]});for(var g=1;g<y;g++)d(o),s.push(o=[]),o.push({types:u,content:b[g]})}else c++,t.push(u),a.push(i),n.push(0),r.push(i.length)}c--,t.pop(),a.pop(),n.pop(),r.pop()}return d(o),s}(void 0!==c?t.tokenize(n,c,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),f=a(108),v=a.n(f),k=a(109),j=a.n(k),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=a(112),N=a(101),C=function(){var e=Object(N.useThemeConfig)().prism,t=Object(O.a)().isDarkTheme,a=e.theme||E,n=e.darkTheme||a;return t?n:a},x=a(56),S=a.n(x),_=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},w=/(?:title=")(.*)(?:")/,P=function(e){var t=e.children,a=e.className,c=e.metastring,s=Object(N.useThemeConfig)().prism,u=Object(r.useState)(!1),m=u[0],p=u[1],d=Object(r.useState)(!1),h=d[0],b=d[1];Object(r.useEffect)((function(){b(!0)}),[]);var y=Object(r.useRef)(null),f=[],k="",E=C(),O=Array.isArray(t)?t.join(""):t;if(c&&_.test(c)){var x=c.match(_)[1];f=j()(x).filter((function(e){return e>0}))}c&&w.test(c)&&(k=c.match(w)[1]);var P=a&&a.replace(/language-/,"");!P&&s.defaultLanguage&&(P=s.defaultLanguage);var I=O.replace(/\n$/,"");if(0===f.length&&void 0!==P){for(var L,B="",D=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(P),M=O.replace(/\n$/,"").split("\n"),R=0;R<M.length;){var A=R+1,H=M[R].match(D);if(null!==H){switch(H.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=A+",";break;case"highlight-start":L=A;break;case"highlight-end":B+=L+"-"+(A-1)+","}M.splice(R,1)}else R+=1}f=j()(B),I=M.join("\n")}var W=function(){v()(I),p(!0),setTimeout((function(){return p(!1)}),2e3)};return l.a.createElement(g,Object(n.a)({},i,{key:String(h),theme:E,code:I,language:P}),(function(e){var t,a=e.className,r=e.style,c=e.tokens,s=e.getLineProps,i=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,k&&l.a.createElement("div",{style:r,className:S.a.codeBlockTitle},k),l.a.createElement("div",{className:S.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(o.a)(a,S.a.codeBlock,"thin-scrollbar",(t={},t[S.a.codeBlockWithTitle]=k,t))},l.a.createElement("div",{className:S.a.codeBlockLines,style:r},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=s({line:e,key:t});return f.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},i({token:e,key:t})))})))})))),l.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(o.a)(S.a.copyButton),onClick:W},m?"Copied":"Copy")))}))},I=a(7),L=(a(57),a(58)),B=a.n(L),D=function(e){return function(t){var a,n=t.id,r=Object(I.a)(t,["id"]),c=Object(N.useThemeConfig)().navbar.hideOnScroll;return n?l.a.createElement(e,r,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(o.a)("anchor",(a={},a[B.a.enhancedAnchor]=!c,a)),id:n}),r.children,l.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):l.a.createElement(e,r)}},M=a(59),R=a.n(M);const A={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?l.a.createElement(P,e):l.a.createElement("code",e):t},a:e=>l.a.createElement(c.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:R.a.mdxCodeBlock},e)),h1:D("h1"),h2:D("h2"),h3:D("h3"),h4:D("h4"),h5:D("h5"),h6:D("h6")};t.a=A},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(106);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(103),c=a(22),o=a(25),s=a(106),i=a(3),u=a(100),m=a(101),p=a(122),d=a(126),h=a(127),b=a(125),y=a(102),g=a(115),f=a(129);var v=e=>r.a.createElement("svg",Object(i.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),k=a(128),j=a(74),E=a.n(j);const O=(e,t)=>"link"===e.type?Object(m.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>O(e,t)));function N({item:e,onItemClick:t,collapsible:a,activePath:l,...c}){const{items:o,label:s}=e,m=O(e,l),p=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(m),[d,h]=Object(n.useState)((()=>!!a&&(!m&&e.collapsed))),b=Object(n.useRef)(null),[y,g]=Object(n.useState)(void 0),f=(e=!0)=>{var t;g(e?`${null===(t=b.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{m&&!p&&d&&h(!1)}),[m,p,d]);const v=Object(n.useCallback)((e=>{e.preventDefault(),y||f(),setTimeout((()=>h((e=>!e))),100)}),[y]);return 0===o.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:s},r.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&m,[E.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},c),s),r.a.createElement("ul",{className:"menu__list",ref:b,style:{height:y},onTransitionEnd:()=>{d||f(!1)}},o.map((e=>r.a.createElement(x,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:l})))))}function C({item:e,onItemClick:t,activePath:a,collapsible:n,...l}){const{href:c,label:o}=e,s=O(e,a);return r.a.createElement("li",{className:"menu__list-item",key:o},r.a.createElement(y.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":s}),to:c},Object(g.a)(c)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),o))}function x(e){switch(e.item.type){case"category":return r.a.createElement(N,e);case"link":default:return r.a.createElement(C,e)}}var S=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:l,isHidden:c}){const[o,s]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:y}=Object(m.useThemeConfig)(),{isAnnouncementBarClosed:g}=Object(p.a)(),{scrollY:j}=Object(b.a)();Object(d.a)(o);const O=Object(h.a)();return Object(n.useEffect)((()=>{O===h.b.desktop&&s(!1)}),[O]),r.a.createElement("div",{className:Object(u.a)(E.a.sidebar,{[E.a.sidebarWithHideableNavbar]:i,[E.a.sidebarHidden]:c})},i&&r.a.createElement(f.a,{tabIndex:-1,className:E.a.sidebarLogo}),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,{"menu--show":o,[E.a.menuWithAnnouncementBar]:!g&&0===j})},r.a.createElement("button",{"aria-label":o?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!o)}},o?r.a.createElement("span",{className:Object(u.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(k.a,{className:E.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},t.map((t=>r.a.createElement(x,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:a,activePath:e}))))),y&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:l},r.a.createElement(v,{className:E.a.collapseSidebarButtonIcon})))},_=a(110),T=a(118),w=a(111),P=a(75),I=a.n(P);function L({currentDocRoute:e,versionMetadata:t,children:a}){var o,i;const{siteConfig:p,isClient:d}=Object(c.default)(),{pluginId:h,permalinkToSidebar:b,docsSidebars:y,version:g}=t,f=b[e.path],k=y[f],[j,E]=Object(n.useState)(!1),[O,N]=Object(n.useState)(!1),C=Object(n.useCallback)((()=>{O&&N(!1),E(!j)}),[O]);return r.a.createElement(s.a,{key:d,searchMetadatas:{version:g,tag:Object(m.docVersionSearchTag)(h,g)}},r.a.createElement("div",{className:I.a.docPage},k&&r.a.createElement("div",{className:Object(u.a)(I.a.docSidebarContainer,{[I.a.docSidebarContainerHidden]:j}),onTransitionEnd:e=>{e.currentTarget.classList.contains(I.a.docSidebarContainer)&&j&&N(!0)},role:"complementary"},r.a.createElement(S,{key:f,sidebar:k,path:e.path,sidebarCollapsible:null===(o=null===(i=p.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===o||o,onCollapse:C,isHidden:O}),O&&r.a.createElement("div",{className:I.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:C,onClick:C},r.a.createElement(v,null))),r.a.createElement("main",{className:I.a.docMainContainer},r.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",I.a.docItemWrapper,{[I.a.docItemWrapperEnhanced]:j})},r.a.createElement(l.a,{components:_.a},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,l=t.find((e=>Object(w.matchPath)(n.pathname,e)));return l?r.a.createElement(L,{currentDocRoute:l,versionMetadata:a},Object(o.a)(t)):r.a.createElement(T.default,e)}}}]);