(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"+jnZ":function(e,t,n){"use strict";n.d(t,"a",function(){return x}),n.d(t,"b",function(){return M}),n.d(t,"c",function(){return T});var i=n("fXoL"),a=n("ofXK"),o=n("EA8a"),s=n("FmH6"),l=n("ByAP"),c=n("/5fT"),b=n("kGCj"),r=n("4t6f");function d(e,t){1&e&&i.Mb(0)}function h(e,t){if(1&e&&(i.Ob(0),i.Cc(1,d,1,0,"ng-container",3),i.Nb()),2&e){const e=i.cc(2);i.xb(1),i.ic("ngTemplateOutlet",e.contentTemplate)}}function p(e,t){if(1&e&&(i.Qb(0,"div",1),i.gc(1),i.Cc(2,h,2,1,"ng-container",2),i.Pb()),2&e){const e=i.cc();i.ic("hidden",!e.selected),i.yb("id",e.id)("aria-hidden",!e.selected)("aria-labelledby",e.id+"-label"),i.xb(2),i.ic("ngIf",e.contentTemplate&&(e.cache?e.loaded:e.selected))}}const u=["*"],g=["navbar"],m=["inkbar"];function v(e,t){if(1&e&&i.Lb(0,"span",16),2&e){const e=i.cc(3).$implicit;i.ic("ngClass",e.leftIcon)}}function f(e,t){if(1&e&&i.Lb(0,"span",17),2&e){const e=i.cc(3).$implicit;i.ic("ngClass",e.rightIcon)}}function P(e,t){if(1&e&&(i.Ob(0),i.Cc(1,v,1,1,"span",13),i.Qb(2,"span",14),i.Ec(3),i.Pb(),i.Cc(4,f,1,1,"span",15),i.Nb()),2&e){const e=i.cc(2).$implicit;i.xb(1),i.ic("ngIf",e.leftIcon),i.xb(2),i.Fc(e.header),i.xb(1),i.ic("ngIf",e.rightIcon)}}function Q(e,t){1&e&&i.Mb(0)}function C(e,t){if(1&e){const e=i.Sb();i.Qb(0,"span",18),i.Yb("click",function(t){i.vc(e);const n=i.cc(2).$implicit;return i.cc().close(t,n)}),i.Pb()}}const E=function(e,t){return{"p-highlight":e,"p-disabled":t}};function w(e,t){if(1&e){const e=i.Sb();i.Qb(0,"li",8),i.Qb(1,"a",9),i.Yb("click",function(t){i.vc(e);const n=i.cc().$implicit;return i.cc().open(t,n)})("keydown.enter",function(t){i.vc(e);const n=i.cc().$implicit;return i.cc().open(t,n)}),i.Cc(2,P,5,3,"ng-container",10),i.Cc(3,Q,1,0,"ng-container",11),i.Cc(4,C,1,0,"span",12),i.Pb(),i.Pb()}if(2&e){const e=i.cc().$implicit;i.zb(e.headerStyleClass),i.ic("ngClass",i.mc(16,E,e.selected,e.disabled))("ngStyle",e.headerStyle),i.xb(1),i.ic("pTooltip",e.tooltip)("tooltipPosition",e.tooltipPosition)("positionStyle",e.tooltipPositionStyle)("tooltipStyleClass",e.tooltipStyleClass),i.yb("id",e.id+"-label")("aria-selected",e.selected)("aria-controls",e.id)("aria-selected",e.selected)("tabindex",e.disabled?null:"0"),i.xb(1),i.ic("ngIf",!e.headerTemplate),i.xb(1),i.ic("ngTemplateOutlet",e.headerTemplate),i.xb(1),i.ic("ngIf",e.closable)}}function k(e,t){1&e&&i.Cc(0,w,5,19,"li",7),2&e&&i.ic("ngIf",!t.$implicit.closed)}let y=0,x=(()=>{class e{constructor(e,t,n){this.viewContainer=t,this.cd=n,this.cache=!0,this.tooltipPosition="top",this.tooltipPositionStyle="absolute",this.id="p-tabpanel-"+y++,this.tabView=e}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break;case"content":default:this.contentTemplate=e.template}})}get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||this.cd.detectChanges(),e&&(this.loaded=!0)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.tabView.cd.markForCheck()}get header(){return this._header}set header(e){this._header=e,this.tabView.cd.markForCheck()}get leftIcon(){return this._leftIcon}set leftIcon(e){this._leftIcon=e,this.tabView.cd.markForCheck()}get rightIcon(){return this._rightIcon}set rightIcon(e){this._rightIcon=e,this.tabView.cd.markForCheck()}ngOnDestroy(){this.view=null}}return e.\u0275fac=function(t){return new(t||e)(i.Jb(Object(i.S)(()=>M)),i.Jb(i.O),i.Jb(i.h))},e.\u0275cmp=i.Db({type:e,selectors:[["p-tabPanel"]],contentQueries:function(e,t,n){if(1&e&&i.Cb(n,l.l,!1),2&e){let e;i.tc(e=i.Zb())&&(t.templates=e)}},inputs:{closable:"closable",headerStyle:"headerStyle",headerStyleClass:"headerStyleClass",cache:"cache",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",selected:"selected",disabled:"disabled",header:"header",leftIcon:"leftIcon",rightIcon:"rightIcon"},ngContentSelectors:u,decls:1,vars:1,consts:[["class","p-tabview-panel","role","tabpanel",3,"hidden",4,"ngIf"],["role","tabpanel",1,"p-tabview-panel",3,"hidden"],[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(e,t){1&e&&(i.hc(),i.Cc(0,p,3,5,"div",0)),2&e&&i.ic("ngIf",!t.closed)},directives:[a.l,a.p],encapsulation:2}),e})(),M=(()=>{class e{constructor(e,t){this.el=e,this.cd=t,this.orientation="top",this.onChange=new i.n,this.onClose=new i.n,this.activeIndexChange=new i.n}ngAfterContentInit(){this.initTabs(),this.tabPanels.changes.subscribe(e=>{this.initTabs()})}ngAfterViewChecked(){this.tabChanged&&(this.updateInkBar(),this.tabChanged=!1)}initTabs(){this.tabs=this.tabPanels.toArray(),!this.findSelectedTab()&&this.tabs.length&&(null!=this.activeIndex&&this.tabs.length>this.activeIndex?this.tabs[this.activeIndex].selected=!0:this.tabs[0].selected=!0,this.tabChanged=!0),this.cd.markForCheck()}open(e,t){if(t.disabled)e&&e.preventDefault();else{if(!t.selected){let n=this.findSelectedTab();n&&(n.selected=!1),this.tabChanged=!0,t.selected=!0;let i=this.findTabIndex(t);this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(i),this.onChange.emit({originalEvent:e,index:i})}e&&e.preventDefault()}}close(e,t){this.controlClose?this.onClose.emit({originalEvent:e,index:this.findTabIndex(t),close:()=>{this.closeTab(t)}}):(this.closeTab(t),this.onClose.emit({originalEvent:e,index:this.findTabIndex(t)})),e.stopPropagation()}closeTab(e){if(!e.disabled){if(e.selected){this.tabChanged=!0,e.selected=!1;for(let t=0;t<this.tabs.length;t++){let n=this.tabs[t];if(!n.closed&&!e.disabled){n.selected=!0;break}}}e.closed=!0}}findSelectedTab(){for(let e=0;e<this.tabs.length;e++)if(this.tabs[e].selected)return this.tabs[e];return null}findTabIndex(e){let t=-1;for(let n=0;n<this.tabs.length;n++)if(this.tabs[n]==e){t=n;break}return t}getBlockableElement(){return this.el.nativeElement.children[0]}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.tabs&&this.tabs.length&&null!=this._activeIndex&&this.tabs.length>this._activeIndex&&(this.findSelectedTab().selected=!1,this.tabs[this._activeIndex].selected=!0,this.tabChanged=!0)}updateInkBar(){let e=c.b.findSingle(this.navbar.nativeElement,"li.p-highlight");this.inkbar.nativeElement.style.width=c.b.getWidth(e)+"px",this.inkbar.nativeElement.style.left=c.b.getOffset(e).left-c.b.getOffset(this.navbar.nativeElement).left+"px"}}return e.\u0275fac=function(t){return new(t||e)(i.Jb(i.l),i.Jb(i.h))},e.\u0275cmp=i.Db({type:e,selectors:[["p-tabView"]],contentQueries:function(e,t,n){if(1&e&&i.Cb(n,x,!1),2&e){let e;i.tc(e=i.Zb())&&(t.tabPanels=e)}},viewQuery:function(e,t){if(1&e&&(i.Jc(g,!0),i.Jc(m,!0)),2&e){let e;i.tc(e=i.Zb())&&(t.navbar=e.first),i.tc(e=i.Zb())&&(t.inkbar=e.first)}},inputs:{orientation:"orientation",style:"style",styleClass:"styleClass",controlClose:"controlClose",activeIndex:"activeIndex"},outputs:{onChange:"onChange",onClose:"onClose",activeIndexChange:"activeIndexChange"},ngContentSelectors:u,decls:8,vars:5,consts:[[3,"ngClass","ngStyle"],["role","tablist",1,"p-tabview-nav"],["navbar",""],["ngFor","",3,"ngForOf"],[1,"p-tabview-ink-bar"],["inkbar",""],[1,"p-tabview-panels"],["role","presentation",3,"ngClass","ngStyle","class",4,"ngIf"],["role","presentation",3,"ngClass","ngStyle"],["role","tab","pRipple","",1,"p-tabview-nav-link",3,"pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","click","keydown.enter"],[4,"ngIf"],[4,"ngTemplateOutlet"],["class","p-tabview-close pi pi-times",3,"click",4,"ngIf"],["class","p-tabview-left-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-title"],["class","p-tabview-right-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-left-icon",3,"ngClass"],[1,"p-tabview-right-icon",3,"ngClass"],[1,"p-tabview-close","pi","pi-times",3,"click"]],template:function(e,t){1&e&&(i.hc(),i.Qb(0,"div",0),i.Qb(1,"ul",1,2),i.Cc(3,k,1,1,"ng-template",3),i.Lb(4,"li",4,5),i.Pb(),i.Qb(6,"div",6),i.gc(7),i.Pb(),i.Pb()),2&e&&(i.zb(t.styleClass),i.ic("ngClass","p-tabview p-component")("ngStyle",t.style),i.xb(3),i.ic("ngForOf",t.tabs))},directives:[a.j,a.m,a.k,a.l,b.a,r.a,a.p],styles:[".p-tabview-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:wrap}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"],encapsulation:2,changeDetection:0}),e})(),T=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(t){return new(t||e)},imports:[[a.b,l.m,o.a,s.a],l.m]}),e})()},OXhD:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return c});var i=n("ofXK"),a=n("fXoL");const o=["code"],s=["*"];let l=(()=>{class e{constructor(e){this.el=e,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(a.l))},e.\u0275cmp=a.Db({type:e,selectors:[["app-code"]],viewQuery:function(e,t){if(1&e&&a.Jc(o,!0),2&e){let e;a.tc(e=a.Zb())&&(t.codeViewChild=e.first)}},inputs:{lang:"lang"},ngContentSelectors:s,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(e,t){1&e&&(a.hc(),a.Qb(0,"pre",0),a.Qb(1,"code",null,1),a.gc(3),a.Ec(4,"\n"),a.Pb(),a.Pb()),2&e&&a.ic("ngClass","language-"+t.lang)},directives:[i.j],encapsulation:2}),e})(),c=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[i.b]]}),e})()},Z038:function(e,t,n){"use strict";var i=n("ZwlE");n.d(t,"a",function(){return i.b})},ZwlE:function(e,t,n){"use strict";n.d(t,"a",function(){return x}),n.d(t,"b",function(){return M});var i=n("fXoL"),a=n("ofXK"),o=n("ByAP"),s=n("FmH6"),l=n("R0Ic"),c=n("kGCj");function b(e,t){if(1&e&&(i.Qb(0,"span",10),i.Ec(1),i.Pb()),2&e){const e=i.cc(2);i.yb("id",e.id+"_header"),i.xb(1),i.Fc(e.header)}}function r(e,t){1&e&&i.Mb(0)}function d(e,t){}function h(e,t){1&e&&i.Cc(0,d,0,0,"ng-template")}function p(e,t){if(1&e){const e=i.Sb();i.Qb(0,"button",11),i.Yb("click",function(t){return i.vc(e),i.cc(2).onIconClick(t)})("keydown.enter",function(t){return i.vc(e),i.cc(2).onIconClick(t)}),i.Lb(1,"span"),i.Pb()}if(2&e){const e=i.cc(2);i.yb("id",e.id+"-label")("aria-controls",e.id+"-content")("aria-expanded",!e.collapsed),i.xb(1),i.zb(e.collapsed?e.expandIcon:e.collapseIcon)}}function u(e,t){if(1&e){const e=i.Sb();i.Qb(0,"div",6),i.Yb("click",function(t){return i.vc(e),i.cc().onHeaderClick(t)}),i.Cc(1,b,2,2,"span",7),i.gc(2,1),i.Cc(3,r,1,0,"ng-container",4),i.Qb(4,"div",8),i.Cc(5,h,1,0,void 0,4),i.Cc(6,p,2,5,"button",9),i.Pb(),i.Pb()}if(2&e){const e=i.cc();i.yb("id",e.id+"-titlebar"),i.xb(1),i.ic("ngIf",e.header),i.xb(2),i.ic("ngTemplateOutlet",e.headerTemplate),i.xb(2),i.ic("ngTemplateOutlet",e.iconTemplate),i.xb(1),i.ic("ngIf",e.toggleable)}}function g(e,t){1&e&&i.Mb(0)}function m(e,t){1&e&&i.Mb(0)}function v(e,t){if(1&e&&(i.Qb(0,"div",12),i.gc(1,2),i.Cc(2,m,1,0,"ng-container",4),i.Pb()),2&e){const e=i.cc();i.xb(2),i.ic("ngTemplateOutlet",e.footerTemplate)}}const f=["*",[["p-header"]],[["p-footer"]]],P=function(e){return{"p-panel p-component":!0,"p-panel-toggleable":e}},Q=function(e){return{transitionParams:e,height:"0",opacity:"0"}},C=function(e){return{value:"hidden",params:e}},E=function(e){return{transitionParams:e,height:"*",opacity:"1"}},w=function(e){return{value:"visible",params:e}},k=["*","p-header","p-footer"];let y=0,x=(()=>{class e{constructor(e){this.el=e,this.collapsed=!1,this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new i.n,this.onBeforeToggle=new i.n,this.onAfterToggle=new i.n,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+y++}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break;case"content":this.contentTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"icons":this.iconTemplate=e.template;break;default:this.contentTemplate=e.template}})}onHeaderClick(e){"header"===this.toggler&&this.toggle(e)}onIconClick(e){"icon"===this.toggler&&this.toggle(e)}toggle(e){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(e):this.collapse(e)),e.preventDefault()}expand(e){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(e){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(e){this.animating=!1,this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed})}}return e.\u0275fac=function(t){return new(t||e)(i.Jb(i.l))},e.\u0275cmp=i.Db({type:e,selectors:[["p-panel"]],contentQueries:function(e,t,n){if(1&e&&(i.Cb(n,o.g,!0),i.Cb(n,o.l,!1)),2&e){let e;i.tc(e=i.Zb())&&(t.footerFacet=e.first),i.tc(e=i.Zb())&&(t.templates=e)}},inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:k,decls:7,vars:22,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],[1,"p-panel-icons"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(e,t){1&e&&(i.hc(f),i.Qb(0,"div",0),i.Cc(1,u,7,5,"div",1),i.Qb(2,"div",2),i.Yb("@panelContent.done",function(e){return t.onToggleDone(e)}),i.Qb(3,"div",3),i.gc(4),i.Cc(5,g,1,0,"ng-container",4),i.Pb(),i.Cc(6,v,3,1,"div",5),i.Pb(),i.Pb()),2&e&&(i.zb(t.styleClass),i.ic("ngClass",i.lc(12,P,t.toggleable))("ngStyle",t.style),i.yb("id",t.id),i.xb(1),i.ic("ngIf",t.showHeader),i.xb(1),i.ic("@panelContent",t.collapsed?i.lc(16,C,i.lc(14,Q,t.animating?t.transitionOptions:"0ms")):i.lc(20,w,i.lc(18,E,t.animating?t.transitionOptions:"0ms"))),i.yb("id",t.id+"-content")("aria-hidden",t.collapsed)("aria-labelledby",t.id+"-titlebar"),i.xb(3),i.ic("ngTemplateOutlet",t.contentTemplate),i.xb(1),i.ic("ngIf",t.footerFacet||t.footerTemplate))},directives:[a.j,a.m,a.l,a.p,c.a],styles:[".p-panel-header{display:flex;justify-content:space-between;align-items:center}.p-panel-title{line-height:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}"],encapsulation:2,data:{animation:[Object(l.m)("panelContent",[Object(l.j)("hidden",Object(l.k)({height:"0",overflow:"hidden"})),Object(l.j)("void",Object(l.k)({height:"{{height}}"}),{params:{height:"0"}}),Object(l.j)("visible",Object(l.k)({height:"*"})),Object(l.l)("visible <=> hidden",[Object(l.k)({overflow:"hidden"}),Object(l.e)("{{transitionParams}}")]),Object(l.l)("void => hidden",Object(l.e)("{{transitionParams}}")),Object(l.l)("void => visible",Object(l.e)("{{transitionParams}}"))])]},changeDetection:0}),e})(),M=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(t){return new(t||e)},imports:[[a.b,o.m,s.a],o.m]}),e})()},faTn:function(e,t,n){"use strict";var i=n("+jnZ");n.d(t,"a",function(){return i.c})},rUx0:function(e,t,n){"use strict";n.r(t),n.d(t,"KnobDemoModule",function(){return E});var i=n("ofXK"),a=n("3Pt+"),o=n("rklm"),s=n("Z038"),l=n("faTn"),c=n("fXoL");function b(e,t){if(1&e&&(c.bc(),c.Qb(0,"text",5),c.Ec(1),c.Pb()),2&e){const e=c.cc();c.yb("x",50)("y",57)("fill",e.textColor)("name",e.name),c.xb(1),c.Fc(e.valueToDisplay())}}const r={provide:a.d,useExisting:Object(c.S)(()=>d),multi:!0};let d=(()=>{class e{constructor(e,t){this.cd=e,this.el=t,this.valueColor="var(--primary-color, Black)",this.rangeColor="var(--surface-d, LightGray)",this.textColor="var(--text-color-secondary, Black)",this.valueTemplate="{value}",this.size=100,this.step=1,this.min=0,this.max=100,this.strokeWidth=14,this.showValue=!0,this.readonly=!1,this.onChange=new c.n,this.radius=40,this.midX=50,this.midY=50,this.minRadians=4*Math.PI/3,this.maxRadians=-Math.PI/3,this.value=null,this.onModelChange=()=>{},this.onModelTouched=()=>{}}mapRange(e,t,n,i,a){return(e-t)*(a-i)/(n-t)+i}onClick(e){this.disabled||this.readonly||this.updateValue(e.offsetX,e.offsetY)}updateValue(e,t){let n=Math.atan2(this.size/2-t,e-this.size/2),i=-Math.PI/2-Math.PI/6;this.updateModel(n,i)}updateModel(e,t){let n;if(e>this.maxRadians)n=this.mapRange(e,this.minRadians,this.maxRadians,this.min,this.max);else{if(!(e<t))return;n=this.mapRange(e+2*Math.PI,this.minRadians,this.maxRadians,this.min,this.max)}let i=Math.round((n-this.min)/this.step)*this.step+this.min;this.value=i,this.onModelChange(this.value),this.onChange.emit(this.value)}onMouseDown(e){this.disabled||this.readonly||(this.windowMouseMoveListener=this.onMouseMove.bind(this),this.windowMouseUpListener=this.onMouseUp.bind(this),window.addEventListener("mousemove",this.windowMouseMoveListener),window.addEventListener("mouseup",this.windowMouseUpListener),e.preventDefault())}onMouseUp(e){this.disabled||this.readonly||(window.removeEventListener("mousemove",this.windowMouseMoveListener),window.removeEventListener("mouseup",this.windowMouseUpListener),this.windowMouseUpListener=null,this.windowMouseMoveListener=null,e.preventDefault())}onTouchStart(e){this.disabled||this.readonly||(this.windowTouchMoveListener=this.onTouchMove.bind(this),this.windowTouchEndListener=this.onTouchEnd.bind(this),window.addEventListener("touchmove",this.windowTouchMoveListener),window.addEventListener("touchend",this.windowTouchEndListener),e.preventDefault())}onTouchEnd(e){this.disabled||this.readonly||(window.removeEventListener("touchmove",this.windowTouchMoveListener),window.removeEventListener("touchend",this.windowTouchEndListener),this.windowTouchMoveListener=null,this.windowTouchEndListener=null,e.preventDefault())}onMouseMove(e){this.disabled||this.readonly||(this.updateValue(e.offsetX,e.offsetY),e.preventDefault())}onTouchMove(e){if(!this.disabled&&!this.readonly&&1==e.touches.length){const t=this.el.nativeElement.children[0].getBoundingClientRect(),n=e.targetTouches.item(0);this.updateValue(n.clientX-t.left,n.clientY-t.top)}}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}containerClass(){return{"p-knob p-component":!0,"p-disabled":this.disabled}}rangePath(){return`M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`}valuePath(){return`M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`}zeroRadians(){return this.mapRange(this.min>0&&this.max>0?this.min:0,this.min,this.max,this.minRadians,this.maxRadians)}valueRadians(){return this.mapRange(this._value,this.min,this.max,this.minRadians,this.maxRadians)}minX(){return this.midX+Math.cos(this.minRadians)*this.radius}minY(){return this.midY-Math.sin(this.minRadians)*this.radius}maxX(){return this.midX+Math.cos(this.maxRadians)*this.radius}maxY(){return this.midY-Math.sin(this.maxRadians)*this.radius}zeroX(){return this.midX+Math.cos(this.zeroRadians())*this.radius}zeroY(){return this.midY-Math.sin(this.zeroRadians())*this.radius}valueX(){return this.midX+Math.cos(this.valueRadians())*this.radius}valueY(){return this.midY-Math.sin(this.valueRadians())*this.radius}largeArc(){return Math.abs(this.zeroRadians()-this.valueRadians())<Math.PI?0:1}sweep(){return this.valueRadians()>this.zeroRadians()?0:1}valueToDisplay(){return this.valueTemplate.replace("{value}",this._value.toString())}get _value(){return null!=this.value?this.value:this.min}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(c.h),c.Jb(c.l))},e.\u0275cmp=c.Db({type:e,selectors:[["p-knob"]],inputs:{styleClass:"styleClass",style:"style",severity:"severity",valueColor:"valueColor",rangeColor:"rangeColor",textColor:"textColor",valueTemplate:"valueTemplate",name:"name",size:"size",step:"step",min:"min",max:"max",strokeWidth:"strokeWidth",disabled:"disabled",showValue:"showValue",readonly:"readonly"},outputs:{onChange:"onChange"},features:[c.wb([r])],decls:5,vars:15,consts:[[3,"ngClass","ngStyle"],["viewBox","0 0 100 100",3,"click","mousedown","mouseup","touchstart","touchend"],[1,"p-knob-range"],[1,"p-knob-value"],["text-anchor","middle","class","p-knob-text",4,"ngIf"],["text-anchor","middle",1,"p-knob-text"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.bc(),c.Qb(1,"svg",1),c.Yb("click",function(e){return t.onClick(e)})("mousedown",function(e){return t.onMouseDown(e)})("mouseup",function(e){return t.onMouseUp(e)})("touchstart",function(e){return t.onTouchStart(e)})("touchend",function(e){return t.onTouchEnd(e)}),c.Lb(2,"path",2),c.Lb(3,"path",3),c.Cc(4,b,2,5,"text",4),c.Pb(),c.Pb()),2&e&&(c.zb(t.styleClass),c.ic("ngClass",t.containerClass())("ngStyle",t.style),c.xb(1),c.Bc("width",t.size+"px")("height",t.size+"px"),c.xb(1),c.yb("d",t.rangePath())("stroke-width",t.strokeWidth)("stroke",t.rangeColor),c.xb(1),c.yb("d",t.valuePath())("stroke-width",t.strokeWidth)("stroke",t.valueColor),c.xb(1),c.ic("ngIf",t.showValue))},directives:[i.j,i.m,i.l],styles:["@keyframes dash-frame{to{stroke-dashoffset:0}}.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-name:dash-frame;animation-fill-mode:forwards;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}"],encapsulation:2,changeDetection:0}),e})(),h=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[i.b]]}),e})();var p=n("tyNb"),u=n("K+Em"),g=n("+jnZ"),m=n("OXhD"),v=n("Qx9H");function f(e,t){1&e&&c.Lb(0,"iframe",29)}const P=function(){return["/theming"]};let Q=(()=>{class e{constructor(){this.value1=0,this.value2=50,this.value3=75,this.value4=10,this.value5=40,this.value6=60,this.value7=40,this.value8=60,this.value9=50}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Db({type:e,selectors:[["ng-component"]],decls:308,vars:18,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","knob","stackblitz","knob-demo"],[1,"content-section","implementation"],[1,"card"],[1,"p-grid","p-formgrid","p-text-center"],[1,"p-field","p-col-12","p-md-4"],[3,"ngModel","ngModelChange"],[3,"ngModel","readonly","ngModelChange"],[3,"ngModel","disabled","ngModelChange"],[1,"p-mt-3"],[3,"ngModel","min","max","ngModelChange"],[3,"ngModel","step","ngModelChange"],["valueTemplate","{value}%",3,"ngModel","ngModelChange"],[3,"ngModel","strokeWidth","ngModelChange"],[3,"ngModel","size","ngModelChange"],["valueColor","SlateGray","rangeColor","MediumTurquoise",3,"ngModel","ngModelChange"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/knob","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-knob-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src",c.Ic("https://stackblitz.com/edit/primeng-knob-demo?embed=1"),2,"width","100%","height","768px","border","none"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"h1"),c.Ec(3,"Knob"),c.Pb(),c.Qb(4,"p"),c.Ec(5,"Knob is a form component to define number inputs with a dial."),c.Pb(),c.Pb(),c.Lb(6,"app-demoActions",2),c.Pb(),c.Qb(7,"div",3),c.Qb(8,"div",4),c.Qb(9,"div",5),c.Qb(10,"div",6),c.Qb(11,"h5"),c.Ec(12,"Basic"),c.Pb(),c.Qb(13,"p-knob",7),c.Yb("ngModelChange",function(e){return t.value1=e}),c.Pb(),c.Pb(),c.Qb(14,"div",6),c.Qb(15,"h5"),c.Ec(16,"Readonly"),c.Pb(),c.Qb(17,"p-knob",8),c.Yb("ngModelChange",function(e){return t.value2=e}),c.Pb(),c.Pb(),c.Qb(18,"div",6),c.Qb(19,"h5"),c.Ec(20,"Disabled"),c.Pb(),c.Qb(21,"p-knob",9),c.Yb("ngModelChange",function(e){return t.value3=e}),c.Pb(),c.Pb(),c.Qb(22,"div",6),c.Qb(23,"h5",10),c.Ec(24,"Min/Max"),c.Pb(),c.Qb(25,"p-knob",11),c.Yb("ngModelChange",function(e){return t.value4=e}),c.Pb(),c.Pb(),c.Qb(26,"div",6),c.Qb(27,"h5",10),c.Ec(28,"Step"),c.Pb(),c.Qb(29,"p-knob",12),c.Yb("ngModelChange",function(e){return t.value5=e}),c.Pb(),c.Pb(),c.Qb(30,"div",6),c.Qb(31,"h5",10),c.Ec(32,"Template"),c.Pb(),c.Qb(33,"p-knob",13),c.Yb("ngModelChange",function(e){return t.value6=e}),c.Pb(),c.Pb(),c.Qb(34,"div",6),c.Qb(35,"h5",10),c.Ec(36,"Stroke"),c.Pb(),c.Qb(37,"p-knob",14),c.Yb("ngModelChange",function(e){return t.value7=e}),c.Pb(),c.Pb(),c.Qb(38,"div",6),c.Qb(39,"h5",10),c.Ec(40,"Size"),c.Pb(),c.Qb(41,"p-knob",15),c.Yb("ngModelChange",function(e){return t.value8=e}),c.Pb(),c.Pb(),c.Qb(42,"div",6),c.Qb(43,"h5",10),c.Ec(44,"Color"),c.Pb(),c.Qb(45,"p-knob",16),c.Yb("ngModelChange",function(e){return t.value9=e}),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(46,"div",17),c.Qb(47,"p-tabView"),c.Qb(48,"p-tabPanel",18),c.Qb(49,"h5"),c.Ec(50,"Import"),c.Pb(),c.Qb(51,"app-code",19),c.Kb(),c.Ec(52,"\nimport {KnobModule} from 'primeng/knob';\n"),c.Rb(),c.Pb(),c.Qb(53,"h5"),c.Ec(54,"Getting Started"),c.Pb(),c.Qb(55,"p"),c.Ec(56,"Knob is an input component and used with the standard "),c.Qb(57,"i"),c.Ec(58,"ngModel"),c.Pb(),c.Ec(59," directive."),c.Pb(),c.Qb(60,"app-code",20),c.Kb(),c.Ec(61,'\n<p-knob [(ngModel)]="value"></p-knob>\n'),c.Rb(),c.Pb(),c.Qb(62,"app-code",19),c.Kb(),c.Ec(63,"\nvalue: number = 0;\n"),c.Rb(),c.Pb(),c.Qb(64,"h5"),c.Ec(65,"Minimum and Maximum"),c.Pb(),c.Qb(66,"p"),c.Ec(67,"Boundaries are configured with the "),c.Qb(68,"i"),c.Ec(69,"min"),c.Pb(),c.Ec(70," and "),c.Qb(71,"i"),c.Ec(72,"max"),c.Pb(),c.Ec(73," values whose defaults are 0 and 100 respectively."),c.Pb(),c.Qb(74,"app-code",20),c.Kb(),c.Ec(75,'\n<p-knob [(ngModel)]="value" [min]="-50" [max]="50"></p-knob>\n'),c.Rb(),c.Pb(),c.Qb(76,"h5"),c.Ec(77,"Step"),c.Pb(),c.Qb(78,"p"),c.Ec(79,"Step factor is 1 by default and can be customized with "),c.Qb(80,"i"),c.Ec(81,"step"),c.Pb(),c.Ec(82," option."),c.Pb(),c.Qb(83,"app-code",20),c.Kb(),c.Ec(84,'\n<p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise"></p-knob>\n'),c.Rb(),c.Pb(),c.Qb(85,"h5"),c.Ec(86,"Size"),c.Pb(),c.Qb(87,"p"),c.Ec(88,"Default size of the Knob is 100 pixels for width and height, use the "),c.Qb(89,"i"),c.Ec(90,"size"),c.Pb(),c.Ec(91," property to customize it per your requirements."),c.Pb(),c.Qb(92,"app-code",20),c.Kb(),c.Ec(93,'\n<p-knob [(ngModel)]="value" [size]="200"></p-knob>\n'),c.Rb(),c.Pb(),c.Qb(94,"h5"),c.Ec(95,"Properties"),c.Pb(),c.Qb(96,"div",21),c.Qb(97,"table",22),c.Qb(98,"thead"),c.Qb(99,"tr"),c.Qb(100,"th"),c.Ec(101,"Name"),c.Pb(),c.Qb(102,"th"),c.Ec(103,"Type"),c.Pb(),c.Qb(104,"th"),c.Ec(105,"Default"),c.Pb(),c.Qb(106,"th"),c.Ec(107,"Description"),c.Pb(),c.Pb(),c.Pb(),c.Qb(108,"tbody"),c.Qb(109,"tr"),c.Qb(110,"td"),c.Ec(111,"size"),c.Pb(),c.Qb(112,"td"),c.Ec(113,"number"),c.Pb(),c.Qb(114,"td"),c.Ec(115,"100"),c.Pb(),c.Qb(116,"td"),c.Ec(117,"Size of the component in pixels."),c.Pb(),c.Pb(),c.Qb(118,"tr"),c.Qb(119,"td"),c.Ec(120,"disabled"),c.Pb(),c.Qb(121,"td"),c.Ec(122,"boolean"),c.Pb(),c.Qb(123,"td"),c.Ec(124,"false"),c.Pb(),c.Qb(125,"td"),c.Ec(126,"When present, it specifies that the component should be disabled."),c.Pb(),c.Pb(),c.Qb(127,"tr"),c.Qb(128,"td"),c.Ec(129,"readonly"),c.Pb(),c.Qb(130,"td"),c.Ec(131,"boolean"),c.Pb(),c.Qb(132,"td"),c.Ec(133,"false"),c.Pb(),c.Qb(134,"td"),c.Ec(135,"When present, it specifies that the component value cannot be edited."),c.Pb(),c.Pb(),c.Qb(136,"tr"),c.Qb(137,"td"),c.Ec(138,"step"),c.Pb(),c.Qb(139,"td"),c.Ec(140,"number"),c.Pb(),c.Qb(141,"td"),c.Ec(142,"null"),c.Pb(),c.Qb(143,"td"),c.Ec(144,"Step factor to increment/decrement the value."),c.Pb(),c.Pb(),c.Qb(145,"tr"),c.Qb(146,"td"),c.Ec(147,"min"),c.Pb(),c.Qb(148,"td"),c.Ec(149,"number"),c.Pb(),c.Qb(150,"td"),c.Ec(151,"0"),c.Pb(),c.Qb(152,"td"),c.Ec(153,"Mininum boundary value."),c.Pb(),c.Pb(),c.Qb(154,"tr"),c.Qb(155,"td"),c.Ec(156,"max"),c.Pb(),c.Qb(157,"td"),c.Ec(158,"number"),c.Pb(),c.Qb(159,"td"),c.Ec(160,"100"),c.Pb(),c.Qb(161,"td"),c.Ec(162,"Maximum boundary value."),c.Pb(),c.Pb(),c.Qb(163,"tr"),c.Qb(164,"td"),c.Ec(165,"valueColor"),c.Pb(),c.Qb(166,"td"),c.Ec(167,"string"),c.Pb(),c.Qb(168,"td"),c.Ec(169,"null"),c.Pb(),c.Qb(170,"td"),c.Ec(171,"Background of the value."),c.Pb(),c.Pb(),c.Qb(172,"tr"),c.Qb(173,"td"),c.Ec(174,"rangeColor"),c.Pb(),c.Qb(175,"td"),c.Ec(176,"number"),c.Pb(),c.Qb(177,"td"),c.Ec(178,"null"),c.Pb(),c.Qb(179,"td"),c.Ec(180,"Background color of the range."),c.Pb(),c.Pb(),c.Qb(181,"tr"),c.Qb(182,"td"),c.Ec(183,"textColor"),c.Pb(),c.Qb(184,"td"),c.Ec(185,"number"),c.Pb(),c.Qb(186,"td"),c.Ec(187,"null"),c.Pb(),c.Qb(188,"td"),c.Ec(189,"Color of the value text."),c.Pb(),c.Pb(),c.Qb(190,"tr"),c.Qb(191,"td"),c.Ec(192,"strokeWidth"),c.Pb(),c.Qb(193,"td"),c.Ec(194,"number"),c.Pb(),c.Qb(195,"td"),c.Ec(196,"14"),c.Pb(),c.Qb(197,"td"),c.Ec(198,"Width of the knob stroke."),c.Pb(),c.Pb(),c.Qb(199,"tr"),c.Qb(200,"td"),c.Ec(201,"showValue"),c.Pb(),c.Qb(202,"td"),c.Ec(203,"boolean"),c.Pb(),c.Qb(204,"td"),c.Ec(205,"true"),c.Pb(),c.Qb(206,"td"),c.Ec(207,"Whether the show the value inside the knob."),c.Pb(),c.Pb(),c.Qb(208,"tr"),c.Qb(209,"td"),c.Ec(210,"valueTemplate"),c.Pb(),c.Qb(211,"td"),c.Ec(212,"string"),c.Pb(),c.Qb(213,"td"),c.Ec(214,"{value}"),c.Pb(),c.Qb(215,"td"),c.Ec(216,"Template string of the value."),c.Pb(),c.Pb(),c.Qb(217,"tr"),c.Qb(218,"td"),c.Ec(219,"style"),c.Pb(),c.Qb(220,"td"),c.Ec(221,"object"),c.Pb(),c.Qb(222,"td"),c.Ec(223,"null"),c.Pb(),c.Qb(224,"td"),c.Ec(225,"Inline style of the component."),c.Pb(),c.Pb(),c.Qb(226,"tr"),c.Qb(227,"td"),c.Ec(228,"styleClass"),c.Pb(),c.Qb(229,"td"),c.Ec(230,"string"),c.Pb(),c.Qb(231,"td"),c.Ec(232,"null"),c.Pb(),c.Qb(233,"td"),c.Ec(234,"Style class of the component."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(235,"h5"),c.Ec(236,"Events"),c.Pb(),c.Qb(237,"div",21),c.Qb(238,"table",22),c.Qb(239,"thead"),c.Qb(240,"tr"),c.Qb(241,"th"),c.Ec(242,"Name"),c.Pb(),c.Qb(243,"th"),c.Ec(244,"Parameters"),c.Pb(),c.Qb(245,"th"),c.Ec(246,"Description"),c.Pb(),c.Pb(),c.Pb(),c.Qb(247,"tbody"),c.Qb(248,"tr"),c.Qb(249,"td"),c.Ec(250,"onChange"),c.Pb(),c.Qb(251,"td"),c.Ec(252,"value: New value "),c.Pb(),c.Qb(253,"td"),c.Ec(254,"Callback to invoke when the value changes."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(255,"h5"),c.Ec(256,"Styling"),c.Pb(),c.Qb(257,"p"),c.Ec(258,"Following is the list of structural style classes, for theming classes visit "),c.Qb(259,"a",23),c.Ec(260,"theming"),c.Pb(),c.Ec(261," page."),c.Pb(),c.Qb(262,"div",21),c.Qb(263,"table",22),c.Qb(264,"thead"),c.Qb(265,"tr"),c.Qb(266,"th"),c.Ec(267,"Name"),c.Pb(),c.Qb(268,"th"),c.Ec(269,"Element"),c.Pb(),c.Pb(),c.Pb(),c.Qb(270,"tbody"),c.Qb(271,"tr"),c.Qb(272,"td"),c.Ec(273,"p-knob"),c.Pb(),c.Qb(274,"td"),c.Ec(275,"Container element."),c.Pb(),c.Pb(),c.Qb(276,"tr"),c.Qb(277,"td"),c.Ec(278,"p-knob-text"),c.Pb(),c.Qb(279,"td"),c.Ec(280,"Text element."),c.Pb(),c.Pb(),c.Qb(281,"tr"),c.Qb(282,"td"),c.Ec(283,"p-knob-value"),c.Pb(),c.Qb(284,"td"),c.Ec(285,"Value element."),c.Pb(),c.Pb(),c.Qb(286,"tr"),c.Qb(287,"td"),c.Ec(288,"p-knob-text"),c.Pb(),c.Qb(289,"td"),c.Ec(290,"Text element."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(291,"h5"),c.Ec(292,"Dependencies"),c.Pb(),c.Qb(293,"p"),c.Ec(294,"None."),c.Pb(),c.Pb(),c.Qb(295,"p-tabPanel",24),c.Qb(296,"a",25),c.Qb(297,"span"),c.Ec(298,"View on GitHub"),c.Pb(),c.Pb(),c.Qb(299,"a",26),c.Qb(300,"span"),c.Ec(301,"Edit in StackBlitz"),c.Pb(),c.Pb(),c.Qb(302,"app-code",20),c.Kb(),c.Ec(303,'\n<div class="p-grid p-formgrid p-text-center">\n    <div class="p-field p-col-12 p-md-4">\n        <h5>Basic</h5>\n        <p-knob [(ngModel)]="value1"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5>Readonly</h5>\n        <p-knob [(ngModel)]="value2" [readonly]="true"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5>Disabled</h5>\n        <p-knob [(ngModel)]="value3" [disabled]="true"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Min/Max</h5>\n        <p-knob [(ngModel)]="value4" [min]="-50" [max]="50"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Step</h5>\n        <p-knob [(ngModel)]="value5" [step]="10"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Template</h5>\n        <p-knob [(ngModel)]="value6" valueTemplate="{value}%"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Stroke</h5>\n        <p-knob [(ngModel)]="value7" [strokeWidth]="5"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Size</h5>\n        <p-knob [(ngModel)]="value8" [size]="200"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Color</h5>\n        <p-knob [(ngModel)]="value9" valueColor="SlateGray" rangeColor="MediumTurquoise"></p-knob>\n    </div>\n</div>\n'),c.Rb(),c.Pb(),c.Qb(304,"app-code",19),c.Kb(),c.Ec(305,"\nexport class KnobDemo {\n\n    value1: number = 0;\n\n    value2: number = 50;\n\n    value3: number = 75;\n\n    value4: number = 10;\n\n    value5: number = 40;\n\n    value6: number = 60;\n\n    value7: number = 40;\n\n    value8: number = 60;\n\n    value9: number = 50;\n    \n}\n"),c.Rb(),c.Pb(),c.Pb(),c.Qb(306,"p-tabPanel",27),c.Cc(307,f,1,0,"ng-template",28),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.xb(13),c.ic("ngModel",t.value1),c.xb(4),c.ic("ngModel",t.value2)("readonly",!0),c.xb(4),c.ic("ngModel",t.value3)("disabled",!0),c.xb(4),c.ic("ngModel",t.value4)("min",-50)("max",50),c.xb(4),c.ic("ngModel",t.value5)("step",10),c.xb(4),c.ic("ngModel",t.value6),c.xb(4),c.ic("ngModel",t.value7)("strokeWidth",5),c.xb(4),c.ic("ngModel",t.value8)("size",200),c.xb(4),c.ic("ngModel",t.value9),c.xb(214),c.ic("routerLink",c.kc(17,P)))},directives:[u.a,d,a.f,a.i,g.b,g.a,m.a,p.f,v.c],encapsulation:2}),e})(),C=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[p.g.forChild([{path:"",component:Q}])],p.g]}),e})(),E=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[i.b,C,o.a,s.a,l.a,a.b,h,u.b,m.b]]}),e})()}}]);