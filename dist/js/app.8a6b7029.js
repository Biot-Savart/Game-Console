(function(i){function d(d){for(var e,r,o=d[0],s=d[1],a=d[2],c=0,l=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(v,r)&&v[r]&&l.push(v[r][0]),v[r]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(i[e]=s[e]);u&&u(d);while(l.length)l.shift()();return n.push.apply(n,a||[]),t()}function t(){for(var i,d=0;d<n.length;d++){for(var t=n[d],e=!0,r=1;r<t.length;r++){var s=t[r];0!==v[s]&&(e=!1)}e&&(n.splice(d--,1),i=o(o.s=t[0]))}return i}var e={},v={app:0},n=[];function r(i){return o.p+"js/"+({about:"about"}[i]||i)+"."+{about:"aabfcc52"}[i]+".js"}function o(d){if(e[d])return e[d].exports;var t=e[d]={i:d,l:!1,exports:{}};return i[d].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(i){var d=[],t=v[i];if(0!==t)if(t)d.push(t[2]);else{var e=new Promise((function(d,e){t=v[i]=[d,e]}));d.push(t[2]=e);var n,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=r(i);var a=new Error;n=function(d){s.onerror=s.onload=null,clearTimeout(c);var t=v[i];if(0!==t){if(t){var e=d&&("load"===d.type?"missing":d.type),n=d&&d.target&&d.target.src;a.message="Loading chunk "+i+" failed.\n("+e+": "+n+")",a.name="ChunkLoadError",a.type=e,a.request=n,t[1](a)}v[i]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:s})}),12e4);s.onerror=s.onload=n,document.head.appendChild(s)}return Promise.all(d)},o.m=i,o.c=e,o.d=function(i,d,t){o.o(i,d)||Object.defineProperty(i,d,{enumerable:!0,get:t})},o.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,d){if(1&d&&(i=o(i)),8&d)return i;if(4&d&&"object"===typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&d&&"string"!=typeof i)for(var e in i)o.d(t,e,function(d){return i[d]}.bind(null,e));return t},o.n=function(i){var d=i&&i.__esModule?function(){return i["default"]}:function(){return i};return o.d(d,"a",d),d},o.o=function(i,d){return Object.prototype.hasOwnProperty.call(i,d)},o.p="",o.oe=function(i){throw console.error(i),i};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=d,s=s.slice();for(var c=0;c<s.length;c++)d(s[c]);var u=a;n.push([0,"chunk-vendors"]),t()})({0:function(i,d,t){i.exports=t("56d7")},"56d7":function(i,d,t){"use strict";t.r(d);t("e260"),t("e6cf"),t("cca6"),t("a79d");var e=t("830f"),v=t("5c40"),n={id:"app"},r={class:"masthead mb-auto"},o={class:"inner"},s=Object(v["l"])("h3",{class:"masthead-brand"}," Console ",-1),a={id:"nav",class:"nav nav-masthead justify-content-center"},c=Object(v["k"])(" Home "),u=Object(v["k"])(" | "),l=Object(v["k"])(" About "),h={role:"main",class:"inner cover"};function f(i,d){var t=Object(v["u"])("router-link"),e=Object(v["u"])("router-view");return Object(v["s"])(),Object(v["g"])("div",n,[Object(v["l"])("header",r,[Object(v["l"])("div",o,[s,Object(v["l"])("nav",a,[Object(v["l"])(t,{to:"/",class:"nav-link"},{default:Object(v["z"])((function(){return[c]})),_:1}),u,Object(v["l"])(t,{to:"/about",class:"nav-link"},{default:Object(v["z"])((function(){return[l]})),_:1})])])]),Object(v["l"])("main",h,[Object(v["l"])(e)])])}t("64be"),t("67fc");const m={};m.render=f;var p=m,b=t("9483");Object(b["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(i){console.error("Error during service worker registration:",i)}});t("d3b7");var y=t("8c4f"),g={class:"console"};function w(i,d){var t=Object(v["u"])("Tetris");return Object(v["s"])(),Object(v["g"])("div",g,[Object(v["l"])(t)])}var k={class:"tetris"},j=Object(v["j"])('<h3>Tetris</h3><h3>Score: <span id="score"></span></h3><button id="start-button" type="button" class="btn btn-primary"> Start/Pause </button><div class="container"><div class="grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="taken"></div><div class="taken"></div><div class="taken"></div><div class="taken"></div><div class="taken"></div><div class="taken"></div><div class="taken"></div><div class="taken"></div><div class="taken"></div><div class="taken"></div></div><div class="mini-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>',4);function O(i,d){return Object(v["s"])(),Object(v["g"])("div",k,[j])}t("99af"),t("a623"),t("4160"),t("a630"),t("45fc"),t("a434"),t("3ca3"),t("159b");var q=t("a1e9"),P=t("1157"),S=t.n(P),T={name:"Tetris",setup:function(){var i=document.querySelector(".grid"),d=Array.from(document.querySelectorAll(".grid div")),t=document.querySelector("#score"),e=Object(q["h"])(S()("#start-button")),v=10,n=0,r=null,o=0,s=["blue","orange","purple","green","red","aqua","yellow"],a=null,c=[[0,v,2*v,2*v+1],[0,1,2,v],[0,1,v+1,2*v+1],[2,v,v+1,v+2]],u=[[0,v,v+1,2*v+1],[v+1,v+2,2*v,2*v+1],[0,v,v+1,2*v+1],[v+1,v+2,2*v,2*v+1]],l=[[1,v,v+1,v+2],[0,v,v+1,2*v],[v,v+1,v+2,2*v+1],[1,v,v+1,2*v+1]],h=[[0,1,v,v+1],[0,1,v,v+1],[0,1,v,v+1],[0,1,v,v+1]],f=[[0,v,2*v,3*v],[v,v+1,v+2,v+3],[0,v,2*v,3*v],[v,v+1,v+2,v+3]],m=[[v-1,2*v-1,3*v-1,3*v-2],[0,v,v+1,v+2],[v-1,v,2*v-1,3*v-1],[v-2,v-1,v,2*v]],p=[[0,1,v+1,v+2],[1,v,v+1,2*v],[0,1,v+1,v+2],[1,v,v+1,2*v]],b=[c,p,l,h,f,m,u],y=4,g=0,w=Math.floor(Math.random()*b.length),k=b[w][g],j=document.querySelectorAll(".mini-grid div"),O=4,P=0,T=[[1,O+1,2*O+1,2*O+2],[0,1,O+1,O+2],[1,O,O+1,O+2],[0,1,O,O+1],[1,O+1,2*O+1,3*O+1],[O-2,2*O-2,3*O-2,3*O-3],[0,O,O+1,2*O+1]];return{grid:i,squares:d,scoreDisplay:t,startBtn:e,nextRandom:n,timerId:r,score:o,colours:s,lTetromino:c,zTetromino:p,tTetromino:l,oTetromino:h,iTetromino:f,theTetrominoes:b,currentPosition:y,currentRotation:g,random:w,current:k,displaySquares:j,displayWidth:O,displayIndex:P,upNextTetrominoes:T,width:v,activeKey:a}},mounted:function(){var i=this;S()(document).keydown(this.control),S()(document).keyup((function(d){i.activeKey=d,clearInterval(i.timerId),i.timerId=setInterval(i.moveDown,1e3)})),this.grid=document.querySelector(".grid"),this.squares=Array.from(document.querySelectorAll(".grid div")),this.displaySquares=document.querySelectorAll(".mini-grid div"),this.scoreDisplay=document.querySelector("#score"),S()("#start-button").on("click",(function(){i.timerId?(clearInterval(i.timerId),i.timerId=null):(i.draw(),i.timerId=setInterval(i.moveDown,1e3),i.nextRandom=Math.floor(Math.random()*i.theTetrominoes.length),i.displayShape())}))},methods:{draw:I,undraw:L,control:R,moveDown:x,freeze:C,moveLeft:A,moveRight:M,rotate:E,displayShape:D,addScore:_,gameOver:z}};function I(){var i=this;this.current.forEach((function(d){i.squares[i.currentPosition+d].classList.add("tetromino"),i.squares[i.currentPosition+d].style.backgroundColor=i.colours[i.random]}))}function L(){var i=this;this.current.forEach((function(d){i.squares[i.currentPosition+d].classList.remove("tetromino"),i.squares[i.currentPosition+d].style.backgroundColor=""}))}function R(i){clearInterval(this.timerId),this.timerId=setInterval(this.moveDown,100),37===i.keyCode?this.moveLeft():38===i.keyCode?this.rotate():39===i.keyCode?this.moveRight():40===i.keyCode&&this.moveDown()}function x(){this.undraw(),this.currentPosition+=this.width,this.draw(),this.freeze()}function C(){var i=this;this.current.some((function(d){return i.squares[i.currentPosition+d+i.width].classList.contains("taken")}))&&(this.current.forEach((function(d){return i.squares[i.currentPosition+d].classList.add("taken")})),this.random=this.nextRandom,this.nextRandom=Math.floor(Math.random()*this.theTetrominoes.length),this.current=this.theTetrominoes[this.random][this.currentRotation],this.currentPosition=4,this.draw(),this.displayShape(),this.addScore(),this.gameOver())}function A(){var i=this;this.undraw();var d=this.current.some((function(d){return(i.currentPosition+d)%i.width===0}));d||(this.currentPosition-=1),this.current.some((function(d){return i.squares[i.currentPosition+d].classList.contains("taken")}))&&(this.currentPosition+=1),this.draw()}function M(){var i=this;this.undraw();var d=this.current.some((function(d){return(i.currentPosition+d)%i.width===i.width-1}));d||(this.currentPosition+=1),this.current.some((function(d){return i.squares[i.currentPosition+d].classList.contains("taken")}))&&(this.currentPosition-=1),this.draw()}function E(){var i=this;this.undraw(),this.currentRotation++,this.currentRotation===this.current.length&&(this.currentRotation=0),this.current=this.theTetrominoes[this.random][this.currentRotation];var d=this.current.some((function(d){return(i.currentPosition+d)%i.width===0}));d&&(this.currentRotation-=1),-1===this.currentRotation&&(this.currentRotation=0),this.current=this.theTetrominoes[this.random][this.currentRotation],this.draw()}function D(){this.displaySquares.forEach((function(i){i.classList.remove("tetromino"),i.style.backgroundColor=""}));var i=this;this.upNextTetrominoes[this.nextRandom].forEach((function(d){i.displaySquares[i.displayIndex+d].classList.add("tetromino"),i.displaySquares[i.displayIndex+d].style.backgroundColor=i.colours[i.nextRandom]}))}function _(){for(var i=this,d=function(d){var t=[d,d+1,d+2,d+3,d+4,d+5,d+6,d+7,d+8,d+9],e=i;if(t.every((function(i){return e.squares[i].classList.contains("taken")}))){i.score+=10,i.scoreDisplay.innerHTML=i.score,t.forEach((function(i){e.squares[i].classList.remove("taken"),e.squares[i].classList.remove("tetromino"),e.squares[i].style.backgroundColor=""}));var v=i.squares.splice(d,i.width);i.squares=v.concat(i.squares),i.squares.forEach((function(i){return e.grid.appendChild(i)}))}},t=0;t<199;t+=this.width)d(t)}function z(){var i=this;this.current.some((function(d){return i.squares[i.currentPosition+d].classList.contains("taken")}))&&(this.scoreDisplay.innerHTML="end",clearInterval(this.timerId))}T.render=O;var N=T,H={name:"Console",components:{Tetris:N}};H.render=w;var B=H,F=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],J=Object(y["a"])({history:Object(y["b"])(""),routes:F}),K=J;t("4989"),t("ab8b");Object(e["a"])(p).use(K).mount("#app")},"64be":function(i,d,t){"use strict";t("98e6")},"67fc":function(i,d,t){"use strict";t("78a1")},"78a1":function(i,d,t){},"98e6":function(i,d,t){}});
//# sourceMappingURL=app.8a6b7029.js.map