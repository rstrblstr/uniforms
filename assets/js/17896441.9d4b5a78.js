(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(207),i=a(186);var s=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(i.b)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(l.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(i.a,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(l.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(i.a,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=a(16),c=a(387),d=a(133);function m(e){var t=e.siteTitle,a=e.versionLabel;return r.a.createElement(i.a,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:r.a.createElement("strong",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function u(e){var t=e.siteTitle,a=e.versionLabel;return r.a.createElement(i.a,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:r.a.createElement("strong",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v(e){var t=e.versionLabel,a=e.to,n=e.onClick;return r.a.createElement(i.a,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:r.a.createElement("strong",null,r.a.createElement(l.a,{to:a,onClick:n},r.a.createElement(i.a,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var p=function(){var e=Object(o.default)().siteConfig.title,t=Object(c.useActivePlugin)({failfast:!0}).pluginId,a=Object(d.useDocsPreferredVersion)(t).savePreferredVersionName,n=Object(c.useActiveVersion)(t),l=Object(c.useDocVersionSuggestions)(t),i=l.latestDocSuggestion,s=l.latestVersionSuggestion;if(!s)return r.a.createElement(r.a.Fragment,null);var p,E=null!=i?i:(p=s).docs.find((function(e){return e.id===p.mainDocId}));return r.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},r.a.createElement("div",null,"current"===n.name?r.a.createElement(m,{siteTitle:e,versionLabel:n.label}):r.a.createElement(u,{siteTitle:e,versionLabel:n.label})),r.a.createElement("div",{className:"margin-top--md"},r.a.createElement(v,{versionLabel:s.label,to:E.path,onClick:function(){return a(s.name)}})))},E=a(520),g=a(77),b=a.n(g);function h(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return r.a.createElement(i.a,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:r.a.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:b.a.lastUpdatedDate},a)}}," on {date}")}function f(e){var t=e.lastUpdatedBy;return r.a.createElement(i.a,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:r.a.createElement("strong",null,t)}}," by {user}")}function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,n=e.lastUpdatedBy;return r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,r.a.createElement(i.a,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?r.a.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:n?r.a.createElement(f,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)))}var L=a(126);var _=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],i=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],d=c.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===m&&(l&&l.classList.remove(t),c.classList.add(t),i(c),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},y=a(78),w=a.n(y),U="table-of-contents__link";function T(e){var t=e.toc,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:U,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(T,{isChild:!0,toc:e.children}))}))):null}var k=function(e){var t=e.toc;return _(U,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(L.a)(w.a.tableOfContents,"thin-scrollbar")},r.a.createElement(T,{toc:t}))},A=a(3),O=a(9),j=a(79),C=a.n(j),V=function(e){var t=e.className,a=Object(O.a)(e,["className"]);return r.a.createElement("svg",Object(A.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(L.a)(C.a.iconEdit,t),"aria-label":"Edit page"},a),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function x(e){var t=e.editUrl;return r.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(V,null),r.a.createElement(i.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var B=a(80),D=a.n(B);t.default=function(e){var t,a=e.content,n=a.metadata,l=a.frontMatter,i=l.image,o=l.keywords,d=l.hide_title,m=l.hide_table_of_contents,u=n.description,v=n.title,g=n.editUrl,b=n.lastUpdatedAt,h=n.formattedLastUpdatedAt,f=n.lastUpdatedBy,_=Object(c.useActivePlugin)({failfast:!0}).pluginId,y=Object(c.useVersions)(_),w=Object(c.useActiveVersion)(_),U=y.length>1;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:v,description:u,keywords:o,image:i}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:Object(L.a)("col",(t={},t[D.a.docItemCol]=!m,t))},r.a.createElement(p,null),r.a.createElement("div",{className:D.a.docItemContainer},r.a.createElement("article",null,U&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",w.label)),!d&&r.a.createElement("header",null,r.a.createElement("h1",{className:D.a.docTitle},v)),r.a.createElement("div",{className:"markdown"},r.a.createElement(a,null))),(g||b||f)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},g&&r.a.createElement(x,{editUrl:g})),(b||f)&&r.a.createElement(N,{lastUpdatedAt:b,formattedLastUpdatedAt:h,lastUpdatedBy:f}))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(s,{metadata:n})))),!m&&a.toc&&r.a.createElement("div",{className:"col col--3"},r.a.createElement(k,{toc:a.toc}))))}},520:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),l=a(27),i=a(437),s=a(133);function o(e){var t=e.title,a=e.description,n=e.keywords,o=e.image,c=Object(s.useTitleFormatter)(t),d=Object(i.a)(o,{absolute:!0});return r.a.createElement(l.a,null,t&&r.a.createElement("title",null,c),t&&r.a.createElement("meta",{property:"og:title",content:c}),a&&r.a.createElement("meta",{name:"description",content:a}),a&&r.a.createElement("meta",{property:"og:description",content:a}),n&&r.a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),o&&r.a.createElement("meta",{property:"og:image",content:d}),o&&r.a.createElement("meta",{name:"twitter:image",content:d}),o&&r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}}}]);