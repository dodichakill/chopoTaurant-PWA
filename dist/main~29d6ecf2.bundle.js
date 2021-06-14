!function(n){function e(e){for(var t,o,s=e[0],c=e[1],u=e[2],p=0,l=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(n[t]=c[t]);for(d&&d(e);l.length;)l.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var n,e=0;e<i.length;e++){for(var r=i[e],t=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(t=!1)}t&&(i.splice(e--,1),n=o(o.s=r[0]))}return n}var t={},a={2:0},i=[];function o(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=n,o.c=t,o.d=function(n,e,r){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)o.d(r,t,function(e){return n[e]}.bind(null,t));return r},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;i.push([10,1,0]),r()}({10:function(n,e,r){"use strict";r.r(e);r(4),r(5);var t={init:function(n){var e=this,r=n.button,t=n.drawer,a=n.content;r.addEventListener("click",(function(n){e._toggleDrawer(n,t)})),a.addEventListener("click",(function(n){e._closeDrawer(n,t)}))},_toggleDrawer:function(n,e){n.stopPropagation(),e.classList.toggle("open")},_closeDrawer:function(n,e){n.stopPropagation(),e.classList.remove("open")}},a={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(n);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var e=n.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},i={BASE_URL:"https://restaurant-api.dicoding.dev/",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"ChopoTaurant-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"},o={LIST_DATA_RESTAURANT:"".concat(i.BASE_URL,"list"),IMAGE_MEDIUM_URL:"https://restaurant-api.dicoding.dev/images/medium/",IMAGE_SMALL_URL:"https://restaurant-api.dicoding.dev/images/small/",DETAIL:function(n){return"".concat(i.BASE_URL,"detail/").concat(n)}};function s(n,e,r,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,a)}function c(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){s(i,t,a,o,c,"next",n)}function c(n){s(i,t,a,o,c,"throw",n)}o(void 0)}))}}function u(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var d=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,r,t,a,i;return e=n,r=null,t=[{key:"listDataRestaurant",value:(i=c(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(o.LIST_DATA_RESTAURANT);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)}))),function(){return i.apply(this,arguments)})},{key:"detailRestaurant",value:(a=c(regeneratorRuntime.mark((function n(e){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(o.DETAIL(e));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)}))),function(n){return a.apply(this,arguments)})}],r&&u(e.prototype,r),t&&u(e,t),n}(),p=function(n){return'\n<div class="card" tabindex="0">\n    <div class="cardImage">\n        <img class="lazyload" data-src="'.concat(o.IMAGE_SMALL_URL).concat(n.pictureId,'" crossorigin="anonymous" alt="').concat(n.name,'" /> \n        <span class="city">kota ').concat(n.city,'</span> \n        <span class="cardRating">  Rating : ').concat(n.rating,' </span>\n    </div>\n    <div class="cardTitle">  \n        <h4>\n            <a href="/#/detail/').concat(n.id,'" > ').concat(n.name,' </a> \n        </h4>  \n    </div>\n        \n    <div class="cardDesc">').concat(n.description.substring(0,112),"</div>\n</div>\n\n  ")};function l(n,e,r,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,a)}function f(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){l(i,t,a,o,s,"next",n)}function s(n){l(i,t,a,o,s,"throw",n)}o(void 0)}))}}var g={init:function(n){var e=this;return f(regeneratorRuntime.mark((function r(){var t,a,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.likeButtonContainer,a=n.favoriteRestaurants,i=n.restaurant,e._likeButtonContainer=t,e._restaurant=i,e._favoriteRestaurants=a,r.next=6,e._renderButton();case 6:case"end":return r.stop()}}),r)})))()},_renderButton:function(){var n=this;return f(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n._restaurant.id,e.next=3,n._isRestaurantExist(r);case 3:if(!e.sent){e.next=7;break}n._renderLiked(),e.next=8;break;case 7:n._renderLike();case 8:case"end":return e.stop()}}),e)})))()},_isRestaurantExist:function(n){var e=this;return f(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e._favoriteRestaurants.getRestaurant(n);case 2:return t=r.sent,r.abrupt("return",!!t);case 4:case"end":return r.stop()}}),r)})))()},_renderLike:function(){var n=this;this._likeButtonContainer.innerHTML='\n    <button class="like" aria-label="like this restaurant" id="likeButton">\n        <i class="far fa-heart" aria-hidden="true"></i>\n    </button>\n',document.querySelector("#likeButton").addEventListener("click",f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._favoriteRestaurants.putRestaurant(n._restaurant);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))},_renderLiked:function(){var n=this;this._likeButtonContainer.innerHTML='\n    <button class="like" aria-label="unlike this restaurant" id="likeButton">\n        <i class="fas fa-heart" aria-hidden="true"></i>\n    </button>\n',document.querySelector("#likeButton").addEventListener("click",f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._favoriteRestaurants.deleteRestaurant(n._restaurant.id);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))}},m=r(3);function v(n,e,r,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,a)}function h(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){v(i,t,a,o,s,"next",n)}function s(n){v(i,t,a,o,s,"throw",n)}o(void 0)}))}}var b=i.DATABASE_NAME,x=i.DATABASE_VERSION,w=i.OBJECT_STORE_NAME,y=Object(m.a)(b,x,{upgrade:function(n){n.createObjectStore(w,{keyPath:"id"})}}),k={getRestaurant:function(n){return h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,y;case 4:return e.abrupt("return",e.sent.get(w,n));case 5:case"end":return e.stop()}}),e)})))()},getAllRestaurant:function(){return h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y;case 2:return n.abrupt("return",n.sent.getAll(w));case 3:case"end":return n.stop()}}),n)})))()},putRestaurant:function(n){return h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.hasOwnProperty("id")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,y;case 4:return e.abrupt("return",e.sent.put(w,n));case 5:case"end":return e.stop()}}),e)})))()},deleteRestaurant:function(n){return h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y;case 2:return e.abrupt("return",e.sent.delete(w,n));case 3:case"end":return e.stop()}}),e)})))()}};function R(n,e,r,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,a)}function _(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){R(i,t,a,o,s,"next",n)}function s(n){R(i,t,a,o,s,"throw",n)}o(void 0)}))}}function A(n,e,r,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,a)}function j(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){A(i,t,a,o,s,"next",n)}function s(n){A(i,t,a,o,s,"throw",n)}o(void 0)}))}}function E(n,e,r,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,a)}function C(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){E(i,t,a,o,s,"next",n)}function s(n){E(i,t,a,o,s,"throw",n)}o(void 0)}))}}var z={"/":{render:function(){return C(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        \n    <section class="hero">\n      <div class="hero-inner">\n        <h2 class="hero-title" tabindex="0">kami adalah perusahaan yang menyediakan jasa pencarian restaurant <br> yang\n          menyajikan\n          berbagai hidangan\n          berkualitas dengan pelayanan terbaik\n        </h2>\n      </div>\n    </section>\n\n    <article class="precontent">\n      <h3 tabindex="0">kenapa harus memakai jasa kami?</h3>\n      <div class="precards">\n        <div class="precard" tabindex="0">\n          <div class="preimg"><img class="lazyload" data-src="images/foods/1.jpg" alt="makanan 1"></div>\n          <p>kami memilih restaurant yang menyediakan hidangan sehat</p>\n        </div>\n        <div class="precard" tabindex="0">\n          <div class="preimg"><img class="lazyload" data-src="images/foods/2.jpg" alt="makanan 2"></div>\n          <p>kami memilih restaurant yang menyediakan beragam macam hidangan</p>\n\n        </div>\n        <div class="precard" tabindex="0">\n          <div class="preimg"><img class="lazyload" data-src="images/foods/3.jpg" alt="makanan 3"></div>\n          <p>kami memilih restaurant yang menyediakan hidangan penutup</p>\n        </div>\n        <div class="precard" tabindex="0">\n          <div class="preimg"><img class="lazyload" data-src="images/foods/4.jpg" alt="makanan 4"></div>\n          <p>kami memilih restaurant yang menyediakan hidangan higienis</p>\n        </div>\n        <div class="precard" tabindex="0">\n          <div class="preimg"><img class="lazyload" data-src="images/foods/5.jpg" alt="makanan 5"></div>\n          <p>kami memilih restaurant yang menyediakan hidangan bergizi</p>\n        </div>\n        <div class="precard" tabindex="0">\n          <div class="preimg"><img class="lazyload" data-src="images/foods/6.jpg" alt="makanan 6"></div>\n          <p>kami memilih restaurant yang menyediakan hidangan khusus diet</p>\n        </div>\n      </div>\n    </article>\n    <article class="content">\n     \n      <h3 tabindex="0">Explore Restaurant</h3>\n      <div class="container">\n        <div id="list-restaurant"></div>\n\n      </div>\n\n    </article>\n\n        ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return C(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e="".concat(i.BASE_URL,"list"),(r=document.getElementById("list-restaurant")).innerHTML='<div class="spinner"><i class="fas fa-spinner"></i></div>',fetch(e,{method:"GET",headers:{"content-type":"application/json"}}).then((function(n){return n.json()})).then((function(n){var e="";n.restaurants.forEach((function(n){e+=p(n)})),r.innerHTML=e}));case 4:case"end":return n.stop()}}),n)})))()}},"/detail/:id":{render:function(){return _(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n            <div id="restaurant" class="detail-restaurant"></div>\n            <div id="likeButtonContainer"></div>\n            ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return _(regeneratorRuntime.mark((function n(){var e,r,t,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.parseActiveUrlWithoutCombiner(),n.next=3,d.detailRestaurant(e.id);case 3:r=n.sent,t=r.restaurant,(i=document.querySelector("#restaurant")).innerHTML='<div class="spinner"><i class="fas fa-search"></i></div>',i.innerHTML='\n\n    <h1 class="restaurantName">'.concat((s=t).name,'</h1>\n    <div class="wrapInfo"> \n        <div class="imageWrap"> \n            <img class="lazyload" data-src="').concat(o.IMAGE_MEDIUM_URL).concat(s.pictureId,'" alt="').concat(s.name,'" crossorigin="anonymous" />\n        </div>\n        <div class="info">\n        <h2>Information</h2>\n            <h3>Category</h3>\n            ').concat(s.categories.map((function(n){return n.name})).join(" - "),"\n            <h3>City</h3>\n            ").concat(s.city,"\n            <h3>Address</h3>\n            ").concat(s.address,"\n            <h3>Rating</h3>\n            ⭐ ").concat(s.rating,'\n        </div>\n    </div>\n\n    <div class="overview">\n    <h2>Overview</h2>\n        <div class="description">\n        <h3>description</h3>\n        <p>').concat(s.description,'</p>\n        </div>\n        <div class="menuContainer">\n            <h3>Daftar Menu</h3>\n            <div class="menuFoods"> \n                <h4>Daftar Makanan</h4>\n                <ul>\n                ').concat(s.menus.foods.map((function(n){return"<li> ▸ ".concat(n.name," </li>")})).join(""),'\n                </ul>\n            </div>\n            <div class="menuDrinks"> \n                <h4>Daftar Minuman</h4>\n                <ul>\n                ').concat(s.menus.drinks.map((function(n){return"<li> ▸ ".concat(n.name," </li>")})).join(""),'\n                </ul>\n            </div>\n        </div>\n        <div class="review-container">\n            <h3>Review</h3>\n            ').concat(s.customerReviews.map((function(n){return' \n            <div class="reviewer">  \n                <p class="user"> '.concat(n.name,' - <span class="date"> ').concat(n.date,' </span>  </p>  \n                <p class="review"> ').concat(n.review," </p>  \n            </div>")})).join(""),"\n        </div>\n    </div>"),g.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),favoriteRestaurants:k,restaurant:{id:t.id,name:t.name,description:t.description,rating:t.rating,city:t.city,pictureId:t.pictureId}});case 9:case"end":return n.stop()}var s}),n)})))()}},"/favorite":{render:function(){return j(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <div class="favorite">\n          <h2>Your Favorited Restaurant</h2>\n          <div id="restaurant" class="restaurants">\n     \n          </div>\n        </div>');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return j(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.getAllRestaurant();case 2:e=n.sent,r=document.querySelector("#restaurant"),0===e.length&&(r.innerHTML='<div class="not-found"><h3>Kamu belum mempunyai restaurant favorite</h3></div>'),e.forEach((function(n){r.innerHTML+=p(n)}));case 6:case"end":return n.stop()}}),n)})))()}}};function L(n,e,r,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,a)}function S(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var T=function(){function n(e){var r=e.button,t=e.drawer,a=e.content;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=r,this._drawer=t,this._content=a,this._initialAppShell()}var e,r,i,o,s;return e=n,(r=[{key:"_initialAppShell",value:function(){t.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(o=regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.parseActiveUrlWithCombiner(),r=z[e],n.next=4,r.render();case 4:return this._content.innerHTML=n.sent,n.next=7,r.afterRender();case 7:case"end":return n.stop()}}),n,this)})),s=function(){var n=this,e=arguments;return new Promise((function(r,t){var a=o.apply(n,e);function i(n){L(a,r,t,i,s,"next",n)}function s(n){L(a,r,t,i,s,"throw",n)}i(void 0)}))},function(){return s.apply(this,arguments)})}])&&S(e.prototype,r),i&&S(e,i),n}(),M=r(2),P=r.n(M);function I(n,e,r,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,a)}var B=function(){var n,e=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=3;break}return n.next=3,P.a.register();case 3:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){I(i,t,a,o,s,"next",n)}function s(n){I(i,t,a,o,s,"throw",n)}o(void 0)}))});return function(){return e.apply(this,arguments)}}(),D=(r(1),r(9),new T({button:document.querySelector("#hamburger-button"),drawer:document.querySelector("#nav-drawer"),content:document.querySelector("#maincontent")}));window.addEventListener("hashchange",(function(){D.renderPage()})),window.addEventListener("load",(function(){D.renderPage(),B()}))},5:function(n,e,r){var t=r(6),a=r(7);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(a,i);n.exports=a.locals||{}},7:function(n,e,r){(e=r(8)(!1)).push([n.i,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: #0379cc;\n  height: 100vh;\n}\n\n.skip-link {\n  padding: 0.8em;\n  background: #8fd9a8;\n  width: 200px;\n  position: absolute;\n  color: #0061a8;\n  border: 2px solid #0061a8;\n  border-radius: 10px;\n  z-index: 100;\n  top: -100px;\n  left: 0;\n  text-decoration: none;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n.brand span {\n  color: orange;\n}\n\n.app-bar {\n  width: 100%;\n  padding: 8px 16px;\n  background-color: #0061a8;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 10px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.app-bar .app-bar-menu {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar-menu button {\n  color: orange;\n  background: white;\n  border: none;\n  font-size: 18px;\n  padding: 8px;\n  cursor: pointer;\n  width: 44px;\n  height: 44px;\n}\n\n.app-bar .app-bar-brand {\n  display: flex;\n  align-items: center;\n  font-family: "lobster", cursive, serif;\n}\n\n.app-bar .app-bar-brand h1 {\n  color: white;\n  font-size: 22px;\n  user-select: none;\n}\n\n.app-bar .app-bar-brand h1 span {\n  color: orange;\n}\n\n.app-bar .app-bar-nav {\n  position: absolute;\n  top: 50px;\n  left: -1800px;\n  width: 100%;\n  background: #0061a8;\n  transition: all 0.3s;\n  padding: 8px;\n  overflow: hidden;\n  font-family: "Courgette", cursive, serif;\n}\n\n.app-bar .app-bar-nav ul li a {\n  background-image: linear-gradient(to right, gold, orange);\n  border-radius: 1em;\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  border: 1px solid white;\n  padding: 8px;\n  margin-bottom: 5px;\n  width: 100%;\n  height: 44px;\n  transition: 0.35s ease;\n  text-align: center;\n}\n\n.app-bar .app-bar-nav ul li a:hover {\n  background-image: linear-gradient(to left, gold, orange);\n}\n\n.app-bar .app-bar-nav.open {\n  left: 0;\n}\n\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 320px;\n  width: 100%;\n  text-align: center;\n  background-image: url("/images/heros/hero-image-small.jpg");\n  background-position: center;\n  background-color: #8fd9a8;\n  background-blend-mode: darken;\n}\n\n.hero .hero-inner {\n  color: white;\n  font-weight: bold;\n}\n\n.hero .hero-inner h2.hero-title {\n  font-family: "Courgette", cursive, serif;\n  text-shadow: 0 0 2px #000;\n  letter-spacing: 1px;\n  line-height: 24px;\n  font-size: 18px;\n}\n\n.card {\n  font-family: "Courgette", cursive, serif;\n  transition: 0.35s ease;\n  margin: 10px;\n  position: relative;\n  width: 320px;\n  padding: 10px;\n  border-radius: 1em;\n  height: auto;\n  overflow: auto;\n  background-color: #eeffff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.card .cardImage {\n  position: relative;\n}\n\n.card .cardImage img {\n  width: 100%;\n  border-radius: 1em 1em 0 0;\n}\n\n.card .cardImage .city {\n  background: #4bc2f1;\n  color: white;\n  font-size: 14px;\n  padding: 4px 12px 4px 10px;\n  position: absolute;\n  font-weight: bold;\n  left: 0;\n  top: 0;\n  border-radius: 1em 0 1em 0;\n  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);\n}\n\n.card .cardImage .cardRating {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  margin-bottom: 4px;\n  display: inline-block;\n  background: orange;\n  border-radius: 0 1em 1em 0;\n  padding: 4px 12px 4px 10px;\n  position: absolute;\n  top: 32px;\n  left: 0;\n  box-shadow: 2px 0 2px 0 rgba(0, 0, 0, 0.2);\n}\n\n.card .cardTitle {\n  font-family: "lobster", cursive, serif;\n  font-weight: 600;\n  font-size: 18px;\n  margin: 6px 0;\n  color: #536ab6;\n}\n\n.card .cardTitle h4 a {\n  text-decoration: none;\n  cursor: pointer;\n  padding: 10.5px 2px;\n}\n\n.card .cardDesc {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 1px;\n  color: #8b9bce;\n}\n\n.card:hover {\n  box-shadow: 0 4px 10px 0 rgba(21, 213, 247, 0.753);\n  transform: scale(1.05);\n}\n\nh3 {\n  font-family: "lobster", cursive, serif;\n  text-align: center;\n  margin: 10px;\n  color: #536ab6;\n  font-size: 22px;\n}\n\nmain {\n  width: 100%;\n  background: #fff;\n}\n\nmain article.precontent {\n  width: 100%;\n  background: #8fd9a8;\n  display: grid;\n  justify-content: center;\n  box-sizing: border-box;\n}\n\nmain article.precontent h2 {\n  font-size: 18px;\n  color: #536ab6;\n}\n\nmain article.precontent .precards {\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  font-family: "Courgette", cursive, serif;\n  color: #eeffff;\n}\n\nmain article.precontent .precards .precard {\n  box-sizing: border-box;\n  padding: 0.5em;\n  width: 145px;\n  height: auto;\n  margin: 10px;\n  border-radius: 1em;\n  background-color: #28b5b5;\n  text-align: left;\n  box-shadow: 2px 0 2px 0 rgba(0, 0, 0, 0.2);\n  font-size: 16px;\n  transition: 0.3s ease;\n}\n\nmain article.precontent .precards .precard .preimg img {\n  width: 100%;\n  border-radius: 1em;\n}\n\nmain article.precontent .precards .precard:hover {\n  transform: scale(1.1);\n}\n\nmain article.content {\n  background: white;\n}\n\nmain article.content #list-restaurant {\n  width: 100%;\n  background: #8ab6d6;\n  overflow: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter {\n  font-family: "Courgette", cursive, serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1em;\n  background: #0061a8;\n}\n\nfooter p {\n  font-style: italic;\n  font-size: 16px;\n  color: #fff;\n}\n\n#likeButtonContainer .like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background: #db0000;\n  color: white;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.detail-restaurant {\n  font-family: "Courgette", cursive, serif;\n  margin: 10px auto;\n  display: grid;\n  justify-content: center;\n  justify-items: center;\n  width: 100%;\n  box-sizing: border-box;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.39);\n  background: #8fd9a8;\n  border-radius: 0 0 1em 1em;\n}\n\n.detail-restaurant h3 {\n  text-align: left;\n}\n\n.detail-restaurant h2 {\n  margin: 10px 0;\n  color: #0379cc;\n}\n\n.detail-restaurant h1.restaurantName {\n  padding: 10px;\n  color: #0061a8;\n  margin: 5px 0;\n  font-family: "Courgette", cursive, serif;\n  font-size: 1.5rem;\n  letter-spacing: 2px;\n  text-align: center;\n}\n\n.detail-restaurant .wrapInfo {\n  color: #8b9bce;\n}\n\n.detail-restaurant .wrapInfo .imageWrap {\n  width: 100%;\n  background: #eeffff;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1em;\n}\n\n.detail-restaurant .wrapInfo .imageWrap img {\n  width: 100%;\n  border-radius: 1em;\n}\n\n.detail-restaurant .wrapInfo .info {\n  border: 1px solid #4bc2f1;\n  box-sizing: border-box;\n  padding: 10px;\n  border-radius: 1em;\n  background: #eeffff;\n}\n\n.detail-restaurant .wrapInfo .info h3 {\n  margin-left: 0;\n}\n\n.detail-restaurant .overview {\n  line-height: 24px;\n  letter-spacing: 1px;\n  background: #eeffff;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 10px auto;\n  padding: 10px;\n  border: 1px solid #4bc2f1;\n  box-sizing: border-box;\n  border-radius: 1em;\n}\n\n.detail-restaurant .overview .description p {\n  color: #8b9bce;\n}\n\n.detail-restaurant .overview .menuContainer {\n  margin-top: 10px;\n  width: 100%;\n  display: grid;\n  box-sizing: border-box;\n  position: relative;\n  color: #8b9bce;\n  grid-template-areas: "title title"\r "foods drinks";\n}\n\n.detail-restaurant .overview .menuContainer h3 {\n  display: grid;\n  grid-area: title;\n}\n\n.detail-restaurant .overview .menuContainer h4 {\n  font-size: 1em;\n  color: #28b5b5;\n}\n\n.detail-restaurant .overview .menuContainer .menuDrinks,\n.detail-restaurant .overview .menuContainer .menuFoods {\n  position: relative;\n  background-image: linear-gradient(yellow, gold);\n  padding: 1em;\n  display: grid;\n  margin: 0 4px;\n  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.25);\n  margin: 0 4px;\n  border-radius: 1em;\n}\n\n.detail-restaurant .overview .menuContainer .menuDrinks ul li,\n.detail-restaurant .overview .menuContainer .menuFoods ul li {\n  list-style: none;\n}\n\n.detail-restaurant .overview .menuContainer .menuDrinks {\n  grid-area: drinks;\n}\n\n.detail-restaurant .overview .menuContainer .menuFoods {\n  grid-area: foods;\n}\n\n.detail-restaurant .overview .review-container {\n  margin: 0 auto;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.detail-restaurant .overview .review-container img {\n  width: 100px;\n  height: 100px;\n  display: block;\n}\n\n.detail-restaurant .overview .review-container .reviewer {\n  box-sizing: border-box;\n  background: lightgreen;\n  margin: 8px 0;\n  border: 1px solid black;\n  border-radius: 1em;\n  width: 100%;\n  padding: 10px;\n}\n\n.detail-restaurant .overview .review-container .reviewer .user {\n  color: #0061a8;\n}\n\n.detail-restaurant .overview .review-container .reviewer .user span.date {\n  color: #28b5b5;\n}\n\n.detail-restaurant .overview .review-container .reviewer .review {\n  color: #0599ba;\n}\n\n.favorite {\n  display: grid;\n  height: 100%;\n  width: 100%;\n}\n\n.favorite .not-found h3 {\n  color: #8b9bce;\n  border: 3px solid orange;\n  padding: 1em;\n  background: #ffe658;\n}\n\n.favorite .restaurants {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.favorite h2 {\n  text-align: center;\n  font-family: "Courgette", cursive, serif;\n  margin: 18px;\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  background-image: linear-gradient(to right, orange, yellow);\n  margin: 10px auto;\n  animation: sk-rotateplane 1.1s infinite ease-in-out;\n  border: 2px solid black;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.23);\n}\n\n@keyframes sk-rotateplane {\n  00% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media screen and (min-width: 650px) {\n  .app-bar {\n    grid-template-columns: 1fr auto;\n    padding: 8px 32px;\n  }\n  .app-bar .app-bar-brand h1 {\n    font-size: 1.5em;\n  }\n  .app-bar .app-bar-menu {\n    display: none;\n  }\n  .app-bar .app-bar-nav {\n    position: static;\n    width: 100%;\n  }\n  .app-bar .app-bar-nav ul li {\n    display: inline-block;\n  }\n  .app-bar .app-bar-nav ul li a {\n    display: inline-block;\n    width: 120px;\n    text-align: center;\n    margin: 0;\n  }\n  .detail-restaurant .wrapInfo {\n    display: grid;\n    grid-template-columns: 1.5fr 1fr;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  section.hero {\n    background-image: url("/images/heros/hero-image-large.jpg");\n  }\n  section.hero .hero-inner h2.hero-title {\n    line-height: 36px;\n    font-size: 1.5em;\n  }\n  .detail-restaurant h1.restaurantName {\n    font-size: 2.3rem;\n  }\n  .card {\n    margin: 25px;\n  }\n  .app-bar {\n    background: #0061a8;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .app-bar .app-bar-nav {\n    display: grid;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .app-bar .app-bar-brand h1 {\n    font-size: 2em;\n  }\n}\n\n@media screen and (min-width: 935px) {\n  .detail-restaurant {\n    width: 936px;\n  }\n}\n\n*:focus {\n  outline: 3px dashed orange;\n}',""]),n.exports=e}});