(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{25:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(12),s=c.n(r),i=c(6),l=c(2),o=(c(25),c.p+"static/media/Avengers.4065c8f9.png"),j=c.p+"static/media/Avengers_logo.9eaf2193.png",u=c(0),b=function(){return Object(u.jsxs)("div",{className:"app__banner",children:[Object(u.jsx)("img",{src:o,alt:"Avengers"}),Object(u.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(u.jsx)("br",{}),"Stay tuned!"]}),Object(u.jsx)("img",{src:j,alt:"Avengers logo"})]})},m=c(9),d=c(3),h=c(5),O=c.n(h),f=c(7),x=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(d.a)(r,2),i=s[0],l=s[1];return{loading:c,request:Object(n.useCallback)(function(){var e=Object(f.a)(O.a.mark((function e(t){var c,n,r,s,i,o=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:r});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status:").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,a(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),l(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(n.useCallback)((function(){l(null)}),[])}},p=function(){var e=x(),t=e.loading,c=e.request,n=e.error,a=e.clearError,r="https://gateway.marvel.com:443/v1/public/",s="apikey=27accb05a97b0c2d968924e51b5069ff",i=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n,a=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:164,e.next=3,c("".concat(r,"characters?limit=9&offset=").concat(t,"&").concat(s));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(u));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(f.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(r,"characters/").concat(t,"?").concat(s));case 2:return n=e.sent,e.abrupt("return",u(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n,a=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,c("".concat(r,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(s));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(b));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(f.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(r,"comics/").concat(t,"?").concat(s));case 2:return n=e.sent,e.abrupt("return",b(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){return{id:e.id,name:e.name.length>10?"".concat(e.name.substring(0,15),"..."):e.name,description:e.description?"".concat(e.description.substring(0,164),"..."):"There is no description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},b=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:n,getAllCharacters:i,getCharacter:l,clearError:a,getAllComics:o,getComic:j}},g=function(){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(u.jsx)("g",{transform:"translate(80,50)",children:Object(u.jsx)("g",{transform:"rotate(0)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(45)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(u.jsx)("g",{transform:"translate(50,80)",children:Object(u.jsx)("g",{transform:"rotate(90)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(135)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(u.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(u.jsx)("g",{transform:"rotate(180)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(u.jsx)("g",{transform:"rotate(225)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(u.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(u.jsx)("g",{transform:"rotate(270)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(u.jsx)("g",{transform:"rotate(315)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},v=c.p+"static/media/error.42292aa1.gif",_=function(){return Object(u.jsx)("img",{src:v,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:"Error"})},N=(c(28),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(d.a)(r,2),l=s[0],o=s[1],j=Object(n.useState)(0),b=Object(d.a)(j,2),h=b[0],O=b[1],f=Object(n.useState)(!1),x=Object(d.a)(f,2),v=(x[0],x[1]),N=p(),y=N.loading,k=N.error,C=N.getAllComics;Object(n.useEffect)((function(){w(h,!0)}),[]);var w=function(e,t){o(!t),C(e).then(T)},T=function(e){var t=!1;e.length<0&&(t=!0),a([].concat(Object(m.a)(c),Object(m.a)(e))),o(!1),O(h+8),v(t)},S=function(e){var t=e.comics,c=t.thumbnail,n=t.price,a=t.title,r=t.id;return Object(u.jsx)("li",{className:"comics__item",children:Object(u.jsxs)(i.b,{to:"/comics/".concat(r),children:[Object(u.jsx)("img",{src:c,alt:a,className:"comics__item-img"}),Object(u.jsx)("div",{className:"comics__item-name",children:a}),Object(u.jsx)("div",{className:"comics__item-price",children:n})]})})},E=function(e){var t=[];return e.forEach((function(e){t.push(Object(u.jsx)(S,{comics:e},e.id))})),Object(u.jsx)("ul",{className:"comics__grid",children:t})}(c),A=k?Object(u.jsx)(_,{}):null,F=y&&!l?Object(u.jsx)(g,{}):null;return Object(u.jsxs)("div",{className:"comics__list",children:[E,F,A,Object(u.jsx)("button",{onClick:function(){w(h)},className:"button button__main button__long",children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}),y=c(13),k=c(14),C=c(16),w=c(15),T=function(e){Object(C.a)(c,e);var t=Object(w.a)(c);function c(){var e;Object(y.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(k.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(_,{}):this.props.children}}]),c}(n.Component),S=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(T,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(N,{})]})})},E=(c(29),c.p+"static/media/mjolnir.61f31e18.png"),A=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a?"contain":"cover";return Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:{objectFit:"".concat(i)}}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:c}),Object(u.jsx)("p",{className:"randomchar__descr",children:n}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:r,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},F=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),c=t[0],a=t[1],r=p(),s=r.loading,i=r.error,l=r.getCharacter,o=r.clearError;Object(n.useEffect)((function(){b()}),[]);var j=function(e){a(e)},b=function(){o();var e=Math.floor(400*Math.random()+1011e3);l(e).then(j)},m=i?Object(u.jsx)(_,{}):null,h=s?Object(u.jsx)(g,{}):null,O=s||i?null:Object(u.jsx)(A,{char:c});return Object(u.jsxs)("div",{className:"randomchar",children:[m,h,O,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{className:"button button__main",onClick:b,children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:E,alt:"mjolnir",className:"randomchar__decoration"})]})]})},I=(c(30),function(e){var t=e.heroes,c=e.onCharSelected,n=t.id,a=t.name,r=t.thumbnail,s="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?"contain":"cover";return Object(u.jsxs)("li",{className:"char__item",onClick:function(){return c(n)},tabIndex:0,onKeyPress:function(e){" "!==e.key&&"Enter"!==e.key||c(n)},children:[Object(u.jsx)("img",{src:r,alt:a,style:{objectFit:"".concat(s)}}),Object(u.jsx)("div",{className:"char__name",children:a})]},n)}),M=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),i=Object(d.a)(s,2),l=i[0],o=i[1],j=Object(n.useState)(7),b=Object(d.a)(j,2),h=b[0],O=b[1],f=Object(n.useState)(!1),x=Object(d.a)(f,2),v=x[0],N=x[1],y=p(),k=y.loading,C=y.error,w=y.getAllCharacters;Object(n.useEffect)((function(){T(h,!0)}),[]);var T=function(e,t){o(!t),w(e).then(S)},S=function(e){var t=!1;e.length<9&&(t=!0),r([].concat(Object(m.a)(a),Object(m.a)(e))),o(!1),O(h+9),N(t)},E=function(t){var c=[];return t.forEach((function(t){c.push(Object(u.jsx)(I,{heroes:t,onCharSelected:e.onCharSelected},t.id))})),c}(a),A=C?Object(u.jsx)("ul",{className:"char__grid2",children:Object(u.jsx)(_,{})}):null,F=k&&!l?Object(u.jsx)("ul",{className:"char__grid2",children:Object(u.jsx)(g,{})}):null;return Object(u.jsxs)("div",{className:"char__list",children:[Object(u.jsxs)("ul",{className:"char__grid",children:[E,A,F]}),Object(u.jsx)("button",{className:"button button__main button__long",style:{display:v?"none":"block"},disabled:l,onClick:function(){T(h)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})},B=(c(31),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),R=(c(32),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,l=n.length>164?n.substring(0,164)+"...":n,o=""===n?"if you need more information click on homepage or wiki.":l,j="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a?"contain":"cover";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:a,alt:c,style:{objectFit:"".concat(j)}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:c}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:r,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:o}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsxs)("ul",{className:"char__comics-list",children:[0===i.length?Object(u.jsx)("li",{className:"char__comics-item",children:"sorry no information"},785412369):null,i.map((function(e,t){return t<6?Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t):null}))]})]})}),q=function(e){var t=Object(n.useState)(null),c=Object(d.a)(t,2),a=c[0],r=c[1],s=p(),i=s.loading,l=s.error,o=s.getCharacter;Object(n.useEffect)((function(){j()}),[e]);var j=Object(n.useCallback)((function(){var t=e.charId;t&&o(t).then(b)}),[o,e]),b=function(e){r(e)},m=a||i||l?null:Object(u.jsx)(B,{}),h=l?Object(u.jsx)(_,{}):null,O=i?Object(u.jsx)(g,{}):null,f=i||l||!a?null:Object(u.jsx)(R,{char:a});return Object(u.jsxs)("div",{className:"char__info",children:[m,h,O,f]})},D=c.p+"static/media/vision.067d4ae1.png",J=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(T,{children:Object(u.jsx)(F,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(T,{children:Object(u.jsx)(M,{onCharSelected:function(e){a(e)}})}),Object(u.jsx)(T,{children:Object(u.jsx)(q,{charId:c})})]}),Object(u.jsx)("img",{className:"bg-decoration",src:D,alt:"vision"})]})},P=(c(33),function(){var e=Object(l.g)().comicId,t=Object(n.useState)(null),c=Object(d.a)(t,2),a=c[0],r=c[1],s=p(),o=s.loading,j=s.error,b=s.getComic;Object(n.useEffect)((function(){m()}),[e]);var m=Object(n.useCallback)((function(){b(e).then(h)})),h=function(e){r(e)},O=function(e){var t=e.comic,c=t.title,n=t.description,a=t.thumbnail,r=t.pageCount,s=t.language,l=t.price;return Object(u.jsxs)("div",{className:"single-comic",children:[Object(u.jsx)("img",{src:a,alt:c,className:"single-comic__img"}),Object(u.jsxs)("div",{className:"single-comic__info",children:[Object(u.jsx)("h2",{className:"single-comic__name",children:c}),Object(u.jsx)("p",{className:"single-comic__descr",children:n}),Object(u.jsx)("p",{className:"single-comic__descr",children:r}),Object(u.jsxs)("p",{className:"single-comic__descr",children:["Language: ",s]}),Object(u.jsx)("div",{className:"single-comic__price",children:l})]}),Object(u.jsx)(i.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})},f=o?Object(u.jsx)(g,{}):null,x=j?Object(u.jsx)(_,{}):null,v=o||j||!a?null:Object(u.jsx)(O,{comic:a});return Object(u.jsxs)(u.Fragment,{children:[x,f,v]})}),W=function(){return Object(u.jsx)("div",{children:v})},G=(c(34),function(){return Object(u.jsxs)("header",{className:"app__header",children:[Object(u.jsx)("h1",{className:"app__title",children:Object(u.jsxs)(i.b,{to:"/",children:[Object(u.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(u.jsx)("nav",{className:"app__menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.c,{and:!0,style:function(e){return{color:e.isActive?"#9f0013":"inherit"}},to:"/",children:"Characters"})}),"/",Object(u.jsx)("li",{children:Object(u.jsx)(i.c,{and:!0,style:function(e){return{color:e.isActive?"#9f0013":"inherit"}},to:"/comics",children:"Comics"})})]})})]})}),K=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(G,{}),Object(u.jsx)("main",{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",element:Object(u.jsx)(J,{})}),Object(u.jsx)(l.a,{path:"/comics",element:Object(u.jsx)(S,{})}),Object(u.jsx)(l.a,{path:"/comics/:comicId",element:Object(u.jsx)(P,{})}),Object(u.jsx)(l.a,{path:"*",element:Object(u.jsx)(W,{})})]})})]})})};c(35);s.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(K,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.b24eee84.chunk.js.map