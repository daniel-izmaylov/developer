(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{103:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(111);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var a=n(117);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return a.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return a.DEFAULT_SEARCH_TAG}});var o=n(112);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return o.isDocsPluginEnabled}});var i=n(121);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return i.isSamePath}});var c=n(122);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return c.useTitleFormatter}});var u=n(123);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return u.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return u.useDocsPreferredVersionByPluginId}});var s=n(113);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return s.DocsPreferredVersionContextProvider}})},105:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(10),i=n(110),c=n(11),u=Object(r.createContext)({collectLink:function(){}}),s=n(107),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:d,href:f,activeClassName:m,isActive:v,"data-noBrokenLinkCheck":g,autoAddBaseUrl:p=!0}=e,b=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(s.b)(),E=Object(r.useContext)(u),D=d||f,P=Object(i.a)(D),_=null==D?void 0:D.replace("pathname://",""),O=void 0!==_?(V=_,p&&(e=>e.startsWith("/"))(V)?h(V):V):void 0;var V;const j=Object(r.useRef)(!1),y=n?o.e:o.c,A=c.a.canUseIntersectionObserver;let w;Object(r.useEffect)((()=>(!A&&P&&window.docusaurus.prefetch(O),()=>{A&&w&&w.disconnect()})),[O,A,P]);const C=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,N=!O||!P||C;return O&&P&&!C&&!g&&E.collectLink(O),N?a.a.createElement("a",Object.assign({href:O},D&&!P&&{target:"_blank",rel:"noopener noreferrer"},b)):a.a.createElement(y,Object.assign({},b,{onMouseEnter:()=>{j.current||(window.docusaurus.preload(O),j.current=!0)},innerRef:e=>{var t,n;A&&e&&P&&(t=e,n=()=>{window.docusaurus.prefetch(O)},w=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(w.unobserve(t),w.disconnect(),n())}))})),w.observe(t))},to:O||""},n&&{isActive:v,activeClassName:m}))}},106:function(e,t,n){try{e.exports=n(118)}catch(r){e.exports={}}},107:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(22),a=n(110);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},108:function(e,t,n){"use strict";n.r(t);var r=n(10);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},110:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},111:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var a=r(n(22));t.useThemeConfig=function(){return a.default().siteConfig.themeConfig}},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var r=n(106);t.isDocsPluginEnabled=!!r.useAllDocsData},113:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var c=o(n(0)),u=n(111),s=n(112),l=n(106),d=i(n(124));function f(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var a={};return t.forEach((function(e){a[e]=function(e){var t=d.default.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(d.default.clear(e,n),{preferredVersionName:null})}(e)})),a}function m(){var e=l.useAllDocsData(),t=u.useThemeConfig().docs.versionPersistence,n=c.useMemo((function(){return Object.keys(e)}),[e]),r=c.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),a=r[0],o=r[1];return c.useEffect((function(){o(f({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[a,c.useMemo((function(){return{savePreferredVersion:function(e,n){d.default.save(e,t,n),o((function(t){var r;return Object.assign(Object.assign({},t),((r={})[e]={preferredVersionName:n},r))}))}}}),[o])]}var v=c.createContext(null);function g(e){var t=e.children,n=m();return c.default.createElement(v.Provider,{value:n},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return s.isDocsPluginEnabled?c.default.createElement(g,null,t):c.default.createElement(c.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=c.useContext(v);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(108),a=n(119),o=n(120);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=r.useLocation().pathname;return o.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getDocVersionSuggestions(n,a)}},119:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return i}));var r=n(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=a()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(108);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,o,i=t.getActiveVersion(e,n),c=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:c,alternateDocVersions:c?(a=c.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),o=a.activeVersion!==r;return{latestDocSuggestion:o?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)}},122:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var a=r(n(22));t.useTitleFormatter=function(e){var t=a.default().siteConfig,n=void 0===t?{}:t,r=n.title,o=n.titleDelimiter,i=void 0===o?"|":o;return e&&e.trim().length?e.trim()+" "+i+" "+r:r}},123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var r=n(0),a=n(113),o=n(106),i=n(125);t.useDocsPreferredVersion=function(e){void 0===e&&(e=i.DEFAULT_PLUGIN_ID);var t=o.useDocsData(e),n=a.useDocsPreferredVersionContext(),c=n[0],u=n[1],s=c[e].preferredVersionName;return{preferredVersion:s?t.versions.find((function(e){return e.name===s})):null,savePreferredVersionName:r.useCallback((function(t){u.savePreferredVersion(e,t)}),[u])}},t.useDocsPreferredVersionByPluginId=function(){var e=o.useAllDocsData(),t=a.useDocsPreferredVersionContext()[0],n=Object.keys(e),r={};return n.forEach((function(n){r[n]=function(n){var r=e[n],a=t[n].preferredVersionName;return a?r.versions.find((function(e){return e.name===a})):null}(n)})),r}},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return"docs-preferred-version-"+e},a={save:function(e,t,n){"none"===t||window.localStorage.setItem(r(e),n)},read:function(e,t){return"none"===t?null:window.localStorage.getItem(r(e))},clear:function(e,t){"none"===t||window.localStorage.removeItem(r(e))}};t.default=a},125:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));var r="default"},126:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a),i=n(103),c=n(57),u=n.n(c);t.a=({className:e,...t})=>o.a.createElement("svg",Object(r.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(i.a)(u.a.iconEdit,e)},t),o.a.createElement("g",null,o.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},131:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(103);var i=function(e,t,n){var a=Object(r.useState)(void 0),o=a[0],i=a[1];Object(r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,c=!1,u=document.getElementsByClassName(e);a<u.length&&!c;){var s=u[a],l=s.href,d=decodeURIComponent(l.substring(l.indexOf("#")+1));r.id===d&&(o&&o.classList.remove(t),s.classList.add(t),i(s),c=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},c=n(56),u=n.n(c);const s="table-of-contents__link";function l({toc:e,isChild:t}){return e.length?a.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>a.a.createElement("li",{key:e.id},a.a.createElement("a",{href:`#${e.id}`,className:s,dangerouslySetInnerHTML:{__html:e.value}}),a.a.createElement(l,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return i(s,"table-of-contents__link--active",100),a.a.createElement("div",{className:Object(o.a)(u.a.tableOfContents,"thin-scrollbar")},a.a.createElement(l,{toc:e}))}},98:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),i=n(104),c=n(22),u=n(107),s=n(105);var l=function(e){const{metadata:t}=e;return a.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},a.a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),a.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),a.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=n(106);var f=function(){const{siteConfig:{title:e}}=Object(c.default)(),{pluginId:t}=Object(d.useActivePlugin)({failfast:!0}),{savePreferredVersionName:n}=Object(i.useDocsPreferredVersion)(t),r=Object(d.useActiveVersion)(t),{latestDocSuggestion:o,latestVersionSuggestion:u}=Object(d.useDocVersionSuggestions)(t);if(!u)return a.a.createElement(a.a.Fragment,null);const l=null!=o?o:(f=u).docs.find((e=>e.id===f.mainDocId));var f;return a.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===r.name?a.a.createElement("div",null,"This is unreleased documentation for ",e," ",a.a.createElement("strong",null,r.label)," version."):a.a.createElement("div",null,"This is documentation for ",e," ",a.a.createElement("strong",null,r.label),", which is no longer actively maintained."),a.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",a.a.createElement("strong",null,a.a.createElement(s.a,{to:l.path,onClick:()=>n(u.name)},"latest version"))," ","(",u.label,")."))},m=n(131),v=n(126),g=n(103),p=n(72),b=n.n(p);t.default=function(e){const{siteConfig:t}=Object(c.default)(),{url:n}=t,{content:r}=e,{metadata:s,frontMatter:{image:p,keywords:h,hide_title:E,hide_table_of_contents:D}}=r,{description:P,title:_,permalink:O,editUrl:V,lastUpdatedAt:j,lastUpdatedBy:y}=s,{pluginId:A}=Object(d.useActivePlugin)({failfast:!0}),w=Object(d.useVersions)(A),C=Object(d.useActiveVersion)(A),N=w.length>1,x=Object(i.useTitleFormatter)(_),L=Object(u.a)(p,{absolute:!0});return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("title",null,x),a.a.createElement("meta",{property:"og:title",content:x}),P&&a.a.createElement("meta",{name:"description",content:P}),P&&a.a.createElement("meta",{property:"og:description",content:P}),h&&h.length&&a.a.createElement("meta",{name:"keywords",content:h.join(",")}),p&&a.a.createElement("meta",{property:"og:image",content:L}),p&&a.a.createElement("meta",{name:"twitter:image",content:L}),p&&a.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${_}`}),O&&a.a.createElement("meta",{property:"og:url",content:n+O}),O&&a.a.createElement("link",{rel:"canonical",href:n+O})),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:Object(g.a)("col",{[b.a.docItemCol]:!D})},a.a.createElement(f,null),a.a.createElement("div",{className:b.a.docItemContainer},a.a.createElement("article",null,N&&a.a.createElement("div",null,a.a.createElement("span",{className:"badge badge--secondary"},"Version: ",C.label)),!E&&a.a.createElement("header",null,a.a.createElement("h1",{className:b.a.docTitle},_)),a.a.createElement("div",{className:"markdown"},a.a.createElement(r,null))),(V||j||y)&&a.a.createElement("div",{className:"margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},V&&a.a.createElement("a",{href:V,target:"_blank",rel:"noreferrer noopener"},a.a.createElement(v.a,null),"Edit this page")),(j||y)&&a.a.createElement("div",{className:"col text--right"},a.a.createElement("em",null,a.a.createElement("small",null,"Last updated"," ",j&&a.a.createElement(a.a.Fragment,null,"on"," ",a.a.createElement("time",{dateTime:new Date(1e3*j).toISOString(),className:b.a.docLastUpdatedAt},new Date(1e3*j).toLocaleDateString()),y&&" "),y&&a.a.createElement(a.a.Fragment,null,"by ",a.a.createElement("strong",null,y)),!1))))),a.a.createElement("div",{className:"margin-vert--lg"},a.a.createElement(l,{metadata:s})))),!D&&r.toc&&a.a.createElement("div",{className:"col col--3"},a.a.createElement(m.a,{toc:r.toc}))))}}}]);