!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";Number.GOLDENRATIO=(1+Math.sqrt(5))/2,Number.prototype.round=function(){return Math.round(this)},Number.prototype.floor=function(){return Math.floor(this)},Number.prototype.ceil=function(){return Math.ceil(this)},Number.prototype.pad=function(t,e){const n=String(this).split(".");if(n.length>1){let r=n[0];const o=r.length;let i=n[1];const u=i.length;if(o<t){r="0".repeat(t-o)+r}if(u<e){i+="0".repeat(e-u)}return`${r}.${i}`}const r=n[0],o=t-r.length;return"0".repeat(o)+r},Number.prototype.degToRad=function(){return this*(Math.PI/180)},Number.prototype.radToDegree=function(){return this/(Math.PI/180)}});
