"use strict";(self.webpackChunkdeveloper_site=self.webpackChunkdeveloper_site||[]).push([[92],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return N}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),s=m(a),N=r,g=s["".concat(p,".").concat(N)]||s[N]||k[N]||l;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1345:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],d={title:"Models",sidebar_label:"Models"},p=void 0,m={unversionedId:"tech/conversation/models",id:"tech/conversation/models",title:"Models",description:"Conversations are possible thanks to 5 different models:",source:"@site/docs/tech/conversation/models.md",sourceDirName:"tech/conversation",slug:"/tech/conversation/models",permalink:"/developer/docs/tech/conversation/models",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tech/conversation/models.md",tags:[],version:"current",lastUpdatedAt:1643880186,formattedLastUpdatedAt:"2/3/2022",frontMatter:{title:"Models",sidebar_label:"Models"},sidebar:"tech",previous:{title:"Norms",permalink:"/developer/docs/tech/conversation/norms"},next:{title:"Ask for Help",permalink:"/developer/docs/tech/usecase/ask-for-help"}},o={},k=[{value:"Task type",id:"task-type",level:2},{value:"Norm",id:"norm",level:2},{value:"Task",id:"task",level:2},{value:"Transaction",id:"transaction",level:2},{value:"Message",id:"message",level:2}],s={toc:k};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Conversations are possible thanks to 5 different models:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"task type"),(0,l.kt)("li",{parentName:"ol"},"norm"),(0,l.kt)("li",{parentName:"ol"},"task"),(0,l.kt)("li",{parentName:"ol"},"transaction"),(0,l.kt)("li",{parentName:"ol"},"message")),(0,l.kt)("h2",{id:"task-type"},"Task type"),(0,l.kt)("p",null,"The task type defines what the users can do in a task."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Read only"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The unique identifier of the task type"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the task type"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"The description of the task type"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keywords")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string array ","|"," _null")),(0,l.kt)("td",{parentName:"tr",align:null},"keywords to define the task type"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"attributes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"object")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"It is a JSON object where the fields are the possible attributes of the task, and the value is the name is the OpenAPI description of the possible values for the attribute."),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transactions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"object")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"It is a JSON object where the fields are the possible labels of the transactions that the users can do on the task, and the value is the OpenAPI description of the attributes for the transaction"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"callbacks")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"object")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"It is a JSON object where the fields are the possible labels of the messages that the norms can send to the application for a user, and the value is the OpenAPI description of the attributes for the message"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"norms")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"object array")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"that describe the possible behaviour can do in a task of this type. If you want to read more about how to define norms read the ",(0,l.kt)("a",{parentName:"td",href:"https://internetofus.github.io/developer/docs/tech/conversation/norms"},"norms section on the developer documentation")),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h2",{id:"norm"},"Norm"),(0,l.kt)("p",null,"A norm is a set of conditions that if they are satisfied provokes that has to do a set of actions, and with this mechanism is controlled the interactions in the WeNet platform.\nIf you want to read more about how to define norms read the ",(0,l.kt)("a",{parentName:"p",href:"https://internetofus.github.io/developer/docs/tech/conversation/norms"},"norm section on the developer documentation")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Read only"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"whenever")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The conditions that active the norm"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thenceforth")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The actions to do when the conditions are satisfied"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ontology")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"The extra code that is used on the conditions or the actions"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"The description of the norm"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h2",{id:"task"},"Task"),(0,l.kt)("p",null,"A task represents a particular request that a user can publish within the platform.\nIt may be a question as well as an invite to a public event."),(0,l.kt)("p",null,"Tasks are created by user within a specific application.\nOnce created, their updated state can be requested."),(0,l.kt)("p",null,"The currently supported use cases are about:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"asking for help;"),(0,l.kt)("li",{parentName:"ul"},"organising a social event.")),(0,l.kt)("p",null,"The Task model is made of by the following parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Read only"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The unique identifier of the task"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"taskTypeId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The identifier of the task type"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"appId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the app in which the task was generated"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"communityId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"The identifier of a community the task is meant for"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"requesterId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The wenet id of the task creator"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"goal")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"dict")),(0,l.kt)("td",{parentName:"tr",align:null},"The Task Goal object about the task. See below for more details"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"closeTs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"int")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"The UTC epoch timestamp representing the instant of the end of the task"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"norms")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:null},"The list of norms associated to the task"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"attributes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:null},"The list of specific attributes of the task"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transactions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:null},"The complete list of transactions that were applied to the task"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_creationTs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"The UTC epoch timestamp representing the creation instant"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_lastUpdateTs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"The UTC epoch timestamp representing the last update instant"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("p",null,"The Task goal is composed by the following parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Read only"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"The goal name"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"TThe goal descriptione"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keywords")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:null},"A list of keywords describing and defining the task"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h2",{id:"transaction"},"Transaction"),(0,l.kt)("p",null,"A Transaction represents a specific action that was applied on a task by either the task creator of by another user participating to the task lifecycle."),(0,l.kt)("p",null,"A Transaction may be applicable only to a Task with a very specific state."),(0,l.kt)("p",null,"The Transaction model is made of by the following parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Read only"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The unique identifier of the transaction"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"taskId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The identifier of the associated task"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The identifier of the transaction type"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"attributes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The list of specific attributes of the transaction"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"actioneerId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The wenet id of the transaction creator"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"messages")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The list of messages generated due to the transaction"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_creationTs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The UTC epoch timestamp representing the creation instant"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_lastUpdateTs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The UTC epoch timestamp representing the last update instant"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("h2",{id:"message"},"Message"),(0,l.kt)("p",null,"A Message is used by the platform for sending back messages to applications and users."),(0,l.kt)("p",null,"The Message model is made of by the following parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Read only"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"appId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The identifier of the application the message is meant for"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"receiverId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The identifier of the wenet user the message is meant for"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The identifier of the message type"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"attributes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:"right"},"The list of specific attributes of the message"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))))}N.isMDXComponent=!0}}]);