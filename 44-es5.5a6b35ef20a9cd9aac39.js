!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,i(c.key),c)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"+jnZ":function(t,i,c){"use strict";c.d(i,"a",function(){return M}),c.d(i,"b",function(){return S}),c.d(i,"c",function(){return T});var b=c("fXoL"),a=c("ofXK"),o=c("EA8a"),l=c("FmH6"),s=c("ByAP"),r=c("/5fT"),d=c("kGCj"),h=c("4t6f");function p(e,t){1&e&&b.Mb(0)}function u(e,t){if(1&e&&(b.Ob(0),b.Cc(1,p,1,0,"ng-container",3),b.Nb()),2&e){var n=b.cc(2);b.xb(1),b.ic("ngTemplateOutlet",n.contentTemplate)}}function f(e,t){if(1&e&&(b.Qb(0,"div",1),b.gc(1),b.Cc(2,u,2,1,"ng-container",2),b.Pb()),2&e){var n=b.cc();b.ic("hidden",!n.selected),b.yb("id",n.id)("aria-hidden",!n.selected)("aria-labelledby",n.id+"-label"),b.xb(2),b.ic("ngIf",n.contentTemplate&&(n.cache?n.loaded:n.selected))}}var g=["*"],P=["navbar"],v=["inkbar"];function Q(e,t){if(1&e&&b.Lb(0,"span",16),2&e){var n=b.cc(3).$implicit;b.ic("ngClass",n.leftIcon)}}function m(e,t){if(1&e&&b.Lb(0,"span",17),2&e){var n=b.cc(3).$implicit;b.ic("ngClass",n.rightIcon)}}function k(e,t){if(1&e&&(b.Ob(0),b.Cc(1,Q,1,1,"span",13),b.Qb(2,"span",14),b.Ec(3),b.Pb(),b.Cc(4,m,1,1,"span",15),b.Nb()),2&e){var n=b.cc(2).$implicit;b.xb(1),b.ic("ngIf",n.leftIcon),b.xb(2),b.Fc(n.header),b.xb(1),b.ic("ngIf",n.rightIcon)}}function y(e,t){1&e&&b.Mb(0)}function E(e,t){if(1&e){var n=b.Sb();b.Qb(0,"span",18),b.Yb("click",function(e){b.vc(n);var t=b.cc(2).$implicit;return b.cc().close(e,t)}),b.Pb()}}var x=function(e,t){return{"p-highlight":e,"p-disabled":t}};function C(e,t){if(1&e){var n=b.Sb();b.Qb(0,"li",8),b.Qb(1,"a",9),b.Yb("click",function(e){b.vc(n);var t=b.cc().$implicit;return b.cc().open(e,t)})("keydown.enter",function(e){b.vc(n);var t=b.cc().$implicit;return b.cc().open(e,t)}),b.Cc(2,k,5,3,"ng-container",10),b.Cc(3,y,1,0,"ng-container",11),b.Cc(4,E,1,0,"span",12),b.Pb(),b.Pb()}if(2&e){var i=b.cc().$implicit;b.zb(i.headerStyleClass),b.ic("ngClass",b.mc(16,x,i.selected,i.disabled))("ngStyle",i.headerStyle),b.xb(1),b.ic("pTooltip",i.tooltip)("tooltipPosition",i.tooltipPosition)("positionStyle",i.tooltipPositionStyle)("tooltipStyleClass",i.tooltipStyleClass),b.yb("id",i.id+"-label")("aria-selected",i.selected)("aria-controls",i.id)("aria-selected",i.selected)("tabindex",i.disabled?null:"0"),b.xb(1),b.ic("ngIf",!i.headerTemplate),b.xb(1),b.ic("ngTemplateOutlet",i.headerTemplate),b.xb(1),b.ic("ngIf",i.closable)}}function w(e,t){1&e&&b.Cc(0,C,5,19,"li",7),2&e&&b.ic("ngIf",!t.$implicit.closed)}var I=0,M=function(){var t=function(){return n(function t(n,i,c){e(this,t),this.viewContainer=i,this.cd=c,this.cache=!0,this.tooltipPosition="top",this.tooltipPositionStyle="absolute",this.id="p-tabpanel-"+I++,this.tabView=n},[{key:"ngAfterContentInit",value:function(){var e=this;this.templates.forEach(function(t){switch(t.getType()){case"header":e.headerTemplate=t.template;break;case"content":default:e.contentTemplate=t.template}})}},{key:"selected",get:function(){return this._selected},set:function(e){this._selected=e,this.loaded||this.cd.detectChanges(),e&&(this.loaded=!0)}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=e,this.tabView.cd.markForCheck()}},{key:"header",get:function(){return this._header},set:function(e){this._header=e,this.tabView.cd.markForCheck()}},{key:"leftIcon",get:function(){return this._leftIcon},set:function(e){this._leftIcon=e,this.tabView.cd.markForCheck()}},{key:"rightIcon",get:function(){return this._rightIcon},set:function(e){this._rightIcon=e,this.tabView.cd.markForCheck()}},{key:"ngOnDestroy",value:function(){this.view=null}}])}();return t.\u0275fac=function(e){return new(e||t)(b.Jb(Object(b.S)(function(){return S})),b.Jb(b.O),b.Jb(b.h))},t.\u0275cmp=b.Db({type:t,selectors:[["p-tabPanel"]],contentQueries:function(e,t,n){var i;(1&e&&b.Cb(n,s.l,!1),2&e)&&(b.tc(i=b.Zb())&&(t.templates=i))},inputs:{closable:"closable",headerStyle:"headerStyle",headerStyleClass:"headerStyleClass",cache:"cache",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",selected:"selected",disabled:"disabled",header:"header",leftIcon:"leftIcon",rightIcon:"rightIcon"},ngContentSelectors:g,decls:1,vars:1,consts:[["class","p-tabview-panel","role","tabpanel",3,"hidden",4,"ngIf"],["role","tabpanel",1,"p-tabview-panel",3,"hidden"],[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(e,t){1&e&&(b.hc(),b.Cc(0,f,3,5,"div",0)),2&e&&b.ic("ngIf",!t.closed)},directives:[a.l,a.p],encapsulation:2}),t}(),S=function(){var t=function(){return n(function t(n,i){e(this,t),this.el=n,this.cd=i,this.orientation="top",this.onChange=new b.n,this.onClose=new b.n,this.activeIndexChange=new b.n},[{key:"ngAfterContentInit",value:function(){var e=this;this.initTabs(),this.tabPanels.changes.subscribe(function(t){e.initTabs()})}},{key:"ngAfterViewChecked",value:function(){this.tabChanged&&(this.updateInkBar(),this.tabChanged=!1)}},{key:"initTabs",value:function(){this.tabs=this.tabPanels.toArray(),!this.findSelectedTab()&&this.tabs.length&&(null!=this.activeIndex&&this.tabs.length>this.activeIndex?this.tabs[this.activeIndex].selected=!0:this.tabs[0].selected=!0,this.tabChanged=!0),this.cd.markForCheck()}},{key:"open",value:function(e,t){if(t.disabled)e&&e.preventDefault();else{if(!t.selected){var n=this.findSelectedTab();n&&(n.selected=!1),this.tabChanged=!0,t.selected=!0;var i=this.findTabIndex(t);this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(i),this.onChange.emit({originalEvent:e,index:i})}e&&e.preventDefault()}}},{key:"close",value:function(e,t){var n=this;this.controlClose?this.onClose.emit({originalEvent:e,index:this.findTabIndex(t),close:function(){n.closeTab(t)}}):(this.closeTab(t),this.onClose.emit({originalEvent:e,index:this.findTabIndex(t)})),e.stopPropagation()}},{key:"closeTab",value:function(e){if(!e.disabled){if(e.selected){this.tabChanged=!0,e.selected=!1;for(var t=0;t<this.tabs.length;t++){var n=this.tabs[t];if(!n.closed&&!e.disabled){n.selected=!0;break}}}e.closed=!0}}},{key:"findSelectedTab",value:function(){for(var e=0;e<this.tabs.length;e++)if(this.tabs[e].selected)return this.tabs[e];return null}},{key:"findTabIndex",value:function(e){for(var t=-1,n=0;n<this.tabs.length;n++)if(this.tabs[n]==e){t=n;break}return t}},{key:"getBlockableElement",value:function(){return this.el.nativeElement.children[0]}},{key:"activeIndex",get:function(){return this._activeIndex},set:function(e){this._activeIndex=e,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.tabs&&this.tabs.length&&null!=this._activeIndex&&this.tabs.length>this._activeIndex&&(this.findSelectedTab().selected=!1,this.tabs[this._activeIndex].selected=!0,this.tabChanged=!0)}},{key:"updateInkBar",value:function(){var e=r.b.findSingle(this.navbar.nativeElement,"li.p-highlight");this.inkbar.nativeElement.style.width=r.b.getWidth(e)+"px",this.inkbar.nativeElement.style.left=r.b.getOffset(e).left-r.b.getOffset(this.navbar.nativeElement).left+"px"}}])}();return t.\u0275fac=function(e){return new(e||t)(b.Jb(b.l),b.Jb(b.h))},t.\u0275cmp=b.Db({type:t,selectors:[["p-tabView"]],contentQueries:function(e,t,n){var i;(1&e&&b.Cb(n,M,!1),2&e)&&(b.tc(i=b.Zb())&&(t.tabPanels=i))},viewQuery:function(e,t){var n;(1&e&&(b.Jc(P,!0),b.Jc(v,!0)),2&e)&&(b.tc(n=b.Zb())&&(t.navbar=n.first),b.tc(n=b.Zb())&&(t.inkbar=n.first))},inputs:{orientation:"orientation",style:"style",styleClass:"styleClass",controlClose:"controlClose",activeIndex:"activeIndex"},outputs:{onChange:"onChange",onClose:"onClose",activeIndexChange:"activeIndexChange"},ngContentSelectors:g,decls:8,vars:5,consts:[[3,"ngClass","ngStyle"],["role","tablist",1,"p-tabview-nav"],["navbar",""],["ngFor","",3,"ngForOf"],[1,"p-tabview-ink-bar"],["inkbar",""],[1,"p-tabview-panels"],["role","presentation",3,"ngClass","ngStyle","class",4,"ngIf"],["role","presentation",3,"ngClass","ngStyle"],["role","tab","pRipple","",1,"p-tabview-nav-link",3,"pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","click","keydown.enter"],[4,"ngIf"],[4,"ngTemplateOutlet"],["class","p-tabview-close pi pi-times",3,"click",4,"ngIf"],["class","p-tabview-left-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-title"],["class","p-tabview-right-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-left-icon",3,"ngClass"],[1,"p-tabview-right-icon",3,"ngClass"],[1,"p-tabview-close","pi","pi-times",3,"click"]],template:function(e,t){1&e&&(b.hc(),b.Qb(0,"div",0),b.Qb(1,"ul",1,2),b.Cc(3,w,1,1,"ng-template",3),b.Lb(4,"li",4,5),b.Pb(),b.Qb(6,"div",6),b.gc(7),b.Pb(),b.Pb()),2&e&&(b.zb(t.styleClass),b.ic("ngClass","p-tabview p-component")("ngStyle",t.style),b.xb(3),b.ic("ngForOf",t.tabs))},directives:[a.j,a.m,a.k,a.l,d.a,h.a,a.p],styles:[".p-tabview-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:wrap}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"],encapsulation:2,changeDetection:0}),t}(),T=function(){var t=n(function t(){e(this,t)});return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},imports:[[a.b,s.m,o.a,l.a],s.m]}),t}()},OXhD:function(t,i,c){"use strict";c.d(i,"a",function(){return s}),c.d(i,"b",function(){return r});var b=c("ofXK"),a=c("fXoL"),o=["code"],l=["*"],s=function(){var t=function(){return n(function t(n){e(this,t),this.el=n,this.lang="markup"},[{key:"ngAfterViewInit",value:function(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}])}();return t.\u0275fac=function(e){return new(e||t)(a.Jb(a.l))},t.\u0275cmp=a.Db({type:t,selectors:[["app-code"]],viewQuery:function(e,t){var n;(1&e&&a.Jc(o,!0),2&e)&&(a.tc(n=a.Zb())&&(t.codeViewChild=n.first))},inputs:{lang:"lang"},ngContentSelectors:l,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(e,t){1&e&&(a.hc(),a.Qb(0,"pre",0),a.Qb(1,"code",null,1),a.gc(3),a.Ec(4,"\n"),a.Pb(),a.Pb()),2&e&&a.ic("ngClass","language-"+t.lang)},directives:[b.j],encapsulation:2}),t}(),r=function(){var t=n(function t(){e(this,t)});return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[b.b]]}),t}()},faTn:function(e,t,n){"use strict";var i=n("+jnZ");n.d(t,"a",function(){return i.c})},qzbO:function(t,i,c){"use strict";c.r(i),c.d(i,"CheckboxDemoModule",function(){return x});var b=c("ofXK"),a=c("3Pt+"),o=c("tyNb"),l=c("fXoL"),s=c("K+Em"),r=c("46gc"),d=c("+jnZ"),h=c("OXhD"),p=c("Qx9H");function u(e,t){if(1&e){var n=l.Sb();l.Qb(0,"div",5),l.Qb(1,"p-checkbox",30),l.Yb("ngModelChange",function(e){return l.vc(n),l.cc().selectedCategories=e}),l.Pb(),l.Qb(2,"label",31),l.Ec(3),l.Pb(),l.Pb()}if(2&e){var i=t.$implicit,c=l.cc();l.xb(1),l.ic("value",i)("ngModel",c.selectedCategories)("inputId",i.key)("disabled","R"===i.key),l.xb(1),l.ic("for",i.key),l.xb(1),l.Fc(i.name)}}function f(e,t){1&e&&l.Lb(0,"iframe",32)}var g,P,v,Q=function(){return["/theming"]},m=((P=function(){return n(function t(){e(this,t),this.selectedCities=[],this.selectedCategories=["Technology","Sports"],this.categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],this.checked=!1},[{key:"ngOnInit",value:function(){this.selectedCategories=this.categories.slice(1,3)}}])}()).\u0275fac=function(e){return new(e||P)},P.\u0275cmp=l.Db({type:P,selectors:[["ng-component"]],decls:340,vars:9,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","checkbox","stackblitz","checkbox-demo"],[1,"content-section","implementation"],[1,"card"],[1,"p-field-checkbox"],["binary","true","inputId","binary",3,"ngModel","ngModelChange"],["for","binary"],["name","group1","value","New York","inputId","ny",3,"ngModel","ngModelChange"],["for","ny"],["name","group1","value","San Francisco","inputId","sf",3,"ngModel","ngModelChange"],["for","sf"],["name","group1","value","Los Angeles","inputId","la",3,"ngModel","ngModelChange"],["for","la"],["name","group1","value","Chicago","inputId","ch",3,"ngModel","ngModelChange"],["for","ch"],["class","p-field-checkbox",4,"ngFor","ngForOf"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],["href","https://github.com/angular/angular/issues/17685"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/checkbox","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-checkbox-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["name","group2","value","category",3,"value","ngModel","inputId","disabled","ngModelChange"],[3,"for"],["src",l.Ic("https://stackblitz.com/edit/primeng-checkbox-demo?embed=1"),2,"width","100%","height","768px","border","none"]],template:function(e,t){1&e&&(l.Qb(0,"div",0),l.Qb(1,"div",1),l.Qb(2,"h1"),l.Ec(3,"Checkbox"),l.Pb(),l.Qb(4,"p"),l.Ec(5,"Checkbox is an extension to standard checkbox element with theming."),l.Pb(),l.Pb(),l.Lb(6,"app-demoActions",2),l.Pb(),l.Qb(7,"div",3),l.Qb(8,"div",4),l.Qb(9,"h5"),l.Ec(10,"Basic"),l.Pb(),l.Qb(11,"div",5),l.Qb(12,"p-checkbox",6),l.Yb("ngModelChange",function(e){return t.checked=e}),l.Pb(),l.Qb(13,"label",7),l.Ec(14),l.Pb(),l.Pb(),l.Qb(15,"h5"),l.Ec(16,"Multiple"),l.Pb(),l.Qb(17,"div",5),l.Qb(18,"p-checkbox",8),l.Yb("ngModelChange",function(e){return t.selectedCities=e}),l.Pb(),l.Qb(19,"label",9),l.Ec(20,"New York"),l.Pb(),l.Pb(),l.Qb(21,"div",5),l.Qb(22,"p-checkbox",10),l.Yb("ngModelChange",function(e){return t.selectedCities=e}),l.Pb(),l.Qb(23,"label",11),l.Ec(24,"San Francisco"),l.Pb(),l.Pb(),l.Qb(25,"div",5),l.Qb(26,"p-checkbox",12),l.Yb("ngModelChange",function(e){return t.selectedCities=e}),l.Pb(),l.Qb(27,"label",13),l.Ec(28,"Los Angeles"),l.Pb(),l.Pb(),l.Qb(29,"div",5),l.Qb(30,"p-checkbox",14),l.Yb("ngModelChange",function(e){return t.selectedCities=e}),l.Pb(),l.Qb(31,"label",15),l.Ec(32,"Chicago"),l.Pb(),l.Pb(),l.Qb(33,"h5"),l.Ec(34,"Dynamic Values, Preselection, Value Binding and Disabled Option"),l.Pb(),l.Cc(35,u,4,6,"div",16),l.Pb(),l.Pb(),l.Qb(36,"div",17),l.Qb(37,"p-tabView"),l.Qb(38,"p-tabPanel",18),l.Qb(39,"h5"),l.Ec(40,"Import"),l.Pb(),l.Qb(41,"app-code",19),l.Kb(),l.Ec(42,"\nimport {CheckboxModule} from 'primeng/checkbox';\n"),l.Rb(),l.Pb(),l.Qb(43,"h5"),l.Ec(44,"Getting Started"),l.Pb(),l.Qb(45,"p"),l.Ec(46,"Checkbox can either be used in multiple selection with other checkboxes or as a single checkbox to provide a boolean value."),l.Pb(),l.Qb(47,"h4"),l.Ec(48,"Multiple Values"),l.Pb(),l.Qb(49,"p"),l.Ec(50,"Multiple mode is enabled by default, ngModel property refers to an array to bind the selected values."),l.Pb(),l.Qb(51,"app-code",20),l.Kb(),l.Ec(52,'\n<p-checkbox name="groupname" value="val1" [(ngModel)]="selectedValues"></p-checkbox>\n<p-checkbox name="groupname" value="val2" [(ngModel)]="selectedValues"></p-checkbox>\n'),l.Rb(),l.Pb(),l.Qb(53,"app-code",19),l.Kb(),l.Ec(54,"\nexport class ModelComponent {\n\n    selectedValues: string[] = [];\n\n}\n"),l.Rb(),l.Pb(),l.Qb(55,"p"),l.Ec(56,"As ngModel is two-way binding enabled, prepopulating the model array with values is enough to display the related checkboxes as checked by default."),l.Pb(),l.Qb(57,"app-code",19),l.Kb(),l.Ec(58,"\nexport class ModelComponent {\n\n    selectedValues: string[] = ['val1','val2'];\n\n}\n"),l.Rb(),l.Pb(),l.Qb(59,"h4"),l.Ec(60,"Label"),l.Pb(),l.Qb(61,"p"),l.Ec(62,"The label attribute provides a label text for the checkbox. This label is also clickable and toggles the checked state."),l.Pb(),l.Qb(63,"app-code",20),l.Kb(),l.Ec(64,'\n<p-checkbox name="groupname" value="val1" label="Value 1" [(ngModel)]="selectedValues"></p-checkbox>\n<p-checkbox name="groupname" value="val2" label="Value 2" [(ngModel)]="selectedValues"></p-checkbox>\n'),l.Rb(),l.Pb(),l.Qb(65,"h4"),l.Ec(66,"Boolean Value"),l.Pb(),l.Qb(67,"p"),l.Ec(68,"A single boolean value can be bound using the ngModel property as well by enabling the binary option."),l.Pb(),l.Qb(69,"app-code",19),l.Kb(),l.Ec(70,"\nexport class ModelComponent {\n\n    value: boolean;\n\n}\n"),l.Rb(),l.Pb(),l.Qb(71,"app-code",20),l.Kb(),l.Ec(72,'\n<p-checkbox [(ngModel)]="value" [binary]="true"></p-checkbox>\n'),l.Rb(),l.Pb(),l.Qb(73,"h5"),l.Ec(74,"Model Driven Forms"),l.Pb(),l.Qb(75,"p"),l.Ec(76,"Checkbox can be used in a model driven form as well. In this case, due to an "),l.Qb(77,"a",21),l.Ec(78,"issue"),l.Pb(),l.Ec(79," in Angular bind the formControl instance instead of using formControlName."),l.Pb(),l.Qb(80,"app-code",20),l.Kb(),l.Ec(81,'\n\x3c!-- Wrong --\x3e\n<p-checkbox formControlName="cities"></p-checkbox>\n\n\x3c!-- Correct --\x3e\n<p-checkbox [formControl]="myFormGroup.controls[\'cities\']"></p-checkbox>\n'),l.Rb(),l.Pb(),l.Qb(82,"h5"),l.Ec(83,"Properties"),l.Pb(),l.Qb(84,"div",22),l.Qb(85,"table",23),l.Qb(86,"thead"),l.Qb(87,"tr"),l.Qb(88,"th"),l.Ec(89,"Name"),l.Pb(),l.Qb(90,"th"),l.Ec(91,"Type"),l.Pb(),l.Qb(92,"th"),l.Ec(93,"Default"),l.Pb(),l.Qb(94,"th"),l.Ec(95,"Description"),l.Pb(),l.Pb(),l.Pb(),l.Qb(96,"tbody"),l.Qb(97,"tr"),l.Qb(98,"td"),l.Ec(99,"name"),l.Pb(),l.Qb(100,"td"),l.Ec(101,"string"),l.Pb(),l.Qb(102,"td"),l.Ec(103,"null"),l.Pb(),l.Qb(104,"td"),l.Ec(105,"Name of the checkbox group."),l.Pb(),l.Pb(),l.Qb(106,"tr"),l.Qb(107,"td"),l.Ec(108,"value"),l.Pb(),l.Qb(109,"td"),l.Ec(110,"any"),l.Pb(),l.Qb(111,"td"),l.Ec(112,"null"),l.Pb(),l.Qb(113,"td"),l.Ec(114,"Value of the checkbox."),l.Pb(),l.Pb(),l.Qb(115,"tr"),l.Qb(116,"td"),l.Ec(117,"label"),l.Pb(),l.Qb(118,"td"),l.Ec(119,"string"),l.Pb(),l.Qb(120,"td"),l.Ec(121,"null"),l.Pb(),l.Qb(122,"td"),l.Ec(123,"Label of the checkbox."),l.Pb(),l.Pb(),l.Qb(124,"tr"),l.Qb(125,"td"),l.Ec(126,"disabled"),l.Pb(),l.Qb(127,"td"),l.Ec(128,"boolean"),l.Pb(),l.Qb(129,"td"),l.Ec(130,"false"),l.Pb(),l.Qb(131,"td"),l.Ec(132,"When present, it specifies that the element should be disabled."),l.Pb(),l.Pb(),l.Qb(133,"tr"),l.Qb(134,"td"),l.Ec(135,"binary"),l.Pb(),l.Qb(136,"td"),l.Ec(137,"boolean"),l.Pb(),l.Qb(138,"td"),l.Ec(139,"false"),l.Pb(),l.Qb(140,"td"),l.Ec(141,"Allows to select a boolean value instead of multiple values."),l.Pb(),l.Pb(),l.Qb(142,"tr"),l.Qb(143,"td"),l.Ec(144,"tabindex"),l.Pb(),l.Qb(145,"td"),l.Ec(146,"number"),l.Pb(),l.Qb(147,"td"),l.Ec(148,"null"),l.Pb(),l.Qb(149,"td"),l.Ec(150,"Index of the element in tabbing order."),l.Pb(),l.Pb(),l.Qb(151,"tr"),l.Qb(152,"td"),l.Ec(153,"inputId"),l.Pb(),l.Qb(154,"td"),l.Ec(155,"string"),l.Pb(),l.Qb(156,"td"),l.Ec(157,"null"),l.Pb(),l.Qb(158,"td"),l.Ec(159,"Identifier of the focus input to match a label defined for the component."),l.Pb(),l.Pb(),l.Qb(160,"tr"),l.Qb(161,"td"),l.Ec(162,"ariaLabelledBy"),l.Pb(),l.Qb(163,"td"),l.Ec(164,"string"),l.Pb(),l.Qb(165,"td"),l.Ec(166,"null"),l.Pb(),l.Qb(167,"td"),l.Ec(168,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),l.Pb(),l.Pb(),l.Qb(169,"tr"),l.Qb(170,"td"),l.Ec(171,"ariaLabel"),l.Pb(),l.Qb(172,"td"),l.Ec(173,"string"),l.Pb(),l.Qb(174,"td"),l.Ec(175,"null"),l.Pb(),l.Qb(176,"td"),l.Ec(177,"Used to define a string that labels the input element."),l.Pb(),l.Pb(),l.Qb(178,"tr"),l.Qb(179,"td"),l.Ec(180,"style"),l.Pb(),l.Qb(181,"td"),l.Ec(182,"object"),l.Pb(),l.Qb(183,"td"),l.Ec(184,"null"),l.Pb(),l.Qb(185,"td"),l.Ec(186,"Inline style of the component."),l.Pb(),l.Pb(),l.Qb(187,"tr"),l.Qb(188,"td"),l.Ec(189,"styleClass"),l.Pb(),l.Qb(190,"td"),l.Ec(191,"string"),l.Pb(),l.Qb(192,"td"),l.Ec(193,"null"),l.Pb(),l.Qb(194,"td"),l.Ec(195,"Style class of the component."),l.Pb(),l.Pb(),l.Qb(196,"tr"),l.Qb(197,"td"),l.Ec(198,"labelStyleClass"),l.Pb(),l.Qb(199,"td"),l.Ec(200,"string"),l.Pb(),l.Qb(201,"td"),l.Ec(202,"null"),l.Pb(),l.Qb(203,"td"),l.Ec(204,"Style class of the label."),l.Pb(),l.Pb(),l.Qb(205,"tr"),l.Qb(206,"td"),l.Ec(207,"checkboxIcon"),l.Pb(),l.Qb(208,"td"),l.Ec(209,"string"),l.Pb(),l.Qb(210,"td"),l.Ec(211,"pi pi-check"),l.Pb(),l.Qb(212,"td"),l.Ec(213,"Icon class of the checkbox icon."),l.Pb(),l.Pb(),l.Qb(214,"tr"),l.Qb(215,"td"),l.Ec(216,"readonly"),l.Pb(),l.Qb(217,"td"),l.Ec(218,"boolean"),l.Pb(),l.Qb(219,"td"),l.Ec(220,"false"),l.Pb(),l.Qb(221,"td"),l.Ec(222,"When present, it specifies that the component cannot be edited."),l.Pb(),l.Pb(),l.Qb(223,"tr"),l.Qb(224,"td"),l.Ec(225,"required"),l.Pb(),l.Qb(226,"td"),l.Ec(227,"boolean"),l.Pb(),l.Qb(228,"td"),l.Ec(229,"false"),l.Pb(),l.Qb(230,"td"),l.Ec(231,"When present, it specifies that checkbox must be checked before submitting the form."),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(232,"h5"),l.Ec(233,"Events"),l.Pb(),l.Qb(234,"div",22),l.Qb(235,"table",23),l.Qb(236,"thead"),l.Qb(237,"tr"),l.Qb(238,"th"),l.Ec(239,"Name"),l.Pb(),l.Qb(240,"th"),l.Ec(241,"Parameters"),l.Pb(),l.Qb(242,"th"),l.Ec(243,"Description"),l.Pb(),l.Pb(),l.Pb(),l.Qb(244,"tbody"),l.Qb(245,"tr"),l.Qb(246,"td"),l.Ec(247,"onChange"),l.Pb(),l.Qb(248,"td"),l.Ec(249," checked: Boolean value to represent new state of checkbox. originalEvent: Browser event "),l.Pb(),l.Qb(250,"td"),l.Ec(251,"Callback to invoke on checkbox click."),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(252,"h5"),l.Ec(253,"Methods"),l.Pb(),l.Qb(254,"div",22),l.Qb(255,"table",23),l.Qb(256,"thead"),l.Qb(257,"tr"),l.Qb(258,"th"),l.Ec(259,"Name"),l.Pb(),l.Qb(260,"th"),l.Ec(261,"Parameters"),l.Pb(),l.Qb(262,"th"),l.Ec(263,"Description"),l.Pb(),l.Pb(),l.Pb(),l.Qb(264,"tbody"),l.Qb(265,"tr"),l.Qb(266,"td"),l.Ec(267,"focus"),l.Pb(),l.Qb(268,"td"),l.Ec(269,"-"),l.Pb(),l.Qb(270,"td"),l.Ec(271,"Applies focus."),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(272,"h5"),l.Ec(273,"Styling"),l.Pb(),l.Qb(274,"p"),l.Ec(275,"Following is the list of structural style classes, for theming classes visit "),l.Qb(276,"a",24),l.Ec(277,"theming page"),l.Pb(),l.Ec(278,"."),l.Pb(),l.Qb(279,"div",22),l.Qb(280,"table",23),l.Qb(281,"thead"),l.Qb(282,"tr"),l.Qb(283,"th"),l.Ec(284,"Name"),l.Pb(),l.Qb(285,"th"),l.Ec(286,"Element"),l.Pb(),l.Pb(),l.Pb(),l.Qb(287,"tbody"),l.Qb(288,"tr"),l.Qb(289,"td"),l.Ec(290,"p-chkbox"),l.Pb(),l.Qb(291,"td"),l.Ec(292,"Container element"),l.Pb(),l.Pb(),l.Qb(293,"tr"),l.Qb(294,"td"),l.Ec(295,"p-chkbox-box"),l.Pb(),l.Qb(296,"td"),l.Ec(297,"Container of icon."),l.Pb(),l.Pb(),l.Qb(298,"tr"),l.Qb(299,"td"),l.Ec(300,"p-chkbox-icon"),l.Pb(),l.Qb(301,"td"),l.Ec(302,"Icon element."),l.Pb(),l.Pb(),l.Qb(303,"tr"),l.Qb(304,"td"),l.Ec(305,"p-chkbox-label"),l.Pb(),l.Qb(306,"td"),l.Ec(307,"Label element."),l.Pb(),l.Pb(),l.Qb(308,"tr"),l.Qb(309,"td"),l.Ec(310,"p-label-active"),l.Pb(),l.Qb(311,"td"),l.Ec(312,"Label element of a checked state."),l.Pb(),l.Pb(),l.Qb(313,"tr"),l.Qb(314,"td"),l.Ec(315,"p-label-focus"),l.Pb(),l.Qb(316,"td"),l.Ec(317,"Label element of a focused state."),l.Pb(),l.Pb(),l.Qb(318,"tr"),l.Qb(319,"td"),l.Ec(320,"p-label-disabled"),l.Pb(),l.Qb(321,"td"),l.Ec(322,"Label element of a disabled state."),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(323,"h5"),l.Ec(324,"Dependencies"),l.Pb(),l.Qb(325,"p"),l.Ec(326,"None."),l.Pb(),l.Pb(),l.Qb(327,"p-tabPanel",25),l.Qb(328,"a",26),l.Qb(329,"span"),l.Ec(330,"View on GitHub"),l.Pb(),l.Pb(),l.Qb(331,"a",27),l.Qb(332,"span"),l.Ec(333,"Edit in StackBlitz"),l.Pb(),l.Pb(),l.Qb(334,"app-code",20),l.Kb(),l.Ec(335,'\n<h5>Basic</h5>\n<div class="p-field-checkbox">\n    <p-checkbox [(ngModel)]="checked" binary="true" inputId="binary"></p-checkbox>\n    <label for="binary">{{checked}}</label>\n</div>\n<h5>Multiple</h5>\n<div class="p-field-checkbox">\n    <p-checkbox name="group1" value="New York" [(ngModel)]="selectedCities" inputId="ny"></p-checkbox>\n    <label for="ny">New York</label>\n</div>\n<div class="p-field-checkbox">\n    <p-checkbox name="group1" value="San Francisco" [(ngModel)]="selectedCities" inputId="sf"></p-checkbox>\n    <label for="sf">San Francisco</label>\n</div>\n<div class="p-field-checkbox">\n    <p-checkbox name="group1" value="Los Angeles" [(ngModel)]="selectedCities" inputId="la"></p-checkbox>\n    <label for="la">Los Angeles</label>\n</div>\n<div class="p-field-checkbox">\n    <p-checkbox name="group1" value="Chicago" [(ngModel)]="selectedCities" inputId="ch"></p-checkbox>\n    <label for="ch">Chicago</label>\n</div>\n\n<h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>\n<div *ngFor="let category of categories" class="p-field-checkbox">\n    <p-checkbox name="group2" value="category" [value]="category"  [(ngModel)]="selectedCategories" [inputId]="category.key" [disabled]="category.key === \'R\'"></p-checkbox>\n    <label [for]="category.key">{{category.name}}</label>\n</div>\n'),l.Rb(),l.Pb(),l.Qb(336,"app-code",19),l.Kb(),l.Ec(337,"\nexport class CheckboxDemo {\n\n    selectedCities: string[] = [];\n\n    selectedCategories: any[] = ['Technology', 'Sports'];\n\n    categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];\n\n    checked: boolean = false;\n\n    ngOnInit() {\n        this.selectedCategories = this.categories.slice(1,3);\n    }\n}\n"),l.Rb(),l.Pb(),l.Pb(),l.Qb(338,"p-tabPanel",28),l.Cc(339,f,1,0,"ng-template",29),l.Pb(),l.Pb(),l.Pb()),2&e&&(l.xb(12),l.ic("ngModel",t.checked),l.xb(2),l.Fc(t.checked),l.xb(4),l.ic("ngModel",t.selectedCities),l.xb(4),l.ic("ngModel",t.selectedCities),l.xb(4),l.ic("ngModel",t.selectedCities),l.xb(4),l.ic("ngModel",t.selectedCities),l.xb(5),l.ic("ngForOf",t.categories),l.xb(241),l.ic("routerLink",l.kc(8,Q)))},directives:[s.a,r.a,a.f,a.i,b.k,d.b,d.a,h.a,o.f,p.c],encapsulation:2}),P),k=((g=n(function t(){e(this,t)})).\u0275mod=l.Hb({type:g}),g.\u0275inj=l.Gb({factory:function(e){return new(e||g)},imports:[[o.g.forChild([{path:"",component:m}])],o.g]}),g),y=c("yxpR"),E=c("faTn"),x=((v=n(function t(){e(this,t)})).\u0275mod=l.Hb({type:v}),v.\u0275inj=l.Gb({factory:function(e){return new(e||v)},imports:[[b.b,a.b,k,y.a,s.b,E.a,h.b]]}),v)}}])}();