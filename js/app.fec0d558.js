(function(t){function n(n){for(var r,a,i=n[0],u=n[1],c=n[2],l=0,d=[];l<i.length;l++)a=i[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(n);while(d.length)d.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],r=!0,i=1;i<e.length;i++){var u=e[i];0!==o[u]&&(r=!1)}r&&(s.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={app:0},s=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/final-countdown/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var f=u;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"046b":function(t,n,e){"use strict";var r=e("b545"),o=e.n(r);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"fixed"},[e("Form",t._b({},"Form",{getSynonyms:t.getSynonyms},!1)),e("h1",{ref:"current",staticClass:"current-word"}),e("h2",{ref:"notFound",staticClass:"not-found-msg"},[t._v("Did you mean:")]),e("h2",{ref:"error",staticClass:"not-found-msg"},[t._v("Error processing your request")])],1),e("ul",t._l(t.synonyms,function(n,r){return e("ListItem",t._b({key:"syn-"+r,attrs:{syn:n}},"ListItem",{getSynonyms:t.getSynonyms},!1))}),1)])},s=[],a=e("75fc"),i=(e("ac6a"),e("96cf"),e("3b8d")),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{on:{submit:function(n){return n.preventDefault(),t.handleSubmit(n)}}},[e("h2",[t._v("Enter a word below to find it's synonyms")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],attrs:{type:"text"},domProps:{value:t.word},on:{input:function(n){n.target.composing||(t.word=n.target.value)}}}),e("button",[t._v("Go")])])},c=[],f={name:"Form",props:["getSynonyms"],data:function(){return{word:""}},methods:{handleSubmit:function(){var t=this.$data.word;""!==t&&this.getSynonyms(t),this.$data.word=""}}},l=f,d=(e("5ecc"),e("2877")),p=Object(d["a"])(l,u,c,!1,null,"08e6b598",null),m=p.exports,y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{on:{click:t.handleClick}},[t._v(t._s(t.syn))])},h=[],v={name:"ListItem",props:["syn","getSynonyms"],methods:{handleClick:function(t){this.getSynonyms(t.target.innerText)}}},b=v,g=(e("046b"),Object(d["a"])(b,y,h,!1,null,"62b8d144",null)),w=g.exports,_="f8087c8f-96ad-4162-a6ea-2924c6b5e7ba",x={name:"app",components:{Form:m,ListItem:w},data:function(){return{synonyms:[]}},methods:{getSynonyms:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(n){var e,r,o,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$data.synonyms=[],this.$refs.current.innerText=n,e="https://dictionaryapi.com/api/v3/references/thesaurus/json/".concat(n,"?key=").concat(_),t.next=5,fetch(e);case 5:if(r=t.sent,!r.ok){t.next=13;break}return t.next=9,r.json();case 9:o=t.sent,"string"===typeof o[0]?(this.$data.synonyms=o,this.$refs.notFound.classList.add("show")):(this.$refs.notFound.classList.remove("show"),this.$refs.error.classList.remove("show"),o.forEach(function(t){var n=t.meta.syns;n.forEach(function(t){var n;(n=s.$data.synonyms).push.apply(n,Object(a["a"])(t))})})),t.next=14;break;case 13:this.$refs.error.classList.add("show");case 14:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}()}},S=x,j=(e("9993"),Object(d["a"])(S,o,s,!1,null,null,null)),O=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(O)}}).$mount("#app")},"5bf0":function(t,n,e){},"5ecc":function(t,n,e){"use strict";var r=e("5bf0"),o=e.n(r);o.a},9993:function(t,n,e){"use strict";var r=e("c352"),o=e.n(r);o.a},b545:function(t,n,e){},c352:function(t,n,e){}});
//# sourceMappingURL=app.fec0d558.js.map