import{r as y,o as a,c as A,d as b,u as L,a as c,b as s,w as n,e as t,F as E,f as g,g as m,B as x,h as _,t as k,_ as D,i as $,j as B,k as N,I,l as O,m as V,n as P}from"./vendor.88d30e6b.js";const G=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const e of u)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(u){const e={};return u.integrity&&(e.integrity=u.integrity),u.referrerpolicy&&(e.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?e.credentials="include":u.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(u){if(u.ep)return;u.ep=!0;const e=o(u);fetch(u.href,e)}};G();var R=(d,l)=>{const o=d.__vccOpts||d;for(const[r,u]of l)o[r]=u;return o};const H={};function S(d,l){const o=y("router-view");return a(),A(o)}var q=R(H,[["render",S]]);const z=t("a",{href:"http://greenboy0526.gitee.io/site-navigation"},"\u7F51\u5740\u5BFC\u822A",-1),K=_("\u6392\u9AA8\u6C64\u5927\u4EBA\u7684\u89C6\u9891\u5C0F\u7AD9"),M={class:"menu"},T=b({setup(d){const l=L();let o=[{name:"VIP\u89E3\u6790\uFF08\u4EC5\u4F9B\u5B66\u4E60\uFF09",route:"jiexi"},{name:"\u6211\u7684\u89C6\u9891",route:"video"}];function r(e){e.name=="\u6211\u7684\u89C6\u9891"&&!u()||l.push(e.route)}function u(){var e=prompt("\u627E\u6211\u95EE\u6697\u53F7\uFF0C\u8F93\u5165\u5373\u53EF\u8DF3\u8F6C");return e=="GreenBoy"?!0:(alert("\u719F\u4EBA\u76F4\u63A5\u627E\u6211\u95EE\u5C31\u53EF\u4EE5"),!1)}return(e,i)=>{const p=D,f=x,F=$;return a(),c(E,null,[s(f,null,{default:n(()=>[s(p,null,{default:n(()=>[z]),_:1}),s(p,null,{default:n(()=>[K]),_:1})]),_:1}),t("div",M,[(a(!0),c(E,null,g(m(o),v=>(a(),c("div",null,[s(F,{type:"primary",onClick:C=>r(v)},{default:n(()=>[_(k(v.name),1)]),_:2},1032,["onClick"])]))),256))])],64)}}});var U="./img/\u516C\u4F17\u53F7\u4E8C\u7EF4\u7801.jpg";const W=_("\u6392\u9AA8\u6C64\u5927\u4EBA\u7684\u89C6\u9891\u5C0F\u7AD9"),J=_("VIP\u89E3\u6790\uFF08\u4EC5\u4F9B\u5B66\u4E60\uFF09"),Q={class:"box"},X={id:"kuangjia"},Y={key:0,id:"readme"},Z=t("h2",null,"\u4F7F\u7528\u8BF4\u660E",-1),uu=t("p",null,"\u8F93\u5165\u5F71\u7247\u540D\u6216\u7C98\u8D34\u89C6\u9891\u5730\u5740\u540E\u70B9\u51FB\u4EFB\u610F\u63A5\u53E3\u5373\u53EF\u64AD\u653E\uFF0C\u5982\u679C\u4E0D\u884C\u5C31\u6362\u4E00\u4E2A\u63A5\u53E3",-1),eu=t("p",null,"\u672C\u9875\u9762\u4EC5\u7528\u4E8E\u5B66\u4E60\u7814\u7A76",-1),tu=t("p",null,[_(" \u66F4\u591A\u5185\u5BB9\u8BF7\u5173\u6CE8\u5FAE\u4FE1\u516C\u4F17\u53F7: "),t("span",{id:"GreenBoy"},"GreenBoy")],-1),nu=t("img",{src:U},null,-1),ou=[Z,uu,eu,tu,nu],ru=["src"],su={id:"button"},lu=b({setup(d){let l=[{name:"m1907",url:"https://z1.m1907.cn/?jx="},{name:"ok",url:"https://api.okjx.cc:3389/jx.php?url="}],o=B(!0),r=B(""),u=B("");function e(i){o.value=!1,r.value=i.url+u.value}return(i,p)=>{const f=y("router-link"),F=D,v=x,C=I,j=$;return a(),c(E,null,[s(v,null,{default:n(()=>[s(F,null,{default:n(()=>[s(f,{to:"/"},{default:n(()=>[W]),_:1})]),_:1}),s(F,null,{default:n(()=>[J]),_:1})]),_:1}),t("div",Q,[t("div",X,[m(o)?(a(),c("div",Y,ou)):(a(),c("iframe",{key:1,src:m(r),allowfullscreen:"true"},null,8,ru))]),s(C,{value:m(u),"onUpdate:value":p[0]||(p[0]=h=>N(u)?u.value=h:u=h),placeholder:"\u64AD\u653E\u5730\u5740\u6216\u5F71\u7247\u540D"},null,8,["value"]),t("div",su,[(a(!0),c(E,null,g(m(l),h=>(a(),A(j,{onClick:vu=>e(h)},{default:n(()=>[_(k(h.name),1)]),_:2},1032,["onClick"]))),256))])])],64)}}});const au=_("\u6392\u9AA8\u6C64\u5927\u4EBA\u7684\u89C6\u9891\u5C0F\u7AD9"),cu=_("\u7F51\u7EA2\u4E4B\u8DEF"),_u={class:"box"},iu=["src"],du=t("hr",null,null,-1),pu=b({setup(d){let l=[{name:"\u4E94\u884C",url:"/video/\u4E94\u884C.mp4"},{name:"\u8FDB\u5BAB",url:"/video/\u8FDB\u5BAB.mp4"},{name:"\u9ED1\u571F\u767D\u4E91",url:"/video/\u9ED1\u571F\u767D\u4E91.mp4"},{name:"\u516C\u4E3B\u75C5",url:"/video/\u516C\u4E3B\u75C5.mp4"},{name:"\u516C\u4E3B\u75C5\uFF08\u91CD\u53E3\uFF09",url:"/video/\u516C\u4E3B\u75C5\uFF08\u91CD\u53E3\uFF09.mp4"}],o=B("/video/\u4E94\u884C.mp4");const r=B(null);function u(e){r.value&&(r.value.src=e.url)}return(e,i)=>{const p=y("router-link"),f=D,F=x,v=$;return a(),c(E,null,[s(F,null,{default:n(()=>[s(f,null,{default:n(()=>[s(p,{to:"/"},{default:n(()=>[au]),_:1})]),_:1}),s(f,null,{default:n(()=>[cu]),_:1})]),_:1}),t("div",_u,[t("video",{controls:"",autoplay:"",ref_key:"video",ref:r},[t("source",{src:m(o),type:"video/mp4"},null,8,iu)],512),du,(a(!0),c(E,null,g(m(l),C=>(a(),A(v,{onClick:j=>u(C)},{default:n(()=>[_(k(C.name),1)]),_:2},1032,["onClick"]))),256))])],64)}}}),mu=O(),fu=[{path:"/",name:"index",component:T},{path:"/jiexi",name:"jiexi",component:lu},{path:"/video",name:"video",component:pu}],Fu=V({history:mu,routes:fu}),w=P(q);w.use(Fu);w.mount("#app");