(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"6qZu":function(e,t,n){"use strict";n.r(t),n.d(t,"PanelDemoModule",function(){return k});var i=n("ofXK"),a=n("tyNb"),o=n("ByAP"),c=n("fXoL"),l=n("K+Em"),b=n("ZwlE"),s=n("Qx9H"),r=n("drlH"),p=n("+jnZ"),d=n("OXhD"),u=n("txK1");function m(e,t){if(1&e){const e=c.Sb();c.Qb(0,"button",19),c.Yb("click",function(t){return c.vc(e),c.uc(3).toggle(t)}),c.Lb(1,"span",20),c.Pb(),c.Lb(2,"p-menu",21,22)}if(2&e){const e=c.cc();c.xb(2),c.ic("model",e.items)("popup",!0)}}function g(e,t){1&e&&c.Lb(0,"iframe",23)}const h=function(){return["/theming"]};let P=(()=>{class e{constructor(e){this.messageService=e}ngOnInit(){this.items=[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}}]},{label:"Navigate",items:[{label:"Angular",icon:"pi pi-external-link",url:"http://angular.io"},{label:"Router",icon:"pi pi-upload",routerLink:"/fileupload"}]}]}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(o.i))},e.\u0275cmp=c.Db({type:e,selectors:[["ng-component"]],features:[c.wb([o.i])],decls:303,vars:3,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","panel","stackblitz","panel-demo"],[1,"content-section","implementation"],["header","Header"],["header","Header",3,"toggleable"],["pTemplate","icons"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/panel","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-panel-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],[1,"p-panel-header-icon","p-link",3,"click"],[1,"pi","pi-cog"],["id","config_menu",3,"model","popup"],["menu",""],["src",c.Ic("https://stackblitz.com/edit/primeng-panel-demo?embed=1"),2,"width","100%","height","768px","border","none"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"h1"),c.Ec(3,"Panel"),c.Pb(),c.Qb(4,"p"),c.Ec(5,"Panel is a container with the optional content toggle feature."),c.Pb(),c.Pb(),c.Lb(6,"app-demoActions",2),c.Pb(),c.Qb(7,"div",3),c.Qb(8,"h5"),c.Ec(9,"Regular"),c.Pb(),c.Qb(10,"p-panel",4),c.Qb(11,"p"),c.Ec(12,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.Pb(),c.Pb(),c.Qb(13,"h5"),c.Ec(14,"Advanced"),c.Pb(),c.Qb(15,"p-panel",5),c.Cc(16,m,4,2,"ng-template",6),c.Qb(17,"p"),c.Ec(18,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.Pb(),c.Pb(),c.Lb(19,"p-toast"),c.Pb(),c.Qb(20,"div",7),c.Qb(21,"p-tabView"),c.Qb(22,"p-tabPanel",8),c.Qb(23,"h5"),c.Ec(24,"Import"),c.Pb(),c.Qb(25,"app-code",9),c.Kb(),c.Ec(26,"\nimport {PanelModule} from 'primeng/panel';\n"),c.Rb(),c.Pb(),c.Qb(27,"h5"),c.Ec(28,"Getting Started"),c.Pb(),c.Qb(29,"p"),c.Ec(30,"Panel is defined with p-panel element."),c.Pb(),c.Qb(31,"app-code",10),c.Kb(),c.Ec(32,'\n<p-panel header="Title">\n    Content\n</p-panel>\n'),c.Rb(),c.Pb(),c.Qb(33,"h5"),c.Ec(34,"Toggleable"),c.Pb(),c.Qb(35,"p"),c.Ec(36,"Content of the panel can be expanded and collapsed using "),c.Qb(37,"i"),c.Ec(38,"toggleable"),c.Pb(),c.Ec(39,' option, default state is defined with collapsed option. By default, toggle icon is used to toggle the contents whereas setting toggler to "header" enables clicking anywhere in the header to trigger a toggle. '),c.Pb(),c.Qb(40,"app-code",10),c.Kb(),c.Ec(41,'\n<p-panel header="Title" [toggleable]="true">\n    Content\n</p-panel>\n'),c.Rb(),c.Pb(),c.Qb(42,"h5"),c.Ec(43,"Header and Footer Content"),c.Pb(),c.Qb(44,"p"),c.Ec(45,"Header and Footers sections can be customized using "),c.Qb(46,"i"),c.Ec(47,"header"),c.Pb(),c.Ec(48," and "),c.Qb(49,"i"),c.Ec(50,"footer"),c.Pb(),c.Ec(51," templates."),c.Pb(),c.Qb(52,"app-code",10),c.Kb(),c.Ec(53,'\n<p-panel >\n    <ng-template pTemplate="header">\n        Header content here\n    </ng-template>\n    Body Content\n    <ng-template pTemplate="footer">\n        Footer content here\n    </ng-template>\n</p-panel>\n'),c.Rb(),c.Pb(),c.Qb(54,"h5"),c.Ec(55,"Custom Icons"),c.Pb(),c.Qb(56,"p"),c.Ec(57,"Additional icons can be placed at the header section of the panel using the special "),c.Qb(58,"i"),c.Ec(59,"icons"),c.Pb(),c.Ec(60," selector. For a unified look, it is suggest to add "),c.Qb(61,"i"),c.Ec(62,".p-panel-header-icon"),c.Pb(),c.Ec(63," class to your icons."),c.Pb(),c.Qb(64,"app-code",10),c.Kb(),c.Ec(65,'\n<p-panel>\n<ng-template pTemplate="icons">\n    <button pButton class="p-panel-header-icon p-link" (click)="menu.toggle($event)">\n        <span class="pi pi-cog"></span>\n    </button>\n    <p-menu #menu id="config_menu" [model]="items" [popup]="true"></p-menu>\n</ng-template>\n'),c.Rb(),c.Pb(),c.Qb(66,"h5"),c.Ec(67,"Animation Configuration"),c.Pb(),c.Qb(68,"p"),c.Ec(69,"Transition of the toggle animation can be customized using the "),c.Qb(70,"i"),c.Ec(71,"transitionOptions"),c.Pb(),c.Ec(72," property with a default value as "),c.Qb(73,"b"),c.Ec(74,"400ms cubic-bezier(0.86, 0, 0.07, 1)"),c.Pb(),c.Ec(75,", example below disables the animation altogether."),c.Pb(),c.Qb(76,"app-code",10),c.Kb(),c.Ec(77,"\n<p-panel [transitionOptions]=\"'0ms'\">\n</p-panel>\n"),c.Rb(),c.Pb(),c.Qb(78,"h5"),c.Ec(79,"Properties"),c.Pb(),c.Qb(80,"div",11),c.Qb(81,"table",12),c.Qb(82,"thead"),c.Qb(83,"tr"),c.Qb(84,"th"),c.Ec(85,"Name"),c.Pb(),c.Qb(86,"th"),c.Ec(87,"Type"),c.Pb(),c.Qb(88,"th"),c.Ec(89,"Default"),c.Pb(),c.Qb(90,"th"),c.Ec(91,"Description"),c.Pb(),c.Pb(),c.Pb(),c.Qb(92,"tbody"),c.Qb(93,"tr"),c.Qb(94,"td"),c.Ec(95,"header"),c.Pb(),c.Qb(96,"td"),c.Ec(97,"string"),c.Pb(),c.Qb(98,"td"),c.Ec(99,"null"),c.Pb(),c.Qb(100,"td"),c.Ec(101,"Header text of the panel."),c.Pb(),c.Pb(),c.Qb(102,"tr"),c.Qb(103,"td"),c.Ec(104,"toggleable"),c.Pb(),c.Qb(105,"td"),c.Ec(106,"boolean"),c.Pb(),c.Qb(107,"td"),c.Ec(108,"false"),c.Pb(),c.Qb(109,"td"),c.Ec(110,"Defines if content of panel can be expanded and collapsed."),c.Pb(),c.Pb(),c.Qb(111,"tr"),c.Qb(112,"td"),c.Ec(113,"collapsed"),c.Pb(),c.Qb(114,"td"),c.Ec(115,"boolean"),c.Pb(),c.Qb(116,"td"),c.Ec(117,"false"),c.Pb(),c.Qb(118,"td"),c.Ec(119,"Defines the initial state of panel content, supports one or two-way binding as well."),c.Pb(),c.Pb(),c.Qb(120,"tr"),c.Qb(121,"td"),c.Ec(122,"style"),c.Pb(),c.Qb(123,"td"),c.Ec(124,"string"),c.Pb(),c.Qb(125,"td"),c.Ec(126,"null"),c.Pb(),c.Qb(127,"td"),c.Ec(128,"Inline style of the component."),c.Pb(),c.Pb(),c.Qb(129,"tr"),c.Qb(130,"td"),c.Ec(131,"styleClass"),c.Pb(),c.Qb(132,"td"),c.Ec(133,"string"),c.Pb(),c.Qb(134,"td"),c.Ec(135,"null"),c.Pb(),c.Qb(136,"td"),c.Ec(137,"Style class of the component."),c.Pb(),c.Pb(),c.Qb(138,"tr"),c.Qb(139,"td"),c.Ec(140,"expandIcon"),c.Pb(),c.Qb(141,"td"),c.Ec(142,"string"),c.Pb(),c.Qb(143,"td"),c.Ec(144,"pi pi-plus"),c.Pb(),c.Qb(145,"td"),c.Ec(146,"Expand icon of the toggle button."),c.Pb(),c.Pb(),c.Qb(147,"tr"),c.Qb(148,"td"),c.Ec(149,"collapseIcon"),c.Pb(),c.Qb(150,"td"),c.Ec(151,"string"),c.Pb(),c.Qb(152,"td"),c.Ec(153,"pi pi-minus"),c.Pb(),c.Qb(154,"td"),c.Ec(155,"Collapsed icon of the toggle button."),c.Pb(),c.Pb(),c.Qb(156,"tr"),c.Qb(157,"td"),c.Ec(158,"showHeader"),c.Pb(),c.Qb(159,"td"),c.Ec(160,"boolean"),c.Pb(),c.Qb(161,"td"),c.Ec(162,"true"),c.Pb(),c.Qb(163,"td"),c.Ec(164,"Specifies if header of panel cannot be displayed."),c.Pb(),c.Pb(),c.Qb(165,"tr"),c.Qb(166,"td"),c.Ec(167,"transitionOptions"),c.Pb(),c.Qb(168,"td"),c.Ec(169,"string"),c.Pb(),c.Qb(170,"td"),c.Ec(171,"400ms cubic-bezier(0.86, 0, 0.07, 1)"),c.Pb(),c.Qb(172,"td"),c.Ec(173,"Transition options of the animation."),c.Pb(),c.Pb(),c.Qb(174,"tr"),c.Qb(175,"td"),c.Ec(176,"toggler"),c.Pb(),c.Qb(177,"td"),c.Ec(178,"string"),c.Pb(),c.Qb(179,"td"),c.Ec(180,"icon"),c.Pb(),c.Qb(181,"td"),c.Ec(182,'Specifies the toggler element to toggle the panel content, valid values are "icon" and "header".'),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(183,"h5"),c.Ec(184,"Events"),c.Pb(),c.Qb(185,"div",11),c.Qb(186,"table",12),c.Qb(187,"thead"),c.Qb(188,"tr"),c.Qb(189,"th"),c.Ec(190,"Name"),c.Pb(),c.Qb(191,"th"),c.Ec(192,"Parameters"),c.Pb(),c.Qb(193,"th"),c.Ec(194,"Description"),c.Pb(),c.Pb(),c.Pb(),c.Qb(195,"tbody"),c.Qb(196,"tr"),c.Qb(197,"td"),c.Ec(198,"onBeforeToggle"),c.Pb(),c.Qb(199,"td"),c.Ec(200,"event.originalEvent: browser event"),c.Lb(201,"br"),c.Ec(202," event.collapsed: state as a boolean"),c.Pb(),c.Qb(203,"td"),c.Ec(204,"Callback to invoke before content toggle."),c.Pb(),c.Pb(),c.Qb(205,"tr"),c.Qb(206,"td"),c.Ec(207,"onAfterToggle"),c.Pb(),c.Qb(208,"td"),c.Ec(209,"event.originalEvent: browser event"),c.Lb(210,"br"),c.Ec(211," event.collapsed: state as a boolean"),c.Pb(),c.Qb(212,"td"),c.Ec(213,"Callback to invoke after content toggle."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(214,"h5"),c.Ec(215,"Templates"),c.Pb(),c.Qb(216,"div",11),c.Qb(217,"table",12),c.Qb(218,"thead"),c.Qb(219,"tr"),c.Qb(220,"th"),c.Ec(221,"Name"),c.Pb(),c.Qb(222,"th"),c.Ec(223,"Parameters"),c.Pb(),c.Pb(),c.Pb(),c.Qb(224,"tbody"),c.Qb(225,"tr"),c.Qb(226,"td"),c.Ec(227,"header"),c.Pb(),c.Qb(228,"td"),c.Ec(229,"-"),c.Pb(),c.Pb(),c.Qb(230,"tr"),c.Qb(231,"td"),c.Ec(232,"content"),c.Pb(),c.Qb(233,"td"),c.Ec(234,"-"),c.Pb(),c.Pb(),c.Qb(235,"tr"),c.Qb(236,"td"),c.Ec(237,"icons"),c.Pb(),c.Qb(238,"td"),c.Ec(239,"-"),c.Pb(),c.Pb(),c.Qb(240,"tr"),c.Qb(241,"td"),c.Ec(242,"footer"),c.Pb(),c.Qb(243,"td"),c.Ec(244,"-"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(245,"h5"),c.Ec(246,"Styling"),c.Pb(),c.Qb(247,"p"),c.Ec(248,"Following is the list of structural style classes, for theming classes visit "),c.Qb(249,"a",13),c.Ec(250,"theming page"),c.Pb(),c.Ec(251,"."),c.Pb(),c.Qb(252,"div",11),c.Qb(253,"table",12),c.Qb(254,"thead"),c.Qb(255,"tr"),c.Qb(256,"th"),c.Ec(257,"Name"),c.Pb(),c.Qb(258,"th"),c.Ec(259,"Element"),c.Pb(),c.Pb(),c.Pb(),c.Qb(260,"tbody"),c.Qb(261,"tr"),c.Qb(262,"td"),c.Ec(263,"p-panel"),c.Pb(),c.Qb(264,"td"),c.Ec(265,"Container element."),c.Pb(),c.Pb(),c.Qb(266,"tr"),c.Qb(267,"td"),c.Ec(268,"p-panel-titlebar"),c.Pb(),c.Qb(269,"td"),c.Ec(270,"Header section."),c.Pb(),c.Pb(),c.Qb(271,"tr"),c.Qb(272,"td"),c.Ec(273,"p-panel-title"),c.Pb(),c.Qb(274,"td"),c.Ec(275,"Title text of panel."),c.Pb(),c.Pb(),c.Qb(276,"tr"),c.Qb(277,"td"),c.Ec(278,"p-panel-titlebar-toggler"),c.Pb(),c.Qb(279,"td"),c.Ec(280,"Toggle icon."),c.Pb(),c.Pb(),c.Qb(281,"tr"),c.Qb(282,"td"),c.Ec(283,"p-panel-content"),c.Pb(),c.Qb(284,"td"),c.Ec(285,"Content of panel."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(286,"h5"),c.Ec(287,"Dependencies"),c.Pb(),c.Qb(288,"p"),c.Ec(289,"None."),c.Pb(),c.Pb(),c.Qb(290,"p-tabPanel",14),c.Qb(291,"a",15),c.Qb(292,"span"),c.Ec(293,"View on GitHub"),c.Pb(),c.Pb(),c.Qb(294,"a",16),c.Qb(295,"span"),c.Ec(296,"Edit in StackBlitz"),c.Pb(),c.Pb(),c.Qb(297,"app-code",10),c.Kb(),c.Ec(298,'\n<h5>Regular</h5>\n<p-panel header="Header">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</p-panel>\n\n<h5>Advanced</h5>\n<p-panel header="Header"  [toggleable]="true">\n    <ng-template pTemplate="icons">\n            <button pButton class="p-panel-header-icon p-link" (click)="menu.toggle($event)">\n                <span class="pi pi-cog"></span>\n            </button>\n            <p-menu #menu id="config_menu" [model]="items" [popup]="true"></p-menu>\n    </ng-template>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</p-panel>\n\n<p-toast></p-toast>\n'),c.Rb(),c.Pb(),c.Qb(299,"app-code",9),c.Kb(),c.Ec(300,"\nexport class PanelDemo implements OnInit {\n    items: MenuItem[];\n    \n    constructor(private messageService: MessageService) {}\n    \n    ngOnInit() {\n        this.items = [\n            {\n                label: 'Options',\n                items: [{\n                    label: 'Update',\n                    icon: 'pi pi-refresh',\n                    command: () => {\n                        this.update();\n                    }\n                },\n                {\n                    label: 'Delete',\n                    icon: 'pi pi-times',\n                    command: () => {\n                        this.delete();\n                    }\n                }\n            ]},\n            {\n                label: 'Navigate',\n                items: [{\n                    label: 'Angular',\n                    icon: 'pi pi-external-link',\n                    url: 'http://angular.io'\n                },\n                {\n                    label: 'Router',\n                    icon: 'pi pi-upload',\n                    routerLink: '/fileupload'\n                }\n            ]}\n        ];\n    }\n\n    update() {\n        this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});\n    }\n\n    delete() {\n        this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});\n    }\n}\n"),c.Rb(),c.Pb(),c.Pb(),c.Qb(301,"p-tabPanel",17),c.Cc(302,g,1,0,"ng-template",18),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.xb(15),c.ic("toggleable",!0),c.xb(234),c.ic("routerLink",c.kc(2,h)))},directives:[l.a,b.a,s.c,r.a,p.b,p.a,d.a,a.f,u.a],styles:["[_nghost-%COMP%]     .p-panel p{line-height:1.5;margin:0}"]}),e})(),Q=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[a.g.forChild([{path:"",component:P}])],a.g]}),e})();var f=n("Z038"),E=n("2Go5"),v=n("9gaq"),y=n("faTn");let k=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[i.b,Q,f.a,E.a,y.a,d.b,v.a,l.b]]}),e})()},Z038:function(e,t,n){"use strict";var i=n("ZwlE");n.d(t,"a",function(){return i.b})},ZwlE:function(e,t,n){"use strict";n.d(t,"a",function(){return C}),n.d(t,"b",function(){return T});var i=n("fXoL"),a=n("ofXK"),o=n("ByAP"),c=n("FmH6"),l=n("R0Ic"),b=n("kGCj");function s(e,t){if(1&e&&(i.Qb(0,"span",10),i.Ec(1),i.Pb()),2&e){const e=i.cc(2);i.yb("id",e.id+"_header"),i.xb(1),i.Fc(e.header)}}function r(e,t){1&e&&i.Mb(0)}function p(e,t){}function d(e,t){1&e&&i.Cc(0,p,0,0,"ng-template")}function u(e,t){if(1&e){const e=i.Sb();i.Qb(0,"button",11),i.Yb("click",function(t){return i.vc(e),i.cc(2).onIconClick(t)})("keydown.enter",function(t){return i.vc(e),i.cc(2).onIconClick(t)}),i.Lb(1,"span"),i.Pb()}if(2&e){const e=i.cc(2);i.yb("id",e.id+"-label")("aria-controls",e.id+"-content")("aria-expanded",!e.collapsed),i.xb(1),i.zb(e.collapsed?e.expandIcon:e.collapseIcon)}}function m(e,t){if(1&e){const e=i.Sb();i.Qb(0,"div",6),i.Yb("click",function(t){return i.vc(e),i.cc().onHeaderClick(t)}),i.Cc(1,s,2,2,"span",7),i.gc(2,1),i.Cc(3,r,1,0,"ng-container",4),i.Qb(4,"div",8),i.Cc(5,d,1,0,void 0,4),i.Cc(6,u,2,5,"button",9),i.Pb(),i.Pb()}if(2&e){const e=i.cc();i.yb("id",e.id+"-titlebar"),i.xb(1),i.ic("ngIf",e.header),i.xb(2),i.ic("ngTemplateOutlet",e.headerTemplate),i.xb(2),i.ic("ngTemplateOutlet",e.iconTemplate),i.xb(1),i.ic("ngIf",e.toggleable)}}function g(e,t){1&e&&i.Mb(0)}function h(e,t){1&e&&i.Mb(0)}function P(e,t){if(1&e&&(i.Qb(0,"div",12),i.gc(1,2),i.Cc(2,h,1,0,"ng-container",4),i.Pb()),2&e){const e=i.cc();i.xb(2),i.ic("ngTemplateOutlet",e.footerTemplate)}}const Q=["*",[["p-header"]],[["p-footer"]]],f=function(e){return{"p-panel p-component":!0,"p-panel-toggleable":e}},E=function(e){return{transitionParams:e,height:"0",opacity:"0"}},v=function(e){return{value:"hidden",params:e}},y=function(e){return{transitionParams:e,height:"*",opacity:"1"}},k=function(e){return{value:"visible",params:e}},w=["*","p-header","p-footer"];let x=0,C=(()=>{class e{constructor(e){this.el=e,this.collapsed=!1,this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new i.n,this.onBeforeToggle=new i.n,this.onAfterToggle=new i.n,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+x++}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break;case"content":this.contentTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"icons":this.iconTemplate=e.template;break;default:this.contentTemplate=e.template}})}onHeaderClick(e){"header"===this.toggler&&this.toggle(e)}onIconClick(e){"icon"===this.toggler&&this.toggle(e)}toggle(e){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(e):this.collapse(e)),e.preventDefault()}expand(e){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(e){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(e){this.animating=!1,this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed})}}return e.\u0275fac=function(t){return new(t||e)(i.Jb(i.l))},e.\u0275cmp=i.Db({type:e,selectors:[["p-panel"]],contentQueries:function(e,t,n){if(1&e&&(i.Cb(n,o.g,!0),i.Cb(n,o.l,!1)),2&e){let e;i.tc(e=i.Zb())&&(t.footerFacet=e.first),i.tc(e=i.Zb())&&(t.templates=e)}},inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:w,decls:7,vars:22,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],[1,"p-panel-icons"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(e,t){1&e&&(i.hc(Q),i.Qb(0,"div",0),i.Cc(1,m,7,5,"div",1),i.Qb(2,"div",2),i.Yb("@panelContent.done",function(e){return t.onToggleDone(e)}),i.Qb(3,"div",3),i.gc(4),i.Cc(5,g,1,0,"ng-container",4),i.Pb(),i.Cc(6,P,3,1,"div",5),i.Pb(),i.Pb()),2&e&&(i.zb(t.styleClass),i.ic("ngClass",i.lc(12,f,t.toggleable))("ngStyle",t.style),i.yb("id",t.id),i.xb(1),i.ic("ngIf",t.showHeader),i.xb(1),i.ic("@panelContent",t.collapsed?i.lc(16,v,i.lc(14,E,t.animating?t.transitionOptions:"0ms")):i.lc(20,k,i.lc(18,y,t.animating?t.transitionOptions:"0ms"))),i.yb("id",t.id+"-content")("aria-hidden",t.collapsed)("aria-labelledby",t.id+"-titlebar"),i.xb(3),i.ic("ngTemplateOutlet",t.contentTemplate),i.xb(1),i.ic("ngIf",t.footerFacet||t.footerTemplate))},directives:[a.j,a.m,a.l,a.p,b.a],styles:[".p-panel-header{display:flex;justify-content:space-between;align-items:center}.p-panel-title{line-height:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}"],encapsulation:2,data:{animation:[Object(l.m)("panelContent",[Object(l.j)("hidden",Object(l.k)({height:"0",overflow:"hidden"})),Object(l.j)("void",Object(l.k)({height:"{{height}}"}),{params:{height:"0"}}),Object(l.j)("visible",Object(l.k)({height:"*"})),Object(l.l)("visible <=> hidden",[Object(l.k)({overflow:"hidden"}),Object(l.e)("{{transitionParams}}")]),Object(l.l)("void => hidden",Object(l.e)("{{transitionParams}}")),Object(l.l)("void => visible",Object(l.e)("{{transitionParams}}"))])]},changeDetection:0}),e})(),T=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(t){return new(t||e)},imports:[[a.b,o.m,c.a],o.m]}),e})()}}]);