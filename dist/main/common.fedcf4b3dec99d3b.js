"use strict";(self.webpackChunkcliniva=self.webpackChunkcliniva||[]).push([[592],{20773:(C,v,o)=>{o.d(v,{Ou:()=>d,Cq:()=>w});var m=o(63191),p=o(70925),f=o(69808),e=o(5e3),_=o(90508),h=o(76360),i=o(50727),s=o(29071);function u(a,r){if(1&a&&(e.O4$(),e._UZ(0,"circle",4)),2&a){const t=e.oxw(),n=e.MAs(1);e.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(n)),e.uIk("r",t._getCircleRadius())}}function l(a,r){if(1&a&&(e.O4$(),e._UZ(0,"circle",4)),2&a){const t=e.oxw(),n=e.MAs(1);e.Udp("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(n)),e.uIk("r",t._getCircleRadius())}}const L=(0,_.pj)(class{constructor(a){this._elementRef=a}},"primary"),O=new e.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function T(){return{diameter:100}}});class d extends L{constructor(r,t,n,g,c,S,y,A){super(r),this._document=n,this._diameter=100,this._value=0,this._resizeSubscription=i.w0.EMPTY,this.mode="determinate";const M=d._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),M.has(n.head)||M.set(n.head,new Set([100])),this._noopAnimations="NoopAnimations"===g&&!!c&&!c._forceAnimations,"mat-spinner"===r.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),c&&(c.diameter&&(this.diameter=c.diameter),c.strokeWidth&&(this.strokeWidth=c.strokeWidth)),t.isBrowser&&t.SAFARI&&y&&S&&A&&(this._resizeSubscription=y.change(150).subscribe(()=>{"indeterminate"===this.mode&&A.run(()=>S.markForCheck())}))}get diameter(){return this._diameter}set diameter(r){this._diameter=(0,m.su)(r),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(r){this._strokeWidth=(0,m.su)(r)}get value(){return"determinate"===this.mode?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,(0,m.su)(r)))}ngOnInit(){const r=this._elementRef.nativeElement;this._styleRoot=(0,p.kV)(r)||this._document.head,this._attachStyleNode(),r.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const r=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${r} ${r}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(r){var t;const n=50*(null!==(t=r.currentScale)&&void 0!==t?t:1);return`${n}% ${n}%`}_attachStyleNode(){const r=this._styleRoot,t=this._diameter,n=d._diameters;let g=n.get(r);if(!g||!g.has(t)){const c=this._document.createElement("style");c.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),c.textContent=this._getAnimationText(),r.appendChild(c),g||(g=new Set,n.set(r,g)),g.add(t)}}_getAnimationText(){const r=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*r).replace(/END_VALUE/g,""+.2*r).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}d._diameters=new WeakMap,d.\u0275fac=function(r){return new(r||d)(e.Y36(e.SBq),e.Y36(p.t4),e.Y36(f.K0,8),e.Y36(h.Qb,8),e.Y36(O),e.Y36(e.sBO),e.Y36(s.rL),e.Y36(e.R0b))},d.\u0275cmp=e.Xpm({type:d,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(r,t){2&r&&(e.uIk("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),e.Udp("width",t.diameter,"px")("height",t.diameter,"px"),e.ekj("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[e.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(r,t){1&r&&(e.O4$(),e.TgZ(0,"svg",0,1),e.YNc(2,u,1,11,"circle",2),e.YNc(3,l,1,9,"circle",3),e.qZA()),2&r&&(e.Udp("width",t.diameter,"px")("height",t.diameter,"px"),e.Q6J("ngSwitch","indeterminate"===t.mode),e.uIk("viewBox",t._getViewBox()),e.xp6(2),e.Q6J("ngSwitchCase",!0),e.xp6(1),e.Q6J("ngSwitchCase",!1))},directives:[f.RF,f.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}\n"],encapsulation:2,changeDetection:0});let w=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[_.BQ,f.ez],_.BQ]}),a})()},20776:(C,v,o)=>{o.d(v,{Ns:()=>_});var m=o(5e3);const f=new m.OlP("NGX_ECHARTS_CONFIG");let _=(()=>{class h{static forRoot(s){return{ngModule:h,providers:[{provide:f,useValue:s}]}}static forChild(){return{ngModule:h}}}return h.\u0275fac=function(s){return new(s||h)},h.\u0275mod=m.oAB({type:h}),h.\u0275inj=m.cJS({imports:[[]]}),h})()}}]);