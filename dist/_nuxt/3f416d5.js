(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4,5,6,7],{361:function(t,e,r){t.exports=r.p+"img/img-03.5f821a5.jpg"},362:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{heroSliders:[]}},apollo:{heroSliders:{prefetch:!0,query:r(122).e}}},o=r(64),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"default-slider",attrs:{id:"home"}},[t.heroSliders.length>0?r("carousel",{attrs:{items:1,dots:!1,autoplay:!0,responsive:{0:{nav:!1,dots:!0},992:{nav:!0,dots:!1}}}},t._l(t.heroSliders,(function(e){return r("div",{key:e.id,staticClass:"slide"},[r("b-img",{attrs:{src:e.slideImage.url,alt:e.slideImageAlt}}),t._v(" "),r("div",{staticClass:"main-wrap"},[r("div",{staticClass:"text-wrap"},[r("h2",[t._v(t._s(e.slideTitle))]),t._v(" "),r("p",[t._v(t._s(e.slideCaption.text))]),t._v(" "),r("p",[r("a",{staticClass:"btn btn-primary",attrs:{href:"/#services"}},[r("span",[t._v("Read more")]),t._v(" "),r("svg",{attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"64px",height:"64px",viewBox:"0 0 64 64","enable-background":"new 0 0 64 64","xml:space":"preserve"}},[r("g",[r("line",{attrs:{fill:"none",stroke:"#ffffff","stroke-width":"1","stroke-miterlimit":"10",x1:"50",y1:"32",x2:"1",y2:"32"}})]),t._v(" "),r("polyline",{attrs:{fill:"none",stroke:"#ffffff","stroke-width":"1","stroke-linejoin":"bevel","stroke-miterlimit":"10",points:"10,23 1,32 10,41 "}})])])])])])],1)})),0):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{aboutSections:[]}},apollo:{aboutSections:{prefetch:!0,query:r(122).a}}},o=r(64),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"about"}},[r("b-container",t._l(t.aboutSections,(function(e){return r("b-row",{key:e.id,staticClass:"bg-light",attrs:{id:"about"}},[r("b-col",{staticClass:"left-col",attrs:{lg:"6"}},[r("b-img",{attrs:{fluid:"",src:e.aboutHeroImage.url,alt:e.aboutHeroImageAlt}})],1),t._v(" "),r("b-col",{staticClass:"right-col flex-centered",attrs:{lg:"6"}},[r("div",{staticClass:"title-wrap left--line"},[r("h2",[t._v(t._s(e.aboutTitle))])]),t._v(" "),r("div",{staticClass:"content-padded font-bigger-lighter"},[r("p",[t._v("\n                        "+t._s(e.aboutExcerpt.text)+"\n                    ")])])])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,r){"use strict";r.r(e);var l=r(122),o={data:function(){return{portfolioSections:[],portfolioItems:[]}},apollo:{portfolioSections:{prefetch:!0,query:l.h},portfolioItems:{prefetch:!0,query:l.g}}},n=r(64),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"default-slider",attrs:{id:"portfolio"}},[t._l(t.portfolioSections,(function(e){return r("div",{key:e.id},[r("div",{staticClass:"title-wrap center--line"},[r("h2",[t._v(" "+t._s(e.portfolioTitle))])]),t._v(" "),r("div",{staticClass:"text-center w-50 m-auto mb-3 font-bigger-lighter"},[r("p",[t._v("\n                "+t._s(e.portfolioExcerpt.text)+"\n            ")])])])})),t._v(" "),t.portfolioItems.length>0?r("carousel",{attrs:{items:2,center:!0,loop:!0,margin:10,nav:!0,dots:!1,autoplay:!0,responsive:{0:{nav:!1,dots:!0,center:!1,items:1},992:{nav:!0,dots:!1}}}},t._l(t.portfolioItems,(function(e){return r("div",{key:e.id,staticClass:"slide mb-5"},[r("img",{attrs:{src:e.portfolioItemImage.url}}),t._v(" "),r("div",{staticClass:"main-wrap"},[r("div",{staticClass:"text-wrap"},[r("h3",[t._v(t._s(e.portfolioItemTitle))]),t._v(" "),r("p",[t._v(t._s(e.portfolioItemCaption.text))]),t._v(" "),r("p",[r("a",{attrs:{href:e.portfolioItemLink,target:"_blank"}},[t._v("Visit Website")])])])])])})),0):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{servicesSections:[]}},apollo:{servicesSections:{prefetch:!0,query:r(122).i}}},o=r(64),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"services"}},[r("b-container",[r("div",{staticClass:"title-wrap center--line"},[r("h2",[t._v("our services")])]),t._v(" "),r("div",{staticClass:"text-center w-50 m-auto mb-5 font-bigger-lighter"},[r("p",[t._v("\n                Amazing services we offer our clients.\n            ")])]),t._v(" "),r("b-row",t._l(t.servicesSections,(function(e){return r("b-col",{key:e.id,attrs:{lg:"4"}},[r("div",{staticClass:"content-wrap"},[r("div",{staticClass:"icon-box"},[r("span",{class:e.serviceIconClass})]),t._v(" "),r("h4",[t._v(t._s(e.serviceTitle))]),t._v(" "),r("p",[t._v(t._s(e.serviceExcerpt.text))])])])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,r){"use strict";r.r(e);var l=r(122),o={data:function(){return{contactSections:[],contactObjects:[]}},apollo:{contactSections:{prefetch:!0,query:l.d},contactObjects:{prefetch:!0,query:l.c}}},n=r(64),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},t._l(t.contactSections,(function(e){return r("b-row",{key:e.id,staticClass:"bg-light",attrs:{id:"contact"}},[r("b-col",{staticClass:"left-col flex-centered",attrs:{lg:"6"}},[r("div",{staticClass:"content-padding font-bigger-lighter"},[r("div",{staticClass:"title-wrap left--line"},[r("h2",[t._v(t._s(e.contactTitle))])]),t._v(" "),r("p",[t._v("\n                    "+t._s(e.contactExcerpt.text)+"\n                ")]),t._v(" "),r("ul",t._l(t.contactObjects,(function(e){return r("li",{key:e.id},[r("span",{class:e.contactObjecIcon}),t._v(" "),r("a",{attrs:{href:e.contactObjecUrl,target:"_blank"}},[t._v(t._s(e.contactObjecText))])])})),0)])]),t._v(" "),r("b-col",{staticClass:"right-col",attrs:{lg:"6"}},[r("figure",{staticClass:"figure position-relative img-padding-relative p-0"},[r("div",{staticClass:"overlay"}),t._v(" "),r("b-img",{staticClass:"w-100 h-100",attrs:{fluid:"",src:e.contactImageBanner.url,alt:e.contactImageBannerAlt}})],1)])],1)})),1)}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{footer_bg_url:r(361),footer_block_title:"About US",footer_block_text:"Jooti Digital is a fast rising digital agency that seeks to set the trend in creation of products for web and mobile technologies that impact businesses across the private and public space. We don't just create designs for the sake of it. We believe in products that leave a lasting impression and indellible marks in the hearts of our clients",footer_blocks:{blocks:[{name:"Services",items:[{url:"#",text:"ERP Integration"},{url:"#",text:"Web Development"},{url:"#",text:"Mobile App Development"},{url:"#",text:"Usability Research & Audit"},{url:"#",text:"Social Media Management"},{url:"#",text:"Off/Online SEO"}]},{name:"Quick Links",items:[{url:"#",text:"Home"},{url:"#",text:"About Us"},{url:"#",text:"Services"},{url:"#",text:"Portfolio"}]},{name:"Find Us",items:[{url:"#",text:"Facebook"},{url:"#",text:"Twitter"},{url:"#",text:"LinkedIn"},{url:"#",text:"Github"}]}]}}}},o=r(64),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"footer"}},[r("div",{staticClass:"overlay type--two"}),t._v(" "),r("b-img",{staticClass:"w-100",attrs:{src:t.footer_bg_url,alt:"Jooti Digital"}}),t._v(" "),r("b-container",[r("b-row",[r("b-col",{attrs:{md:"6",lg:"3"}},[r("h3",[t._v(t._s(t.footer_block_title))]),t._v(" "),r("div",{staticClass:"text-wrap"},[r("p",[t._v(t._s(t.footer_block_text))])])]),t._v(" "),t._l(t.footer_blocks.blocks,(function(e){return r("b-col",{key:e.id,attrs:{md:"6",lg:"3"}},[r("h3",[t._v(t._s(e.name))]),t._v(" "),t._l(e.items,(function(e){return r("ul",{key:e.id},[r("li",[r("a",{attrs:{href:e.url}},[t._v(t._s(e.text))])])])}))],2)}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,r){"use strict";r.r(e);var l=r(64),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[r("HeroSlider"),t._v(" "),r("About"),t._v(" "),r("Portfolio"),t._v(" "),r("Services"),t._v(" "),r("Contact"),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroSlider:r(362).default,About:r(363).default,Portfolio:r(364).default,Services:r(365).default,Contact:r(366).default,Footer:r(367).default})}}]);