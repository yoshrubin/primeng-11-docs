!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,i(a.key),a)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"+jnZ":function(t,i,a){"use strict";a.d(i,"a",function(){return S}),a.d(i,"b",function(){return T}),a.d(i,"c",function(){return M});var o=a("fXoL"),c=a("ofXK"),l=a("EA8a"),b=a("FmH6"),s=a("ByAP"),r=a("/5fT"),p=a("kGCj"),d=a("4t6f");function u(e,t){1&e&&o.Mb(0)}function f(e,t){if(1&e&&(o.Ob(0),o.Cc(1,u,1,0,"ng-container",3),o.Nb()),2&e){var n=o.cc(2);o.xb(1),o.ic("ngTemplateOutlet",n.contentTemplate)}}function h(e,t){if(1&e&&(o.Qb(0,"div",1),o.gc(1),o.Cc(2,f,2,1,"ng-container",2),o.Pb()),2&e){var n=o.cc();o.ic("hidden",!n.selected),o.yb("id",n.id)("aria-hidden",!n.selected)("aria-labelledby",n.id+"-label"),o.xb(2),o.ic("ngIf",n.contentTemplate&&(n.cache?n.loaded:n.selected))}}var m=["*"],g=["navbar"],P=["inkbar"];function v(e,t){if(1&e&&o.Lb(0,"span",16),2&e){var n=o.cc(3).$implicit;o.ic("ngClass",n.leftIcon)}}function Q(e,t){if(1&e&&o.Lb(0,"span",17),2&e){var n=o.cc(3).$implicit;o.ic("ngClass",n.rightIcon)}}function w(e,t){if(1&e&&(o.Ob(0),o.Cc(1,v,1,1,"span",13),o.Qb(2,"span",14),o.Ec(3),o.Pb(),o.Cc(4,Q,1,1,"span",15),o.Nb()),2&e){var n=o.cc(2).$implicit;o.xb(1),o.ic("ngIf",n.leftIcon),o.xb(2),o.Fc(n.header),o.xb(1),o.ic("ngIf",n.rightIcon)}}function E(e,t){1&e&&o.Mb(0)}function y(e,t){if(1&e){var n=o.Sb();o.Qb(0,"span",18),o.Yb("click",function(e){o.vc(n);var t=o.cc(2).$implicit;return o.cc().close(e,t)}),o.Pb()}}var k=function(e,t){return{"p-highlight":e,"p-disabled":t}};function C(e,t){if(1&e){var n=o.Sb();o.Qb(0,"li",8),o.Qb(1,"a",9),o.Yb("click",function(e){o.vc(n);var t=o.cc().$implicit;return o.cc().open(e,t)})("keydown.enter",function(e){o.vc(n);var t=o.cc().$implicit;return o.cc().open(e,t)}),o.Cc(2,w,5,3,"ng-container",10),o.Cc(3,E,1,0,"ng-container",11),o.Cc(4,y,1,0,"span",12),o.Pb(),o.Pb()}if(2&e){var i=o.cc().$implicit;o.zb(i.headerStyleClass),o.ic("ngClass",o.mc(16,k,i.selected,i.disabled))("ngStyle",i.headerStyle),o.xb(1),o.ic("pTooltip",i.tooltip)("tooltipPosition",i.tooltipPosition)("positionStyle",i.tooltipPositionStyle)("tooltipStyleClass",i.tooltipStyleClass),o.yb("id",i.id+"-label")("aria-selected",i.selected)("aria-controls",i.id)("aria-selected",i.selected)("tabindex",i.disabled?null:"0"),o.xb(1),o.ic("ngIf",!i.headerTemplate),o.xb(1),o.ic("ngTemplateOutlet",i.headerTemplate),o.xb(1),o.ic("ngIf",i.closable)}}function x(e,t){1&e&&o.Cc(0,C,5,19,"li",7),2&e&&o.ic("ngIf",!t.$implicit.closed)}var I=0,S=function(){var t=function(){return n(function t(n,i,a){e(this,t),this.viewContainer=i,this.cd=a,this.cache=!0,this.tooltipPosition="top",this.tooltipPositionStyle="absolute",this.id="p-tabpanel-"+I++,this.tabView=n},[{key:"ngAfterContentInit",value:function(){var e=this;this.templates.forEach(function(t){switch(t.getType()){case"header":e.headerTemplate=t.template;break;case"content":default:e.contentTemplate=t.template}})}},{key:"selected",get:function(){return this._selected},set:function(e){this._selected=e,this.loaded||this.cd.detectChanges(),e&&(this.loaded=!0)}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=e,this.tabView.cd.markForCheck()}},{key:"header",get:function(){return this._header},set:function(e){this._header=e,this.tabView.cd.markForCheck()}},{key:"leftIcon",get:function(){return this._leftIcon},set:function(e){this._leftIcon=e,this.tabView.cd.markForCheck()}},{key:"rightIcon",get:function(){return this._rightIcon},set:function(e){this._rightIcon=e,this.tabView.cd.markForCheck()}},{key:"ngOnDestroy",value:function(){this.view=null}}])}();return t.\u0275fac=function(e){return new(e||t)(o.Jb(Object(o.S)(function(){return T})),o.Jb(o.O),o.Jb(o.h))},t.\u0275cmp=o.Db({type:t,selectors:[["p-tabPanel"]],contentQueries:function(e,t,n){var i;(1&e&&o.Cb(n,s.l,!1),2&e)&&(o.tc(i=o.Zb())&&(t.templates=i))},inputs:{closable:"closable",headerStyle:"headerStyle",headerStyleClass:"headerStyleClass",cache:"cache",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",selected:"selected",disabled:"disabled",header:"header",leftIcon:"leftIcon",rightIcon:"rightIcon"},ngContentSelectors:m,decls:1,vars:1,consts:[["class","p-tabview-panel","role","tabpanel",3,"hidden",4,"ngIf"],["role","tabpanel",1,"p-tabview-panel",3,"hidden"],[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(e,t){1&e&&(o.hc(),o.Cc(0,h,3,5,"div",0)),2&e&&o.ic("ngIf",!t.closed)},directives:[c.l,c.p],encapsulation:2}),t}(),T=function(){var t=function(){return n(function t(n,i){e(this,t),this.el=n,this.cd=i,this.orientation="top",this.onChange=new o.n,this.onClose=new o.n,this.activeIndexChange=new o.n},[{key:"ngAfterContentInit",value:function(){var e=this;this.initTabs(),this.tabPanels.changes.subscribe(function(t){e.initTabs()})}},{key:"ngAfterViewChecked",value:function(){this.tabChanged&&(this.updateInkBar(),this.tabChanged=!1)}},{key:"initTabs",value:function(){this.tabs=this.tabPanels.toArray(),!this.findSelectedTab()&&this.tabs.length&&(null!=this.activeIndex&&this.tabs.length>this.activeIndex?this.tabs[this.activeIndex].selected=!0:this.tabs[0].selected=!0,this.tabChanged=!0),this.cd.markForCheck()}},{key:"open",value:function(e,t){if(t.disabled)e&&e.preventDefault();else{if(!t.selected){var n=this.findSelectedTab();n&&(n.selected=!1),this.tabChanged=!0,t.selected=!0;var i=this.findTabIndex(t);this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(i),this.onChange.emit({originalEvent:e,index:i})}e&&e.preventDefault()}}},{key:"close",value:function(e,t){var n=this;this.controlClose?this.onClose.emit({originalEvent:e,index:this.findTabIndex(t),close:function(){n.closeTab(t)}}):(this.closeTab(t),this.onClose.emit({originalEvent:e,index:this.findTabIndex(t)})),e.stopPropagation()}},{key:"closeTab",value:function(e){if(!e.disabled){if(e.selected){this.tabChanged=!0,e.selected=!1;for(var t=0;t<this.tabs.length;t++){var n=this.tabs[t];if(!n.closed&&!e.disabled){n.selected=!0;break}}}e.closed=!0}}},{key:"findSelectedTab",value:function(){for(var e=0;e<this.tabs.length;e++)if(this.tabs[e].selected)return this.tabs[e];return null}},{key:"findTabIndex",value:function(e){for(var t=-1,n=0;n<this.tabs.length;n++)if(this.tabs[n]==e){t=n;break}return t}},{key:"getBlockableElement",value:function(){return this.el.nativeElement.children[0]}},{key:"activeIndex",get:function(){return this._activeIndex},set:function(e){this._activeIndex=e,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.tabs&&this.tabs.length&&null!=this._activeIndex&&this.tabs.length>this._activeIndex&&(this.findSelectedTab().selected=!1,this.tabs[this._activeIndex].selected=!0,this.tabChanged=!0)}},{key:"updateInkBar",value:function(){var e=r.b.findSingle(this.navbar.nativeElement,"li.p-highlight");this.inkbar.nativeElement.style.width=r.b.getWidth(e)+"px",this.inkbar.nativeElement.style.left=r.b.getOffset(e).left-r.b.getOffset(this.navbar.nativeElement).left+"px"}}])}();return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.l),o.Jb(o.h))},t.\u0275cmp=o.Db({type:t,selectors:[["p-tabView"]],contentQueries:function(e,t,n){var i;(1&e&&o.Cb(n,S,!1),2&e)&&(o.tc(i=o.Zb())&&(t.tabPanels=i))},viewQuery:function(e,t){var n;(1&e&&(o.Jc(g,!0),o.Jc(P,!0)),2&e)&&(o.tc(n=o.Zb())&&(t.navbar=n.first),o.tc(n=o.Zb())&&(t.inkbar=n.first))},inputs:{orientation:"orientation",style:"style",styleClass:"styleClass",controlClose:"controlClose",activeIndex:"activeIndex"},outputs:{onChange:"onChange",onClose:"onClose",activeIndexChange:"activeIndexChange"},ngContentSelectors:m,decls:8,vars:5,consts:[[3,"ngClass","ngStyle"],["role","tablist",1,"p-tabview-nav"],["navbar",""],["ngFor","",3,"ngForOf"],[1,"p-tabview-ink-bar"],["inkbar",""],[1,"p-tabview-panels"],["role","presentation",3,"ngClass","ngStyle","class",4,"ngIf"],["role","presentation",3,"ngClass","ngStyle"],["role","tab","pRipple","",1,"p-tabview-nav-link",3,"pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","click","keydown.enter"],[4,"ngIf"],[4,"ngTemplateOutlet"],["class","p-tabview-close pi pi-times",3,"click",4,"ngIf"],["class","p-tabview-left-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-title"],["class","p-tabview-right-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-left-icon",3,"ngClass"],[1,"p-tabview-right-icon",3,"ngClass"],[1,"p-tabview-close","pi","pi-times",3,"click"]],template:function(e,t){1&e&&(o.hc(),o.Qb(0,"div",0),o.Qb(1,"ul",1,2),o.Cc(3,x,1,1,"ng-template",3),o.Lb(4,"li",4,5),o.Pb(),o.Qb(6,"div",6),o.gc(7),o.Pb(),o.Pb()),2&e&&(o.zb(t.styleClass),o.ic("ngClass","p-tabview p-component")("ngStyle",t.style),o.xb(3),o.ic("ngForOf",t.tabs))},directives:[c.j,c.m,c.k,c.l,p.a,d.a,c.p],styles:[".p-tabview-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:wrap}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"],encapsulation:2,changeDetection:0}),t}(),M=function(){var t=n(function t(){e(this,t)});return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[c.b,s.m,l.a,b.a],s.m]}),t}()},OXhD:function(t,i,a){"use strict";a.d(i,"a",function(){return s}),a.d(i,"b",function(){return r});var o=a("ofXK"),c=a("fXoL"),l=["code"],b=["*"],s=function(){var t=function(){return n(function t(n){e(this,t),this.el=n,this.lang="markup"},[{key:"ngAfterViewInit",value:function(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}])}();return t.\u0275fac=function(e){return new(e||t)(c.Jb(c.l))},t.\u0275cmp=c.Db({type:t,selectors:[["app-code"]],viewQuery:function(e,t){var n;(1&e&&c.Jc(l,!0),2&e)&&(c.tc(n=c.Zb())&&(t.codeViewChild=n.first))},inputs:{lang:"lang"},ngContentSelectors:b,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(e,t){1&e&&(c.hc(),c.Qb(0,"pre",0),c.Qb(1,"code",null,1),c.gc(3),c.Ec(4,"\n"),c.Pb(),c.Pb()),2&e&&c.ic("ngClass","language-"+t.lang)},directives:[o.j],encapsulation:2}),t}(),r=function(){var t=n(function t(){e(this,t)});return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[o.b]]}),t}()},Xbls:function(t,i,a){"use strict";a.r(i),a.d(i,"ContextMenuDemoModule",function(){return y});var o=a("ofXK"),c=a("tyNb"),l=a("fXoL"),b=a("K+Em"),s=a("zMpg"),r=a("+jnZ"),p=a("OXhD"),d=a("Qx9H");function u(e,t){1&e&&l.Lb(0,"iframe",21)}var f,h,m,g=function(){return["/menumodel"]},P=function(){return["/theming"]},v=((h=function(){return n(function t(){e(this,t)},[{key:"ngOnInit",value:function(){this.items=[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}}])}()).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=l.Db({type:h,selectors:[["ng-component"]],decls:267,vars:6,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","contextmenu","stackblitz","contextmenu-demo"],[1,"content-section","implementation"],[1,"card"],["src","assets/showcase/images/demo/nature/nature3.jpg","alt","Logo","aria-haspopup","true"],["img",""],[3,"target","model"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],[3,"routerLink"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/contextmenu","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-contextmenu-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src",l.Ic("https://stackblitz.com/edit/primeng-contextmenu-demo?embed=1"),2,"width","100%","height","768px","border","none"]],template:function(e,t){if(1&e&&(l.Qb(0,"div",0),l.Qb(1,"div",1),l.Qb(2,"h1"),l.Ec(3,"ContextMenu"),l.Pb(),l.Qb(4,"p"),l.Ec(5,"ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the with context menu support."),l.Pb(),l.Pb(),l.Lb(6,"app-demoActions",2),l.Pb(),l.Qb(7,"div",3),l.Qb(8,"div",4),l.Lb(9,"img",5,6),l.Lb(11,"p-contextMenu",7),l.Pb(),l.Pb(),l.Qb(12,"div",8),l.Qb(13,"p-tabView"),l.Qb(14,"p-tabPanel",9),l.Qb(15,"h5"),l.Ec(16,"Import"),l.Pb(),l.Qb(17,"app-code",10),l.Kb(),l.Ec(18,"\nimport {ContextMenuModule} from 'primeng/contextmenu';\nimport {MenuItem} from 'primeng/api';\n"),l.Rb(),l.Pb(),l.Qb(19,"h5"),l.Ec(20,"MenuModel API"),l.Pb(),l.Qb(21,"p"),l.Ec(22,"ContextMenu uses the common menumodel api to define its items, visit "),l.Qb(23,"a",11),l.Ec(24,"MenuModel API"),l.Pb(),l.Ec(25," for details."),l.Pb(),l.Qb(26,"h5"),l.Ec(27,"Getting Started"),l.Pb(),l.Qb(28,"p"),l.Ec(29,"ContextMenu requires nested menuitems as its model and in its simplest form ContextMenu is attached to the document with global setting. ."),l.Pb(),l.Qb(30,"app-code",12),l.Kb(),l.Ec(31,'\n<p-contextMenu [global]="true" [model]="items"></p-contextMenu>\n'),l.Rb(),l.Pb(),l.Qb(32,"h5"),l.Ec(33,"Target"),l.Pb(),l.Qb(34,"p"),l.Ec(35,"ContextMenu can be attached to a particular element whose local template variable name is defined using the "),l.Qb(36,"i"),l.Ec(37,"target"),l.Pb(),l.Ec(38," property."),l.Pb(),l.Qb(39,"app-code",12),l.Kb(),l.Ec(40,'\n<p-contextMenu [target]="img" [model]="items2" ></p-contextMenu>\n\n<img #img src="assets/showcase/images/primeng.svg" alt="Logo">\n'),l.Rb(),l.Pb(),l.Qb(41,"h5"),l.Ec(42,"Exclusive Integrations"),l.Pb(),l.Qb(43,"p"),l.Ec(44,"Some components like Table require special attention so they provide a different method to attach a context menu. Refer to individual documentation of components with special integration like Table."),l.Pb(),l.Qb(45,"app-code",10),l.Kb(),l.Ec(46,"\nexport class ContextMenuDemo {\n\n    private items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [\n            {\n                label: 'File',\n                items: [{\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            {label: 'Project'},\n                            {label: 'Other'},\n                        ]\n                    },\n                    {label: 'Open'},\n                    {label: 'Quit'}\n                ]\n            },\n            {\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},\n                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}\n                ]\n            }\n        ];\n    }\n}\n"),l.Rb(),l.Pb(),l.Qb(47,"h5"),l.Ec(48,"Properties"),l.Pb(),l.Qb(49,"div",13),l.Qb(50,"table",14),l.Qb(51,"thead"),l.Qb(52,"tr"),l.Qb(53,"th"),l.Ec(54,"Name"),l.Pb(),l.Qb(55,"th"),l.Ec(56,"Type"),l.Pb(),l.Qb(57,"th"),l.Ec(58,"Default"),l.Pb(),l.Qb(59,"th"),l.Ec(60,"Description"),l.Pb(),l.Pb(),l.Pb(),l.Qb(61,"tbody"),l.Qb(62,"tr"),l.Qb(63,"td"),l.Ec(64,"model"),l.Pb(),l.Qb(65,"td"),l.Ec(66,"array"),l.Pb(),l.Qb(67,"td"),l.Ec(68,"null"),l.Pb(),l.Qb(69,"td"),l.Ec(70,"An array of menuitems."),l.Pb(),l.Pb(),l.Qb(71,"tr"),l.Qb(72,"td"),l.Ec(73,"global"),l.Pb(),l.Qb(74,"td"),l.Ec(75,"boolean"),l.Pb(),l.Qb(76,"td"),l.Ec(77,"false"),l.Pb(),l.Qb(78,"td"),l.Ec(79,"Attaches the menu to document instead of a particular item."),l.Pb(),l.Pb(),l.Qb(80,"tr"),l.Qb(81,"td"),l.Ec(82,"target"),l.Pb(),l.Qb(83,"td"),l.Ec(84,"string"),l.Pb(),l.Qb(85,"td"),l.Ec(86,"null"),l.Pb(),l.Qb(87,"td"),l.Ec(88,"Local template variable name of the element to attach the context menu."),l.Pb(),l.Pb(),l.Qb(89,"tr"),l.Qb(90,"td"),l.Ec(91,"style"),l.Pb(),l.Qb(92,"td"),l.Ec(93,"string"),l.Pb(),l.Qb(94,"td"),l.Ec(95,"null"),l.Pb(),l.Qb(96,"td"),l.Ec(97,"Inline style of the component."),l.Pb(),l.Pb(),l.Qb(98,"tr"),l.Qb(99,"td"),l.Ec(100,"styleClass"),l.Pb(),l.Qb(101,"td"),l.Ec(102,"string"),l.Pb(),l.Qb(103,"td"),l.Ec(104,"null"),l.Pb(),l.Qb(105,"td"),l.Ec(106,"Style class of the component."),l.Pb(),l.Pb(),l.Qb(107,"tr"),l.Qb(108,"td"),l.Ec(109,"appendTo"),l.Pb(),l.Qb(110,"td"),l.Ec(111,"any"),l.Pb(),l.Qb(112,"td"),l.Ec(113,"null"),l.Pb(),l.Qb(114,"td"),l.Ec(115,'Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).'),l.Pb(),l.Pb(),l.Qb(116,"tr"),l.Qb(117,"td"),l.Ec(118,"baseZIndex"),l.Pb(),l.Qb(119,"td"),l.Ec(120,"number"),l.Pb(),l.Qb(121,"td"),l.Ec(122,"0"),l.Pb(),l.Qb(123,"td"),l.Ec(124,"Base zIndex value to use in layering."),l.Pb(),l.Pb(),l.Qb(125,"tr"),l.Qb(126,"td"),l.Ec(127,"autoZIndex"),l.Pb(),l.Qb(128,"td"),l.Ec(129,"boolean"),l.Pb(),l.Qb(130,"td"),l.Ec(131,"true"),l.Pb(),l.Qb(132,"td"),l.Ec(133,"Whether to automatically manage layering."),l.Pb(),l.Pb(),l.Qb(134,"tr"),l.Qb(135,"td"),l.Ec(136,"triggerEvent"),l.Pb(),l.Qb(137,"td"),l.Ec(138,"string"),l.Pb(),l.Qb(139,"td"),l.Ec(140,"contextmenu"),l.Pb(),l.Qb(141,"td"),l.Ec(142,"Event for which the menu must be displayed."),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(143,"h5"),l.Ec(144,"Events"),l.Pb(),l.Qb(145,"div",13),l.Qb(146,"table",14),l.Qb(147,"thead"),l.Qb(148,"tr"),l.Qb(149,"th"),l.Ec(150,"Name"),l.Pb(),l.Qb(151,"th"),l.Ec(152,"Parameters"),l.Pb(),l.Qb(153,"th"),l.Ec(154,"Description"),l.Pb(),l.Pb(),l.Pb(),l.Qb(155,"tbody"),l.Qb(156,"tr"),l.Qb(157,"td"),l.Ec(158,"onShow"),l.Pb(),l.Qb(159,"td"),l.Ec(160,"-"),l.Pb(),l.Qb(161,"td"),l.Ec(162,"Callback to invoke when context menu is shown."),l.Pb(),l.Pb(),l.Qb(163,"tr"),l.Qb(164,"td"),l.Ec(165,"onHide"),l.Pb(),l.Qb(166,"td"),l.Ec(167,"-"),l.Pb(),l.Qb(168,"td"),l.Ec(169,"Callback to invoke when context menu is hidden."),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(170,"h5"),l.Ec(171,"Methods"),l.Pb(),l.Qb(172,"div",13),l.Qb(173,"table",14),l.Qb(174,"thead"),l.Qb(175,"tr"),l.Qb(176,"th"),l.Ec(177,"Name"),l.Pb(),l.Qb(178,"th"),l.Ec(179,"Parameters"),l.Pb(),l.Qb(180,"th"),l.Ec(181,"Description"),l.Pb(),l.Pb(),l.Pb(),l.Qb(182,"tbody"),l.Qb(183,"tr"),l.Qb(184,"td"),l.Ec(185,"toggle"),l.Pb(),l.Qb(186,"td"),l.Ec(187,"event (optional): mouse event"),l.Pb(),l.Qb(188,"td"),l.Ec(189,"Toggles the visibility of the popup menu."),l.Pb(),l.Pb(),l.Qb(190,"tr"),l.Qb(191,"td"),l.Ec(192,"show"),l.Pb(),l.Qb(193,"td"),l.Ec(194,"event: browser event"),l.Pb(),l.Qb(195,"td"),l.Ec(196,"Displays the popup menu."),l.Pb(),l.Pb(),l.Qb(197,"tr"),l.Qb(198,"td"),l.Ec(199,"hide"),l.Pb(),l.Qb(200,"td"),l.Ec(201,"-"),l.Pb(),l.Qb(202,"td"),l.Ec(203,"Hides the popup menu."),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(204,"h5"),l.Ec(205,"Styling"),l.Pb(),l.Qb(206,"p"),l.Ec(207,"Following is the list of structural style classes, for theming classes visit "),l.Qb(208,"a",15),l.Ec(209,"theming page"),l.Pb(),l.Ec(210,"."),l.Pb(),l.Qb(211,"div",13),l.Qb(212,"table",14),l.Qb(213,"thead"),l.Qb(214,"tr"),l.Qb(215,"th"),l.Ec(216,"Name"),l.Pb(),l.Qb(217,"th"),l.Ec(218,"Element"),l.Pb(),l.Pb(),l.Pb(),l.Qb(219,"tbody"),l.Qb(220,"tr"),l.Qb(221,"td"),l.Ec(222,"p-contextmenu"),l.Pb(),l.Qb(223,"td"),l.Ec(224,"Container element."),l.Pb(),l.Pb(),l.Qb(225,"tr"),l.Qb(226,"td"),l.Ec(227,"p-menu-list"),l.Pb(),l.Qb(228,"td"),l.Ec(229,"List element."),l.Pb(),l.Pb(),l.Qb(230,"tr"),l.Qb(231,"td"),l.Ec(232,"p-menuitem"),l.Pb(),l.Qb(233,"td"),l.Ec(234,"Menuitem element."),l.Pb(),l.Pb(),l.Qb(235,"tr"),l.Qb(236,"td"),l.Ec(237,"p-menuitem-text"),l.Pb(),l.Qb(238,"td"),l.Ec(239,"Label of a menuitem."),l.Pb(),l.Pb(),l.Qb(240,"tr"),l.Qb(241,"td"),l.Ec(242,"p-menuitem-icon"),l.Pb(),l.Qb(243,"td"),l.Ec(244,"Icon of a menuitem."),l.Pb(),l.Pb(),l.Qb(245,"tr"),l.Qb(246,"td"),l.Ec(247,"p-submenu-icon"),l.Pb(),l.Qb(248,"td"),l.Ec(249,"Arrow icon of a submenu."),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(250,"h5"),l.Ec(251,"Dependencies"),l.Pb(),l.Qb(252,"p"),l.Ec(253,"None."),l.Pb(),l.Pb(),l.Qb(254,"p-tabPanel",16),l.Qb(255,"a",17),l.Qb(256,"span"),l.Ec(257,"View on GitHub"),l.Pb(),l.Pb(),l.Qb(258,"a",18),l.Qb(259,"span"),l.Ec(260,"Edit in StackBlitz"),l.Pb(),l.Pb(),l.Qb(261,"app-code",12),l.Kb(),l.Ec(262,'\n<img #img src="assets/showcase/images/demo/nature/nature3.jpg" alt="Logo" aria-haspopup="true">\n<p-contextMenu [target]="img" [model]="items"></p-contextMenu>\n'),l.Rb(),l.Pb(),l.Qb(263,"app-code",10),l.Kb(),l.Ec(264,"\nexport class ContextMenuDemo {\n\n    items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [\n            {\n               label:'File',\n               icon:'pi pi-fw pi-file',\n               items:[\n                  {\n                     label:'New',\n                     icon:'pi pi-fw pi-plus',\n                     items:[\n                        {\n                           label:'Bookmark',\n                           icon:'pi pi-fw pi-bookmark'\n                        },\n                        {\n                           label:'Video',\n                           icon:'pi pi-fw pi-video'\n                        },\n\n                     ]\n                  },\n                  {\n                     label:'Delete',\n                     icon:'pi pi-fw pi-trash'\n                  },\n                  {\n                     separator:true\n                  },\n                  {\n                     label:'Export',\n                     icon:'pi pi-fw pi-external-link'\n                  }\n               ]\n            },\n            {\n               label:'Edit',\n               icon:'pi pi-fw pi-pencil',\n               items:[\n                  {\n                     label:'Left',\n                     icon:'pi pi-fw pi-align-left'\n                  },\n                  {\n                     label:'Right',\n                     icon:'pi pi-fw pi-align-right'\n                  },\n                  {\n                     label:'Center',\n                     icon:'pi pi-fw pi-align-center'\n                  },\n                  {\n                     label:'Justify',\n                     icon:'pi pi-fw pi-align-justify'\n                  },\n\n               ]\n            },\n            {\n               label:'Users',\n               icon:'pi pi-fw pi-user',\n               items:[\n                  {\n                     label:'New',\n                     icon:'pi pi-fw pi-user-plus',\n\n                  },\n                  {\n                     label:'Delete',\n                     icon:'pi pi-fw pi-user-minus',\n\n                  },\n                  {\n                     label:'Search',\n                     icon:'pi pi-fw pi-users',\n                     items:[\n                        {\n                           label:'Filter',\n                           icon:'pi pi-fw pi-filter',\n                           items:[\n                              {\n                                 label:'Print',\n                                 icon:'pi pi-fw pi-print'\n                              }\n                           ]\n                        },\n                        {\n                           icon:'pi pi-fw pi-bars',\n                           label:'List'\n                        }\n                     ]\n                  }\n               ]\n            },\n            {\n               label:'Events',\n               icon:'pi pi-fw pi-calendar',\n               items:[\n                  {\n                     label:'Edit',\n                     icon:'pi pi-fw pi-pencil',\n                     items:[\n                        {\n                           label:'Save',\n                           icon:'pi pi-fw pi-calendar-plus'\n                        },\n                        {\n                           label:'Delete',\n                           icon:'pi pi-fw pi-calendar-minus'\n                        },\n\n                     ]\n                  },\n                  {\n                     label:'Archieve',\n                     icon:'pi pi-fw pi-calendar-times',\n                     items:[\n                        {\n                           label:'Remove',\n                           icon:'pi pi-fw pi-calendar-minus'\n                        }\n                     ]\n                  }\n               ]\n            },\n            {\n               separator:true\n            },\n            {\n               label:'Quit',\n               icon:'pi pi-fw pi-power-off'\n            }\n         ];\n    }\n\n}\n"),l.Rb(),l.Pb(),l.Pb(),l.Qb(265,"p-tabPanel",19),l.Cc(266,u,1,0,"ng-template",20),l.Pb(),l.Pb(),l.Pb()),2&e){var n=l.uc(10);l.xb(11),l.ic("target",n)("model",t.items),l.xb(12),l.ic("routerLink",l.kc(4,g)),l.xb(185),l.ic("routerLink",l.kc(5,P))}},directives:[b.a,s.a,r.b,r.a,p.a,c.f,d.c],encapsulation:2}),h),Q=((f=n(function t(){e(this,t)})).\u0275mod=l.Hb({type:f}),f.\u0275inj=l.Gb({factory:function(e){return new(e||f)},imports:[[c.g.forChild([{path:"",component:v}])],c.g]}),f),w=a("pjHw"),E=a("faTn"),y=((m=n(function t(){e(this,t)})).\u0275mod=l.Hb({type:m}),m.\u0275inj=l.Gb({factory:function(e){return new(e||m)},imports:[[o.b,Q,w.a,E.a,p.b,b.b]]}),m)},faTn:function(e,t,n){"use strict";var i=n("+jnZ");n.d(t,"a",function(){return i.c})}}])}();