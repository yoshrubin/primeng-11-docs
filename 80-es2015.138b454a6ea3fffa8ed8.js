(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"+jnZ":function(t,e,n){"use strict";n.d(e,"a",function(){return w}),n.d(e,"b",function(){return x}),n.d(e,"c",function(){return M});var o=n("fXoL"),i=n("ofXK"),c=n("EA8a"),b=n("FmH6"),s=n("ByAP"),l=n("/5fT"),a=n("kGCj"),r=n("4t6f");function d(t,e){1&t&&o.Mb(0)}function h(t,e){if(1&t&&(o.Ob(0),o.Cc(1,d,1,0,"ng-container",3),o.Nb()),2&t){const t=o.cc(2);o.xb(1),o.ic("ngTemplateOutlet",t.contentTemplate)}}function p(t,e){if(1&t&&(o.Qb(0,"div",1),o.gc(1),o.Cc(2,h,2,1,"ng-container",2),o.Pb()),2&t){const t=o.cc();o.ic("hidden",!t.selected),o.yb("id",t.id)("aria-hidden",!t.selected)("aria-labelledby",t.id+"-label"),o.xb(2),o.ic("ngIf",t.contentTemplate&&(t.cache?t.loaded:t.selected))}}const g=["*"],u=["navbar"],f=["inkbar"];function P(t,e){if(1&t&&o.Lb(0,"span",16),2&t){const t=o.cc(3).$implicit;o.ic("ngClass",t.leftIcon)}}function m(t,e){if(1&t&&o.Lb(0,"span",17),2&t){const t=o.cc(3).$implicit;o.ic("ngClass",t.rightIcon)}}function Q(t,e){if(1&t&&(o.Ob(0),o.Cc(1,P,1,1,"span",13),o.Qb(2,"span",14),o.Ec(3),o.Pb(),o.Cc(4,m,1,1,"span",15),o.Nb()),2&t){const t=o.cc(2).$implicit;o.xb(1),o.ic("ngIf",t.leftIcon),o.xb(2),o.Fc(t.header),o.xb(1),o.ic("ngIf",t.rightIcon)}}function C(t,e){1&t&&o.Mb(0)}function v(t,e){if(1&t){const t=o.Sb();o.Qb(0,"span",18),o.Yb("click",function(e){o.vc(t);const n=o.cc(2).$implicit;return o.cc().close(e,n)}),o.Pb()}}const E=function(t,e){return{"p-highlight":t,"p-disabled":e}};function I(t,e){if(1&t){const t=o.Sb();o.Qb(0,"li",8),o.Qb(1,"a",9),o.Yb("click",function(e){o.vc(t);const n=o.cc().$implicit;return o.cc().open(e,n)})("keydown.enter",function(e){o.vc(t);const n=o.cc().$implicit;return o.cc().open(e,n)}),o.Cc(2,Q,5,3,"ng-container",10),o.Cc(3,C,1,0,"ng-container",11),o.Cc(4,v,1,0,"span",12),o.Pb(),o.Pb()}if(2&t){const t=o.cc().$implicit;o.zb(t.headerStyleClass),o.ic("ngClass",o.mc(16,E,t.selected,t.disabled))("ngStyle",t.headerStyle),o.xb(1),o.ic("pTooltip",t.tooltip)("tooltipPosition",t.tooltipPosition)("positionStyle",t.tooltipPositionStyle)("tooltipStyleClass",t.tooltipStyleClass),o.yb("id",t.id+"-label")("aria-selected",t.selected)("aria-controls",t.id)("aria-selected",t.selected)("tabindex",t.disabled?null:"0"),o.xb(1),o.ic("ngIf",!t.headerTemplate),o.xb(1),o.ic("ngTemplateOutlet",t.headerTemplate),o.xb(1),o.ic("ngIf",t.closable)}}function y(t,e){1&t&&o.Cc(0,I,5,19,"li",7),2&t&&o.ic("ngIf",!e.$implicit.closed)}let k=0,w=(()=>{class t{constructor(t,e,n){this.viewContainer=e,this.cd=n,this.cache=!0,this.tooltipPosition="top",this.tooltipPositionStyle="absolute",this.id="p-tabpanel-"+k++,this.tabView=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"content":default:this.contentTemplate=t.template}})}get selected(){return this._selected}set selected(t){this._selected=t,this.loaded||this.cd.detectChanges(),t&&(this.loaded=!0)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.tabView.cd.markForCheck()}get header(){return this._header}set header(t){this._header=t,this.tabView.cd.markForCheck()}get leftIcon(){return this._leftIcon}set leftIcon(t){this._leftIcon=t,this.tabView.cd.markForCheck()}get rightIcon(){return this._rightIcon}set rightIcon(t){this._rightIcon=t,this.tabView.cd.markForCheck()}ngOnDestroy(){this.view=null}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(Object(o.S)(()=>x)),o.Jb(o.O),o.Jb(o.h))},t.\u0275cmp=o.Db({type:t,selectors:[["p-tabPanel"]],contentQueries:function(t,e,n){if(1&t&&o.Cb(n,s.l,!1),2&t){let t;o.tc(t=o.Zb())&&(e.templates=t)}},inputs:{closable:"closable",headerStyle:"headerStyle",headerStyleClass:"headerStyleClass",cache:"cache",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",selected:"selected",disabled:"disabled",header:"header",leftIcon:"leftIcon",rightIcon:"rightIcon"},ngContentSelectors:g,decls:1,vars:1,consts:[["class","p-tabview-panel","role","tabpanel",3,"hidden",4,"ngIf"],["role","tabpanel",1,"p-tabview-panel",3,"hidden"],[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(t,e){1&t&&(o.hc(),o.Cc(0,p,3,5,"div",0)),2&t&&o.ic("ngIf",!e.closed)},directives:[i.l,i.p],encapsulation:2}),t})(),x=(()=>{class t{constructor(t,e){this.el=t,this.cd=e,this.orientation="top",this.onChange=new o.n,this.onClose=new o.n,this.activeIndexChange=new o.n}ngAfterContentInit(){this.initTabs(),this.tabPanels.changes.subscribe(t=>{this.initTabs()})}ngAfterViewChecked(){this.tabChanged&&(this.updateInkBar(),this.tabChanged=!1)}initTabs(){this.tabs=this.tabPanels.toArray(),!this.findSelectedTab()&&this.tabs.length&&(null!=this.activeIndex&&this.tabs.length>this.activeIndex?this.tabs[this.activeIndex].selected=!0:this.tabs[0].selected=!0,this.tabChanged=!0),this.cd.markForCheck()}open(t,e){if(e.disabled)t&&t.preventDefault();else{if(!e.selected){let n=this.findSelectedTab();n&&(n.selected=!1),this.tabChanged=!0,e.selected=!0;let o=this.findTabIndex(e);this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(o),this.onChange.emit({originalEvent:t,index:o})}t&&t.preventDefault()}}close(t,e){this.controlClose?this.onClose.emit({originalEvent:t,index:this.findTabIndex(e),close:()=>{this.closeTab(e)}}):(this.closeTab(e),this.onClose.emit({originalEvent:t,index:this.findTabIndex(e)})),t.stopPropagation()}closeTab(t){if(!t.disabled){if(t.selected){this.tabChanged=!0,t.selected=!1;for(let e=0;e<this.tabs.length;e++){let n=this.tabs[e];if(!n.closed&&!t.disabled){n.selected=!0;break}}}t.closed=!0}}findSelectedTab(){for(let t=0;t<this.tabs.length;t++)if(this.tabs[t].selected)return this.tabs[t];return null}findTabIndex(t){let e=-1;for(let n=0;n<this.tabs.length;n++)if(this.tabs[n]==t){e=n;break}return e}getBlockableElement(){return this.el.nativeElement.children[0]}get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.tabs&&this.tabs.length&&null!=this._activeIndex&&this.tabs.length>this._activeIndex&&(this.findSelectedTab().selected=!1,this.tabs[this._activeIndex].selected=!0,this.tabChanged=!0)}updateInkBar(){let t=l.b.findSingle(this.navbar.nativeElement,"li.p-highlight");this.inkbar.nativeElement.style.width=l.b.getWidth(t)+"px",this.inkbar.nativeElement.style.left=l.b.getOffset(t).left-l.b.getOffset(this.navbar.nativeElement).left+"px"}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.l),o.Jb(o.h))},t.\u0275cmp=o.Db({type:t,selectors:[["p-tabView"]],contentQueries:function(t,e,n){if(1&t&&o.Cb(n,w,!1),2&t){let t;o.tc(t=o.Zb())&&(e.tabPanels=t)}},viewQuery:function(t,e){if(1&t&&(o.Jc(u,!0),o.Jc(f,!0)),2&t){let t;o.tc(t=o.Zb())&&(e.navbar=t.first),o.tc(t=o.Zb())&&(e.inkbar=t.first)}},inputs:{orientation:"orientation",style:"style",styleClass:"styleClass",controlClose:"controlClose",activeIndex:"activeIndex"},outputs:{onChange:"onChange",onClose:"onClose",activeIndexChange:"activeIndexChange"},ngContentSelectors:g,decls:8,vars:5,consts:[[3,"ngClass","ngStyle"],["role","tablist",1,"p-tabview-nav"],["navbar",""],["ngFor","",3,"ngForOf"],[1,"p-tabview-ink-bar"],["inkbar",""],[1,"p-tabview-panels"],["role","presentation",3,"ngClass","ngStyle","class",4,"ngIf"],["role","presentation",3,"ngClass","ngStyle"],["role","tab","pRipple","",1,"p-tabview-nav-link",3,"pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","click","keydown.enter"],[4,"ngIf"],[4,"ngTemplateOutlet"],["class","p-tabview-close pi pi-times",3,"click",4,"ngIf"],["class","p-tabview-left-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-title"],["class","p-tabview-right-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-left-icon",3,"ngClass"],[1,"p-tabview-right-icon",3,"ngClass"],[1,"p-tabview-close","pi","pi-times",3,"click"]],template:function(t,e){1&t&&(o.hc(),o.Qb(0,"div",0),o.Qb(1,"ul",1,2),o.Cc(3,y,1,1,"ng-template",3),o.Lb(4,"li",4,5),o.Pb(),o.Qb(6,"div",6),o.gc(7),o.Pb(),o.Pb()),2&t&&(o.zb(e.styleClass),o.ic("ngClass","p-tabview p-component")("ngStyle",e.style),o.xb(3),o.ic("ngForOf",e.tabs))},directives:[i.j,i.m,i.k,i.l,a.a,r.a,i.p],styles:[".p-tabview-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:wrap}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"],encapsulation:2,changeDetection:0}),t})(),M=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[i.b,s.m,c.a,b.a],s.m]}),t})()},OXhD:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return l});var o=n("ofXK"),i=n("fXoL");const c=["code"],b=["*"];let s=(()=>{class t{constructor(t){this.el=t,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(i.l))},t.\u0275cmp=i.Db({type:t,selectors:[["app-code"]],viewQuery:function(t,e){if(1&t&&i.Jc(c,!0),2&t){let t;i.tc(t=i.Zb())&&(e.codeViewChild=t.first)}},inputs:{lang:"lang"},ngContentSelectors:b,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(t,e){1&t&&(i.hc(),i.Qb(0,"pre",0),i.Qb(1,"code",null,1),i.gc(3),i.Ec(4,"\n"),i.Pb(),i.Pb()),2&t&&i.ic("ngClass","language-"+e.lang)},directives:[o.j],encapsulation:2}),t})(),l=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[o.b]]}),t})()},faTn:function(t,e,n){"use strict";var o=n("+jnZ");n.d(e,"a",function(){return o.c})},gjep:function(t,e,n){"use strict";n.r(e),n.d(e,"ToggleButtonDemoModule",function(){return k});var o=n("ofXK"),i=n("3Pt+"),c=n("tyNb"),b=n("fXoL"),s=n("K+Em"),l=n("FmH6"),a=n("kGCj");const r=function(t,e){return{"p-button-icon":!0,"p-button-icon-left":t,"p-button-icon-right":e}};function d(t,e){if(1&t&&b.Lb(0,"span",3),2&t){const t=b.cc();b.zb(t.checked?t.onIcon:t.offIcon),b.ic("ngClass",b.mc(3,r,"left"===t.iconPos,"right"===t.iconPos))}}const h=function(t,e,n){return{"p-button p-togglebutton p-component":!0,"p-button-icon-only":t,"p-highlight":e,"p-disabled":n}},p={provide:i.d,useExisting:Object(b.S)(()=>g),multi:!0};let g=(()=>{class t{constructor(t){this.cd=t,this.iconPos="left",this.onChange=new b.n,this.checked=!1,this.onModelChange=()=>{},this.onModelTouched=()=>{}}toggle(t){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(b.h))},t.\u0275cmp=b.Db({type:t,selectors:[["p-toggleButton"]],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:"tabindex",iconPos:"iconPos"},outputs:{onChange:"onChange"},features:[b.wb([p])],decls:4,vars:12,consts:[["role","checkbox","pRipple","",3,"ngClass","ngStyle","click","keydown.enter"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"ngClass"]],template:function(t,e){1&t&&(b.Qb(0,"div",0),b.Yb("click",function(t){return e.toggle(t)})("keydown.enter",function(t){return e.toggle(t)}),b.Cc(1,d,1,6,"span",1),b.Qb(2,"span",2),b.Ec(3),b.Pb(),b.Pb()),2&t&&(b.zb(e.styleClass),b.ic("ngClass",b.nc(8,h,e.onIcon&&e.offIcon&&!e.hasOnLabel&&!e.hasOffLabel,e.checked,e.disabled))("ngStyle",e.style),b.yb("tabindex",e.disabled?null:"0")("aria-checked",e.checked),b.xb(1),b.ic("ngIf",e.onIcon||e.offIcon),b.xb(2),b.Fc(e.checked?e.hasOnLabel?e.onLabel:"":e.hasOffLabel?e.offLabel:""))},directives:[a.a,o.j,o.m,o.l],styles:[".p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%]{visibility:hidden;width:0;flex:0 0 auto}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}.p-button-label[_ngcontent-%COMP%]{transition:all .2s}"],changeDetection:0}),t})(),u=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},imports:[[o.b,l.a]]}),t})();var f=n("+jnZ"),P=n("OXhD"),m=n("Qx9H");function Q(t,e){1&t&&b.Lb(0,"iframe",19)}const C=function(){return{width:"10em"}},v=function(){return["/theming"]};let E=(()=>{class t{constructor(){this.checked1=!1,this.checked2=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Db({type:t,selectors:[["ng-component"]],decls:257,vars:7,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","togglebutton","stackblitz","togglebutton-demo"],[1,"content-section","implementation"],[1,"card"],["onIcon","pi pi-check","offIcon","pi pi-times",3,"ngModel","ngModelChange"],["onLabel","I confirm","offLabel","I reject","onIcon","pi pi-check","offIcon","pi pi-times",3,"ngModel","ngModelChange"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/togglebutton","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-togglebutton-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src",b.Ic("https://stackblitz.com/edit/primeng-togglebutton-demo?embed=1"),2,"width","100%","height","768px","border","none"]],template:function(t,e){1&t&&(b.Qb(0,"div",0),b.Qb(1,"div",1),b.Qb(2,"h1"),b.Ec(3,"ToggleButton"),b.Pb(),b.Qb(4,"p"),b.Ec(5,"ToggleButton is used to select a boolean value using a button."),b.Pb(),b.Pb(),b.Lb(6,"app-demoActions",2),b.Pb(),b.Qb(7,"div",3),b.Qb(8,"div",4),b.Qb(9,"h5"),b.Ec(10,"Basic"),b.Pb(),b.Qb(11,"p-toggleButton",5),b.Yb("ngModelChange",function(t){return e.checked1=t}),b.Pb(),b.Qb(12,"h5"),b.Ec(13,"Customized"),b.Pb(),b.Qb(14,"p-toggleButton",6),b.Yb("ngModelChange",function(t){return e.checked2=t}),b.Pb(),b.Pb(),b.Pb(),b.Qb(15,"div",7),b.Qb(16,"p-tabView"),b.Qb(17,"p-tabPanel",8),b.Qb(18,"h5"),b.Ec(19,"Import"),b.Pb(),b.Qb(20,"app-code",9),b.Kb(),b.Ec(21,"\nimport {ToggleButtonModule} from 'primeng/togglebutton';\n"),b.Rb(),b.Pb(),b.Qb(22,"h5"),b.Ec(23,"Getting Started"),b.Pb(),b.Qb(24,"p"),b.Ec(25,"Two-way binding to a boolean property is defined using the standard ngModel directive."),b.Pb(),b.Qb(26,"app-code",10),b.Kb(),b.Ec(27,'\n<p-toggleButton [(ngModel)]="checked"></p-toggleButton>\n'),b.Rb(),b.Pb(),b.Qb(28,"app-code",9),b.Kb(),b.Ec(29,"\nexport class ModelComponent {\n\n    checked: boolean;\n\n}\n"),b.Rb(),b.Pb(),b.Qb(30,"p"),b.Ec(31,"As model is two-way binding enabled, setting the bound value as true displays the state as checked."),b.Pb(),b.Qb(32,"app-code",9),b.Kb(),b.Ec(33,"\nexport class ModelComponent {\n\n   checked: boolean = true;\n\n}\n"),b.Rb(),b.Pb(),b.Qb(34,"h5"),b.Ec(35,"Model Driven Forms"),b.Pb(),b.Qb(36,"p"),b.Ec(37,"ToggleButton can be used in a model driven form as well."),b.Pb(),b.Qb(38,"app-code",10),b.Kb(),b.Ec(39,'\n<p-toggleButton formControlName="agreed"></p-toggleButton>\n'),b.Rb(),b.Pb(),b.Qb(40,"h5"),b.Ec(41,"Labels"),b.Pb(),b.Qb(42,"p"),b.Ec(43,"Labels are customized using onLabel and "),b.Qb(44,"i"),b.Ec(45,"offLabel"),b.Pb(),b.Ec(46," properties."),b.Pb(),b.Qb(47,"app-code",10),b.Kb(),b.Ec(48,'\n<p-toggleButton onLabel="I confirm" offLabel="I reject"\n            onIcon="pi pi-check" offIcon="pi pi-times" [(ngModel)]="val"></p-toggleButton>\n'),b.Rb(),b.Pb(),b.Qb(49,"h5"),b.Ec(50,"Icons"),b.Pb(),b.Qb(51,"p"),b.Ec(52,"Icon on a ToggleButton is specified with the "),b.Qb(53,"i"),b.Ec(54,"onIcon"),b.Pb(),b.Ec(55," and "),b.Qb(56,"i"),b.Ec(57,"offIcon"),b.Pb(),b.Ec(58," properties and position is customized using the "),b.Qb(59,"i"),b.Ec(60,"iconPos"),b.Pb(),b.Ec(61," property."),b.Pb(),b.Qb(62,"app-code",10),b.Kb(),b.Ec(63,'\n<p-toggleButton onLabel="I confirm" offLabel="I reject" \n            onIcon="pi pi-check" offIcon="pi pi-times" iconPos="right" [(ngModel)]="val"></p-toggleButton>\n'),b.Rb(),b.Pb(),b.Qb(64,"h5"),b.Ec(65,"Properties"),b.Pb(),b.Qb(66,"div",11),b.Qb(67,"table",12),b.Qb(68,"thead"),b.Qb(69,"tr"),b.Qb(70,"th"),b.Ec(71,"Name"),b.Pb(),b.Qb(72,"th"),b.Ec(73,"Type"),b.Pb(),b.Qb(74,"th"),b.Ec(75,"Default"),b.Pb(),b.Qb(76,"th"),b.Ec(77,"Description"),b.Pb(),b.Pb(),b.Pb(),b.Qb(78,"tbody"),b.Qb(79,"tr"),b.Qb(80,"td"),b.Ec(81,"onLabel"),b.Pb(),b.Qb(82,"td"),b.Ec(83,"string"),b.Pb(),b.Qb(84,"td"),b.Ec(85,"null"),b.Pb(),b.Qb(86,"td"),b.Ec(87,"Label for the on state."),b.Pb(),b.Pb(),b.Qb(88,"tr"),b.Qb(89,"td"),b.Ec(90,"offLabel"),b.Pb(),b.Qb(91,"td"),b.Ec(92,"string"),b.Pb(),b.Qb(93,"td"),b.Ec(94,"null"),b.Pb(),b.Qb(95,"td"),b.Ec(96,"Label for the off state."),b.Pb(),b.Pb(),b.Qb(97,"tr"),b.Qb(98,"td"),b.Ec(99,"onIcon"),b.Pb(),b.Qb(100,"td"),b.Ec(101,"string"),b.Pb(),b.Qb(102,"td"),b.Ec(103,"null"),b.Pb(),b.Qb(104,"td"),b.Ec(105,"Icon for the on state."),b.Pb(),b.Pb(),b.Qb(106,"tr"),b.Qb(107,"td"),b.Ec(108,"offIcon"),b.Pb(),b.Qb(109,"td"),b.Ec(110,"string"),b.Pb(),b.Qb(111,"td"),b.Ec(112,"null"),b.Pb(),b.Qb(113,"td"),b.Ec(114,"Icon for the off state."),b.Pb(),b.Pb(),b.Qb(115,"tr"),b.Qb(116,"td"),b.Ec(117,"iconPos"),b.Pb(),b.Qb(118,"td"),b.Ec(119,"string"),b.Pb(),b.Qb(120,"td"),b.Ec(121,"left"),b.Pb(),b.Qb(122,"td"),b.Ec(123,'Position of the icon, valid values are "left" and "right".'),b.Pb(),b.Pb(),b.Qb(124,"tr"),b.Qb(125,"td"),b.Ec(126,"style"),b.Pb(),b.Qb(127,"td"),b.Ec(128,"string"),b.Pb(),b.Qb(129,"td"),b.Ec(130,"null"),b.Pb(),b.Qb(131,"td"),b.Ec(132,"Inline style of the element."),b.Pb(),b.Pb(),b.Qb(133,"tr"),b.Qb(134,"td"),b.Ec(135,"styleClass"),b.Pb(),b.Qb(136,"td"),b.Ec(137,"string"),b.Pb(),b.Qb(138,"td"),b.Ec(139,"null"),b.Pb(),b.Qb(140,"td"),b.Ec(141,"Style class of the element."),b.Pb(),b.Pb(),b.Qb(142,"tr"),b.Qb(143,"td"),b.Ec(144,"disabled"),b.Pb(),b.Qb(145,"td"),b.Ec(146,"boolean"),b.Pb(),b.Qb(147,"td"),b.Ec(148,"false"),b.Pb(),b.Qb(149,"td"),b.Ec(150,"When present, it specifies that the element should be disabled."),b.Pb(),b.Pb(),b.Qb(151,"tr"),b.Qb(152,"td"),b.Ec(153,"tabindex"),b.Pb(),b.Qb(154,"td"),b.Ec(155,"number"),b.Pb(),b.Qb(156,"td"),b.Ec(157,"null"),b.Pb(),b.Qb(158,"td"),b.Ec(159,"Index of the element in tabbing order."),b.Pb(),b.Pb(),b.Qb(160,"tr"),b.Qb(161,"td"),b.Ec(162,"inputId"),b.Pb(),b.Qb(163,"td"),b.Ec(164,"string"),b.Pb(),b.Qb(165,"td"),b.Ec(166,"null"),b.Pb(),b.Qb(167,"td"),b.Ec(168,"Identifier of the focus input to match a label defined for the component."),b.Pb(),b.Pb(),b.Qb(169,"tr"),b.Qb(170,"td"),b.Ec(171,"ariaLabelledBy"),b.Pb(),b.Qb(172,"td"),b.Ec(173,"string"),b.Pb(),b.Qb(174,"td"),b.Ec(175,"null"),b.Pb(),b.Qb(176,"td"),b.Ec(177,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(178,"h5"),b.Ec(179,"Events"),b.Pb(),b.Qb(180,"div",11),b.Qb(181,"table",12),b.Qb(182,"thead"),b.Qb(183,"tr"),b.Qb(184,"th"),b.Ec(185,"Name"),b.Pb(),b.Qb(186,"th"),b.Ec(187,"Parameters"),b.Pb(),b.Qb(188,"th"),b.Ec(189,"Description"),b.Pb(),b.Pb(),b.Pb(),b.Qb(190,"tbody"),b.Qb(191,"tr"),b.Qb(192,"td"),b.Ec(193,"onChange"),b.Pb(),b.Qb(194,"td"),b.Ec(195,"event.originalEvent: browser event "),b.Lb(196,"br"),b.Ec(197," event.checked: boolean value to represent checked state."),b.Pb(),b.Qb(198,"td"),b.Ec(199,"Callback to invoke on state change."),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(200,"app-code",10),b.Kb(),b.Ec(201,'\n<p-toggleButton (onChange)="handleChange($event)" [(ngModel)]="val">\n'),b.Rb(),b.Pb(),b.Qb(202,"app-code",9),b.Kb(),b.Ec(203,"\nexport class ModelComponent {\n\n    handleChange(e) {\n        var isChecked = e.checked;\n    }\n}\n"),b.Rb(),b.Pb(),b.Qb(204,"h5"),b.Ec(205,"Styling"),b.Pb(),b.Qb(206,"p"),b.Ec(207,"Following is the list of structural style classes, for theming classes visit "),b.Qb(208,"a",13),b.Ec(209,"theming page"),b.Pb(),b.Ec(210,"."),b.Pb(),b.Qb(211,"div",11),b.Qb(212,"table",12),b.Qb(213,"thead"),b.Qb(214,"tr"),b.Qb(215,"th"),b.Ec(216,"Name"),b.Pb(),b.Qb(217,"th"),b.Ec(218,"Element"),b.Pb(),b.Pb(),b.Pb(),b.Qb(219,"tbody"),b.Qb(220,"tr"),b.Qb(221,"td"),b.Ec(222,"p-togglebutton"),b.Pb(),b.Qb(223,"td"),b.Ec(224,"Container element"),b.Pb(),b.Pb(),b.Qb(225,"tr"),b.Qb(226,"td"),b.Ec(227,"p-button-icon-left"),b.Pb(),b.Qb(228,"td"),b.Ec(229,"Icon element."),b.Pb(),b.Pb(),b.Qb(230,"tr"),b.Qb(231,"td"),b.Ec(232,"p-button-icon-right"),b.Pb(),b.Qb(233,"td"),b.Ec(234,"Icon element."),b.Pb(),b.Pb(),b.Qb(235,"tr"),b.Qb(236,"td"),b.Ec(237,"p-button-text"),b.Pb(),b.Qb(238,"td"),b.Ec(239,"Label element."),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(240,"h5"),b.Ec(241,"Dependencies"),b.Pb(),b.Qb(242,"p"),b.Ec(243,"None."),b.Pb(),b.Pb(),b.Qb(244,"p-tabPanel",14),b.Qb(245,"a",15),b.Qb(246,"span"),b.Ec(247,"View on GitHub"),b.Pb(),b.Pb(),b.Qb(248,"a",16),b.Qb(249,"span"),b.Ec(250,"Edit in StackBlitz"),b.Pb(),b.Pb(),b.Qb(251,"app-code",10),b.Kb(),b.Ec(252,'\n<h5>Basic</h5>\n<p-toggleButton [(ngModel)]="checked1" onIcon="pi pi-check" offIcon="pi pi-times"></p-toggleButton>\n\n<h5>Customized</h5>\n<p-toggleButton [(ngModel)]="checked2" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" [style]="{\'width\': \'10em\'}"></p-toggleButton>\n'),b.Rb(),b.Pb(),b.Qb(253,"app-code",9),b.Kb(),b.Ec(254,"\nexport class ToggleButtonDemo {\n\n    checked1: boolean = false;\n\n    checked2: boolean = true;\n}\n"),b.Rb(),b.Pb(),b.Pb(),b.Qb(255,"p-tabPanel",17),b.Cc(256,Q,1,0,"ng-template",18),b.Pb(),b.Pb(),b.Pb()),2&t&&(b.xb(11),b.ic("ngModel",e.checked1),b.xb(3),b.Ac(b.kc(5,C)),b.ic("ngModel",e.checked2),b.xb(194),b.ic("routerLink",b.kc(6,v)))},directives:[s.a,g,i.f,i.i,f.b,f.a,P.a,c.f,m.c],encapsulation:2}),t})(),I=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},imports:[[c.g.forChild([{path:"",component:E}])],c.g]}),t})();var y=n("faTn");let k=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},imports:[[o.b,i.b,I,u,y.a,s.b,P.b]]}),t})()}}]);