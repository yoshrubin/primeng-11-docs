(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{KumV:function(t,n,c){"use strict";c.r(n),c.d(n,"ColorsDemoModule",function(){return h});var e=c("ofXK"),o=c("tyNb"),i=c("vtIa"),r=c("fXoL"),b=c("OXhD");const s=function(t,n){return{backgroundColor:t,color:n}};function a(t,n){if(1&t&&(r.Qb(0,"div",11),r.Ec(1),r.Pb()),2&t){const t=r.cc().$implicit,n=r.cc().$implicit;r.ic("ngStyle",r.mc(3,s,"var(--"+n+"-"+t,t>500?"#fff":"#000")),r.xb(1),r.Hc(" ",n,"-",t," ")}}function l(t,n){if(1&t&&(r.Qb(0,"div"),r.Cc(1,a,2,6,"div",10),r.Pb()),2&t){const t=n.$implicit;r.xb(1),r.ic("ngIf",0!==t)}}function d(t,n){if(1&t&&(r.Qb(0,"div",9),r.Cc(1,l,2,1,"div",8),r.Pb()),2&t){const t=r.cc();r.xb(1),r.ic("ngForOf",t.shades)}}function f(t,n){if(1&t&&(r.Qb(0,"div"),r.Qb(1,"div",11),r.Ec(2),r.Pb(),r.Pb()),2&t){const t=n.$implicit,c=r.cc();r.xb(1),r.ic("ngStyle",r.mc(2,s,"var(--surface-"+t,c.config.dark?t>400?"#000":"#fff":t>500?"#fff":"#000")),r.xb(1),r.Gc(" surface-",t," ")}}let p=(()=>{class t{constructor(t){this.configService=t,this.colors=["blue","green","yellow","cyan","pink","indigo","teal","orange","bluegray","purple","gray"],this.shades=[0,50,100,200,300,400,500,600,700,800,900]}ngOnInit(){this.config=this.configService.config,this.subscription=this.configService.configUpdate$.subscribe(t=>this.config=t)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(r.Jb(i.a))},t.\u0275cmp=r.Db({type:t,selectors:[["ng-component"]],decls:76,vars:2,consts:[[1,"content-section","documentation","implementation"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"card"],[1,"p-d-flex","p-flex-wrap"],["class","color-stack p-mr-6 p-mb-6",4,"ngFor","ngForOf"],[1,"color-stack"],[4,"ngFor","ngForOf"],[1,"color-stack","p-mr-6","p-mb-6"],["class","color-box",3,"ngStyle",4,"ngIf"],[1,"color-box",3,"ngStyle"]],template:function(t,n){1&t&&(r.Qb(0,"div",0),r.Qb(1,"h1"),r.Ec(2,"Colors"),r.Pb(),r.Qb(3,"p"),r.Ec(4,"Each PrimeNG theme exports its own color palette."),r.Pb(),r.Qb(5,"h5"),r.Ec(6,"Getting Started"),r.Pb(),r.Qb(7,"p"),r.Ec(8,"Colors are exported as CSS variables and used with the standard "),r.Qb(9,"i"),r.Ec(10,"var"),r.Pb(),r.Ec(11," syntax such as "),r.Qb(12,"i"),r.Ec(13,"var(--text-color)"),r.Pb(),r.Ec(14,"."),r.Pb(),r.Qb(15,"app-code",1),r.Kb(),r.Ec(16,"\n<span [ngStyle]=\"{color:'var(--text-color)'}\"></span>\n"),r.Rb(),r.Pb(),r.Qb(17,"h5"),r.Ec(18,"General Colors"),r.Pb(),r.Qb(19,"p"),r.Ec(20,"These are common variables used throughout the theme."),r.Pb(),r.Qb(21,"div",2),r.Qb(22,"table",3),r.Qb(23,"thead"),r.Qb(24,"tr"),r.Qb(25,"th"),r.Ec(26,"Variable"),r.Pb(),r.Qb(27,"th"),r.Ec(28,"Description"),r.Pb(),r.Pb(),r.Pb(),r.Qb(29,"tbody"),r.Qb(30,"tr"),r.Qb(31,"td"),r.Qb(32,"i"),r.Ec(33,"--text-color"),r.Pb(),r.Pb(),r.Qb(34,"td"),r.Ec(35,"Font text color."),r.Pb(),r.Pb(),r.Qb(36,"tr"),r.Qb(37,"td"),r.Qb(38,"i"),r.Ec(39,"--text-secondary-color"),r.Pb(),r.Pb(),r.Qb(40,"td"),r.Ec(41,"Muted font text color with a secondary level."),r.Pb(),r.Pb(),r.Qb(42,"tr"),r.Qb(43,"td"),r.Qb(44,"i"),r.Ec(45,"--primary-color"),r.Pb(),r.Pb(),r.Qb(46,"td"),r.Ec(47,"Primary color of the theme."),r.Pb(),r.Pb(),r.Qb(48,"tr"),r.Qb(49,"td"),r.Qb(50,"i"),r.Ec(51,"--primary-color-text"),r.Pb(),r.Pb(),r.Qb(52,"td"),r.Ec(53,"Text color when background is primary color."),r.Pb(),r.Pb(),r.Qb(54,"tr"),r.Qb(55,"td"),r.Qb(56,"i"),r.Ec(57,"--font-family"),r.Pb(),r.Pb(),r.Qb(58,"td"),r.Ec(59,"Font family of the theme."),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(60,"h5"),r.Ec(61,"Color Palette"),r.Pb(),r.Qb(62,"p"),r.Ec(63,"A palette consists of 9 colors where each color provides tints/shades from 50 to 900."),r.Pb(),r.Qb(64,"app-code",1),r.Kb(),r.Ec(65,"\n<div [ngStyle]=\"{backgroundColor:'var(--blue-500)'}\"></div>\n"),r.Rb(),r.Pb(),r.Qb(66,"div",4),r.Qb(67,"div",5),r.Cc(68,d,2,1,"div",6),r.Pb(),r.Pb(),r.Qb(69,"h5"),r.Ec(70,"Surfaces"),r.Pb(),r.Qb(71,"p"),r.Ec(72,"In addition, a theme brings a special palette called surfaces that can be used as the base when designing the surface layers and separators."),r.Pb(),r.Qb(73,"div",4),r.Qb(74,"div",7),r.Cc(75,f,3,5,"div",8),r.Pb(),r.Pb(),r.Pb()),2&t&&(r.xb(68),r.ic("ngForOf",n.colors),r.xb(7),r.ic("ngForOf",n.shades))},directives:[b.a,e.k,e.l,e.m],styles:[".color-stack[_ngcontent-%COMP%] {\n            display: flex;\n            flex-direction: column;\n        }\n        \n        .color-box[_ngcontent-%COMP%] {\n            width: 2.5rem;\n            display: flex;\n            align-items: center;\n            padding: 1rem;\n            width: 250px;\n            font-weight: bold;\n        }\n        \n        .sample-layout[_ngcontent-%COMP%] {\n            width: 375px;\n        }"]}),t})(),u=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[o.g.forChild([{path:"",component:p}])],o.g]}),t})(),h=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[e.b,b.b,u]]}),t})()},OXhD:function(t,n,c){"use strict";c.d(n,"a",function(){return b}),c.d(n,"b",function(){return s});var e=c("ofXK"),o=c("fXoL");const i=["code"],r=["*"];let b=(()=>{class t{constructor(t){this.el=t,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return t.\u0275fac=function(n){return new(n||t)(o.Jb(o.l))},t.\u0275cmp=o.Db({type:t,selectors:[["app-code"]],viewQuery:function(t,n){if(1&t&&o.Jc(i,!0),2&t){let t;o.tc(t=o.Zb())&&(n.codeViewChild=t.first)}},inputs:{lang:"lang"},ngContentSelectors:r,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(t,n){1&t&&(o.hc(),o.Qb(0,"pre",0),o.Qb(1,"code",null,1),o.gc(3),o.Ec(4,"\n"),o.Pb(),o.Pb()),2&t&&o.ic("ngClass","language-"+n.lang)},directives:[e.j],encapsulation:2}),t})(),s=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(n){return new(n||t)},imports:[[e.b]]}),t})()}}]);