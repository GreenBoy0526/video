import{r as y,o as a,c as A,d as b,u as L,a as i,b as s,w as n,e as t,F as v,f as g,g as m,B as k,h as _,t as x,_ as D,i as $,j as C,k as N,I,l as O,m as V,n as P}from"./vendor.a736f8b1.js";const R=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const u of e)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const u={};return e.integrity&&(u.integrity=e.integrity),e.referrerpolicy&&(u.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?u.credentials="include":e.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(e){if(e.ep)return;e.ep=!0;const u=o(e);fetch(e.href,u)}};R();var G=(d,l)=>{const o=d.__vccOpts||d;for(const[r,e]of l)o[r]=e;return o};const H={};function S(d,l){const o=y("router-view");return a(),A(o)}var q=G(H,[["render",S]]);const z=t("a",{href:"http://greenboy0526.gitee.io/site-navigation"},"\u7F51\u5740\u5BFC\u822A",-1),K=_("\u6392\u9AA8\u6C64\u5927\u4EBA\u7684\u89C6\u9891\u5C0F\u7AD9"),M={class:"menu"},T=b({setup(d){const l=L();let o=[{name:"VIP\u89E3\u6790\uFF08\u4EC5\u4F9B\u5B66\u4E60\uFF09",route:"jiexi"},{name:"\u6211\u7684\u89C6\u9891",route:"video"}];function r(e){e.name=="\u6211\u7684\u89C6\u9891",l.push(e.route)}return(e,u)=>{const c=D,f=k,h=$;return a(),i(v,null,[s(f,null,{default:n(()=>[s(c,null,{default:n(()=>[z]),_:1}),s(c,null,{default:n(()=>[K]),_:1})]),_:1}),t("div",M,[(a(!0),i(v,null,g(m(o),p=>(a(),i("div",null,[s(h,{type:"primary",onClick:E=>r(p)},{default:n(()=>[_(x(p.name),1)]),_:2},1032,["onClick"])]))),256))])],64)}}});var U="/img/\u516C\u4F17\u53F7\u4E8C\u7EF4\u7801.jpg";const W=_("\u6392\u9AA8\u6C64\u5927\u4EBA\u7684\u89C6\u9891\u5C0F\u7AD9"),J=_("VIP\u89E3\u6790\uFF08\u4EC5\u4F9B\u5B66\u4E60\uFF09"),Q={class:"box"},X={id:"kuangjia"},Y={key:0,id:"readme"},Z=t("h2",null,"\u4F7F\u7528\u8BF4\u660E",-1),ee=t("p",null,"\u8F93\u5165\u5F71\u7247\u540D\u6216\u7C98\u8D34\u89C6\u9891\u5730\u5740\u540E\u70B9\u51FB\u4EFB\u610F\u63A5\u53E3\u5373\u53EF\u64AD\u653E\uFF0C\u5982\u679C\u4E0D\u884C\u5C31\u6362\u4E00\u4E2A\u63A5\u53E3",-1),ue=t("p",null,"\u672C\u9875\u9762\u4EC5\u7528\u4E8E\u5B66\u4E60\u7814\u7A76",-1),te=t("p",null,[_(" \u66F4\u591A\u5185\u5BB9\u8BF7\u5173\u6CE8\u5FAE\u4FE1\u516C\u4F17\u53F7: "),t("span",{id:"GreenBoy"},"GreenBoy")],-1),ne=t("img",{src:U},null,-1),oe=[Z,ee,ue,te,ne],re=["src"],se={id:"button"},le=b({setup(d){let l=[{name:"m1907",url:"https://z1.m1907.cn/?jx="},{name:"ok",url:"https://api.okjx.cc:3389/jx.php?url="}],o=C(!0),r=C(""),e=C("");function u(c){o.value=!1,r.value=c.url+e.value}return(c,f)=>{const h=y("router-link"),p=D,E=k,B=I,j=$;return a(),i(v,null,[s(E,null,{default:n(()=>[s(p,null,{default:n(()=>[s(h,{to:"/"},{default:n(()=>[W]),_:1})]),_:1}),s(p,null,{default:n(()=>[J]),_:1})]),_:1}),t("div",Q,[t("div",X,[m(o)?(a(),i("div",Y,oe)):(a(),i("iframe",{key:1,src:m(r),width:"100%",height:"400px",allowfullscreen:"true"},null,8,re))]),s(B,{value:m(e),"onUpdate:value":f[0]||(f[0]=F=>N(e)?e.value=F:e=F),placeholder:"\u64AD\u653E\u5730\u5740\u6216\u5F71\u7247\u540D"},null,8,["value"]),t("div",se,[(a(!0),i(v,null,g(m(l),F=>(a(),A(j,{onClick:ve=>u(F)},{default:n(()=>[_(x(F.name),1)]),_:2},1032,["onClick"]))),256))])])],64)}}}),ae=_("\u6392\u9AA8\u6C64\u5927\u4EBA\u7684\u89C6\u9891\u5C0F\u7AD9"),ce=_("\u7F51\u7EA2\u4E4B\u8DEF"),ie={class:"box"},_e=["src"],de=t("hr",null,null,-1),pe=b({setup(d){let l=[{name:"\u4E94\u884C",url:"/video/\u4E94\u884C.mp4"},{name:"\u8FDB\u5BAB",url:"/video/\u8FDB\u5BAB.mp4"},{name:"\u9ED1\u571F\u767D\u4E91",url:"/video/\u9ED1\u571F\u767D\u4E91.mp4"},{name:"\u516C\u4E3B\u75C5",url:"/video/\u516C\u4E3B\u75C5.mp4"},{name:"\u516C\u4E3B\u75C5\uFF08\u91CD\u53E3\uFF09",url:"/video/\u516C\u4E3B\u75C5\uFF08\u91CD\u53E3\uFF09.mp4"}],o=C("/video/\u4E94\u884C.mp4");const r=C(null);function e(u){r.value&&(r.value.src=u.url)}return(u,c)=>{const f=y("router-link"),h=D,p=k,E=$;return a(),i(v,null,[s(p,null,{default:n(()=>[s(h,null,{default:n(()=>[s(f,{to:"/"},{default:n(()=>[ae]),_:1})]),_:1}),s(h,null,{default:n(()=>[ce]),_:1})]),_:1}),t("div",ie,[t("video",{style:{width:"30rem",height:"30rem"},controls:"",autoplay:"",ref_key:"video",ref:r},[t("source",{src:m(o),type:"video/mp4"},null,8,_e)],512),de,(a(!0),i(v,null,g(m(l),B=>(a(),A(E,{onClick:j=>e(B)},{default:n(()=>[_(x(B.name),1)]),_:2},1032,["onClick"]))),256))])],64)}}}),me=O(),fe=[{path:"/",name:"index",component:T},{path:"/jiexi",name:"jiexi",component:le},{path:"/video",name:"video",component:pe}],he=V({history:me,routes:fe}),w=P(q);w.use(he);w.mount("#app");