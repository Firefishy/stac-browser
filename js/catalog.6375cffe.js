(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[701,152],{7152:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"catalog-card",class:{queued:!t.data,deprecated:t.data&&t.data.deprecated},attrs:{"no-body":"","img-right":t.isList}},[t.showThumbnail&&t.thumbnail&&t.thumbnailVisible?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia,right:t.isList}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.catalog]}})],1),t.data&&(t.data.description||t.data.deprecated)?a("b-card-text",{staticClass:"intro"},[t.data.deprecated?a("b-badge",{staticClass:"deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e(),t._v(" "+t._s(t._f("stripCommonmark")(t.data.description))+" ")],1):t._e(),t.temporalExtent?a("b-card-text",{staticClass:"datetime"},[a("span",{domProps:{innerHTML:t._s(t.temporalExtent)}})]):t._e()],1)],1)},i=[],r=a(629),n=a(1317),o=a(8909),l=a(6525),c=a.n(l),d=a(5834),p={name:"Catalog",components:{StacLink:n["default"]},filters:{stripCommonmark(t){return c()(t)}},props:{catalog:{type:Object,required:!0},showThumbnail:{type:Boolean,default:!0}},data(){return{thumbnailVisible:!1}},computed:{...(0,r.rn)(["crossOriginMedia","cardViewMode"]),...(0,r.Se)(["getStac"]),isList(){return"list"===this.cardViewMode},data(){return this.catalog instanceof o.Z?this.catalog:this.getStac(this.catalog.href)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return null},temporalExtent(){var t,e,a;if(null!==(t=this.data)&&void 0!==t&&t.isCollection()&&(null===(e=this.data.extent)||void 0===e||null===(a=e.temporal)||void 0===a?void 0:a.interval.length)>0){let t=this.data.extent.temporal.interval[0];if(Array.isArray(t)&&("string"===typeof t[0]||"string"===typeof t[1]))return d.Formatters.formatTemporalExtent(this.data.extent.temporal.interval[0],!0)}return null}},methods:{load(t){t&&(this.thumbnailVisible=!0),this.catalog instanceof o.Z||this.$store.commit(t?"queue":"unqueue",this.catalog.href)}}},m=p,h=a(1001),u=(0,h.Z)(m,s,i,!1,null,null,null),g=u.exports},6589:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return m}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!t.data,deprecated:t.isDeprecated},attrs:{"no-body":""}},[t.thumbnail&&t.showThumbnail?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),a("b-card-text",[a("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("TemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("Timestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0||t.isDeprecated?a("b-card-text",[t._l(t.fileFormats,(function(e){return a("b-badge",{key:e,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("MediaType")(e)))])})),t.isDeprecated?a("b-badge",{staticClass:"mr-1 mt-1 deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e()],2):t._e()],1)],1)},i=[],r=(a(6699),a(629)),n=a(1317),o=a(8909),l={name:"Item",components:{StacLink:n["default"]},props:{item:{type:Object,required:!0}},data(){return{showThumbnail:!1}},computed:{...(0,r.rn)(["crossOriginMedia"]),...(0,r.Se)(["getStac"]),data(){return this.item instanceof o.Z?this.item:this.getStac(this.item.href)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},extent(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats(){return this.data?Object.values(this.data.assets).filter((t=>Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type)).map((t=>t.type)).filter(((t,e,a)=>a.indexOf(t)===e)):[]},isDeprecated(){return this.data instanceof o.Z&&Boolean(this.data.properties.deprecated)}},methods:{load(t){t&&(this.showThumbnail=!0),this.item instanceof o.Z||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},c=l,d=a(1001),p=(0,d.Z)(c,s,i,!1,null,null,null),m=p.exports},2233:function(t,e,a){"use strict";a.d(e,{Z:function(){return w}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"items mb-4"},[a("h2",[a("span",{staticClass:"title"},[t._v("Items")]),t.api?t._e():a("b-badge",{attrs:{pill:"",variant:"secondary ml-2"}},[t._v(t._s(t.items.length))]),t.api?t._e():a("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t.showPagination?a("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2",class:{"ml-3":t.showPagination},attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[a("b-icon-search"),t._v(" Filter ")],1):t._e(),a("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[t.filtersOpen?a("ItemFilter",t._b({attrs:{stac:t.stac,value:t.filters,collectionOnly:!0},on:{input:t.emitFilter}},"ItemFilter",t.filterComponentProps,!1)):t._e()],1)]:t._e(),t.chunkedItems.length>0?a("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(t){return a("Item",{key:t.href,attrs:{item:t}})})),1):a("b-alert",{attrs:{variant:t.hasFilters?"warning":"info",show:""}},[t.hasFilters?[t._v("No items found for the given filters.")]:[t._v("No items available for this collection.")]],2),t.showPagination?a("Pagination",{attrs:{pagination:t.pagination},on:{paginate:t.paginate}}):t.hasMore?a("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},i=[],r=a(6589),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{class:t.classes},[a("b-button",{attrs:{disabled:!t.pagination.first,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),a("b-button",{attrs:{disabled:!t.pagination.prev,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),a("b-button",{attrs:{disabled:!t.pagination.next,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},o=[],l={name:"Pagination",props:{pagination:{type:Object,default:()=>({})},placement:{type:String,default:"bottom"}},computed:{classes(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate(t){this.$emit("paginate",t,this.placement)}}},c=l,d=a(1001),p=(0,d.Z)(c,n,o,!1,null,null,null),m=p.exports,h=a(1688),u=a(8019),g=a(7637),b=a(8909),f=a(753),v={name:"Items",components:{BCollapse:h.k,BIconSearch:u.Lln,Item:r["default"],ItemFilter:()=>Promise.all([a.e(85),a.e(981),a.e(92),a.e(175)]).then(a.bind(a,9092)),Pagination:m,SortButtons:()=>a.e(703).then(a.bind(a,4703))},mixins:[(0,f.ZP)(!0)],props:{items:{type:Array,required:!0},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:()=>({})},pagination:{type:Object,default:()=>({})},chunkSize:{type:Number,default:90}},data(){return{shownItems:this.chunkSize,filters:this.apiFilters,filtersOpen:!1,sort:0}},computed:{hasMore(){return this.items.length>this.shownItems},hasFilters(){return Object.values(this.apiFilters).filter((t=>!(null===t||0===g.ZP.size(t)))).length>1},chunkedItems(){let t=this.items;return 0!==this.sort&&(t=t.slice(0).sort(((t,e)=>b.Z.getDisplayTitle(t).localeCompare(b.Z.getDisplayTitle(e)))),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},showPagination(){if(this.api){if(this.hasFilters)return!0;if(this.items.length>0)return Object.values(this.pagination).some((t=>!!t))}return!1}},methods:{emitFilter(t,e){this.$emit("filterItems",t,e)},showMore(){this.shownItems+=this.chunkSize},paginate(t,e){"bottom"===e&&this.$refs.topPagination&&g.ZP.scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},_=v,C=(0,d.Z)(_,s,i,!1,null,"61dd1ac8",null),w=C.exports},5698:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return E}});var s=function(){var t,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{class:(t={cc:!0},t[e.data.type.toLowerCase()]=!0,t.mixed=e.hasCatalogs&&e.hasItems,t.empty=!e.hasCatalogs&&!e.hasItems,t)},[s("b-row",[s("b-col",{staticClass:"meta"},[s("section",{staticClass:"intro"},[s("h2",[e._v("Description")]),e.data.deprecated?s("DeprecationNotice",{attrs:{data:e.data}}):e._e(),e.data["anon:warning"]?s("AnonymizedNotice",{attrs:{warning:e.data["anon:warning"]}}):e._e(),e.data.description?s("ReadMore",{attrs:{lines:10}},[s("Description",{attrs:{description:e.data.description}})],1):e._e(),Array.isArray(e.data.keywords)&&e.data.keywords.length>0?s("Keywords",{attrs:{keywords:e.data.keywords}}):e._e(),e.isCollection?s("section",{staticClass:"metadata mb-4"},[e.licenses?s("b-row",[s("b-col",{staticClass:"label",attrs:{md:"4"}},[e._v("License")]),s("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:e._s(e.licenses)}})],1):e._e(),e.temporalExtents?s("b-row",[s("b-col",{staticClass:"label",attrs:{md:"4"}},[e._v("Temporal Extents")]),s("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:e._s(e.temporalExtents)}})],1):e._e()],1):e._e()],1),e.isCollection||e.thumbnails.length>0?s("section",{staticClass:"mb-4"},[s("b-card",{staticClass:"maps-preview",attrs:{"no-body":""}},[s("b-tabs",{ref:"tabs",attrs:{pills:"",card:"",vertical:"",end:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.isCollection?s("b-tab",{attrs:{title:"Map","no-body":""}},[s("Map",{attrs:{stac:e.data,stacLayerData:e.selectedAsset},on:{mapClicked:e.mapClicked,mapChanged:e.mapChanged}})],1):e._e(),e.thumbnails.length>0?s("b-tab",{attrs:{title:"Preview","no-body":""}},[s("Thumbnails",{attrs:{thumbnails:e.thumbnails}})],1):e._e()],1)],1)],1):e._e(),e.hasAssets?s("Assets",{attrs:{assets:e.assets,context:e.data,shown:e.shownAssets},on:{showAsset:e.showAsset}}):e._e(),e.hasItemAssets&&!e.hasItems?s("Assets",{attrs:{assets:e.data.item_assets,definition:!0}}):e._e(),e.hasProviders?s("Providers",{attrs:{providers:e.data.providers}}):e._e(),s("Metadata",{staticClass:"mb-4",attrs:{title:"Metadata",type:e.data.type,data:e.data,ignoreFields:e.ignoredMetadataFields}}),e.additionalLinks.length>0?s("Links",{attrs:{title:"Additional resources",links:e.additionalLinks}}):e._e()],1),e.hasCatalogs?s("b-col",{staticClass:"catalogs-container"},[s("Catalogs",{attrs:{catalogs:e.catalogs,hasMore:e.hasMoreCollections},on:{loadMore:e.loadMoreCollections}})],1):e._e(),e.hasItems?s("b-col",{staticClass:"items-container"},[s("Items",{attrs:{stac:e.data,items:e.items,api:e.isApi,apiFilters:e.apiItemsFilter,pagination:e.itemPages},on:{paginate:e.paginateItems,filterItems:e.filterItems}}),e.hasItemAssets?s("Assets",{attrs:{assets:e.data.item_assets,definition:!0}}):e._e()],1):e._e()],1)],1)},i=[],r=a(629),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"catalogs mb-4"},[a("h2",[a("span",{staticClass:"title"},[t._v("Catalogs")]),t.hasMore?t._e():a("b-badge",{attrs:{pill:"",variant:"secondary ml-2"}},[t._v(t._s(t.catalogs.length))]),a("ViewButtons",{staticClass:"ml-4",model:{value:t.view,callback:function(e){t.view=e},expression:"view"}}),t.hasMore?t._e():a("SortButtons",{staticClass:"ml-2",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),a(t.cardsComponent,t._b({tag:"component"},"component",t.cardsComponentProps,!1),t._l(t.sortedCatalogs,(function(t){return a("Catalog",{key:t.href,attrs:{catalog:t}})})),1),t.hasMore?a("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.loadMore,expression:"loadMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.loadMore}},[t._v("Load more...")]):t._e()],1)},o=[],l=a(7152),c=a(8909),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{attrs:{title:"Sort",size:"sm"}},[a("b-button",{attrs:{title:"Show as tiles",variant:"outline-primary",pressed:"cards"===t.value},on:{click:function(e){return t.toggle("cards")}}},[a("b-icon-bricks"),t._v(" "),a("span",{staticClass:"button-label"},[t._v("Tiles")])],1),a("b-button",{attrs:{title:"Show as list",variant:"outline-primary",pressed:"list"===t.value},on:{click:function(e){return t.toggle("list")}}},[a("b-icon-list-task"),t._v(" "),a("span",{staticClass:"button-label"},[t._v("List")])],1)],1)},p=[],m=a(8019),h={id:"SortButtons",components:{BIconBricks:m.S3S,BIconListTask:m.WPR},props:{value:{type:String,default:"cards"}},methods:{toggle(t){this.value!==t&&this.$emit("input",t)}}},u=h,g=a(1001),b=(0,g.Z)(u,d,p,!1,null,null,null),f=b.exports,v={components:{ViewButtons:f},computed:{cardsComponent(){return"list"===this.view?"div":"b-card-group"},cardsComponentProps(){return"list"===this.view?{class:["card-list"]}:{columns:!0}},view:{get(){return this.$store.state.cardViewMode},set(t){this.$store.commit("config",{cardViewMode:t})}}}},_={name:"Catalogs",components:{Catalog:l["default"],SortButtons:()=>a.e(703).then(a.bind(a,4703))},mixins:[v],props:{catalogs:{type:Array,required:!0},hasMore:{type:Boolean,default:!1}},data(){return{sort:0}},computed:{sortedCatalogs(){let t=this.catalogs;return this.hasMore||0===this.sort||(t=t.slice(0).sort(((t,e)=>c.Z.getDisplayTitle(t).localeCompare(c.Z.getDisplayTitle(e)))),-1===this.sort&&(t=t.reverse())),t}},methods:{loadMore(t=!0){t&&this.$emit("loadMore")}}},C=_,w=(0,g.Z)(C,n,o,!1,null,"11d0c28a",null),y=w.exports,k=a(5973),x=a(2233),I=a(6129),M=a(7805),$=a(8907),S=a.n($),L=a(81),P=a(5834),F=a(2996),A=a(1015),T=a(7637);const Z="Sorry, can't load the list of items.";var O={name:"Catalog",components:{AnonymizedNotice:()=>a.e(467).then(a.bind(a,467)),Assets:()=>a.e(988).then(a.bind(a,9988)),BTabs:F.M,BTab:A.L,Catalogs:y,DeprecationNotice:()=>a.e(196).then(a.bind(a,3196)),Description:k.Z,Items:x.Z,Keywords:()=>a.e(155).then(a.bind(a,6155)),Links:I.Z,Map:()=>a.e(992).then(a.bind(a,2992)),Metadata:M.Z,Providers:()=>a.e(867).then(a.bind(a,9867)),ReadMore:S(),Thumbnails:()=>a.e(400).then(a.bind(a,3400))},mixins:[L.Z],data(){return{ignoredMetadataFields:["stac_version","stac_extensions","id","type","title","description","keywords","providers","license","extent","summaries","links","assets","item_assets","proj:bbox","proj:geometry","conformsTo","deprecated","anon:warning"]}},computed:{...(0,r.rn)(["data","url","apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter"]),...(0,r.Se)(["additionalLinks","catalogs","isCollection","items","hasMoreCollections"]),licenses(){return this.isCollection&&this.data.license?P.Formatters.formatLicense(this.data.license,null,null,this.data):null},hasProviders(){return this.isCollection&&Array.isArray(this.data.providers)&&this.data.providers.length>0},temporalExtents(){if(this.data&&this.data.isCollection()&&this.data.extent.temporal.interval.length>0){let t=this.data.extent.temporal.interval;return t.length>1&&(t=t.slice(1)),P.Formatters.formatTemporalExtents(t)}return null},hasItemAssets(){var t;return T.ZP.size(null===(t=this.data)||void 0===t?void 0:t.item_assets)>0},itemPages(){let t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&"items"!==this.apiItemsLink.rel&&(t.first=T.ZP.addFiltersToLink(this.data.getApiItemsLink(),this.apiItemsFilter)),t},isApi(){return Boolean(this.apiItemsLink)},hasItems(){return this.items.length>0||this.isApi},hasCatalogs(){return this.catalogs.length>0}},methods:{loadMoreCollections(){this.$store.dispatch("loadNextApiCollections",{show:!0})},async paginateItems(t){try{await this.$store.dispatch("loadApiItems",{link:t,show:!0})}catch(e){this.$root.$emit("error",e,Z)}},async filterItems(t,e){e&&this.$store.commit("resetApiItems");try{await this.$store.dispatch("loadApiItems",{link:this.apiItemsLink,show:!0,filters:t})}catch(a){this.$root.$emit("error",a,e?Z:"Sorry, can't load the filtered list of items.")}},mapClicked(){}}},q=O,B=(0,g.Z)(q,s,i,!1,null,null,null),E=B.exports},6525:function(t,e,a){var s=a(5108);t.exports=function(t,e){e=e||{},e.listUnicodeChar=!!e.hasOwnProperty("listUnicodeChar")&&e.listUnicodeChar,e.stripListLeaders=!e.hasOwnProperty("stripListLeaders")||e.stripListLeaders,e.gfm=!e.hasOwnProperty("gfm")||e.gfm,e.useImgAltText=!e.hasOwnProperty("useImgAltText")||e.useImgAltText;var a=t||"";a=a.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{e.stripListLeaders&&(a=e.listUnicodeChar?a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(a=a.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),a=a.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(i){return s.error(i),t}return a}},753:function(t,e,a){"use strict";a(6699);var s=a(629);const i="http://www.opengis.net/spec/ogcapi-features-1/1.*/conf/core",r="http://www.opengis.net/spec/cql2/1.*/conf/cql2-text",n="http://www.opengis.net/spec/cql2/1.*/conf/cql2-json",o="https://api.stacspec.org/v1.*/item-search#sort",l="https://api.stacspec.org/v1.*/ogcapi-features#sort",c="https://api.stacspec.org/v1.*/item-search#filter*",d="http://www.opengis.net/spec/ogcapi-features-3/1.*/*/features-filter";e["ZP"]=t=>({computed:{...(0,s.Se)(["supportsConformance"]),canSort(){return this.supportsConformance(t?l:o)},canFilterExtents(){return!t||this.supportsConformance(i)},canFilterCql(){return this.supportsConformance(t?d:c)&&this.cqlModes.includes("Text")},cqlModes(){let t=[];return this.supportsConformance(r)&&t.push("Text"),this.supportsConformance(n)&&t.push("JSON"),t},filterComponentProps(){return{canSort:this.canSort,canFilterCql:this.canFilterCql,canFilterExtents:this.canFilterExtents}}}})}}]);
//# sourceMappingURL=catalog.6375cffe.js.map