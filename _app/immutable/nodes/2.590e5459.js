import{s as j,n as P,f as Ge,c as ce,u as de,g as ge,d as me,h as Z,i as re,j as se,r as He,k as Le,l as w,m as ie,b as ee,p as oe,o as Ue,t as Qe}from"../chunks/scheduler.bce7b724.js";import{S as O,i as G,g as A,h as M,y as We,k as h,a as V,f as y,j as N,d as D,t as T,z as Xe,s as te,c as ne,A as De,x as B,B as H,r as U,u as Q,v as W,w as X,e as ue,p as ye,b as ke,C as ze,D as ae,m as he,n as be,E as $,l as q,o as Ee}from"../chunks/index.e8987be4.js";import{w as Je,r as Ke}from"../chunks/index.e9194aec.js";function fe(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Ye(l,e){const t={},n={},i={$$scope:1};let a=l.length;for(;a--;){const o=l[a],s=e[a];if(s){for(const r in o)r in s||(n[r]=1);for(const r in s)i[r]||(t[r]=s[r],i[r]=1);l[a]=s}else for(const r in o)i[r]=1}for(const o in n)o in t||(t[o]=void 0);return t}function Ze(l){let e,t=`Are you ready to
    <span class="before:absolute before:bg-tertiary-500 before:-inset-2 before:opacity-75 before:-rotate-2 before:-skew-x-6 before:-skew-y-3 before:translate-y-0.5 before:rounded-md relative inline-block"><span class="relative text-white">confess?</span></span>`;return{c(){e=A("h1"),e.innerHTML=t,this.h()},l(n){e=M(n,"H1",{class:!0,"data-svelte-h":!0}),We(e)!=="svelte-r83th2"&&(e.innerHTML=t),this.h()},h(){h(e,"class","h1 mb-2")},m(n,i){V(n,e,i)},p:P,i:P,o:P,d(n){n&&y(e)}}}class we extends O{constructor(e){super(),G(this,e,null,Ze,j,{})}}const ve={};function qe(l){return l==="local"?localStorage:sessionStorage}function Ce(l,e,t){const n=(t==null?void 0:t.serializer)??JSON,i=(t==null?void 0:t.storage)??"local";function a(o,s){qe(i).setItem(o,n.stringify(s))}if(!ve[l]){const o=Je(e,u=>{const g=qe(i).getItem(l);g&&u(n.parse(g));{const k=_=>{_.key===l&&u(_.newValue?n.parse(_.newValue):null)};return window.addEventListener("storage",k),()=>window.removeEventListener("storage",k)}}),{subscribe:s,set:r}=o;ve[l]={set(u){a(l,u),r(u)},update(u){const g=u(Ge(o));a(l,g),r(g)},subscribe:s}}return ve[l]}Ce("modeOsPrefers",!1);Ce("modeUserPrefers",void 0);Ce("modeCurrent",!1);const Pe="(prefers-reduced-motion: reduce)";function pe(){return window.matchMedia(Pe).matches}Ke(pe(),l=>{{const e=n=>{l(n.matches)},t=window.matchMedia(Pe);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});function xe(l){let e,t,n;const i=l[14].default,a=ce(i,l,l[13],null);return{c(){e=A("div"),a&&a.c(),this.h()},l(o){e=M(o,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-labelledby":!0});var s=N(e);a&&a.l(s),s.forEach(y),this.h()},h(){h(e,"class",t="radio-group "+l[1]),h(e,"data-testid","radio-group"),h(e,"role","radiogroup"),h(e,"aria-labelledby",l[0])},m(o,s){V(o,e,s),a&&a.m(e,null),n=!0},p(o,[s]){a&&a.p&&(!n||s&8192)&&de(a,i,o,o[13],n?me(i,o[13],s,null):ge(o[13]),null),(!n||s&2&&t!==(t="radio-group "+o[1]))&&h(e,"class",t),(!n||s&1)&&h(e,"aria-labelledby",o[0])},i(o){n||(D(a,o),n=!0)},o(o){T(a,o),n=!1},d(o){o&&y(e),a&&a.d(o)}}}const $e="p-1";function et(l,e,t){let n,{$$slots:i={},$$scope:a}=e,{display:o="inline-flex"}=e,{background:s="bg-surface-200-700-token"}=e,{border:r="border-token border-surface-400-500-token"}=e,{spacing:u=""}=e,{rounded:g="rounded-token"}=e,{padding:k="px-4 py-1"}=e,{active:_="variant-filled"}=e,{hover:S="hover:variant-soft"}=e,{color:C=""}=e,{fill:E=""}=e,{regionLabel:c=""}=e,{labelledby:v=""}=e;return Z("rounded",g),Z("padding",k),Z("active",_),Z("hover",S),Z("color",C),Z("fill",E),Z("regionLabel",c),l.$$set=f=>{t(15,e=re(re({},e),se(f))),"display"in f&&t(3,o=f.display),"background"in f&&t(4,s=f.background),"border"in f&&t(5,r=f.border),"spacing"in f&&t(2,u=f.spacing),"rounded"in f&&t(6,g=f.rounded),"padding"in f&&t(7,k=f.padding),"active"in f&&t(8,_=f.active),"hover"in f&&t(9,S=f.hover),"color"in f&&t(10,C=f.color),"fill"in f&&t(11,E=f.fill),"regionLabel"in f&&t(12,c=f.regionLabel),"labelledby"in f&&t(0,v=f.labelledby),"$$scope"in f&&t(13,a=f.$$scope)},l.$$.update=()=>{l.$$.dirty&8&&t(2,u=`${o.includes("flex-col")?"":"space-x-1"}`),t(1,n=`${$e} ${o} ${s} ${r} ${u} ${g} ${e.class??""}`)},e=se(e),[v,n,u,o,s,r,g,k,_,S,C,E,c,a,i]}class tt extends O{constructor(e){super(),G(this,e,et,xe,j,{display:3,background:4,border:5,spacing:2,rounded:6,padding:7,active:8,hover:9,color:10,fill:11,regionLabel:12,labelledby:0})}}function nt(l){let e,t,n,i,a,o,s,r,u,g,k,_=[{type:"radio"},{name:l[1]},{__value:l[2]},l[11](),{tabindex:"-1"}],S={};for(let c=0;c<_.length;c+=1)S=re(S,_[c]);const C=l[21].default,E=ce(C,l,l[20],null);return u=Xe(l[29][0]),{c(){e=A("label"),t=A("div"),n=A("div"),i=A("input"),a=te(),E&&E.c(),this.h()},l(c){e=M(c,"LABEL",{class:!0});var v=N(e);t=M(v,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-checked":!0,"aria-label":!0,tabindex:!0,title:!0});var f=N(t);n=M(f,"DIV",{class:!0});var F=N(n);i=M(F,"INPUT",{type:!0,name:!0,tabindex:!0}),F.forEach(y),a=ne(f),E&&E.l(f),f.forEach(y),v.forEach(y),this.h()},h(){De(i,S),h(n,"class","h-0 w-0 overflow-hidden"),h(t,"class",o="radio-item "+l[8]),h(t,"data-testid","radio-item"),h(t,"role","radio"),h(t,"aria-checked",l[6]),h(t,"aria-label",l[4]),h(t,"tabindex","0"),h(t,"title",l[3]),h(e,"class",s="radio-label "+l[9]+" "+l[5]),u.p(i)},m(c,v){V(c,e,v),B(e,t),B(t,n),B(n,i),i.autofocus&&i.focus(),l[27](i),i.checked=i.__value===l[0],B(t,a),E&&E.m(t,null),r=!0,g||(k=[H(i,"change",l[28]),H(i,"click",l[25]),H(i,"change",l[26]),H(t,"keydown",l[10]),H(t,"keydown",l[22]),H(t,"keyup",l[23]),H(t,"keypress",l[24])],g=!0)},p(c,v){De(i,S=Ye(_,[{type:"radio"},(!r||v[0]&2)&&{name:c[1]},(!r||v[0]&4)&&{__value:c[2]},c[11](),{tabindex:"-1"}])),v[0]&1&&(i.checked=i.__value===c[0]),E&&E.p&&(!r||v[0]&1048576)&&de(E,C,c,c[20],r?me(C,c[20],v,null):ge(c[20]),null),(!r||v[0]&256&&o!==(o="radio-item "+c[8]))&&h(t,"class",o),(!r||v[0]&64)&&h(t,"aria-checked",c[6]),(!r||v[0]&16)&&h(t,"aria-label",c[4]),(!r||v[0]&8)&&h(t,"title",c[3]),(!r||v[0]&544&&s!==(s="radio-label "+c[9]+" "+c[5]))&&h(e,"class",s)},i(c){r||(D(E,c),r=!0)},o(c){T(E,c),r=!1},d(c){c&&y(e),l[27](null),E&&E.d(c),u.r(),g=!1,He(k)}}}const lt="flex-auto",it="text-base text-center cursor-pointer",ot="opacity-50 cursor-not-allowed";function at(l,e,t){let n,i,a,o,s;const r=["group","name","value","title","label","rounded","padding","active","hover","color","fill","regionLabel"];let u=Le(e,r),{$$slots:g={},$$scope:k}=e,{group:_}=e,{name:S}=e,{value:C}=e,{title:E=""}=e,{label:c=""}=e,{rounded:v=w("rounded")}=e,{padding:f=w("padding")}=e,{active:F=w("active")}=e,{hover:Y=w("hover")}=e,{color:m=w("color")}=e,{fill:p=w("fill")}=e,{regionLabel:L=w("regionLabel")}=e,x;function _e(d){["Enter","Space"].includes(d.code)&&(d.preventDefault(),x.click())}function le(){return delete u.class,u}const b=[[]];function I(d){ie.call(this,l,d)}function J(d){ie.call(this,l,d)}function K(d){ie.call(this,l,d)}function z(d){ie.call(this,l,d)}function Fe(d){ie.call(this,l,d)}function je(d){ee[d?"unshift":"push"](()=>{x=d,t(7,x)})}function Oe(){_=this.__value,t(0,_)}return l.$$set=d=>{t(31,e=re(re({},e),se(d))),t(30,u=Le(e,r)),"group"in d&&t(0,_=d.group),"name"in d&&t(1,S=d.name),"value"in d&&t(2,C=d.value),"title"in d&&t(3,E=d.title),"label"in d&&t(4,c=d.label),"rounded"in d&&t(12,v=d.rounded),"padding"in d&&t(13,f=d.padding),"active"in d&&t(14,F=d.active),"hover"in d&&t(15,Y=d.hover),"color"in d&&t(16,m=d.color),"fill"in d&&t(17,p=d.fill),"regionLabel"in d&&t(5,L=d.regionLabel),"$$scope"in d&&t(20,k=d.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&5&&t(6,n=C===_),l.$$.dirty[0]&245824&&t(19,i=n?`${F} ${m} ${p}`:Y),t(18,a=e.disabled?ot:""),t(8,s=`${it} ${f} ${v} ${i} ${a} ${e.class??""}`)},t(9,o=`${lt}`),e=se(e),[_,S,C,E,c,L,n,x,s,o,_e,le,v,f,F,Y,m,p,a,i,k,g,I,J,K,z,Fe,je,Oe,b]}class rt extends O{constructor(e){super(),G(this,e,at,nt,j,{group:0,name:1,value:2,title:3,label:4,rounded:12,padding:13,active:14,hover:15,color:16,fill:17,regionLabel:5},null,[-1,-1])}}function Te(l,e,t){const n=l.slice();return n[3]=e[t],n}function st(l){let e=l[3].label+"",t;return{c(){t=he(e)},l(n){t=be(n,e)},m(n,i){V(n,t,i)},p:P,d(n){n&&y(t)}}}function Se(l){let e,t,n;function i(o){l[2](o)}let a={name:"mode",value:l[3].endpoint,$$slots:{default:[st]},$$scope:{ctx:l}};return l[0]!==void 0&&(a.group=l[0]),e=new rt({props:a}),ee.push(()=>ae(e,"group",i)),{c(){U(e.$$.fragment)},l(o){Q(e.$$.fragment,o)},m(o,s){W(e,o,s),n=!0},p(o,s){const r={};s&64&&(r.$$scope={dirty:s,ctx:o}),!t&&s&1&&(t=!0,r.group=o[0],oe(()=>t=!1)),e.$set(r)},i(o){n||(D(e.$$.fragment,o),n=!0)},o(o){T(e.$$.fragment,o),n=!1},d(o){X(e,o)}}}function ut(l){let e,t,n=fe(l[1]),i=[];for(let o=0;o<n.length;o+=1)i[o]=Se(Te(l,n,o));const a=o=>T(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=ue()},l(o){for(let s=0;s<i.length;s+=1)i[s].l(o);e=ue()},m(o,s){for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(o,s);V(o,e,s),t=!0},p(o,s){if(s&3){n=fe(o[1]);let r;for(r=0;r<n.length;r+=1){const u=Te(o,n,r);i[r]?(i[r].p(u,s),D(i[r],1)):(i[r]=Se(u),i[r].c(),D(i[r],1),i[r].m(e.parentNode,e))}for(ye(),r=n.length;r<i.length;r+=1)a(r);ke()}},i(o){if(!t){for(let s=0;s<n.length;s+=1)D(i[s]);t=!0}},o(o){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)T(i[s]);t=!1},d(o){o&&y(e),ze(i,o)}}}function ft(l){let e,t;return e=new tt({props:{active:"bg-primary-600 text-white text-xl",background:"bg-primary-200",border:"border-2 border-primary-600",display:"flex flex-col md:flex-row",hover:"hover:variant-soft-primary text-xl",regionLabel:"text-primary-600 text-xl",rounded:"rounded-lg md:rounded-full",$$slots:{default:[ut]},$$scope:{ctx:l}}}),{c(){U(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){W(e,n,i),t=!0},p(n,[i]){const a={};i&65&&(a.$$scope={dirty:i,ctx:n}),e.$set(a)},i(n){t||(D(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){X(e,n)}}}function ct(l,e,t){const n=[{label:"Truth",endpoint:"/v1/truth"},{label:"Dare",endpoint:"/api/dare"},{label:"Would You Rather",endpoint:"/api/wyr"},{label:"Never Have I Ever",endpoint:"/api/nhie"},{label:"Paranoia Question",endpoint:"/api/paranoia"}];let{endpoint:i="/v1/truth"}=e;function a(o){i=o,t(0,i)}return l.$$set=o=>{"endpoint"in o&&t(0,i=o.endpoint)},[i,n,a]}class dt extends O{constructor(e){super(),G(this,e,ct,ft,j,{endpoint:0})}}function Ie(l,e,t){const n=l.slice();return n[18]=e[t],n}function Ae(l){let e,t=fe({length:l[6]}),n=[];for(let i=0;i<t.length;i+=1)n[i]=Me(Ie(l,t,i));return{c(){e=A("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=M(i,"DIV",{class:!0});var a=N(e);for(let o=0;o<n.length;o+=1)n[o].l(a);a.forEach(y),this.h()},h(){h(e,"class","confetti-holder svelte-io58ff"),$(e,"rounded",l[9]),$(e,"cone",l[10]),$(e,"no-gravity",l[11])},m(i,a){V(i,e,a);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(i,a){if(a&20991){t=fe({length:i[6]});let o;for(o=0;o<t.length;o+=1){const s=Ie(i,t,o);n[o]?n[o].p(s,a):(n[o]=Me(s),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}a&512&&$(e,"rounded",i[9]),a&1024&&$(e,"cone",i[10]),a&2048&&$(e,"no-gravity",i[11])},d(i){i&&y(e),ze(n,i)}}}function Me(l){let e;return{c(){e=A("div"),this.h()},l(t){e=M(t,"DIV",{class:!0,style:!0}),N(e).forEach(y),this.h()},h(){h(e,"class","confetti svelte-io58ff"),q(e,"--fall-distance",l[8]),q(e,"--size",l[0]+"px"),q(e,"--color",l[14]()),q(e,"--skew",R(-45,45)+"deg,"+R(-45,45)+"deg"),q(e,"--rotation-xyz",R(-10,10)+", "+R(-10,10)+", "+R(-10,10)),q(e,"--rotation-deg",R(0,360)+"deg"),q(e,"--translate-y-multiplier",R(l[2][0],l[2][1])),q(e,"--translate-x-multiplier",R(l[1][0],l[1][1])),q(e,"--scale",.1*R(2,10)),q(e,"--transition-duration",l[4]?`calc(${l[3]}ms * var(--scale))`:`${l[3]}ms`),q(e,"--transition-delay",R(l[5][0],l[5][1])+"ms"),q(e,"--transition-iteration-count",l[4]?"infinite":l[7]),q(e,"--x-spread",1-l[12])},m(t,n){V(t,e,n)},p(t,n){n&256&&q(e,"--fall-distance",t[8]),n&1&&q(e,"--size",t[0]+"px"),n&4&&q(e,"--translate-y-multiplier",R(t[2][0],t[2][1])),n&2&&q(e,"--translate-x-multiplier",R(t[1][0],t[1][1])),n&24&&q(e,"--transition-duration",t[4]?`calc(${t[3]}ms * var(--scale))`:`${t[3]}ms`),n&32&&q(e,"--transition-delay",R(t[5][0],t[5][1])+"ms"),n&144&&q(e,"--transition-iteration-count",t[4]?"infinite":t[7]),n&4096&&q(e,"--x-spread",1-t[12])},d(t){t&&y(e)}}}function gt(l){let e,t=!l[13]&&Ae(l);return{c(){t&&t.c(),e=ue()},l(n){t&&t.l(n),e=ue()},m(n,i){t&&t.m(n,i),V(n,e,i)},p(n,[i]){n[13]?t&&(t.d(1),t=null):t?t.p(n,i):(t=Ae(n),t.c(),t.m(e.parentNode,e))},i:P,o:P,d(n){n&&y(e),t&&t.d(n)}}}function R(l,e){return Math.random()*(e-l)+l}function mt(l,e,t){let{size:n=10}=e,{x:i=[-.5,.5]}=e,{y:a=[.25,1]}=e,{duration:o=2e3}=e,{infinite:s=!1}=e,{delay:r=[0,50]}=e,{colorRange:u=[0,360]}=e,{colorArray:g=[]}=e,{amount:k=50}=e,{iterationCount:_=1}=e,{fallDistance:S="100px"}=e,{rounded:C=!1}=e,{cone:E=!1}=e,{noGravity:c=!1}=e,{xSpread:v=.15}=e,{destroyOnComplete:f=!0}=e,F=!1;Ue(()=>{!f||s||_=="infinite"||setTimeout(()=>t(13,F=!0),(o+r[1])*_)});function Y(){return g.length?g[Math.round(Math.random()*(g.length-1))]:`hsl(${Math.round(R(u[0],u[1]))}, 75%, 50%`}return l.$$set=m=>{"size"in m&&t(0,n=m.size),"x"in m&&t(1,i=m.x),"y"in m&&t(2,a=m.y),"duration"in m&&t(3,o=m.duration),"infinite"in m&&t(4,s=m.infinite),"delay"in m&&t(5,r=m.delay),"colorRange"in m&&t(15,u=m.colorRange),"colorArray"in m&&t(16,g=m.colorArray),"amount"in m&&t(6,k=m.amount),"iterationCount"in m&&t(7,_=m.iterationCount),"fallDistance"in m&&t(8,S=m.fallDistance),"rounded"in m&&t(9,C=m.rounded),"cone"in m&&t(10,E=m.cone),"noGravity"in m&&t(11,c=m.noGravity),"xSpread"in m&&t(12,v=m.xSpread),"destroyOnComplete"in m&&t(17,f=m.destroyOnComplete)},[n,i,a,o,s,r,k,_,S,C,E,c,v,F,Y,u,g,f]}class ht extends O{constructor(e){super(),G(this,e,mt,gt,j,{size:0,x:1,y:2,duration:3,infinite:4,delay:5,colorRange:15,colorArray:16,amount:6,iterationCount:7,fallDistance:8,rounded:9,cone:10,noGravity:11,xSpread:12,destroyOnComplete:17})}}const bt=l=>({}),Be=l=>({}),_t=l=>({}),Ne=l=>({});function Re(l){let e,t;const n=l[3].confetti,i=ce(n,l,l[2],Be);return{c(){e=A("div"),i&&i.c(),this.h()},l(a){e=M(a,"DIV",{class:!0});var o=N(e);i&&i.l(o),o.forEach(y),this.h()},h(){h(e,"class","absolute top-0 left-1/2 -translate-y-4")},m(a,o){V(a,e,o),i&&i.m(e,null),t=!0},p(a,o){i&&i.p&&(!t||o&4)&&de(i,n,a,a[2],t?me(n,a[2],o,bt):ge(a[2]),Be)},i(a){t||(D(i,a),t=!0)},o(a){T(i,a),t=!1},d(a){a&&y(e),i&&i.d(a)}}}function vt(l){let e,t,n,i,a;const o=l[3].element,s=ce(o,l,l[2],Ne);let r=l[0]&&Re(l);return{c(){e=A("span"),s&&s.c(),t=te(),r&&r.c(),this.h()},l(u){e=M(u,"SPAN",{class:!0});var g=N(e);s&&s.l(g),t=ne(g),r&&r.l(g),g.forEach(y),this.h()},h(){h(e,"class","relative")},m(u,g){V(u,e,g),s&&s.m(e,null),B(e,t),r&&r.m(e,null),n=!0,i||(a=H(e,"click",l[1]),i=!0)},p(u,[g]){s&&s.p&&(!n||g&4)&&de(s,o,u,u[2],n?me(o,u[2],g,_t):ge(u[2]),Ne),u[0]?r?(r.p(u,g),g&1&&D(r,1)):(r=Re(u),r.c(),D(r,1),r.m(e,null)):r&&(ye(),T(r,1,1,()=>{r=null}),ke())},i(u){n||(D(s,u),D(r),n=!0)},o(u){T(s,u),T(r),n=!1},d(u){u&&y(e),s&&s.d(u),r&&r.d(),i=!1,a()}}}function yt(l,e,t){let{$$slots:n={},$$scope:i}=e,a=!1;async function o(){t(0,a=!1),await Qe(),t(0,a=!0)}return l.$$set=s=>{"$$scope"in s&&t(2,i=s.$$scope)},[a,o,i,n]}class kt extends O{constructor(e){super(),G(this,e,yt,vt,j,{})}}function Et(l){let e,t=l[1][l[0]]+"",n,i,a;return{c(){e=A("button"),n=he(t),this.h()},l(o){e=M(o,"BUTTON",{slot:!0,type:!0,class:!0});var s=N(e);n=be(s,t),s.forEach(y),this.h()},h(){h(e,"slot","element"),h(e,"type","button"),h(e,"class","btn rounded-lg text-xl variant-filled w-full md:rounded-full md:w-auto")},m(o,s){V(o,e,s),B(e,n),i||(a=H(e,"click",l[2]),i=!0)},p(o,s){s&1&&t!==(t=o[1][o[0]]+"")&&Ee(n,t)},d(o){o&&y(e),i=!1,a()}}}function Ct(l){let e,t;return e=new ht({props:{slot:"confetti",cone:!0,rounded:!0,colorArray:[Dt,qt,Tt]}}),{c(){U(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){W(e,n,i),t=!0},p:P,i(n){t||(D(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){X(e,n)}}}function Lt(l){let e,t;return e=new kt({props:{$$slots:{confetti:[Ct],element:[Et]},$$scope:{ctx:l}}}),{c(){U(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){W(e,n,i),t=!0},p(n,[i]){const a={};i&33&&(a.$$scope={dirty:i,ctx:n}),e.$set(a)},i(n){t||(D(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){X(e,n)}}}const Dt="#14B8A6",qt="#D4418A",Tt="#FFFFFF";function St(l,e,t){let n;const i=["😇","😏","😈"],a=["pg","pg13","r"];let{mode:o="pg"}=e;function s(){t(3,o=a[(n+1)%a.length])}return l.$$set=r=>{"mode"in r&&t(3,o=r.mode)},l.$$.update=()=>{l.$$.dirty&8&&t(0,n=a.indexOf(o))},[n,i,s,o]}class It extends O{constructor(e){super(),G(this,e,St,Lt,j,{mode:3})}}function At(l){let e,t=l[0]?"NEXT":"START",n,i,a,o;return{c(){e=A("button"),n=he(t),this.h()},l(s){e=M(s,"BUTTON",{type:!0,class:!0});var r=N(e);n=be(r,t),r.forEach(y),this.h()},h(){h(e,"type","button"),h(e,"class",i="btn rounded-lg text-xl variant-filled md:rounded-full "+(l[0]&&"mb-8"))},m(s,r){V(s,e,r),B(e,n),a||(o=H(e,"click",l[1]),a=!0)},p(s,[r]){r&1&&t!==(t=s[0]?"NEXT":"START")&&Ee(n,t),r&1&&i!==(i="btn rounded-lg text-xl variant-filled md:rounded-full "+(s[0]&&"mb-8"))&&h(e,"class",i)},i:P,o:P,d(s){s&&y(e),a=!1,o()}}}function Mt(l,e,t){let{endpoint:n}=e,{mode:i}=e,{started:a}=e,{question:o=""}=e;function s(){t(0,a=!0);const r=`https://api.truthordarebot.xyz${n}?rating=${i}`;fetch(r).then(u=>u.json()).then(u=>{console.log(u),t(2,o=u.question)})}return l.$$set=r=>{"endpoint"in r&&t(3,n=r.endpoint),"mode"in r&&t(4,i=r.mode),"started"in r&&t(0,a=r.started),"question"in r&&t(2,o=r.question)},[a,s,o,n,i]}class Bt extends O{constructor(e){super(),G(this,e,Mt,At,j,{endpoint:3,mode:4,started:0,question:2})}}function Nt(l){let e,t,n;return{c(){e=A("div"),t=A("h3"),n=he(l[0]),this.h()},l(i){e=M(i,"DIV",{class:!0});var a=N(e);t=M(a,"H3",{class:!0});var o=N(t);n=be(o,l[0]),o.forEach(y),a.forEach(y),this.h()},h(){h(t,"class","h3"),h(e,"class","card px-4 py-2 rounded-lg w-full md:rounded-full md:w-auto")},m(i,a){V(i,e,a),B(e,t),B(t,n)},p(i,[a]){a&1&&Ee(n,i[0])},i:P,o:P,d(i){i&&y(e)}}}function Rt(l,e,t){let{question:n}=e;return l.$$set=i=>{"question"in i&&t(0,n=i.question)},[n]}class Vt extends O{constructor(e){super(),G(this,e,Rt,Nt,j,{question:0})}}function Ve(l){let e,t;return e=new Vt({props:{question:l[2]}}),{c(){U(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){W(e,n,i),t=!0},p(n,i){const a={};i&4&&(a.question=n[2]),e.$set(a)},i(n){t||(D(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){X(e,n)}}}function zt(l){let e,t,n,i,a,o,s,r,u,g,k,_,S,C,E,c,v,f;n=new we({});function F(b){l[4](b)}let Y={};l[0]!==void 0&&(Y.endpoint=l[0]),o=new dt({props:Y}),ee.push(()=>ae(o,"endpoint",F));function m(b){l[5](b)}let p={};l[1]!==void 0&&(p.mode=l[1]),u=new It({props:p}),ee.push(()=>ae(u,"mode",m));let L=l[3]&&Ve(l);function x(b){l[6](b)}function _e(b){l[7](b)}let le={endpoint:l[0],mode:l[1]};return l[3]!==void 0&&(le.started=l[3]),l[2]!==void 0&&(le.question=l[2]),C=new Bt({props:le}),ee.push(()=>ae(C,"started",x)),ee.push(()=>ae(C,"question",_e)),{c(){e=A("main"),t=A("div"),U(n.$$.fragment),i=te(),a=A("div"),U(o.$$.fragment),r=te(),U(u.$$.fragment),k=te(),_=A("div"),L&&L.c(),S=te(),U(C.$$.fragment),this.h()},l(b){e=M(b,"MAIN",{class:!0});var I=N(e);t=M(I,"DIV",{class:!0});var J=N(t);Q(n.$$.fragment,J),i=ne(J),a=M(J,"DIV",{class:!0});var K=N(a);Q(o.$$.fragment,K),r=ne(K),Q(u.$$.fragment,K),K.forEach(y),J.forEach(y),k=ne(I),_=M(I,"DIV",{class:!0});var z=N(_);L&&L.l(z),S=ne(z),Q(C.$$.fragment,z),z.forEach(y),I.forEach(y),this.h()},h(){h(a,"class","flex flex-col gap-2 w-full md:flex-row md:justify-center"),h(t,"class","basis-2/3 flex flex-col items-center justify-end gap-10 md:basis-1/2"),h(_,"class",v="basis-1/3 flex flex-col items-center justify-start gap-10 md:basis-1/2 "+(l[3]&&"justify-between")),h(e,"class","flex flex-col h-full gap-10 p-6")},m(b,I){V(b,e,I),B(e,t),W(n,t,null),B(t,i),B(t,a),W(o,a,null),B(a,r),W(u,a,null),B(e,k),B(e,_),L&&L.m(_,null),B(_,S),W(C,_,null),f=!0},p(b,[I]){const J={};!s&&I&1&&(s=!0,J.endpoint=b[0],oe(()=>s=!1)),o.$set(J);const K={};!g&&I&2&&(g=!0,K.mode=b[1],oe(()=>g=!1)),u.$set(K),b[3]?L?(L.p(b,I),I&8&&D(L,1)):(L=Ve(b),L.c(),D(L,1),L.m(_,S)):L&&(ye(),T(L,1,1,()=>{L=null}),ke());const z={};I&1&&(z.endpoint=b[0]),I&2&&(z.mode=b[1]),!E&&I&8&&(E=!0,z.started=b[3],oe(()=>E=!1)),!c&&I&4&&(c=!0,z.question=b[2],oe(()=>c=!1)),C.$set(z),(!f||I&8&&v!==(v="basis-1/3 flex flex-col items-center justify-start gap-10 md:basis-1/2 "+(b[3]&&"justify-between")))&&h(_,"class",v)},i(b){f||(D(n.$$.fragment,b),D(o.$$.fragment,b),D(u.$$.fragment,b),D(L),D(C.$$.fragment,b),f=!0)},o(b){T(n.$$.fragment,b),T(o.$$.fragment,b),T(u.$$.fragment,b),T(L),T(C.$$.fragment,b),f=!1},d(b){b&&y(e),X(n),X(o),X(u),L&&L.d(),X(C)}}}function Pt(l,e,t){let n="/v1/truth",i="pg",a,o=!1;function s(k){n=k,t(0,n)}function r(k){i=k,t(1,i)}function u(k){o=k,t(3,o)}function g(k){a=k,t(2,a)}return[n,i,a,o,s,r,u,g]}class Ft extends O{constructor(e){super(),G(this,e,Pt,zt,j,{})}}function jt(l){let e,t;return e=new Ft({}),{c(){U(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){W(e,n,i),t=!0},p:P,i(n){t||(D(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){X(e,n)}}}class Ut extends O{constructor(e){super(),G(this,e,null,jt,j,{})}}export{Ut as component};