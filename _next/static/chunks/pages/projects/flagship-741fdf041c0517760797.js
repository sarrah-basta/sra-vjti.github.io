_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"9YYt":function(e,t,n){e.exports={flagshipProj:"FlagshipProjects_flagshipProj__1EVm8",flagshipProjImg:"FlagshipProjects_flagshipProjImg__9NKdM",flagshipProjCont:"FlagshipProjects_flagshipProjCont__-WBoy",flagshipProjContName:"FlagshipProjects_flagshipProjContName__1OJrP",flagshipProjContSub:"FlagshipProjects_flagshipProjContSub__3Vqld",flagshipProjContLinks:"FlagshipProjects_flagshipProjContLinks__2tv0w"}},"Tu/p":function(e,t,n){e.exports={hero:"Hero_hero__1fVUa",heroHead:"Hero_heroHead__12Yiw",heroSub:"Hero_heroSub__3-rrY",notif:"Hero_notif__yKDqh",wobble:"Hero_wobble__DlBEw","scroll-indicator":"Hero_scroll-indicator__1OdvK",bounce:"Hero_bounce__22czQ",is:"Hero_is__2c_Nk",caption:"Hero_caption__1RLmY",captionHead:"Hero_captionHead__bPVFr",captionSub:"Hero_captionSub__-hd2G",scrollIndicator:"Hero_scrollIndicator__zJATM"}},WQOW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/flagship",function(){return n("oc8R")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var r,o=i(n("q1tI")),s=n("elyg"),c=n("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=r||(u?r=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function h(e,t,n,a){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),d[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=o.default.useState(),i=a(n,2),r=i[0],l=i[1],p=(0,c.useRouter)(),j=p&&p.pathname||"/",g=o.default.useMemo((function(){var t=(0,s.resolveHref)(j,e.href,!0),n=a(t,2),i=n[0],r=n[1];return{href:i,as:e.as?(0,s.resolveHref)(j,e.as):r||i}}),[j,e.href,e.as]),b=g.href,m=g.as;o.default.useEffect((function(){if(t&&u&&r&&r.tagName&&(0,s.isLocalURL)(b)&&!d[b+"%"+m])return f(r,(function(){h(p,b,m)}))}),[t,r,b,m,p]);var _=e.children,v=e.replace,O=e.shallow,x=e.scroll;"string"===typeof _&&(_=o.default.createElement("a",null,_));var N=o.Children.only(_),P={ref:function(e){e&&l(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,a,i,r,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[i?"replace":"push"](n,a,{shallow:r}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,b,m,v,O,x)}};return t&&(P.onMouseEnter=function(e){(0,s.isLocalURL)(b)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),h(p,b,m,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(P.href=(0,s.addBasePath)((0,s.addLocale)(m,p&&p.locale,p&&p.defaultLocale))),o.default.cloneElement(N,P)};t.default=p},mC2l:function(e,t,n){"use strict";var a=n("Tu/p"),i=n.n(a),r=n("IP2g"),o=n("wHSu"),s=n("nKUr");t.a=function(e){var t=e.imgName,n=e.title,a=e.subtitleList,c=e.isHome,l=e.backgroundPosition,u=void 0===l?"center":l;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{style:{backgroundImage:'linear-gradient(\n                            to bottom,\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5)), url("/static/images/'.concat(t,'")'),backgroundPosition:u},className:i.a.hero,children:[Object(s.jsx)("div",{className:i.a.heroHead,children:n}),Object(s.jsx)("div",{className:i.a.heroSub,children:a.map((function(e,t){return a.length!==t+1?Object(s.jsxs)("span",{children:[e,"\xa0\xa0\u2022\xa0\xa0"]},"hero_".concat(t)):Object(s.jsx)("span",{children:e},"hero_".concat(t))}))}),Object(s.jsx)("a",{href:"#is",children:Object(s.jsx)("div",{className:i.a.scrollIndicator})}),c&&Object(s.jsx)("a",{href:"#notifs",className:i.a.notif,children:Object(s.jsx)(r.a,{icon:o.a})})]}),c&&Object(s.jsxs)("div",{className:i.a.is,id:"is",children:[Object(s.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/ideate-final2.jpg")'},className:i.a.caption,children:[Object(s.jsx)("div",{className:i.a.captionHead,children:"Ideate"}),Object(s.jsx)("div",{className:i.a.captionSub,children:"Changing the world, one solution at a time."})]}),Object(s.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000098, #00000098),\n\t\turl("/static/images/innovate-final2.jpg")'},className:i.a.caption,children:[Object(s.jsx)("div",{className:i.a.captionHead,children:"Innovate"}),Object(s.jsx)("div",{className:i.a.captionSub,children:"Creativity is thinking up new things. Innovation is doing new things."})]}),Object(s.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/inspire-final2.jpg")'},className:i.a.caption,children:[Object(s.jsx)("div",{className:i.a.captionHead,children:"Inspire"}),Object(s.jsx)("div",{className:i.a.captionSub,children:"Don't inspire by being perfect, inspire by embracing your imperfections."})]})]})]})}},oc8R:function(e,t,n){"use strict";n.r(t);var a=n("9YYt"),i=n.n(a),r=(n("YFqc"),n("KSab")),o=n("8tEE"),s=n("mC2l"),c=n("IP2g"),l=n("nKUr"),u=function(e){var t=e.imgName,n=e.name,a=e.sub,r=e.githubLink;return Object(l.jsxs)("div",{className:i.a.flagshipProj,children:[Object(l.jsx)("div",{style:{backgroundImage:'url("/static/images/'.concat(t,'")')},className:i.a.flagshipProjImg}),Object(l.jsxs)("div",{className:i.a.flagshipProjCont,children:[Object(l.jsx)("div",{className:i.a.flagshipProjContName,children:n}),Object(l.jsx)("div",{className:i.a.flagshipProjContSub,children:a}),Object(l.jsx)("div",{className:i.a.flagshipProjContLinks,children:Object(l.jsx)("a",{href:r,children:Object(l.jsx)(c.a,{icon:o.b})})})]})]})},d=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.a,{imgName:"flagship-hero-final.jpg",title:Object(l.jsx)(l.Fragment,{children:"Flagship Projects"}),subtitleList:["Innovation exemplified."],isHome:!1}),Object(l.jsx)("div",{className:i.a.flagshipProjects,id:"is",children:r.k.map((function(e,t){return Object(l.jsx)(u,{imgName:e.imgName,name:e.name,sub:e.sub,githubLink:e.githubLink},"flagship_project_".concat(t))}))})]})};t.default=function(){return Object(l.jsx)(d,{})}}},[["WQOW",0,1,3,5,2,4]]]);