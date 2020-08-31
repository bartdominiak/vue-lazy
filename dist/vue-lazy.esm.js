import"intersection-observer";import"core-js/modules/es.array.concat";import"core-js/modules/es.array.includes";function t(t,e,n,i,s,r,o,d,a,c){"boolean"!=typeof o&&(a=d,d=o,o=!1);const u="function"==typeof n?n.options:n;let l;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,s&&(u.functional=!0)),i&&(u._scopeId=i),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,a(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):e&&(l=o?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,d(t))}),l)if(u.functional){const t=u.render;u.render=function(e,n){return l.call(n),t(e,n)}}else{const t=u.beforeCreate;u.beforeCreate=t?[].concat(t,l):[l]}return n}const e=t({},undefined,{props:{src:{required:!0,type:String},width:{type:String,default:function(){return null}},height:{type:String,default:function(){return null}},alt:{type:String,default:function(){return null}},srcset:{type:String,default:function(){return null}},intersectionConfig:{type:Object,default:function(){return{threshold:[0,1]}}},tag:{type:String,default:function(){return"img"},validator:function(t){return["img","picture"].includes(t)}}},data:function(){return{isLoaded:!1}},computed:{getSrc:function(){return this.isLoaded?this.src:this.placeholder},getSrcset:function(){return this.isLoaded?this.srcset:null},getClass:function(){return["lazyload",{lazyloaded:this.isLoaded}]},placeholder:function(){return this.width&&this.height?"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ".concat(this.width," ").concat(this.height,"'%3E%3C/svg%3E"):"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}},mounted:function(){var t=this,e=new IntersectionObserver((function(n){n[0]&&n[0].isIntersecting&&(t.onLoad(),e.disconnect())}),this.intersectionConfig);e.observe(this.$el)},methods:{onLoad:function(){this.isLoaded=!0,this.$emit("loaded",!0)}},render:function(t){var e=t("img",{attrs:{src:this.getSrc,srcset:this.getSrcset,width:this.width,height:this.height,alt:this.alt},domProps:this.$attrs,class:this.getClass});return"picture"===this.tag?t("picture",this.isLoaded?[this.$slots.default,e]:e):e}},undefined,undefined,undefined,!1,void 0,void 0,void 0);var n={install:function(t){t.component("lazy-image",e)}};export default n;export{e as LazyImage};
