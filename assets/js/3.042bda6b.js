(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{292:function(t,e,n){},293:function(t,e,n){},294:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));const s=/#.*$/,i=/\.(md|html)$/,r=/\/$/,o=/^(https?:|mailto:|tel:)/;function a(t){return o.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function u(t){if(a(t))return t;const e=t.match(s),n=e?e[0]:"",o=function(t){return decodeURI(t).replace(s,"").replace(i,"")}(t);return r.test(o)?t:o+".html"+n}function p(t,e,n){if(!t)return n;let s,i=e;for(;(i=i.$parent)&&!s;)s=i.$refs[t];return s&&s.$el&&(s=s.$el),s||n}},295:function(t,e,n){"use strict";n(292)},296:function(t,e,n){"use strict";n(293)},297:function(t,e,n){var s=n(133),i=n(126),r=n(298),o=n(302);t.exports=function(t,e){if(null==t)return{};var n=s(o(t),(function(t){return[t]}));return e=i(e),r(t,n,(function(t,n){return e(t,n[0])}))}},298:function(t,e,n){var s=n(72),i=n(299),r=n(67);t.exports=function(t,e,n){for(var o=-1,a=e.length,c={};++o<a;){var l=e[o],u=s(t,l);n(u,l)&&i(c,r(l,t),u)}return c}},299:function(t,e,n){var s=n(300),i=n(67),r=n(70),o=n(46),a=n(31);t.exports=function(t,e,n,c){if(!o(t))return t;for(var l=-1,u=(e=i(e,t)).length,p=u-1,h=t;null!=h&&++l<u;){var d=a(e[l]),m=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(l!=p){var v=h[d];void 0===(m=c?c(v,d,h):void 0)&&(m=o(v)?v:r(e[l+1])?[]:{})}s(h,d,m),h=h[d]}return t}},300:function(t,e,n){var s=n(301),i=n(69),r=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];r.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||s(t,e,n)}},301:function(t,e,n){var s=n(134);t.exports=function(t,e,n){"__proto__"==e&&s?s(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},302:function(t,e,n){var s=n(127),i=n(303),r=n(305);t.exports=function(t){return s(t,r,i)}},303:function(t,e,n){var s=n(68),i=n(304),r=n(128),o=n(129),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)s(e,r(t)),t=i(t);return e}:o;t.exports=a},304:function(t,e,n){var s=n(132)(Object.getPrototypeOf,Object);t.exports=s},305:function(t,e,n){var s=n(130),i=n(306),r=n(71);t.exports=function(t){return r(t)?s(t,!0):i(t)}},306:function(t,e,n){var s=n(46),i=n(131),r=n(307),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!s(t))return r(t);var e=i(t),n=[];for(var a in t)("constructor"!=a||!e&&o.call(t,a))&&n.push(a);return n}},307:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},308:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return h}));n(47);var s={data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){n.e(2).then(n.t.bind(null,331,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(295),n(6)),r=Object(i.a)(s,(function(){var t=this._self._c;return this.comp?t(this.comp,{tag:"component",attrs:{value:this.page,"page-count":this.$pagination.length,"click-handler":this.clickCallback,"prev-text":this.$pagination.prevText,"next-text":this.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):this._e()}),[],!1,null,null,null).exports,o=(n(296),Object(i.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=n(48),c=n.n(a),l=n(297),u=n.n(l),p={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties(){return u()(this.$props,c.a)},commentProps(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},h=Object(i.a)(p,(function(){var t=this._self._c;return"vssue"===this.$service.comment.service?t("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?t("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},309:function(t,e,n){},310:function(t,e,n){},311:function(t,e,n){},317:function(t,e,n){"use strict";n(309)},318:function(t,e,n){"use strict";n(310)},319:function(t,e,n){"use strict";n(311)},332:function(t,e,n){"use strict";n.r(e);var s=n(119),i=n(294),r={props:["stick","tag"],data:()=>({needFloat:!1,stickBottom:0}),watch:{stick(){this.unStick(),this.stickHandle()}},mounted(){this.stickHandle()},beforeDestroy(){this.unStick()},methods:{stickHandle(){if(!this.stick)return;const t=Object(i.b)(this.stick,this);t&&(this._stickerScroll=()=>{const e=this.$el.getBoundingClientRect(),n=document.body.scrollTop+document.documentElement.scrollTop;this.needFloat=document.body.offsetHeight-n-e.height<t.offsetHeight,this.stickBottom=t.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))},unStick(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},o=(n(317),n(6));let a;function c(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var l={components:{Sticker:Object(o.a)(r,(function(){return(0,this._self._c)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null).exports},data:()=>({activeIndex:0}),computed:{visible(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex(){const t=(this.$refs.chairTocItem||[])[this.activeIndex];if(!t)return;const e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),s=e.top-n.top;s<20?this.$el.scrollTop=this.$el.scrollTop+s-20:s+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))},$route(){}},mounted(){const t=()=>{this.$emit("visible-change",this.visible)};t(),this.$watch("visible",t),setTimeout(()=>this.triggerEvt(),1e3),this._onScroll=()=>this.onScroll(),this._onHashChange=()=>{const t=decodeURIComponent(location.hash.substring(1)),e=(this.$page.headers||[]).findIndex(e=>e.slug===t);e>=0&&(this.activeIndex=e);const n=t&&document.getElementById(t);n&&window.scrollTo(0,c(n)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll(){void 0===a&&(a=c(this.$el));const t=document.body.scrollTop+document.documentElement.scrollTop,e=this.$page.headers||[];let n=0;const s=t=>{this.activeIndex=t};for(;n<e.length;n++){if(!(c(document.getElementById(e[n].slug))-50<t)){n||s(n);break}s(n)}},triggerEvt(){this._onScroll(),this._onHashChange()}}},u=(n(318),Object(o.a)(l,(function(){var t=this,e=t._self._c;return t.visible?e("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(n,s){return e("div",{key:s,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+n.level,{active:t.activeIndex===s}]},[e("a",{attrs:{href:"#"+n.slug,title:n.title}},[t._v(t._s(n.title))])])})),0):t._e()}),[],!1,null,null,null).exports),p=n(73),h=n.n(p),d={name:"PostTag",props:{tag:{type:String,required:!0}}},m=(n(319),{name:"PostMeta",components:{PostTag:Object(o.a)(d,(function(){return(0,this._self._c)("router-link",{staticClass:"blog-tag",attrs:{to:"/tag/"+this.tag}},[this._v(" "+this._s(this.tag)+" ")])}),[],!1,null,"4217f36d",null).exports},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate(){return h()(this.date).format(this.$themeConfig.dateFormat||"ddd, MMM DD YYYY")},resolvedTags(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}}),v={components:{Toc:u,PostMeta:Object(o.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-meta"},[t.author?e("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[e("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?e("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()]):t._e(),t._v(" "),t.date?e("div",{staticClass:"post-meta-date"},[e("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n      "+t._s(t.resolvedDate)+"\n    ")])]):t._e(),t._v(" "),t.tags?e("div",{staticClass:"post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return e("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null).exports,Avatar:Object(o.a)({},(function(){var t=this,e=t._self._c;return t.$themeConfig.authors?e("div",t._l(t.$themeConfig.authors,(function(n){return e("span",{key:n.name},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"profile-avatar"},[n.name===t.$frontmatter.author?e("img",{staticClass:"avatar-image",attrs:{src:t.$withBase(n.avatar),alt:n.name}}):t._e()]),t._v(" "),n.name===t.$frontmatter.author?e("div",[e("span",[t._v(t._s(n.name))]),t._v("  \n        "),n.name===t.$frontmatter.author?e("NavLink",{staticClass:"btn btn-sm btn-outline-dark",attrs:{link:n.link}},[t._v(t._s(n.linktext))]):t._e()],1):t._e()])])})),0):t._e()}),[],!1,null,null,null).exports,Comment:n(308).a,Newsletter:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,333))},mounted(){Object(s.a)(".vuepress-blog-theme-content :not(a) > img")}},f=Object(o.a)(v,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[e("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("header",[e("span",{staticClass:"text-muted"},[e("PostMeta",{attrs:{date:t.$frontmatter.date}})],1),t._v(" "),e("h1",{staticClass:"article-head mt-3",attrs:{itemprop:"name headline"}},[t._v("\n            "+t._s(t.$frontmatter.title)+"\n          ")]),t._v(" "),e("p",{staticClass:"lead"},[t._v(t._s(t.$frontmatter.description))]),t._v(" "),e("Avatar")],1)])]),t._v(" "),e("div",{staticClass:"row justify-content-center text-center mt-4 mb-40"},[e("div",{staticClass:"col-md-9"},[e("img",{staticClass:"featured-img",attrs:{src:t.$frontmatter.image}})])]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("Content",{attrs:{itemprop:"articleBody"}})],1)])]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-9"},[t.$service.email.enabled?e("Newsletter"):t._e(),t._v(" "),e("Comment")],1)]),t._v(" "),e("div",{staticClass:"row justify-content-center mt-40"},[e("div",{staticClass:"col-md-8"},[e("PostMeta",{attrs:{tags:t.$frontmatter.tags}})],1)]),t._v(" "),e("Toc")],1)}),[],!1,null,null,null);e.default=f.exports}}]);