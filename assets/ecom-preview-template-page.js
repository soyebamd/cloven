!function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-16z9sxpno4v"]=window.__ectimmers["ecom-16z9sxpno4v"]||{},!this.$el)return;const e=this.$el,t=e.querySelector(".ecom-text_view-more-btn"),i=e.querySelector(".ecom-text_view-less-btn"),o=e.querySelector(".text-content.ecom-html");!o||(t&&t.addEventListener("click",()=>{o.classList.remove("ecom-text--is-mark"),o.style.maxHeight="",t.style.display="none",i.style.display=""}),i&&i.addEventListener("click",()=>{o.classList.add("ecom-text--is-mark"),o.style.maxHeight="var(--ecom-text-height)",i.style.display="none",t.style.display=""}))};document.querySelectorAll(".ecom-16z9sxpno4v").forEach((function(t){e.call({$el:t,id:"ecom-16z9sxpno4v",settings:{},isLive:!0})})),document.querySelectorAll(".ecom-caw0kmqaadn").forEach((function(t){e.call({$el:t,id:"ecom-caw0kmqaadn",settings:{},isLive:!0})})),document.querySelectorAll(".ecom-cpn4vpaoy1i").forEach((function(t){e.call({$el:t,id:"ecom-cpn4vpaoy1i",settings:{},isLive:!0})})),document.querySelectorAll(".ecom-nqpldy42b6").forEach((function(t){e.call({$el:t,id:"ecom-nqpldy42b6",settings:{},isLive:!0})}))}(),function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-1d5x5ve3w6vh"]=window.__ectimmers["ecom-1d5x5ve3w6vh"]||{},!this.$el)return!1;const e=this.$el,t=this,i=this.settings.animation,o=new CustomEvent("animation",(function(){}));let n=e.querySelector(".ecom__heading");function s(){if("typing"===i){let i=function(){setTimeout((function(){var e;let t=null==(e=l.settings)?void 0:e.animation;if(o.innerText=n[r].slice(0,s),c){if(s>n[r].length)return c=!1,void("typing"==t&&setTimeout((function(){i()}),2e3));s++}else 0===s?(c=!0,r=(r+1)%n.length):s--;i()}),c?120:60)},o=e.querySelector(".highlight-animation--typing");if(!o)return!1;let n=o.dataset.heading.split("|")||"",s=0,c=!0,r=0;const l=t;i()}if("smooth"===i){let t=function(){let e=0,t=window.__ectimmers["ecom-1d5x5ve3w6vh"]["3kv7lb17v"]=setInterval((function(){"smooth"!=i&&clearInterval(t),e++,o.forEach((t,i)=>{e==o.length&&(e=0),i==e?t.classList.add("is-active"):t.classList.remove("is-active")})}),3e3)},o=e.querySelectorAll(".heading-animation--smooth-item");if(!o)return!1;t()}}n.querySelector("a")&&(n=n.querySelector("a")),n.addEventListener("animation",()=>{s()}),n.addEventListener("blur",(function(e){e.target.dispatchEvent(o)})),s()};document.querySelectorAll(".ecom-1d5x5ve3w6vh").forEach((function(t){e.call({$el:t,id:"ecom-1d5x5ve3w6vh",settings:{animation:"off"},isLive:!0})}))}(),function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-xchr37plea"]=window.__ectimmers["ecom-xchr37plea"]||{},!this.$el)return;const e=this.$el.querySelector(".ecom-product-single__description-view-more-btn");if("tab"===this.settings.type){const e=this.$el.querySelectorAll(".ecom-product-description-tab__item"),t=this.$el.querySelectorAll(".ecom-product-description-tab__content");e.length&&e.forEach((i,o)=>{i.onclick=function(){this.classList&&!this.classList.contains("ecom-item-active")&&(e.forEach(e=>e.classList.remove("ecom-item-active")),t.forEach(e=>e.classList.remove("ecom-item-active")),i.classList.add("ecom-item-active"),t[o].classList.add("ecom-item-active"))}})}const t=this.settings.content_type,i=this.$el.querySelector(".ecom-product-single__description--full"),o=this.$el.querySelector(".ecom-product-single__description-view-less-btn"),n=this.$el.querySelector(".ecom-product-single__description--paragraph");e&&(e&&e.addEventListener("click",(function(){"text"===t&&i?(i.style.display="block",n.style.display="none"):n.style.maxHeight=null,this.style.display="none",o&&(o.style.display="flex")})),o&&o.addEventListener("click",(function(){e.style.display="flex",this.style.display="none","text"===t&&i?(i&&(i.style.display="none"),n.style.display="block"):n.style.maxHeight="var(--ecom-description-height)"})))};document.querySelectorAll(".ecom-xchr37plea").forEach((function(t){e.call({$el:t,id:"ecom-xchr37plea",settings:{type:"full",content_type:"html"},isLive:!0})}))}(),function(){const e=function(){"use strict";var e,t;window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-hgaigm2nqpk"]=window.__ectimmers["ecom-hgaigm2nqpk"]||{};let i=this.$el;if(!i)return;let o=i.querySelector("afterpay-placement.ecom-afterpay-integrate"),n=this.$el.closest(".ecom-product-form--single");if(n){let e=n.querySelector('[name="id"]');if(e&&e.dispatchEvent(new window.Event("ecomUpdate")),this.settings.show_total_price){const e=n.querySelector(".ecom-product-single__quantity-input"),t=i.querySelector(".ecom-product-single__price--sale");if(i.querySelector(".ecom-product-single__price--regular"),!t)return;e&&e.addEventListener("change",(function(){t.innerHTML=window.EComposer.formatMoney(parseInt(t.getAttribute("data-price"))*parseInt(this.value))})),n.addEventListener("ecomVariantChange",(function(i){if(i.detail.variant){const o=i.detail.variant,n=e?parseInt(e.value):1;t.setAttribute("data-price",o.price),n>1&&(t.innerHTML=window.EComposer.formatMoney(o.price*parseInt(n)))}}))}}if(this.settings.enable_afterpay){let i=window.document.querySelector("#ecom-after-pay-script");if(window.afterpay_min=this.settings.lower_limit||1,i)i.dataset.analyticsEnabled=!0,i.dataset.min=null!=(e=this.settings.lower_limit)?e:1,i.dataset.max=null!=(t=this.settings.upper_limit)?t:1e3;else{let e=window.document.createElement("script");e.id="ecom-after-pay-script",e.dataset.analyticsEnabled=!0,e.dataset.min=this.settings.lower_limit||1,e.dataset.max=this.settings.upper_limit||1e3,e.src="https://js.afterpay.com/afterpay-1.x.js",window.document.head.appendChild(e)}o&&this.isLive&&window.jQuery&&window.Afterpay&&window.Afterpay.initProductPage&&window.Afterpay.initProductPage(window.jQuery)}let s=i.querySelector(".ecom-product-single__price--badges-sale");if(s&&"true"==s.dataset.haveSale){let e=s.dataset.sale,t=s.dataset.text;t=t.replace(/\{.*\}/g,e),s.innerHTML=t,s.style.display="block"}};document.querySelectorAll(".ecom-hgaigm2nqpk").forEach((function(t){e.call({$el:t,id:"ecom-hgaigm2nqpk",settings:{enable_afterpay:!1,lower_limit:"100",upper_limit:"600"},isLive:!0})}))}(),function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-c8t3o1nkidq"]=window.__ectimmers["ecom-c8t3o1nkidq"]||{},!this.$el)return!1;const e=this.$el;let t=e.closest(".ecom-product-form--single");if(!t){const i=e.closest(".ecom-builder");i&&(t=i.querySelector(".ecom-product-form--single"))}if(!t)return!1;if(this.isLive){let i=t.querySelector("select[name=id]");const o=e.querySelector(".ecom-product-single__buy_it_now_btn--checkout"),n=t.dataset.product_id;if(!n)return;let s=null;const c=t.querySelector("[id^=product-json-"+n+"]");if(!c)return;try{s=JSON.parse(c.innerHTML)}catch(e){return}o&&o.addEventListener("click",(function(e){e.preventDefault();let i=1;t.querySelector("[name=quantity]")&&(i=t.querySelector("[name=quantity]").value);let o=t.querySelector("select[name=id]")||t.querySelector("input[name=id]");o||console.warn("EC error: Select id or input id not found!");let n=o.value,c=s.variants.find(e=>e.id==n);if(!c||!1===c.available)return;window.Shopify.analytics&&Shopify.analytics.publish("ec_buy_now",{cartLine:{cost:{totalAmount:{amount:c.price*i,currencyCode:window.Shopify.currency.active}},merchandise:{id:c.id,image:c.image,price:{amount:c.price,currencyCode:window.Shopify.currency.active},product:{id:s.id,title:s.title,vendor:s.vendor},sku:c.sku,title:c.title},quantity:i}});let r=`${window.EComposer.routes.cart_url}/${n}:${i}`;if(window.location.search.includes("selling_plan")){const e=/selling_plan=(\d+)/,t=window.location.search.match(e);if(t){const e=t[1];r=`${window.EComposer.routes.cart_url}/clear?return_to=/cart/add?items[][id]=${n}%26items[][quantity]=${i}%26items[][selling_plan]=${e}%26return_to=/checkout`}}location.href=r})),s.available||(o.classList.add("ecom-disable-buy"),o.disabled=!0),i&&i.addEventListener("change",(function(){let e=this.value;e&&(!1===s.variants.find(t=>t.id==e).available?(o.classList.add("ecom-disable-buy"),o.disabled=!0):(o.classList.remove("ecom-disable-buy"),o.disabled=!1))}))}this.settings.animation&&function(t){if(!e)return;const i=e.querySelector(".ecom-product-single__buy_it_now_btn--checkout");if(!i)return;let o=1e3*parseInt(t.settings.animation_loop_time)||6e3;window.__ectimmers["ecom-c8t3o1nkidq"].qc9apu573=setInterval((function(){i.classList.add("animated"),setTimeout((function(){i.classList.remove("animated")}),1e3)}),o)}(this)};document.querySelectorAll(".ecom-c8t3o1nkidq").forEach((function(t){e.call({$el:t,id:"ecom-c8t3o1nkidq",settings:{animation:!1},isLive:!0})}))}(),function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-v9i7xx8ok0s"]=window.__ectimmers["ecom-v9i7xx8ok0s"]||{},"lightbox"===this.settings.link&&"yes"===this.settings.lightbox&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}let t=this.$el;function i(){let e=t.querySelector(".ecom-element.ecom-base-image"),i=t.closest(".core__row--columns");e&&(function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom-e.offsetHeight/2<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(e)?(e.classList.add("image-highlight"),i.setAttribute("style","z-index: unset")):(e.classList.remove("image-highlight"),i.setAttribute("style","z-index: 1")))}t&&this.settings.highligh_on_viewport&&window.addEventListener("scroll",(function(){i()}))};document.querySelectorAll(".ecom-v9i7xx8ok0s").forEach((function(t){e.call({$el:t,id:"ecom-v9i7xx8ok0s",settings:{link:"none",lightbox:"no",highligh_on_viewport:!1},isLive:!0})})),document.querySelectorAll(".ecom-vi3wss5yyz").forEach((function(t){e.call({$el:t,id:"ecom-vi3wss5yyz",settings:{link:"none",lightbox:"no",highligh_on_viewport:!1},isLive:!0})})),document.querySelectorAll(".ecom-nupqd4n93l8").forEach((function(t){e.call({$el:t,id:"ecom-nupqd4n93l8",settings:{link:"none",lightbox:"no",highligh_on_viewport:!1},isLive:!0})})),document.querySelectorAll(".ecom-c7icdduriz").forEach((function(t){e.call({$el:t,id:"ecom-c7icdduriz",settings:{link:"none",lightbox:"no",highligh_on_viewport:!1},isLive:!0})}))}(),function(){const e=function(){"use strict";window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-grdk8d3z5d6"]=window.__ectimmers["ecom-grdk8d3z5d6"]||{};const e=this.$el;if(!e)return;let t=this.settings.link_redirect,i=this.settings.hide_form_when_submit||!1,o=e.querySelector('.ecom-contact-form-file[type="file"]');const n=this.id;(function(){if(window.location.href.includes("contact_posted=true")){if(t){let e=t.href;if(""==e)return!1;"_blank"===t.target?window.open(e):window.location.href=e}if(i){const t=e.querySelector(".ecom__contact-form-content");t&&(t.style.display="none")}}})(),window.location.href.includes(i);const s=e.querySelector("#ecom-contact-form-"+n);if(!s)return;const c=s.querySelector(".ecom__form-button");if(!c)return;o&&(s.setAttribute("enctype","multipart/form-data"),s.addEventListener("submit",(function(e){if(!o.value||""===o.value)return;e.preventDefault(),e.stopImmediatePropagation(),c.classList.add("ecom-ajax-loading","ecom-loading");const t=s.querySelector('input[type="file"]');let i=new FormData,n=window.location.origin,r=window.EComposer&&window.EComposer.proxy_path;const l=`${n}${r}/contact-form`;i.append("file",t.files[0]),t.value&&r&&fetch(l,{method:"POST",body:i}).then(e=>e.json()).then(e=>{if("success"===e.status){let i=t.name;t.remove();let o=document.createElement("input");o.value=e.src_file,o.type="hidden",o.name=i,s.appendChild(o),s.submit()}else alert("Notice: "+e.message)}).catch(e=>console.error(e)).finally((function(){c.classList.remove("ecom-ajax-loading","ecom-loading")}))})),o.addEventListener("change",(function(){this.files[0].size>10485760&&(this.value="",alert("File size exceeds the maximum allowed limit (10MB)."))})));let r=e.querySelectorAll(".ecom-required--checkbox");c.addEventListener("click",(function(e){r.length>0&&r.forEach((function(e){let t=e.querySelectorAll("input[type=checkbox]");if(0==t.length)return;let i=!1;t.forEach((function(e){e.checked&&(i=!0)})),i?t.forEach((function(e){e.required=!1})):t.forEach((function(e){e.required=!0}))}))})),s.dataset.ecTrackingId&&s.addEventListener("submit",(function(){window.Shopify&&window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:s.id,tracking_id:s.dataset.ecTrackingId})}),{once:!0})};document.querySelectorAll(".ecom-grdk8d3z5d6").forEach((function(t){e.call({$el:t,id:"ecom-grdk8d3z5d6",settings:{},isLive:!0})}))}(),function(){const e=function(){"use strict";var e,t,i,o;if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-68uqokbnbnf"]=window.__ectimmers["ecom-68uqokbnbnf"]||{},!this.$el)return!1;const n=this,s=this.$el,c=this.isLive,r=(this.settings.position_zoom&&this.settings.position_zoom,{width:this.settings.zoom_width,height:this.settings.zoom_height}),l=s.closest(".ecom-product-form--single");window.innerWidth,window.innerWidth,s.closest(".ecom-row"),window.matchMedia("only screen and (max-width: 768px)");const a=!!this.settings.show_thumbnails&&this.settings.show_thumbnails,d=this.settings.layout?this.settings.layout:"slider",u=!!this.settings.enable_zoom&&this.settings.enable_zoom;var m,h,p=this.settings.thumbnail_position,w=this.settings.thumbnail_position__tablet,f=this.settings.thumbnail_position__mobile,y=!!this.settings.show_pagination,g=null!=(e=this.settings.enable_gallery)&&e,_=null!=(t=this.settings.gallery_name)&&t,v=null!=(i=this.settings.centeredSlides)&&i,S=null!=(o=this.settings.slide_loop)&&o,b=this.settings.disable_auto_height;function q(){if("slider"===d)try{if(a){const e=n.$el.querySelector(".ecom-product-single__media--thumbs");let t=JSON.parse(e.dataset.breakpoints);Object.keys(t).forEach(e=>{t[e].__screen_name;t[e].direction=["row","row-reverse"].includes(t[e].thumbnail_position)?"vertical":"horizontal"}),e.hasChildNodes()&&(m=new window.EComSwiper(e,{freeMode:!1,centeredSlides:!1,loop:!1,centeredSlidesBounds:!0,slideToClickedSlide:!0,autoHeight:!!(["row","row-reverse"].includes(p)&&window.screen.width>1024||["row","row-reverse"].includes(w)&&(window.screen.width>=768||window.screen.width<=1024)||["row","row-reverse"].includes(f)&&window.screen.width<768),navigation:{nextEl:n.$el.querySelector(".ecom-product-single__media--thumbs .ecom-swiper-button-next"),prevEl:n.$el.querySelector(".ecom-product-single__media--thumbs .ecom-swiper-button-prev")},allowTouchMove:c,watchSlidesProgress:!0,grabCursor:!0,centerInsufficientSlides:!1,breakpoints:t,direction:["row","row-reverse"].includes(p)?"vertical":"horizontal",on:{slideChangeTransitionEnd:function(){},breakpoint:function(){setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)},init:function(){setTimeout(()=>{this.el&&this.el.classList.remove("ecom-product-single__init-thumb-hidden")},50)}}}));let i=null;e.querySelectorAll("img").forEach((function(e){e.addEventListener("load",(function(){clearTimeout(i),i=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)}))}))}const t=s.querySelector(".ecom-product-single__media--featured");var e=t.dataset.breakpoints;e=e?JSON.parse(e):{0:{slidesPerView:1,spaceBetween:20}},h=new window.EComSwiper(t,{autoHeight:null==b||b,lazy:!0,allowTouchMove:c,pagination:!!y&&{el:t.querySelector(".ecom-swiper-pagination"),dynamicBullets:!0,clickable:!0},navigation:{nextEl:s.querySelector(".ecom-product-single__media--featured .ecom-swiper-button-next"),prevEl:s.querySelector(".ecom-product-single__media--featured .ecom-swiper-button-prev")},thumbs:a&&m?{swiper:m}:void 0,noSwiping:!0,longSwipes:!0,loop:S,centeredSlides:v,touchStartPreventDefault:!0,noSwipingSelector:"model-viewer",noSwipingClass:"ecom-product-single__media--model",grabCursor:!0,preloadImages:!0,breakpoints:e,on:{breakpoint:function(){setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)},slideChange:function(e){var t,i;if(g)return;e.activeIndex!==e.lastIndex&&(e.lastIndex=e.activeIndex+"");const o=l&&l.querySelector('[name="id"]');if(o){let e=null;if(!h||!h.slides[h.activeIndex])return;if(e=null==(i=null==(t=h.slides[h.activeIndex])?void 0:t.dataset)?void 0:i.variant_id,e){e+="";const t=o.value;(!t||!e.includes(t.toString()))&&(o.value=e.split(",")[0],o.dispatchEvent(new Event("swatch")))}}e.slides[e.activeIndex]&&u&&x(e.slides[e.activeIndex])},slideChangeTransitionEnd:function(e){var t,i;window.dispatchEvent(new window.Event("resize")),e.slides.forEach(e=>{if(e.classList.contains("ecom-swiper-slide-active")){let t=e.querySelector("video");t&&t.hasAttribute("autoplay")&&t.play()}else{let t=e.querySelector("iframe,video");t&&("IFRAME"===t.nodeName?t.src=t.src:t.pause())}}),c&&(a&&m&&m.update(),e.allowTouchMove=!(null!=(i=null==(t=e.slides[h.activeIndex])?void 0:t.classList)&&i.contains("ecom-swiper-no-swiping")))},init:function(e){e.slides[e.activeIndex]&&u&&x(e.slides[e.activeIndex])}}});let i=null;t.querySelectorAll("img").forEach((function(e){e.addEventListener("load",(function(){clearTimeout(i),i=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)}))})),c||setTimeout(()=>{t.classList.remove("ecom-before-init")},200)}catch(e){console.info(e.message)}}async function E(e){const t=await window.fetch(e,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});if(t.ok){const e=await t.json();if(e)return e.product}return!1}if(q(),g&&async function(){const e=s.querySelectorAll(".ecom-product-single__media--image img"),t=s&&s.querySelector(".ecom-product-single__media--featured .ecom-product-single__media--images-layout__slider"),i=t&&t.querySelectorAll(".ecom-product-single__media--image"),o=s&&s.querySelector(".ecom-product-single__media--featured"),r=s&&s.querySelector(".ecom-product-single__media--thumbs"),a=s&&s.querySelector(".ecom-product-single__media--slider .ecom-product-single__media--thumbs .ecom-swiper-wrapper"),d=r&&r.querySelectorAll(".ecom-product-single__media--thumbnail"),p=s&&s.querySelector(".ecom-product-single__media--grid .ecom-product-single__media--images-layout__grid"),w=p&&p.querySelectorAll(".ecom-product-single__media--image");let f=!0;if(e&&e.forEach((function(e,t){e&&e.alt&&e.alt.includes("ecomposer-")&&(f=!1)})),f)return;let y=null,v=l&&l.querySelector(".ecom-product-single-select-id[name=id]");if(!v)return;const S=l&&l.querySelector("#"+v.dataset.jsonProduct);if(!S)return;try{y=JSON.parse(S.innerHTML)}catch(e){return}let b=null;if(c&&window.Shopify&&"/"!=window.Shopify.routes.root){let e=window.location.origin+"/products/"+y.handle+".json";b=await E(e),b||(e=window.location.origin+window.Shopify.routes.root+"products/"+y.handle+".json",b=await E(e)),y.options_with_values=b.options,y.variants=b.variants}let L={detail:{variant:null}};L.detail.variant=y.variants.find((function(e){if(e.id==v.value)return e}));let k=s.querySelector("#ecom-single-product-default-variant"),C=k&&k.innerText,$=k.dataset.dontSetAlt;function A(e){if(e.detail.variant&&(e.target&&e.target.querySelector(".ecom-product-single__variant-picker-container"),g&&_)){let f=function(e){let t=e.options_with_values,i=[];_.includes(",")?_.split(",").forEach((e,o)=>{t&&t.forEach((function(t){t.name.trim().toLowerCase()===e.trim().toLowerCase()&&(i=i.concat({key:t.name.trim(),value:t.values}))}))}):t&&t.forEach((function(e){e.name.trim().toLowerCase()!==_.toLowerCase()||(i=i.concat({key:e.name.trim(),value:e.values}))}));let o=[];return i&&i.forEach((function(e,t){e.value.forEach(t=>{C.option1==t&&o.push(`ecomposer-${e.key.toLowerCase()}-${C.option1.replaceAll(" ","-").toLowerCase()}`),C.option2==t&&o.push(`ecomposer-${e.key.toLowerCase()}-${C.option2.replaceAll(" ","-").toLowerCase()}`),C.option3==t&&o.push(`ecomposer-${e.key.toLowerCase()}-${C.option3.replaceAll(" ","-").toLowerCase()}`)})})),o},v=function(e,t,i,o,s){if(o&&t&&y&&i.length){t.innerHTML="",i.forEach((function(e){let i=e.querySelector("img")&&e.querySelector("img").alt;if(i)if(i.includes(",")){i=i.split(","),i=i.map((function(e){return e.trim().toLowerCase()}));let o=f(y).filter(e=>-1!==i.indexOf(e));(S(o,i)||b(o,i)&&o.length===E(i))&&(e.querySelector("img").removeAttribute("loading"),t.appendChild(e))}else f(y).includes(i.toLowerCase())&&(e.querySelector("img").removeAttribute("loading"),t.appendChild(e))})),t.style=s,e.prepend(t);const o=n.$el.querySelector(".ecom-product-single__media--thumbs");m&&(m.destroy(),o.classList.add("ecom-product-single__init-thumb-hidden")),h&&(h.destroy(),q())}},S=function(e,t){return e.sort().join()===t.sort().join()},b=function(e,t){return e.every(e=>t.includes(e))},E=function(e){const t=new Set;let i=0;for(const o of e){const e=o.indexOf("-",o.indexOf("-")+1),n=o.substring(10,e);t.has(n)||(t.add(n),i++)}return i},L=function(e){const t=l&&l.querySelector(".ecom-product-single__media--grid_default");if(!t||!e||!y)return;let i=t&&t.querySelectorAll(".ecom-product-single__media--image");i.length&&(_&&g?i.forEach((function(e){e.style.display="none";let t=e.querySelector("img").alt;if(t.includes(",")){t=t.split(","),t=t.map((function(e){return e.trim().toLowerCase()}));let i=f(y).filter(e=>-1!==t.indexOf(e));(S(i,t)||b(i,t)&&i.length===E(t))&&(e.style.display="block")}else f(y).includes(t.toLowerCase())&&(e.style.display="block")})):i.forEach((function(e){e.style.display="flex"})))},k=function(e){if(e&&p&&y){p.innerHTML="";let e=[];w.forEach((function(t,i){let o=t.querySelector("img").alt;if(o.includes(",")){o=o.split(","),o=o.map((function(e){return e.trim().toLowerCase()}));let i=f(y).filter(e=>-1!==o.indexOf(e));(S(i,o)||b(i,o)&&i.length===E(o))&&e.push(t)}else f(y).includes(o.toLowerCase())&&e.push(t)})),e.forEach((function(t,i){0==i||i>=5&&i%5==0||i%5!=0&&(i+1)%2==0&&i==e.length-1||1==i&&2==e.length?t.style.paddingTop=t.dataset.fullWidth+"%":t.style.paddingTop=t.dataset.halfWidth+"%",p.appendChild(t)}))}},C=e.detail.variant;c&&window.Shopify&&"/"!=window.Shopify.routes.root&&(C=y.variants.find((function(e){if(e.id==l.querySelector(".ecom-product-single-select-id[name=id]").value)return e})));const $=a&&a.style,A=t&&t.style;if(v(o,t,i,C,A),v(r,a,d,C,$),L(C),k(C),u){let e=s.querySelectorAll(".ecom-image-zoom");if(0==e.length)return;x(e),c&&e.forEach((function(e){e.querySelector("a")&&e.querySelector("a").addEventListener("click",(function(e){e.preventDefault()}))}))}}}$&&"true"==$||L&&"false"===C&&(A(L),l&&l.addEventListener("ecomVariantChange",A))}(),s.querySelectorAll(".ecom-product-single__media--play-control").forEach((function(e){e.addEventListener("click",(function(e){this.style.display="none",this.parentNode.querySelector("video").play()}))})),!this.isLive)try{n.$el.querySelectorAll("model-viewer").forEach((function(e){const t=element.outerHTML;e.replaceWith(t)}))}catch(e){console.info(e.message)}if(document.querySelector("model-viewer")&&!document.getElementById("ModelViewerStyle")){let e=document.createElement("link");e.id="ModelViewerStyle",e.rel="stylesheet",e.href="https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css",e.media="print",e.onload=function(){this.media="all"},document.head.appendChild(e)}if(window.Shopify&&window.Shopify.loadFeatures&&window.Shopify.loadFeatures([{name:"shopify-xr",version:"1.0",onLoad:function e(){if(window.ShopifyXR){try{const e=n.$el.querySelector('[id^="Product-model-"]');e&&(window.ShopifyXR.addModels(JSON.parse(e.textContent)),e.remove())}catch(e){console.log(e.message)}window.ShopifyXR.setupXRElements()}else document.addEventListener("shopify_xr_initialized",(function(){e()}))}},{name:"model-viewer-ui",version:"1.0",onLoad:function(e){if(e)return;const t=s.querySelectorAll("model-viewer");t&&t.forEach(e=>{if(e)try{new window.Shopify.ModelViewerUI(e)}catch(e){console.warn(e.message)}}),s.querySelectorAll("button").forEach((function(e){e.setAttribute("type","button")}))}}]),this.settings.image_action&&"lightbox"===this.settings.image_action&&c){let e=this.$el.querySelectorAll("[ecom-modal]");e.length&&window.EComModal&&new window.EComModal(e,{gallery:!0,cssClass:["ecom-container-lightbox-"+this.id]})}if(this.settings.position_sticky&&window.innerWidth>1024&&s.parentElement&&(this.isLive?s.style.height="100%":s.parentElement.style.height="100%"),u){let e=s.querySelectorAll(".ecom-image-zoom");if(0==e.length)return;"slider"!==d&&x(e),c&&e.forEach((function(e){e.querySelector("a")&&e.querySelector("a").addEventListener("click",(function(e){e.preventDefault()}))}))}function x(e){if(c&&!(window.innerWidth<768)&&window.EcomImgZoom)if(e.length>0)for(var t=0,i=e.length;t<i;t++)new window.EcomImgZoom(e[t],r);else new window.EcomImgZoom(e,r)}};document.querySelectorAll(".ecom-68uqokbnbnf").forEach((function(t){e.call({$el:t,id:"ecom-68uqokbnbnf",settings:{zoom_width:"500px",zoom_height:"500px",show_thumbnails:!0,layout:"slider",enable_zoom:!1,thumbnail_position:"column",thumbnail_position__tablet:"column",thumbnail_position__mobile:"column",show_pagination:!0,image_action:"nothing"},isLive:!0})}))}(),window.location.search.indexOf("ecom-token=")<0&&(document.querySelector(".ecom-builder").innerHTML='<h3 style="width:100%;display:block;text-align:center">This template for preview purposes only</h3>',document.querySelector("body").style.opacity="0.7"),window.addEventListener("load",()=>{let e=!1;if(document.querySelector("#admin-bar-iframe")&&(e=!0),!e){if(window.EComposerBrand)return;window.EComposerBrand=!0}let t=document.querySelector("body"),i=document.createElement(Math.random().toString(36).replace(/\d*/g,"").substr(2,4));i.setAttribute("style",["position:relative","top: 0px","left: 0px","display: inline-block","height: 30px","line-height: 30px","font-size: 11px","width: 100%","text-align: center","opacity: 1","text-indent: 0","color: rgba(18, 18, 18, 0.75)","background: transparent","opacity: 0.8",""].join(" !important;")),i.innerHTML="Built with <a style='color: currentColor;text-decoration: none;' href=\"https://ecomposer.io/?utm_source=client-site&utm_medium=footer&utm_campaign=footer_branding&utm_term=links&utm_content="+window.location.origin+'" target="_blank">EComposer</a>'+(e?". Contact us or upgrade to remove branding":""),t.appendChild(i)});