(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{vzl2:function(e,i,t){"use strict";t.r(i),t.d(i,"AccordionDemoModule",function(){return f});var a=t("ofXK"),o=t("tyNb"),n=t("ByAP"),c=t("fXoL"),u=t("K+Em"),s=t("drlH"),r=t("7Arz"),d=t("q5e5"),b=t("+jnZ"),l=t("OXhD"),p=t("Qx9H");function m(e,i){1&e&&c.Lb(0,"iframe",31)}const h=function(){return["/theming"]};let q=(()=>{class e{constructor(e){this.messageService=e,this.activeState=[!0,!1,!1]}onTabClose(e){this.messageService.add({severity:"info",summary:"Tab Closed",detail:"Index: "+e.index})}onTabOpen(e){this.messageService.add({severity:"info",summary:"Tab Expanded",detail:"Index: "+e.index})}toggle(e){this.activeState[e]=!this.activeState[e]}}return e.\u0275fac=function(i){return new(i||e)(c.Jb(n.i))},e.\u0275cmp=c.Db({type:e,selectors:[["ng-component"]],features:[c.wb([n.i])],decls:366,vars:11,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","accordion","stackblitz","accordion-demo"],[1,"content-section","implementation"],[1,"card"],["header","Header I",3,"selected"],["header","Header II"],["header","Header III"],[3,"multiple"],["header","Header I"],[1,"p-py-3"],["styleClass","p-button-text","label","Toggle 1st",3,"icon","click"],["styleClass","p-button-text p-ml-2","label","Toggle 2st",3,"icon","click"],["styleClass","p-button-text p-ml-2","label","Toggle 3st",3,"icon","click"],["header","Header I",3,"selected","selectedChange"],["header","Header II",3,"selected","selectedChange"],["header","Header III",3,"selected","selectedChange"],[3,"onClose","onOpen"],["header","Header IV",3,"disabled"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/accordion","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-accordion-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src",c.Ic("https://stackblitz.com/edit/primeng-accordion-demo?embed=1"),2,"width","100%","height","768px","border","none"]],template:function(e,i){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"h1"),c.Ec(3,"Accordion"),c.Pb(),c.Qb(4,"p"),c.Ec(5,"Accordion groups a collection of contents in tabs."),c.Pb(),c.Pb(),c.Lb(6,"app-demoActions",2),c.Pb(),c.Qb(7,"div",3),c.Lb(8,"p-toast"),c.Qb(9,"div",4),c.Qb(10,"h5"),c.Ec(11,"Default"),c.Pb(),c.Qb(12,"p-accordion"),c.Qb(13,"p-accordionTab",5),c.Qb(14,"p"),c.Ec(15,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.Pb(),c.Pb(),c.Qb(16,"p-accordionTab",6),c.Qb(17,"p"),c.Ec(18,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."),c.Pb(),c.Pb(),c.Qb(19,"p-accordionTab",7),c.Qb(20,"p"),c.Ec(21,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."),c.Pb(),c.Pb(),c.Pb(),c.Qb(22,"h5"),c.Ec(23,"Multiple"),c.Pb(),c.Qb(24,"p-accordion",8),c.Qb(25,"p-accordionTab",9),c.Qb(26,"p"),c.Ec(27,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.Pb(),c.Pb(),c.Qb(28,"p-accordionTab",6),c.Qb(29,"p"),c.Ec(30,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."),c.Pb(),c.Pb(),c.Qb(31,"p-accordionTab",7),c.Qb(32,"p"),c.Ec(33,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."),c.Pb(),c.Pb(),c.Pb(),c.Qb(34,"h5"),c.Ec(35,"Programmatic"),c.Pb(),c.Qb(36,"div",10),c.Qb(37,"p-button",11),c.Yb("click",function(){return i.toggle(0)}),c.Pb(),c.Qb(38,"p-button",12),c.Yb("click",function(){return i.toggle(1)}),c.Pb(),c.Qb(39,"p-button",13),c.Yb("click",function(){return i.toggle(2)}),c.Pb(),c.Pb(),c.Qb(40,"p-accordion"),c.Qb(41,"p-accordionTab",14),c.Yb("selectedChange",function(e){return i.activeState[0]=e}),c.Qb(42,"p"),c.Ec(43,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.Pb(),c.Pb(),c.Qb(44,"p-accordionTab",15),c.Yb("selectedChange",function(e){return i.activeState[1]=e}),c.Qb(45,"p"),c.Ec(46,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."),c.Pb(),c.Pb(),c.Qb(47,"p-accordionTab",16),c.Yb("selectedChange",function(e){return i.activeState[2]=e}),c.Qb(48,"p"),c.Ec(49,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."),c.Pb(),c.Pb(),c.Pb(),c.Qb(50,"h5"),c.Ec(51,"Tab Change Event"),c.Pb(),c.Qb(52,"p-accordion",17),c.Yb("onClose",function(e){return i.onTabClose(e)})("onOpen",function(e){return i.onTabOpen(e)}),c.Qb(53,"p-accordionTab",9),c.Qb(54,"p"),c.Ec(55,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.Pb(),c.Pb(),c.Qb(56,"p-accordionTab",6),c.Qb(57,"p"),c.Ec(58,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."),c.Pb(),c.Pb(),c.Qb(59,"p-accordionTab",7),c.Qb(60,"p"),c.Ec(61,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."),c.Pb(),c.Pb(),c.Qb(62,"p-accordionTab",18),c.Qb(63,"p"),c.Ec(64,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(65,"div",19),c.Qb(66,"p-tabView"),c.Qb(67,"p-tabPanel",20),c.Qb(68,"h5"),c.Ec(69,"Import"),c.Pb(),c.Qb(70,"app-code",21),c.Kb(),c.Ec(71,"\nimport {AccordionModule} from 'primeng/accordion';\n"),c.Rb(),c.Pb(),c.Qb(72,"h5"),c.Ec(73,"Getting Started"),c.Pb(),c.Qb(74,"p"),c.Ec(75,"Accordion element consists of one or more p-accordionTab elements. Title of the tab is defined using header attribute."),c.Pb(),c.Qb(76,"app-code",22),c.Kb(),c.Ec(77,'\n<p-accordion>\n    <p-accordionTab header="Header 1">\n       Content 1\n    </p-accordionTab>\n    <p-accordionTab header="Header 2">\n        Content 2\n    </p-accordionTab>\n    <p-accordionTab header="Header 3">\n        Content 3    \n    </p-accordionTab>\n</p-accordion>\n'),c.Rb(),c.Pb(),c.Qb(78,"h5"),c.Ec(79,"Selected"),c.Pb(),c.Qb(80,"p"),c.Ec(81,"Visibility of the content is specified with the selected property that supports one or two-way binding."),c.Pb(),c.Qb(82,"app-code",22),c.Kb(),c.Ec(83,'\n<p-accordion>\n    <p-accordionTab header="Header 1" [selected]="true">\n       Content 1\n    </p-accordionTab>\n    <p-accordionTab header="Header 2">\n        Content 2\n    </p-accordionTab>\n    <p-accordionTab header="Header 3">\n        Content 3    \n    </p-accordionTab>\n</p-accordion>\n'),c.Rb(),c.Pb(),c.Qb(84,"h5"),c.Ec(85,"Multiple"),c.Pb(),c.Qb(86,"p"),c.Ec(87,"By default only one tab at a time can be active, enabling multiple property changes this behavior to allow multiple tabs be active at the same time."),c.Pb(),c.Qb(88,"app-code",22),c.Kb(),c.Ec(89,'\n<p-accordion [multiple]="true">\n    <p-accordionTab header="Header 1">\n        Content 1\n    </p-accordionTab>\n    <p-accordionTab header="Header 2">\n        Content 2\n    </p-accordionTab>\n    <p-accordionTab header="Header 3">\n        Content 3    \n    </p-accordionTab>\n</p-accordion>\n'),c.Rb(),c.Pb(),c.Qb(90,"h5"),c.Ec(91,"Disabled"),c.Pb(),c.Qb(92,"p"),c.Ec(93,"A tab can be disabled by setting the disabled property to true."),c.Pb(),c.Qb(94,"app-code",22),c.Kb(),c.Ec(95,'\n<p-accordion>\n    <p-accordionTab header="Header 1" [disabled]="true">\n       Content 1\n    </p-accordionTab>\n    <p-accordionTab header="Header 2">\n        Content 2\n    </p-accordionTab>\n    <p-accordionTab header="Header 3">\n        Content 3    \n    </p-accordionTab>\n</p-accordion>\n'),c.Rb(),c.Pb(),c.Qb(96,"h5"),c.Ec(97,"Custom Content at Headers"),c.Pb(),c.Qb(98,"p"),c.Ec(99,"Custom content can be placed at an accordion header with header template."),c.Pb(),c.Qb(100,"app-code",22),c.Kb(),c.Ec(101,'\n<p-accordionTab>\n    <ng-template pTemplate="header">Header Content</ng-template>\n    <ng-template pTemplate="content">Body Content</ng-template>\n</p-accordionTab>\n'),c.Rb(),c.Pb(),c.Qb(102,"h5"),c.Ec(103,"Programmatic Control"),c.Pb(),c.Qb(104,"p"),c.Ec(105,"Tabs can be controlled programmatically using the "),c.Qb(106,"i"),c.Ec(107,"activeIndex"),c.Pb(),c.Ec(108," property of the accordion in general or the "),c.Qb(109,"i"),c.Ec(110,"selected"),c.Pb(),c.Ec(111," property of p-accordionTab individually."),c.Pb(),c.Qb(112,"app-code",22),c.Kb(),c.Ec(113,'\n<h5>Programmatic</h5>\n<div class="p-py-3">\n    <p-button [icon]="activeState[0] ? \'pi pi-minus\' : \'pi pi-plus\'" (click)="toggle(0)" styleClass="p-button-text" label="Toggle 1st"></p-button>\n    <p-button [icon]="activeState[1] ? \'pi pi-minus\' : \'pi pi-plus\'" (click)="toggle(1)" styleClass="p-button-text p-ml-2" label="Toggle 2st"></p-button>\n    <p-button [icon]="activeState[2] ? \'pi pi-minus\' : \'pi pi-plus\'" (click)="toggle(2)" styleClass="p-button-text p-ml-2" label="Toggle 3st"></p-button>\n</div>\n        \n<p-accordion>\n    <p-accordionTab header="Header I" [(selected)]="activeState[0]">\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </p-accordionTab>\n    <p-accordionTab header="Header II" [(selected)]="activeState[1]">\n        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n    </p-accordionTab>\n    <p-accordionTab header="Header III" [(selected)]="activeState[2]">\n        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n    </p-accordionTab>\n</p-accordion>\n'),c.Rb(),c.Pb(),c.Qb(114,"app-code",21),c.Kb(),c.Ec(115,"\nexport class AccordionDemo {\n    \n    activeState: boolean[] = [true, false, false];\n\n    toggle(index: number) {\n        this.activeState[index] = !this.activeState[index];\n    }\n}\n"),c.Rb(),c.Pb(),c.Qb(116,"h5"),c.Ec(117,"Lazy Loading"),c.Pb(),c.Qb(118,"p"),c.Ec(119,'Lazy loading helps initial load performance by only initializing the active tab, inactive tabs are not initialized until they get selected. A lazy loaded accordionTab contents are cached by default so that upon reselection, they are not created again. You may use cache property on AccordionTab to configure this behavior. A AccordionTab is specified as lazy when there is a ngTemplate with pTemplate="content" in it.'),c.Pb(),c.Qb(120,"app-code",22),c.Kb(),c.Ec(121,'\n<p-accordion>\n    <p-accordionTab header="Header 1">\n        Content 1\n    </p-accordionTab>\n    <p-accordionTab header="Header 2">\n        <ng-template pTemplate="content">\n            Complex Content to Lazy Load\n        </ng-template>\n    </p-accordionTab>\n    <p-accordionTab header="Header 3">\n        <ng-template pTemplate="content">\n            Complex Content to Lazy Load\n        </ng-template>\n    </p-accordionTab>\n</p-accordion>\n'),c.Rb(),c.Pb(),c.Qb(122,"app-code",21),c.Kb(),c.Ec(123,"\nexport class AccordionDemo {\n    \n    index: number = 0;\n\n    openNext() {\n        this.index = (this.index === 2) ? 0 : this.index + 1;\n    }\n    \n    openPrev() {\n        this.index = (this.index === 0) ? 2 : this.index - 1;\n    }\n}\n"),c.Rb(),c.Pb(),c.Qb(124,"h5"),c.Ec(125,"Animation Configuration"),c.Pb(),c.Qb(126,"p"),c.Ec(127,"Transition of the toggle animation can be customized using the transitionOptions property with a default value as "),c.Qb(128,"b"),c.Ec(129,"400ms cubic-bezier(0.86, 0, 0.07, 1)"),c.Pb(),c.Ec(130,", example below disables the animation altogether."),c.Pb(),c.Qb(131,"app-code",22),c.Kb(),c.Ec(132,'\n<p-accordionTab [transitionOptions]="\'0ms\'" header="Header 1">\n    Content\n</p-accordionTab>\n'),c.Rb(),c.Pb(),c.Qb(133,"h5"),c.Ec(134,"Properties for Accordion"),c.Pb(),c.Qb(135,"div",23),c.Qb(136,"table",24),c.Qb(137,"thead"),c.Qb(138,"tr"),c.Qb(139,"th"),c.Ec(140,"Name"),c.Pb(),c.Qb(141,"th"),c.Ec(142,"Type"),c.Pb(),c.Qb(143,"th"),c.Ec(144,"Default"),c.Pb(),c.Qb(145,"th"),c.Ec(146,"Description"),c.Pb(),c.Pb(),c.Pb(),c.Qb(147,"tbody"),c.Qb(148,"tr"),c.Qb(149,"td"),c.Ec(150,"multiple"),c.Pb(),c.Qb(151,"td"),c.Ec(152,"boolean"),c.Pb(),c.Qb(153,"td"),c.Ec(154,"false"),c.Pb(),c.Qb(155,"td"),c.Ec(156,"When enabled, multiple tabs can be activated at the same time."),c.Pb(),c.Pb(),c.Qb(157,"tr"),c.Qb(158,"td"),c.Ec(159,"style"),c.Pb(),c.Qb(160,"td"),c.Ec(161,"string"),c.Pb(),c.Qb(162,"td"),c.Ec(163,"null"),c.Pb(),c.Qb(164,"td"),c.Ec(165,"Inline style of the component."),c.Pb(),c.Pb(),c.Qb(166,"tr"),c.Qb(167,"td"),c.Ec(168,"styleClass"),c.Pb(),c.Qb(169,"td"),c.Ec(170,"string"),c.Pb(),c.Qb(171,"td"),c.Ec(172,"false"),c.Pb(),c.Qb(173,"td"),c.Ec(174,"Style class of the component."),c.Pb(),c.Pb(),c.Qb(175,"tr"),c.Qb(176,"td"),c.Ec(177,"activeIndex"),c.Pb(),c.Qb(178,"td"),c.Ec(179,"any"),c.Pb(),c.Qb(180,"td"),c.Ec(181,"null"),c.Pb(),c.Qb(182,"td"),c.Ec(183,"Index of the active tab or an array of indexes to change selected tab programmatically."),c.Pb(),c.Pb(),c.Qb(184,"tr"),c.Qb(185,"td"),c.Ec(186,"expandIcon"),c.Pb(),c.Qb(187,"td"),c.Ec(188,"string"),c.Pb(),c.Qb(189,"td"),c.Ec(190,"pi pi-fw pi-chevron-right"),c.Pb(),c.Qb(191,"td"),c.Ec(192,"Icon of a collapsed tab."),c.Pb(),c.Pb(),c.Qb(193,"tr"),c.Qb(194,"td"),c.Ec(195,"collapseIcon"),c.Pb(),c.Qb(196,"td"),c.Ec(197,"string"),c.Pb(),c.Qb(198,"td"),c.Ec(199,"pi pi-fw pi-chevron-down"),c.Pb(),c.Qb(200,"td"),c.Ec(201,"Icon of an expanded tab."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(202,"h5"),c.Ec(203,"Properties for AccordionTab"),c.Pb(),c.Qb(204,"div",23),c.Qb(205,"table",24),c.Qb(206,"thead"),c.Qb(207,"tr"),c.Qb(208,"th"),c.Ec(209,"Name"),c.Pb(),c.Qb(210,"th"),c.Ec(211,"Type"),c.Pb(),c.Qb(212,"th"),c.Ec(213,"Default"),c.Pb(),c.Qb(214,"th"),c.Ec(215,"Description"),c.Pb(),c.Pb(),c.Pb(),c.Qb(216,"tbody"),c.Qb(217,"tr"),c.Qb(218,"td"),c.Ec(219,"header"),c.Pb(),c.Qb(220,"td"),c.Ec(221,"string"),c.Pb(),c.Qb(222,"td"),c.Ec(223,"null"),c.Pb(),c.Qb(224,"td"),c.Ec(225,"Title of the tab."),c.Pb(),c.Pb(),c.Qb(226,"tr"),c.Qb(227,"td"),c.Ec(228,"selected"),c.Pb(),c.Qb(229,"td"),c.Ec(230,"boolean"),c.Pb(),c.Qb(231,"td"),c.Ec(232,"false"),c.Pb(),c.Qb(233,"td"),c.Ec(234,"Defines if the tab is active."),c.Pb(),c.Pb(),c.Qb(235,"tr"),c.Qb(236,"td"),c.Ec(237,"disabled"),c.Pb(),c.Qb(238,"td"),c.Ec(239,"boolean"),c.Pb(),c.Qb(240,"td"),c.Ec(241,"false"),c.Pb(),c.Qb(242,"td"),c.Ec(243,"Defines whether the tab can be selected."),c.Pb(),c.Pb(),c.Qb(244,"tr"),c.Qb(245,"td"),c.Ec(246,"transitionOptions"),c.Pb(),c.Qb(247,"td"),c.Ec(248,"string"),c.Pb(),c.Qb(249,"td"),c.Ec(250,"400ms cubic-bezier(0.86, 0, 0.07, 1)"),c.Pb(),c.Qb(251,"td"),c.Ec(252,"Transition options of the animation."),c.Pb(),c.Pb(),c.Qb(253,"tr"),c.Qb(254,"td"),c.Ec(255,"cache"),c.Pb(),c.Qb(256,"td"),c.Ec(257,"boolean"),c.Pb(),c.Qb(258,"td"),c.Ec(259,"true"),c.Pb(),c.Qb(260,"td"),c.Ec(261,"Whether a lazy loaded panel should avoid getting loaded again on reselection."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(262,"h5"),c.Ec(263,"Events"),c.Pb(),c.Qb(264,"div",23),c.Qb(265,"table",24),c.Qb(266,"thead"),c.Qb(267,"tr"),c.Qb(268,"th"),c.Ec(269,"Name"),c.Pb(),c.Qb(270,"th"),c.Ec(271,"Parameters"),c.Pb(),c.Qb(272,"th"),c.Ec(273,"Description"),c.Pb(),c.Pb(),c.Pb(),c.Qb(274,"tbody"),c.Qb(275,"tr"),c.Qb(276,"td"),c.Ec(277,"onClose"),c.Pb(),c.Qb(278,"td"),c.Ec(279," event.originalEvent: Click object"),c.Lb(280,"br"),c.Ec(281," event.index: Index of the tab "),c.Pb(),c.Qb(282,"td"),c.Ec(283,"Callback to invoke when an active tab is collapsed by clicking on the header."),c.Pb(),c.Pb(),c.Qb(284,"tr"),c.Qb(285,"td"),c.Ec(286,"onOpen"),c.Pb(),c.Qb(287,"td"),c.Ec(288," event.originalEvent: Click object"),c.Lb(289,"br"),c.Ec(290," event.index: Index of the tab "),c.Pb(),c.Qb(291,"td"),c.Ec(292,"Callback to invoke when a tab gets expanded."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(293,"app-code",22),c.Kb(),c.Ec(294,'\n<p-accordion (onOpen)="onTabOpen($event)">\n'),c.Rb(),c.Pb(),c.Qb(295,"app-code",21),c.Kb(),c.Ec(296,"\nonTabOpen(e) {\n    var index = e.index;\n}\n"),c.Rb(),c.Pb(),c.Qb(297,"h5"),c.Ec(298,"Templates"),c.Pb(),c.Qb(299,"div",23),c.Qb(300,"table",24),c.Qb(301,"thead"),c.Qb(302,"tr"),c.Qb(303,"th"),c.Ec(304,"Name"),c.Pb(),c.Qb(305,"th"),c.Ec(306,"Parameters"),c.Pb(),c.Pb(),c.Pb(),c.Qb(307,"tbody"),c.Qb(308,"tr"),c.Qb(309,"td"),c.Ec(310,"header"),c.Pb(),c.Qb(311,"td"),c.Ec(312,"-"),c.Pb(),c.Pb(),c.Qb(313,"tr"),c.Qb(314,"td"),c.Ec(315,"content"),c.Pb(),c.Qb(316,"td"),c.Ec(317,"-"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(318,"h5"),c.Ec(319,"Styling"),c.Pb(),c.Qb(320,"p"),c.Ec(321,"Following is the list of structural style classes, for theming classes visit "),c.Qb(322,"a",25),c.Ec(323,"theming page"),c.Pb(),c.Ec(324,"."),c.Pb(),c.Qb(325,"div",23),c.Qb(326,"table",24),c.Qb(327,"thead"),c.Qb(328,"tr"),c.Qb(329,"th"),c.Ec(330,"Name"),c.Pb(),c.Qb(331,"th"),c.Ec(332,"Element"),c.Pb(),c.Pb(),c.Pb(),c.Qb(333,"tbody"),c.Qb(334,"tr"),c.Qb(335,"td"),c.Ec(336,"p-accordion"),c.Pb(),c.Qb(337,"td"),c.Ec(338,"Container element"),c.Pb(),c.Pb(),c.Qb(339,"tr"),c.Qb(340,"td"),c.Ec(341,"p-accordion-header"),c.Pb(),c.Qb(342,"td"),c.Ec(343,"Header of a tab."),c.Pb(),c.Pb(),c.Qb(344,"tr"),c.Qb(345,"td"),c.Ec(346,"p-accordion-content"),c.Pb(),c.Qb(347,"td"),c.Ec(348,"Content of a tab."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(349,"h5"),c.Ec(350,"Dependencies"),c.Pb(),c.Qb(351,"p"),c.Ec(352,"None."),c.Pb(),c.Pb(),c.Qb(353,"p-tabPanel",26),c.Qb(354,"a",27),c.Qb(355,"span"),c.Ec(356,"View on GitHub"),c.Pb(),c.Pb(),c.Qb(357,"a",28),c.Qb(358,"span"),c.Ec(359,"Edit in StackBlitz"),c.Pb(),c.Pb(),c.Qb(360,"app-code",22),c.Kb(),c.Ec(361,'\n<h5>Default</h5>\n<p-accordion>\n    <p-accordionTab header="Header I" [selected]="true">\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </p-accordionTab>\n    <p-accordionTab header="Header II">\n        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n    </p-accordionTab>\n    <p-accordionTab header="Header III">\n        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n    </p-accordionTab>\n</p-accordion>\n\n<h5>Multiple</h5>\n<p-accordion [multiple]="true">\n    <p-accordionTab header="Header I">\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </p-accordionTab>\n    <p-accordionTab header="Header II">\n        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n    </p-accordionTab>\n    <p-accordionTab header="Header III">\n        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n    </p-accordionTab>\n</p-accordion>\n    \n<h5>Programmatic</h5>\n<div class="p-py-3">\n    <p-button [icon]="activeState[0] ? \'pi pi-minus\' : \'pi pi-plus\'" (click)="toggle(0)" styleClass="p-button-text" label="Toggle 1st"></p-button>\n    <p-button [icon]="activeState[1] ? \'pi pi-minus\' : \'pi pi-plus\'" (click)="toggle(1)" styleClass="p-button-text p-ml-2" label="Toggle 2st"></p-button>\n    <p-button [icon]="activeState[2] ? \'pi pi-minus\' : \'pi pi-plus\'" (click)="toggle(2)" styleClass="p-button-text p-ml-2" label="Toggle 3st"></p-button>\n</div>\n    \n<p-accordion>\n    <p-accordionTab header="Header I" [(selected)]="activeState[0]">\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </p-accordionTab>\n    <p-accordionTab header="Header II" [(selected)]="activeState[1]">\n        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n    </p-accordionTab>\n    <p-accordionTab header="Header III" [(selected)]="activeState[2]">\n        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n    </p-accordionTab>\n</p-accordion>\n\n<h5>Tab Change Event</h5>\n<p-accordion (onClose)="onTabClose($event)" (onOpen)="onTabOpen($event)">\n    <p-accordionTab header="Header I">\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </p-accordionTab>\n    <p-accordionTab header="Header II">\n        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n    </p-accordionTab>\n    <p-accordionTab header="Header III">\n        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n    </p-accordionTab>\n    <p-accordionTab header="Header IV" [disabled]="true">\n        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n    </p-accordionTab>\n</p-accordion>\n'),c.Rb(),c.Pb(),c.Qb(362,"app-code",21),c.Kb(),c.Ec(363,"\nimport {Component} from '@angular/core';\nimport {MessageService} from 'primeng/api';\n\n@Component({\n    templateUrl: './accordiondemo.html',\n    providers: [MessageService],\n    styleUrls: ['./accordiondemo.scss']\n})\nexport class AccordionDemo {\n    \n    activeState: boolean[] = [true, false, false];\n\n    constructor(private messageService: MessageService) {}\n\n    onTabClose(event) {\n        this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})\n    }\n    \n    onTabOpen(event) {\n        this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});\n    }\n\n    toggle(index: number) {\n        this.activeState[index] = !this.activeState[index];\n    }\n}\n"),c.Rb(),c.Pb(),c.Pb(),c.Qb(364,"p-tabPanel",29),c.Cc(365,m,1,0,"ng-template",30),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.xb(13),c.ic("selected",!0),c.xb(11),c.ic("multiple",!0),c.xb(13),c.ic("icon",i.activeState[0]?"pi pi-minus":"pi pi-plus"),c.xb(1),c.ic("icon",i.activeState[1]?"pi pi-minus":"pi pi-plus"),c.xb(1),c.ic("icon",i.activeState[2]?"pi pi-minus":"pi pi-plus"),c.xb(2),c.ic("selected",i.activeState[0]),c.xb(3),c.ic("selected",i.activeState[1]),c.xb(3),c.ic("selected",i.activeState[2]),c.xb(15),c.ic("disabled",!0),c.xb(260),c.ic("routerLink",c.kc(10,h)))},directives:[u.a,s.a,r.a,r.c,d.a,b.b,b.a,l.a,o.f,p.c],styles:["[_nghost-%COMP%]     .p-accordion p{line-height:1.5;margin:0}"]}),e})(),v=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(i){return new(i||e)},imports:[[o.g.forChild([{path:"",component:q}])],o.g]}),e})();var P=t("o4zN"),Q=t("rklm"),g=t("faTn"),E=t("2Go5");let f=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(i){return new(i||e)},imports:[[a.b,v,P.a,Q.a,g.a,E.a,l.b,u.b]]}),e})()}}]);